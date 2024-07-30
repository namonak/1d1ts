import * as fs from 'fs';
import { No31867 } from '../../main/boj/no31867';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No31867().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
