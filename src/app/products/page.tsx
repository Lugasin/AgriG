import { getProducts } from '@/lib/products';
import { ProductCard } from '@/components/products/ProductCard';
import Image from 'next/image';

export default function ProductsPage() {
  const products = getProducts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="relative rounded-lg overflow-hidden mb-12 h-64 flex items-center justify-center text-center p-4">
        <Image 
          src="https://placehold.co/1200x400" 
          alt="Abstract background image" 
          fill 
          className="object-cover"
          data-ai-hint="abstract background"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-white text-shadow-lg">Our Product Catalog</h1>
          <p className="mt-2 text-lg text-white/90 text-shadow">The finest products for your business.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
