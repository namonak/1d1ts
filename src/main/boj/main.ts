import * as fs from 'fs';
import { No31009 } from '../../main/boj/no31009';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No31009().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
