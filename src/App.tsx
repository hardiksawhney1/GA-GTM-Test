import { Routes, Route, Link } from 'react-router-dom'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Products from './screens/Products'
import Profile from './screens/Profile'
import FormPage from './screens/FormPage'
import ButtonsPage from './screens/ButtonsPage'
import './App.css'

function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc', marginBottom: '2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to="/" style={{ margin: '0 1rem', color: '#646cff', textDecoration: 'none' }}>Home</Link>
          <Link to="/about" style={{ margin: '0 1rem', color: '#646cff', textDecoration: 'none' }}>About</Link>
          <Link to="/contact" style={{ margin: '0 1rem', color: '#646cff', textDecoration: 'none' }}>Contact</Link>
          <Link to="/products" style={{ margin: '0 1rem', color: '#646cff', textDecoration: 'none' }}>Products</Link>
          <Link to="/profile" style={{ margin: '0 1rem', color: '#646cff', textDecoration: 'none' }}>Profile</Link>
          <Link to="/form" style={{ margin: '0 1rem', color: '#646cff', textDecoration: 'none' }}>Form</Link>
          <Link to="/buttons" style={{ margin: '0 1rem', color: '#646cff', textDecoration: 'none' }}>Buttons</Link>
        </div>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/buttons" element={<ButtonsPage />} />
      </Routes>
    </div>
  )
}

export default App
