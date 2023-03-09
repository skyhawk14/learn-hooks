const myPromiseAll = function(taskList){
    return new Promise((resolve, reject)=>{
        const result = []
        let completed = 0
        taskList.forEach((task, idx)=>{
            task.then((val)=>{
                completed++;
                result[idx]=val
                if(completed === taskList.length){
                    resolve(result)
                }
            }).catch(err=>{
                reject(err)
            })
        })
    })
}
function task(time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(time);
        }, time);
    });
}
const taskList = [task(1000), task(5000), task(3000)];
//run promise.all
myPromiseAll(taskList).then(results => {
    console.log("got results", results)
}).catch(console.error);

function task1(time) {
return new Promise(function (resolve, reject) {
    setTimeout(function () {
        if(time < 3000){
                reject("Rejected1");
        }else{
                resolve(time);
        }
    }, time);
    });
}
const taskList1 = [task1(1000), task1(5000), task1(3000)];
//run promise.all
myPromiseAll(taskList1).then(results => {
    console.log("got results", results)
}).catch(console.error);

// Note in the above program 2nd promise.All will get
// rejected first as it gets rejected while first one is still
// processing.