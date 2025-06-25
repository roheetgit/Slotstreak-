import React, { useState } from 'react'

const CasinoSimulator = () => {
  const [message, setMessage] = useState('Press Spin to Start')

  const handleSpin = () => {
    const isWin = Math.random() < 0.5
    setMessage(isWin ? '🎉 You Win!' : '😢 You Lose!')

    const sound = new Audio(isWin ? '/win.mp3' : '/lose.mp3')
    sound.play()
  }

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleSpin}>Spin 🎰</button>
    </div>
  )
}

export default CasinoSimulator