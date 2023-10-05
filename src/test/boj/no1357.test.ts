import { solution } from '../../main/boj/no1357';

type given = {
  x: string;
  y: string;
};

type testCase = {
  input: given;
  output: number;
};

const testCases: testCase[] = [
  {
    input: {
      x: "123",
      y: "100",
    },
    output: 223,
  },
  {
    input: {
      x: "111",
      y: "111",
    },
    output: 222,
  },
  {
    input: {
      x: "5",
      y: "5",
    },
    output: 1,
  },
  {
    input: {
      x: "1000",
      y: "1",
    },
    output: 2,
  },
  {
    input: {
      x: "456",
      y: "789",
    },
    output: 1461,
  },
];

test('뒤집힌 덧셈 : https://www.acmicpc.net/problem/1357', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input.x, input.y)).toBe(output);
  });
});
