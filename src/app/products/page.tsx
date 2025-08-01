import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/products/ProductCard'; // You might not need this anymore if using FilterableGallery
import Image from 'next/image';
import LocalAds from '@/components/ui/LocalAds';
import FilterableGallery from '@/components/products/FilterableGallery'; // Changed to default import


export default function ProductsPage() {
  const products = getProducts();

   // Placeholder ad data - replace with actual data fetching
  const productsPageAds = [
    { id: 'ad-3', title: 'Special Offer on Tractors!', description: 'Get financing options on all new tractors.', imageUrl: '/src/Assets/Newtractors.png', linkUrl: '/products?category=Heavy Machinery' }, // Updated image URL
    { id: 'ad-4', title: 'Save on Irrigation', description: 'Discounts on drip irrigation systems this month.', imageUrl: '/src/Assets/Sprinklers.png', linkUrl: '/products?category=Irrigation' }, // Updated image URL
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative rounded-lg overflow-hidden mb-12 h-64 flex items-center justify-center text-center p-4">
        <Image 
          src="/src/Assets/large-green-rice-field-with-green-rice-plants-rows.jpg" // Updated image source
          alt="A wide farm field under a blue sky" 
          fill 
          className="object-cover animate-parallax"
          data-ai-hint="farm field sky"
        />
        <div className="absolute inset-0 bg-green-950/50" />
        <div className="relative animate-fade-in-up">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white text-shadow-lg">Our Equipment Catalog</h1>
          <p className="mt-2 text-lg text-white/90 text-shadow">The finest equipment and supplies for your farm.</p>
        </div>
      </div>

      {/* Local Ads Section */}
      <div className="mb-8">
        <LocalAds ads={productsPageAds} /> {/* Add LocalAds component */}
      </div>
      
      {/* Filterable Gallery Section */}
      <FilterableGallery machines={products as any} /> {/* Use the FilterableGallery component */}

    </div>
  );
}
