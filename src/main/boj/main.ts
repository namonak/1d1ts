import * as fs from 'fs';
import { No12871 } from '../../main/boj/no12871';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No12871().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
