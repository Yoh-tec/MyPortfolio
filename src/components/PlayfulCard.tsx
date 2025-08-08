import { motion } from 'framer-motion'
import { useState } from 'react'

interface PlayfulCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

const PlayfulCard = ({ children, className = '', delay = 0 }: PlayfulCardProps) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={`relative bg-base-50 border border-base-200 overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3 }
      }}
    >
      {/* 背景の動くパターン */}
      <motion.div
        className="absolute inset-0 opacity-5"
        animate={{
          rotate: isHovered ? [0, 5, -5, 0] : 0,
        }}
        transition={{ duration: 2, repeat: isHovered ? Infinity : 0 }}
      >
        <div className="absolute top-4 left-4 w-2 h-2 border border-primary-300" />
        <div className="absolute top-8 right-6 w-1 h-1 bg-primary-400" />
        <div className="absolute bottom-6 left-8 w-1 h-1 bg-primary-300" />
        <div className="absolute bottom-4 right-4 w-2 h-2 border border-primary-200" />
      </motion.div>

      {/* メインコンテンツ */}
      <div className="relative z-10 p-6">
        {children}
      </div>

      {/* ホバー時の光沢エフェクト */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
        animate={{
          x: isHovered ? [-200, 400] : -200,
          opacity: isHovered ? [0, 0.1, 0] : 0,
        }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  )
}

export default PlayfulCard 