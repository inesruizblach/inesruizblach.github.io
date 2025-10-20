import React from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12">
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
      <footer className="text-center text-gray-500 py-6">
        © {new Date().getFullYear()} Inés Ruiz — Built with ♥
      </footer>
    </div>
  );
}

export default App;
