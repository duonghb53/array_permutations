function printAllRecursive(n, elements, delimiter) {
    if (n == 1) {
        printArray(elements, delimiter);
    } else {
        for (var i = 0; i < n - 1; i++) {
            printAllRecursive(n - 1, elements, delimiter);
            if (n % 2 == 0) {
                swap(elements, i, n - 1);
            } else {
                swap(elements, 0, n - 1);
            }
        }
        printAllRecursive(n - 1, elements, delimiter);
    }
}

function swap(input, i, j) {
    var tmp = input[i];
    input[i] = input[j];
    input[j] = tmp;
}

function printArray(input, delimiter) {
        console.log(input);
}

const array = ["3", "4", "7"];

printAllRecursive(3, array, " ");