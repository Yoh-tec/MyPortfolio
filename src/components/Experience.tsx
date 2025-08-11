import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building, GraduationCap, Code } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      id: 1,
      title: 'システムエンジニア',
      company: 'サイバーセキュリティ企業',
      location: '東京',
      period: '2025年 - 現在',
      description: 'サイバーセキュリティ企業でシステムエンジニアとして勤務。セキュリティの視点から安全で信頼性の高いシステム開発を担当。',
      achievements: [
        'セキュリティを重視したシステム設計・開発',
        'ファイル内部調査の自動化ツール開発',
        'セキュリティ監査対応システムの構築'
      ],
      technologies: ['Python', 'Java', 'C#', 'AWS', 'セキュリティ監査']
    }
  ]

  const education = [
    {
      id: 1,
      degree: '情報セキュリティ専攻',
      school: '法政大学情報系学科',
      period: '2021年 - 2025年',
      description: '情報セキュリティを専攻し、サイバーセキュリティの基礎から応用まで幅広く学習。セキュリティ技術とシステム開発の両面で専門知識を習得。'
    }
  ]

  const services = [
    {
      id: 1,
      name: 'Webアプリケーション開発',
      description: 'React、TypeScript等を使用したモダンなWebアプリケーション開発',
      icon: Code
    },
    {
      id: 2,
      name: 'Excelマクロ開発',
      description: '業務効率化のためのExcelマクロ・VBA開発',
      icon: Code
    },
    {
      id: 3,
      name: 'ポートフォリオ作成',
      description: '個人・企業向けのポートフォリオサイト制作',
      icon: Code
    },
    {
      id: 4,
      name: 'CLIプログラム',
      description: 'コマンドラインでの作業効率化ツール開発',
      icon: Code
    },
    {
      id: 5,
      name: 'AWSインフラ構築・移行',
      description: 'クラウドインフラの設計・構築・移行支援',
      icon: Code
    },
    {
      id: 6,
      name: 'Chrome拡張機能開発',
      description: 'ブラウザの作業効率化のための拡張機能開発',
      icon: Code
    }
  ]

  const languages = [
    { name: 'Python', level: 95 },
    { name: 'Java', level: 90 },
    { name: 'C#', level: 85 },
    { name: 'Swift', level: 80 },
    { name: 'Excelマクロ', level: 90 },
    { name: 'シェルスクリプト', level: 85 },
    { name: 'HTML5/CSS/JS', level: 95 },
    { name: 'TypeScript', level: 90 }
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
            情報セキュリティの専門知識を活かしたシステム開発を提供しています。
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

          {/* Education & Services */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              学歴 & サービス
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
                  <div className="flex items-center mb-2">
                    <GraduationCap size={16} className="text-primary-600 mr-2" />
                    <h5 className="font-bold text-gray-900">{edu.degree}</h5>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{edu.school}</p>
                  <p className="text-gray-500 text-xs mb-2">{edu.period}</p>
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Services */}
            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-900 mb-4">対応可能案件</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <service.icon size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold text-gray-900 text-sm">{service.name}</h5>
                      <p className="text-gray-600 text-xs">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8"
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">対応可能言語</h4>
              <div className="space-y-3">
                {languages.slice(0, 4).map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{lang.name}</span>
                      <span>{lang.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${lang.level}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 