window.addEventListener("load", initEvents);

var username;
var usermail;
var pwd;
var cpwd;
var file;
var span;

function initEvents()
{
    username = document.querySelector("#username");
    usermail = document.querySelector("#useremail");
    pwd = document.querySelector("#pwd");
    cpwd = document.querySelector("#cpwd");
    file = document.querySelector("#file");
    span = document.querySelectorAll("span");

    //username.addEventListener('blur', blankCheck);

    username.addEventListener("blur", validateUserName);
   // usermail.addEventListener("blur", validateEmail);
    usermail.addEventListener("keyup", validateEmail);
}

function validateUserName()
{
    var text = username.value;
    text = text.trim();
    blankCheck(text, 0);
}

function validateEmail()
{
    var text = usermail.value;
    text = text.trim();
    blankCheck(text, 1);

    var pattern = /([a-z|0-9]\w+[@]\w+[.]+[a-z]{2,3}$)/;
    var result = pattern.test(text);
    console.log(result);
    if(result)
    {
        span[1].innerHTML = "Valid Email";
    }
    else {
        span[1].innerHTML = "Not a Valid Email";
    }
}


function blankCheck(text, id)
{
    var text = username.value;
    text = text.trim();
    console.log("Function Executed");
    // if(text == "" || text.length == 0)
    // {
    //     span[0].innerHTML = 'Please fill out this field';
    // }
    // else {
    //     span[0].innerHTML = '';
    // }

    if(isEmpty(text))
    {
        span[id].innerHTML = 'Please fill out this field';
    }
    else {
        span[id].innerHTML = '';
    }
    

}

function isEmpty(text)
{
    return (text == undefined || text == null || text == "") ? true : false; // ? : - ternary operator (if-else shorthand)
}