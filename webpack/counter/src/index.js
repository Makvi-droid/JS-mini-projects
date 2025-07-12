import { increment, decrement, reset } from "./counter.js";

const addBtn = document.getElementById("increment");
const subtractBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const currentNumber = document.getElementById("currentNumber");

addBtn.addEventListener("click", () => {
  currentNumber.innerHTML = increment();
});

subtractBtn.addEventListener("click", () => {
  currentNumber.innerHTML = decrement();
});

resetBtn.addEventListener("click", () => {
  currentNumber.innerHTML = reset();
});
