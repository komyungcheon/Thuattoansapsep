"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
var BubbleSort = exports.BubbleSort = /** @class */ (function () {
    function BubbleSort() {
    }
    BubbleSort.bubbleSort = function (array) {
        console.log("The initial list: [".concat(array, "]"));
        console.log("\nBegin sort processing...");
        var needNextPass = true;
        for (var i = 1; i < array.length && needNextPass; i++) {
            needNextPass = false;
            for (var j = 0; j < array.length - i; j++) {
                if (array[j + 1] < array[j]) {
                    console.log("Swap ".concat(array[j], " to ").concat(array[j + 1]));
                    var temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    needNextPass = true;
                }
            }
            console.log("List sau lan sort ".concat(i, " la : [").concat(array, "]"));
            if (needNextPass == false) {
                console.log("Array may be sorted and next pass not needed");
                break;
            }
        }
    };
    BubbleSort.list = [3, 2, 5, 6, 1, -2, 14, 12];
    return BubbleSort;
}());
BubbleSort.bubbleSort(BubbleSort.list);
BubbleSort.list.forEach(function (elements) { return console.log(elements); });
