import { wrap } from 'comlink';
import { UtilWorker } from './util-worker';

export function initUtilWorker() {
  const worker = new Worker(new URL('./util-worker', import.meta.url), {
    name: 'util-worker',
  });
  return wrap<UtilWorker>(worker);
}

export default initUtilWorker;
