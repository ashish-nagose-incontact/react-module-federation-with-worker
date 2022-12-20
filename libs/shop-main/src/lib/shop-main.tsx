import { Greeting } from '@react-module-federation/shared-components';
import initUtilWorker from './initUtilWorker';
import worker_script from './worker';

/* eslint-disable-next-line */
export interface ShopMainProps {}

export function ShopMain(props: ShopMainProps) {

  // const { excuteWorker } = initUtilWorker();
  
  // excuteWorker(1000).then(()=>{
  //   console.log('success');
  // });

  const myWorker = new Worker(worker_script);

  myWorker.onmessage = (m) => {
      console.log("msg from worker: ", m.data);
  };
  myWorker.postMessage('im from main');

  return (
   <Greeting title='shop' />
  );
}

export default ShopMain;

