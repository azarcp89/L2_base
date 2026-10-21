function cache(fn) {
  let store = {};

  return function () {
    // Превращаем все аргументы в массив и сериализуем
    let args = [];
    for (let i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    let key = JSON.stringify(args);

    if (!(key in store)) {
      store[key] = fn.apply(this, arguments);
    }

    return store[key];
  };
}