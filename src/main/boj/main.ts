import * as fs from 'fs';
import { No28113 } from '../../main/boj/no28113';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No28113().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
