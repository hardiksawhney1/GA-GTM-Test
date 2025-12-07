import { useState } from 'react'
import { Link } from 'react-router-dom'

const FormPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    zipCode: '',
    dateOfBirth: '',
    gender: '',
    interests: [],
    newsletter: false,
    comments: '',
  })

  const handleChange = (e) => {
    const { name, value, type } = e.target
    const checked = e.target.checked

    if (type === 'checkbox') {
      if (name === 'interests') {
        const interestValue = value
        setFormData(prev => ({
          ...prev,
          interests: checked
            ? [...prev.interests, interestValue]
            : prev.interests.filter(item => item !== interestValue),
        }))
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked,
        }))
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Form submitted successfully! Check console for data.')
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      city: '',
      zipCode: '',
      dateOfBirth: '',
      gender: '',
      interests: [],
      newsletter: false,
      comments: '',
    })
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Form Page</h1>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              First Name: *
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Last Name: *
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Email: *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Phone: *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Country: *
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option value="">Select Country</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="uk">UK</option>
              <option value="india">India</option>
              <option value="australia">Australia</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              City: *
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Zip Code: *
            </label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Date of Birth: *
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              Gender: *
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Interests: (Select all that apply)
          </label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {['Technology', 'Sports', 'Music', 'Travel', 'Reading', 'Cooking'].map((interest) => (
              <label key={interest} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input
                  type="checkbox"
                  name="interests"
                  value={interest.toLowerCase()}
                  checked={formData.interests.includes(interest.toLowerCase())}
                  onChange={handleChange}
                />
                {interest}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            Subscribe to newsletter
          </label>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
            Additional Comments:
          </label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows={4}
            style={{ width: '100%', padding: '0.6rem', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
          <button
            type="submit"
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: '#646cff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: '#ccc',
              color: '#333',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Reset
          </button>
        </div>
      </form>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <Link to="/" style={{ color: '#646cff', textDecoration: 'none' }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default FormPage

