// Create a pizza object that has four properties and three methods

// let pizza = {};

// pizza.size = 'large';
// pizza.toppings = ['spinach', 'onions', 'peppers', 'bell peppers'];
// pizza.crust = 'stuffed';
// pizza.sauce = 'heavy';

// pizza.estimateDeliveryTime = function() {
//     console.log('Calculating...');
// }

// pizza.estimateDeliveryTime = function() {
//     console.log('Calculating...');
// }

// pizza.burnMouth = function() {
//     console.log('Yikes....');
// }

// pizza.frisbee = function() {
//     console.log('Roll baby');
// }


function Pizza(size, toppings, crust, sauce) {
    this.size = size;
    this.toppings = toppings;
    this.crust = crust;
    this.sauce = sauce;

    this.estimateDeliveryTime = function() {
       console.log('Calculating...');
    }
    
    this.burnMouth = function() {
        console.log('Yikes....');
    }

    this.frisbee = function() {
        console.log('Roll baby');
    }

}

let pizza = new Pizza("12", ["Pineapple", "peppers", "mushrooms"], "stuffed", "tomato");

console.log(pizza);

