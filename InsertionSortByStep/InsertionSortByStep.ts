class Sort {
    static unsortedArray : number[] = [3, 2, 5, 4, 1, -2, 6];
    static insertionSortByStep(array:number[]){
        console.log(`The initial array : [${array}]`)
        for (let i = 1; i < array.length ; i++) {
            let key = array[i];
            let j = i-1;
            for ( ;j >=0 && array[j]>key ; j--) {
                console.log(`Assign value in ${j+1} = ${array[j]}`)
                array[j+1] = array[j];
            }
            console.log(`Assign value in ${j+1} = ${key}`)
            array[j+1] = key;
            console.log(`Array after sort ${i}: [${array}]`)
        }
    }
}
Sort.insertionSortByStep(Sort.unsortedArray);
Sort.unsortedArray.forEach(elements => console.log(`${elements}`));
