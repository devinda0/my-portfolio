export function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="font-serif text-xl font-bold mb-4">Devinda Dilshan</div>
          <p className="text-muted-foreground mb-6">Computer Science & Engineering Student at University of Moratuwa</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="mailto:devindadilshan0@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/devinda-dilshan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/devinda0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Devinda Dilshan. Built with Next.js and Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  )
}
