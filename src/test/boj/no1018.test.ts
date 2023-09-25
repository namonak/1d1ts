import { solution } from '../../main/boj/no1018';

type given = {
  x: number;
  y: number;
  board: string[];
};

type testCase = {
  input: given;
  output: number;
};

const testCases: testCase[] = [
  {
    input: {
      x: 8,
      y: 8,
      board: [
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBBBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
      ],
    },
    output: 1,
  },
  {
    input: {
      x: 10,
      y: 13,
      board: [
        'BBBBBBBBWBWBW',
        'BBBBBBBBBWBWB',
        'BBBBBBBBWBWBW',
        'BBBBBBBBBWBWB',
        'BBBBBBBBWBWBW',
        'BBBBBBBBBWBWB',
        'BBBBBBBBWBWBW',
        'BBBBBBBBBWBWB',
        'WWWWWWWWWWBWB',
        'WWWWWWWWWWBWB',
      ],
    },
    output: 12,
  },
  {
    input: {
      x: 8,
      y: 8,
      board: [
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
      ],
    },
    output: 0,
  },
  {
    input: {
      x: 9,
      y: 23,
      board: [
        'BBBBBBBBBBBBBBBBBBBBBBB',
        'BBBBBBBBBBBBBBBBBBBBBBB',
        'BBBBBBBBBBBBBBBBBBBBBBB',
        'BBBBBBBBBBBBBBBBBBBBBBB',
        'BBBBBBBBBBBBBBBBBBBBBBB',
        'BBBBBBBBBBBBBBBBBBBBBBB',
        'BBBBBBBBBBBBBBBBBBBBBBB',
        'BBBBBBBBBBBBBBBBBBBBBBB',
        'BBBBBBBBBBBBBBBBBBBBBBW',
      ],
    },
    output: 31,
  },
  {
    input: {
      x: 10,
      y: 10,
      board: [
        'BBBBBBBBBB',
        'BBWBWBWBWB',
        'BWBWBWBWBB',
        'BBWBWBWBWB',
        'BWBWBWBWBB',
        'BBWBWBWBWB',
        'BWBWBWBWBB',
        'BBWBWBWBWB',
        'BWBWBWBWBB',
        'BBBBBBBBBB',
      ],
    },
    output: 0,
  },
  {
    input: {
      x: 8,
      y: 8,
      board: [
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWBWB',
        'BWBBBWBW',
        'WBWBWBWB',
        'BWBWBWBW',
        'WBWBWWWB',
        'BWBWBWBW',
      ],
    },
    output: 2,
  },
  {
    input: {
      x: 11,
      y: 12,
      board: [
        'BWWBWWBWWBWW',
        'BWWBWBBWWBWW',
        'WBWWBWBBWWBW',
        'BWWBWBBWWBWW',
        'WBWWBWBBWWBW',
        'BWWBWBBWWBWW',
        'WBWWBWBBWWBW',
        'BWWBWBWWWBWW',
        'WBWWBWBBWWBW',
        'BWWBWBBWWBWW',
        'WBWWBWBBWWBW',
      ],
    },
    output: 15,
  },
];

test('체스판 다시 칠하기 : https://www.acmicpc.net/problem/1018', () => {
  testCases.forEach(({ input, output }) => {
    expect(solution(input.x, input.y, input.board)).toBe(output);
  });
});
