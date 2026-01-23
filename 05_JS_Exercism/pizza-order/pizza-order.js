/**
 * Calculate the price of a single pizza.
 *
 * @param {string} pizza
 * @param  {...string} extras
 * @returns {number}
 */
export function pizzaPrice(pizza, ...extras) {
  let price = 0;

  // Base pizza prices
  if (pizza === 'Margherita') {
    price = 7;
  } else if (pizza === 'Caprese') {
    price = 9;
  } else if (pizza === 'Formaggio') {
    price = 10;
  }

  // Extras
  for (const extra of extras) {
    if (extra === 'ExtraSauce') {
      price += 1;
    } else if (extra === 'ExtraToppings') {
      price += 2;
    }
  }

  return price;
}


/**
 * Calculate the total price of an order.
 *
 * @param {PizzaOrder[]} orders
 * @returns {number}
 */
export function orderPrice(orders) {
  let total = 0;

  for (const order of orders) {
    total += pizzaPrice(order.pizza, ...order.extras);
  }

  return total;
}
