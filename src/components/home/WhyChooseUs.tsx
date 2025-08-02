import { ShieldCheck, Truck, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: 'Quality Assurance',
      description: 'All our products are tested and certified to meet the highest industry standards.',
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: 'Fast & Reliable Delivery',
      description: 'We offer fast and reliable delivery to ensure you get your products on time.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Expert Support',
      description: 'Our team of experts is always ready to help you with your questions and concerns.',
    },
  ];

  return (
    <section className="bg-secondary/50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
          <p className="mt-2 text-lg text-muted-foreground">Your success is our priority.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-lg">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="font-headline text-2xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
