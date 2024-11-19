'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react";

export default function Component() {
  const [images, setImages] = useState<string[]>([]);
  const [images2, setImages2] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch("/api/view-announce");
        const res2 =  await fetch('/api/view-achievement')
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        const data2 = await res2.json();
        console.log("happening")
        setImages(data.images || []);
        setImages2(data2.images || [])
      } catch (err: any) {
        setError(err.message || "Failed to fetch announcements.");
      }
    };

    fetchAnnouncements();
  }, []);
  console.log(images)
  const achievements = [
    {
      title: "Reached 1 million users",
      image: images[0] || "https://via.placeholder.com/150"
    },
    {
      title: "Launched new product line",
      image: images[1] || "https://via.placeholder.com/150"
    },
    {
      title: "Expanded to 10 new countries",
      image: images[2] || "https://via.placeholder.com/150"
    },
    {
      title: "Won 'Best in Class' award",
      image: images[3] || "https://via.placeholder.com/150"
    }
  ]

  const announcements = [
    {
      title: "Reached 1 million users",
      image: images2[0] || "https://via.placeholder.com/150"
    },
    {
      title: "Launched new product line",
      image: images2[1] || "https://via.placeholder.com/150"
    },
    {
      title: "Expanded to 10 new countries",
      image: images2[2] || "https://via.placeholder.com/150"
    },
    {
      title: "Won 'Best in Class' award",
      image: images2[3] || "https://via.placeholder.com/150"
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
                        <img src={announcement.image} alt={announcement.title} className="mx-auto mb-4" />
                        
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