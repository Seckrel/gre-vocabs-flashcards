import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/shadcn/ui/card'

export default function FlashCardBack() {
  return (
    <Card
      id="back"
      className="bg-red-600 text-inherit border-0 absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]  [-webkit-backface-visibility:hidden]"
    >
      <CardHeader>
        <CardTitle>Card Back</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  )
}
