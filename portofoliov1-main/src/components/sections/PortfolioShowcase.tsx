'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronDown, ChevronUp, Database, Calendar, MapPin, GraduationCap } from 'lucide-react'
import usePortfolio from '@/hooks/usePortfolio'
import PortfolioCard from './PortfolioCard'

const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
]

export default function PortfolioShowcase() {
  const {
    projects,
    certificates,
    techStacks,
    loading,
  } = usePortfolio()

  const [activeTab, setActiveTab] = useState('projects')
  const [previewOpen, setPreviewOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [showAllProjects, setShowAllProjects] = useState(false)

  const displayedProjects = showAllProjects
    ? projects
    : projects.slice(0, 3)

  return (
    <>
      {/* IMAGE PREVIEW MODAL */}
      <AnimatePresence>
        {previewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center px-6"
          >
            <button
              onClick={() => setPreviewOpen(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
            >
              <X size={18} />
            </button>

            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.35 }}
              src={previewImage}
              className="max-w-[88vw] max-h-[88vh] rounded-3xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- STANDALONE WORK EXPERIENCE TIMELINE --- */}
      <section
        id="experience"
        className="w-full max-w-[1200px] mx-auto px-8 md:px-12 lg:px-20 pt-24 pb-12 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-2 flex items-center">
            Work Experience<span className="text-white/30">.</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative border-l-[3px] border-white/10 pl-6 md:pl-10 ml-4 md:ml-6 space-y-16">
          
          {/* Experience Item 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative group"
          >
            {/* Glowing Dot */}
            <div className="absolute -left-[32px] md:-left-[48px] top-2 w-4 h-4 bg-gray-400 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)] border-[3px] border-[#121212] group-hover:scale-125 transition-transform duration-300"></div>

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 shadow-lg backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">Trainee</h3>
                  <p className="text-gray-400 font-medium text-lg mt-1">Nvisagecomp solutions LLP</p>
                </div>
                <div className="flex flex-col items-start md:items-end text-sm text-gray-500 gap-1.5">
                  <span className="flex items-center gap-1.5"><Calendar size={15} className="text-gray-600"/> Nov 2025 - Apr 2026</span>
                  <span className="flex items-center gap-1.5"><MapPin size={15} className="text-gray-600"/> Bengaluru, Karnataka, India • On-site • Internship</span>
                </div>
              </div>

              <ul className="space-y-3 text-gray-400 text-[15px] leading-relaxed mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-0.5">›</span>
                  <span>Shipped full-stack features for an enterprise client, utilizing AJAX to asynchronously connect a React frontend with a Java/Spring Boot backend.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-0.5">›</span>
                  <span>Formulated and deployed endpoints managing core business logic, including database-backed CRUD operations and structured error handling.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-0.5">›</span>
                  <span>Ensured enterprise-grade code quality by identifying and rectifying server-side bugs and vulnerabilities flagged by SonarQube.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2.5">
                {['React', 'Java', 'Spring Boot', 'AJAX', 'SonarQube'].map((tech) => (
                  <span key={tech} className="px-3.5 py-1 text-xs font-semibold bg-white/5 text-gray-300 rounded-full border border-white/10 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Item 2 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative group"
          >
            {/* Glowing Dot */}
            <div className="absolute -left-[32px] md:-left-[48px] top-2 w-4 h-4 bg-gray-400 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)] border-[3px] border-[#121212] group-hover:scale-125 transition-transform duration-300"></div>

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 shadow-lg backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">Full Stack Web Developer Intern</h3>
                  <p className="text-gray-400 font-medium text-lg mt-1">YHills</p>
                </div>
                <div className="flex flex-col items-start md:items-end text-sm text-gray-500 gap-1.5">
                  <span className="flex items-center gap-1.5"><Calendar size={15} className="text-gray-600"/> Jul 2025 - Oct 2025</span>
                  <span className="flex items-center gap-1.5"><MapPin size={15} className="text-gray-600"/> Noida, Uttarpradesh, India • Hybrid • Internship</span>
                </div>
              </div>

              <ul className="space-y-3 text-gray-400 text-[15px] leading-relaxed mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-0.5">›</span>
                  <span>Programmed scalable modules, integrating Web Services by constructing Java backends and consuming data asynchronously from a React frontend using AJAX.</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2.5">
                {['React', 'Java', 'AJAX', 'Web Services'].map((tech) => (
                  <span key={tech} className="px-3.5 py-1 text-xs font-semibold bg-white/5 text-gray-300 rounded-full border border-white/10 shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Experience Item 3 (SaiKet) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="relative group"
          >
            {/* Glowing Dot */}
            <div className="absolute -left-[32px] md:-left-[48px] top-2 w-4 h-4 bg-gray-400 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.1)] border-[3px] border-[#121212] group-hover:scale-125 transition-transform duration-300"></div>

            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 md:p-8 hover:border-white/20 transition-all duration-300 shadow-lg backdrop-blur-sm">
              <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">Software Developer Intern</h3>
                  <p className="text-gray-400 font-medium text-lg mt-1">SaiKet Systems</p>
                </div>
                <div className="flex flex-col items-start md:items-end text-sm text-gray-500 gap-1.5">
                  <span className="flex items-center gap-1.5"><Calendar size={15} className="text-gray-600"/> Jul 2025 - Aug 2025</span>
                  <span className="flex items-center gap-1.5"><MapPin size={15} className="text-gray-600"/> Pune, Maharashtra, India • Remote • Internship</span>
                </div>
              </div>

              <ul className="space-y-3 text-gray-400 text-[15px] leading-relaxed mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-0.5">›</span>
                  <span>Developing and maintaining full-stack web applications and software solutions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-500 mt-0.5">›</span>
                  <span>Completing technical tasks and collaborating on system architecture.</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- PORTFOLIO SHOWCASE SECTION --- */}
      <section
        id="portfolio"
        className="w-full max-w-[1450px] mx-auto px-8 md:px-12 lg:px-20 pt-12 pb-24 text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Portfolio Showcase
          </h1>
          <p className="text-white/55 max-w-xl mx-auto text-sm md:text-base">
            Explore my journey through projects, certifications, and academic background.
          </p>
        </motion.div>

        {/* TABS */}
        <div className="flex justify-center mb-10">
          <div className="w-full max-w-4xl rounded-full border border-white/10 bg-white/5 p-2 flex gap-2 backdrop-blur-xl flex-wrap sm:flex-nowrap">
            {[
              'projects',
              'certificates',
              'techstack',
              'education',
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab)
                  if (tab !== 'projects') setShowAllProjects(false)
                }}
                className={`flex-1 rounded-full py-3 px-4 text-sm font-medium transition-all duration-300 min-w-[100px] ${
                  activeTab === tab
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {tab === 'projects'
                  ? 'Projects'
                  : tab === 'certificates'
                  ? 'Certificates'
                  : tab === 'techstack'
                  ? 'Tech Stack'
                  : 'Education'}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45 }}
          >
            {/* PROJECTS TAB */}
            {activeTab === 'projects' && (
              <div className="space-y-8 min-h-[300px]">
                {!loading && projects.length === 0 && (
                   <div className="flex flex-col items-center justify-center h-full text-white/40 pt-10">
                     <Database size={40} className="mb-4 opacity-50" />
                     <p>No projects uploaded yet.</p>
                     <p className="text-sm mt-1">Log into the admin dashboard to add your first project!</p>
                   </div>
                )}
                <motion.div layout transition={{ layout: { duration: 0.75, ease: smoothEase } }} className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 px-1">
                  <AnimatePresence mode="popLayout">
                    {!loading &&
                      displayedProjects.map((item, i) => (
                        <motion.div
                          key={item.id}
                          layout
                          initial={{ opacity: 0, y: 40, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -30, scale: 0.95 }}
                          transition={{ duration: 0.55, delay: i * 0.04, ease: smoothEase }}
                        >
                          <PortfolioCard
                            index={i}
                            title={item.title}
                            description={item.description}
                            image={item.image_url}
                            live_url={item.live_url}
                            id={item.id}
                          />
                        </motion.div>
                      ))}
                  </AnimatePresence>
                </motion.div>
                {!loading && projects.length > 3 && (
                  <motion.div layout transition={{ duration: 0.6, ease: smoothEase }} className="flex justify-center">
                    <motion.button
                      layout
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setShowAllProjects(!showAllProjects)}
                      className="px-6 py-3 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-xl text-sm text-white/75 hover:text-white transition flex items-center gap-2"
                    >
                      <AnimatePresence mode="wait">
                        <motion.div key={showAllProjects ? 'less' : 'more'} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="flex items-center gap-2">
                          {showAllProjects ? <><ChevronUp size={16} /> See Less</> : <><ChevronDown size={16} /> See More</>}
                        </motion.div>
                      </AnimatePresence>
                    </motion.button>
                  </motion.div>
                )}
              </div>
            )}

            {/* CERTIFICATES TAB */}
            {activeTab === 'certificates' && (
              <div className="min-h-[300px]">
                {!loading && certificates.length === 0 && (
                   <div className="flex flex-col items-center justify-center h-full text-white/40 pt-10">
                     <Database size={40} className="mb-4 opacity-50" />
                     <p>No certificates uploaded yet.</p>
                   </div>
                )}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 px-1">
                  {!loading && certificates.map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 25, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.04 }}
                      whileHover={{ y: -4 }}
                      onClick={() => { setPreviewImage(item.image_url); setPreviewOpen(true); }}
                      className="group cursor-pointer rounded-[26px] border border-white/10 bg-white/5 p-4 backdrop-blur-xl"
                    >
                      <div className="rounded-2xl overflow-hidden border border-white/10 h-56">
                        <img src={item.image_url} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={item.title} />
                      </div>
                      <h3 className="mt-4 text-[15px] font-semibold text-center text-white/90">{item.title}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* TECH STACK TAB */}
            {activeTab === 'techstack' && (
              <div className="min-h-[360px] flex justify-center">
                 {!loading && techStacks?.length === 0 && (
                   <div className="flex flex-col items-center justify-center h-full text-white/40 pt-10">
                     <Database size={40} className="mb-4 opacity-50" />
                     <p>No tech stack added yet.</p>
                   </div>
                )}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-5xl w-full">
                  {!loading && techStacks?.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: index * 0.04 }}
                      whileHover={{ y: -5, scale: 1.04 }}
                      className="group rounded-[24px] border border-white/10 bg-white/[0.04] backdrop-blur-xl flex flex-col items-center justify-center gap-3 h-[125px] w-[125px] mx-auto"
                    >
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-[70px] h-[70px] rounded-full bg-white/20 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
                        {item.logo_url ? <img src={item.logo_url} alt={item.name} className="relative z-10 w-[56px] h-[56px] object-contain" /> : <div className="relative z-10 w-[56px] h-[56px] rounded-2xl bg-white/10" />}
                      </div>
                      <p className="text-[11px] text-white/80 text-center leading-tight px-2 line-clamp-1">{item.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* EDUCATION TAB */}
            {activeTab === 'education' && (
              <div className="grid md:grid-cols-2 gap-6 mt-4 animate-fade-in max-w-5xl mx-auto w-full">
                
                {/* MCA */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors backdrop-blur-sm group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-white/10">
                    <GraduationCap className="text-gray-300" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Master of Computer Applications (MCA)</h3>
                  <div className="flex flex-col gap-1 mb-4">
                    <p className="text-gray-400 font-medium">Adamas University, Kolkata</p>
                    <p className="text-gray-500 text-sm">CGPA: <span className="text-gray-300 font-semibold">8.5/10</span></p>
                  </div>
                  <span className="text-sm text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full inline-block font-semibold shadow-sm border border-white/10">
                    2024 – 2026
                  </span>
                </div>

                {/* BCA */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors backdrop-blur-sm group">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform border border-white/10">
                    <GraduationCap className="text-gray-300" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Bachelor of Computer Applications (BCA)</h3>
                  <div className="flex flex-col gap-1 mb-4">
                    <p className="text-gray-400 font-medium">Utkal University, Bhubaneswar</p>
                    <p className="text-gray-500 text-sm">CGPA: <span className="text-gray-300 font-semibold">7.0/10</span></p>
                  </div>
                  <span className="text-sm text-gray-300 bg-white/5 px-3.5 py-1.5 rounded-full inline-block font-semibold shadow-sm border border-white/10">
                    2021 – 2024
                  </span>
                </div>

              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  )
}