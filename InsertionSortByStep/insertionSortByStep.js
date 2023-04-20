var Sort = /** @class */ (function () {
    function Sort() {
    }
    Sort.insertionSort = function (array) {
        console.log("The initial array : [".concat(array, "]"));
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
            for (; j >= 0 && array[j] > key; j--) {
                console.log("Assign value in ".concat(j + 1, " = ").concat(array[j]));
                array[j + 1] = array[j];
            }
            console.log("Assign value in ".concat(j + 1, " = ").concat(key));
            array[j + 1] = key;
            console.log("Array after sort ".concat(i, ": [").concat(array, "]"));
        }
    };
    Sort.unsortedArray = [3, 2, 5, 4, 1, -2, 6];
    return Sort;
}());
Sort.insertionSort(Sort.unsortedArray);
Sort.unsortedArray.forEach(function (elements) { return console.log("".concat(elements)); });
