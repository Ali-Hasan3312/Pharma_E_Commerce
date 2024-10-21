const Footer = () => {
    const GotoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
      <div className="w-full pt-16 bg-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            {/* About Section */}
            <div>
              <h2 className="text-lg font-bold mb-4">About Us</h2>
              <p className="text-sm">
                We are a multi-vendor marketplace offering a wide range of medicines from trusted pharmacies with easy access to online doctor appointments.
              </p>
            </div>
  
            {/* Pharmacy Links */}
            <div>
              <h2 className="text-lg font-bold mb-4">Pharmacies</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-300">Find a Pharmacy</a></li>
                <li><a href="#" className="hover:text-green-300">Popular Products</a></li>
                <li><a href="#" className="hover:text-green-300">Exclusive Discounts</a></li>
              </ul>
            </div>
  
            {/* Doctors' Appointments Section */}
            <div>
              <h2 className="text-lg font-bold mb-4">Doctors & Appointments</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-300">Book a Doctor</a></li>
                <li><a href="#" className="hover:text-green-300">Telemedicine Services</a></li>
                <li><a href="#" className="hover:text-green-300">Health Articles</a></li>
              </ul>
            </div>
  
            {/* Customer Service */}
            <div>
              <h2 className="text-lg font-bold mb-4">Customer Service</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-green-300">Help Center</a></li>
                <li><a href="#" className="hover:text-green-300">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-green-300">Contact Us</a></li>
              </ul>
            </div>
  
          </div>
  
          {/* Horizontal Line */}
         
  
        </div>
          {/* Social Media Links */}
          <div className="flex justify-between items-center mt-16 py-2 px-24 w-full bg-gray-600">
            <p className="text-sm">&copy; Copyright 2024 <button className=" underline" onClick={GotoTop}>PharmaStore</button>. All rights reserved. Powered By <a className=" underline" href="">CMYK Research</a></p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300">Facebook</a>
              <a href="#" className="hover:text-green-300">Twitter</a>
              <a href="#" className="hover:text-green-300">Instagram</a>
            </div>
          </div>
      </div>
    );
  };
  
  export default Footer;
  