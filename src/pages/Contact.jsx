const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-500 pt-20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <span className="material-icons text-6xl text-blue-600 mb-4 block">phone</span>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/20">
              <span className="material-icons text-3xl text-blue-600 mb-4 block">email</span>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-gray-600 mb-3">For general inquiries and support</p>
              <a href="mailto:support@trackmybus.com" className="text-blue-600 hover:underline font-medium">
                support@trackmybus.com
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/20">
              <span className="material-icons text-3xl text-green-600 mb-4 block">phone</span>
              <h3 className="text-xl font-bold mb-2">Phone Support</h3>
              <p className="text-gray-600 mb-3">24/7 emergency hotline</p>
              <a href="tel:+91-1800-123-456" className="text-green-600 hover:underline font-medium">
                +91-1800-123-456
              </a>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/20">
              <span className="material-icons text-3xl text-purple-600 mb-4 block">location_on</span>
              <h3 className="text-xl font-bold mb-2">Office Address</h3>
              <p className="text-gray-600">
                123 Tech Park, Innovation District<br/>
                New Delhi, India 110001
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-white/20">
            <h3 className="text-xl font-bold mb-4">Send us a Message</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;