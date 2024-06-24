import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus, shareImage } from '../../lib/share'
import { tomorrow, solution } from '../../lib/words'
import {
  ClipboardCopyIcon,
  DownloadIcon,
} from '@heroicons/react/outline'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram gameStats={gameStats} />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 mb-5 sm:mb-6 columns-2 dark:text-white">
          <div>
            <h5>{NEW_WORD_TEXT}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
              date={tomorrow}
              daysInHours={true}
            />
          </div>
          <div className="columns-2">
            <button
              type="button"
              className="mt-2 w-max rounded-md border border-transparent shadow-sm px-6 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={() => {
                shareStatus(
                  guesses,
                  isGameLost
                )
                handleShare()
              }}
            >
              <ClipboardCopyIcon className='w-6 h-6' />
            </button>
            <button
              type="button"
              className="mt-2 w-max rounded-md border border-transparent shadow-sm px-6 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
              onClick={() => {
                shareImage()
              }}
            >
              <DownloadIcon className='w-6 h-6' />
            </button>
          </div>
        </div>
      )}
      {(isGameLost || isGameWon) && (
        <div className="mx-auto w-max max-w-full">
          <div 
            id="result-image" 
            className="flex space-x-1 w-max max-w-full p-3 rounded-lg" 
            style={{ background: `#${solution}` }}
          >
            {guesses.map((guess) => (
              <div 
                className="flex shrink aspect-square w-14 max-w-14 rounded" 
                style={{ background: `#${guess}` }}
              ></div>
            ))}
          </div>
        </div>
      )}
    </BaseModal>
  )
}
