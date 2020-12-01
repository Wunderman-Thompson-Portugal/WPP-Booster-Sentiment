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
    wrapperdiv.className= "hero is-warning is-fullheight";
  } else {
    joydiv.style.display = "none";
  }
}

function disgust() {
  if (disgustdiv.style.display === "none") {
    joydiv.style.display = "none";
    angerdiv.style.display = "none";
    sadnessdiv.style.display = "none";
    disgustdiv.style.display = "block";
    wrapperdiv.className= "hero is-success is-fullheight";
  } else {
    disgustdiv.style.display = "none";
  }
}

function anger() {
  if (angerdiv.style.display === "none") {
    joydiv.style.display = "none";
    disgustdiv.style.display = "none";
    sadnessdiv.style.display = "none";
    angerdiv.style.display = "block";
    wrapperdiv.className= "hero is-danger is-fullheight";
  } else {
    angerdiv.style.display = "none";
  }
}

function sadness() {
  if (sadnessdiv.style.display === "none") {
    disgustdiv.style.display = "none";
    angerdiv.style.display = "none";
    joydiv.style.display = "none";
    sadnessdiv.style.display = "block";
    wrapperdiv.className= "hero is-info is-fullheight";
  } else {
    sadnessdiv.style.display = "none";
  }
}