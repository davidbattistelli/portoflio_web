const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
      <div className="container-custom">
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {currentYear} David Battistelli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
