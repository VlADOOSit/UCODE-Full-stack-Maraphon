let text_area = document.getElementById("area");

let out = document.getElementById("output");
// кодирует в my%20name=John%20Smith
//document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

//alert(document.cookie);

let arch = document.getElementsByClassName("archive");



function cookieParagraph(str) {
    const p = document.createElement('p');
    p.textContent = str;
    arch[0].append(p);
}

function cookiePqweqaragraph(str) {
    const p = document.createElement('p');
    p.textContent = str;
    list.append(p);
}

function showCookies() {
    const cookies = document.cookie.split(';');

    if (!cookies || (cookies.length <= 1 && cookies[0] === ''))
        cookieParagraph('[Empty]');
    else
        for (let i in cookies) {
            cookieParagraph(`--> ${cookies[i].split('=')[1]}`);
            count++;
        }
}

function addToCookies() {
    let date;
    const textValue = area.value.trim();

    if (area.value === '' || textValue.length === 0) {
        alert('It\'s empty. Try to input something in "Text input".');
        return;
    }
    //if (count === 0) document.querySelector(".archive p").remove();

    date = new Date();
    date.setDate(date.getDate() + 30);
    document.cookie = `${count}=${textValue};\
expires=${date.toUTCString()};\
path=/;\
SameSite=None;\
Secure`;

    cookieParagraph(`--> ${textValue}`);
    area.value = '';
    count++;
}

function clearCookies() {
    if (confirm("Are you sure?")) {

        document.querySelectorAll('.archive p').forEach(p => p.remove());
        cookieParagraph('[Empty]');

        const cookies = document.cookie.split(';');
        for (let i in cookies)
            document.cookie = `${cookies[i].split('=')[0]}='';\
expires=Thu, 01 Jan 1970 00:00:00 GMT;\
path=/;\
SameSite=None;\
Secure`;
        count = 0;
    }
}

let count = 0;

showCookies();