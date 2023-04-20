function BubbleSort(arr) {
    var _a;
    for (var i = 0; i < arr.length; i++) {
        for (var j = arr.length - i - 1; j >= i; j--) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1];
            }
        }
    }
    return arr;
}
var arr = [2, 3, 2, 5, 6, 1, -2, 3, 14, 12];
console.log(BubbleSort(arr));
