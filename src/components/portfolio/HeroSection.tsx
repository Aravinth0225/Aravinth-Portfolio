"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import TypewriterRole from "./TypewriterRole";

export default function HeroSection() {
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
          style={{ backgroundColor: "rgba(147, 197, 253, 0.1)" }}
          animate={{
            scale: [1, 1.3, 1],
            filter: ["blur(60px)", "blur(100px)", "blur(60px)"]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
          style={{ backgroundColor: "rgba(192, 132, 252, 0.1)" }}
          animate={{
            scale: [1, 1.4, 1],
            filter: ["blur(50px)", "blur(90px)", "blur(50px)"]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />

        {/* Accent Dots */}
        <motion.div
          className="absolute top-20 right-20 w-2 h-2 bg-blue-500/30 rounded-full"
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-1 h-1 bg-purple-500/40 rounded-full"
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-pink-500/35 rounded-full"
          animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Main Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center -mb-8"
          >

      <div className="flex flex-col md:flex-row items-center justify-center gap-20 text-center md:text-left">
    
    {/* Name + Typewriter */}
    <div>
      <motion.h1
        className="text-5xl md:text-6xl font-bold mb-4 tracking-tight animate-text-glow"
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 1, type: "spring" }}
      >
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
           Aravinth  R
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <TypewriterRole />
      </motion.div>
    </div>

    {/* Image on Right */}
    {/* <motion.img
      src="/Aravinth1.png"
      alt="Aravinth R"
      className="w-56 h-56 md:w-64 md:h-64 border-4 border-white dark:border-gray-800 shadow-xl object-cover hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition duration-500 rounded-lg"
      initial={{ opacity: 0, scale: 0.8, x: 30 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
    /> */}
  </div>

        {/* Typewriter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <TypewriterRole />
        </motion.div> */}

        {/* Tagline */}
        <br /> <br />
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Crafting exceptional digital experiences with clean code and thoughtful design
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {[
            {
              href: "https://github.com/Aravinth0225",
              icon: "simple-icons:github",
              label: "GitHub",
              color: "hover:text-gray-900 dark:hover:text-white"
            },
            {
              href: "https://www.linkedin.com/in/aravinth-r-b52b84244/",
              icon: "skill-icons:linkedin",
              label: "LinkedIn",
              color: "hover:text-blue-600"
            },
            {
              href: "mailto:aravinthjaya525@gmail.com",
              icon: "material-icon-theme:email",
              label: "Email",
              color: "hover:text-green-600"
            }
          ].map((link) => (
            <motion.div key={link.label} whileHover={{ scale: 1.15, rotate: 2 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={link.href}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 backdrop-blur-sm rounded-full text-sm transition-all duration-300 border border-gray-300/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl ${link.color}`}
              >
                <Icon icon={link.icon} width={18} height={18} />
                {link.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>


        {/* Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-50/80 dark:bg-green-900/20 border border-green-200/50 dark:border-green-800/50 rounded-full backdrop-blur-sm"
        >
          <motion.div
            className="w-2 h-2 bg-green-500 rounded-full"
            animate={{ scale: [1, 1.8, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Link href="#contact">
            <span className="text-green-700 dark:text-green-300 text-sm font-medium">
              Available for projects
            </span>
          </Link>
        </motion.div>
      </motion.section>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="hidden md:flex absolute bottom-20 left-0 right-0 justify-center pb-8 z-10"
       >
        <motion.button
          onClick={() => {
            const overviewSection = document.getElementById("overview");
            if (overviewSection) {
              overviewSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }
          }}
          className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
         >
          <span className="text-sm font-medium tracking-wide">Scroll for more</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon icon="mdi:chevron-down" width={24} height={24} className="text-gray-400 dark:text-gray-500" />
          </motion.div>
        </motion.button>
      </motion.div>
    </div>
  );
}


// "use client";

// import { Icon } from "@iconify/react";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import TypewriterRole from "./TypewriterRole";

// export default function HeroSection() {
//   return (
//     <div className="relative min-h-[100dvh] flex items-center justify-center">
//       {/* Subtle Background Pattern */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl" />
//         <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl" />

//         {/* Geometric Accents */}
//         <motion.div
//           className="absolute top-20 right-20 w-2 h-2 bg-blue-500/30 rounded-full"
//           animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
//           transition={{ duration: 4, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-32 left-16 w-1 h-1 bg-purple-500/40 rounded-full"
//           animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
//           transition={{ duration: 3, repeat: Infinity, delay: 1 }}
//         />
//         <motion.div
//           className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-pink-500/35 rounded-full"
//           animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.6, 0.2] }}
//           transition={{ duration: 5, repeat: Infinity, delay: 2 }}
//         />
//       </div>

//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 max-w-4xl mx-auto px-6 text-center -mb-8"
//       >

//         {/* Name */}
//         <motion.h1
//           className="text-5xl md:text-6xl font-bold mb-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//         >
//           <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent z-10">
//             Aravinth R
//           </span>
//         </motion.h1>

//         {/* Typewriter Role Component */}
//         <TypewriterRole />

//         {/* Tagline */}
//         <motion.p
//           className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8, duration: 0.6 }}
//         >
//           Crafting exceptional digital experiences with clean code and thoughtful design
//         </motion.p>

//         {/* Social Links - keeping exactly the same */}
//         <motion.div
//           className="flex flex-wrap gap-3 justify-center mb-12"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.0 }}
//         >
//           {[
//             { href: "https://github.com/Aravinth0225", icon: "simple-icons:github", label: "GitHub", color: "hover:text-gray-900 dark:hover:text-white" },
//             { href: "https://www.linkedin.com/in/aravinth-r-b52b84244/", icon: "skill-icons:linkedin", label: "LinkedIn", color: "hover:text-blue-600" },
//             { href: "mailto:aravinthjaya525@gmail.com", icon: "material-icon-theme:email", label: "Email", color: "hover:text-green-600" }
//           ].map((link) => (
//             <motion.div key={link.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 href={link.href}
//                 className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800 backdrop-blur-sm rounded-full text-sm transition-all duration-300 border border-gray-300/50 dark:border-gray-600/50 shadow-lg hover:shadow-xl ${link.color}`}
//               >
//                 <Icon icon={link.icon} width={18} height={18} />
//                 {link.label}
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Skills Preview */}
//         {/* <motion.div
//           className="flex flex-wrap justify-center gap-3 mb-10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2 }}
//         >
//           {[
//             { icon: "skill-icons:react-dark", label: "React" },
//             { icon: "skill-icons:typescript", label: "TypeScript" },
//             { icon: "skill-icons:nextjs-dark", label: "Next.js" },
//             { icon: "skill-icons:nodejs-dark", label: "Node.js" },
//             { icon: "skill-icons:tailwindcss-dark", label: "Tailwind" }
//           ].map((skill, index) => (
//             <motion.div
//               key={skill.label}
//               className="flex items-center gap-2 px-3 py-2 bg-gray-50/80 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/30"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2 + index * 0.1 }}
//               whileHover={{ scale: 1.05, y: -2 }}
//             >
//               <Icon icon={skill.icon} width={16} height={16} />
//               <span className="text-sm text-gray-700 dark:text-gray-300">{skill.label}</span>
//             </motion.div>
//           ))}
//         </motion.div> */}

//         {/* Status */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 1.4 }}
//           className="inline-flex items-center gap-2 px-4 py-2 bg-green-50/80 dark:bg-green-900/20 border border-green-200/50 dark:border-green-800/50 rounded-full backdrop-blur-sm"
//         >
//           <motion.div
//             className="w-2 h-2 bg-green-500 rounded-full"
//             animate={{ scale: [1, 1.4, 1] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           />
//           <Link href="#contact">
//             <span className="text-green-700 dark:text-green-300 text-sm font-medium">
//               Available for projects
//             </span>
//           </Link>
//         </motion.div>
//       </motion.section>

//       {/* Scroll for more indicator */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.6, duration: 0.6 }}
//         className="hidden md:flex absolute bottom-20 left-0 right-0 justify-center pb-8 z-10"
//       >
//         <motion.button
//           onClick={() => {
//             const overviewSection = document.getElementById('overview');
//             if (overviewSection) {
//               overviewSection.scrollIntoView({
//                 behavior: 'smooth',
//                 block: 'start'
//               });
//             }
//           }}
//           className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 transition-colors duration-300"
//           animate={{ y: [0, -8, 0] }}
//           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <span className="text-sm font-medium tracking-wide">Scroll for more</span>
//           <motion.div
//             animate={{ y: [0, 4, 0] }}
//             transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//           >
//             <Icon
//               icon="mdi:chevron-down"
//               width={24}
//               height={24}
//               className="text-gray-400 dark:text-gray-500"
//             />
//           </motion.div>
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// } 