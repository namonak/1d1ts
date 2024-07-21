import * as fs from 'fs';
import { No5618 } from '../../main/boj/no5618';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No5618().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
