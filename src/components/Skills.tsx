const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Analysis',
      skills: ['Python', 'MATLAB', 'Numerical Analysis', 'Data Visualization', 'Computational Physics'],
    },
    {
      title: 'Engineering Software',
      skills: ['MAXFEA', 'CAD', 'SolidWorks', 'ANSYS', 'FEM Simulation'],
    },
    {
      title: 'Tools & Environment',
      skills: ['Git', 'Linux', 'VS Code', 'Jupyter', 'Statistical Analysis'],
    },
    {
      title: 'Professional Skills',
      skills: ['Project Management', 'Technical Writing', 'Problem Solving', 'Team Collaboration'],
    },
  ]

  return (
    <section
      id="skills"
      className="section-padding bg-gray-50 dark:bg-slate-950"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            A comprehensive overview of my technical competencies and tools
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-50 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
