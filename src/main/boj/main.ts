import * as fs from 'fs';
import { No2775 } from '../../main/boj/no2775';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No2775().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
