import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";

export default function Home() {
  return (
    <>
      <SeoHead title="LaslesVPN Landing Page" />
      <Layout>
        <Hero />
        <Skills />
        <Projects />
      </Layout>
    </>
  );
}
