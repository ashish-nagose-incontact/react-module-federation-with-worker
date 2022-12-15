import { expose } from 'comlink';

export class UtilWorker {

  excuteWorker = (interval: number) => {
    console.log(
      'excuteWorker',
      `excuteWorker triggered with ${interval}ms interval`
    );

    fetch('https://api.ipify.org').then((res: any)=>{
      console.log('res', res)
    })
  };
}

expose(new UtilWorker());