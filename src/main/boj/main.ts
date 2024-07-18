import * as fs from 'fs';
import { No15873 } from '../../main/boj/no15873';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No15873().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
