import { solution } from '../../main/boj/no2775';

type given = {
  testCount: number;
  numbers: number[];
};

type testCase = {
  input: given;
  output: number[];
};

const testCases: testCase[] = [
  {
    input: {
      testCount: 2,
      numbers: [1, 3, 2, 3],
    },
    output: [6, 10],
  },
];

test('부녀회장이 될테야 : https://www.acmicpc.net/problem/2775', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input.testCount, input.numbers)).toEqual(output);
  });
});
