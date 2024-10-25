const About = () => {
    const teamMembers = [
      {
        name: 'John Doe',
        role: 'Pharmacist',
        image: 'https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yfGVufDB8fDB8fHww',
      },
      {
        name: 'Jane Smith',
        role: 'Customer Care Manager',
        image: 'https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        name: 'Emily Johnson',
        role: 'Marketing Head',
        image: 'https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZG9jdG9yfGVufDB8fDB8fHww',
      },
      {
        name: 'Michael Brown',
        role: 'Logistics Manager',
        image: 'https://plus.unsplash.com/premium_photo-1682432517956-9c3c4f26ec0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFuYWdlcnxlbnwwfHwwfHx8MA%3D%3D',
      },
    ];
  
    return (
      <div className="min-h-screen py-12">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Heading Section */}
          <h1 className="text-4xl font-bold text-center mb-8">
            About Us
          </h1>
          <p className="text-center text-gray-700 text-lg mb-12">
            Welcome to HealthPlus Pharmacy, your trusted partner in health and wellness.
            We are committed to providing the highest quality products and services to ensure
            your well-being.
          </p>
  
          {/* Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold  mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                Our mission is to deliver exceptional pharmaceutical care to our customers, 
                ensuring access to high-quality medicines and healthcare solutions.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBhcmNlbCUyMG1lZGljaW5lfGVufDB8fDB8fHww"
              alt="Our Mission"
              className="rounded-lg shadow-md"
            />
          </div>
  
          {/* Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1672760403439-bf51a26c1ae6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D"
              alt="Our Vision"
              className="rounded-lg shadow-md order-1 md:order-none"
            />
            <div>
              <h2 className="text-2xl font-semibold  mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600">
                We envision a healthier future where everyone has access to trusted healthcare services 
                and medications at the click of a button.
              </p>
            </div>
          </div>
  
          {/* Team Section */}
          <div>
            <h2 className="text-2xl font-semibold  text-center mb-8">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-500">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  