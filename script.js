var total=0;
function multiply(){
    var firstNum = document.getElementById("number1").value;
    console.log(firstNum);
    var lastNum = document.getElementById("number2").value;
    console.log(lastNum);
    total = firstNum*lastNum;
    const resultvalue=document.getElementById("resultvalue");
    resultvalue.innerHTML=`The multipication of two number is: ${total}`;
}
