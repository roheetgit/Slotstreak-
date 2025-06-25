import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CasinoSimulator = () => {
  const [message, setMessage] = useState('Tap Spin to Start')
  const [spins, setSpins] = useState(0)
  const [wins, setWins] = useState(0)
  const [spinning, setSpinning] = useState(false)

  const handleSpin = () => {
    setSpinning(true)
    const audio = new Audio('/spin.mp3')
    audio.play()

    setTimeout(() => {
      const isWin = Math.random() < 0.5
      const resultAudio = new Audio(isWin ? '/win.mp3' : '/lose.mp3')
      resultAudio.play()

      setMessage(isWin ? '🎉 JACKPOT! You Win!' : '😢 Try Again!')
      setSpins(prev => prev + 1)
      if (isWin) setWins(prev => prev + 1)
      setSpinning(false)
    }, 1500)
  }

  return (
    <div style={{ marginTop: 20 }}>
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: spinning ? 1.2 : 1 }}
        transition={{ type: 'spring', stiffness: 200 }}
      >
        <p style={{ fontSize: 22 }}>{message}</p>
      </motion.div>

      <button
        onClick={handleSpin}
        disabled={spinning}
        style={{
          padding: '12px 30px',
          fontSize: 18,
          backgroundColor: '#ff0057',
          color: 'white',
          borderRadius: 12,
          border: 'none',
          marginTop: 10,
          cursor: 'pointer',
        }}
      >
        {spinning ? 'Spinning...' : 'Spin 🎰'}
      </button>

      <div style={{ marginTop: 25 }}>
        <p>🎯 Spins: {spins} | 🏆 Wins: {wins}</p>
        <p>💯 Win Rate: {spins > 0 ? ((wins / spins) * 100).toFixed(1) : 0}%</p>
      </div>
    </div>
  )
}

export default CasinoSimulator