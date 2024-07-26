import * as fs from 'fs';
import { No15740 } from '../../main/boj/no15740';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No15740().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
