"use client"

import { motion } from "framer-motion"

export default function TechStack() {
  const categories = [
    {
      title: "Programming Languages",
      items: [
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
      title: "Web Development",
      items: [
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
      title: "Data Science & Machine Learning",
      items: [
        { name: "Pandas", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg", },
        { name: "NumPy", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg", },
        { name: "SciPy", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGnfhZwoeVtV8kGJjOCAyuBBLEWWpC7OFiqQ&s", },
        { name: "Scikit-learn", icon: "https://e7.pngegg.com/pngimages/39/4/png-clipart-logo-scikit-learn-python-github-machine-learning-text-orange.png", },
        { name: "TensorFlow", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg", },
        { name: "Keras", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/keras/keras-original.svg", },
        { name: "CatBoost", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cc/CatBoostLogo.png", },
        { name: "PyTorch", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg", },
        { name: "Beautiful Soup", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSWtK-lr6XLm1WPdqzfhhVfHBcldcGxN6wL-zwwcntsYIMu8pC8yUYl8aUSzXyd4WNf8w&usqp=CAU", },
        { name: "Selenium", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/selenium/selenium-original.svg", },
        { name: "Requests", icon: "https://logowik.com/content/uploads/images/request-req2041.jpg", },
        { name: "Google Gemini", icon: "https://i.pinimg.com/736x/e5/a2/52/e5a252b0d1ceae9c5a7ee8cea147ce6f.jpg",},
        { name: "Hugging Face", icon: "https://huggingface.co/front/assets/huggingface_logo.svg",},
        { name: "LangChain", icon: "https://velog.velcdn.com/images/udonehn/post/89458d9f-f139-48f3-901c-0098107f52be/image.png",},
      ],
    },
    {
      title:  "Computer Vision & Image Processing",
      items: [
        { name: "OpenCV", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg", },
        { name: "Pillow", icon: "https://python-pillow.github.io/assets/images/pillow-logo-248x250.png", },
        { name: "Rasterio", icon: "https://geog-312.gishub.org/_static/logo.png", },
        { name: "Google Earth Engine", icon: "https://image.pngaaa.com/772/546772-middle.png",},
        { name: "Scikit-image", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Scikit-image_logo.png/300px-Scikit-image_logo.png", },
      ],
    },
    {
      title:"Data Visualization & Analytics",
      items: [
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
      title: "Databases",
      items:[
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
      title: "Tools & Platforms",
      items: [
        { name: "Visual Studio Code", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg", },
        { name: "PyCharm", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pycharm/pycharm-original.svg", },
        { name: "Jupyter", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jupyter/jupyter-original.svg", },
        { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", },
        { name: "GitHub", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", },
        { name: "GitLab", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/gitlab/gitlab-original.svg", },
        { name: "Kaggle", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kaggle/kaggle-original.svg", },
      ],
    },
  ]

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-300">
            Tech Stack
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-2xl font-bold text-purple-400 mb-8"
              >
                {category.title}
              </motion.h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-2.5">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.1, delay: itemIndex * 0.05 }}
                    whileHover={{
                      y: -5,
                      background: "linear-gradient(to right, rgba(34, 211, 238, 0.3), rgba(244, 114, 182, 0.3))",
                      borderColor: "rgba(0, 204, 255, 0.9)",
                      transition: { duration: 0.001 },
                    }}
                    className="flex flex-col items-center justify-center bg-gray-900 border border-gray-800 rounded-lg p-4 h-32 transition-all duration-300"
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center">
                      <img src={item.icon || "/placeholder.svg"} alt={item.name} className="max-w-full max-h-full" />
                    </div>
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
