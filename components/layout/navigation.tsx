"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "../ui/button"
import { Moon, Sun, Menu, X, Home, Download } from "lucide-react"
import { useTheme } from "next-themes"
import { gsap } from "gsap"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const { theme, setTheme } = useTheme()
  
  const navRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLButtonElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 50)
      
      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollProgress(scrolled)
      
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

  // Simplified GSAP animations on mount
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, 
        { y: -50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )
    }
    
    if (logoRef.current) {
      // Simple, clean logo entrance
      gsap.fromTo(logoRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, delay: 0.2, ease: "power2.out" }
      )
    }

    if (navItemsRef.current) {
      const items = navItemsRef.current.children
      gsap.fromTo(items,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4, ease: "power2.out" }
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

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case '1':
            e.preventDefault()
            handleNavClick('#hero')
            break
          case '2':
            e.preventDefault()
            handleNavClick('#about')
            break
          case '3':
            e.preventDefault()
            handleNavClick('#experience')
            break
          case '4':
            e.preventDefault()
            handleNavClick('#projects')
            break
          case '5':
            e.preventDefault()
            handleNavClick('#skills')
            break
          case '6':
            e.preventDefault()
            handleNavClick('#contact')
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navItems = [
    { href: "#hero", label: "Home", id: "hero", icon: Home, shortcut: "⌘1" },
    { href: "#about", label: "About", id: "about", shortcut: "⌘2" },
    { href: "#experience", label: "Experience", id: "experience", shortcut: "⌘3" },
    { href: "#projects", label: "Projects", id: "projects", shortcut: "⌘4" },
    { href: "#skills", label: "Skills", id: "skills", shortcut: "⌘5" },
    { href: "#contact", label: "Contact", id: "contact", shortcut: "⌘6" },
  ]

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      
      // Smooth scroll with enhanced easing
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
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
      // Simple, smooth hover animation
      gsap.to(logoRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
      })
    }
  }

  const handleLogoLeave = () => {
    if (logoRef.current) {
      // Simple reset animation
      gsap.to(logoRef.current, {
        scale: 1,
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
        activeSection === "hero"
          ? "bg-black/20 dark:bg-black/30 backdrop-blur-xl border-b border-white/10 dark:border-white/20 shadow-lg shadow-black/10"
          : isScrolled 
            ? "bg-background/40 dark:bg-background/40 backdrop-blur-3xl border-b border-border/50 shadow-2xl shadow-primary/5" 
            : "bg-background/40 dark:bg-background/40 backdrop-blur-3xl border-b border-border/30"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 top-0 h-0.5 bg-gradient-to-r from-primary via-purple-500 to-primary transition-all duration-300 ease-out"
           style={{ width: `${scrollProgress}%` }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Premium Logo - Enhanced Visibility */}
          <div className="font-serif font-bold">
            <button
              ref={logoRef}
              onClick={() => handleNavClick("#hero")}
              onMouseEnter={handleLogoHover}
              onMouseLeave={handleLogoLeave}
              className="group relative overflow-hidden"
            >
              
              {/* Main Logo Container */}
              <div className={`relative flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 `}>
                {/* Enhanced Icon */}
                <div className="relative">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border ${
                    activeSection === "hero"
                      ? "bg-gradient-to-br from-white/20 to-purple-300/20 border-white/30 backdrop-blur-sm"
                      : "bg-gradient-to-br from-primary to-purple-600 border-primary/20"
                  } ${
                    activeSection === "hero" 
                      ? "group-hover:shadow-white/25" 
                      : "group-hover:shadow-primary/25"
                  }`}>
                    <span className={`text-sm font-bold drop-shadow-sm ${
                      activeSection === "hero" 
                        ? "text-white" 
                        : "text-white"
                    }`}>
                      D
                    </span>
                  </div>
                  {/* Enhanced hover indicator */}
                  <div className={`absolute -top-1 -right-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-sm ${
                    activeSection === "hero" 
                      ? "bg-white" 
                      : "bg-green-400"
                  }`}></div>
                </div>
                
                {/* Enhanced Text Logo - Desktop */}
                <div className="hidden sm:flex flex-col items-start">
                  <span className={`text-xl font-bold group-hover:text-primary transition-colors duration-300 tracking-tight drop-shadow-sm ${
                    activeSection === "hero" 
                      ? "text-white dark:text-white" 
                      : "text-foreground dark:text-white"
                  }`}>
                    Devinda Dilshan
                  </span>
                  
                  {/* Enhanced Subtitle */}
                  <span className={`text-xs font-medium group-hover:text-primary/70 transition-colors duration-300 tracking-wide ${
                    activeSection === "hero" 
                      ? "text-white/80 dark:text-white/80" 
                      : "text-gray-800 dark:text-gray-300"
                  }`}>
                    Tech Innovator
                  </span>
                </div>
                
                {/* Enhanced Text Logo - Mobile */}
                <div className="sm:hidden flex flex-col items-start">
                  <span className={`text-lg font-bold group-hover:text-primary transition-colors duration-300 drop-shadow-sm ${
                    activeSection === "hero" 
                      ? "text-white dark:text-white" 
                      : "text-foreground dark:text-white"
                  }`}>
                    Devinda
                  </span>
                  
                  <span className={`text-xs font-medium group-hover:text-primary/70 transition-colors duration-300 ${
                    activeSection === "hero" 
                      ? "text-white/80 dark:text-white/80" 
                      : "text-gray-800 dark:text-gray-300"
                  }`}>
                    Tech Innovator
                  </span>
                </div>
              </div>
              
              {/* Enhanced hover effect line */}
              <div className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ${
                activeSection === "hero"
                  ? "bg-gradient-to-r from-white to-purple-300"
                  : "bg-gradient-to-r from-primary to-purple-500"
              }`}></div>
            </button>
          </div>

          {/* Desktop Navigation - Enhanced Visibility */}
          <div ref={navItemsRef} className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              return (
                <div key={item.href} className="relative group/tooltip">
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-500 hover:scale-105 overflow-hidden ${
                      activeSection === item.id
                        ? activeSection === "hero"
                          ? "bg-white/20 dark:bg-white/15 text-white backdrop-blur-sm shadow-lg shadow-white/10 border border-white/20"
                          : "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground shadow-lg shadow-primary/25"
                        : activeSection === "hero"
                          ? "text-white/90 hover:text-white hover:bg-white/10 dark:hover:bg-white/5"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                    }`}
                    title={`${item.label} (${item.shortcut})`}
                    aria-label={`Navigate to ${item.label} section`}
                  >
                    {/* Enhanced shimmer effect */}
                    <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${
                      activeSection === "hero"
                        ? "bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        : "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    }`}></div>
                    
                    <div className="relative flex items-center gap-2">
                      {IconComponent && <IconComponent className="h-4 w-4" />}
                      <span>{item.label}</span>
                    </div>
                    
                    {/* Enhanced active indicator */}
                    {activeSection === item.id && (
                      <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full animate-pulse ${
                        activeSection === "hero" 
                          ? "bg-white" 
                          : "bg-white"
                      }`}></div>
                    )}
                  </button>
                  
                  {/* Enhanced Tooltip */}
                  <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 backdrop-blur-sm border rounded-lg px-3 py-1 text-sm font-medium opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg ${
                    activeSection === "hero"
                      ? "bg-black/80 border-white/20 text-white"
                      : "bg-background/95 border-border/50 text-foreground"
                  }`}>
                    {item.label} <span className={activeSection === "hero" ? "text-white/70" : "text-muted-foreground"}>({item.shortcut})</span>
                    <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 border-l border-t rotate-45 ${
                      activeSection === "hero"
                        ? "bg-black/80 border-white/20"
                        : "bg-background/95 border-border/50"
                    }`}></div>
                  </div>
                </div>
              )
            })}
            
            {/* Resume Download Button - Enhanced */}
            <div className="relative group/tooltip">
              <Button
                onClick={handleDownloadResume}
                className={`ml-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  activeSection === "hero"
                    ? "bg-white/20 dark:bg-white/15 hover:bg-white/30 dark:hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm"
                    : "bg-gradient-to-r from-purple-500 to-primary hover:from-purple-600 hover:to-primary/90 text-white"
                }`}
                aria-label="Download Resume PDF"
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
              
              {/* Enhanced Tooltip */}
              <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 backdrop-blur-sm border rounded-lg px-3 py-1 text-sm font-medium opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg ${
                activeSection === "hero"
                  ? "bg-black/80 border-white/20 text-white"
                  : "bg-background/95 border-border/50 text-foreground"
              }`}>
                Download Resume PDF
                <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 border-l border-t rotate-45 ${
                  activeSection === "hero"
                    ? "bg-black/80 border-white/20"
                    : "bg-background/95 border-border/50"
                }`}></div>
              </div>
            </div>
            
            {/* Theme Toggle - Enhanced */}
            <div className="relative group/tooltip">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className={`ml-4 hover:scale-110 transition-all duration-300 group relative overflow-hidden ${
                  activeSection === "hero"
                    ? "hover:bg-white/10 dark:hover:bg-white/5 text-white"
                    : "hover:bg-primary/10 text-foreground"
                }`}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg ${
                  activeSection === "hero"
                    ? "bg-gradient-to-r from-white/20 to-purple-300/20"
                    : "bg-gradient-to-r from-yellow-400/20 to-purple-400/20"
                }`}></div>
                <Sun className={`h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 ${
                  activeSection === "hero" ? "text-white" : ""
                }`} />
                <Moon className={`absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 ${
                  activeSection === "hero" ? "text-white" : ""
                }`} />
              </Button>
              
              {/* Enhanced Tooltip */}
              <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 backdrop-blur-sm border rounded-lg px-3 py-1 text-sm font-medium opacity-0 group-hover/tooltip:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-lg ${
                activeSection === "hero"
                  ? "bg-black/80 border-white/20 text-white"
                  : "bg-background/95 border-border/50 text-foreground"
              }`}>
                {theme === "dark" ? "Light" : "Dark"} Mode
                <div className={`absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 border-l border-t rotate-45 ${
                  activeSection === "hero"
                    ? "bg-black/80 border-white/20"
                    : "bg-background/95 border-border/50"
                }`}></div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation - Enhanced */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`hover:scale-110 transition-all duration-300 group relative overflow-hidden ${
                activeSection === "hero"
                  ? "hover:bg-white/10 dark:hover:bg-white/5 text-white"
                  : "hover:bg-primary/10 text-foreground"
              }`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg ${
                activeSection === "hero"
                  ? "bg-gradient-to-r from-white/20 to-purple-300/20"
                  : "bg-gradient-to-r from-yellow-400/20 to-purple-400/20"
              }`}></div>
              <Sun className={`h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 ${
                activeSection === "hero" ? "text-white" : ""
              }`} />
              <Moon className={`absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 ${
                activeSection === "hero" ? "text-white" : ""
              }`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`hover:scale-110 transition-all duration-300 group relative overflow-hidden ${
                activeSection === "hero"
                  ? "hover:bg-white/10 dark:hover:bg-white/5 text-white"
                  : "hover:bg-primary/10 text-foreground"
              }`}
            >
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg ${
                activeSection === "hero"
                  ? "bg-gradient-to-r from-white/20 to-purple-300/20"
                  : "bg-gradient-to-r from-primary/20 to-purple-500/20"
              }`}></div>
              <div className="relative">
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu - Enhanced */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className={`lg:hidden overflow-hidden backdrop-blur-xl border rounded-2xl mt-2 shadow-2xl ${
              activeSection === "hero"
                ? "bg-black/80 dark:bg-black/85 border-white/20 shadow-black/20"
                : "bg-background/95 border-border/50 shadow-primary/10"
            }`}
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
                        ? activeSection === "hero"
                          ? "bg-white/20 dark:bg-white/15 text-white shadow-lg backdrop-blur-sm"
                          : "bg-gradient-to-r from-primary to-purple-500 text-primary-foreground shadow-lg"
                        : activeSection === "hero"
                          ? "text-white/90 hover:text-white hover:bg-white/10 dark:hover:bg-white/5"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/10"
                    }`}
                  >
                    {/* Enhanced shimmer effect */}
                    <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ${
                      activeSection === "hero"
                        ? "bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        : "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    }`}></div>
                    
                    <div className="relative flex items-center gap-3">
                      {IconComponent && <IconComponent className="h-4 w-4" />}
                      {item.label}
                    </div>
                  </button>
                )
              })}
              
              {/* Mobile Resume Button - Enhanced */}
              <button
                onClick={handleDownloadResume}
                className={`w-full mt-4 px-4 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                  activeSection === "hero"
                    ? "bg-white/20 dark:bg-white/15 hover:bg-white/30 dark:hover:bg-white/25 text-white border border-white/30 backdrop-blur-sm"
                    : "bg-gradient-to-r from-purple-500 to-primary hover:from-purple-600 hover:to-primary/90 text-white"
                }`}
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
