window.addEventListener("load", bindEvent);

var firstNum;
var secondNum;
var result = 0;

function bindEvent()
{
    firstNum = document.getElementById("f_num");
    secondNum = document.getElementById("s_num");
    // document.getElementById("add").addEventListener('click', calc);
    // document.getElementById("sub").addEventListener('click', calc);
    // document.getElementById("div").addEventListener('click', calc);
    // document.getElementById("mul").addEventListener('click', calc);

    buttons = document.getElementsByTagName("button");
    for(var i = 0; i < buttons.length; i++)
    {
        buttons[i].addEventListener('click', calc);
    }
}

function calc(evt)
{
    // var element = event.srcElement; ->deprecated
    var opr = evt.srcElement.innerHTML;
    // console.log(opr);
    var expression = firstNum.value + opr + secondNum.value;
    // console.log(expression);
    var result = eval(expression);
    document.getElementById("result").innerHTML = result;
}

// function add()
// {
//     result = parseInt(firstNum.value) + parseInt(secondNum.value);
//     document.getElementById("result").innerHTML = result;
// }

// function sub()
// {
//     result = parseInt(firstNum.value) - parseInt(secondNum.value);
//     document.getElementById("result").innerHTML = result;
// }

// function div()
// {
//     result = parseInt(firstNum.value) / parseInt(secondNum.value);
//     document.getElementById("result").innerHTML = result;
// }

// function mul()
// {
//     result = parseInt(firstNum.value) * parseInt(secondNum.value);
//     document.getElementById("result").innerHTML = result;
// }

