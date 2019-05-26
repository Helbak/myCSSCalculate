let num1 = '';
let oldNum;
let result = 0;
let num = '';
let action;
function setNum1(n) {
    num1=n;
    return num1;
};
function setOldNum(n) {
    oldNum=n;
    return oldNum;
};
function setResult(n) {
    result=n;
    return result;
};
function getAction() {
    return action;
};
function setAction(a) {
    action = a;
    return action;
}

// let button = document.getElementsByClassName('buttons');
const inputFirst = document.getElementById('inputFirst');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const divide = document.getElementById('divide');
const multi = document.getElementById('multi');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const reset = document.getElementById('reset');
const equal = document.getElementById('equal');
const del = document.getElementById('del');

// button.addEventListener('click',firstFunction, true);
reset.addEventListener('click', allNull, true);
del.addEventListener('click', ce, true);
one.addEventListener('click', writeSign, true);
two.addEventListener('click', writeSign, true);
three.addEventListener('click', writeSign, true);
four.addEventListener('click', writeSign, true);
five.addEventListener('click', writeSign, true);
six.addEventListener('click', writeSign, true);
seven.addEventListener('click', writeSign, true);
eight.addEventListener('click', writeSign, true);
nine.addEventListener('click', writeSign, true);
zero.addEventListener('click', writeSign, true);
dot.addEventListener('click', writeDot, true);
plus.addEventListener('click', writeFunction, true);
equal.addEventListener('click', getResult, true);
minus.addEventListener('click', writeFunction, true);
divide.addEventListener('click', writeFunction, true);
multi.addEventListener('click', writeFunction, true);


function toScreen(n) {
    inputFirst.value = n;
    return n;
};

function allNull() {
    dot.disabled = false;
    oldNum = 0;
    num1 = '';
    toScreen(0);
    return num1;
};

function ce() {
    num1 = num1.substring(0, num1.length - 1);
    toScreen(num1);
    return num1;
};
function writeDot() {
    num1=num1+'.';
    dot.disabled = true;
    toScreen(num1);
    return num1;
}
function writeSign() {
    let type = this.getAttribute('data-type');
    if (num1.length <= 7) {

        num1 = num1 + type;

    }
    toScreen(num1);
    return num1;
}

function saveOldNum() {
    dot.disabled = false;
    oldNum = parseFloat(num1);
    num1 = '';
    return oldNum;
};

function writeFunction() {
    let type = this.getAttribute('data-type');
    saveOldNum();
    toScreen('');
    action = type;
    dot.disabled = false;
};

function getResult() {
       let act = action;
    switch (act) {

        case 'doPlus' :
            result = oldNum + parseFloat(num1);
            break;
        case 'doMinus' :
            result = oldNum - parseFloat(num1);
            break;
        case 'doDivide' :
            result = oldNum / parseFloat(num1);
            break;
        case 'doMulti' :
            result = oldNum * parseFloat(num1);
            break;
    }
     num1 = result;
    toScreen(num1);
    return num1;
};


