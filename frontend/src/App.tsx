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
import ApprovedAppointments from './pages/doctor/appointments/Approved';
import CancelledAppointments from './pages/doctor/appointments/Cancelled';
import Conducted from './pages/doctor/appointments/Conducted';
import InstantAppointments from './pages/doctor/appointments/InstantAppointments';
import Scheduled from './pages/doctor/appointments/Scheduled';
import DoctorHome from './pages/doctor/Home';
import AllPatients from './pages/doctor/Patients';
import PrescriptionHistory from './pages/doctor/PrescriptionHistory';
import Settings from './pages/doctor/Settings';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments';
import NotFound from './pages/NotFound';
import Products from './pages/Products';
import Register from './pages/Register';
import DeliveredOrders from './pages/pharmacist/Orders/DeliveredOrders';
import PharmacistHome from './pages/pharmacist/Home';
import ReadyToShip from './pages/pharmacist/Orders/ReadyToShip';
import PendingOrders from './pages/pharmacist/Orders/PendingOrders';
import CancelledOrders from './pages/pharmacist/Orders/CancelledOrders';
import Users from './pages/pharmacist/Users';

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
          <Route path="/pharmacist/delivered" element={<DeliveredOrders />} />
          <Route path="/pharmacist/ready" element={<ReadyToShip />} />
          <Route path="/pharmacist/pending" element={<PendingOrders />} />
          <Route path="/pharmacist/cancelled" element={<CancelledOrders />} />
          <Route path="/pharmacist/users" element={<Users />} />
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
