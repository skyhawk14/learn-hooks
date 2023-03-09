// Implement a function in JavaScript that retries promises N number of times with a delay between each call.

// const asyncFn = ()=>{
//     // Mock server response
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             if(Math.random()<0.1){
//                 res('resolved')
//             } else {
//                 rej('rejected')
//             }
//         },1000)
//     })
// }
function retryWithDelay(fn, retries = 3, delay = 50, finalError='Retry Failed'){
    return new Promise((resolve, reject)=>{
        if(retries<=0){
            reject(finalError)
            return
        }
        setTimeout(()=>{
            // console.log("Attempt",retries,"===>")
            return fn().then(resolve).catch(err=>{
                // console.log('Attemp failed') 
                retryWithDelay(fn, retries-1, delay,finalError).then(resolve)
                    .catch(reject);   
            })  
        },delay)
    })
}
// retryWithDelay(asyncFn, 3, 1500, 'Final Failed');

const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error('Not yet');
    }
  }
}

// // Test the code
const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log('success');
  await retryWithDelay(getTestFunc(), 3);
  console.log('will fail before getting here');
  console.log('after')
}

// Print the result
test().catch(console.error);
