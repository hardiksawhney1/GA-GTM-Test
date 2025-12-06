import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Home Screen</h1>
      <p>Welcome to the Home page! This is a temporary screen for practice.</p>
      <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <Link to="/about" style={{ margin: '0 1rem', color: '#646cff' }}>
          Go to About
        </Link>
        <Link to="/contact" style={{ margin: '0 1rem', color: '#646cff' }}>
          Go to Contact
        </Link>
        <Link to="/products" style={{ margin: '0 1rem', color: '#646cff' }}>
          Go to Products
        </Link>
        <Link to="/profile" style={{ margin: '0 1rem', color: '#646cff' }}>
          Go to Profile
        </Link>
        <Link to="/form" style={{ margin: '0 1rem', color: '#646cff', fontWeight: 'bold' }}>
          Go to Form Page
        </Link>
        <Link to="/buttons" style={{ margin: '0 1rem', color: '#646cff', fontWeight: 'bold' }}>
          Go to Buttons Page
        </Link>
      </div>
    </div>
  )
}

export default Home

