// @ts-check

/**
 * Given a certain command, help the chatbot recognize whether the command is valid or not.
 *
 * @param {string} command
 * @returns {boolean}
 */
export function isValidCommand(command) {
  return /^chatbot/i.test(command);
}

/**
 * Given a certain message, help the chatbot get rid of all the emoji's encryption through the message.
 *
 * @param {string} message
 * @returns {string}
 */
export function removeEmoji(message) {
  const regex = new RegExp('emoji\\d+', 'g');
  return message.replace(regex, '');
}

/**
 * Given a certain phone number, help the chatbot recognize whether it is in the correct format.
 *
 * @param {string} number
 * @returns {string}
 */
export function checkPhoneNumber(number) {
  const regex = /^\(\+\d{2}\) \d{3}-\d{3}-\d{3}$/;

  if (regex.test(number)) {
    return 'Thanks! You can now download me to your phone.';
  }

  return `Oops, it seems like I can't reach out to ${number}`;
}

/**
 * Given a certain response from the user, help the chatbot get only the URL.
 *
 * @param {string} userInput
 * @returns {string[] | null}
 */
export function getURL(userInput) {
  const regex = /\b[\w-]+\.[a-z]{2,}\b/gi;
  const matches = userInput.match(regex);
  return matches ? matches : null;
}

/**
 * Greet the user using the full name data from the profile.
 *
 * @param {string} fullName
 * @returns {string}
 */
export function niceToMeetYou(fullName) {
  return fullName.replace(/(\w+), (\w+)/, 'Nice to meet you, $2 $1');
}
