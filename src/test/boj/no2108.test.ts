import { solution } from '../../main/boj/no2108';

type testCase = {
  input: number[];
  output: number[];
};

const testCases: testCase[] = [
  {
    input: [1, 3, 8, -2, 2],
    output: [2, 2, 1, 10],
  },
  {
    input: [4000],
    output: [4000, 4000, 4000, 0],
  },
  {
    input: [-1, -2, -3, -1, -2],
    output: [-2, -2, -1, 2],
  },
  {
    input: [0, 0, -1],
    output: [0, 0, 0, 1],
  },
];

test('통계학 : https://www.acmicpc.net/problem/2108', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input)).toEqual(output);
  });
});
