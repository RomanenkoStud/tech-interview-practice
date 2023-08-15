export function makeCancellable(promise) {
    let cancel;

    const newPromise = new Promise((resolve, reject) => {
        cancel = () => {
            reject(new Error('Cancelled'));
        };
    });

    return {
        promise: Promise.race([newPromise, promise]),
        cancel
    };
}
