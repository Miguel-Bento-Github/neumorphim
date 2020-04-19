var shape = document.querySelector('.manifestation');
var reset = document.querySelector('.reset');
var isActive = false;
shape.onclick = function () {
    var toggleClass = function (activeState) {
        return activeState
            ? (shape.className = 'manifestation-clicked')
            : (shape.className = 'manifestation');
    };
    isActive = !isActive;
    toggleClass(isActive);
};
var degrees = 0;
var changeBackground = function (cancel) {
    if (cancel)
        return null;
    degrees = degrees === 360 ? (degrees = 0) : (degrees += 1);
    shape.style.background = "linear-gradient(-" + degrees + "deg, #48233c, #1b1b1b)";
};
var interval = null;
function startCounter(func) {
    interval = setInterval(func, 10);
}
function stopCounter() {
    clearInterval(interval);
}
shape.onmouseenter = function () { return startCounter(changeBackground); };
shape.onmouseleave = stopCounter;
var handleReset = function () {
    shape.className = 'manifestation';
    shape.style.background = '';
};
reset.onclick = handleReset;
