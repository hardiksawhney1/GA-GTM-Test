import { useState } from 'react'
import { Link } from 'react-router-dom'

const ButtonsPage = () => {
  const [clickCount, setClickCount] = useState(0)
  const [buttonStates, setButtonStates] = useState({
    primary: false,
    secondary: false,
    danger: false,
    success: false,
    disabled: false,
  })

  const handleButtonClick = (buttonType) => {
    setClickCount((prev) => prev + 1)
    setButtonStates((prev) => ({
      ...prev,
      [buttonType]: !prev[buttonType],
    }))
    alert(`${buttonType} button clicked! Total clicks: ${clickCount + 1}`)
  }

  const handlePrimaryClick = () => handleButtonClick('primary')
  const handleSecondaryClick = () => handleButtonClick('secondary')
  const handleDangerClick = () => handleButtonClick('danger')
  const handleSuccessClick = () => handleButtonClick('success')

  return (
    <div style={{ padding: '2rem', textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Buttons Page</h1>
      <p style={{ marginBottom: '2rem' }}>
        Click counter: <strong>{clickCount}</strong>
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '3rem' }}>
        {/* Primary Button */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>1. Primary Button</h3>
          <button
            onClick={handlePrimaryClick}
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: buttonStates.primary ? '#535bf2' : '#646cff',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: buttonStates.primary ? '0 4px 8px rgba(100, 108, 255, 0.4)' : 'none',
            }}
          >
            Primary Button
          </button>
          {buttonStates.primary && (
            <p style={{ marginTop: '0.5rem', color: '#646cff' }}>✓ Clicked!</p>
          )}
        </div>

        {/* Secondary Button */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>2. Secondary Button</h3>
          <button
            onClick={handleSecondaryClick}
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: 'transparent',
              color: '#646cff',
              border: '2px solid #646cff',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            Secondary Button
          </button>
          {buttonStates.secondary && (
            <p style={{ marginTop: '0.5rem', color: '#646cff' }}>✓ Clicked!</p>
          )}
        </div>

        {/* Danger Button */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>3. Danger Button</h3>
          <button
            onClick={handleDangerClick}
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: buttonStates.danger ? '#d32f2f' : '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            Danger Button
          </button>
          {buttonStates.danger && (
            <p style={{ marginTop: '0.5rem', color: '#f44336' }}>✓ Clicked!</p>
          )}
        </div>

        {/* Success Button */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>4. Success Button</h3>
          <button
            onClick={handleSuccessClick}
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: buttonStates.success ? '#2e7d32' : '#4caf50',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
          >
            Success Button
          </button>
          {buttonStates.success && (
            <p style={{ marginTop: '0.5rem', color: '#4caf50' }}>✓ Clicked!</p>
          )}
        </div>

        {/* Disabled Button */}
        <div>
          <h3 style={{ marginBottom: '1rem' }}>5. Disabled Button</h3>
          <button
            disabled
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1rem',
              fontWeight: 'bold',
              backgroundColor: '#ccc',
              color: '#666',
              border: 'none',
              borderRadius: '8px',
              cursor: 'not-allowed',
              opacity: 0.6,
            }}
          >
            Disabled Button
          </button>
          <p style={{ marginTop: '0.5rem', color: '#999', fontSize: '0.9rem' }}>
            This button is disabled
          </p>
        </div>
      </div>

      <div style={{ marginTop: '3rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h3>Button States Summary:</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
          <span>Primary: {buttonStates.primary ? '✓' : '✗'}</span>
          <span>Secondary: {buttonStates.secondary ? '✓' : '✗'}</span>
          <span>Danger: {buttonStates.danger ? '✓' : '✗'}</span>
          <span>Success: {buttonStates.success ? '✓' : '✗'}</span>
        </div>
      </div>

      <div style={{ marginTop: '2rem' }}>
        <Link to="/" style={{ color: '#646cff', textDecoration: 'none' }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default ButtonsPage

