class someFunction extends Function {
    constructor() {
        super('...args', 'return this.temp.alias.toUpperCase() + String.fromCharCode(10) + this.temp.powers.join(String.fromCharCode(10))');
        return this.temp = this.bind(this);
    }
}

module.exports.Avenger = class Avenger extends someFunction {
    constructor({ name, alias, gender, age, powers }) {
        super();
        this.heroName = name;
        this.alias = alias;
        this.gender = gender;
        this.age = age;
        this.powers = powers;
    }
    toString() {
        return "name: " + this.heroName + String.fromCharCode(10) + "gender: " + this.gender + String.fromCharCode(10) + "age: " + this.age;
    }
}
