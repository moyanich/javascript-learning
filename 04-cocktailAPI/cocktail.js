// The user will enter a cocktail. Get cocktail name, photo and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrinkRecipe);

const outputIngredients = document.getElementById('cocktails')

function getDrinkRecipe() {
    let drink = document.getElementById("drink").value;
   
    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data);
        const strDrink = data.drinks[0].strDrink;
        const strDrinkThumb = data.drinks[0].strDrinkThumb;
        const instructions = data.drinks[0].strInstructions;
        outputIngredients.innerHTML = `<img src="${strDrinkThumb}"><p>${strDrink}</p><div>${instructions}</div>`;
    })
    .catch(err => {
        console.log(`error ${err}`)
    });


}