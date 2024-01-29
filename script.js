btn.addEventListener("click",calculate);
function calculate()
{
console.log("Clicked");
let num1 = parseInt(document.getElementById("num_1").value);
let num2 = parseInt(document.getElementById("num_2").value);
let ch = document.getElementById("opt").value;
let button = document.getElementById("btn");
let res = document.getElementById("result");
let result;
switch(ch)
{
    case "add":
        result= num1+num2;
        break;
    case "subtarct":
        result = num1-num2;
        break;
    case "multiply":
        result = num1*num2;
        break;
    case "division":
        result= num1/num2;
        break;
    default:
        result="Invalid Operation";
}
    res.textContent=`Your answer is: ${result}`;
    num1.value=" ";
    num2.value=" ";
}
