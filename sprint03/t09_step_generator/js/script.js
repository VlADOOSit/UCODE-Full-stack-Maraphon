function* generator() {
    this.num = 1;
    while(true) {
        let temp = prompt(`Previous result: ${this.num}. Enter a new number:`);
        if (temp === 'exit') {
            break;
        }
        if (Number(this.num) > 10000) {
            this.num = 1;
        } 
        else if (isNaN(temp) || temp === null) {
            console.error('Invalid number!');
        }
        else {
            this.num += Number(temp);
        }
    }
}

const gen = generator();
console.log(gen.next().value);
