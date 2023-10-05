import { solution } from '../../main/boj/no1158';

type given = {
  n: number;
  k: number;
};

type testCase = {
  input: given;
  output: number[];
};

const testCases: testCase[] = [
  {
    input: {
      n: 7,
      k: 3,
    },
    output: [3, 6, 2, 7, 5, 1, 4],
  },
  {
    input: {
      n: 8,
      k: 2,
    },
    output: [2, 4, 6, 8, 3, 7, 5, 1],
  },
  {
    input: {
      n: 10,
      k: 3,
    },
    output: [3, 6, 9, 2, 7, 1, 8, 5, 10, 4],
  },
];

test('요세푸스 문제 : https://www.acmicpc.net/problem/1158', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input.n, input.k)).toEqual(output);
  });
});
