import { useState, useEffect, useCallback } from 'react'
import { debounce } from '@/lib/navigation-utils'

export const useNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'contact']

  const handleScroll = useCallback(
    debounce(() => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      
      // Hide/show navbar based on scroll direction
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)

      // Update active section
      const scrollPosition = currentScrollY + 100
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }, 10),
    [lastScrollY, sections]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return {
    isScrolled,
    activeSection,
    isVisible,
    sections
  }
}
