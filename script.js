let [computer_score,user_score]=[0,0];
/* the result is fetched by using variable of result_ref */
let result_ref = document.getElementById("result");
/* the various test cases are written
user option, computer option :result */
let choices_object = {
    'rock' : {
        'rock' : 'draw',
        'scissor' : 'win',
        'paper' : 'lose'
    },
    'scissor' : {
        'rock' : 'lose',
        'scissor' : 'draw',
        'paper' : 'win'
    },
    'paper' : {
        'rock' : 'win',
        'scissor' : 'lose',
        'paper' : 'draw'
    }

}
/*function named checker is attached to the button icon */
function checker(input){
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random()*3);
/*computer choice in the details section is updated by using innerHtml property.
 and prints the statement , inside span element is fills up the value in the 
 array named choices 
 using string interpolation its possible to enter the value
 Here is used the var choices variable to get inputs from*/
    document.getElementById("comp_choice").innerHTML = 
    ` Computer choose <span> ${choices[num].toUpperCase()} </span>`;
/*the user choice in the details is updated by using innerHtml property
it prints the statement below, inside span element it fills up the 
value of input which is obtained from checker(input)
As in the button section we have used the same function */
    document.getElementById("user_choice").innerHTML = 
    ` You choose <span> ${input.toUpperCase()} </span>`;
/*a new variable computer choice is taken and is equated to choices(num)as genral rock paper
scissors options are given in the array */
    let computer_choice = choices[num];
/*the choices object collects the data like win , draw, lose */
    switch(choices_object[input][computer_choice]){
        case 'win':
            result_ref.style.cssText = "background-color: #cefdce; color: #689f38";/*the result block changes it color and background */
            result_ref.innerHTML = "YOU WIN"; /*the innerhtml property is used and updated score of result*/ 
            user_score++; /*the user score gets updated , intially it is made zero */
            break;
        case 'lose':
            result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++; /*the computer score gets updated at the top*/
            break;
        default:
            result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
            result_ref.innerHTML = "DRAW";
            break;
    }
/*Finally the user choice and computer choice gets updated in the index file of span element */
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}