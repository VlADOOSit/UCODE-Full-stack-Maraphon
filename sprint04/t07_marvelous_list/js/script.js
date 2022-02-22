let butt = document.getElementsByClassName("butt");

current = 'Avangers: Endgame';


let element = document.getElementsByClassName("element");
let title = document.getElementById("title");
let info = document.getElementById("info");
let actor1 = document.getElementById("actor1");
let actor2 = document.getElementById("actor2");
let actor3 = document.getElementById("actor3");
let actor4 = document.getElementById("actor4");
let description = document.getElementById("description");
let image = document.getElementById("imageSource");

function update() {
    if(current === 'Avangers: Endgame') {
        title.innerText = "Avangers: Endgame"
        info.innerHTML = "April 22, 2019";
        actor1.innerText = "Robert Downey Jr";
        actor2.innerText = "Chris Evans";
        actor3.innerText = "Mark Ruffalo";
        actor4.innerText = "Scarlett Johansson ";
        description.innerText = "The film was announced in October 2014 as Avengers: Infinity War – Part 2, but Marvel later removed this title. The Russo brothers joined as directors in April 2015, with Markus and McFeely signing on to write the script a month later. The film serves as a conclusion to the story of the MCU up to that point, ending the story arcs for several main characters. The plot revisits several moments from earlier films, bringing back actors and settings from throughout the franchise. Filming began in August 2017 at Pinewood Atlanta Studios in Fayette County, Georgia, shooting back-to-back with Infinity War, and ended in January 2018. Additional filming took place in the Metro and Downtown Atlanta areas, New York state, Scotland, and England. The official title was revealed in December 2018. With an estimated budget of $356–400 million, the film is one of the most expensive films ever made.";
        image.src = 'assets/images/marvel.jpg';
    }

    if(current === 'John Wick') {
        title.innerText = "John Wick"
        info.innerHTML = "September 19, 2014";
        actor1.innerText = "Keanu Reeves ";
        actor2.innerText = "Michael Nyqvist";
        actor3.innerText = "Alfie Allen ";
        actor4.innerText = "Adrianne Palicki  ";
        description.innerText = "The story focuses on John Wick (Reeves) searching for the men who broke into his home, stole his vintage car and killed his puppy, which was a last gift to him from his recently deceased wife.[6] Chad Stahelski and David Leitch directed the film together, though only Stahelski was credited.[1] Kolstad had completed the screenplay in 2012 and further developed it for Thunder Road Pictures. The film was produced by Basil Iwanyk of Thunder Road Pictures, Leitch, Eva Longoria, and Michael Witherill. It marks Stahelski and Leitch's directorial debut as a team after multiple separate credits as second-unit directors and stunt coordinators. They previously worked with Reeves as stunt doubles on The Matrix trilogy.";
        image.src = 'assets/images/jon.jpg';
    }
}

function test1() {
    for (let i = 0; i < butt.length; i++) {
        butt[i].style.borderLeft = 'none';
    }
    butt[0].style.borderLeft = 'solid 3px rgb(7, 133, 215)';
    current = 'John Wick';
    update();
}

function test2() {
    for (let i = 0; i < butt.length; i++) {
        butt[i].style.borderLeft = 'none';
    }
    butt[1].style.borderLeft = 'solid 3px rgb(7, 133, 215)';
    current = 'Avangers: Endgame'
    update();
}

function test3() {
    for (let i = 0; i < butt.length; i++) {
        butt[i].style.borderLeft = 'none';
    }
    butt[2].style.borderLeft = 'solid 3px rgb(7, 133, 215)';
    current = 'John Wick';
    update();
}

