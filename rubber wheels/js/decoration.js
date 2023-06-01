let col = document.querySelector('.decoration__count-value');
let plus = document.querySelector('.decoration__count-plus');
let minus = document.querySelector('.decoration__count-minus');

plus.onclick = function() {
    col.value = parseInt(col.value) + 1;
}

minus.onclick = function() {
    if (col.value > 1) {
        col.value = parseInt(col.value) - 1;
    }
}