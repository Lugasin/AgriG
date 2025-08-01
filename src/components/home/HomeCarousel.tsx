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
      src: '/src/Assets/combine-harvester-working-field.jpg',
      'data-ai-hint': 'combine harvester working field',
      alt: 'Combine harvester working in a field',
      title: 'Efficient Harvesting Solutions',
      subtitle: 'Maximize your yield with our powerful harvesters.',
      href: '/products',
    },
    {
      src: '/src/Assets/tractor-working-green-field.jpg',
      'data-ai-hint': 'tractor working green field',
      alt: 'Tractor working in a green field',
      title: 'Reliable Tractors for Every Task',
      subtitle: "Find the perfect tractor for your farm's needs.", // Corrected apostrophe using double quotes
      href: '/products',
    },
    {
      src: '/src/Assets/corn-field-sunset.jpg',
      'data-ai-hint': 'corn field sunset',
      alt: 'Corn field at sunset',
      title: 'Quality Supplies for Healthy Crops',
      subtitle: 'Everything you need for a successful growing season.',
      href: '/products',
    },
     {
      src: '/src/Assets/Maizesprinklers.png',
      'data-ai-hint': 'Maize sprinklers',
      alt: 'Maize field with sprinklers',
      title: 'Advanced Irrigation Systems',
      subtitle: 'Water your crops efficiently and effectively.',
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
        <CarouselContent className="h-full flex"> {/* Added flex class */}
          {carouselItems.map((item, index) => (
            <CarouselItem key={index} className="relative h-full">
              {/* Parent of Image - Added explicit height */}
              <div className="relative h-full h-56"> 
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover animate-kenburns"
                  data-ai-hint={item['data-ai-hint']}
                  priority={index === 0}
                />
              </div>
              <div className="absolute inset-0 bg-green-950/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 animate-fade-in-up">
                <h1 className="font-headline text-4xl md:text-6xl lg::text-7xl font-bold tracking-tight text-shadow-lg">
                  {item.title}
                </h1>
                <p className="mt-4 max-w-2xl text-lg md::text-xl text-shadow">
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

export default HomeCarousel; // Added default export