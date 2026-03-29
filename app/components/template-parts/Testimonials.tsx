export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc",
      quote: "G-SONS IT transformed our infrastructure. Their proactive approach saved us thousands in potential downtime."
    },
    {
      name: "Michael Chen",
      company: "Manufacturing Corp",
      quote: "Professional team, rapid response times, and solutions that actually work. Highly recommended!"
    },
    {
      name: "Jennifer Martinez",
      company: "Financial Services Ltd",
      quote: "The security expertise and compliance guidance from G-SONS IT is unmatched in Calgary."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Insights From G-SONS IT Clients</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Hear what our satisfied clients have to say about our services
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
