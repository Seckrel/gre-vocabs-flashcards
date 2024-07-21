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
      className="bg-emerald-600 flex flex-col text-inherit border-0 absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]  [-webkit-backface-visibility:hidden]"
    >
      <CardHeader className="border-b">
        <CardTitle>{vocab.word.toLowerCase()}</CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <ul className="text-xl space-y-3">
          {vocab.meanings.map((meaning: string) => (
            <li key={meaning}>{meaning};</li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="justify-center mt-auto space-x-4">
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
