import { solution } from '../../main/boj/no10998';

const testCases = [
  { input: [1, 2], output: 2 },
  { input: [3, 4], output: 12 },
];

test('AxB : https://www.acmicpc.net/problem/10998', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input[0], input[1])).toBe(output);
  });
});
