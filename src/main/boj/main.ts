import * as fs from 'fs';
import { No4388 } from '../../main/boj/no4388';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No4388().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
