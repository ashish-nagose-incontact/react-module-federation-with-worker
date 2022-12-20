const workercode = () => {

    // eslint-disable-next-line no-restricted-globals
    self.onmessage = function(e) {
        console.log('Message received from main script');
        var workerResult = 'Received from main: ' + (e.data);
        console.log('Posting message back to main script');
        // eslint-disable-next-line no-restricted-globals
        self.postMessage(workerResult);
    }
};

//const workercode = '../util-worker';

let code = workercode.toString();
code = code.substring(code.indexOf("{")+1, code.lastIndexOf("}"));

const blob = new Blob([code], {type: "application/javascript"});
const worker_script = URL.createObjectURL(blob);

export default worker_script;