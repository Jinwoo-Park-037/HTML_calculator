
function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function operate(str)
{
    let components = str.split(" ");

    switch ((String)(components[1]))
    {
        case '+':
            return add((Number) (components[0]), ((Number) (components[2])))
        case '-':
            return subtract((Number) (components[0]), ((Number) (components[2])));
        case '*':
            return multiply((Number) (components[0]), ((Number) (components[2])));
        case '/':
            if (components[2] == "0")
            {
                return "Error";
            }
            else{
                return divide((Number) (components[0]), ((Number) (components[2])));
            }
            
    }

}

let input = "Enter something!";
let operator = false;


function numericalInputClick(a)
{
    if (input == "Enter something!" || input == "Error")
    {
        input = a;
    }
    else if (['1','2','3','4','5','6','7','8','9','0'].includes(input.charAt(input.length-1)))
    {
        input += a;
    }
    else
    {
        input += " " + a;
    }
    
}

function operatorInputClick(b)
{
    if (!operator && ['1','2','3','4','5','6','7','8','9','0'].includes(input.charAt(input.length-1)))
    {
        operator = true;
        input += " " + b;
    }
    else
    {
        operator = false;
        input = "Error";
    }
}

function equals()
{
    if (operator && ['1','2','3','4','5','6','7','8','9','0'].includes(input.charAt(input.length-1)))
    {
        input = (String) (operate(input));
        operator = false;
    }
    else
    {
        input = "Error";
        operator = false;
    }

}

function clear()
{
    input = "Enter something!";
    operator = false;
}


const mainContainer = document.getElementById("main-container");

const inputDisplay = document.createElement("div");

inputDisplay.setAttribute("id", "prompt");
inputDisplay.style.cssText = "box-sizing: border-box; outline: 1px solid black; height: 80px; width: 500px; padding: 2px;";
inputDisplay.innerHTML = `<h1>${input}</h1>`

mainContainer.appendChild(inputDisplay);

const buttons = document.createElement("div");
buttons.style.cssText = "border-right: 1px solid black; display: flex; flex-direction: column; justify-content: space-between; align-items: space-between; height: 500px; width: 500px;";

let num1 = 1;
let num2 = 1;

for (let i = 0; i < 3; i++)
{
    const row = document.createElement("div");
    row.setAttribute("class", "row");
    row.style.cssText = "border-bottom: 1px solid black; display: flex; justify-content: space-between; align-items: space-between;";

    for (let j = 0; j < 3; j++)
    {
        const button = document.createElement("div");
        button.style.cssText = "border-left: 1px solid black; display: flex; justify-content: center; align-items: center; text-align: center; height: 125px; width: 125px;";
        button.innerHTML = `<h1>${num1}</h1>`;
        button.addEventListener("click", function() {
            numericalInputClick((String) (i*3 + j+1))
            const inputDisplay = document.getElementById("prompt");
            inputDisplay.innerHTML = `<h1>${input}</h1>`
        });
        num1++;
        row.appendChild(button);
    }

    const button = document.createElement("div");
    button.style.cssText = "border-left: 1px solid black; display: flex; justify-content: center; align-items: center; text-align: center; height: 125px; width: 125px;";
    
    let text;

    switch (num2){
        case 1:
            text = "+";
            button.addEventListener("click", function() {
                operatorInputClick("+");
                inputDisplay.innerHTML = `<h1>${input}</h1>`
            });
            break;
        case 2:
            text = "-";
            button.addEventListener("click", function() {
                operatorInputClick("-");
                inputDisplay.innerHTML = `<h1>${input}</h1>`
            });
            break;
        case 3:
            text = "*";
            button.addEventListener("click", function() {
                operatorInputClick("*");
                inputDisplay.innerHTML = `<h1>${input}</h1>`
            });
            break;
    }

    button.innerHTML = `<h1>${text}</h1>`;

    num2++;
    row.appendChild(button);

    buttons.appendChild(row);
}

const row2 = document.createElement("div");
row2.setAttribute("class", "row");
row2.style.cssText = "border-bottom: 1px solid black; display: flex; justify-content: space-between; align-items: space-between;";


const button1 = document.createElement("div");
button1.style.cssText = "border-left: 1px solid black; display: flex; justify-content: center; align-items: center; text-align: center; height: 125px; width: 125px;";
button1.innerHTML = "<h1>C</h1>";
button1.addEventListener("click", function(){
    clear();
    inputDisplay.innerHTML = `<h1>${input}</h1>`;
});

row2.appendChild(button1);


const button2 = document.createElement("div");
button2.style.cssText = "border-left: 1px solid black; display: flex; justify-content: center; align-items: center; text-align: center; height: 125px; width: 125px;";
button2.innerHTML = "<h1>0</h1>";
button2.addEventListener("click", function() {
    numericalInputClick("0");
    inputDisplay.innerHTML = `<h1>${input}</h1>`;
});
row2.appendChild(button2);


const button3 = document.createElement("div");
button3.style.cssText = "border-left: 1px solid black; display: flex; justify-content: center; align-items: center; text-align: center; height: 125px; width: 125px;";
button3.innerHTML = "<h1>/</h1>";
button3.addEventListener("click", function(){
    operatorInputClick("/");
    inputDisplay.innerHTML = `<h1>${input}</h1>`
});
row2.appendChild(button3);


const button4 = document.createElement("div");
button4.style.cssText = "border-left: 1px solid black; display: flex; justify-content: center; align-items: center; text-align: center; height: 125px; width: 125px;";
button4.innerHTML = "<h1>=</h1>";
row2.appendChild(button4);
button4.addEventListener("click", function(){
    equals();
    inputDisplay.innerHTML = `<h1>${input}</h1>`
});
buttons.appendChild(row2);



mainContainer.appendChild(buttons);
















