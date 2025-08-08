import { motion } from 'framer-motion'
import { useState } from 'react'

interface PlayfulButtonProps {
  children: React.ReactNode
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  className?: string
}

const PlayfulButton = ({ children, onClick, variant = 'primary', className = '' }: PlayfulButtonProps) => {
  const [isPressed, setIsPressed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const baseClasses = "relative overflow-hidden font-body transition-all duration-200"
  const variantClasses = {
    primary: "bg-primary-500 hover:bg-primary-600 text-white border border-primary-500",
    secondary: "bg-base-200 hover:bg-base-300 text-text-900 border border-base-300"
  }

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      animate={{
        rotate: isPressed ? [0, -1, 1, -1, 0] : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <motion.div
        className="relative z-10 px-6 py-3"
        animate={{
          y: isPressed ? 1 : 0,
        }}
      >
        {children}
      </motion.div>
    </motion.button>
  )
}

export default PlayfulButton 