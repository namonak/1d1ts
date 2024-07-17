import * as fs from 'fs';
import { No2441 } from '../../main/boj/no2441';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No2441().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
