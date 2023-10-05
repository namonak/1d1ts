import { solution } from '../../main/boj/no10156';

type given = {
  k: number;
  n: number;
  m: number;
};

type testCase = {
  input: given;
  output: number;
};

const testCases: testCase[] = [
  {
    input: {
      k: 300,
      n: 4,
      m: 1000,
    },
    output: 200,
  },
  {
    input: {
      k: 250,
      n: 2,
      m: 140,
    },
    output: 360,
  },
  {
    input: {
      k: 20,
      n: 6,
      m: 120,
    },
    output: 0,
  },
  {
    input: {
      k: 20,
      n: 10,
      m: 320,
    },
    output: 0,
  },
];

test('과자 : https://www.acmicpc.net/problem/10156', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input.k, input.n, input.m)).toBe(output);
  });
});
