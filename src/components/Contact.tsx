import { FaEnvelope, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-slate-950"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl">
            I'm open to new professional opportunities, collaborations, and projects in mechanical engineering,
            scientific research, and software development. Feel free to reach out!
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all">
              <FaEnvelope className="text-3xl text-primary-600 dark:text-primary-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Email</p>
                <a
                  href="mailto:david.battistelli@hotmail.it"
                  className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  david.battistelli@hotmail.it
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all">
              <FaLinkedin className="text-3xl text-primary-600 dark:text-primary-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/davidbattistelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  David Battistelli
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all">
              <FaInstagram className="text-3xl text-primary-600 dark:text-primary-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Instagram</p>
                <a
                  href="https://www.instagram.com/davidbattistelli/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium text-gray-900 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  @davidbattistelli
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
