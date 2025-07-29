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

export function HomeCarousel() {
  const carouselItems = [
    {
      src: 'https://placehold.co/1600x800',
      'data-ai-hint': 'tractor in field',
      alt: 'Tractor plowing a field at sunset',
      title: 'Powering Modern Agriculture',
      subtitle: 'Reliable machinery for today\'s farming challenges.',
      href: '/products',
    },
    {
      src: 'https://placehold.co/1600x800',
      'data-ai-hint': 'irrigation system crops',
      alt: 'Automated irrigation system watering crops',
      title: 'Efficient Irrigation Solutions',
      subtitle: 'Maximize your yield with our smart watering systems.',
      href: '/products',
    },
    {
      src: 'https://placehold.co/1600x800',
      'data-ai-hint': 'farmer holding soil',
      alt: 'Farmer inspecting soil quality',
      title: 'Sustainable Farming Supplies',
      subtitle: 'Nourish your land with our eco-friendly products.',
      href: '/products',
    },
  ];

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
        <CarouselContent className="h-full">
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="relative h-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover animate-kenburns"
                data-ai-hint={item['data-ai-hint']}
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-green-950/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 animate-fade-in-up">
                <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-shadow-lg">
                  {item.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg md:text-xl text-shadow">
                  {item.subtitle}
                </p>
                <Button asChild className="mt-8" size="lg" variant="default">
                  <Link href={item.href}>Explore Our Products</Link>
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
