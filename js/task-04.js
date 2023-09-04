const btnMinus = document.querySelector('button[data-action="decrement"]');
const btnPlus = document.querySelector('button[data-action="increment"]');
const initialValue = document.querySelector("#value");

let counterValue = 0;
btnMinus.addEventListener('click', function () {
    counterValue -= 1;
    initialValue.textContent = counterValue;
});

btnPlus.addEventListener('click', function () { 
    counterValue += 1;
    initialValue.textContent = counterValue;
})

console.log(initialValue);
