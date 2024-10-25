const Contact = () => {
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Heading Section */}
          <h1 className="text-4xl font-bold text-center  mb-8">
            Contact Us
          </h1>
          <p className="text-center text-gray-700 text-lg mb-12">
            Have questions or need help? Get in touch with us, and we’ll get back to you as soon as possible.
          </p>
  
          {/* Contact Information and Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-green-600 text-2xl">📞</span>
                <p className="text-lg">+1 555-123-4567</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-600 text-2xl">📧</span>
                <p className="text-lg">support@healthplus.com</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-600 text-2xl">📍</span>
                <p className="text-lg">123 Maple Street, Springfield, IL 62701</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-600 text-2xl">⏰</span>
                <p className="text-lg">Monday - Saturday: 9 AM - 11:30 PM</p>
              </div>
            </div>
  
            {/* Contact Form */}
            <form className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-dark-green text-white py-2 rounded-md hover:bg-opacity-80 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  