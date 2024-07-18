import * as fs from 'fs';
import { No10156 } from '../../main/boj/no10156';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No10156().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
