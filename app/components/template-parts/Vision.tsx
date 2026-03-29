export default function Vision() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">The G-SONS Vision</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Transforming businesses through innovative IT solutions and strategic technology partnerships
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-green-600 mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-700">
              To deliver world-class IT solutions that empower organizations to achieve their digital transformation goals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-green-600 mb-4">👁️</div>
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-700">
              To be the trusted partner for businesses seeking innovative, reliable, and scalable IT infrastructure.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="text-4xl font-bold text-green-600 mb-4">💡</div>
            <h3 className="text-xl font-bold mb-2">Our Values</h3>
            <p className="text-gray-700">
              Excellence, innovation, and customer-first approach define everything we do in IT services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
