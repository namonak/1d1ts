import { solution } from '../../main/boj/no18110';

const testCases = [
  { input: [1, 5, 5, 7, 8], output: 6 },
  { input: [1, 13, 12, 15, 3, 16, 13, 12, 14, 15], output: 13 },
];

test('solved.ac : https://www.acmicpc.net/problem/18110', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
