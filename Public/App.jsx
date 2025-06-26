
import React from 'react';
import { signInWithGoogle } from './firebase';

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🎰 Slotstreak</h1>
      <button onClick={signInWithGoogle} style={{
        padding: "10px 20px",
        fontSize: "18px",
        borderRadius: "5px",
        backgroundColor: "#4285F4",
        color: "white",
        border: "none",
        cursor: "pointer"
      }}>
        Login with Google
      </button>
      <br /><br />
      <img src="/cherry.png" alt="Cherry" width="100" />
    </div>
  );
}

export default App;
