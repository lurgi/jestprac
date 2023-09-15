const mockFn = jest.fn();

mockFn();
mockFn(1, 2, 3);

test("함수는 두 번 호출되었습니다.", () => {
  expect(mockFn.mock.calls.length).toBe(2);
});

test("두번째로 호출된 함수의 인자는 1,2,3", () => {
  expect(mockFn.mock.calls[1]).toEqual([1, 2, 3]);
});
