export default function Services() {
  const services = [
    {
      title: "Managed IT Services",
      description: "Proactive management and monitoring of your IT infrastructure, reducing downtime and improving efficiency.",
      icon: "🖥️"
    },
    {
      title: "Cloud Solutions",
      description: "Seamless migration and management of cloud infrastructure with Azure, AWS, and hybrid solutions.",
      icon: "☁️"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions protecting your business from evolving cyber threats.",
      icon: "🔒"
    },
    {
      title: "IT Support",
      description: "24/7 technical support helping your team stay productive and resolving issues quickly.",
      icon: "📞"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive IT solutions tailored to your business needs
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
