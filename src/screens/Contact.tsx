import { useState } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Form submitted! Name: ${formData.name}, Email: ${formData.email}`)
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Contact Screen</h1>
      <p>Get in touch with us!</p>
      
      <form onSubmit={handleSubmit} style={{ marginTop: '2rem', textAlign: 'left' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem' }}>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            required
          />
        </div>
        
        <button type="submit" style={{ padding: '0.6em 1.2em', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ margin: '0 1rem', color: '#646cff' }}>
          Back to Home
        </Link>
        <Link to="/about" style={{ margin: '0 1rem', color: '#646cff' }}>
          Go to About
        </Link>
      </div>
    </div>
  )
}

export default Contact

