import * as fs from 'fs';
import { No2440 } from '../../main/boj/no2440';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No2440().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
