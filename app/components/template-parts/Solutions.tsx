export default function Solutions() {
  const solutions = [
    {
      title: "Microsoft Solutions",
      description: "Expert implementation and management of Microsoft 365, Azure, and enterprise systems",
      icon: "🪟"
    },
    {
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud migration and ongoing management services",
      icon: "☁️"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security frameworks and threat protection systems",
      icon: "🔐"
    },
    {
      title: "Business Continuity",
      description: "Disaster recovery and backup solutions ensuring business resilience",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          G-SONS Provides The Best Microsoft Solutions And IT Support For Companies Across Western Canada
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Enterprise-grade solutions tailored to your unique business requirements
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition">
              <div className="text-5xl mb-4">{solution.icon}</div>
              <h3 className="text-lg font-bold mb-3 text-gray-900">{solution.title}</h3>
              <p className="text-gray-700 text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
