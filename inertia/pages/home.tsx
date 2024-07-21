'use client'

import FlashCardFront from '@/components/ui/flashCardFront'
import FlashCardBack from '~/components/ui/flashCardBack'
import { useState, useRef, useLayoutEffect, useCallback } from 'react'

export default function Home({ vocab }: { vocab: VocabType }) {
  const flipCard = useRef<HTMLDivElement>(null)
  const [seeAns, setSeeAns] = useState(false)
  // const { data, isLoading, isError } = useVocabs()

  useLayoutEffect(() => {
    if (flipCard && flipCard.current) {
      if (seeAns) {
        // group-hover:[transform:rotateY(180deg)]
        flipCard.current.style.transform = 'rotateY(180deg)'
      } else {
        flipCard.current.style.removeProperty('transform')
      }
    }
  }, [seeAns])

  const flipCardFn = useCallback((flip: boolean) => setSeeAns(flip), [])

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div
        className="group h-[60vh] w-full bg-transparent px-4 shadow-lg sm:w-2/3 sm:p-0 lg:h-[20vw] lg:w-[45vw]"
        style={{ perspective: '1000px' }}
      >
        <div
          ref={flipCard}
          className="relative h-full w-full text-center transition-transform duration-700 [transformStyle:preserve-3d]"
        >
          <FlashCardFront flipCard={flipCardFn} word={vocab.word} />
          <FlashCardBack flipCard={flipCardFn} vocab={vocab} />
        </div>
      </div>
    </div>
  )
}
