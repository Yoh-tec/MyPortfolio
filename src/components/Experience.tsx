import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      id: 1,
      title: 'シニアWebデザイナー',
      company: 'テックスタートアップ株式会社',
      location: '東京',
      period: '2022年 - 現在',
      description: 'スタートアップ企業でUI/UXデザインとフロントエンド開発を担当。製品のブランディングからユーザー体験の改善まで幅広く携わる。',
      achievements: [
        '製品のユーザーエンゲージメントを40%向上',
        'デザインシステムの構築と実装',
        'チーム内でのデザインガイドライン策定'
      ],
      technologies: ['Figma', 'React', 'TypeScript', 'Design Systems']
    },
    {
      id: 2,
      title: 'UI/UXデザイナー',
      company: 'デジタルエージェンシー',
      location: '大阪',
      period: '2020年 - 2022年',
      description: '大手企業のWebサイトやモバイルアプリのUI/UXデザインを担当。クライアントとの密接なコミュニケーションを通じて要件を理解し、最適なソリューションを提供。',
      achievements: [
        '15以上の企業サイトのデザインを担当',
        'モバイルアプリのユーザビリティテスト実施',
        'デザインチームのリードを担当'
      ],
      technologies: ['Adobe XD', 'Sketch', 'InVision', 'ユーザビリティテスト']
    },
    {
      id: 3,
      title: 'ジュニアデザイナー',
      company: 'Web制作会社',
      location: '名古屋',
      period: '2019年 - 2020年',
      description: 'Webデザイナーとしてキャリアをスタート。HTML/CSSコーディングからデザインまで幅広く学習し、実践的なスキルを身につける。',
      achievements: [
        '20以上のWebサイト制作に参加',
        'レスポンシブデザインの実装',
        'SEO対策を考慮したデザイン設計'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Photoshop']
    }
  ]

  const education = [
    {
      id: 1,
      degree: 'デザイン学士',
      school: 'デザイン専門大学',
      period: '2015年 - 2019年',
      description: 'グラフィックデザインとWebデザインを専攻。ユーザーエクスペリエンスデザインの基礎を学び、卒業制作ではモバイルアプリのUIデザインを制作。'
    }
  ]

  const certifications = [
    {
      id: 1,
      name: 'Google UX Design Certificate',
      issuer: 'Google',
      year: '2021',
      description: 'ユーザーエクスペリエンスデザインの包括的なコースを修了。'
    },
    {
      id: 2,
      name: 'Figma Design Systems',
      issuer: 'Figma',
      year: '2022',
      description: 'デザインシステムの構築と管理について学習。'
    }
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            経験 & 学歴
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            これまでのキャリアと学びの軌跡をご紹介します。
            各経験を通じて、デザインと技術の両面で成長を続けています。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              職歴
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline */}
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="absolute left-2 top-4 w-0.5 h-full bg-gray-200"></div>
                  
                  <div className="ml-8">
                    <div className="card p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-xl font-bold text-gray-900 mb-2 sm:mb-0">
                          {exp.title}
                        </h4>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar size={16} className="mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <Building size={16} className="mr-2" />
                        <span className="font-medium">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin size={16} className="mr-1" />
                        <span>{exp.location}</span>
                      </div>
                      
                      <p className="text-gray-600 mb-4">
                        {exp.description}
                      </p>
                      
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">主な成果:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              学歴 & 資格
            </h3>
            
            {/* Education */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">学歴</h4>
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  className="card p-4 mb-4"
                >
                  <h5 className="font-bold text-gray-900 mb-1">{edu.degree}</h5>
                  <p className="text-gray-600 text-sm mb-2">{edu.school}</p>
                  <p className="text-gray-500 text-xs mb-2">{edu.period}</p>
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">資格</h4>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="card p-4 mb-4"
                >
                  <h5 className="font-bold text-gray-900 mb-1">{cert.name}</h5>
                  <p className="text-gray-600 text-sm mb-2">{cert.issuer} • {cert.year}</p>
                  <p className="text-gray-600 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">専門分野</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>UI/UX デザイン</span>
                    <span>95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>フロントエンド開発</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>プロジェクト管理</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 