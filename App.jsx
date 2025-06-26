import React from 'react'
import SlotGrid from './SlotGrid'
import { GoogleOAuthProvider } from '@react-oauth/google'

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <SlotGrid />
    </GoogleOAuthProvider>
  )
}

export default App