import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Doe',
      location: 'California, USA',
      testimonial: 'AgriSupply Co. has been a game-changer for our farm. Their products are top-quality and their customer service is excellent.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      location: 'Texas, USA',
      testimonial: 'I am very impressed with the fast delivery and the quality of the products. I would definitely recommend AgriSupply Co. to other farmers.',
      rating: 5,
    },
    {
      name: 'Sam Wilson',
      location: 'Florida, USA',
      testimonial: 'The team at AgriSupply Co. is very knowledgeable and helpful. They helped me to choose the right products for my farm.',
      rating: 5,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
          <p className="mt-2 text-lg text-muted-foreground">We are proud to have the support of our amazing customers.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary/50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary" fill="currentColor" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">&quot;{testimonial.testimonial}&quot;</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
