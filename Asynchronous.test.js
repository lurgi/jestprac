const fn = require("./app");

// test("setTimeout", (done) => {
//   function callback(name) {
//     expect(name).toBe("Mike");
//     done();
//   }
//   fn.getName(callback);
// });

//Promise의 경우 return을 사용하지 않으면 3초뒤에 실행하지 않는다.
test("Promise1", () => {
  return fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
});

//resolves를 통해 함수가 성공적으로 작동하였는지 판단/
test("Promise2", () => {
  return expect(fn.getAge()).resolves.toBe(30);
});

test("Promise aync await", async () => {
  const age = await fn.getAge();
  expect(age).toBe(30);
});
//return 말고 await사용 가능
test("Promise1", async () => {
  await fn.getAge().then((age) => {
    expect(age).toBe(30);
  });
});
