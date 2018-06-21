function showReps() {
    var checkBox = document.getElementById("stretching");
    var lenghtOfStretch = document.getElementById("stretchMinutes");

    if (checkBox.checked == true){
        lenghtOfStretch.style.visibility = "visible";
        } else {
        lenghtOfStretch.style.visibility = "hidden";
        }

}

function showReps2() {
    var checkBox = document.getElementById("squats, pushups, lunges");
    var reps = document.getElementById("basicReps");

    if (checkBox.checked == true){
        reps.style.visibility = "visible";
        } else {
        reps.style.visibility = "hidden";
        }

}

