let validator = {
    set: function(target, PropertyKey, receiver) {
        if (PropertyKey === 'age') {
            if (!Number.isInteger(receiver)) {
                throw new TypeError('The age is not an integer');
            }
            if (receiver > 200 || receiver < 0) {
                throw new RangeError('The age is invalid');
            }
        }
        if (PropertyKey === 'gender')
            if (receiver !== 'male' && receiver!== 'female')
                throw new TypeError("The gender is invalid");
        console.log(`Setting value '${receiver}' to '${PropertyKey}'`);
        target[PropertyKey] = receiver;
        return true;
    },
    get: function(target, PropertyKey) {
        if (PropertyKey in target ) {
            console.log(`Trying to access the property \'${PropertyKey}\'...`);
            return target[PropertyKey];
        } else {
            throw new Error(`Property ${PropertyKey} do not exist...`);
        }
    }
}
