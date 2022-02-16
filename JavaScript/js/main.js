const previous = document.getElementById("first-number");
const current = document.getElementById("second-number");
const buttons = Array.from(document.getElementsByClassName('num-buttons'));

let symbol;
let length = 0;
let firstNumber = "";
let secondNumber = "";
let newOp = false;
let result;
buttons.map(btn =>{
    btn.addEventListener('click', (e) =>{
        let pressedBtn = e.target.innerText;
        switch(pressedBtn){
            case '+':
            case '-':
            case '/':
            case '*':
                addFirstOperand(pressedBtn);
                break;
            case 'C':
                clear();
                break;
            case '.':
                if(length < 15){
                    length += 1;
                    current.innerHTML += e.target.innerHTML;
                }
                break;
            case '=':
                result = total(symbol)
                current.innerText = result;
                symbol = undefined;
                newOp = true;
                break;
            default:
                if(length < 15){
                    length += 1;
                    current.innerHTML += e.target.innerHTML;
                }
                break;
                
        }
    });
});

function addFirstOperand(btn){
    length = 0;
    if(firstNumber != "") {
        result = total(symbol);
        previous.innerText = result;
        firstNumber = result;
        
        symbol = btn;
        
    }else {
        firstNumber = current.innerText;
        previous.innerText = firstNumber;
        symbol = btn;
    }
    current.innerText = "";
}
function clear(){
    length = 0;
    firstNumber = "";
    secondNumber = "";
    symbol = undefined;
    previous.innerHTML = "";
    current.innerHTML = "";
}

function total(btn){
    firstNumber = Number(firstNumber);
    secondNumber = Number(current.innerText);
    let aux;
    switch(btn){
        case '+':
            aux = firstNumber + secondNumber;
            firstNumber = aux;
            return aux;
        case '-':
            aux = firstNumber - secondNumber;
            firstNumber = aux;
            return aux;
        case '*':
            aux = firstNumber * secondNumber;
            firstNumber = aux;
            return aux;
        case '/':
            if(secondNumber == 0){
                alert("No se puede dividir por 0");
                return;
            }
            aux = firstNumber / secondNumber;
            firstNumber = aux;
            return aux;
        default:
            return "Error";
    }
}