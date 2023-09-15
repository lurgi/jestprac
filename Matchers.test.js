const fn = require("./app");

test("toBe", () => {
  expect(fn.add(1, 2)).toBe(3);
});

test("toEquel", () => {
  expect(fn.add(1, 2)).toEqual(3);
});

//객체의 경우 toBe가 아닌 toEqual을 사용
test("이름과 나이를 전달하여 객체를 반환 toEqual", () => {
  expect(fn.makeUser({ name: "lurgi", age: 20 })).toEqual({
    name: "lurgi",
    age: 20,
  });
});

//gender : undefined 속성 때문에 실패. 보다 엄격한 검사 toStrictEqual
test("이름과 나이를 전달하여 객체를 반환 toStrictEqual", () => {
  expect(fn.makeUser({ name: "lurgi", age: 20 })).toStrictEqual({
    name: "lurgi",
    age: 20,
    gender: undefined,
  });
});

// toBeNull
// toBeUndefined
// toBeDefined
// toBeTruthy
// toBeFalsy
test("toBeFalsy", () => {
  expect(fn.add(1, -1)).toBeFalsy();
});

// toBeGreaterThan 크다
// toBeGreaterThanOrEqual 같거나 크다
// toBeLessThan 작다
// toBeLessThanOrEqual 같거나 작다.
// toBeCloseTo
test("toBeFalsy", () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("throewErr", () => {
  expect(() => fn.makeError()).toThrow();
});
