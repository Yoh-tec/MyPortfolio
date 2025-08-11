import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, BookOpen, MessageSquare, User, Terminal, Globe } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: 'macOS・PDFブックマーク抽出サイト',
      description: 'macOS環境でのPDFファイルからブックマーク情報を効率的に抽出・管理するWebサイト。ファイル処理の自動化により作業効率を大幅に向上。',
      image: '/project1.jpg',
      category: 'Webアプリケーション',
      technologies: ['Python', 'React', 'TypeScript', 'PDF処理', '自動化'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: '生成AIチャット登録フォームWebアプリ',
      description: '生成AIチャット機能を活用した登録フォームWebアプリケーション。AIによる入力支援とバリデーション機能を実装。',
      image: '/project2.jpg',
      category: 'Webアプリケーション',
      technologies: ['React', 'TypeScript', 'AI API', 'フォーム処理', 'バリデーション'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'エンジニア自己紹介ポートフォリオサイト',
      description: '本サイト。エンジニアのスキルと成果物を美しく展示するポートフォリオサイト。モダンなデザインとレスポンシブ対応。',
      image: '/project3.jpg',
      category: 'ポートフォリオ',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'レスポンシブ'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'ファイル処理自動化ツール',
      description: '業務で頻繁に行うファイル処理作業を自動化するCLIツール。Pythonとシェルスクリプトを組み合わせて開発。',
      image: '/project4.jpg',
      category: 'CLIツール',
      technologies: ['Python', 'シェルスクリプト', 'CLI', 'ファイル処理', '自動化'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Excelマクロ業務効率化',
      description: '企業の業務プロセスを効率化するExcelマクロ・VBA開発。データ処理とレポート生成の自動化を実現。',
      image: '/project5.jpg',
      category: 'Excelマクロ',
      technologies: ['Excel VBA', 'マクロ', 'データ処理', 'レポート生成', '業務効率化'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Chrome拡張機能',
      description: 'ブラウザでの作業効率化のためのChrome拡張機能。カスタマイズ可能なツールバーとショートカット機能。',
      image: '/project6.jpg',
      category: 'Chrome拡張',
      technologies: ['JavaScript', 'Chrome API', '拡張機能', 'UI/UX', '効率化'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            成果物
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            これまでに開発したプロジェクトの一部をご紹介します。
            各プロジェクトで、効率化とセキュリティを重視した
            最適なソリューションを提供しています。
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            注目プロジェクト
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-primary-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {project.id === 1 && (
                        <BookOpen className="w-20 h-20 text-primary-600 mx-auto mb-4" />
                      )}
                      {project.id === 2 && (
                        <MessageSquare className="w-20 h-20 text-primary-600 mx-auto mb-4" />
                      )}
                      <p className="text-gray-600 font-medium">プロジェクト画像</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-4">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.liveUrl}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.githubUrl}
                        className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      >
                        <Github size={20} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                    >
                      <Eye size={16} className="mr-1" />
                      ライブデモ
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center text-gray-600 hover:text-gray-700 font-medium text-sm transition-colors duration-200"
                    >
                      <Github size={16} className="mr-1" />
                      コード
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            その他のプロジェクト
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                className="card group overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-purple-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      {project.id === 3 && (
                        <User className="w-16 h-16 text-primary-600 mx-auto mb-3" />
                      )}
                      {project.id === 4 && (
                        <Terminal className="w-16 h-16 text-primary-600 mx-auto mb-3" />
                      )}
                      {project.id === 5 && (
                        <BookOpen className="w-16 h-16 text-primary-600 mx-auto mb-3" />
                      )}
                      {project.id === 6 && (
                        <Globe className="w-16 h-16 text-primary-600 mx-auto mb-3" />
                      )}
                      <p className="text-gray-600 text-sm">プロジェクト画像</p>
                    </div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex space-x-3">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.liveUrl}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        href={project.githubUrl}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-700 hover:text-primary-600 transition-colors duration-200"
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-primary-600 bg-primary-100 px-2 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            より多くのプロジェクトをご覧になりたい方は、
            お気軽にお問い合わせください。
          </p>
          <button className="btn-primary">
            お問い合わせ
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 