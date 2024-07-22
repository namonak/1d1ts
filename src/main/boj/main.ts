import * as fs from 'fs';
import { No13420 } from '../../main/boj/no13420';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No13420().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
