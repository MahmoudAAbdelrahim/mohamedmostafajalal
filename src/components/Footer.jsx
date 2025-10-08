'use client';

import { FaEnvelope } from 'react-icons/fa';

export default function Footer({ projects = [] }) {
  // projects هتجيلك من قاعدة البيانات
  // ممكن تبعت array فيها { name, href }

  return (
    <footer className="bg-[#0a0f1a] text-white mt-16 border-t border-[#1f2a40]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* الإيميل */}
        <div className="flex items-center gap-2 text-teal-400 text-lg">
          <FaEnvelope className="text-2xl" />
          <a
            href="mailto:mohamedmostafajalal@gmail.com"
            className="hover:text-teal-200 transition-colors duration-300"
          >
            mohamedmostafajalal@gmail.com
          </a>
        </div>

        {/* أحدث 3 مشاريع */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              className="text-teal-400 hover:text-teal-200 transition-colors duration-300"
            >
              {project.name}
            </a>
          ))}
        </div>

      </div>

      {/* حقوق الملكية أسفل */}
      <p className="text-center text-white/70 text-sm md:text-base py-4 border-t border-[#1f2a40]">
        © {new Date().getFullYear()} Mohamed Mostafa. All Rights Reserved.
      </p>
    </footer>
  );
}
