console.log("Hello world");

let numbers = "";
const digits = 1;
const display = document.querySelector("#display");
const digitSlider = document.querySelector("#digit-slider");

/**
 * @param {Element} display
 * @param {string} nums
 */
function updateNumberDisplay(display, nums) {
  display.textContent = nums;
}

/**
 * @param {number} n
 * @param {number} digits
 * @returns {string}
 */
function generateNumbers(n = 1, digits = 1) {
  const numbers = [];
  const min = 10 ** (digits - 1);
  const max = 10 ** digits - 1;
  for (let i = 0; i < n; i++) {
    numbers.push(Math.floor(Math.random() * (max - min) + min));
  }
  return numbers.join(" ");
}

digitSlider?.addEventListener("input", () => {
  const digits = digitSlider.value;
  updateNumberDisplay(display, generateNumbers(10, digits));
});
