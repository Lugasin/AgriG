"use client"

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import Autoplay from "embla-carousel-autoplay"
import { homepageAds } from '@/lib/ads';

export default function AdsCarousel() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh]">
      <Carousel
        className="w-full h-full"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent className="h-full flex">
          {homepageAds.map((ad, index) => (
            <CarouselItem key={index} className="relative h-full">
              <div className="relative h-full">
                <Image
                  src={ad.imageUrl}
                  alt={ad.title}
                  fill
                  className="object-cover animate-kenburns"
                  priority={index === 0}
                />
              </div>
              <div className="absolute inset-0 bg-green-950/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 animate-fade-in-up">
                <h1 className="font-headline text-4xl md:text-6xl lg::text-7xl font-bold tracking-tight text-shadow-lg">
                  {ad.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg md::text-xl text-shadow">
                  {ad.description}
                </p>
                <Button asChild className="mt-8" size="lg" variant="default">
                  <Link href={ad.linkUrl}>Learn More</Link>
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-white/50" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-white/50" />
      </Carousel>
    </section>
  )
}
