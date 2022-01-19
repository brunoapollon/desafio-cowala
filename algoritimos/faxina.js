const dirtyObject = { fizz: "buzz", foo: null, bar: 42 };

const faxina = (object) => {
  const clearObject = {};

  Object.keys(object).forEach(function (item) {
    if (!!object[item]) clearObject[item] = object[item];
  });

  return clearObject;
};

console.log(faxina(dirtyObject));
