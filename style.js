let firstName = prompt("What is your name?");
let sign = prompt("What is your quest?");
let iceCreamPrompt = prompt("Do you like ice cream? (y or n)");
if(iceCreamPrompt=="y")
{
    alert('Hello ' + firstName + ' Monty Python\'s flying cricus is the best ' + sign + '. You like ice cream.');
}
else
{
    alert('Hello ' + firstName + ' Monty Python\'s flying cricus is the best ' + sign + '. You do not like ice cream.');
}

document.write('<h3>' + sign + '</h3>');