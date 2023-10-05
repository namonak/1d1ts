import { solution } from '../../main/boj/no2748';

type testCase = {
  input: number;
  output: bigint;
};

const testCases: testCase[] = [
  {
    input: 10,
    output: BigInt('55'),
  },
  {
    input: 90,
    output: BigInt('2880067194370816120'),
  },
];

test('피보나치 수 2 : https://www.acmicpc.net/problem/2748', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input)).toBe(output);
  });
});
