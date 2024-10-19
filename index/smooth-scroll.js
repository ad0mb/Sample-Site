

const body = document.getElementsByClassName("left-panel"),
    scrollWrapper = document.getElementsByClassName('scroll-box')[0],
    height = scrollWrapper.getBoundingClientRec().height -1,
    speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;
    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrapper.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();
