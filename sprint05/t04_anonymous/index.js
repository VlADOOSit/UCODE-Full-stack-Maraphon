exports.getAnonymous = (name, alias ,affiliation) => {
    let AnonClass = class {
        #priv;
        constructor(name, alias, affiliation) {
            this.name = name;
            this.alias = alias;
            this.affiliation = affiliation;
            this.#priv = '123';
        }
        getPriv() {
            return this.#priv;
        }
    }

    return new AnonClass(name, alias, affiliation);
}
