import * as fs from 'fs';
import { No15351 } from '../../main/boj/no15351';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No15351().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
