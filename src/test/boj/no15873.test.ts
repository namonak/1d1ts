import { solution } from '../../main/boj/no15873';

type testCase = {
  input: number;
  output: number;
};

const testCases: testCase[] = [
  {
    input: 37,
    output: 10,
  },
  {
    input: 102,
    output: 12,
  },
];

test('공백 없는 A+B : https://www.acmicpc.net/problem/15873', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
