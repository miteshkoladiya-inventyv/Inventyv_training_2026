// @ts-check

/**
 * Get the position (index) of the card in the given stack
 */
export function getCardPosition(stack, card) {
  return stack.indexOf(card);
}

/**
 * Determine if the stack contains the card
 */
export function doesStackIncludeCard(stack, card) {
  return stack.includes(card);
}

/**
 * Determine if each card is even
 */
export function isEachCardEven(stack) {
  return stack.every((num) => num % 2 === 0);
}

/**
 * Check if stack contains odd-value card
 */
export function doesStackIncludeOddCard(stack) {
  return stack.some((num) => num % 2 !== 0);
}

/**
 * Get the first odd card from the stack
 */
export function getFirstOddCard(stack) {
  return stack.find((num) => num % 2 !== 0);
}

/**
 * Determine the position of the first card that is even
 */
export function getFirstEvenCardPosition(stack) {
  return stack.findIndex((num) => num % 2 === 0);
}
