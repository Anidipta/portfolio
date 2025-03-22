"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

// Define skill categories with their icons and skills
const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: [
      {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "C/C++",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      { name: "R", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg" },
    ],
  },
  {
    id: "web",
    title: "Web Development",
    skills: [
      {
        name: "Django",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
      },
      {
        name: "Flask",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
      },
      {
        name: "HTML/CSS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      {
        name: "Streamlit",
        icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg",
      },
    ],
  },
  {
    id: "data-ml",
    title: "Data Science & ML",
    skills: [
      {
        name: "NumPy",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
      },
      {
        name: "Pandas",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
      },
      {
        name: "TensorFlow",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "PyTorch",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "Scikit-Learn",
        icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "OpenCV",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg",
      },
    ],
  },
  {
    id: "scraping",
    title: "Web Scraping",
    skills: [
      {
        name: "BeautifulSoup",
        icon: "https://www.crummy.com/software/BeautifulSoup/bs4/doc/_static/beautifulsoup-logo.png",
      },
      {
        name: "Scrapy",
        icon: "https://scrapy.org/img/scrapylogo.png",
      },
      {
        name: "Selenium",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg",
      },
      {
        name: "Requests",
        icon: "https://requests.readthedocs.io/en/latest/_static/requests-sidebar.png",
      },
    ],
  },
  {
    id: "visualization",
    title: "Data Visualization & Analytics",
    skills: [
      {
        name: "Matplotlib",
        icon: "https://matplotlib.org/_static/images/logo2.svg",
      },
      {
        name: "Seaborn",
        icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg",
      },
      {
        name: "Plotly",
        icon: "https://images.plot.ly/logo/new-branding/plotly-logomark.png",
      },
      {
        name: "PowerBI",
        icon: "https://powerbi.microsoft.com/pictures/shared/social/social-default-image.png",
      },
      {
        name: "Tableau",
        icon: "https://www.tableau.com/sites/default/files/2021-05/tableau_rgb_500x104.png",
      },
      {
        name: "Looker Studio",
        icon: "https://looker.com/assets/img/logos/looker-logo.svg",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Soft Skills",
    skills: [
      {
        name: "Git/GitHub",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      { name: "Team Management", icon: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/users.svg" },
      { name: "Strategic Planning", icon: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/project-diagram.svg" },
      { name: "Problem-Solving", icon: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/puzzle-piece.svg" },
      { name: "Communication", icon: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/svgs/solid/comments.svg" },
      { name: "MS Excel", icon: "https://img.icons8.com/ios-filled/50/000000/microsoft-excel.png" },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" className="section-container">
      <div ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="section-title gradient-text"
        >
          Skills & Expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-subtitle"
        >
          A comprehensive overview of my technical skills and areas of expertise
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            className="glass-card p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(97,175,239,0.3)] hover:-translate-y-2"
          >
            <h3 className="text-xl font-bold mb-6">{category.title}</h3>

            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="w-8 h-8 flex items-center justify-center bg-muted/30 rounded-md group-hover:bg-primary/20 transition-colors">
                    <img
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                      crossOrigin="anonymous"
                    />
                  </div>
                  <span className="text-muted-foreground group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

