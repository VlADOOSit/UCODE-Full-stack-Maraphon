module.exports = class StrFrequency {
    constructor(str) {
        this.str = str;
    }

    letterFrequencies() {
        if (!this.str) {
            return ''
        }
        let freq = {};
        
        let temp = this.str.toUpperCase()
            .split('')
            .filter(f => f.match(/[A-Z]/g));
        
            temp = temp.join('');

        for (let i=0; i<temp.length;i++) {
            let character = temp.charAt(i);
            
            if (freq[character]) {
               freq[character]++;
            } 
            
            else {
               freq[character] = 1;
            }
        }
    
        return freq;
    }

    wordFrequencies() {
       
        if (!this.str) {
            let v = {};
            v[''] = 1;
            return v;
        }
        
        let words = this.str.toUpperCase()
            .split(/[^A-Z]+/g)
            .filter(f => f !== '');
        
        
        let freqMap = {};

        words.forEach(function(w) {
            if (!freqMap[w]) {
                freqMap[w] = 0;
            }
            freqMap[w] += 1;
        });

        return freqMap;
    }

    reverseString() {
        if (!this.str) {
            return ''
        }
        return this.str.split('').reverse().join('');
    }
}
