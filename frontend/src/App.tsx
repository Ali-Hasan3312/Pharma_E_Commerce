import { Toaster } from 'react-hot-toast';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';

// Import Components
import BookAppointment from './components/BookAppointment';
import Cart from './components/Cart';
import DoctorDetails from './components/DoctorDetails';
import DoctorsBySpeciality from './components/DoctorsBySpeciality';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import OrderDetails from './components/OrderDetails';
import SellersShop from './components/SellersShop';
import Shipping from './components/Shipping';
import UserSettings from './components/UserSettings';
import Conducted from './doctor/appointments/Conducted';
import Scheduled from './doctor/appointments/Scheduled';
import DoctorHome from './doctor/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Register from './pages/Register';
import InstantAppointments from './doctor/appointments/InstantAppointments';
import ApprovedAppointments from './doctor/appointments/Approved';
import CancelledAppointments from './doctor/appointments/Cancelled';
import AllPatients from './doctor/Patients';
import PrescriptionHistory from './doctor/PrescriptionHistory';
import Settings from './doctor/Settings';
import PharmacistHome from './pharmacist/Home';

// App Component
function App() {
  return (
    <Router>
      <DynamicNavbar /> {/* Conditionally render Navbar */}
      <div className="min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<SellersShop />} />
          <Route path="/doctors" element={<DoctorsBySpeciality />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/book/:id" element={<BookAppointment />} />
          <Route path="/userSettings/:id" element={<UserSettings />} />
          <Route path="/appointments" element={<MyAppointments />} />
          <Route path="/shop/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
          <Route path="*" element={<NotFound />} />
          {/* Doctor Routes */}
          <Route path="/doctorDashboard" element={<DoctorHome />} />
          <Route path="/doctorDashboard/conducted" element={<Conducted />} />
          <Route path="/doctorDashboard/scheduled" element={<Scheduled />} />
          <Route path="/doctorDashboard/instant" element={<InstantAppointments />} />
          <Route path="/doctorDashboard/approved" element={<ApprovedAppointments />} />
          <Route path="/doctorDashboard/cancelled" element={<CancelledAppointments />} />
          <Route path="/doctorDashboard/patients" element={<AllPatients />} />
          <Route path="/doctorDashboard/prescriptionHistory" element={<PrescriptionHistory />} />
          <Route path="/doctorDashboard/settings" element={<Settings />} />
          {/* Pharmacist Routes */}
          <Route path="/pharmacist" element={<PharmacistHome />} />
        </Routes>
      </div>
      <Footer />
      <Toaster />
    </Router>
  );
}

// Dynamic Navbar Component
const DynamicNavbar: React.FC = () => {
  const location = useLocation();

  // Check if the current route is for doctor pages
  const isDoctorRoute = location.pathname.startsWith('/doctorDashboard');
  const isPharmacistRoute = location.pathname.startsWith('/pharmacist');

  // Render the appropriate navbar
  if(isDoctorRoute){

    return <></>;
  } else if(isPharmacistRoute){
    return <></>;
  } else{
    return <Navbar />
  }
};

export default App;
