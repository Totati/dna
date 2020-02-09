import anime from "animejs/lib/anime.js";
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  document.addEventListener("wheel", preventDefault, { passive: false }); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  document.removeEventListener("wheel", preventDefault, { passive: false }); // Enable scrolling in Chrome
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}
var easing = 'cubicBezier(0.3, 0, 0, 1)';
disableScroll();
anime({
  targets: "#textDigital",
  translateX: ["35.4px", 0],
  delay: 500,
  easing: easing,
});
anime({
  targets: "#textNetwork",
  translateX: ["-46.5px", 0],
  delay: 1500,
  easing: easing,
}).finished.then(function() {
  document.getElementById("header").classList.add("loaded");
  enableScroll();
});
anime({
  targets: "#textAgency",
  translateX: ["-39px", 0],
  delay: 500,
  easing: easing
});
