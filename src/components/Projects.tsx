interface Project {
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  link?: string
}

const projects: Project[] = [
  {
    title: 'TRUST Tokamak - Stabilizer Plates Optimization',
    category: 'Nuclear Fusion Research',
    description: 'Analisi e ottimizzazione della posizione delle piastre stabilizzatrici per ridurre il Growth Rate e le forze elettromagnetiche durante le disruption del plasma.',
    technologies: ['MATLAB', 'MAXFEA', 'FEM', 'Numerical Analysis'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
  },
  {
    title: 'Swiss Plasma Center Research',
    category: 'Fusion Engineering',
    description: 'Framework per l\'integrazione di codici di simulazione e analisi di reattori tokamak come TCV. Studio dei parametri operativi e ottimizzazione delle configurazioni.',
    technologies: ['Python', 'Computational Physics', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
  },
  {
    title: 'App Gestione Tasse Forfettari',
    category: 'Software Development',
    description: 'Applicazione per semplificare la gestione fiscale dei titolari di Partita IVA in regime forfettario. Focus su UX e automazione dei calcoli fiscali.',
    technologies: ['Python', 'MVP', 'UX Design'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
  },
  {
    title: 'Villa Nadia - Property Management',
    category: 'Business Management',
    description: 'Gestione completa di struttura per affitti brevi. Ottimizzazione operativa, customer experience e revenue management.',
    technologies: ['Operations', 'Booking.com', 'Customer Experience'],
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800',
  },
]

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-padding bg-white dark:bg-slate-900"
    >
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            A showcase of my academic and personal projects
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:shadow-lg"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      className="text-primary-600 dark:text-primary-400 hover:underline text-sm font-medium"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
