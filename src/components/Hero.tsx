import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from 'lucide-react'
import PlayfulButton from './PlayfulButton'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-base-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-base-100"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-primary-300"></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-primary-200"></div>
        <div className="absolute bottom-32 left-1/3 w-16 h-16 border border-primary-400"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-6 py-2 bg-base-200 text-text-700 border border-base-300 text-sm font-body mb-8"
            >
              <span className="w-1 h-1 bg-primary-500 mr-3"></span>
              フリーランスWebデザイナー
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-display font-normal text-text-900 mb-8 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                こんにちは、私は
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                className="accent-text font-medium inline-block"
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, 0],
                }}
              >
                田中太郎
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                です
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg text-text-600 mb-10 leading-relaxed font-body max-w-2xl"
            >
              美しいデザインと優れたユーザー体験を創造するWebデザイナーです。
              モダンな技術とクリエイティブな視点で、ブランドの価値を最大化する
              デジタルソリューションを提供しています。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <PlayfulButton variant="primary">
                <motion.div
                  className="flex items-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles size={16} className="mr-2" />
                  作品を見る
                </motion.div>
              </PlayfulButton>
              <PlayfulButton variant="secondary">
                お問い合わせ
              </PlayfulButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                href="#"
                className="w-12 h-12 bg-base-200 hover:bg-base-300 text-text-600 hover:text-primary-500 border border-base-300 flex items-center justify-center transition-all duration-200"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                href="#"
                className="w-12 h-12 bg-base-200 hover:bg-base-300 text-text-600 hover:text-primary-500 border border-base-300 flex items-center justify-center transition-all duration-200"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                href="#"
                className="w-12 h-12 bg-base-200 hover:bg-base-300 text-text-600 hover:text-primary-500 border border-base-300 flex items-center justify-center transition-all duration-200"
              >
                <Twitter size={18} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Placeholder for hero image */}
              <div className="w-full h-96 lg:h-[500px] bg-base-200 border border-base-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-40 h-40 bg-base-50 border-2 border-primary-300 mx-auto mb-6 flex items-center justify-center">
                    <span className="text-5xl font-display font-medium accent-text">T</span>
                  </div>
                  <p className="text-text-600 font-body">プロフィール画像</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-16 h-16 border border-primary-200 opacity-40"
              ></motion.div>
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-12 h-12 border border-primary-300 opacity-50"
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-text-400 hover:text-primary-500 transition-colors duration-200"
          >
            <ArrowDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero 