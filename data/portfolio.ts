export const personalInfo = {
  name: "Anam Shergill",
  role: "Full-Stack & AI Web Developer",
  tagline: "Building modern, fast and SEO-focused web experiences",
  description: "Passionate full-stack developer crafting beautiful web applications with cutting-edge technologies. Specialized in React, Next.js, Node.js, and AI-powered solutions.",
  email: "anamzeeshanshergill@gmail.com",
  location: "Pakistan",
  availability: "Available for Freelance",
  github: "https://github.com/AnamShergill",
  linkedin: "https://www.linkedin.com/in/anam-zeeshan-shergill1986/",
  resume: "/resume.pdf"
}

export const about = {
  story: `I'm a passionate full-stack web developer with a love for creating modern, performant, and user-friendly applications. I started my coding journey in 2023 with HTML, CSS, and TypeScript, and have been building real-world projects ever since.

In 2024, I dove into Next.js and the React ecosystem, building production-ready applications while expanding my skills to full-stack development with Node.js and databases. 2025 marked my entry into Python development and AI-powered projects, opening up new possibilities for intelligent web solutions.

Now in 2026, I'm focused on Agentic AI - building autonomous AI agents and intelligent systems that can think and act independently. I believe in writing clean, scalable code, following industry best practices, and staying at the cutting edge of technology. Whether it's a stunning frontend, a powerful API, or an intelligent AI system, I bring ideas to life with precision and passion.`,
  image: "/profile.jpg"
}

export const skills = {
  frontend: [
    { name: "HTML", icon: "Code2" },
    { name: "CSS", icon: "Palette" },
    { name: "Tailwind CSS", icon: "Wind" },
    { name: "JavaScript", icon: "FileCode" },
    { name: "TypeScript", icon: "FileType" },
    { name: "React", icon: "Atom" },
    { name: "Next.js", icon: "Triangle" }
  ],
  backend: [
    { name: "Node.js", icon: "Server" },
    { name: "Express.js", icon: "Code" },
    { name: "MongoDB", icon: "Database" },
    { name: "PostgreSQL", icon: "Database" },
    { name: "REST APIs", icon: "Webhook" },
    { name: "Git/GitHub", icon: "GitBranch" },
    { name: "Firebase", icon: "Database" },
    { name: "Supabase", icon: "Database" }
  ],
  ai: [
    { name: "Python", icon: "Code" },
    { name: "Streamlit", icon: "BarChart3" },
    { name: "AI Tools", icon: "Brain" },
    { name: "Prompt Engineering", icon: "MessageSquare" },
    { name: "Automation", icon: "Zap" }
  ]
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  featured?: boolean
  isAI?: boolean
  isRobotics?: boolean
  isCloudNative?: boolean
  isAIAutomation?: boolean
  liveUrl?: string
  githubUrl: string
  highlights?: string[]
  badges?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal AI Employee",
    description: "A futuristic AI-powered virtual employee platform designed to automate workflows, assist with productivity tasks, simulate intelligent business interactions, and showcase modern AI-driven automation concepts.",
    image: "/projects/ai-employee.jpg",
    tags: ["Python", "Streamlit", "AI APIs", "Prompt Engineering", "Automation Workflows", "Conversational AI"],
    category: "AI Application",
    featured: true,
    isAI: true,
    isAIAutomation: true,
    githubUrl: "https://github.com/AnamShergill/personal-ai-employee",
    highlights: [
      "AI-powered assistant system",
      "Productivity automation",
      "Conversational AI workflows",
      "Virtual employee concept",
      "Task automation architecture",
      "Interactive AI experience",
      "Modern AI-focused UI"
    ],
    badges: ["AI Powered", "Automation", "Future Ready"]
  },
  {
    id: 2,
    title: "Physical AI & Humanoid Robotics Book",
    description: "A futuristic AI-native educational platform focused on Physical AI, humanoid robotics, ROS 2, embodied intelligence, simulation systems, and Vision-Language-Action (VLA) architectures through an interactive modern learning experience.",
    image: "/projects/physical-humanoid.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Concepts", "ROS 2"],
    category: "AI / Robotics",
    featured: true,
    isAI: true,
    isRobotics: true,
    liveUrl: "https://physical-humaniod-ai-book-8xrs.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/physical-ai-robotics-book"
  },
  {
    id: 3,
    title: "Levy Consultant Tax Firm",
    description: "A professional tax consultancy and financial services website built with a clean business-focused interface, responsive layouts, and structured service sections designed to improve trust and user experience.",
    image: "/projects/levy-tax.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Business",
    featured: true,
    liveUrl: "https://tax-consultancy-firm.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/levy-consultant"
  },
  {
    id: 4,
    title: "Khan Fish Supplier",
    description: "A modern supplier business website designed for showcasing seafood products and supplier services with responsive layouts, clean branding, and optimized business presentation.",
    image: "/projects/khan-fish.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Business",
    liveUrl: "https://www.khanfishsupplier.com/",
    githubUrl: "https://github.com/AnamShergill/khan-fish-supplier"
  },
  {
    id: 5,
    title: "Burger E-Commerce Website",
    description: "A modern burger ordering and e-commerce style website featuring interactive product sections, responsive layouts, modern UI styling, and engaging food-focused design.",
    image: "/projects/burger.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "E-Commerce",
    liveUrl: "https://burger-ecommerce-website.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/burger-ecommerce"
  },
  {
    id: 6,
    title: "Hackathon E-Commerce Website",
    description: "A responsive e-commerce web application developed during a hackathon focusing on rapid UI development, scalable layouts, and modern frontend implementation.",
    image: "/projects/e-commerce.png",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    category: "E-Commerce",
    featured: true,
    liveUrl: "https://hackathon-e-commerce-website-liard.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/hackathon-ecommerce"
  },
  {
    id: 7,
    title: "AI Todo Chatbot - Kubernetes Deployment",
    description: "An AI-powered productivity chatbot application deployed using Docker and Kubernetes, featuring scalable containerized architecture, cloud-native deployment workflows, and modern DevOps practices.",
    image: "/projects/ai-todo.jpg",
    tags: ["Python", "Streamlit", "Docker", "Kubernetes", "AI APIs", "DevOps"],
    category: "AI Infrastructure",
    isAI: true,
    isCloudNative: true,
    featured: true,
    githubUrl: "https://github.com/AnamShergill/ai-todo-chatbot",
    highlights: [
      "Containerized application",
      "Kubernetes deployment",
      "Dockerized architecture",
      "Cloud-native workflow",
      "AI-powered productivity system",
      "Scalable deployment structure"
    ]
  },
  {
    id: 8,
    title: "Modern Charity Website",
    description: "A charity-focused responsive website designed with modern Bootstrap layouts, accessibility-focused sections, and clean UI components optimized for multiple devices.",
    image: "/projects/charity.png",
    tags: ["Bootstrap", "CSS", "JavaScript"],
    category: "Frontend",
    liveUrl: "https://charity-website-bootstrap.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/modern-charity"
  },
  {
    id: 9,
    title: "Password Strength Checker",
    description: "A password validation and security-focused utility application designed to analyze password strength, improve security awareness, and provide real-time feedback to users.",
    image: "/projects/password-strenght.png",
    tags: ["Python", "Streamlit"],
    category: "Utility Tool",
    liveUrl: "https://password-strength-checker-murex-three.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/password-checker"
  },
  {
    id: 10,
    title: "Food Recipe Website",
    description: "A modern food and recipe website designed with engaging content sections, recipe-focused layouts, responsive cards, and user-friendly browsing experience.",
    image: "/projects/food-recipe.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    liveUrl: "https://food-blog-beryl.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/food-recipe"
  },
  {
    id: 11,
    title: "Growth Mindset Challenge",
    description: "An interactive personal development application focused on motivation, self-improvement, and productivity through engaging growth mindset challenges and user interaction.",
    image: "/projects/growth-mindset.png",
    tags: ["Python", "Streamlit"],
    category: "Productivity",
    liveUrl: "https://growth-mindset-challenge-anamshergill.streamlit.app/",
    githubUrl: "https://github.com/AnamShergill/growth-mindset"
  },
  {
    id: 12,
    title: "Mobile Landing Page",
    description: "A responsive mobile-inspired landing page project focused on layout structuring, clean UI hierarchy, and mobile-first frontend design principles.",
    image: "/projects/mobile.png",
    tags: ["HTML", "CSS"],
    category: "Landing Page",
    liveUrl: "https://smit-css-assignemnt-3-mobile-landing-page.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/mobile-landing"
  }
]

export const experience = [
  {
    year: "2023",
    title: "Started Coding Journey",
    description: "Began learning web development fundamentals - HTML, CSS, and TypeScript"
  },
  {
    year: "2023",
    title: "First Web Projects",
    description: "Built my first websites and started exploring responsive design with modern CSS"
  },
  {
    year: "2024",
    title: "Next.js & Modern Frameworks",
    description: "Started learning Next.js and building production-ready projects with React ecosystem"
  },
  {
    year: "2024",
    title: "Full-Stack Development",
    description: "Expanded to backend with Node.js, databases, and API development while mastering Next.js"
  },
  {
    year: "2024",
    title: "Hackathon Participation",
    description: "Participated in multiple hackathons, collaborating with teams and building real-world projects"
  },
  {
    year: "2025",
    title: "Python & AI Projects",
    description: "Started learning Python and building Python-based applications and AI-powered projects"
  },
  {
    year: "2026",
    title: "Agentic AI Development",
    description: "Currently diving deep into Agentic AI, building autonomous AI agents and intelligent systems"
  }
]

export const learning = [
  {
    title: "Agentic AI",
    description: "Building autonomous AI agents and intelligent systems",
    icon: "Bot"
  },
  {
    title: "SEO Optimization",
    description: "Advanced SEO techniques for better search rankings",
    icon: "Search"
  },
  {
    title: "GHL Websites",
    description: "Creating high-converting landing pages and funnels",
    icon: "Globe"
  },
  {
    title: "AI Automation",
    description: "Automating workflows with AI-powered tools",
    icon: "Zap"
  },
  {
    title: "Advanced Next.js",
    description: "Server components, streaming, and performance optimization",
    icon: "Rocket"
  },
  {
    title: "Python Applications",
    description: "Building scalable backend services with Python",
    icon: "Code"
  }
]

export const testimonials = [
  {
    name: "John Doe",
    role: "CEO at TechCorp",
    content: "Outstanding work! The website exceeded our expectations. Professional, responsive, and delivered on time.",
    avatar: "/avatars/avatar1.jpg"
  },
  {
    name: "Sarah Smith",
    role: "Product Manager",
    content: "Incredible attention to detail and modern design sensibility. A pleasure to work with!",
    avatar: "/avatars/avatar2.jpg"
  },
  {
    name: "Mike Johnson",
    role: "Startup Founder",
    content: "Transformed our vision into a beautiful, functional website. Highly recommended!",
    avatar: "/avatars/avatar3.jpg"
  }
]
