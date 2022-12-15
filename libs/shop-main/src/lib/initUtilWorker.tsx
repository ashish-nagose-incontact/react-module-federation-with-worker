import { wrap } from 'comlink';
import { UtilWorker } from './util-worker';

export function initUtilWorker() {
  const worker = new Worker(new URL('./util-worker', import.meta.url), {
    name: 'util-worker',
  });
  return wrap<UtilWorker>(worker);
}

//Blob apporach to create worker
/* export function initUtilWorker() {
  const workerContent = UtilWorker.toString();
  const blob = new Blob([workerContent], {type: "application/javascript"});
  const worker_script = URL.createObjectURL(blob);

  const worker = new Worker(new URL(worker_script, import.meta.url), {
    name: 'util-worker',
    type: 'module'
  });
  return wrap<UtilWorker>(worker);
}
*/


export default initUtilWorker;
