//1 display number in text box

function displayNum(num){
console.log(num);//7
result.value+=num;
}


//2 clear text box
function clearBox(){
  result.value="";
}

//3 evaluate expression
 function evaluateExpression(){
// exp=result.value;//exp=7*8
// output=eval(exp);//output=56
// result.value=output;

result.value=eval(result.value);
}


//4 Remove last item from text box

function removeLast(){
  currentexp=result.value;//790900
  result.value=currentexp.slice(0,-2);
}










































// // 1 display number in text box

// function displayNum(num){
//     // console.log(result);
//     result.value+=num;
// }
// //2 clear text box
// function clearBox(){
//     result.value="";
// }
// //3 evaluate expression
// function evaluateExpression(){
//     expression=result.value;
//     output=eval(expression);
//     result.value=output;
// }

// //4 Remove last item from text box
// function removeLastItem(){
//     currentExpression=result.value;
//    result.value=currentExpression.slice(0,-1);
// }

