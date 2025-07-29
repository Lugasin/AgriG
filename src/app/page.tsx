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
import { Card, CardContent } from '@/components/ui/card';
import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/products/ProductCard';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const featuredProducts = getProducts().slice(0, 4);

  const carouselItems = [
    {
      src: 'https://placehold.co/1600x800',
      'data-ai-hint': 'modern office interior',
      alt: 'Modern office interior',
      title: 'Innovative Solutions',
      subtitle: 'Driving progress with cutting-edge technology.',
      href: '/products',
    },
    {
      src: 'https://placehold.co/1600x800',
      'data-ai-hint': 'team collaborating meeting',
      alt: 'Team collaborating in a meeting',
      title: 'Expert Collaboration',
      subtitle: 'Partner with us to achieve your business goals.',
      href: '/products',
    },
    {
      src: 'https://placehold.co/1600x800',
      'data-ai-hint': 'cityscape at dusk',
      alt: 'Cityscape at dusk',
      title: 'Global Reach',
      subtitle: 'Expanding horizons with our worldwide presence.',
      href: '/products',
    },
  ];

  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <section className="relative w-full h-[60vh] md:h-[80vh]">
        <Carousel className="w-full h-full" opts={{ loop: true }}>
          <CarouselContent className="h-full">
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="relative h-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover animate-fade-in"
                  data-ai-hint={item['data-ai-hint']}
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
                  <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-shadow-lg">
                    {item.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg md:text-xl text-shadow">
                    {item.subtitle}
                  </p>
                  <Button asChild className="mt-8" size="lg" variant="default">
                    <Link href={item.href}>Explore Now</Link>
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-white/50" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 border-white/50" />
        </Carousel>
      </section>

      <section className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Featured Products
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Top-tier products to elevate your business.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
                <Link href="/products">
                    View All Products
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </section>
    </div>
  );
}
