const removeFromArray = function (array, ...args) {
    let changedArray = [];
    let k= 0; // increment when value from array is different from arg
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < args.length; j++) {
            if (array[i] !== args[j]) {
                k++;
            }
        }
        if(k==args.length){
            changedArray=changedArray.concat(array[i]);
        }
        k=0;
    }
    return changedArray;
}

// Do not edit below this line
module.exports = removeFromArray;
