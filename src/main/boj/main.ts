import * as fs from 'fs';
import { No1018 } from '../../main/boj/no1018';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No1018().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
