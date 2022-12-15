import { Greeting } from '@react-module-federation/shared-components';
import initUtilWorker from './initUtilWorker';

/* eslint-disable-next-line */
export interface ShopMainProps {}

export function ShopMain(props: ShopMainProps) {
  const { excuteWorker } = initUtilWorker();
  
  excuteWorker(1000).then(()=>{
    console.log('success');
  });

  return (
   <Greeting title='shop' />
  );
}

export default ShopMain;

