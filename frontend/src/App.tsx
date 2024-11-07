import { Toaster } from 'react-hot-toast';
import { Outlet, Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
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
import About from './pages/About';
import Contact from './pages/Contact';
import ApprovedAppointments from './pages/doctor/appointments/Approved';
import CancelledAppointments from './pages/doctor/appointments/Cancelled';
import Conducted from './pages/doctor/appointments/Conducted';
import InstantAppointments from './pages/doctor/appointments/InstantAppointments';
import Scheduled from './pages/doctor/appointments/Scheduled';
import DoctorHome from './pages/doctor/Home';
import AllPatients from './pages/doctor/Patients';
import PrescriptionHistory from './pages/doctor/PrescriptionHistory';
import Settings from './pages/doctor/Settings';
import Home from './pages/Home';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments';
import NotFound from './pages/NotFound';
import PharmacistHome from './pages/pharmacist/Home';
import CancelledOrders from './pages/pharmacist/Orders/CancelledOrders';
import DeliveredOrders from './pages/pharmacist/Orders/DeliveredOrders';
import PendingOrders from './pages/pharmacist/Orders/PendingOrders';
import ReadyToShip from './pages/pharmacist/Orders/ReadyToShip';
import Payments from './pages/pharmacist/Payments';
import Users from './pages/pharmacist/Users';
import Products from './pages/Products';
import Register from './pages/Register';
import AdminHome from './pages/admin/Home';
import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { FaCog, FaUser } from 'react-icons/fa';
import { MdOutlineHistory } from 'react-icons/md';
import { RiCalendarScheduleFill, RiFirstAidKitFill } from 'react-icons/ri';
import { TbBellRingingFilled } from 'react-icons/tb';
import { FcApproval } from 'react-icons/fc';
import { IoIosCheckmarkCircle } from 'react-icons/io';
// Sidebar1 Items
const SidebarItems = [
  {
      heading: "All Appointments",
      headingIcon: <RiFirstAidKitFill className='text-3xl text-dark-green' />,
      headinglink: "/doctorDashboard",
      subitems: [
          {
              icon: <TbBellRingingFilled className='text-3xl text-dark-green' />,
              url: "/doctorDashboard/instant",
              title: "Instant",
          },
          {
              icon: <FcApproval className='text-3xl text-dark-green' />,
              url: "/doctorDashboard/approved",
              title: "Approved",
          },
          {
              icon: <RiCalendarScheduleFill className='text-3xl text-dark-green' />,
              url: "/doctorDashboard/scheduled",
              title: "Scheduled",
          },
          {
              icon: <IoIosCheckmarkCircle className='text-3xl text-dark-green' />,
              url: "/doctorDashboard/conducted",
              title: "Conducted",
          },
      ] 
  },
  {
      heading: "Patients",
      headingIcon: <FaUser className='text-dark-green text-3xl' />,
      headinglink: "/doctorDashboard/patients",
  },
  {
      heading: "Prescription History",
      headingIcon: <MdOutlineHistory className='text-dark-green text-3xl' />,
      headinglink: "/doctorDashboard/prescriptionHistory",
  },
  {
      heading: "Settings",
      headingIcon: <FaCog className='text-dark-green text-3xl' />,
      headinglink: "/doctorDashboard/settings",
  },
]
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
        
          <Route element={<DoctorLayout />}>
          <Route path="/doctorDashboard" element={<DoctorHome />} />
          <Route path="/doctorDashboard/conducted" element={<Conducted />} />
          <Route path="/doctorDashboard/scheduled" element={<Scheduled />} />
          <Route path="/doctorDashboard/instant" element={<InstantAppointments />} />
          <Route path="/doctorDashboard/approved" element={<ApprovedAppointments />} />
          <Route path="/doctorDashboard/cancelled" element={<CancelledAppointments />} />
          <Route path="/doctorDashboard/patients" element={<AllPatients />} />
          <Route path="/doctorDashboard/prescriptionHistory" element={<PrescriptionHistory />} />
          <Route path="/doctorDashboard/settings" element={<Settings image="https://plus.unsplash.com/premium_photo-1661766569022-1b7f918ac3f3?w=500" />} />
          </Route>
          {/* Pharmacist Routes */}
          <Route path="/pharmacist" element={<PharmacistHome />} />
          <Route path="/pharmacist/delivered" element={<DeliveredOrders />} />
          <Route path="/pharmacist/ready" element={<ReadyToShip />} />
          <Route path="/pharmacist/pending" element={<PendingOrders />} />
          <Route path="/pharmacist/cancelled" element={<CancelledOrders />} />
          <Route path="/pharmacist/users" element={<Users />} />
          <Route path="/pharmacist/payments" element={<Payments />} />
          <Route path="/pharmacist/settings" element={<Settings image='https://images.unsplash.com/photo-1657551856874-d492ef8ecba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHBoYXJtYWNpc3R8ZW58MHx8MHx8fDA%3D' />} />
            {/* Admin Routes */}
            <Route path='/admin' element={<AdminHome />} />
        </Routes>
      </div>
      <DynamicFooter />

      <Toaster />
    </Router>
  );
}

// Component for Layout with Sidebar for Doctor Routes
const DoctorLayout = () => (
  <SidebarProvider>
    <AppSidebar SidebarItems={SidebarItems} />
    <SidebarTrigger />
   
    <Outlet />
   
  </SidebarProvider>
);

// Dynamic Navbar Component
const DynamicNavbar: React.FC = () => {
  const location = useLocation();

  // Check if the current route is for doctor pages
  const isDoctorRoute = location.pathname.startsWith('/doctorDashboard');
  const isPharmacistRoute = location.pathname.startsWith('/pharmacist');
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Render the appropriate navbar
  if(isDoctorRoute){

    return <></>;
  } else if(isPharmacistRoute){
    return <></>;
  } else if(isAdminRoute){
    return <></>;
  } else{
    return <Navbar />
  }
};
const DynamicFooter: React.FC = () => {
  const location = useLocation();

  // Check if the current route is for doctor pages
  const isDoctorRoute = location.pathname.startsWith('/doctorDashboard');
  const isPharmacistRoute = location.pathname.startsWith('/pharmacist');
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Render the appropriate navbar
  if(isDoctorRoute){

    return <></>;
  } else if(isPharmacistRoute){
    return <></>;
  }
  else if(isAdminRoute){
    return <></>;
  }
  else{
    return <Footer />
  }
};

export default App;
