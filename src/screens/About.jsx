import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>About Screen</h1>
      <p>This is the About page. Learn more about us here!</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ margin: '0 1rem', color: '#646cff' }}>
          Back to Home
        </Link>
        <Link to="/contact" style={{ margin: '0 1rem', color: '#646cff' }}>
          Go to Contact
        </Link>
      </div>
    </div>
  )
}

export default About

