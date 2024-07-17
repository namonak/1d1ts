import * as fs from 'fs';
import { No5363 } from '../../main/boj/no5363';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No5363().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
