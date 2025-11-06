const About = () => {
  const timeline = [
    {
      year: '2024 - Presente',
      type: 'Experience',
      institution: 'Swiss Plasma Center (EPFL)',
      role: 'Tirocinio di Ricerca - Fusione Nucleare',
      description: 'Lavoro su progetti di ricerca avanzata nel campo della fusione nucleare, sviluppando framework per l\'integrazione di codici di simulazione e l\'analisi di reattori tokamak come TCV (Tokamak à Configuration Variable).',
    },
    {
      year: '2023 - Presente',
      type: 'Education',
      institution: 'Università della Tuscia',
      role: 'Laurea Magistrale in Mechanical Engineering',
      description: 'Approfondimento delle competenze in ingegneria meccanica con focus su simulazioni avanzate, analisi computazionale e ottimizzazione dei processi.',
    },
    {
      year: '2023',
      type: 'Experience',
      institution: 'MG Sustainable Engineering AB - Uppsala, Svezia',
      role: 'Erasmus Traineeship',
      description: 'Creazione di un software per l\'analisi termica all\'interno dei Pannelli PVT (Photovoltaic Thermal). Sviluppo di algoritmi di simulazione e redazione di un report tecnico dettagliato sui risultati dell\'analisi.',
    },
    {
      year: '2020 - 2023',
      type: 'Education',
      institution: 'Università della Tuscia',
      role: 'Laurea Triennale in Ingegneria Industriale',
      description: 'Progetto TRUST (Tuscia Research University Small Tokamak): analisi e ottimizzazione della posizione delle piastre stabilizzatrici utilizzando MATLAB e MAXFEA per ridurre il Growth Rate durante le disruption del plasma.',
    },
  ]

  const languages = [
    { name: 'Italiano', level: 'Madrelingua' },
    { name: 'Inglese', level: 'Avanzato' },
    { name: 'Spagnolo', level: 'Esperto' },
    { name: 'Francese', level: 'Base' },
  ]

  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12">
            About
          </h2>

          {/* Main Grid: My Background + Languages + Personal Info + Other Activities (left) | Timeline (right) */}
          <div className="grid lg:grid-cols-[1fr,1.5fr] gap-12">
            {/* Left Column: All info sections stacked */}
            <div className="space-y-8">
              {/* My Background */}
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-5">
                  My Background
                </h3>
                <div className="p-7 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                  <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                    <p>
                      Sono uno studente di <strong className="text-gray-900 dark:text-gray-100">Mechanical Engineering</strong> con
                      una forte passione per l'analisi tecnica, l'ottimizzazione dei processi e lo sviluppo software.
                    </p>
                    <p>
                      Attualmente sto completando la <strong className="text-gray-900 dark:text-gray-100">laurea magistrale</strong> e
                      sto svolgendo un tirocinio presso lo <strong className="text-gray-900 dark:text-gray-100">Swiss Plasma Center (EPFL)</strong>,
                      dove lavoro su progetti di ricerca avanzata nel campo della fusione nucleare.
                    </p>
                    <p>
                      Sono particolarmente interessato al mondo dell'<strong className="text-gray-900 dark:text-gray-100">imprenditoria e delle start-up</strong>,
                      dove vedo l'opportunità di combinare competenze tecniche e analisi dei processi per creare soluzioni innovative.
                    </p>
                  </div>
                </div>
              </div>

              {/* Languages - Compact */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Languages
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((lang, index) => (
                    <div
                      key={index}
                      className="p-3.5 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
                    >
                      <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{lang.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{lang.level}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Information - Compact */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Personal Information
                </h3>
                <div className="p-5 bg-gray-50 dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700">
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                    <p>
                      <strong className="text-gray-900 dark:text-gray-100">Nazionalità:</strong> Italiana
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-gray-100">Interessi:</strong> Tecnologie,
                      Geopolitica, Project Development, Vela
                    </p>
                  </div>
                </div>
              </div>

              {/* Other Activities - Compact */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Other Activities
                </h3>
                <div className="p-5 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-slate-800 dark:to-slate-800/50 rounded-lg border border-primary-200 dark:border-slate-700">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 mb-1">Villa Nadia - Property Management</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Gestione di struttura per affitti brevi con focus su organizzazione operativa e customer experience management.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Timeline */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
                Education & Experience
              </h3>
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 via-primary-500 to-primary-400 dark:from-primary-400 dark:via-primary-500 dark:to-primary-600"></div>

                {/* Timeline Items */}
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative pl-12">
                      {/* Timeline Dot */}
                      <div className="absolute left-0 top-5 w-8 h-8 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-slate-900 shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>

                      {/* Timeline Box */}
                      <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 dark:from-slate-800 dark:to-slate-800/50 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl transition-all hover:scale-[1.01] transform">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-block px-2.5 py-0.5 text-xs font-bold text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/50 rounded-full border border-primary-200 dark:border-primary-800">
                            {item.year}
                          </span>
                          <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${
                            item.type === 'Experience'
                              ? 'bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800'
                              : 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                          }`}>
                            {item.type}
                          </span>
                        </div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
                          {item.institution}
                        </h4>
                        <p className="text-base font-semibold text-primary-600 dark:text-primary-400 mb-2">
                          {item.role}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
