import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/shadcn/ui/card'
import { Button } from '@/components/shadcn/ui/button'
import { router } from '@inertiajs/react'

type TProps = {
  flipCard: (flip: boolean) => void
  vocab: VocabType
}

export default function FlashCardBack({ flipCard, vocab }: TProps) {
  return (
    <Card
      id="back"
      className="absolute flex h-full w-full flex-col border-0 bg-emerald-600 text-inherit [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)]"
    >
      <CardHeader className="border-b">
        <CardTitle>{vocab.word.toLowerCase()}</CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <ul className="space-y-3 text-xl">
          {vocab.meanings.map((meaning: string) => (
            <li key={meaning}>{meaning};</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto justify-center space-x-4">
        <Button onClick={() => flipCard(false)}>Go Back</Button>
        <Button
          onClick={async (e) => {
            e.preventDefault()
            flipCard(false)
            setTimeout(() => {
              router.post('/', { currentIdx: vocab.id })
            }, 200)
          }}
        >
          Next Word
        </Button>
      </CardFooter>
    </Card>
  )
}
