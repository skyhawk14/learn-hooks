const asyncTask = function(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`Completing ${i}`), 100*i)
    });
}

let tasksList = [
    asyncTask(3),
    asyncTask(1),
    asyncTask(2)
]

async function executeInSeries(tasks){
    if(tasks.length<=0){
        return
    }
    let fn = tasks[0] // we can also use tasks.shift() , it will
                        // give first element and remaining will be inside tasks
    // /console.log(fn, tasks)
    let value = await fn
    console.log(value)
    executeInSeries(tasks.slice(1))
}

executeInSeries(tasksList)