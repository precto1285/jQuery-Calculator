
$(document).ready(function() {

    //Global Variables
    var firstNumber= 0;
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

});