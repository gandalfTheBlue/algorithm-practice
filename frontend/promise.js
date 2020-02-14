//https://zhuanlan.zhihu.com/p/58428287

class Promise {
  constructor(fn) {
    this.state = "pending";
    this.value = null;
    this.callbacks = [];
    fn(this._resolve.bind(this));
  }

  then(onFulfilled) {
    if (this.state === "pending") {
      this.callbacks.push(onFulfilled);
    } else {
      onFulfilled(this.value);
    }
    return this;
  }

  _resolve(value) {
    this.state = "resolved";
    this.value = value;
    this.callbacks.forEach(callback => callback(value));
  }
}

let promise = new Promise(resolve => {
  resolve("同步执行");
});

promise.then(value => console.log(value)).then(value => console.log(value));

setTimeout(() => {
  promise.then(tip => {
    console.log("then3", tip);
  });
});
