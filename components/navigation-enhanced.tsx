"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Menu, X, Home, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { gsap } from "gsap"

export function EnhancedNavigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { theme, setTheme } = useTheme()
  
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      
      // Hide/show navbar based on scroll direction
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100)
      setLastScrollY(currentScrollY)

      const sections = ["hero", "about", "experience", "projects", "skills", "contact"]
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
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  // GSAP animations on mount
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
    }
    
    if (logoRef.current) {
      gsap.fromTo(logoRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 1, delay: 0.2, ease: "back.out(1.7)" }
      )
    }

    if (navItemsRef.current) {
      const items = navItemsRef.current.children
      gsap.fromTo(items,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, delay: 0.5, ease: "power2.out" }
      )
    }
  }, [])

  // Mobile menu animations
  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          { height: 0, opacity: 0, y: -20 },
          { height: "auto", opacity: 1, y: 0, duration: 0.4, ease: "power2.out" }
        )
        
        const menuItems = mobileMenuRef.current.querySelectorAll('button')
        gsap.fromTo(menuItems,
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.3, stagger: 0.05, delay: 0.1, ease: "power2.out" }
        )
      } else {
        gsap.to(mobileMenuRef.current,
          { height: 0, opacity: 0, y: -20, duration: 0.3, ease: "power2.in" }
        )
      }
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { href: "#hero", label: "Home", id: "hero", icon: Home },
    { href: "#about", label: "About", id: "about" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#skills", label: "Skills", id: "skills" },
    { href: "#contact", label: "Contact", id: "contact" },
  ]

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      
      // Smooth scroll animation with GSAP
      gsap.to(window, {
        scrollTo: { y: offsetTop, autoKill: false },
        duration: 1.2,
        ease: "power2.inOut"
      })
    }
    setIsMobileMenuOpen(false)
  }

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Devinda_Resume.pdf'
    link.download = 'Devinda_Dilshan_Resume.pdf'
    link.click()
  }

  const handleLogoHover = () => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }

  const handleLogoLeave = () => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl shadow-primary/5" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="font-serif font-bold text-xl">
            <button
              ref={logoRef}
              onClick={() => handleNavClick("#hero")}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
              <span className="relative text-gradient bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent hover:from-purple-500 hover:via-primary hover:to-purple-500 transition-all duration-500">
                Devinda Dilshan
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div ref={navItemsRef} className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-500 hover:scale-105 overflow-hidden ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground shadow-lg shadow-primary/25"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  
                  <div className="relative flex items-center gap-2">
                    {IconComponent && <IconComponent className="h-4 w-4" />}
                    {item.label}
                  </div>
                  
                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  )}
                </button>
              )
            })}
            
            {/* Resume Download Button */}
            <Button
              onClick={handleDownloadResume}
              className="ml-2 bg-gradient-to-r from-purple-500 to-primary hover:from-purple-600 hover:to-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4 hover:scale-110 transition-all duration-300 hover:bg-primary/10 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              onClick={handleDownloadResume}
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-primary hover:from-purple-600 hover:to-primary/90 text-white shadow-lg"
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hover:scale-110 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:scale-110 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl mt-2 shadow-2xl shadow-primary/10"
            style={{ height: 0 }}
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`group relative w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground shadow-lg"
                        : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    
                    <div className="relative flex items-center gap-3">
                      {IconComponent && <IconComponent className="h-4 w-4" />}
                      {item.label}
                    </div>
                  </button>
                )
              })}
              
              {/* Mobile Resume Button */}
              <button
                onClick={handleDownloadResume}
                className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-purple-500 to-primary hover:from-purple-600 hover:to-primary/90 text-white rounded-xl font-medium transition-all duration-300 hover:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
