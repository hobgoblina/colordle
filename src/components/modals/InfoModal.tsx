import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'
import { CompletedRow } from '../grid/CompletedRow'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the background color's hexadecimal color code in 6 tries. 
        After each guess, the color of the tiles will change to show how 
        close your guess was.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="D"
          status="correct"
        />
        <Cell value="0" />
        <Cell value="2" />
        <Cell value="C" />
        <Cell value="E" />
        <Cell value="F" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit D is in the color code and the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="4" />
        <Cell value="C" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="F"
          status="present"
        />
        <Cell value="0" />
        <Cell value="2" />
        <Cell value="B" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit F is in the color code but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="3" />
        <Cell value="C" />
        <Cell value="2" />
        <Cell isRevealing={true} isCompleted={true} value="4" status="absent" />
        <Cell value="5" />
        <Cell value="9" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The digit 4 is not in the color code in any spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <CompletedRow guess="E31A9B" isInfoModal />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Tap on your guesses to reveal their colors!
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        A colorful spin on the popular word guessing game
      </p>
      <p className="mt-2 italic text-sm text-gray-500 dark:text-gray-300">
        <a
          href="https://github.com/hobgoblina/colordle"
          className="underline font-bold"
        >
          made by Lina
        </a>
      </p>
    </BaseModal>
  )
}
