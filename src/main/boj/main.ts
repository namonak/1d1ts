import * as fs from 'fs';
import { No2108 } from '../../main/boj/no2108';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No2108().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
