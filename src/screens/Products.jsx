import { useState } from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 39.99 },
    { id: 3, name: 'Product 3', price: 49.99 },
  ])

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Products Screen</h1>
      <p>Browse our products below:</p>
      
      <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '600px', margin: '2rem auto' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              padding: '1rem',
              border: '1px solid #ccc',
              borderRadius: '8px',
              textAlign: 'left',
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button style={{ marginTop: '0.5rem', padding: '0.5rem 1rem', cursor: 'pointer' }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ margin: '0 1rem', color: '#646cff' }}>
          Back to Home
        </Link>
        <Link to="/profile" style={{ margin: '0 1rem', color: '#646cff' }}>
          Go to Profile
        </Link>
      </div>
    </div>
  )
}

export default Products

