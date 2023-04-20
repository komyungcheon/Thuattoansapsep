function BubbleSort(arr: number[]): number[] {

    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - i - 1; j >= i; j--) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }
    return arr;
}

let arr = [2, 3, 2, 5, 6, 1, -2, 3, 14,12];
console.log(BubbleSort(arr));