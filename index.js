
// $(document).keypress(function(event) {
//     let keyPressed = event.key;
//     if (!isNaN(parseInt(keyPressed)) || "+-*/".includes(keyPressed)) {
//         appendDisplay(keyPressed);
//     }
// });

$("button").on("click touchstart", function() {
    let buttonValue = $(this).text(input);
    appendDisplay(buttonValue);
})


// Code that displays the value of the clicked button
function appendDisplay(input) {
    let inputValue = $("#display").val() + input;
    $("#display").val(inputValue);  
    displayLimit();   
}  

// Code that clears the entire display
function clearDisplay() {
    $("#display").val("");      
}

// Code that deletes the last character on the display
function deleteDisplay(input) {
    let enteredValue = $("#display").val().slice(0, -1);
    $("#display").val(enteredValue);  
}

// Code that executes expressions that include arithmetic operators
function calculate() {
    let displayValue = $("#display").val();
    divisionCalc();
    let expression = eval(displayValue);
    $("#display").val(expression);
}
 
// Code that calculates the inverse of the displayed number
function inverse() {
    var number = parseFloat($("#display").val());
    var over = 1 / number;
    $("#display").val(over);
    displayLimit();
}

// Handles the square root of the displayed number
function rootOfElement() {
    let number = parseFloat($("#display").val());
    let sqrt = Math.sqrt(number);
    $("#display").val(sqrt);
    displayLimit(); 
}

// Handles the percentage of he displayed number
function percentage() {
    let number = parseFloat($("#display").val());
    let percentile = number / 100;
    $("#display").val(percentile);
    displayLimit();
} 

// Handles the square of nthe displayed number
function squareOf() {
    let number = parseFloat($("#display").val());
    let square = number * number;
    $("#display").val(square);
    displayLimit();
}

// calculating using the division sign
function divisionCalc () {
    let expression = $("#display").val();

    // code checking if the division sign is included in the expression
    if (expression.includes("÷")) {
        let operands = expression.split("÷");

        // ensures that there are 2 different operands
        if(operands.length === 2) {
            let operand1 = parseFloat(operands[0]);
            let operand2 = parseFloat(operands[1]);

            // check if the operands does not include a zero
            if (operands !==0) {

                // perform the division operation
                let result = operand1 / operand2;
                $("#display").val(result);
            }else {
                // division by zero error
                $("#display").val("error");
            }
            // handling more than 2 operands error
        } else{
            $("#display").val("Invalid");
        }

    // code handling error that does not include the operator
    }
}

// limiting the display
function displayLimit(){
    let display = $("#display"); 
    let maxLength = 8;     
    let slicing = display.val().slice(0, maxLength);

    if(display.val().length > maxLength){
        display.val(slicing);    
    }
}