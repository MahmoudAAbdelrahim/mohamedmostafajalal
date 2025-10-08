'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch('/api/projects');
        const data = await res.json();
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch projects', err);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-[#0a0f1a] py-16 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-teal-400 mb-10 text-center">My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.length > 0 ? (
          projects.map((project) => (
            <motion.a
              key={project._id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#151f30] p-6 rounded-xl shadow-lg flex items-center justify-center text-white font-semibold text-lg hover:bg-teal-400 hover:text-[#0a0f1a] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {project.name}
            </motion.a>
          ))
        ) : (
          <p className="text-white/70 col-span-full text-center">No projects yet.</p>
        )}
      </div>
    </section>
  );
}
