import * as readline from 'readline';
import { Readable } from 'stream';

type Board = {
  n: number;
  m: number;
};

export class No1018 {
  async solve(input: Readable): Promise<string> {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input,
        output: process.stdout,
      });

      let inputCount: number | null = null;
      let board: Board;
      const inputs: string[] = [];

      rl.on('line', (line: string) => {
        if (inputCount === null) {
          const [n, m] = line.split(' ').map((el: string) => parseInt(el, 10));
          board = { n, m };
          inputCount = board.n;
          return;
        }

        inputs.push(line);

        if (inputs.length === inputCount) {
          resolve(solution(board.n, board.m, inputs).toString());
          rl.close();
        }
      });
    });
  }
}

export function solution(n: number, m: number, board: string[]): number {
  const result = [];

  for (let i = 0; i < n - 7; i++) {
    for (let j = 0; j < m - 7; j++) {
      result.push(checkBoard(i, j, board));
    }
  }

  return Math.min(...result);
}

function checkBoard(x: number, y: number, board: string[]): number {
  let start = board[x][y];
  let count = 0;

  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (board[i][j] !== start) {
        count++;
      }

      start = start === 'W' ? 'B' : 'W';
    }

    start = start === 'W' ? 'B' : 'W';
  }

  return Math.min(count, 64 - count);
}
