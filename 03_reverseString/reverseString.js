const reverseString = function(text) {
    let reverse='';
    for(i=text.length; i>=0; i--){
        reverse=reverse.concat(text.slice(i-1, i));
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
