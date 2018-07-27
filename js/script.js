
//Get number values for points. 

function getValues() {
    var selectFields = document.getElementsByClassName('selectedValue');
    var radcheckFields = document.getElementsByClassName('radioschecksValue');
    var values = []; //strings
    var result = []; //numbers
    var totalPoints = 0;
    

    //Getting values from dropdown menues
    for (var i = 0; i < selectFields.length; i++) {

        var select = selectFields[i];
        values.push(select.options[select.selectedIndex].value);
        // values.push(formValues[i].getAttribute("value"));

    }

    //Getting values from radio buttons and check boxes
    for (var i = 0; i < radcheckFields.length; i++) {

        if (radcheckFields[i].checked) {
            values.push(radcheckFields[i].getAttribute("value"));
        }
    }

    //converting values strings into numbers
    for (var i = 0; i < values.length; i++) {
        result.push(+values[i])
    }

    //Adding all of the points together
    for (var i = 0; i < result.length; i++) {
        totalPoints += result[i]
    }

    console.log(values);
    console.log(result);
    console.log(totalPoints);

    //alert with username, thank you, and points.
    var userName = document.getElementById('user-name').value;
    alert("Thank you " + userName + " for submitting today's points! Your total points is: " + totalPoints);

}

//Fade in large text
const greeting = document.getElementById('large-text');

function showGreeting(ele, waitTime) {
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


