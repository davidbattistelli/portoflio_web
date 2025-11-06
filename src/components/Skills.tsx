const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'MATLAB', 'C++', 'JavaScript', 'SQL'],
    },
    {
      title: 'Engineering Software',
      skills: ['MAXFEA', 'CAD', 'SolidWorks', 'ANSYS', 'COMSOL'],
    },
    {
      title: 'Data Analysis & Simulation',
      skills: ['Numerical Analysis', 'FEM Simulation', 'Data Visualization', 'Statistical Analysis', 'Computational Physics'],
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Jupyter'],
    },
    {
      title: 'Other',
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

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all"
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
