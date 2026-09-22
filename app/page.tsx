import { Contact } from "@/components/portfolio/contact";
import { Experience } from "@/components/portfolio/experience";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Profile } from "@/components/portfolio/profile";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Profile />
      <Contact />
    </main>
  );
}
