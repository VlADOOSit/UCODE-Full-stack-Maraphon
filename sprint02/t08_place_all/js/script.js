function sortEvenOdd(arr) {

    function sorting(a, b){
        return a%2 - b%2 || a - b;
    }

    arr.sort(sorting);
}
