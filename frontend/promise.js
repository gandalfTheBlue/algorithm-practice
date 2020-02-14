//https://zhuanlan.zhihu.com/p/58428287

class Promise {
  constructor(fn) {
    this.callbacks = [];
    fn(this._resolve.bind(this));
  }

  then(callback) {
    this.callbacks.push(callback);
    return this;
  }

  _resolve(value) {
    setTimeout(() => {
      this.callbacks.forEach(callback => callback(value));
    });
  }
}

let promise = new Promise(resolve => {
  console.log(6);
  resolve("同步执行");
});

promise.then(value => console.log(value)).then(value => console.log(value));

setTimeout(() => {
  promise.then(tip => {
    console.log("then3", tip);
  });
});
