import * as fs from 'fs';
import { No2914 } from '../../main/boj/no2914';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No2914().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
