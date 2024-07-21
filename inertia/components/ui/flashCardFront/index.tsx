import { Card, CardFooter, CardHeader, CardTitle } from '@/components/shadcn/ui/card'
import { Button } from '@/components/shadcn/ui/button'

type TProps = {
  flipCard: (flip: boolean) => void
  word: string
}

export default function FlashCardFront({ flipCard, word }: TProps) {
  return (
    <Card className="absolute flex h-full w-full flex-col items-center justify-center border-0 bg-purple-600 text-inherit [-webkit-backface-visibility:hidden] [backface-visibility:hidden]">
      <CardHeader className="mt-auto">
        <CardTitle>{word.toLowerCase()}</CardTitle>
      </CardHeader>
      <CardFooter className="mt-auto justify-center">
        <Button onClick={() => flipCard(true)}>See Answer</Button>
      </CardFooter>
    </Card>
  )
}
