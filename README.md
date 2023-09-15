## jest학습

<hr/>

### jest사용시 유용한 것

1. `npm i @types/jest` 타입 설치 가능
2. 단일 파일 테스트 하는 법
   1. `pm i -g jest -cli`
   2. `jest 파일명` or `jest 파일명.test.js`
3. 단일 테스트만 실행
   `test.only(description, callback)`으로 실행
4. 단일 테스트 스킵
   `test.skip(description, callback)`으로 실행

### 테스트 전 후 작업

1. beforeEach() : 각 테스트(test()) 실행 이전 실행
2. afterEach() : 각 테스트(test()) 실행 이후 실행
3. beforeAll() : 테스트 파일 혹은 describe 실행 이전 실행
4. afterAll() : 테스트 파일 혹은 describe 실행 이후 실행

<hr/>

### Matchers

1. toBe 숫자 검사
2. toEqual 객체 검사
3. toStrictEqual 엄격한 검사
4. toBeNull
5. toBeUndefined
6. toBeDefined
7. toBeTruthy
8. toBeFalsy
9. toBeGreaterThan 크다
10. toBeGreaterThanOrEqual 같거나 크다
11. toBeLessThan 작다
12. toBeLessThanOrEqual 같거나 작다.
13. toBeCloseTo 근사치인지 확인. (소수 검사할 때 유용함)
14. toMatch 정규표현식의 match메서드와 비슷
15. toContain 배열의 includes메서드와 비슷
16. toThrow 에러 전달 확인 인자로 특정 에러를 확인할 수 있음.

> Matchers.test.js파일 참고

### Asynchronous

jest에서는 비동기를 사용하고 싶다면, done을 통해 작성하거나, Promise를 사용한다.

> Asynchronous.test.js파일 참고

### Mock Function

> Mock.test.js 파일 참고
