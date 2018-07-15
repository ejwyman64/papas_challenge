
//Submit alert
const submitForm = document.querySelector('#submit');

submitForm.addEventListener('click', () => {
    alert("Thank you for submitting today's points!");
})

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
