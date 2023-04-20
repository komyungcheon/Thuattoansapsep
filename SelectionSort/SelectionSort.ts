function SelectionSort(arr: number[]) : number[] {
    for (let i = 0; i < arr.length; i++) {
        let index : number = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[index]){
                index = j;
            }
        }
        // if (index) {
            [arr[i], arr[index]] = [arr[index], arr[i]]
        // }
    }
    return arr;
}
let arr = [1, 9, 4.5, 6.6, 5.7, -4.5];
console.log(SelectionSort(arr))


// export class SelectionSort {
//     static list: number[] = [1, 9, 4.5, 6.6, 5.7, -4.5];
//     public static selectionSort(list: number[]): void {
//         for (let i = 0; i < list.length - 1; i++) {
//             /* Find the minimum in the list[i..list.length-1] */
//             let currentMin: number = list[i];
//             let currentMinIndex: number = i;
//
//             for (let j = i + 1; j < list.length; j++) {
//                 if (currentMin > list[j]) {
//                     currentMin = list[j];
//                     currentMinIndex = j;
//                 }
//             }
//
//             /* Swap list[i] with list[currentMinIndex] if necessary */
//             if (currentMinIndex != i) {
//                 list[currentMinIndex] = list[i];
//                 list[i] = currentMin;
//             }
//         }
//     }
// }
// import {SelectionSort} from "./SelectionSort";
//
// SelectionSort.selectionSort(SelectionSort.list);
// for (let i = 0; i < SelectionSort.list.length; i++)
//     console.log(SelectionSort.list[i] + " ")
