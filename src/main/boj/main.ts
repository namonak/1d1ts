import * as fs from 'fs';
import { No15814 } from '../../main/boj/no15814';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No15814().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
