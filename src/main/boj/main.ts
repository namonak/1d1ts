import * as fs from 'fs';
import { No1676 } from '../../main/boj/no1676';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No1676().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
