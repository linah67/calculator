var stack=new Array();
function add( x, y){
   
    console.log((parseInt(x)+parseInt(y))+"addition")
    stack.push(parseInt(x)+parseInt(y))

}
function substract(x,y){
    stack.push(parseInt(x)-parseInt(y))
}
function multiply(x,y){
   
    stack.push(parseInt(x)*parseInt(y))

}
function divide(x,y){
    if(y==0){
        alert("You are dividing by zero!")
    }
    stack.push(parseInt(x)/parseInt(y))
}
function operate(operator,num1,num2){
    console.log(operator)
    switch(operator+""){
        case "+":
            add(num1,num2);
            break;
        case"-":
            substract(num1,num2);
            break;
        case"*":
            multiply(num1,num2);
            break;
        case "/":
            divide(num1,num2);
            break;
    }

}
function evaluate(){
    let op1;
    let op2;
    while(stack.length!=1){
        var element=stack.pop()
        if(element=="+"||element=="-"||element=="/"||element=="*"){
            op2=stack.pop()
            console.log(op2)
             operate(element,op1,op2)             
        }else{
           op1= element
           console.log(op1)

        }
    }
   
}
var operand=""
const buttons=document.querySelectorAll('button')
buttons.forEach(element => {
    element.addEventListener('click',()=>{
        if(element.innerText=="Clear"){
            const d=document.getElementsByClassName("screen")
            d.innerText=""
        }
        else if(element.innerText=="="){
            stack.push(operand)
            evaluate()
        const d=document.getElementsByClassName("screen")
        const b=document.createElement('p')
        b.innerText="="+stack.pop()
        d[0].appendChild(b)
        }else{
        if(element.innerText=="+"||element.innerText=="-"||element.innerText=="/"||element.innerText=="*"){
            const d=document.getElementsByClassName("screen")
            const b=document.createElement('p')
            b.innerText=element.innerText
            d[0].appendChild(b)
            stack.push(operand);
            stack.push(element.innerText)
            operand=""

        }else{
        const d=document.getElementsByClassName("screen")
        const b=document.createElement('p')
        b.innerText=element.innerText
        operand+=element.innerText;
        d[0].appendChild(b)
        }
    }
    }
    )
   
    
});
// for( i=0;i<10;i++){
//     console.log("ahlan");
//     const b=document.createElement('button');
//     b.innerText=i;
//     //b.style.backgroundColor="red";
//     const d=document.getElementsByClassName("");
//     d[0]. appendChild(b);
//     console.log(1);

// }
//console.log(operate("add",1,2));