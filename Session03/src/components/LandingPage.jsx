import React from 'react'
import LandingPageHeader from './LandingPageHeader'
import LandingPageHero from './LandingPageHero'
import './LandingPage.css';



export default function LandingPage() {
  return (
    <main className="landing-page-wrapper">
      <LandingPageHeader />
      <LandingPageHero />
    </main>
  )
}
