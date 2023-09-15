const fn = {
  add: (a, b) => a + b,
  makeUser: ({ name, age }) => ({ name, age, gender: undefined }),
  makeError: () => {
    throw new Error("SOME ERROR");
  },
  getName: (callback) => {
    let name = "Mike";
    setTimeout(() => callback(name), 3000);
  },
  getAge: () => {
    const AGE = 30;
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(AGE);
      }, 3000);
    });
  },
};

module.exports = fn;
