import Navbar from "@/components/navbar"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Skills from "@/components/sections/skills"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Learning from "@/components/sections/learning"
import GithubStats from "@/components/sections/github-stats"
import Testimonials from "@/components/sections/testimonials"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <div className="min-h-screen w-full">
        <Navbar />
        <main className="w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Learning />
          <GithubStats />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
