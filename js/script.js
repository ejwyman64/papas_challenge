
//Submit alert
const submitForm = document.querySelector('#submit');

//Fade in large text
const greeting = document.getElementById('large-text');

var totalPoints = [0];

var formInput = [document.querySelectorAll('.form')];
console.log(formInput);

//Submit button function
submitForm.addEventListener('click', () => { 


    //testing value selection
    var timeStretch = document.getElementById("stretchMinutes");
    var stretchPoints = timeStretch.options[timeStretch.selectedIndex].value;
    totalPoints =+ stretchPoints;
    

    //alert with username and thank you.
    var userName = document.getElementById('user-name').value;
    alert("Thank you " + userName + " for submitting today's points! Your total points today is: " + totalPoints);

})

function showGreeting (ele, waitTime) {
    $(ele).fadeIn(waitTime);
}
 
//Hide surprise -----
//When 'reveal' is clicked
$('.greeting #surprise').hide();

$('.greeting #reveal').click(function () {
    //show the 'surprise'
    $('.greeting #surprise').show();

    //hide the 'reveal'
    $('.greeting #reveal').hide();
});

$('.greeting #surprise').click(function () {
    $('.greeting #reveal').show();
    $('.greeting #surprise').hide();
});

$(document).ready(function () {
    showGreeting(greeting, 3000);
});


