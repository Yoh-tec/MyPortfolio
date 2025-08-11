import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      title: 'メール',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com'
    },
    {
      icon: Phone,
      title: '電話',
      value: '+81 90-1234-5678',
      href: 'tel:+819012345678'
    },
    {
      icon: MapPin,
      title: '所在地',
      value: '東京都',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: '#',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: Twitter,
      name: 'X (Twitter)',
      href: '#',
      color: 'hover:bg-black hover:text-white'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: '#',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      href: '#',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: '#',
      color: 'hover:bg-blue-700 hover:text-white'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            お問い合わせ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            プロジェクトのご相談やお見積もりについて、
            お気軽にお問い合わせください。
            24時間以内にご返信いたします。
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                メッセージを送信
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      お名前 *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="石川"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      姓 *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                      placeholder="陽"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                    placeholder="株式会社サンプル"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
                    プロジェクトの種類
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">選択してください</option>
                    <option value="web-app">Webアプリケーション開発</option>
                    <option value="excel-macro">Excelマクロ開発</option>
                    <option value="portfolio">ポートフォリオ作成</option>
                    <option value="cli-program">CLIプログラム</option>
                    <option value="aws-infra">AWSインフラ構築・移行</option>
                    <option value="chrome-extension">Chrome拡張機能開発</option>
                    <option value="other">その他</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    予算
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200"
                  >
                    <option value="">選択してください</option>
                    <option value="under-100k">10万円未満</option>
                    <option value="100k-300k">10万円〜30万円</option>
                    <option value="300k-500k">30万円〜50万円</option>
                    <option value="500k-1m">50万円〜100万円</option>
                    <option value="over-1m">100万円以上</option>
                    <option value="discuss">要相談</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    プロジェクトの詳細 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="プロジェクトの詳細、ご要望、ご質問などお聞かせください..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center"
                >
                  <Send size={20} className="mr-2" />
                  メッセージを送信
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                連絡先情報
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <info.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{info.title}</h4>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                ソーシャルメディア
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 transition-all duration-200 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                対応可能時間
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>平日</span>
                  <span>9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>土曜日</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>日曜・祝日</span>
                  <span>休み</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-700">
                  <strong>緊急のご相談</strong>は、上記時間外でも対応可能です。
                  お気軽にお問い合わせください。
                </p>
              </div>
            </motion.div>

            {/* FAQ Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="card p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                よくある質問
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Q: 開発期間はどのくらいですか？
                  </h4>
                  <p className="text-gray-600 text-sm">
                    A: 最短1-2日で開発可能です。プロジェクトの規模により調整いたします。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    Q: セキュリティは大丈夫ですか？
                  </h4>
                  <p className="text-gray-600 text-sm">
                    A: サイバーセキュリティの専門知識を活かし、安全で信頼性の高いシステムを構築します。
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 