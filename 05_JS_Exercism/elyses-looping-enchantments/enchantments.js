// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 * @returns {number}
 */
export function cardTypeCheck(stack, card) {
  let count = 0;

  stack.forEach((currentCard) => {
    if (currentCard === card) {
      count++;
    }
  });

  return count;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type true = even, false = odd
 * @returns {number}
 */
export function determineOddEvenCards(stack, type) {
  let count = 0;

  for (const card of stack) {
    if (type === true && card % 2 === 0) {
      count++;
    } else if (type === false && card % 2 !== 0) {
      count++;
    }
  }

  return count;
}
