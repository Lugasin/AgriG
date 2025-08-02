import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Ready to Grow Your Business?</h2>
        <p className="mt-2 text-lg">Sign up for our newsletter to get the latest updates and offers.</p>
        <div className="mt-6 flex justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="/signup">Sign Up Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
