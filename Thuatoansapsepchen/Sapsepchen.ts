export class BubbleSort {
    static list: number[] = [ 3, 2, 5, 6, 1, -2, 14, 12];
    static bubbleSort(array: number[]) {
        console.log(`The initial list: [${array}]`)
        console.log("\nBegin sort processing...")
        let needNextPass: boolean = true;
        for (let i = 1; i < array.length && needNextPass; i++) {
            needNextPass = false;
            for (let j = 0; j < array.length - i; j++) {
                if (array[j + 1] < array[j]) {
                    console.log(`Swap ${array[j]} to ${array[j+1]}`)
                    let temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    needNextPass = true;
                }
            }
            console.log(`List sau lan sort ${i} la : [${array}]`)
            if (needNextPass == false) {
                console.log("Array may be sorted and next pass not needed");
                break;
            }
        }
    }
}
BubbleSort.bubbleSort(BubbleSort.list);
BubbleSort.list.forEach(elements => console.log(elements))