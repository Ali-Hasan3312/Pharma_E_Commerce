import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-lg text-red-500 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <button
        onClick={handleBackToHome}
        className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;
