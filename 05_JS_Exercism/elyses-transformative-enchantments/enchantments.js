// @ts-check

/**
 * Double every card in the deck.
 */
export function seeingDouble(deck) {
  return deck.map(card => card * 2);
}

/**
 * Creates triplicates of every 3 found in the deck.
 */
export function threeOfEachThree(deck) {
  return deck.flatMap(card =>
    card === 3 ? [3, 3, 3] : [card]
  );
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 */
export function middleTwo(deck) {
  return deck.slice(4, 6);
}

/**
 * Moves the outside two cards to the middle.
 */
export function sandwichTrick(deck) {
  const first = deck[0];
  const last = deck[deck.length - 1];
  const middle = deck.slice(1, -1);

  const half = middle.length / 2;

  return [
    ...middle.slice(0, half),
    last,
    first,
    ...middle.slice(half),
  ];
}

/**
 * Removes every card from the deck except 2s.
 */
export function twoIsSpecial(deck) {
  return deck.filter(card => card === 2);
}

/**
 * Returns a perfectly ordered deck from lowest to highest.
 */
export function perfectlyOrdered(deck) {
  return [...deck].sort((a, b) => a - b);
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 */
export function reorder(deck) {
  return deck.reverse();
}


