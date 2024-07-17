import * as fs from 'fs';
import { No1357 } from '../../main/boj/no1357';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No1357().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
