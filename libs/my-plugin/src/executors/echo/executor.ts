import { EchoExecutorSchema } from './schema';
import * as fs from 'fs';

export default async function runExecutor(
  options: EchoExecutorSchema,
) {
  console.log('Executor ran for Echo', options);

  const data = {
    // date: new Date().toDateString(),
    time: new Date().toLocaleTimeString()
  };
  fs.writeFileSync("test_results/ruffle-data/ruffle-report.json", JSON.stringify(data));

  return {
    success: true
  };
}

