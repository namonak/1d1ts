import * as fs from 'fs';
import { No18312 } from '../../main/boj/no18312';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No18312().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
