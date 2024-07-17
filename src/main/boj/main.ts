import * as fs from 'fs';
import { No2748 } from '../../main/boj/no2748';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No2748().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
