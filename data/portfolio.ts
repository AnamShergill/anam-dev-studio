export const personalInfo = {
  name: "Anam Shergill",
  role: "Frontend & AI Web Developer",
  tagline: "Building modern, fast and SEO-focused web experiences",
  description: "Passionate developer crafting beautiful web applications with cutting-edge technologies. Specialized in React, Next.js, and AI-powered solutions.",
  email: "anamzeeshanshergill@gmail.com",
  location: "Pakistan",
  availability: "Available for Freelance",
  github: "https://github.com/AnamShergill",
  linkedin: "https://www.linkedin.com/in/anam-zeeshan-shergill1986/",
  resume: "/resume.pdf"
}

export const about = {
  story: `I'm a passionate web developer with a love for creating modern, performant, and user-friendly applications. I started my coding journey in February 2023 and joined SMIT (Saylani Mass IT Training) in 2024 to strengthen my grip on modern web development.

My focus is on frontend development with React and Next.js, but I'm also exploring the fascinating world of AI tools and automation. I believe in writing clean code, following best practices, and staying updated with the latest web technologies.

When I'm not coding, you'll find me participating in hackathons, contributing to open-source projects, or learning something new to expand my skill set.`,
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
    { name: "Git/GitHub", icon: "GitBranch" },
    { name: "REST APIs", icon: "Webhook" },
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
  liveUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Personal AI Employee",
    description: "A modern AI-powered virtual employee application designed to automate tasks, assist with workflows, and simulate intelligent business interactions using conversational AI concepts and automation-focused architecture.",
    image: "/projects/ai-employee.jpg",
    tags: ["Python", "AI APIs", "Streamlit", "Prompt Engineering"],
    category: "AI Application",
    featured: true,
    isAI: true,
    liveUrl: "https://personal-ai-employee.streamlit.app",
    githubUrl: "https://github.com/AnamShergill/personal-ai-employee"
  },
  {
    id: 2,
    title: "Physical AI & Humanoid Robotics Book",
    description: "A futuristic AI-native educational platform focused on Physical AI, humanoid robotics, ROS 2, embodied intelligence, simulation systems, and Vision-Language-Action (VLA) architectures through an interactive modern learning experience.",
    image: "/projects/robotics-book.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "AI Concepts", "ROS 2"],
    category: "AI / Robotics",
    featured: true,
    isAI: true,
    isRobotics: true,
    liveUrl: "https://physical-ai-robotics-book.vercel.app",
    githubUrl: "https://github.com/AnamShergill/physical-ai-robotics-book"
  },
  {
    id: 3,
    title: "Levy Consultant Tax Firm",
    description: "A professional tax consultancy and financial services website built with a clean business-focused interface, responsive layouts, and structured service sections designed to improve trust and user experience.",
    image: "/projects/levy-consultant.jpg",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Business",
    featured: true,
    liveUrl: "https://levy-consultant-tax-firm.vercel.app",
    githubUrl: "https://github.com/AnamShergill/levy-consultant"
  },
  {
    id: 4,
    title: "Khan Fish Supplier",
    description: "A modern supplier business website designed for showcasing seafood products and supplier services with responsive layouts, clean branding, and optimized business presentation.",
    image: "/projects/khan-fish.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Business",
    liveUrl: "https://khan-fish-supplier.vercel.app",
    githubUrl: "https://github.com/AnamShergill/khan-fish-supplier"
  },
  {
    id: 5,
    title: "Burger E-Commerce Website",
    description: "A modern burger ordering and e-commerce style website featuring interactive product sections, responsive layouts, modern UI styling, and engaging food-focused design.",
    image: "/projects/burger-ecommerce.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "E-Commerce",
    liveUrl: "https://burger-ecommerce.vercel.app",
    githubUrl: "https://github.com/AnamShergill/burger-ecommerce"
  },
  {
    id: 6,
    title: "Hackathon E-Commerce Website",
    description: "A responsive e-commerce web application developed during a hackathon focusing on rapid UI development, scalable layouts, and modern frontend implementation.",
    image: "/projects/hackathon-ecommerce.jpg",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    category: "E-Commerce",
    featured: true,
    liveUrl: "https://hackathon-ecommerce.vercel.app",
    githubUrl: "https://github.com/AnamShergill/hackathon-ecommerce"
  },
  {
    id: 7,
    title: "AI Todo Chatbot",
    description: "An AI-integrated productivity chatbot application designed to manage tasks, organize workflows, and improve user productivity through conversational task management.",
    image: "/projects/ai-todo.jpg",
    tags: ["Python", "Streamlit", "AI APIs"],
    category: "AI Application",
    isAI: true,
    liveUrl: "https://ai-todo-chatbot.streamlit.app",
    githubUrl: "https://github.com/AnamShergill/ai-todo-chatbot"
  },
  {
    id: 8,
    title: "Modern Charity Website",
    description: "A charity-focused responsive website designed with modern Bootstrap layouts, accessibility-focused sections, and clean UI components optimized for multiple devices.",
    image: "/projects/charity.jpg",
    tags: ["Bootstrap", "CSS", "JavaScript"],
    category: "Frontend",
    liveUrl: "https://modern-charity.vercel.app",
    githubUrl: "https://github.com/AnamShergill/modern-charity"
  },
  {
    id: 9,
    title: "Password Strength Checker",
    description: "A password validation and security-focused utility application designed to analyze password strength, improve security awareness, and provide real-time feedback to users.",
    image: "/projects/password-checker.jpg",
    tags: ["Python", "Streamlit"],
    category: "Utility Tool",
    liveUrl: "https://password-strength-checker.streamlit.app",
    githubUrl: "https://github.com/AnamShergill/password-checker"
  },
  {
    id: 10,
    title: "Food Recipe Website",
    description: "A modern food and recipe website designed with engaging content sections, recipe-focused layouts, responsive cards, and user-friendly browsing experience.",
    image: "/projects/food-recipe.jpg",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    liveUrl: "https://food-recipe-website.vercel.app",
    githubUrl: "https://github.com/AnamShergill/food-recipe"
  },
  {
    id: 11,
    title: "Growth Mindset Challenge",
    description: "An interactive personal development application focused on motivation, self-improvement, and productivity through engaging growth mindset challenges and user interaction.",
    image: "/projects/growth-mindset.jpg",
    tags: ["Python", "Streamlit"],
    category: "Productivity",
    liveUrl: "https://growth-mindset-challenge.streamlit.app",
    githubUrl: "https://github.com/AnamShergill/growth-mindset"
  },
  {
    id: 12,
    title: "Mobile Landing Page",
    description: "A responsive mobile-inspired landing page project focused on layout structuring, clean UI hierarchy, and mobile-first frontend design principles.",
    image: "/projects/mobile-landing.jpg",
    tags: ["HTML", "CSS"],
    category: "Landing Page",
    liveUrl: "https://mobile-landing-page.vercel.app",
    githubUrl: "https://github.com/AnamShergill/mobile-landing"
  }
]

export const experience = [
  {
    year: "2023",
    title: "Started Coding Journey",
    description: "Began learning web development fundamentals in February 2023 - HTML, CSS, and JavaScript"
  },
  {
    year: "2023",
    title: "First Web Projects",
    description: "Built my first websites and started exploring responsive design principles"
  },
  {
    year: "2024",
    title: "Joined SMIT",
    description: "Enrolled in Saylani Mass IT Training program to strengthen my grip on modern web development"
  },
  {
    year: "2024",
    title: "React & Modern Frameworks",
    description: "Mastered React and started building component-based applications with modern tools"
  },
  {
    year: "2024",
    title: "Hackathon Participation",
    description: "Participated in multiple hackathons, collaborating with teams and building real-world projects"
  },
  {
    year: "2025",
    title: "AI & Advanced Development",
    description: "Started exploring AI tools, Python, and building intelligent web applications"
  },
  {
    year: "2026",
    title: "Professional Portfolio",
    description: "Mastering Next.js, TypeScript, and building production-ready applications with AI integration"
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
