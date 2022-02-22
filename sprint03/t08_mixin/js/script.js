let houseMixin = {
    wordReplace(replaced_word, new_word) {
        this.description = this.description.replace(replaced_word, new_word);
    },
    wordInsertAfter(after_word, new_word) {
        this.description = this.description.replace(after_word, after_word + " " + new_word);
    },
    wordDelete(word) {
        this.description = this.description.replace(word, "");
    },
    wordEncrypt() {
        let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        let index = x => input.indexOf(x);
        let translate = x => index(x) > -1 ? output[index(x)] : x;
        this.description = this.description.split('').map(translate).join('');
    },
    wordDecrypt() {
        let input = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
        let output = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        let index = x => input.indexOf(x);
        let translate = x => index(x) > -1 ? output[index(x)] : x;
        this.description = this.description.split('').map(translate).join('');
    }
};
