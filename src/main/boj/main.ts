import * as fs from 'fs';
import { No1000 } from '../../main/boj/no1000';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No1000().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
