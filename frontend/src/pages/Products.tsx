import products from '../assets/products'; // Import the product data

const Products = () => {
  const pharmacyName = 'HealthPlus Pharmacy';

  return (
    <div className="min-h-screen">
     
      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1661769786626-8025c37907ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold text-white mb-2">
            {pharmacyName}
          </h1>
          <p className="text-white text-lg">
            Your trusted source for health and wellness products.
          </p>
        </div>
      </div>
      <div className="p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 ">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 flex flex-col justify-between rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 rounded-md mb-4"
                />
               <div>
               <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-1">{product.description}</p>
                <p className="text-gray-800 font-bold mb-4">{product.price}</p>
                <button
                  className="w-full bg-dark-green text-white py-2 rounded-md hover:bg-opacity-75 transition duration-300"
                >
                  Add to Cart
                </button>
               </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
