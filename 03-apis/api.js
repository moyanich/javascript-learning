// Get a dog photo from the Dog CEO API and place it in the DOM.

// fetch(url)
//     .then(res => res.json()) // parse response as JSON
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log(`error ${err}`)
//     });


fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json()) // parse response as JSON
.then(data => {
    console.log(data);
   // document.getElementById("dog").src = data.message; 

    document.querySelector('img').src = data.message; 
})
.catch(err => {
    console.log(`error ${err}`)
});
