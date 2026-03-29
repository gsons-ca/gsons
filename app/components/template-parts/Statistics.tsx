export default function Statistics() {
  const stats = [
    {
      number: "500+",
      label: "Active Clients"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee"
    },
    {
      number: "24/7",
      label: "Support Hours"
    }
  ];

  return (
    <section className="py-16 bg-green-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold mb-2">{stat.number}</div>
              <p className="text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
