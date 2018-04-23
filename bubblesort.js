function bubbleSort(array) {
    let sortedArray = array;
    let swap = false;
    for(i = 0; i < sortedArray.length - 1; i++) {
        if(sortedArray[i] <= sortedArray[i+1]) continue;
        if(sortedArray[i] > sortedArray[i+1]) {
            let temp = sortedArray[i];
            sortedArray[i] = sortedArray[i+1];
            sortedArray[i+1] = temp;
            swap = true;
        }
    }
    if(swap === false) {
        return sortedArray
    } else {
        let lastDigit = sortedArray.slice(array.length-1)
        return (bubbleSort(sortedArray.slice(0,array.length-1))).concat(lastDigit)
    }
}
