import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/products/ProductCard';
import { ArrowRight } from 'lucide-react';
import HomeCarousel from '@/components/home/HomeCarousel'; // Changed to default import
import LocalAds from '@/components/ui/LocalAds'; // Import LocalAds component

export default function Home() {
  const featuredProducts = getProducts().slice(0, 4);

  // Placeholder ad data - replace with actual data fetching
  const homepageAds = [
    { id: 'ad-1', title: 'Spring Planting Sale!', description: 'Get discounts on all planters and seeds.', imageUrl: '/path/to/spring-ad.jpg', linkUrl: '/products?category=Planting Equipment' },
    { id: 'ad-2', title: 'Free Consultations', description: 'Schedule a free consultation with our farming experts.', imageUrl: '/path/to/consult-ad.jpg', linkUrl: '/contact' },
  ];

  return (
    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
      <HomeCarousel />

      <section className="container mx-auto px-4">
        <div className="text-center animate-fade-in-up">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Featured Equipment
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">
            Top-tier machinery to enhance your productivity.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, i) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${i * 100}ms`}}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up">
            <Button asChild size="lg" variant="outline">
                <Link href="/products">
                    View All Equipment
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
        </div>
      </section>

      {/* Local Ads Section */}
      <section className="container mx-auto px-4">
         <LocalAds ads={homepageAds} /> {/* Add LocalAds component */}
      </section>
    </div>
  );
}
