import * as fs from 'fs';
import { No1158 } from '../../main/boj/no1158';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No1158().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
