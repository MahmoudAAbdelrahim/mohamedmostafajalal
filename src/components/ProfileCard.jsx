'use client';

import { motion } from 'framer-motion';
import { FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0a0f1a] via-[#0b1320] to-[#101728] flex items-center justify-center p-6 font-sans">
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-[#151f30] text-white w-full max-w-6xl rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] p-6 md:p-12 space-y-10 border border-[#1f2a40]"
      >
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* صورة حودة الكبيرة */}
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="min-w-[250px] md:min-w-[350px] h-[300px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="../img/mahmoud A Abd.jpg"
              alt="Mahmoud Ali"
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>

          {/* النص */}
          <div className="flex-1 flex flex-col justify-center space-y-6 text-center md:text-left">
           <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-wide">
              Mahmoud Ali Mahmoud
            </h3>
            {/* الوصف الكبير */}
            <p className="text-white/90 leading-relaxed text-lg md:text-xl max-w-3xl">
I am a student in the Public Policy and Information Systems (PPIS) program, 
with a genuine passion for technology, problem-solving, 
and building impactful digital solutions. As a Fullstack Developer, 
I focus on creating modern and practical web applications using React, Node.js, 
and Next.js.
              <br /><br />
I believe technology is not just a tool for development, but a way to innovate, 
simplify processes, and create tangible value in real-world projects. 
I am constantly learning, experimenting, and applying my skills to both academic 
and personal projects to make meaningful contributions.
              <br /><br />
This platform represents my journey as a student and developer — 
a space to showcase my projects, share insights, 
and document my growth in both public policy understanding and software development.
            </p>

{/* أيقونات الميديا وزر تحميل CV */}
<div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-teal-400 text-2xl mt-4">
  <a href="https://github.com/MahmoudAAbdelrahim" target="_blank" rel="noopener noreferrer">
    <FaGithub className="hover:text-teal-200 transition-colors duration-300" />
  </a>
  <a href="https://linkedin.com/in/https://www.linkedin.com/in/mahmoud-a-abdelrahim-8bb01b364" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="hover:text-teal-200 transition-colors duration-300" />
  </a>
  <a href="https://instagram.com/mahmoud.a.abdulrahim" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="hover:text-teal-200 transition-colors duration-300" />
  </a>
  <a href="https://wa.me/201001514586" target="_blank" rel="noopener noreferrer">
    <FaWhatsapp className="hover:text-teal-200 transition-colors duration-300" />
  </a>

  {/* زر تحميل CV */}
  <a
    href="../img/Mahmoud Ali Mahmoud.pdf" // رابط ملف الـ CV
    download
    className="flex items-center justify-center gap-2 text-xl bg-teal-400 text-[#0a0f1a] px-4 py-2 rounded-lg shadow hover:bg-teal-500 transition-all duration-300"
  >
    <HiDownload /> CV
  </a>
</div>

          </div>
        </div>
      </motion.section>
    </main>
  );
}
