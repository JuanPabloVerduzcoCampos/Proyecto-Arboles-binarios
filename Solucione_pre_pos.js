//posorder
//let exprecion = "342*-11/+"; 
//let exprecion = "432*+6-9+36*9/+"
//let exprecion = "24*2-66/+"

//preorder
//let exprecion = "+-3*42/11";
//let exprecion = "++-+4*3269/*369";
//let exprecion = "+-*242/66";



let desglose = exprecion.split("");
let vectorpre = [];
let vectorpos = [];


//Conversor a numeros
for(let i = 0; i < desglose.length; i++){
    if(desglose[i] == "+" || desglose[i] == "-" || desglose[i] == "*" || desglose[i] == "/"){

    }else{
        desglose[i] = parseInt(desglose[i]);
    }
}


// Solucion de la expresion
if(desglose[0] === "+" || desglose[0] === "-" || desglose[0] === "*" || desglose[0] === "/"){
    //preorder
    console.log("------------------------------");
    console.log("Exprecion preorder "+desglose);
    console.log("------------------------------");

    for(let i = 0; i < desglose.length; i++){
        vectorpre.push(desglose[i]);
    }

    for(let i = vectorpre.length-1; i >= 0; i--){
        if(vectorpre[i] === "+" || vectorpre[i] === "-" || vectorpre[i] === "*" || vectorpre[i] === "/"){
            let operacion = vectorpre[i];
            let num1 = vectorpre[i+1];
            let num2 = vectorpre[i+2];
            let resultado = 0;
            if(operacion === "+"){
                resultado = num1 + num2;
            }else if(operacion === "-"){
                resultado = num1 - num2;
            }else if(operacion === "*"){
                resultado = num1 * num2;
            }else if(operacion === "/"){
                resultado = num1 / num2;
            }
            vectorpre.splice(i, 3, resultado);
        }
    }

}else{
    //posorder
    console.log("------------------------------");
    console.log("Exprecion posorder "+desglose);
    console.log("------------------------------");

    for(let i = desglose.length-1; i >= 0; i--){
        vectorpos.push(desglose[i]);
    }

    for(let i = vectorpos.length-1; i >= 0; i--){
        if(vectorpos[i] === "+" || vectorpos[i] === "-" || vectorpos[i] === "*" || vectorpos[i] === "/"){
            let operacion = vectorpos[i];
            let num1 = vectorpos[i+1];
            let num2 = vectorpos[i+2];
            let resultado = 0;
            if(operacion === "+"){
                resultado = num2 + num1;
            }else if(operacion === "-"){
                resultado = num2 - num1;
            }else if(operacion === "*"){
                resultado = num2 * num1;
            }else if(operacion === "/"){
                resultado = num2 / num1;
            }
            vectorpos.splice(i, 3, resultado);
        }
    }
}

//Imprimir la exprecion resuelta
if(desglose[0] === "+" || desglose[0] === "-" || desglose[0] === "*" || desglose[0] === "/"){
    console.log(vectorpre);

}else{
    console.log(vectorpos);
}

