import * as fs from 'fs';
import { No2755 } from '../../main/boj/no2755';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No2755().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
