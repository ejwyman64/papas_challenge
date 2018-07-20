
//Submit alert
const submitForm = document.querySelector('#submit');
const greeting = document.getElementById('large-text');



//Submit button function
submitForm.addEventListener('click', () => {
    var userName = document.getElementById('user-name').value;
    alert("Thank you " + userName + " for submitting today's points!");
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
    showGreeting(greeting, 700);
});