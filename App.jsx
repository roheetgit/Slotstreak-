import React from 'react'
import CasinoSimulator from './CasinoSimulator'
import { GoogleOAuthProvider } from '@react-oauth/google'

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <CasinoSimulator />
      </div>
    </GoogleOAuthProvider>
  )
}

export default App