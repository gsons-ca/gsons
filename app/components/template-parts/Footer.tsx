export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">G-SONS IT Solutions</h3>
            <p className="text-sm">
              Providing enterprise-grade IT support, cloud solutions, and digital transformation services.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-600">Managed IT Services</a></li>
              <li><a href="#" className="hover:text-green-600">Cloud Solutions</a></li>
              <li><a href="#" className="hover:text-green-600">Cybersecurity</a></li>
              <li><a href="#" className="hover:text-green-600">IT Support</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-600">About Us</a></li>
              <li><a href="#" className="hover:text-green-600">Contact</a></li>
              <li><a href="#" className="hover:text-green-600">Blog</a></li>
              <li><a href="#" className="hover:text-green-600">Careers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">
              <strong>Phone:</strong> (403) 555-0100
            </p>
            <p className="text-sm mb-2">
              <strong>Email:</strong> info@gsons-it.com
            </p>
            <p className="text-sm">
              <strong>Address:</strong> Calgary, Alberta
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              &copy; 2026 G-SONS IT Solutions. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-green-600">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-green-600">Terms of Service</a>
              <a href="#" className="text-sm text-gray-400 hover:text-green-600">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
