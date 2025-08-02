import AdsCarousel from '@/components/ads/AdsCarousel';

export default function AdsPage() {
  return (
    <div>
      <AdsCarousel />
      <div className="container mx-auto px-4 py-12">
        <h1 className="font-headline text-4xl font-bold mb-8">Advertisements</h1>
        <p>Here you will see all the ads.</p>
      </div>
    </div>
  );
}
