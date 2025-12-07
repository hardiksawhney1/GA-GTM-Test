import { useState } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    age: 25,
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value,
    })
  }

  const handleSave = () => {
    setIsEditing(false)
    alert('Profile updated!')
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Profile Screen</h1>
      <p>Manage your profile information</p>
      
      <div style={{ marginTop: '2rem', textAlign: 'left', padding: '1.5rem', border: '1px solid #ccc', borderRadius: '8px' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Age:</label>
          {isEditing ? (
            <input
              type="number"
              name="age"
              value={user.age}
              onChange={handleChange}
              style={{ width: '100%', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
            />
          ) : (
            <p>{user.age}</p>
          )}
        </div>
        
        <div style={{ marginTop: '1.5rem' }}>
          {isEditing ? (
            <button onClick={handleSave} style={{ padding: '0.6em 1.2em', cursor: 'pointer', marginRight: '1rem' }}>
              Save
            </button>
          ) : (
            <button onClick={() => setIsEditing(true)} style={{ padding: '0.6em 1.2em', cursor: 'pointer' }}>
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ margin: '0 1rem', color: '#646cff' }}>
          Back to Home
        </Link>
        <Link to="/products" style={{ margin: '0 1rem', color: '#646cff' }}>
          Go to Products
        </Link>
      </div>
    </div>
  )
}

export default Profile

