function SelectionSort(arr) {
    var _a;
    for (var i = 0; i < arr.length; i++) {
        var index = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] < arr[index]) {
                index = j;
            }
        }
        // if (index) {
        _a = [arr[index], arr[i]], arr[i] = _a[0], arr[index] = _a[1];
        // }
    }
    return arr;
}
var arr = [1, 9, 4.5, 6.6, 5.7, -4.5];
console.log(SelectionSort(arr));
