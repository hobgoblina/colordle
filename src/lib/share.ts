import { solution } from './words'
import { toPng } from 'html-to-image';
import download from 'downloadjs';

import { nearestFrom } from 'nearest-colors';
import colorNameList from 'color-name-list';
const colors = colorNameList.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
const nearest =  nearestFrom(colors);

export const shareStatus = (
  guesses: string[],
  lost: boolean
) => {
  const closest = nearest(`#${solution}`);
  const target = Array.isArray(closest) ? closest[0].name : closest.name;

  navigator.clipboard.writeText(
    `Colordle game results!\n(${guesses.length} different-colored squares on a background the color of ${target})\n\nGuessed colors:\n${generateColorDescriptions(guesses, lost, target)}\n\nVisit colordle.lina.garden to play!`
  )
}

export const shareImage = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  const node = document.getElementById('result-image');

  if (node) {
    toPng(node, { pixelRatio: 1.2 }).then(dataUrl => download(dataUrl, `colordle_${dd}-${mm}-${yyyy}.png`));
  }
}

export const generateColorDescriptions = (guesses: string[], lost: boolean, target: string) => {
  const previous = [];
  return guesses
    .map((guess, index) => {
      const closestColor = nearest(`#${guess}`);
      const name = Array.isArray(closestColor) ? closestColor[0].name : closestColor.name;
      const text = `${index + 1}: ${guesses.includes(name) ? '(another) ' : ''}${name}${target === name && guess !== solution ? ' (slightly off-target)' : ''}`;
      previous.push(name);
      return text;
    })
    .join('\n')
}