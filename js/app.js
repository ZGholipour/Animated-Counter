let $ = document;
let benefitElem = $.querySelector(".benefits");
let counter = $.querySelectorAll(".num");
let scrollFlag = false;

window.addEventListener("scroll", () => {
  if (window.scrollY >= benefitElem.offsetTop) {
    if (!scrollFlag) {
      counter.forEach((counter) => setCounter(counter));
    }
    scrollFlag = true;
  }
});

function setCounter(el) {
  let goalNumber = el.dataset.goal;

  let countInterval = setInterval(() => {
    if (el.textContent == goalNumber) {
      clearInterval(countInterval);
    }
    el.textContent++;
  }, 2);
}
