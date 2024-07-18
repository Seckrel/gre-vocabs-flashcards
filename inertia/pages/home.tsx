import { Head } from '@inertiajs/react'
import FlashCardFront from '@/components/ui/flashCardFront'
import FlashCardBack from '~/components/ui/flashCardBack'

export default function Home(props: { version: number }) {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div
        className="w-[45vw] h-[20vw] shadow-lg group bg-transparent"
        style={{ perspective: '1000px' }}
      >
        <div className="relative text-center w-full h-full transition-transform duration-700 group-hover:[transform:rotateY(180deg)] [transformStyle:preserve-3d]">
          <FlashCardFront />
          <FlashCardBack />
        </div>
      </div>
    </div>
  )
}
