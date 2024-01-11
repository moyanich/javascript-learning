/*
@link https://www.freecodecamp.org/news/make-api-calls-in-javascript/
https://www.thecolorapi.com/docs
*/ 

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById('btn');
const colorDisplay = document.querySelector('.color');

colorDisplay.addEventListener('click', function handleClick() {
    console.log('element clicked');

    // const copyContent = async () => {
    //     try {
    //       await copyToClipboard(color.innerText);
    //       console.log('Content copied to clipboard');
    //     } catch (err) {
    //       console.error('Failed to copy: ', err);
    //     }
    //  }

    navigator.clipboard.readText().then((clipText) => (document.getElementById("colorCode").innerText = clipText));

});


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
       // console.log(data);

        const hexValue = data.hex.value;
        // const description = data.weather[0].description;
        // const location = data.name;
        //outputElement.innerHTML = `<p>${hexValue}`;

        colorDisplay.textContent = `${hexValue}`;
        document.body.style.backgroundColor = `${hexValue}`;


    })
    .catch(error => {
        console.error('Error:', error);
    });

});


function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}


function updateClipboard(newClip) {
    navigator.clipboard.writeText(newClip).then(
      () => {
        /* clipboard successfully set */
      },
      () => {
        /* clipboard write failed */
      },
    );
}
          
       


