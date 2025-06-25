import React from 'react'
import CasinoSimulator from './CasinoSimulator'
import { GoogleOAuthProvider } from '@react-oauth/google'

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <h1 style={{ color: '#ff0057' }}>🎰 SlotStreak Full 🎰</h1>
        <CasinoSimulator />
      </div>
    </GoogleOAuthProvider>
  )
}

export default App