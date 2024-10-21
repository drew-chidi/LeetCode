/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const filteredArr = []
    arr.forEach((item, i) => {
        if (fn(item, i)) {
            filteredArr.push(arr[i])
        }
    })
    return filteredArr;
};