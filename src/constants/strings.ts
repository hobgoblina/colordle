export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Hextastic!', 'Color me impressed!', 'Beautiful!']
export const GAME_COPIED_MESSAGE = 'Game copied to clipboard'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Not enough digits'
export const WORD_NOT_FOUND_MESSAGE = 'Color not found'
export const HARD_MODE_ALERT_MESSAGE =
  'Hard Mode can only be enabled at the start!'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `The color was ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Must use ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Guess must contain ${letter}`
export const ENTER_TEXT = 'Guess'
export const DELETE_TEXT = 'Erase'
export const STATISTICS_TITLE = 'Statistics'
export const GUESS_DISTRIBUTION_TEXT = 'Guess Distribution'
export const NEW_WORD_TEXT = 'New color in'
export const SHARE_TEXT = 'Copy Alt. Text'
export const TOTAL_TRIES_TEXT = 'Total tries'
export const SUCCESS_RATE_TEXT = 'Success rate'
export const CURRENT_STREAK_TEXT = 'Current streak'
export const BEST_STREAK_TEXT = 'Best streak'
