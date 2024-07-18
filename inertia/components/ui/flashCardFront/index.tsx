import { Card, CardFooter, CardHeader, CardTitle } from '@/components/shadcn/ui/card'
import { Button } from '@/components/shadcn/ui/button'

type TProps = {
  flipCard: (flip: boolean) => void
}

export default function FlashCardFront({ flipCard }: TProps) {
  return (
    <Card className="bg-purple-600 flex flex-col justify-center items-center text-inherit border-0 absolute w-full h-full [backface-visibility:hidden] [-webkit-backface-visibility:hidden]">
      <CardHeader className="mt-auto">
        <CardTitle>Gre Word</CardTitle>
      </CardHeader>
      <CardFooter className="justify-center mt-auto">
        <Button onClick={() => flipCard(true)}>See Answer</Button>
      </CardFooter>
    </Card>
  )
}
