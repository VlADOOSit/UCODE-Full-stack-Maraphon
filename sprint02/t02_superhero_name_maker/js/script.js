let regex = RegExp(/^[a-z]+$/i);
let flag = 0;


let name_animal = prompt('What animal is the superhero most similar to?', '');
let age;

if (name_animal.length > 20 || !regex.test(name_animal)) {
    alert('ERROR: Accepts only one word, which consists only of Latin letters and its length does not exceed 20 characters.');
    name_animal = null;
}


let checkgender;
if (name_animal != null) {
    checkgender =  prompt('Is the superhero male or female? Leave blank if unknown or other.', '');
    let reqGender = RegExp('^male$|^female$|^$', 'i')

    if (!reqGender.test(checkgender)) {
        alert('ERROR: Accepts only male, female gender or blank (not case sensitive)!');
        checkgender = null;
        flag =1;
    }
}

if (flag != 1 && name_animal != null) {
    age = prompt('How old is the superhero?', '');
    let reqAge = RegExp(/^[\d.,:]+$/)

    if (age.length > 5 || !reqAge.test(age)) {
        alert('ERROR: Accepts only digits, cannot start with a zero, no more than 5 characters!');
        age = null;
    }
}

let description;

if (flag != 1 && name_animal != null && age != null) {
    if (RegExp('^male$', 'i').test(checkgender) && age < 18) {
        description = "boy";
    }
    else if (RegExp('^male$', 'i').test(checkgender) && age >= 18) {
        description = "man";
    }
    else if (RegExp('^female$', 'i').test(checkgender) && age < 18) {
        description = "girl";
    }
    else if (RegExp('^female$', 'i').test(checkgender) && age >= 18) {
        description = "woman";
    }
    else if (RegExp('^$').test(checkgender) && age < 18) {
        description = "kid";
    }
    else if (RegExp('^$').test(checkgender) && age >= 18) {
        description = "hero";
    }
    
    
    alert(name_animal + '-' + description);
    
}



