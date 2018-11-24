var content1 = document.getElementById("model1");
var button1 = document.getElementById("show-more1");

var content2 = document.getElementById("model2");
var button2 = document.getElementById("show-more2");

var content3 = document.getElementById("model3");
var button3 = document.getElementById("show-more3");

var content4 = document.getElementById("model4");
var button4 = document.getElementById("show-more4");

var content5 = document.getElementById("model5");
var button5 = document.getElementById("show-more5");

var content6 = document.getElementById("model6");
var button6 = document.getElementById("show-more6");

button1.onclick = function () {

    if (content1.className == "open") {
        content1.className = "";
        button1.innerHTML = "+info";

    } else {
        content1.className = "open";
        button1.innerHTML = "-info";
    }

}

button2.onclick = function () {

    if (content2.className == "open") {
        content2.className = "";
        button2.innerHTML = "+info";

    } else {
        content2.className = "open";
        button2.innerHTML = "-info";
    }

}

button3.onclick = function () {

    if (content3.className == "open") {
        content3.className = "";
        button3.innerHTML = "+info";

    } else {
        content3.className = "open";
        button3.innerHTML = "-info";
    }

}

button4.onclick = function () {

    if (content4.className == "open") {
        content4.className = "";
        button4.innerHTML = "+info";

    } else {
        content4.className = "open";
        button4.innerHTML = "-info";
    }

}

button5.onclick = function () {

    if (content5.className == "open") {
        content5.className = "";
        button5.innerHTML = "+info";

    } else {
        content5.className = "open";
        button5.innerHTML = "-info";
    }

}

button6.onclick = function () {

    if (content6.className == "open") {
        content6.className = "";
        button6.innerHTML = "+info";

    } else {
        content6.className = "open";
        button6.innerHTML = "-info";
    }

}
