import { GAME_TITLE } from '../constants/strings'
import { solution } from './words'

import nearestColor from 'nearest-color';
import colorNameList from 'color-name-list';
const colors = colorNameList.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
const nearest = nearestColor.from(colors);

export const shareStatus = (
  guesses: string[],
  lost: boolean
) => {
  const target = nearest(`#${solution}`).name;

  navigator.clipboard.writeText(
    `An image depicting the outcome of a ${GAME_TITLE} game, with ${guesses.length} different-colored squares on a background the color of ${target}.\n\nGuess colors:\n${generateColorDescriptions(guesses, lost, target)}`
  )
}

export const generateColorDescriptions = (guesses: string[], lost: boolean, target: string) => {
  const previous = [];
  return guesses
    .map((guess, index) => {
      const name = nearest(`#${guess}`).name;
      const text = `${index + 1}: ${guesses.includes(name) ? '(another) ' : ''}${name}${target === name && guess !== solution ? ' (slightly off-target)' : ''}`;
      previous.push(name);
      return text;
    })
    .join('\n')
}