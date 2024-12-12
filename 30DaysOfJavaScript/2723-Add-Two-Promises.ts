type P = Promise<number>

async function addTwoPromises(promise1: P, promise2: P): P {
    let result1 = await promise1
    let result2 = await promise2
  return result1 + result2  
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */