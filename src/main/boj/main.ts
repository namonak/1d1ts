import * as fs from 'fs';
import { No10998 } from '../../main/boj/no10998';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No10998().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
