// 1. https://leetcode.com/problems/create-hello-world-function/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @return {Function}
 */
var createHelloWorld = function() {
    return function() {
        return "Hello World"
    }
};

const f = createHelloWorld();
f(); // "Hello World"



// 2. https://leetcode.com/problems/counter/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

 
const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12



// 3. https://leetcode.com/problems/to-be-or-not-to-be/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe (_val) {
            if (val !== _val) 
                throw new Error("Not Equal")

            return true
        },
        notToBe (_val) {
            if (val === _val) 
                throw new Error("Equal")

            return true
        }
    }
};



// 4. https://leetcode.com/problems/counter-ii/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let value = init;

    return {
        increment: () => {
            return ++init;
        },
        decrement: () => {
            return --init;
        },
        reset: () => {
            init = value
            
            return value;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */



// 5. https://leetcode.com/problems/apply-transform-over-each-element-in-array/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let returnArray = [];

    for (let i = 0; i < arr.length; i++) {
        returnArray[i] = fn(arr[i], i)
    }

    return returnArray;
};



// 6. https://leetcode.com/problems/filter-elements-from-array/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let index = 0;
    let returnArray = [];
    
    for (let i = 0; i < arr.length; i++) {
        if(fn(arr[i], i)) {
            returnArray[index++] = arr[i]
        }
    }

    return returnArray;
};



// 7. https://leetcode.com/problems/array-reduce-transformation/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;    
    
    if (nums.length === 0) 
        return val
    
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i])
    }

    return val;
};



// 8. https://leetcode.com/problems/execute-cancellable-function-with-delay/description/
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    const cancelFn = function (){
        clearTimeout(timer);
    };
    const timer = setTimeout(()=>{
        fn(...args)
    }, t);
    return cancelFn;
};

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const start = performance.now() 
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr))
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelT)
 *           
 *  setTimeout(() => {
 *     cancel()
 *  }, cancelT)
 *
 *  setTimeout(() => {
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */



// 9. https://leetcode.com/problems/sleep/?envType=study-plan-v2&envId=30-days-of-javascript

/**
 * @param {number} millis
 */
async function sleep(millis) {
    
    return new Promise((resolve) => {
        setTimeout(resolve, millis)
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */



// 10. https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let res = 0;
   
    res += await promise1;
    res += await promise2;

    return res;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */



// 11. https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        if (functions.length === 0)
            return x

        return functions.reduceRight((acumulator, current) => {
            return current(acumulator)
        }, x)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */



// 12. https://leetcode.com/problems/return-length-of-arguments-passed/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @return {number}
 */
var argumentsLength = function(...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */


// 13. https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;

    return function(...args){
        if (!called) {
            called = true;

            return fn(...args)
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */