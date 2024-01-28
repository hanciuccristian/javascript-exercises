const repeatString = function(text, num) {
    if(num==0){
        return '';
    }
    if(num<0){
        return 'ERROR';
    }
    let result=text;
    for(i=1; i<num; i++){
        result=result.concat(text);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
