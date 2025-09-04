// Navigation utilities and smooth scroll helpers
export const scrollToSection = (sectionId: string, offset: number = 80) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const offsetTop = element.offsetTop - offset
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

export const getActiveSection = (sections: string[]) => {
  const scrollPosition = window.scrollY + 100
  
  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const offsetTop = element.offsetTop
      const offsetHeight = element.offsetHeight
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        return section
      }
    }
  }
  return sections[0] // Default to first section
}

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
