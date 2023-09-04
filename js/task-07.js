const rangeInput = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

rangeInput.addEventListener('input', onRangeChange);

    function onRangeChange(evt) {
       const fontSize = evt.target.value + 'px';
        text.style.fontSize = fontSize;
    }
console.log(onRangeChange);
