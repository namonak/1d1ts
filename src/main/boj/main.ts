import * as fs from 'fs';
import { No7576 } from '../../main/boj/no7576';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No7576().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
