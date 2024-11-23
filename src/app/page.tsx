import CtaSimple from '@/components/CtaSimple'
import FeatureSection from '@/components/FeatureSection'
import { Footer } from '@/components/Footer'
import FrustratedHero from '@/components/FrustratedHero'
import { Header } from '@/components/Header'
import HeaderOfferings from '@/components/HeaderOfferings'
import { Hero } from '@/components/Hero'
import HeroAboutMe from '@/components/HeroAboutMe'
import Incentives from '@/components/Incentives'
import Offerings from '@/components/Offerings'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FrustratedHero />
        <FeatureSection />
        <HeroAboutMe />
        <HeaderOfferings />
        <Offerings />
        <Incentives />
        <CtaSimple />
      </main>
      <Footer />
    </>
  )
}
