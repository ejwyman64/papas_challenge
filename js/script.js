var formBoxes = [];

const stretchBox = document.getElementById('stretching');
const stretchDiv = document.getElementById('stretchMinutes');

stretchBox.addEventListener('click', () => {
    if (stretchDiv.style.display == 'block') {
        stretchDiv.style.display = 'none';
    } else {
        stretchDiv.style.display = 'block';
    }
})

