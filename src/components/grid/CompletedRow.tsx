import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { unicodeSplit } from '../../lib/words'
import { useState } from 'react'

type Props = {
  guess: string
  isRevealing?: boolean
  isInfoModal?: boolean
}

export const CompletedRow = ({ guess, isRevealing, isInfoModal = false }: Props) => {
  const statuses = isInfoModal ? new Array(6).fill('absent') : getGuessStatuses(guess)
  const splitGuess = unicodeSplit(guess)
  const [showColor, setShowColor] = useState(isInfoModal ? true : false)
  const [flipping, setFlipping] = useState(false)

  const toggleColorReveal = () => {
    setShowColor(!showColor);
    setFlipping(true)
    setTimeout(() => {
      setFlipping(false);
    }, 300);
  }

  return (
    <div className="flex justify-center mb-1">
      {splitGuess.map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing || flipping}
          isCompleted
          guess={guess}
          toggleColorReveal={toggleColorReveal}
          showColor={showColor}
          flipping={flipping}
        />
      ))}
    </div>
  )
}
