import * as fs from 'fs';
import { No5361 } from '../../main/boj/no5361';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No5361().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
