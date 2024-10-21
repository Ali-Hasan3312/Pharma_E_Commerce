import { Link } from "react-router-dom";

const Login = () => {
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
      };
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
              placeholder="••••••••"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-dark-green text-white px-4 py-2 rounded-md hover:bg-opacity-75 transition-all duration-300"
            >
              Log in
            </button>
            <Link to="/register" className="text-sm text-dark-green hover:underline">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
