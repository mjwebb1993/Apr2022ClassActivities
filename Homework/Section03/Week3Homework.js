//#1
const pizzaToppings = ["pepperoni", "sausage", "onions", "peppers"];

//#2
function greetCustomer() {
  let greeting = `Welcome to The Pizza House, our toppings are: `;
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}

//#3
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of toppings) {
    order += `${topping}, `;
  }
  console.log(`${order}. Coming up!`);
  return [size, crust, toppings];
}

// call getPizzaOrder with parameters...

//#4
function preparePizza([orderSize, orderCrust, orderToppings]) {
  console.log("...your pizza is cooking...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}

//#5
function servePizza(pizza) {
  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderReady += `${topping}, `;
  }
  console.log(`${orderReady}. Enjoy!`);
  return pizza;
}

//#6
greetCustomer();
servePizza(
  preparePizza(getPizzaOrder("large", "thin", "sausage", "onions", "peppers"))
);
