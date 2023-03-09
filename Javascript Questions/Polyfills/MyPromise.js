//Note: see below implementation
// https://medium.com/@manojsingh047/polyfill-for-javascript-promise-81053b284e37
const states = {
    PENDING: 0,
    FULFILLED: 1,
    REJECTED: 2
}

class MyPromise{
    constructor(callback){
        this.state = states.PENDING
        this.callback = callback
        this.value = undefined
        // not sure exactly what it is
        this.handlers = []
        try{
            callback(this._resolve, this._reject)
        }catch(error){
            this._reject(error)
        }
    }
    // helper functions for resolve and reject
    _resolve(value){
        this._handleUpdate(value, states.FULFILLED)
    }
    _reject(error){
        this._handleUpdate(error, states.REJECTED)
    }
    // method for handling the value and state update
    _handleUpdate(value, state){
        if (state === states.PENDING) {
            return;
        }
        setTimeout(() => {
            if (value instanceof MyPromise) {
                value.then(this._resolve, this._reject);
            }
            this.state = state;
            this.value = value;
            this._executeHandlers();
        }, 0)
    }
    // execute all the handlers
    // depending on the current state
    _executeHandlers = () => {
        if (this.state === states.PENDING) {
            return;
        }
        this.handlers.forEach((handler) => {
            if (this.state === states.FULFILLED) {
                return handler.onSuccess(this.value);
            }
            return handler.onFailure(this.value);
        })
        this.handlers = [];
    }
    // add handlers
    // execute all if any new handler is added
    _addHandler = (handler) => {
        this.handlers.push(handler);
        this._executeHandlers();
    }
}
    

const promise = new MyPromise((resolve, reject)=>{
    resolve('mani')
})

promise.then((v)=>{
    
})