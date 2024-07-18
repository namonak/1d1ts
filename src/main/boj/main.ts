import * as fs from 'fs';
import { No11050 } from '../../main/boj/no11050';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No11050().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
