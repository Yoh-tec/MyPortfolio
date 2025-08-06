import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Clock, Target } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Award, value: '50+', label: '完了プロジェクト' },
    { icon: Users, value: '30+', label: '満足したクライアント' },
    { icon: Clock, value: '5+', label: '年の経験' },
    { icon: Target, value: '100%', label: '納期遵守率' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            私について
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            情熱的なWebデザイナーとして、ユーザー中心のデザインと
            革新的な技術を組み合わせて、印象的なデジタル体験を創造しています。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              デザインへの情熱
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                私は5年以上の経験を持つWebデザイナーで、ユーザーエクスペリエンスと
                ビジュアルデザインの両方に深い理解を持っています。各プロジェクトで、
                クライアントのビジョンを理解し、ブランドの価値を最大化する
                美しく機能的なソリューションを提供しています。
              </p>
              <p>
                最新のデザイントレンドと技術を常に学び、創造性と実用性の
                バランスを取ったデザインを心がけています。レスポンシブデザイン、
                アクセシビリティ、パフォーマンスを重視し、すべてのデバイスで
                素晴らしい体験を提供します。
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">UI/UX</div>
                <div className="text-sm text-gray-600">デザイン</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">フロントエンド</div>
                <div className="text-sm text-gray-600">開発</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">ブランディング</div>
                <div className="text-sm text-gray-600">戦略</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">モバイル</div>
                <div className="text-sm text-gray-600">デザイン</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Placeholder for about image */}
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold gradient-text">A</span>
                  </div>
                  <p className="text-gray-600 font-medium">About Image</p>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-200 rounded-full opacity-60"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 