import * as fs from 'fs';
import { No1356 } from '../../main/boj/no1356';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No1356().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
