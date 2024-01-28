const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0){
        return "ERROR";
    }
    let sum=0;
    if(a<=b){
        for(i=a;i<=b;i++){
            sum=sum+i;
        }
    }
    else{
        for(i=b; i<=a; i++){
            sum=sum+i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
