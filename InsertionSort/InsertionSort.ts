function InsertionSort(arr : number[])   {
    for (let i = 0; i < arr.length; i++) {
        let j = i;
        while (j > 0 && arr[j -1] > arr[j]){
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            j--;
        }
    }
    return arr;
}
let arr = [1,3,4,7,6,5,2,9,8,0];
console.log(InsertionSort(arr))