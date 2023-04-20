function InsertionSort(arr) {
    var _a;
    for (var i = 0; i < arr.length; i++) {
        var j = i;
        while (j > 0 && arr[j - 1] > arr[j]) {
            _a = [arr[j - 1], arr[j]], arr[j] = _a[0], arr[j - 1] = _a[1];
            j--;
        }
    }
    return arr;
}
var arr = [1, 3, 4, 7, 6, 5, 2, 9, 8, 0];
console.log(InsertionSort(arr));
