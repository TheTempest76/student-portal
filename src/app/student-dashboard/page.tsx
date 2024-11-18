import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Component() {
  const achievements = [
    {
      title: "Reached 1 million users",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Launched new product line",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Expanded to 10 new countries",
      image: "https://via.placeholder.com/150"
    },
    {
      title: "Won 'Best in Class' award",
      image: "https://via.placeholder.com/150"
    }
  ]

  const announcements = [
    {
      text: "Upcoming company-wide meeting on Friday",
      image: "https://via.placeholder.com/150"
    },
    {
      text: "New HR policies effective next month",
      image: "https://via.placeholder.com/150"
    },
    {
      text: "Q4 targets announced",
      image: "https://via.placeholder.com/150"
    },
    {
      text: "Annual team building event next week",
      image: "https://via.placeholder.com/150"
    }
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Achievements Card */}
        <Card className="overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Achievements</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Carousel>
              <CarouselContent>
                {achievements.map((achievement, index) => (
                  <CarouselItem key={index}>
                    <div className="p-4">
                      <img src={achievement.image} alt={achievement.title} className="mx-auto mb-4" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious  className="pl-6"/>
              <CarouselNext className="pr-6" />
            </Carousel>
          </CardContent>
        </Card>

        {/* Announcements Card */}
        <Card className="overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Announcements</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <Carousel>
              <CarouselContent>
                {announcements.map((announcement, index) => (
                  <CarouselItem key={index}>
                    <div className="p-4">
                        <img src={announcement.image} alt={announcement.text} className="mx-auto mb-4" />
                        
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="pl-6" />
              <CarouselNext  className="pr-6"/>
            </Carousel>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}