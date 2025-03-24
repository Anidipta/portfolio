"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, BookOpen, Code, Music, Globe, Coffee } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="section-container">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-title gradient-text"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-subtitle"
        >
          Get to know the person behind the code and research
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden mb-8 border-4 border-primary/30 p-1">
                <Image
                  src="https://media.licdn.com/dms/image/v2/D5603AQFusbAPXu7_Jw/profile-displayphoto-shrink_800_800/B56ZRT8U_8GoAc-/0/1736575112043?e=1748476800&v=beta&t=ZjdLlU765FzGnciHMoG3Kd_55v4JZxIFh_mhjOQ4VFQ"
                  alt="Anidipta Pal"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-xl"
                />

                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/20 rounded-full filter blur-xl" />
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-secondary/20 rounded-full filter blur-xl" />
              </div>

              <div className="flex gap-4 mb-8">
                <a
                  href="https://www.github.com/Anidipta"
                  className="p-3 rounded-full bg-muted/30 text-white hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anidipta-pal"
                  className="p-3 rounded-full bg-muted/30 text-white hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://x.com/AnidiptaP"
                  className="p-3 rounded-full bg-muted/30 text-white hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="anidiptapal@gmail.com"
                  className="p-3 rounded-full bg-muted/30 text-white hover:bg-primary/20 hover:text-primary transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>

              <div className="space-y-4 w-full">
                <div className="glass-card p-4">
                  <h4 className="text-lg font-semibold text-primary mb-3">Education</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium">B.Tech in Computer Science and Engineering (AIML)</div>
                      <div className="text-sm text-muted-foreground">Heritage Institute of Technology, Kolkata</div>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-4">
                  <h4 className="text-lg font-semibold text-primary mb-3">Interests</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Code size={16} className="text-secondary" />
                      <span>Creative Coding</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-secondary" />
                      <span>Anime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Music size={16} className="text-secondary" />
                      <span>Electronic Music Production</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe size={16} className="text-secondary" />
                      <span>Travel & Exploration</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee size={16} className="text-secondary" />
                      <span>Coffee Brewing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold gradient-text mb-6">Anidipta Pal</h3>
              <h4 className="text-xl text-secondary font-medium mb-6">AI/ML Engineer & Data Scientist</h4>

              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                 I&apos;m a results-driven AI/ML enthusiast with expertise in Python, deep learning, and geospatial analysis. I have experience developing machine learning models for agriculture, banking, and climate applications.</p>

                <p>My passion lies in leveraging AI for social good, particularly in agriculture, climate resilience, and disaster management. I focus on predictive analytics and intelligent systems enhancing decision-making and risk mitigation.</p>

                <p>My technical expertise includes machine learning, computer vision, and data visualization. I&apos;m proficient in Python, C/C++, and Java, with experience in frameworks like TensorFlow, PyTorch, and scikit-learn.</p>

                <p>Beyond technical work, I actively participate in hackathons and have earned several top placements. These competitions help me to refine my problem-solving skills, and collaborate on innovative solutions.</p>  
                
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Additional Achievements</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Top 10 finalists for Tech Intellina, IET YPS at JU</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>2nd Runner-up at Campus Connect, IIM Rohtak</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>3rd Runner-up at Hack Fusion, NIT Jamshedpur</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>4th Runner-up at Contract Risk Management Hackathon, IIT Madras</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4">Awards & Recognition</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>1st Place in VizSpark, EGS Pillay Engineering College</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>2nd Place at the Video Frame Sorting Hackathon, Machine Hack</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>Top 50 finalists in the SIF Space Hackathon, ISRO</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      <span>2nd Runner-up at Hack Synthesis&apos;24, UEM Kolkata</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

