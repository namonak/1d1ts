import { No2755 } from '../../main/boj/no2755';
import { Readable } from 'stream';

test('이번학기 평점은 몇점? : https://www.acmicpc.net/problem/2755', async () => {
  const given = `7
General_Physics_1 3 A+
Introduction_to_Computer_Science_and_Eng 3 B0
Reading_And_Writing 2 C0
English_1 3 C+
Analytic_Geometry_and_Calculus_1 3 B+
Fortran_Programming 3 B+
C_Language_Programming 3 A+`;
  const expected = '3.28';

  const result = await new No2755().solve(Readable.from(given));
  expect(result).toBe(expected);
});
