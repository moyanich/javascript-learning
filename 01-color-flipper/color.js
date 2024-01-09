const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

const outputElement = document.getElementById('weather-output');

btn.addEventListener('click', function() {
    let hexColor = "";

    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    const apiUrl = `https://www.thecolorapi.com/id?hex=${hexColor}`;


    // Make a GET request
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        const hexValue = data.hex.value;
        // const description = data.weather[0].description;
        // const location = data.name;
        outputElement.innerHTML = `<p>${hexValue}`;


    })
    .catch(error => {
        console.error('Error:', error);
    });

    color.textContent = '#' + hexColor;
    document.body.style.backgroundColor = '#' + hexColor;

});


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}


function copyHexCode() {
    color.addEventListener('click', function() {

        console.log("is lcied");
    }) 



}



