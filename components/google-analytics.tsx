'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: object) => void
    dataLayer: any[]
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!GA_ID || process.env.NODE_ENV !== 'production') return

    // Load gtag script
    const script1 = document.createElement('script')
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    script1.async = true
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_ID}', {
        page_title: document.title,
        page_location: window.location.href,
      });
    `
    document.head.appendChild(script2)

    return () => {
      document.head.removeChild(script1)
      document.head.removeChild(script2)
    }
  }, [])

  useEffect(() => {
    if (!GA_ID || process.env.NODE_ENV !== 'production') return

    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_ID, {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
      })
    }
  }, [pathname])

  return null
}

// Helper functions for tracking events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (!GA_ID || process.env.NODE_ENV !== 'production') return

  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export const trackPageView = (url: string) => {
  if (!GA_ID || process.env.NODE_ENV !== 'production') return

  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', GA_ID, {
      page_path: url,
    })
  }
}
