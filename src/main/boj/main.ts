import * as fs from 'fs';
import { No11179 } from '../../main/boj/no11179';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No11179().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
