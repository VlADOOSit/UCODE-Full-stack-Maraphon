const {Avenger} = require("./Avenger");

module.exports.Team = class Team {
    constructor(id, avengers) {
        this.id = id;
        this.avengers = avengers;
    }
    battle(damage) {
        for(let i = 0; i < this.avengers.length; i++) {
            this.avengers[i].hp -= damage.damage;
        }
    }
    calculateLosses(clonedTeam) {
        let count = 0;
        for(let i = 0; i < clonedTeam.length; i++) {
            if(clonedTeam[i].hp < 1) {
                count += 1;
            }
        }
        if(!count) {
            console.log("We haven't lost anyone in this battle!");
        }
        else {
            console.log("In this battle we lost " + count + " Avengers.");
        }
    }
    clone() {
        let tempArr = this.avengers.slice();
        return this.avengers = tempArr;
    }
}
