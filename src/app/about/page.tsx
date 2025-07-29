import Image from 'next/image';
import { Leaf, Target, Users } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-16 animate-fade-in-up">
        <h1 className="font-headline text-5xl font-bold text-primary">About AgriSupply Co.</h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
          Your trusted partner in agriculture, providing top-quality equipment and supplies to help you cultivate success from the ground up.
        </p>
      </section>

      <section className="relative h-96 w-full rounded-lg overflow-hidden mb-16">
        <Image
          src="https://placehold.co/1600x600"
          alt="Lush green field with a tractor in the distance"
          fill
          className="object-cover animate-parallax"
          data-ai-hint="green field tractor"
        />
        <div className="absolute inset-0 bg-green-900/40" />
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="flex flex-col items-center text-center p-6 bg-secondary/50 rounded-lg animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <div className="p-4 bg-primary rounded-full mb-4">
            <Leaf className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="font-headline text-2xl font-bold">Our Mission</h2>
          <p className="mt-2 text-muted-foreground">To empower farmers with innovative and reliable agricultural solutions that enhance productivity and promote sustainability for a healthier planet.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-secondary/50 rounded-lg animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <div className="p-4 bg-primary rounded-full mb-4">
            <Target className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="font-headline text-2xl font-bold">Our Vision</h2>
          <p className="mt-2 text-muted-foreground">To be the leading global provider of agricultural technology and supplies, recognized for our commitment to quality, innovation, and customer success.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 bg-secondary/50 rounded-lg animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <div className="p-4 bg-primary rounded-full mb-4">
            <Users className="h-8 w-8 text-primary-foreground" />
          </div>
          <h2 className="font-headline text-2xl font-bold">Our Team</h2>
          <p className="mt-2 text-muted-foreground">Our team of agronomists, engineers, and support staff are dedicated to providing expert advice and exceptional service to our farming community.</p>
        </div>
      </section>

      <section className="text-center animate-fade-in-up">
        <h2 className="font-headline text-4xl font-bold">Meet the Founders</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-6">
            <Image src="https://placehold.co/400x400" alt="Founder 1" width={150} height={150} className="rounded-full mx-auto mb-4" data-ai-hint="portrait man" />
            <h3 className="font-headline text-2xl font-semibold">John Farmer</h3>
            <p className="text-primary font-medium">Co-Founder & CEO</p>
            <p className="mt-2 text-muted-foreground">With a lifetime of experience in farming, John is passionate about bringing cutting-edge technology to the agricultural sector.</p>
          </div>
          <div className="p-6">
            <Image src="https://placehold.co/400x400" alt="Founder 2" width={150} height={150} className="rounded-full mx-auto mb-4" data-ai-hint="portrait woman" />
            <h3 className="font-headline text-2xl font-semibold">Jane Agronomist</h3>
            <p className="text-primary font-medium">Co-Founder & CTO</p>
            <p className="mt-2 text-muted-foreground">Jane's expertise in soil science and crop management drives our commitment to sustainable and efficient farming solutions.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
