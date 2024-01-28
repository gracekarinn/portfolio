import Pemisah from "@/components/pemisah";
import Intro from "../components/intro";
import Navbar from "../components/navbar";
import About from "@/components/about";
import SwipeCarousel from "@/components/swipecaraousel";
import Isi from "@/components/isi";
import Footer from "@/components/footer";
import Project from "@/components/project/project";
import Skill from "@/components/skill/skill";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-stone-700">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Intro />
        <Pemisah />
        <About />
        <SwipeCarousel />
        <Isi />
        <Pemisah />
        <Skill />
        <Project />
        <Footer />
      </div>
    </main>
  )
}
