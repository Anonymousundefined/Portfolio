import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  { name: "C++", icon: "devicon-cplusplus-plain", category: "languages" },
  { name: "Java", icon: "devicon-java-plain", category: "languages" },
  { name: "Python", icon: "devicon-python-plain", category: "languages" },
  { name: "JavaScript", icon: "devicon-javascript-plain", category: "languages" },
  { name: "TypeScript", icon: "devicon-typescript-plain", category: "languages" },
  { name: "C#", icon: "devicon-csharp-plain", category: "languages" },

  // Frontend
  { name: "HTML", icon: "devicon-html5-plain", category: "frontend" },
  { name: "CSS", icon: "devicon-css3-plain", category: "frontend" },
  { name: "React", icon: "devicon-react-original", category: "frontend" },
  { name: "Tailwind", icon: "devicon-tailwindcss-original", category: "frontend" },

  // Backend
  { name: ".NET", icon: "devicon-dotnetcore-plain", category: "backend" },
  { name: "ASP.NET", icon: "devicon-dot-net-plain", category: "backend" },
  { name: "Node", icon: "devicon-nodejs-plain", category: "backend" },
  { name: "Express", icon: "devicon-express-original", category: "backend" },

  // Database
  { name: "MongoDB", icon: "devicon-mongodb-plain", category: "database" },
  { name: "SQL Server", icon: "devicon-microsoftsqlserver-plain", category: "database" },

  // Cloud
  { name: "Azure", icon: "devicon-azure-plain", category: "cloud" },

  // Tools
  { name: "Git", icon: "devicon-git-plain", category: "tools" },
  { name: "GitHub", icon: "devicon-github-original", category: "tools" },
  { name: "Docker", icon: "devicon-docker-plain", category: "tools" },
  { name: "VS Code", icon: "devicon-vscode-plain", category: "tools" },
  { name: "Visual Studio", icon: "devicon-visualstudio-plain", category: "tools" },
  { name: "Postman", icon: "devicon-postman-plain", category: "tools" },
];

const categories = [
  "languages",
  "frontend",
  "backend",
  "database",
  "cloud",
  "tools",
  "all",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const filteredSkills = skills.filter(
  (skill) =>
    activeCategory === "all" ||
    skill.category === activeCategory
);

  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden"
    >
      {/* Background Blobs */}

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <div className="container mx-auto max-w-7xl relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          My <span className="text-primary">Skills</span>
        </motion.h2>

        {/* Category Buttons */}

        <div className="flex flex-wrap justify-center gap-4 mb-16">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
  "rounded-full px-6 py-2 transition-all duration-300 uppercase tracking-wide",
  activeCategory === category
    ? "bg-primary text-white"
    : "bg-secondary hover:bg-primary hover:text-white"
)}
            >
              {category}
            </button>

          ))}

        </div>

        {/* Sills */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {filteredSkills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .08
              }}
              whileHover={{
                rotateX: 10,
                rotateY: -10,
                scale: 1.08
              }}
              className="skill-card"
            >

              <i
                className={`${skill.icon} colored text-7xl skill-icon`}
              />

              <h3 className="mt-6 text-lg font-semibold">{skill.name}</h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};