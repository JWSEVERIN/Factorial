
let calc = document.getElementById("calc");

calc.onclick = () => {
    const num = document.querySelector("#number").value;
    var arr = 1;
    const err = '!Negative numbers can not be factored! ';
    for (var i = num; i > 0; i--) {
        arr *= i 
    }
    if (num < 0) {
      document.getElementById("error").innerHTML = err;

    } else  {
        document.getElementById("result").innerHTML = arr;
      }
   
}
clrData.onclick = () => {
  document.getElementById("error").innerHTML = " ",
  document.getElementById("result").innerHTML = " ",
  document.getElementById("number").value = " ";
}

