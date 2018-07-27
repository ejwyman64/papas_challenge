
//Get number values for points. 

function getValues () {
    var selectFields = document.getElementsByClassName('selectedValue');
    var radcheckFields = document.getElementsByClassName('radioschecksValue');
    var values=[];    
    var totalPoints=0;
    var result=[];
    
    
    for(var i = 0; i < selectFields.length; i++) {
      
        var select = selectFields[i];
        values.push(select.options[select.selectedIndex].value);
       // values.push(formValues[i].getAttribute("value"));
      
    }
    for(var i = 0; i < radcheckFields.length; i++) {
        
        if(radcheckFields[i].checked){
        values.push(radcheckFields[i].getAttribute("value"));
        }
    }

    for (var i=0; i < values.length; i++) {
        result.push(+values[i])
    }

    for (var i = 0; i < result.length; i++) {
        totalPoints += result[i]
    }
    
    console.log(values);
    console.log(result);
    console.log(totalPoints);
    //alert with username and thank you.
    var userName = document.getElementById('user-name').value;
    alert("Thank you " + userName + " for submitting today's points! Your total points is: " + totalPoints);

}

//Submit button function
// submitForm.addEventListener('click', () => { 

//     //alert with username and thank you.
//     var userName = document.getElementById('user-name').value;
//     alert("Thank you " + userName + " for submitting today's points! Your total points today is: " + totalPoints);

// })

//Fade in large text
const greeting = document.getElementById('large-text');

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


