'use strict';

let text_area = document.getElementById("area");

//let out = document.getElementById("output");

let arch = document.getElementsByClassName("archive");

function newEntry(str) {
    const paragraph = document.createElement('p');
    paragraph.textContent = str;
    arch[0].append(paragraph);
}
function lessTen(n) { return n = n < 10 ? `0${n}` : n }

function getFormattedDate(d) {
    return ' [' + lessTen(d.getDate()) + '.' + lessTen(d.getMonth() + 1) + '.'
        + (d.getFullYear() - 2000) + ', ' + lessTen(d.getHours()) + ':'
        + lessTen(d.getMinutes()) + ':' + lessTen(d.getSeconds()) + ']';
}

function show() {

    if (localStorage.length === 0) {
        newEntry('[Empty]');
        return;
    }
    for (let i = 0; i < localStorage.length; ++i) {
        newEntry(`--> ${localStorage.getItem(localStorage.key(i))}`);
        count++;
    }
}

function adds() {
    let textValue = text_area.value.trim();

    if (text_area.value === '' || textValue.length === 0) {
        alert('It\'s empty. Try to input something in "Text input".');
        return;
    }
    //if (count === 0)
      //  document.querySelector("#localStorageList p").remove();

    textValue += getFormattedDate(new Date());
    localStorage.setItem(count, textValue);
    newEntry(`--> ${textValue}`);

    text_area.value = '';
    count++;
}

function clears() {
    if (confirm("Are you sure?")) {
        count = 0;
        document.querySelectorAll('.archive p').forEach(p => p.remove());
        newEntry('[Empty]');
        localStorage.clear();
    }
}

const list = document.querySelector("#local");
const text = document.querySelector("#text");
let count = 0;

show();
