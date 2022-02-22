let start = prompt('Enter the number for the beginning of a range', '1');
let end = prompt('Enter the number for the end of a range', '100');

function checkDivision(start, end) {
    for (let i = start; i <= end; i++) {
        let str = " - "

        if (i % 2 == 0) {
            str = " is even"
        }
        if (i % 3 == 0 && i % 2 != 0) {
            str = " is a multiple of 3"
        }
        else if (i % 3 == 0) {
            str = str.concat(", a multiple of 3")
        }
        if (i % 10 == 0) {
            str = str.concat(", a multiple of 10")
        }
        
        console.log(i + str + "\n")
    }
}

checkDivision(start, end);