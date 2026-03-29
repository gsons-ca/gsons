export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Excellence in IT Services & Solutions
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Trusted partner for enterprise-grade IT support, cloud solutions, and digital transformation.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 text-lg">
            Book a 15-minute Intro Call
          </button>
        </div>
        <div className="flex-1 bg-gray-300 h-64 rounded-lg flex items-center justify-center">
          <span className="text-gray-600">[Team Image]</span>
        </div>
      </div>
    </section>
  );
}
