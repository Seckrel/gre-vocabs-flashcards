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
    <div className="w-full h-screen flex justify-center items-center">
      <div
        className="w-[45vw] h-[20vw] shadow-lg group bg-transparent"
        style={{ perspective: '1000px' }}
      >
        <div
          ref={flipCard}
          className="relative text-center w-full h-full transition-transform duration-700 [transformStyle:preserve-3d]"
        >
          <FlashCardFront flipCard={flipCardFn} word={vocab.word} />
          <FlashCardBack flipCard={flipCardFn} vocab={vocab} />
        </div>
      </div>
    </div>
  )
}
