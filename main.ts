// This file was left here on purpose.

const shape: HTMLElement = document.querySelector('.manifestation');
const reset: HTMLElement = document.querySelector('.reset');

let isActive: boolean = false;

shape.onclick = (): void => {
  const toggleClass = (activeState: boolean): string =>
    activeState
      ? (shape.className = 'manifestation-clicked')
      : (shape.className = 'manifestation');

  isActive = !isActive;
  toggleClass(isActive);
};

let degrees: number = 0;
const changeBackground = (cancel: boolean): void => {
  if (cancel) return null;
  degrees = degrees === 360 ? (degrees = 0) : (degrees += 1);
  shape.style.background = `linear-gradient(-${degrees}deg, #48233c, #1b1b1b)`;
};

let interval = null;

function startCounter(func: Function): void {
  interval = setInterval(func, 10);
}
function stopCounter() {
  clearInterval(interval);
}

shape.onmouseenter = (): void => startCounter(changeBackground);

shape.onmouseleave = stopCounter;

const handleReset = (): void => {
  shape.className = 'manifestation';
  shape.style.background = '';
};

reset.onclick = handleReset;
