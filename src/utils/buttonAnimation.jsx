export function buttonAnimation(buttonSelector, containerSelector, animationDuration = 1000) {
  const button = document.querySelector(buttonSelector);
  const container = document.querySelector(containerSelector);

  if (button) {
    function createCircleIcon(posX, posY) {
      const circle = document.createElement("span");
      circle.classList.add("circle-button");
      circle.style.left = `${posX}px`;
      circle.style.top = `${posY}px`;
      container.appendChild(circle);

      const timerId = setTimeout(() => {
        circle.remove();
        clearTimeout(timerId);
      }, animationDuration);
    }

    function handleButtonClick(event) {
      const offset = event.target.getBoundingClientRect();
      const posX = event.clientX - offset.left;
      const posY = event.clientY - offset.top;
      createCircleIcon(posX, posY);
    }

    button.addEventListener("mousedown", handleButtonClick);
  }
}
