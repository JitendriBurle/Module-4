import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card"
import { Button } from "./components/ui/button"

export default function ImageSlideshow() {
  const images = [
    "https://placehold.co/400x250",
    "https://placehold.co/400x250?text=Image+2",
    "https://placehold.co/400x250?text=Image+3",
  ]

  const [index, setIndex] = useState(0)

  return (
    <Card className="max-w-md mx-auto text-center">
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <img src={images[index]} className="rounded mx-auto" />
        <div className="flex justify-between">
          <Button onClick={() => setIndex((index + images.length - 1) % images.length)}>
            Previous
          </Button>
          <Button onClick={() => setIndex((index + 1) % images.length)}>
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
