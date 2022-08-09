import About from '../components/About'
import Contact from '../components/Contact'
import Gallery from '../components/gallery/Gallery'
import HeroBanner from '../components/HeroBanner'
import Footer from '../components/layout/nav/Footer'

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
