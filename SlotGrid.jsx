import React, { useState } from 'react'
import { motion } from 'framer-motion'

const symbols = ['cherry', 'diamond', 'bell', 'seven', 'lemon']

const SlotGrid = () => {
  const [message, setMessage] = useState('Welcome to SlotStreak!')

  const spin = () => {
    const result = Array(3).fill(0).map(() => symbols[Math.floor(Math.random() * symbols.length)])
    const win = result.every((val, i, arr) => val === arr[0])
    setMessage(win ? '🎉 JACKPOT!' : '❌ Try Again!')
    new Audio(win ? 'win.mp3' : 'lose.mp3').play()
  }

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2 style={{ color: 'gold', fontSize: '28px' }}>{message}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
        {symbols.map((s, i) => (
          <motion.img key={i}
            src={'/${s}.png'} alt={s}
            width="150" height="150"
            whileHover={{ scale: 1.1 }}
            style={{ borderRadius: 10, boxShadow: '0 0 12px red' }}
          />
        ))}
      </div>
      <button onClick={spin} style={{
        marginTop: 30,
        padding: '12px 32px',
        fontSize: 18,
        background: 'linear-gradient(45deg, gold, crimson)',
        border: 'none',
        color: 'white',
        borderRadius: 10,
        cursor: 'pointer',
        boxShadow: '0 0 12px gold'
      }}>
        SPIN 🎰
      </button>
    </div>
  )
}

export default SlotGrid
