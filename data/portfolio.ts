export const personalInfo = {
  name: "Anam Shergill",
  role: "Full-Stack & AI Web Developer",
  tagline: "Building modern, fast and SEO-focused web experiences",
  description: "Passionate full-stack developer crafting beautiful web applications with cutting-edge technologies. Specialized in React, Next.js, Node.js, and AI-powered solutions.",
  email: "dev_studio@yahoo.com",
  location: "Pakistan",
  availability: "Available for Freelance",
  github: "https://github.com/AnamShergill",
  linkedin: "https://www.linkedin.com/in/anam-zeeshan-shergill1986/",
  facebook: "https://www.facebook.com/share/1KYcoRzuTd/",
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
    image: "/projects/ai-employee.jpeg",
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
      "Virtual employee concept"
    ],
    badges: ["AI Powered", "Automation", "Future Ready"]
  },
  {
    id: 2,
    title: "Physical AI & Humanoid Robotics Book",
    description: "A futuristic AI-native educational platform focused on Physical AI, humanoid robotics, ROS 2, embodied intelligence, simulation systems, and Vision-Language-Action (VLA) architectures through an interactive modern learning experience.",
    image: "/projects/physical-humanoid.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docusaurus", "ROS 2"],
    category: "AI / Robotics",
    featured: true,
    isAI: true,
    isRobotics: true,
    liveUrl: "https://physical-humaniod-ai-book-8xrs.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/physical-ai-robotics-book",
    highlights: [
      "Built with Docusaurus",
      "Interactive documentation",
      "ROS 2 integration guides",
      "VLA architecture concepts"
    ]
  },
  {
    id: 3,
    title: "Tax Consultant Firm Website",
    description: "A professional tax consultancy and financial services website built with a clean business-focused interface, responsive layouts, and structured service sections designed to improve trust and user experience.",
    image: "/projects/levy-tax.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Business",
    featured: true,
    liveUrl: "https://tax-consultancy-firm.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/levy-consultant",
    highlights: [
      "Professional business design",
      "Service showcase sections",
      "Contact form integration",
      "Mobile-first responsive"
    ]
  },
  {
    id: 4,
    title: "Khan Fish Supplier",
    description: "A modern supplier business website designed for showcasing seafood products and supplier services with responsive layouts, clean branding, and optimized business presentation.",
    image: "/projects/khan-fish.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Business",
    featured: true,
    liveUrl: "https://www.khanfishsupplier.com/",
    githubUrl: "https://github.com/AnamShergill/khan-fish-supplier",
    highlights: [
      "Product catalog display",
      "Business information",
      "Contact integration",
      "Clean modern UI"
    ]
  },
  {
    id: 5,
    title: "Burger E-Commerce Website",
    description: "A modern burger ordering and e-commerce style website featuring interactive product sections, responsive layouts, modern UI styling, and engaging food-focused design.",
    image: "/projects/burger.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "E-Commerce",
    liveUrl: "https://burger-ecommerce-website.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/burger-ecommerce",
    highlights: [
      "Add to cart functionality",
      "Product menu display",
      "Order management",
      "Food-focused design"
    ]
  },
  {
    id: 6,
    title: "Local Lead Response - GHL Website",
    description: "A high-converting lead generation website built on GoHighLevel platform for Local Lead Response, optimized for capturing and converting local business leads with automated follow-up systems.",
    image: "/projects/lead-response.png",
    tags: ["GoHighLevel", "Lead Generation", "Conversion Optimization", "Marketing Automation"],
    category: "Business",
    featured: true,
    liveUrl: "https://sites.leadconnectorhq.com/preview/vUmgBLb12XCUamkZEvHY",
    githubUrl: "https://github.com/AnamShergill/local-lead-response",
    highlights: [
      "Designed a high-converting landing page optimized for local lead generation and automated follow-ups",
      "Integrated optimized lead-capture systems that streamlined inbound client queries",
      "Built on GoHighLevel platform for seamless CRM integration",
      "Conversion-focused design with clear CTAs"
    ]
  },
  {
    id: 7,
    title: "Hackathon E-Commerce Website",
    description: "A responsive e-commerce web application developed during a hackathon focusing on rapid UI development, scalable layouts, and modern frontend implementation.",
    image: "/projects/e-commerce.png",
    tags: ["React", "Tailwind CSS", "JavaScript", "E-Commerce"],
    category: "E-Commerce",
    liveUrl: "https://hackathon-e-commerce-website-liard.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/hackathon-ecommerce",
    highlights: [
      "Add to cart feature",
      "Add to wishlist",
      "Product filtering",
      "Modern React architecture"
    ]
  },
  {
    id: 8,
    title: "AI Todo Chatbot - Kubernetes Deployment",
    description: "An AI-powered productivity chatbot application deployed using Docker and Kubernetes, featuring scalable containerized architecture, cloud-native deployment workflows, and modern DevOps practices.",
    image: "/projects/ai-chat.png",
    tags: ["Python", "Streamlit", "Docker", "Kubernetes", "AI APIs", "DevOps"],
    category: "AI Infrastructure",
    isAI: true,
    isCloudNative: true,
    featured: true,
    githubUrl: "https://github.com/AnamShergill/ai-todo-chatbot",
    highlights: [
      "Kubernetes deployment",
      "Docker containerization",
      "Cloud-native workflow",
      "Scalable architecture"
    ]
  },
  {
    id: 9,
    title: "Modern Charity Website",
    description: "A charity-focused responsive website designed with modern Bootstrap layouts, accessibility-focused sections, and clean UI components optimized for multiple devices.",
    image: "/projects/charity.png",
    tags: ["Bootstrap", "CSS", "JavaScript"],
    category: "Frontend",
    liveUrl: "https://charity-website-bootstrap.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/modern-charity",
    highlights: [
      "Bootstrap framework",
      "Donation sections",
      "Accessibility focused",
      "Responsive grid layout"
    ]
  },
  {
    id: 10,
    title: "Password Strength Checker",
    description: "A password validation and security-focused utility application designed to analyze password strength, improve security awareness, and provide real-time feedback to users.",
    image: "/projects/password-strength.png",
    tags: ["Python", "Streamlit"],
    category: "Utility Tool",
    liveUrl: "https://password-strength-checker-by-anam.streamlit.app/",
    githubUrl: "https://github.com/AnamShergill/password-checker",
    highlights: [
      "Real-time validation",
      "Strength analysis",
      "Security recommendations",
      "Interactive feedback"
    ]
  },
  {
    id: 11,
    title: "Food Recipe Website",
    description: "A modern food and recipe website designed with engaging content sections, recipe-focused layouts, responsive cards, and user-friendly browsing experience.",
    image: "/projects/food-recipe.png",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "Frontend",
    liveUrl: "https://food-blog-beryl.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/food-recipe",
    highlights: [
      "Recipe catalog",
      "Search functionality",
      "Responsive card layout",
      "Food photography display"
    ]
  },
  {
    id: 12,
    title: "Growth Mindset Challenge",
    description: "An interactive personal development application focused on motivation, self-improvement, and productivity through engaging growth mindset challenges and user interaction.",
    image: "/projects/growth-mindset.png",
    tags: ["Python", "Streamlit"],
    category: "Productivity",
    liveUrl: "https://growth-mindset-challenge-anamshergill.streamlit.app/",
    githubUrl: "https://github.com/AnamShergill/growth-mindset",
    highlights: [
      "Interactive challenges",
      "Progress tracking",
      "Motivational content",
      "User engagement features"
    ]
  },
  {
    id: 13,
    title: "Mobile Landing Page",
    description: "A responsive mobile-inspired landing page project focused on layout structuring, clean UI hierarchy, and mobile-first frontend design principles.",
    image: "/projects/mobile.png",
    tags: ["HTML", "CSS"],
    category: "Landing Page",
    liveUrl: "https://smit-css-assignemnt-3-mobile-landing-page.vercel.app/",
    githubUrl: "https://github.com/AnamShergill/mobile-landing",
    highlights: [
      "Mobile-first design",
      "Clean UI hierarchy",
      "Responsive layout",
      "Modern CSS techniques"
    ]
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
    name: "Mehmood Ghulam",
    role: "Proprietor/Owner at Khan Fish Supplier",
    content: "Anam created an outstanding website for Khan Fish Supplier. The design is clean, professional, and perfectly represents our business. Our online presence has significantly improved, and we're getting more inquiries from customers. Highly recommend her work!",
    avatar: "/avatars/avatar1.jpg"
  },
  {
    name: "Adnan Sultan",
    role: "Owner at Tax Consultant Firm",
    content: "Working with Anam was a great experience. She built a professional website for my tax consultancy that perfectly showcases our services. The site is user-friendly, looks modern, and has helped us attract new clients. Excellent attention to detail!",
    avatar: "/avatars/avatar2.jpg"
  },
  {
    name: "Aroon Issac",
    role: "CEO at Local Lead Response & Glorient Home Care Service",
    content: "Anam developed a high-converting website for Local Lead Response using GoHighLevel. Her expertise in GHL and understanding of lead generation is impressive. The website has significantly improved our conversion rates. Based in Arizona, we're thrilled with the results!",
    avatar: "/avatars/avatar3.jpg"
  }
]
