# REACT-NATIVE-PROJECTS
A collection of frontend mini-projects, React utilities, and UI clones built while exploring modern web development.


# 🚀 Web Development Mini-Projects

Welcome to my collection of web development projects! This repository serves as a centralized workspace where I build, test, and showcase various frontend applications and utilities. 

As I continue to learn and explore new concepts in JavaScript, React, and modern web design, I will be adding more projects to this directory.

## 📂 Projects Directory

Here is a list of the projects currently available in this repository. Click on any project name to view its source code.

| Project Name | Description | Tech Stack |


1. | **[Background Generator]** | A dynamic tool to generate and preview custom CSS background gradients and colors. | HTML, CSS, JS / React |   


2. | **[Password Generator]** | A secure, customizable password generator with options for length, symbols, and numbers. | React, Vite, Tailwind |


3. | **[Currency Converter]** | A responsive, real-time currency converter featuring a modern glassmorphism design, swap functionality, and live exchange rates. |      React, Vite, Tailwind |

 

## 🛠️ Tech Stack & Tools

Across the different projects in this repository, I am actively working with:
* **Languages:** HTML5, CSS3, JavaScript (ES6+)
* **Libraries/Frameworks:** React.js
* **Build Tools:** Vite
* **Version Control:** GitHub

## 💻 How to Run Locally

If you want to explore the code or run these projects on your local machine:

 **Clone the repository:**
   ```bash
   git clone [https://github.com/OmDas123/REACT-NATIVE-PROJECTS]

## Steps

1. Open Terminal and run: `npm create vite@latest`
2. Enter your project name (of your choice).
3. Select **React**, then **JavaScript**, and press Enter.
4. Navigate into your new project folder:
   ```bash
   cd your-project-name
5. Install the base dependencies:npm
   ```bash
   install
6. Install Tailwind CSS and its required peer dependencies:
   Bash
   npm install -D tailwindcss postcss autoprefixer
7. Generate the configuration files (tailwind.config.js and postcss.config.js):
   Bash
   npx tailwindcss init -p
8. Open the newly created tailwind.config.js file and update the content array so Tailwind knows where to look for your classes:
    JavaScript
   /** @type {import('tailwindcss').Config} */
   export default {
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
     extend: {},
     },
      plugins: [],
    }
9. Open your src/index.css file, delete any default CSS inside it, and add the Tailwind directives at the very top:

   CSS
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
10. Finally, start your development server to see your app:
    Bash
    npm run dev
