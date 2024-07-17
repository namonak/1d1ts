import * as fs from 'fs';
import { No1094 } from '../../main/boj/no1094';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No1094().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
