import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-emerald-950/90 backdrop-blur-md border-b border-emerald-900 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Yassen Reda</h1>
          <div className="hidden md:flex gap-8 text-gray-300 font-medium">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-emerald-950 via-black to-gray-900 flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Hi, I'm <span className="text-emerald-400">Yassen Reda Yassen</span>
            </h1>
            <p className="text-2xl text-gray-400">Biotechnology Graduate • Genetics</p>
            <p className="text-lg text-gray-300 max-w-lg">
              Passionate about Molecular Biology, Genetic Techniques,
              Laboratory Operations, and Quality Control in Biotechnology.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#projects"
                className="bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300">
                View My Projects
              </a>
              <a href="#contact"
                className="border border-gray-600 hover:border-white px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300">
                Contact Me
              </a>
          <a
  href="/cv.pdf"
  download
  className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl text-white"
>
  Download CV
</a>
            </div>
          </div>

          {/* Profile Picture */}
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-1 shadow-2xl">
              <div className="w-full h-full bg-gray-950 rounded-full overflow-hidden border-4 border-gray-800">
                <img
                  src="/profile.jpg"
                  alt="Yassen Reda Yassen"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Biotechnology graduate specialized in Genetics with strong hands-on experience
            in molecular biology techniques including PCR, DNA extraction, and gel electrophoresis.
            Experienced in laboratory management, student training, and quality control procedures.
            Seeking a role in Quality Control or R&D in the pharmaceutical or biotechnology industry.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">My Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Molecular Biology",
                items: ["PCR Techniques", "DNA Extraction", "Gel Electrophoresis", "Genetic Transformation", "DNA Analysis"]
              },
              {
                title: "Laboratory Skills",
                items: ["ELISA", "Spectrophotometer", "Microscopy", "Hematology", "Clinical Chemistry", "Lab Operations"]
              },
              {
                title: "Professional Skills",
                items: ["Quality Control", "Student Training", "Lab Management", "ISO 22000", "Data Entry & Documentation", "Biosafety Protocols"]
              }
            ].map((skill, i) => (
              <div key={i} className="bg-gray-950 p-8 rounded-3xl border border-gray-800 hover:border-emerald-500 transition-all">
                <h3 className="text-2xl font-semibold text-emerald-400 mb-6">{skill.title}</h3>
                <ul className="space-y-4 text-gray-300">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-emerald-400">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Experience</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-3xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white">Laboratory Instructor & Trainer</h3>
                <p className="text-emerald-400 mt-2">Plasma Company • Mar 2023 - Jan 2025</p>
                <p className="text-gray-400 mt-4">
                  Trained over 1,000 students in medical laboratory techniques.
                  Supervised practical sessions in Hematology, Clinical Chemistry, and Molecular Biology.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-3xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white">Molecular Biology Assistant</h3>
                <p className="text-emerald-400">Feb 2024 – Nov 2024</p>
                <p className="text-gray-400 mt-4">
                  DNA extraction, PCR, Gel Electrophoresis, and laboratory workflow management.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 p-8 rounded-3xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white">Laboratory Assistant / Lab Manager</h3>
                <p className="text-emerald-400">Oct 2023 - Jan 2025</p>
                <p className="text-gray-400 mt-4">
                  Managed daily lab operations, sample processing, equipment maintenance, and staff training.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-3xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white">Education</h3>
                <p className="text-emerald-400 mt-2">B.Sc. Biotechnology (Genetics)</p>
                <p className="text-gray-400">Faculty of Agriculture, Banha University • 2020 - 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 bg-gray-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Featured Projects</h2>
          <div className="bg-gradient-to-br from-gray-950 to-gray-900 rounded-3xl p-12 border border-gray-700">
            <h3 className="text-3xl font-bold text-white mb-4">DNA Extraction & Analysis</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Performed complete DNA extraction from blood samples, followed by PCR amplification
              and Gel Electrophoresis analysis.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {["DNA Extraction", "PCR", "Gel Electrophoresis", "Molecular Biology", "Lab Techniques"].map(tag => (
                <span key={tag} className="bg-gray-800 px-6 py-2 rounded-full text-sm text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-gray-400 mb-12 text-lg">Open to opportunities in Quality Control and Biotechnology laboratories.</p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:yassenreda144@gmail.com"
              className="bg-emerald-600 hover:bg-emerald-700 px-10 py-4 rounded-2xl text-white font-medium transition flex items-center gap-3">
              ✉️ yassenreda144@gmail.com
            </a>
            <a href="tel:+201111079929"
              className="bg-gray-800 hover:bg-gray-700 px-10 py-4 rounded-2xl text-white font-medium transition">
              📞 01111079929
            </a>
            <a href="http://www.linkedin.com/in/yassen-reda" target="_blank"
              className="bg-gray-900 hover:bg-gray-800 px-10 py-4 rounded-2xl text-white font-medium transition">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-gray-500 text-sm">
        © 2026 Yassen Reda Yassen Abdelazeem • Built with React + Tailwind CSS
      </footer>
    </>
  )
}

export default App