import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Clock, Target } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Award, value: '最短1-2日', label: '開発期間' },
    { icon: Users, value: '100%', label: 'セキュリティ重視' },
    { icon: Clock, value: '4年+', label: '情報セキュリティ経験' },
    { icon: Target, value: '多言語', label: '対応可能言語' },
  ]

  return (
    <section id="about" className="py-20 bg-base-100">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-normal text-text-900 mb-4">
            私について
          </h2>
          <p className="text-lg text-text-600 max-w-3xl mx-auto font-body">
            システムエンジニア & Webデザイナーとして、サイバーセキュリティの専門知識を活かし、
            安全で高品質なシステム開発を提供しています。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-medium text-text-900 mb-6">
              サイバーセキュリティの専門家
            </h3>
            <div className="space-y-4 text-text-600 font-body">
              <p>
                法政大学情報系学科で情報セキュリティを専攻し、現在はサイバーセキュリティ企業で
                システムエンジニアとして勤務しています。セキュリティの視点から、
                安全で信頼性の高いシステム開発を心がけています。
              </p>
              <p>
                基本的には、自分が欲しい機能やサイト、またはお客様の要望に沿ったシステムを
                作成しています。ファイル内部調査などの案件で面倒なファイル処理を自動化したり、
                簡単に運用できるポートフォリオサイトの作成など、効率化を重視した開発を行っています。
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-display font-medium accent-text mb-2">システム開発</div>
                <div className="text-sm text-text-600 font-body">Webアプリ・CLI</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-medium accent-text mb-2">セキュリティ</div>
                <div className="text-sm text-text-600 font-body">安心安全</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-medium accent-text mb-2">自動化</div>
                <div className="text-sm text-text-600 font-body">効率化</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-display font-medium accent-text mb-2">多言語対応</div>
                <div className="text-sm text-text-600 font-body">Python・Java・C#等</div>
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
                    <span className="text-2xl font-bold gradient-text">石</span>
                  </div>
                  <p className="text-gray-600 font-medium">石川陽</p>
                  <p className="text-sm text-gray-500 mt-2">システムエンジニア & Webデザイナー</p>
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
              <div className="w-16 h-16 bg-base-200 border border-base-300 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 accent-text" />
              </div>
              <div className="text-3xl font-display font-medium text-text-900 mb-2">{stat.value}</div>
              <div className="text-text-600 font-body">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About 