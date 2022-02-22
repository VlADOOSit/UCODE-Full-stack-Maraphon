let guest1 = {
    name: "Dima",
    status: "invated"
}

let guest2 = {
    name: "Vlad",
    status: "invated"
}

let guest3 = {
    name: "Alex",
    status: "invated"
}

let guest4 = {
    name: "Nazar",
    status: "invated"
}

let guestList = new WeakSet();

guestList.add(guest1);
guestList.add(guest2);
guestList.add(guest3);
guestList.add(guest4);

if (guestList.has(guest4)) {
    alert("Gusest4 is invated");
}
else {
    alert("NO");
}

guestList.delete(guest1);

console.log(guestList);

let menu = new Map();

menu.set("meet", 120);
menu.set("fish", 100);
menu.set("fruits", 80);
menu.set("desert", 110);


console.log("price of meet = " + menu.get("meet"));

console.log(menu.size);
menu.delete("fish");

console.log(menu);

let bankVault = new WeakMap();

let safe1 = {
    name_client: "Vlad",
    money: 10000,
}

let safe2 = {
    name_client: "Dima",
    money: 2000,
}

let safe3 = {
    name_client: "Nazar",
    money: 1000,
}

let safe4 = {
    name_client: "Alex",
    money: 100000,
}


bankVault.set(safe1, 1234);
bankVault.set(safe2, 0000);
bankVault.set(safe3, 1780);
bankVault.set(safe4, 5555);


if (bankVault.get(safe1) == 1234) {
    console.log(safe1.name_client);
    console.log(safe1.money);
}

let coinCollection = new Set();

coinCollection.add("5 coins");
coinCollection.add("10 coins");
coinCollection.add("25 coins");
coinCollection.add("15 coins");
coinCollection.add("50 coins");

console.log(coinCollection.size);

console.log(coinCollection);



