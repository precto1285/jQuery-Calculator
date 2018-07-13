
$(document).ready(function () {

    //Global Variables
    var firstNumber = 0;
    var secondNumber = 0;
    var operator = "";
    var result = 0;
    var isOperatorChosen = false;
    var isCalculated = false;

    //function to initialize Calculator
    function initializeCalculator() {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        isOperatorChosen = false;
        isCalculated = false;

        $("#first-number, #second-number, #operator, #result").empty();
    }

    $(".card").on("click", ".number", function () {

        //Check if already run a calculation
        if (isCalculated) {
            return false;
        }

        //If operator is chose, write the secondNumber, otherwise, the firstNumber
        if (isOperatorChosen) {
            secondNumber += $(this).val();
            $("#second-number").text(secondNumber);
        }
        else {
            firstNumber += $(this).val();
            $("#first-number").text(firstNumber);
        }
    }).on("click", ".operator", function () {

        // Check if first number has been selected
        // Or we've already run a calculation, if so, exit
        if(!firstNumber || isCalculated) {
            return false;
        }

        //Set isOperatorChosen to true to start writing secondNumber
        isOperatorChosen = true;

        //Store off the operator
        operator = $(this).val();

        //Set the html of the #operator to the text of what was clicked
        $("#operator").text($(this).text());

    }).on("click", ".equal",function() {
        //If we already clicked equal, do not run calculation again
        if(isCalculated) {
            return false;
        }

        //Set isCalculated to true
        isCalculated = true;

        //Use parseInt to convert our string representation of numbers into intergers
        firstNumber = parseInt(firstNumber);
        secondNumber = parseInt(secondNumber);

        //Operator choice
        //Run the operation and set the HTML of the result
        if(operator === "plus") {
            result = firstNumber + secondNumber;
        }
        else if(operator === "minus") {
            result = firstNumber - secondNumber;
        }
        else if(operator === "times") {
            result = firstNumber * secondNumber;
        }
        else if(operator === "divide") {
            result = firstNumber / secondNumber;
        }
        else if(operator === "power"){
            result = furstNumber ^ secondNumber;
        }

        $("#result").text(result);

    }).on("click", ".clear", function() {
        //Call initializeCalculator to reset the state of app
        initializeCalculator();
    });

    //Call intializeCalculator to set th state of app
    initializeCalculator();

});