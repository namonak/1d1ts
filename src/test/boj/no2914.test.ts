import { solution } from '../../main/boj/no2914';

const testCases = [
  { input: [38, 24], output: 875 },
  { input: [1, 100], output: 100 },
  { input: [10, 10], output: 91 },
];

test('저작권 : https://www.acmicpc.net/problem/2914', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input[0], input[1])).toBe(output);
  });
});
