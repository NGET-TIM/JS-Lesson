// by by id
var getHello = document.getElementById('hello');
console.table(getHello.innerHTML);
document.getElementById('hello').innerHTML = getHello.innerHTML + " OK";

// by query selector
const getHelloByQuery = document.querySelector('#hello').innerHTML;
// alert(getHelloByQuery);

// get by tag

const getHelloByTag = document.getElementsByTagName('h1')[0].innerHTML;
// alert("Hello From: " + getHelloByTag);

// get by class

const getHelloByClass = document.getElementsByClassName('hello')[0].innerHTML;
// alert("Hello From: " + getHelloByClass);

// get value from input field

var btncalc = document.getElementById('btnCalc');
btncalc.addEventListener('click', clickBtnCal);

function clickBtnCal(ok) {
    var thisBtn = ok.target;
    var val1 = parseFloat(document.getElementById('input1').value);
    var val2 = parseFloat(document.getElementById('input2').value);
    var getOperator = document.getElementById('operator').value;
    var total = 0;
    if (getOperator == "+") {
        total = (val1 + val2);
    } else if (getOperator == "-") {
        total = (val1 - val2);
    } else if (getOperator == "/") {
        total = (val1 / val2);
    } else if (getOperator == "*") {
        total = (val1 * val2);
    } else {
        total = 0;
    }

    result.innerHTML = total.toFixed(2);
    console.log(total);
}

// get all operator
const operator = document.getElementsByClassName('operator');

for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', clickOperator);
}

function clickOperator() {
    var getOperator = this.innerHTML;
    document.getElementById('operator').value = getOperator;
}

// calculator 
const btnClear = document.getElementsByClassName('clear')[0].addEventListener('click', function() {
    var hello = document.getElementById('hello');
    hello.innerText = hello.innerText.slice(0, -1);
});