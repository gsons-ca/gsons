export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Expert Team",
      description: "Certified professionals with industry-leading expertise and experience"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support ensuring your systems stay operational"
    },
    {
      title: "Proven Results",
      description: "Track record of successful deployments and satisfied clients"
    },
    {
      title: "Cost-Effective",
      description: "Solutions optimized for maximum ROI and minimal downtime"
    },
    {
      title: "Security First",
      description: "Enterprise-grade security protocols protecting your data"
    },
    {
      title: "Scalable Solutions",
      description: "Infrastructure that grows with your business needs"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Why Businesses Choose G-SONS IT</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Real feedback from real Calgary businesses
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="border-l-4 border-green-600 pl-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
