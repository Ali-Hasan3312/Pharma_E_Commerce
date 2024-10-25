import { Toaster } from 'react-hot-toast'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Cart from './components/Cart'
import DoctorsBySpeciality from './components/DoctorsBySpeciality'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import SellersShop from './components/SellersShop'
import Shipping from './components/Shipping'
import OrderDetails from './components/OrderDetails'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Register from './pages/Register'
import DoctorDetails from './components/DoctorDetails'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shop' element={<SellersShop />} />
        <Route path='/doctors' element={<DoctorsBySpeciality />} />
        <Route path='/doctor/:id' element={<DoctorDetails />} />
        <Route path='/appointments' element={<MyAppointments />} />
        <Route path='/shop/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} /> 
        <Route path='/shipping' element={<Shipping />} /> 
        <Route path='/orderDetails' element={<OrderDetails />} /> 
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  )
}

export default App
