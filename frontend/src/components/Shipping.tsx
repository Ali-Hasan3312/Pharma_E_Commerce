import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { saveShippingInfo } from "../redux/reducers/cartReducer";

const Shipping = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(saveShippingInfo(formData))
    toast.success("Order Placed Successfully"); 
    navigate("/orderDetails")
    // Add logic to save or send the shipping data to the backend
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Shipping Details
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-gray-700"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-lg font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="123 Maple Street"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="city"
                className="block text-lg font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="Springfield"
                required
              />
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-lg font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="IL"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="country"
                className="block text-lg font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="United States"
                required
              />
            </div>

            <div>
              <label
                htmlFor="pinCode"
                className="block text-lg font-medium text-gray-700"
              >
                Pin Code
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleChange}
                className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                placeholder="62701"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-dark-green text-white py-2 rounded-md hover:bg-opacity-80 transition duration-300"
          >
            Submit Shipping Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
