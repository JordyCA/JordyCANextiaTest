function ordenAsc(array) {
    if (array.length) {
        let tempArr = [...array];
        tempArr.sort((a, b) => a - b);
        console.log(tempArr)
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element !== tempArr[i]) {
                return false;
            }
        }
        return true;
    }
}

console.log(ordenAsc([1, 2, 3, 6, 7, 19]));     //true
console.log(ordenAsc([12, 2, 9, 6, 7, 19]))    //false
console.log(ordenAsc([4]))               //true