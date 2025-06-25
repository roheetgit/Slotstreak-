import React, { useState } from 'react'
import { motion } from 'framer-motion'

const CasinoSimulator = () => {
  const [message, setMessage] = useState('🎰 Welcome to SlotStreak Ultra')
  const [spins, setSpins] = useState(0)
  const [wins, setWins] = useState(0)
  const [spinning, setSpinning] = useState(false)

  const handleSpin = () => {
    setSpinning(true)
    new Audio('/spin.mp3').play()

    setTimeout(() => {
      const isWin = Math.random() < 0.5
      new Audio(isWin ? '/win.mp3' : '/lose.mp3').play()
      setMessage(isWin ? '💰 Mega Win!' : '❌ No luck this time!')
      setSpins(prev => prev + 1)
      if (isWin) setWins(prev => prev + 1)
      setSpinning(false)
    }, 2000)
  }

  return (
    <div>
      <img src="/slotstreak-logo.png" alt="SlotStreak Logo" width="160" style={{ borderRadius: '12px', boxShadow: '0 0 15px #ff0' }} />
      <motion.div animate={{ scale: spinning ? 1.2 : 1 }} transition={{ duration: 0.5 }}>
        <h2 style={{ margin: '20px 0', fontSize: '26px', color: '#ffcc00' }}>{message}</h2>
      </motion.div>
      <button
        onClick={handleSpin}
        disabled={spinning}
        style={{
          background: 'linear-gradient(45deg, #ff0057, #ffcc00)',
          color: 'white',
          fontSize: '18px',
          border: 'none',
          borderRadius: '12px',
          padding: '12px 32px',
          cursor: 'pointer',
          boxShadow: '0 0 10px #ffcc00',
          marginBottom: '20px'
        }}
      >
        {spinning ? 'Spinning...' : 'SPIN 🎰'}
      </button>
      <p>🎯 Spins: {spins} | 🏆 Wins: {wins} | 💯 Win Rate: {spins > 0 ? ((wins/spins)*100).toFixed(1) : 0}%</p>
    </div>
  )
}

export default CasinoSimulator