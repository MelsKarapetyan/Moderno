let menu = document.querySelector("#menu-1");
let menuDiv = document.querySelector("#menu-div");
let string = 1;
menu.onclick = function () {
    if (string === 1) {
        menuDiv.style.display = "flex";
        string = 2;
    } else {
        menuDiv.style.display = "none";
        string = 1;
    }
}

let close = document.querySelector("#close");
let box = document.querySelector("#box1");
let img = document.querySelector("#img");
let string_1 = 1;
close.onclick = function () {
    if (string_1 === 1) {
        box.style.display = "none";
        string_1 = 2;
    } 
}
img.onclick = function () {
    if (string_1 === 2) {
        box.style.display = "flex";
        box2.style.display = "none";
        box3.style.display = "none";
        box4.style.display = "none";
        box5.style.display = "none";
        box6.style.display = "none";
        string_1 = 1;
    } else {
        box.style.display = "none";
        string_1 = 2;
    }
}
let close2 = document.querySelector("#close2");
let box2 = document.querySelector("#box2");
let img2 = document.querySelector("#img2");
let string_2 = 2;
close2.onclick = function () {
    if (string_2 === 2) {
        box2.style.display = "none";
        string_2 = 1;
    } 
}
img2.onclick = function () {
    if (string_2 === 1) {
        box2.style.display = "flex";
        box.style.display = "none";
        box3.style.display = "none";
        box4.style.display = "none";
        box5.style.display = "none";
        box6.style.display = "none";
        string_2 = 2;
    } else {
        box2.style.display = "none";
        string_2 = 1;
    }
}
let close3 = document.querySelector("#close3");
let box3 = document.querySelector("#box3");
let img3 = document.querySelector("#img3");
let string_3 = 2;
close3.onclick = function () {
    if (string_3 === 2) {
        box3.style.display = "none";
        string_3 = 1;
    } 
}
img3.onclick = function () {
    if (string_3 === 1) {
        box3.style.display = "flex";
        box2.style.display = "none";
        box.style.display = "none";
        box4.style.display = "none";
        box5.style.display = "none";
        box6.style.display = "none";
        string_3 = 2;
    } else {
        box3.style.display = "none";
        string_3 = 1;
    }
}
let close4 = document.querySelector("#close4");
let box4 = document.querySelector("#box4");
let img4 = document.querySelector("#img4");
let string_4 = 2;
close4.onclick = function () {
    if (string_4 === 2) {
        box4.style.display = "none";
        string_4 = 1;
    } 
}
img4.onclick = function () {
    if (string_4 === 1) {
        box4.style.display = "flex";
        box2.style.display = "none";
        box3.style.display = "none";
        box.style.display = "none";
        box5.style.display = "none";
        box6.style.display = "none";
        string_4 = 2;
    } else {
        box4.style.display = "none";
        string_4 = 1;
    }
}
let close5 = document.querySelector("#close5");
let box5 = document.querySelector("#box5");
let img5 = document.querySelector("#img5");
let string_5 = 2;
close5.onclick = function () {
    if (string_5 === 2) {
        box5.style.display = "none";
        string_5 = 1;
    } 
}
img5.onclick = function () {
    if (string_5 === 1) {
        box5.style.display = "flex";
        box2.style.display = "none";
        box3.style.display = "none";
        box.style.display = "none";
        box4.style.display = "none";
        box6.style.display = "none";
        string_5 = 2;
    } else {
        box5.style.display = "none";
        string_5 = 1;
    }
}
let close6 = document.querySelector("#close6");
let box6 = document.querySelector("#box6");
let img6 = document.querySelector("#img6");
let string_6 = 2;
close6.onclick = function () {
    if (string_6 === 2) {
        box6.style.display = "none";
        string_6 = 1;
    } 
}
img6.onclick = function () {
    if (string_6 === 1) {
        box6.style.display = "flex";
        box2.style.display = "none";
        box3.style.display = "none";
        box.style.display = "none";
        box4.style.display = "none";
        box5.style.display = "none";
        string_6 = 2;
    } else {
        box6.style.display = "none";
        string_6 = 1;
    }
}