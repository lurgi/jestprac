// (1) mock 함수
const MOCKFN = jest.fn();
MOCKFN();
MOCKFN(1, 2, 3);

test("함수는 두 번 호출되었습니다.", () => {
  expect(MOCKFN.mock.calls.length).toBe(2);
});

test("두번째로 호출된 함수의 인자는 1,2,3", () => {
  expect(MOCKFN.mock.calls[1]).toEqual([1, 2, 3]);
});

// (2) mockReturnValueOnce
const MOCKFN2 = jest.fn();
MOCKFN2.mockReturnValueOnce(10)
  .mockReturnValueOnce(20)
  .mockReturnValueOnce(30)
  .mockReturnValueOnce(40);

MOCKFN2();
MOCKFN2();
MOCKFN2();
MOCKFN2();
test("두번째 값은 20입니다.", () => {
  expect(MOCKFN2.mock.results[1].value).toBe(20);
});
test("두번째 값은 40입니다.", () => {
  expect(MOCKFN2.mock.results[3].value).toBe(40);
});

// (3) mockResolvedValue
const MOCKFN3 = jest.fn();
MOCKFN3.mockResolvedValue({ name: "Lurgi" });

test("Lurgi 이름을 받는다.", () => {
  MOCKFN3().then((res) => {
    expect(res.name).toBe("Lurgi");
  });
});
