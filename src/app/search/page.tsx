import { aiProductSearch } from "@/ai/flows/ai-product-search";
import { getProducts } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";
import type { Product } from "@/lib/types";

export default async function SearchPage({ searchParams }: { searchParams: { query?: string } }) {
  const query = searchParams.query;
  let products: Product[] = [];

  if (query) {
    try {
      const searchResult = await aiProductSearch({ prompt: query });
      const allProducts = getProducts();
      if (searchResult.products && searchResult.products.length > 0) {
        const productNames = searchResult.products.map(p => p.toLowerCase());
        products = allProducts.filter(p => productNames.some(name => p.name.toLowerCase().includes(name) || name.includes(p.name.toLowerCase())));
      }
    } catch (error) {
      console.error("AI search failed:", error);
      // Fallback or error display can be handled here
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl font-bold">Search Results</h1>
        {query && <p className="mt-2 text-lg text-muted-foreground">Showing results for: "{query}"</p>}
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="font-headline text-2xl font-semibold">No Products Found</h2>
          <p className="mt-2 text-muted-foreground">
            {query ? "We couldn't find any products matching your search. Try a different term." : "Please enter a search term to find products."}
          </p>
        </div>
      )}
    </div>
  );
}
