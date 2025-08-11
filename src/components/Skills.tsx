import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Cloud, 
  Globe,
  Zap,
  Shield,
  Terminal,
  Smartphone
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'プログラミング言語',
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Java', level: 90 },
        { name: 'C#', level: 85 },
        { name: 'Swift', level: 80 },
      ]
    },
    {
      title: 'Web技術',
      icon: Globe,
      skills: [
        { name: 'HTML5/CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 90 },
        { name: 'React', level: 85 },
      ]
    },
    {
      title: '業務効率化',
      icon: Terminal,
      skills: [
        { name: 'Excelマクロ', level: 90 },
        { name: 'シェルスクリプト', level: 85 },
        { name: 'CLI開発', level: 85 },
        { name: 'Chrome拡張', level: 80 },
      ]
    },
    {
      title: 'インフラ・セキュリティ',
      icon: Shield,
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'セキュリティ監査', level: 90 },
        { name: 'ファイル処理自動化', level: 95 },
        { name: 'システム設計', level: 85 },
      ]
    }
  ]

  const technologies = [
    { name: 'Python', icon: '🐍' },
    { name: 'Java', icon: '☕' },
    { name: 'C#', icon: '🔷' },
    { name: 'Swift', icon: '🍎' },
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Excel VBA', icon: '📊' },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            スキル & 技術
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            多様なプログラミング言語と技術を駆使して、
            セキュアで高品質なシステム開発を提供しています。
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="card p-6"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <category.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            主要技術
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gray-100 hover:bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-3 transition-colors duration-200">
                  <span className="text-2xl">{tech.icon}</span>
                </div>
                <p className="text-sm font-medium text-gray-700 group-hover:text-primary-600 transition-colors duration-200">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">セキュリティ重視</h4>
            <p className="text-gray-600">
              サイバーセキュリティの専門知識を活かし、
              安全で信頼性の高いシステムを構築します。
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-primary-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">高速開発</h4>
            <p className="text-gray-600">
              最短1-2日での開発を実現し、
              お客様のニーズに素早く対応します。
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Terminal className="w-8 h-8 text-primary-600" />
            </div>
            <h4 className="text-lg font-bold text-gray-900 mb-2">自動化</h4>
            <p className="text-gray-600">
              面倒なファイル処理や業務を自動化し、
              効率化を実現します。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 