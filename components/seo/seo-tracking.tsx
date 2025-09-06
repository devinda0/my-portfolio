'use client'

import { trackEvent } from './google-analytics'

export function useSEOTracking() {
  const trackProjectView = (projectName: string) => {
    trackEvent('view_project', 'engagement', projectName)
  }

  const trackDownloadResume = () => {
    trackEvent('download_resume', 'engagement', 'PDF Resume')
  }

  const trackContactSubmit = () => {
    trackEvent('contact_submit', 'conversion', 'Contact Form')
  }

  const trackSocialClick = (platform: string) => {
    trackEvent('social_click', 'engagement', platform)
  }

  const trackSkillsView = () => {
    trackEvent('view_skills', 'engagement', 'Skills Section')
  }

  const trackExperienceView = () => {
    trackEvent('view_experience', 'engagement', 'Experience Section')
  }

  return {
    trackProjectView,
    trackDownloadResume,
    trackContactSubmit,
    trackSocialClick,
    trackSkillsView,
    trackExperienceView,
  }
}
