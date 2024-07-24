import * as fs from 'fs';
import { No26711 } from '../../main/boj/no26711';

async function main() {
  try {
    const input = fs.createReadStream('/dev/stdin');
    const result = await new No26711().solve(input);
    console.log(result);
    process.exit();
  } catch (err) {
    console.error(err);
  }
}

main();
