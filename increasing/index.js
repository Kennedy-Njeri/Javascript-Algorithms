const isStrictlyIncreasing = (arr) => {
    let unwantedElements = 0;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] >= arr[i+1]){
            unwantedElements++;
            if(unwantedElements > 1){
                return false;
            };
        };
    };
    return true;
};
console.log(isStrictlyIncreasing([1, 3, 2, 1]));
console.log(isStrictlyIncreasing([1, 3, 2]));