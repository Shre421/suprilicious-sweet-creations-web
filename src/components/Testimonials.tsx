
import React from 'react';

interface TestimonialProps {
  name: string;
  text: string;
  image: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ name, text, image }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-medium">{name}</h4>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic text-sm">"{text}"</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The birthday cake from Suprilicious was beyond my expectations! Not only was it beautiful, but it was the most delicious cake I've ever had. Everyone at the party was asking where I got it from.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901"
    },
    {
      name: "Rahul Mehta",
      text: "I ordered custom brownies for a corporate event and they were a hit! The packaging was elegant and the brownies were perfectly moist. Will definitely order again for future events.",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
    },
    {
      name: "Anjali Patel",
      text: "The cheesecake jars are to die for! I love how I can customize the flavors. The delivery was on time and the desserts stayed fresh. Suprilicious is now my go-to bakery for all celebrations.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Happy Customers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say about Suprilicious.
          </p>
          <div className="w-20 h-1 bg-bakery-orange mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
