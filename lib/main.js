document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

var wrapperdiv = document.getElementById("wrapper");
var joydiv = document.getElementById("joy");
var disgustdiv = document.getElementById("disgust");
var angerdiv = document.getElementById("anger");
var sadnessdiv = document.getElementById("sadness");

function joy() {
  if (joydiv.style.display === "none") {
    disgustdiv.style.display = "none";
    angerdiv.style.display = "none";
    sadnessdiv.style.display = "none";
    joydiv.style.display = "block";
    wrapperdiv.className = "hero is-warning is-fullheight";
  }
}

function disgust() {
  if (disgustdiv.style.display === "none") {
    joydiv.style.display = "none";
    angerdiv.style.display = "none";
    sadnessdiv.style.display = "none";
    disgustdiv.style.display = "block";
    wrapperdiv.className = "hero is-success is-fullheight";
  }
}

function anger() {
  if (angerdiv.style.display === "none") {
    joydiv.style.display = "none";
    disgustdiv.style.display = "none";
    sadnessdiv.style.display = "none";
    angerdiv.style.display = "block";
    wrapperdiv.className = "hero is-danger is-fullheight";
  }
}

function sadness() {
  if (sadnessdiv.style.display === "none") {
    disgustdiv.style.display = "none";
    angerdiv.style.display = "none";
    joydiv.style.display = "none";
    sadnessdiv.style.display = "block";
    wrapperdiv.className = "hero is-info is-fullheight";
  }
}