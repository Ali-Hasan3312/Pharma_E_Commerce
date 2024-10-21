import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import SellersShop from './components/SellersShop'
import DoctorsSpeciality from './components/DoctorsSpeciality'
import MyAppointments from './pages/MyAppointments'
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/shop' element={<SellersShop />} />
        <Route path='/doctors' element={<DoctorsSpeciality />} />
        <Route path='/appointments' element={<MyAppointments />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
