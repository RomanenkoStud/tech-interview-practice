import {makeCancellable} from './makeCancellable';

describe('makeCancellable function', () => {
    it('should return an object with a promise and a cancel method', () => {
        const dummyPromise = new Promise(() => {});
        const cancelable = makeCancellable(dummyPromise);

        expect(cancelable).toHaveProperty('promise');
        expect(cancelable).toHaveProperty('cancel');
        expect(typeof cancelable.cancel).toBe('function');
    });

    it('should cancel the promise when cancel method is called', async () => {
        const dummyPromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve('Done');
            }, 100);
        });

        const cancelable = makeCancellable(dummyPromise);

        // Call the cancel method
        cancelable.cancel();

        // Handle the promise rejection
        await expect(cancelable.promise).rejects.toThrowError('Cancelled');
    });

    it('should resolve to the original promise when not cancelled', async () => {
        const dummyPromise = new Promise(resolve => {
            setTimeout(() => {
                resolve('Done');
            }, 100);
        });

        const cancelable = makeCancellable(dummyPromise);

        // Don't cancel the promise

        // Ensure the original promise is resolved
        await expect(cancelable.promise).resolves.toEqual('Done');
    });
});