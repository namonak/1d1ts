import * as fs from 'fs';
import { No10814 } from '../../main/boj/no10814';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No10814().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
