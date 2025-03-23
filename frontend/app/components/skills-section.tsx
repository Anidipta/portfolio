"use client"
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: [
      { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", },
      { name: "R", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/r/r-original.svg", },
      { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", },
      { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", },
      { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", },
      { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg", },
      ],
  },
  {
    id: "web",
    title: "Web Development",
    skills: [
      { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", },
      { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original-wordmark.svg", },
      { name: "Flask", icon: "https://icon.icepanel.io/Technology/png-shadow-512/Flask.png", },
      { name: "Django", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg", },
      { name: "Streamlit", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png", },
      { name: "Fast API", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg", },
      { name: "Socket.io", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/socketio/socketio-original.svg", },
    ],
  },
  {
    id: "data_ml",
    title: "Data Science & Machine Learning",
    skills: [
      { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg", },
      { name: "NumPy", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg", },
      { name: "SciPy", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnfhZwoeVtV8kGJjOCAyuBBLEWWpC7OFiqQ&s", },
      { name: "Scikit-learn", icon: "https://e7.pngegg.com/pngimages/39/4/png-clipart-logo-scikit-learn-python-github-machine-learning-text-orange.png", },
      { name: "TensorFlow", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg", },
      { name: "Keras", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg", },
      { name: "PyTorch", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg", },
      { name: "Rasterio", icon: "https://geog-312.gishub.org/_static/logo.png", },
      { name: "Google Earth Engine", icon: "https://image.pngaaa.com/772/546772-middle.png",},
      { name: "Google Gemini", icon: "https://i.pinimg.com/736x/e5/a2/52/e5a252b0d1ceae9c5a7ee8cea147ce6f.jpg",},
      { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo.svg",},
      { name: "LangChain", icon: "https://velog.velcdn.com/images/udonehn/post/89458d9f-f139-48f3-901c-0098107f52be/image.png",},
    ],
  },
  {
    id: "image_processing",
    title: "Computer Vision & Image Processing",
    skills: [
      { name: "OpenCV", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg", },
      { name: "Pillow", icon: "https://python-pillow.github.io/assets/images/pillow-logo-248x250.png", },
      { name: "Scikit-image", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Scikit-image_logo.png/300px-Scikit-image_logo.png", },
    ],
  },
  {
    id: "analytics",
    title: "Data Visualization & Analytics",
    skills: [
      { name: "Matplotlib", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/matplotlib/matplotlib-original.svg", },
      { name: "Seaborn", icon: "https://cdn.worldvectorlogo.com/logos/seaborn-1.svg", },
      { name: "Plotly", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/plotly/plotly-original.svg", },
      { name: "Tableau", icon: "https://www.svgrepo.com/show/354428/tableau-icon.svg", },
      { name: "Google Data Studio", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg", },
      { name: "Power BI", icon: "https://logohistory.net/wp-content/uploads/2023/05/Power-BI-Symbol.png", },
      { name: "MS Excel", icon: "https://img.etimg.com/thumb/msid-100802411,width-300,height-225,imgsize-3022,resizemode-75/how-to-add-checkboxes-in-ms-excel-see-a-complete-step-by-step-guide.jpg", },
      { name: "Looker", icon: "https://www.svgrepo.com/show/354012/looker-icon.svg", },
      { name: "Google Analytics", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg", },
    ],
  },
  {
    id: "scraping",
    title: "Web Scraping",
    skills: [
      { name: "Beautiful Soup", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWtK-lr6XLm1WPdqzfhhVfHBcldcGxN6wL-zwwcntsYIMu8pC8yUYl8aUSzXyd4WNf8w&usqp=CAU", },
      { name: "Selenium", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg", },
      { name: "Requests", icon: "https://logowik.com/content/uploads/images/request-req2041.jpg", },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    skills: [
      { name: "SQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg", },
      { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg", },
      { name: "SQLite", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg", },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", },
      { name: "Supabase", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg", },
      { name: "Firebase", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg", },
      { name: "Redis", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg", },
    ],
  },
  {
    id: "cloud_devops",
    title: "Cloud & DevOps",
    skills: [
      { name: "Cloud Platform", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg", },
      { name: "Vercel", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg", },
      { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg", },
      { name: "Streamlit Cloud", icon: "https://streamlit.io/images/brand/streamlit-mark-color.png", },
    ],
  },
  {
    id: "tools",
    title: "IDEs & Tools",
    skills: [
      { name: "Visual Studio Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg", },
      { name: "PyCharm", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pycharm/pycharm-original.svg", },
      { name: "Jupyter", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg", },
      { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", },
      { name: "GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", },
      { name: "GitLab", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg", },
      { name: "Kaggle", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kaggle/kaggle-original.svg", },
    ],
},
];


export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (categoryId) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId]
    );
  };

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
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {skillCategories.map((category) => {
          const isExpanded = expandedCategories.includes(category.id);
          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.01 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold gradient-text color-black">{category.title}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-2.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{
                      scale: 1.03,
                      background: "linear-gradient(90deg, rgba(59, 130, 246, 0.5), rgba(249, 115, 22, 0.5))"
                    }}
                    className="flex flex-col items-center justify-center p-6 bg-[#0f1117] border border-[#a5a6ac] rounded-lg transition-all duration-300"
                  >
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                    <span className="text-sm text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}