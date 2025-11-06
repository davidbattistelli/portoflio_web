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
    description: 'Analysis and optimization of stabilizer plate positioning to reduce Growth Rate and electromagnetic forces during plasma disruptions.',
    technologies: ['MATLAB', 'MAXFEA', 'FEM', 'Numerical Analysis'],
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
  },
  {
    title: 'Swiss Plasma Center Research',
    category: 'Fusion Engineering',
    description: 'Framework for simulation code integration and analysis of tokamak reactors such as TCV. Study of operational parameters and configuration optimization.',
    technologies: ['Python', 'Computational Physics', 'Data Analysis'],
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800',
  },
  {
    title: 'Flat-Rate Tax Management App',
    category: 'Software Development',
    description: 'Application to simplify tax management for flat-rate VAT regime holders. Focus on UX and automation of tax calculations.',
    technologies: ['Python', 'MVP', 'UX Design'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
  },
  {
    title: 'Villa Nadia - Property Management',
    category: 'Business Management',
    description: 'Complete management of short-term rental property. Operational optimization, customer experience, and revenue management.',
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
