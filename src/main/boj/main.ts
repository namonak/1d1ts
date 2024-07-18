import * as fs from 'fs';
import { No18110 } from '../../main/boj/no18110';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No18110().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
