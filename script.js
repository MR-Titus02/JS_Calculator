

function add() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let add = Number(num1) + Number(num2);
    document.getElementById("answer").innerHTML = add;
}

function Sub() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let Sub = Number(num1) - Number(num2);
    document.getElementById("answer").innerHTML = Sub;
}

function Mul() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let Mul = Number(num1) * Number(num2);
    document.getElementById("answer").innerHTML = Mul;
}

function Div() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    if (num2 == 0) {
        window.alert("Cannot divide byJavaScript Classwork 02 zero!");
        document.getElementById("answer").innerHTML = "Cannot divide byJavaScript Classwork 02 zero!";
    } else {
        let div = Number(num1) / Number(num2);
        document.getElementById("answer").innerHTML = div;
    }
}