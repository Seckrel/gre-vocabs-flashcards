import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/ui/card'
import { Button } from '@/components/shadcn/ui/button'

type TProps = {
  flipCard: (flip: boolean) => void
}

export default function FlashCardBack({ flipCard }: TProps) {
  return (
    <Card
      id="back"
      className="bg-red-600 flex flex-col text-inherit border-0 absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]  [-webkit-backface-visibility:hidden]"
    >
      <CardHeader>
        <CardTitle>GRE Word</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter className="justify-center mt-auto space-x-4">
        <Button onClick={() => flipCard(false)}>Go Back</Button>
        <Button>Next Word</Button>
      </CardFooter>
    </Card>
  )
}
