import { EchoExecutorSchema } from './schema';
import * as fs from 'fs';
import * as path from 'path';

export default async function runExecutor(
  options: EchoExecutorSchema,
) {
  console.log('Executor ran for Echo', options);

  const data = {
    // date: new Date().toDateString(),
    time: new Date().toLocaleTimeString()
  };
  const dir = "test_results/ruffle-data";
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "ruffle-report.json"), JSON.stringify(data));

  return {
    success: true
  };
}

