const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100">
              David
              <br />
              Battistelli
              <br />
              <span className="text-primary-600 dark:text-primary-400">
                Mechanical Engineering Student
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Mechanical Engineering student at the University of Tuscia,
              currently interning at the <strong>Swiss Plasma Center (EPFL)</strong>,
              working on advanced research projects in the field of nuclear fusion.
              Passionate about technological innovation, software development, and process optimization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-3 bg-primary-600 dark:bg-primary-700 text-white rounded-lg font-medium hover:bg-primary-700 dark:hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="px-8 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-700"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-blue-100 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center">
                  <div className="text-8xl sm:text-9xl">👨‍💻</div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-8 -right-8 w-64 h-64 bg-primary-200 dark:bg-primary-900 rounded-2xl opacity-50 blur-2xl"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-2xl opacity-50 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
