import { motion } from 'framer-motion'

const GeometricBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 大きな三角形 */}
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-32 h-32 border border-primary-200 opacity-20"
        style={{
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />
      
      {/* 小さな四角形 */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-20 w-16 h-16 border border-primary-300 opacity-30"
      />
      
      {/* 円形 */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-32 left-1/4 w-24 h-24 border border-primary-400 opacity-25"
        style={{ borderRadius: '50%' }}
      />
      
      {/* 六角形 */}
      <motion.div
        animate={{
          rotate: [0, -360],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 right-1/3 w-20 h-20 border border-primary-200 opacity-20"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      />
      
      {/* 動く線 */}
      <motion.div
        animate={{
          x: [-100, window.innerWidth + 100],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/3 w-32 h-px bg-primary-300 opacity-30"
      />
      
      <motion.div
        animate={{
          x: [window.innerWidth + 100, -100],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/3 w-24 h-px bg-primary-200 opacity-25"
      />
      
      {/* 浮遊する点 */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3
          }}
          className="absolute w-2 h-2 bg-primary-400 opacity-30"
          style={{
            left: `${10 + i * 10}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
        />
      ))}
      
      {/* 回転する十字 */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/4 left-1/4 w-12 h-12 opacity-20"
      >
        <div className="absolute top-1/2 left-0 w-full h-px bg-primary-300 transform -translate-y-1/2" />
        <div className="absolute top-0 left-1/2 w-px h-full bg-primary-300 transform -translate-x-1/2" />
      </motion.div>
    </div>
  )
}

export default GeometricBackground 