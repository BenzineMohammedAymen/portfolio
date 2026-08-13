// Central content file. All text uses simple, clear English (B2 level).

import piopetroLogo from "../assets/logos/piopetro.png";
import kasdiMerbahLogo from "../assets/logos/kasdi-merbah.png";
import nvidiaLogo from "../assets/logos/nvidia.png";
import aiNexusLogo from "../assets/logos/ai-nexus.png";

export const profile = {
  name: "Mohammed Aymen Benzine",
  roles: ["AI Engineer", "Data Scientist", "Software Engineer", "IT Infrastructure Engineer"],
  tagline:
    "I build smart systems, useful data tools, and software that solves real problems, from medical AI research to enterprise IT networks.",
  email: "benzineaymn2017@gmail.com",
  phone: "+213 673 809 977",
  location: "Ouargla, Algeria",
  linkedin: "https://www.linkedin.com/in/mohammed-aymen-benzine-552b7427a",
  github: "https://github.com/BenzineMohammedAymen",
};

export const heroStats = [
  { value: "M.Sc.", label: "AI & Data Science, Top 3 graduate, Five-Star Student" },
  { value: "4+", label: "Years of freelance development work" },
  { value: "98%", label: "Teacher model accuracy in my brain tumor research" },
  { value: "8+", label: "AI, web, and business projects completed" },
];

export const about = {
  paragraphs: [
    "My name is **Mohammed Aymen Benzine**. I am a Computer Science Engineer, an AI researcher, and a full-stack developer based in Ouargla, Algeria. I have a **Master's degree in Artificial Intelligence and Data Science** from Kasdi Merbah University. I finished among the **top 3 students** in my class and received the **Five-Star Student** award. My final thesis got an **Excellent grade** and I defended it in front of the academic jury.",
    "My research is about **knowledge distillation**, light deep learning models, and **Explainable AI** for medical images, mainly brain tumor detection. I built a model that keeps over 95% accuracy while cutting the number of parameters by about 87%. This makes AI tools easier to use in hospitals with limited computer power.",
    "I work as an **IT Engineer at ETTR**, where I manage the company's full IT network: VLANs, fiber optic lines, servers, security cameras, and Python/SQL tools that I build myself. As a **freelance developer for over 4 years**, I have built websites, desktop apps, and finance dashboards for real clients.",
    "I also help businesses with **presentation design**: Word reports, Excel sheets, PowerPoint decks, and Canva designs, for people who need clear, professional documents fast.",
    "I co-founded and helped lead **AI Nexus Club Ouargla**, a student group that teaches AI skills and connects students with researchers in our region.",
  ],
  tags: [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Knowledge Distillation",
    "Explainable AI",
    "NLP",
    "React.js",
    "Python",
    "IT Infrastructure",
    "Presentation Design",
    "Community Leadership",
  ],
};

export const education = [
  {
    year: "2023 - 2025",
    degree: "Master's Degree",
    field: "Computer Science, Artificial Intelligence & Data Science",
    school: "Kasdi Merbah University, Ouargla, Algeria",
    logo: kasdiMerbahLogo,
    desc: "I studied machine learning, deep learning, computer vision, and statistics. My final project was about finding brain tumors using a lightweight AI model. I got an Excellent grade and passed my defense in front of the jury.",
    badges: ["Top 3 graduate", "Five-Star Student", "Excellent dissertation", "Jury recognition"],
  },
  {
    year: "2020 - 2023",
    degree: "Bachelor's Degree",
    field: "Computer Science, Information Systems",
    school: "Kasdi Merbah University, Ouargla, Algeria",
    logo: kasdiMerbahLogo,
    desc: "I learned algorithms, databases, software engineering, basic networking, and web development. I finished among the top 3 students. My thesis was about sorting product reviews as positive or negative, with 88% accuracy.",
    badges: ["Top 3 student", "NLP thesis: 88% accuracy"],
  },
];

export const experience = [
  {
    icon: "Brain",
    logo: piopetroLogo,
    role: "Machine Learning Intern",
    company: "PioPetro — Sponsored by SLB, Halliburton & NOV",
    period: "Aug 2026 – Present",
    points: [
      "Selected for the PioPetro Summer Internship Program, an online, industry-backed program supporting the next generation of energy professionals",
      "Apply machine learning techniques to real-world problems in the energy and petroleum sector",
      "Work alongside other student engineers and researchers in a remote team setting, gaining exposure to how AI is used across geoscience, petroleum engineering, and energy operations",
      "Build and evaluate ML models using industry-style datasets, from data cleaning through model evaluation",
      "Strengthen Python-based ML workflows in a professional, industry-sponsored setting",
    ],
    tags: ["Python", "Machine Learning", "Data Analysis", "Energy Sector AI", "Model Evaluation"],
  },
  {
    icon: "Tag",
    logo: "https://www.google.com/s2/favicons?domain=geniussports.com&sz=128",
    role: "Real-Time Data Annotator",
    company: "Genius Sports",
    period: "Jun 2026 – Present",
    points: [
      "Annotate live sporting events in real time, tagging in-game data points used to power sports analytics and data products",
      "Maintain high accuracy and speed while working against strict live-event time constraints",
      "Follow detailed, sport-specific data collection standards to keep data consistent and reliable",
      "Support downstream systems, such as analytics platforms and broadcast graphics, that depend on accurate real-time data",
      "Work as part of a distributed, global data operations team",
    ],
    tags: ["Real-Time Data", "Sports Analytics", "Data Annotation", "Quality Assurance", "Remote Collaboration"],
  },
  {
    icon: "Cpu",
    role: "AI & Systems Engineer",
    company: "ETTR, Entreprise de Terrassement et Travaux Routiers, Ouargla, Algeria",
    period: "Oct 2025 – Present",
    points: [
      "Designed and deployed real-time object detection (YOLOv8) pipelines optimized with ONNX Runtime, Docker, and FastAPI for low-latency edge deployment",
      "Built custom internal desktop applications (Python, PySide6, SQL) for project budget analysis, KPI tracking, and automated equipment rental management",
      "Architected and managed the enterprise's entire IT infrastructure, executing a seamless zero-downtime migration to fiber optics",
      "Administered local servers, VLANs, LAN networks, CCTV security systems, and VOIP telephony across all operations",
    ],
    tags: ["YOLOv8", "ONNX Runtime", "Docker", "FastAPI", "Python", "PySide6", "VLAN", "Fiber Optics"],
  },
  {
    icon: "Laptop",
    role: "Freelance AI Consultant & Full-Stack Developer",
    company: "Self-employed, Ouargla, Algeria",
    period: "Sep 2021 – Present",
    points: [
      "Architected and delivered end-to-end SaaS platforms (React.js, Next.js, Node.js) and robust desktop applications (PySide6, JavaFX) for B2B clients",
      "Developed custom ML and data analytics tools, including predictive dashboards, NLP classification models, and RESTful API integrations",
      "Designed intuitive UI/UX workflows in Figma and implemented secure, role-based authentication systems (Supabase, PostgreSQL)",
      "Provided high-level business intelligence, data modeling, and reporting solutions to streamline client operations",
    ],
    tags: ["React.js", "Next.js", "Node.js", "PySide6", "JavaFX", "Figma", "Supabase", "PostgreSQL", "NLP"],
  },
  {
    icon: "FlaskConical",
    role: "Software Engineering Intern",
    company: "SAA, Société Nationale d'Assurance, Ouargla, Algeria",
    period: "Apr 2023",
    points: [
      "Contributed to enterprise web application development utilizing AngularJS and Spring MVC",
      "Gained hands-on experience in secure corporate networking and large-scale IT system architecture",
    ],
    tags: ["AngularJS", "Spring MVC", "Enterprise Architecture", "Networking"],
  },
];

export const leadership = [
  {
    icon: "Bot",
    logo: aiNexusLogo,
    org: "AI Nexus Club, Ouargla",
    role: "Co-Founder & Co-Leader",
    link: "https://www.linkedin.com/company/ai-nexus-club-ouargla/",
    linkLabel: "View organization on LinkedIn",
    period: "Mar 2024 – Jun 2025",
    desc: "I helped start and run AI Nexus Club Ouargla, a student group that teaches people about Artificial Intelligence. We organized learning activities, helped students and researchers share knowledge, and built a small but active AI community in our city.",
    points: [
      "Helped start the AI community from zero",
      "Co-led club events and activities",
      "Organized AI workshops and study sessions",
      "Spread AI awareness across the university",
      "Worked together with students and researchers",
      "Took part in real AI project work",
      "Shared knowledge and mentored newer members",
      "Helped build a lasting local AI community",
    ],
    tags: ["Community Leadership", "AI Advocacy", "Event Organization", "Mentorship", "Research Collaboration"],
  },
  {
    icon: "Network",
    logo: "https://www.451alliance.com/Portals/5/451Alliance_spg_pos_rgb_Medium-PNG.png",
    org: "451 Alliance",
    role: "Member",
    link: "https://www.451alliance.com/",
    linkLabel: "Visit the 451 Alliance",
    period: "Aug 2026 – Present",
    desc: "Became an official member of the 451 Alliance, an invitation-only global network of IT and business professionals under S&P Global / 451 Research. Members contribute to ongoing industry surveys and, in return, get access to research, reports, and insights on enterprise technology and business trends.",
    points: [
      "Joined a global think tank of IT and business professionals",
      "Contribute to industry research through member surveys",
      "Access exclusive reports and insights on enterprise technology trends",
    ],
    tags: ["Industry Research", "Enterprise IT Trends", "Global Network"],
  },
];

export const skills = [
  {
    icon: "BrainCircuit",
    name: "Artificial Intelligence / MLOps",
    color: "indigo",
    items: ["Machine Learning", "Deep Learning", "Knowledge Distillation", "Model Compression", "Transfer Learning", "MobileNetV2", "TensorFlow", "Keras", "Scikit-learn", "Docker", "FastAPI", "ONNX Runtime"],
  },
  {
    icon: "BarChart3",
    name: "Data Science",
    color: "cyan",
    items: ["EDA", "Feature Engineering", "Statistics", "Predictive Modeling", "Data Visualization", "Forecasting", "Regression", "Classification"],
  },
  {
    icon: "Eye",
    name: "Computer Vision",
    color: "emerald",
    items: ["Image Classification", "Medical Imaging", "CNN", "Grad-CAM", "LRP", "Explainable AI"],
  },
  {
    icon: "MessageSquare",
    name: "NLP",
    color: "amber",
    items: ["Sentiment Analysis", "Text Classification", "LSTM", "Sequence Modeling", "Text Preprocessing"],
  },
  {
    icon: "Code2",
    name: "Programming",
    color: "violet",
    items: ["Python ★", "JavaScript", "TypeScript", "Java", "SQL", "HTML5 / CSS3"],
  },
  {
    icon: "Globe",
    name: "Web & App Dev",
    color: "rose",
    items: ["React.js", "Next.js", "JavaFX", "PySide6", "REST APIs", "Auth Systems", "Figma", "Electron"],
  },
  {
    icon: "Database",
    name: "Databases",
    color: "amber",
    items: ["PostgreSQL", "Oracle", "MySQL", "SQL Server", "Data Modeling", "Query Optimization"],
  },
  {
    icon: "Network",
    name: "IT Infrastructure",
    color: "cyan",
    items: ["LAN / VLAN", "DNS / DHCP", "Windows Server", "Fiber Optics", "TCP/IP", "CCTV", "Telephony"],
  },
  {
    icon: "Presentation",
    name: "Presentations & Design",
    color: "indigo",
    items: ["Microsoft Word", "Microsoft Excel", "PowerPoint", "Canva", "Report Writing", "Slide Design"],
  },
];

export const researchInterests = [
  { icon: "Layers", name: "Knowledge Distillation & Model Compression", desc: "Ultra-lightweight neural nets (DisWOT, quantization, pruning) for edge devices" },
  { icon: "Waves", name: "Physics-Informed & Hybrid AI (Oil & Gas)", desc: "PINNs for geophysical modeling, seismic inversion & reservoir characterization" },
  { icon: "Gauge", name: "Real-Time Drilling & Hoisting Optimization", desc: "RL & physics-guided ML for ROP optimization and drilling hazard detection" },
  { icon: "ShieldCheck", name: "Computer Vision & Edge AI for Industrial Safety", desc: "YOLO & Vision Transformers with ONNX Runtime for rig floor monitoring" },
  { icon: "Puzzle", name: "Semi-Supervised & Self-Supervised Learning", desc: "Data-efficient models for medical imaging & subsurface data interpretation" },
  { icon: "Search", name: "Explainable AI (XAI)", desc: "LRP & Grad-CAM for transparent, trustworthy AI in critical applications" },
];

export const research = {
  title: "Improving Brain Tumor Detection Using Neural Lightweight Distillation Techniques",
  link: "https://dspace.univ-ouargla.dz/jspui/handle/123456789/40042",
  meta: [
    { icon: "MapPin", text: "Kasdi Merbah University, Ouargla, Algeria" },
    { icon: "GraduationCap", text: "M.Sc. AI & Data Science" },
    { icon: "Award", text: "Excellent Grade · Jury Recognition" },
    { icon: "Calendar", text: "Defended June 2025" },
  ],
  paragraphs: [
    "This research solves a real problem: AI models that find brain tumors in MRI scans are usually too big and slow for hospitals with limited computers. I built a smaller, faster model using **Knowledge Distillation**. I took a strong 'teacher' model (MobileNetV2, 18 million parameters, 98% accuracy) and trained a much smaller 'student' model (about 2.25 million parameters) that still keeps over 95% accuracy.",
    "I used the **DisWOT method** to search for the best small model design, comparing models by how similar their internal patterns were to the teacher. The training combined four types of loss: semantic loss, relation loss, knowledge distillation loss, and normal classification loss.",
    "I also compared two ways to explain AI decisions: **LRP** and **Grad-CAM**. LRP gave clearer and more trustworthy results for showing exactly where a tumor is, which matters a lot for doctors who need to trust AI suggestions.",
  ],
  findings: [
    { num: "98%", label: "Teacher model accuracy (MobileNetV2)" },
    { num: ">95%", label: "Student model accuracy kept" },
    { num: "~87%", label: "Fewer parameters in the final model" },
    { num: "LRP", label: "Clearer results for medical use" },
  ],
  awards: ["Excellent dissertation grade", "Successful thesis defense", "Academic jury recognition", "Top 3 graduate"],
};

export const certifications = [
  { icon: "MonitorCheck", logo: nvidiaLogo, title: "Deep Learning Fundamentals", org: "NVIDIA Corporation", tag: "Industry certificate", color: "cyan" },
  { icon: "Star", logo: kasdiMerbahLogo, title: "Five-Star Student Certificate", org: "Kasdi Merbah University, Ouargla", tag: "Academic excellence", color: "amber" },
  { icon: "Award", logo: kasdiMerbahLogo, title: "Top 3 Graduate: M.Sc. AI & Data Science", org: "Kasdi Merbah University, Ouargla", tag: "Academic excellence", color: "violet" },
  { icon: "Wallet", title: "Financial Literacy Training", org: "Career Center, University of Ouargla", tag: "Professional skill", color: "emerald" },
  { icon: "PenLine", logo: kasdiMerbahLogo, title: "Write It Right Workshop", org: "Kasdi Merbah University, Ouargla", tag: "Academic skill", color: "indigo" },
  { icon: "Bot", title: "Introduction to Artificial Intelligence", org: "Online certification", tag: "AI basics", color: "amber" },
];

export const achievements = [
  { icon: "Award", title: "Top 3 Graduate", desc: "Among the top 3 students in both my Bachelor's and Master's degrees" },
  { icon: "Star", title: "Five-Star Student", desc: "University award for strong academic performance" },
  { icon: "FileCheck2", title: "Excellent Dissertation", desc: "Top grade for my thesis, defended in front of the jury" },
  { icon: "MonitorCheck", title: "NVIDIA Certified", desc: "Deep Learning Fundamentals, an official industry certificate" },
  { icon: "Users", title: "AI Nexus Co-Founder", desc: "Helped build a university AI community from nothing" },
  { icon: "Settings", title: "4+ Years Freelancing", desc: "Steady delivery of software and IT consulting work" },
  { icon: "Target", title: "98% Model Accuracy", desc: "Teacher model in my brain tumor research" },
  { icon: "Building2", title: "Enterprise IT Lead", desc: "Run the full IT network at a road construction company" },
];

export const projects = [
  {
    id: "brain",
    category: ["ai", "cv"],
    type: "Master's Thesis",
    typeColor: "indigo",
    catTag: "AI / Medical",
    catColor: "indigo",
    title: "Brain Tumor Detection via Lightweight Neural Distillation",
    desc: "A smaller, faster AI model that finds brain tumors in MRI scans. Built using knowledge distillation, keeping high accuracy with far fewer parameters.",
    metrics: ["98% teacher accuracy", ">95% student accuracy", "~87% smaller model"],
    stack: ["TensorFlow", "Python", "LRP", "Grad-CAM", "XAI"],
    github: "https://github.com/BenzineMohammedAymen",
    paper: "https://dspace.univ-ouargla.dz/jspui/handle/123456789/40042",
    modal: {
      subtitle: "Master's Thesis · Kasdi Merbah University · 2025 · Excellent Grade",
      sections: [
        { title: "The Problem", text: "Good MRI tumor models need a lot of computer power. Many hospitals cannot afford that." },
        { title: "My Solution", text: "I used knowledge distillation and the DisWOT method to build a smaller model that learns from a bigger, accurate one." },
        { title: "Key Numbers", text: "Teacher: MobileNetV2, 18M parameters, 98% accuracy. Student: about 2.25M parameters, over 95% accuracy." },
        { title: "Why It Matters", text: "A model 87% smaller can run on basic hospital computers, while LRP makes the AI's decisions easier for doctors to trust." },
      ],
    },
  },
  {
    id: "cancer",
    category: ["ai", "data"],
    type: "Clinical ML",
    typeColor: "cyan",
    catTag: "Medical AI",
    catColor: "cyan",
    title: "Predict Survival in Colorectal Cancer",
    desc: "A machine learning project that predicts survival chances for colorectal cancer patients, using real clinical data and survival analysis methods.",
    metrics: ["Survival analysis", "Clinical machine learning"],
    stack: ["Python", "Scikit-learn", "Pandas", "Kaplan-Meier"],
    github: "https://github.com/BenzineMohammedAymen/Predict-Survival-in-Colorectal-Cancer",
    modal: {
      subtitle: "Clinical ML · Python · Jupyter Notebook",
      sections: [
        { title: "Overview", text: "I built a model that predicts how patient outcomes change over time, using clinical data." },
        { title: "Methods", text: "I used Kaplan-Meier survival curves, cleaned and prepared clinical data, then trained and compared several models." },
      ],
    },
  },
  {
    id: "mental",
    category: ["ai"],
    type: "NLP Research",
    typeColor: "indigo",
    catTag: "NLP / LSTM",
    catColor: "violet",
    title: "Mental Health Classification Using LSTM",
    desc: "A deep learning model that reads text and detects signs of mental health conditions like anxiety or depression using LSTM neural networks.",
    metrics: ["LSTM sequence model", "Text classification"],
    stack: ["Python", "TensorFlow", "LSTM", "Keras"],
    github: "https://github.com/BenzineMohammedAymen/Mental-Health-Using-LSTM",
    modal: {
      subtitle: "NLP · LSTM · TensorFlow",
      sections: [
        { title: "Overview", text: "This model reads written text and looks for language patterns linked to mental health conditions." },
        { title: "Approach", text: "Text cleaning, tokenization, an embedding layer, stacked LSTM layers, and a final classification layer." },
      ],
    },
  },
  {
    id: "sentiment",
    category: ["ai", "data"],
    type: "Bachelor's Thesis / NLP",
    typeColor: "indigo",
    catTag: "NLP",
    catColor: "emerald",
    title: "Product Reviews Sentiment Analysis",
    desc: "A system that reads product reviews and decides if they are positive or negative, reaching 88% accuracy. This was my Bachelor's thesis project.",
    metrics: ["88% accuracy", "Binary classification"],
    stack: ["Python", "Scikit-learn", "NLP"],
    github: "https://github.com/BenzineMohammedAymen",
    modal: {
      subtitle: "Bachelor's Thesis · NLP · Python · Scikit-learn",
      sections: [
        { title: "Overview", text: "A full pipeline that takes raw review text and predicts whether it is positive or negative." },
        { title: "Methods & Results", text: "Text cleaning, TF-IDF features, and tests with Naive Bayes, SVM, and Logistic Regression. Final accuracy: 88%." },
      ],
    },
  },
  {
    id: "fruit",
    category: ["ai", "cv"],
    type: "Computer Vision",
    typeColor: "amber",
    catTag: "Computer Vision",
    catColor: "amber",
    title: "Binary Image Classification: Apple vs Lemon",
    desc: "A CNN model that looks at a photo and tells if it shows an apple or a lemon, reaching over 95% accuracy.",
    metrics: [">95% accuracy", "CNN classifier"],
    stack: ["Python", "TensorFlow", "CNN"],
    github: "https://github.com/BenzineMohammedAymen/Binary-Classification-Appel-VS-Lemon-",
    modal: {
      subtitle: "Computer Vision · CNN · TensorFlow",
      sections: [
        { title: "Overview", text: "A simple but complete computer vision pipeline: load images, train a CNN, and test the results." },
        { title: "Results", text: "Convolution and pooling layers with a final classification layer, reaching over 95% accuracy." },
      ],
    },
  },
  {
    id: "money",
    category: ["web", "data"],
    type: "Web Application",
    typeColor: "emerald",
    catTag: "FinTech",
    catColor: "emerald",
    title: "Money Hub: Personal Finance Tracker",
    desc: "A web app that helps people track their income, spending, and savings, with simple charts and a basic forecast tool.",
    metrics: ["Finance tracking", "Spending forecast"],
    stack: ["React.js", "JavaScript", "REST API"],
    github: null,
    modal: {
      subtitle: "React.js · JavaScript · REST API",
      sections: [
        { title: "Overview", text: "An app for tracking income, spending, debts, and savings, with clear charts and reports." },
        { title: "Key Features", text: "Spending by category, income vs. expenses, savings goals, and a simple forecast tool." },
      ],
    },
  },
  {
    id: "sanadi",
    category: ["web"],
    type: "Web Platform",
    typeColor: "rose",
    catTag: "SaaS Platform",
    catColor: "violet",
    title: "Sanadi: Kindergarten Management Platform",
    desc: "A management tool for a kindergarten, handling enrollment, payments, and staff, with different access levels for admins, staff, and parents.",
    metrics: ["Role-based access", "Multi-user platform"],
    stack: ["React.js", "JavaScript", "Auth"],
    github: null,
    modal: {
      subtitle: "React.js · JavaScript · Role-Based Access",
      sections: [
        { title: "Overview", text: "A full platform for managing a kindergarten: enrolling children, tracking payments, and managing staff." },
        { title: "Design", text: "Three access levels (admin, staff, parents), built as a simple, easy-to-use web app." },
      ],
    },
  },
  {
    id: "budget",
    category: ["infra", "data"],
    type: "Enterprise System",
    typeColor: "rose",
    catTag: "Enterprise IT",
    catColor: "emerald",
    title: "Budget Analysis System, ETTR",
    desc: "An internal tool that tracks construction project budgets: costs, progress, and profit, with automatic alerts when a project goes over budget.",
    metrics: ["KPI dashboards", "Budget alerts"],
    stack: ["Python", "SQL", "PySide6"],
    github: null,
    modal: {
      subtitle: "Python · SQL · PySide6 · Internal Tool",
      sections: [
        { title: "Overview", text: "A desktop tool that tracks budgets across several construction sites: costs, progress, and profit margins." },
        { title: "Features", text: "Combines data from several sources, tracks budget use per project, and sends alerts when spending is too high." },
      ],
    },
  },
  {
    id: "equip",
    category: ["infra"],
    type: "Enterprise System",
    typeColor: "rose",
    catTag: "Enterprise IT",
    catColor: "rose",
    title: "Equipment Rental Management System, ETTR",
    desc: "A desktop app that tracks rented equipment by supplier, checks costs automatically against the budget, and warns the team if spending is too high.",
    metrics: ["Automatic budget checks", "Spending alerts"],
    stack: ["Python", "SQL", "PySide6"],
    github: null,
    modal: {
      subtitle: "Python · SQL · PySide6 · Business Rules",
      sections: [
        { title: "Overview", text: "Tracks equipment rentals by supplier and checks every cost against the allowed budget automatically." },
        { title: "Features", text: "Automatic budget checks, alerts for overspending, and safe, consistent data handling." },
      ],
    },
  },
  {
    id: "myservices",
    category: ["web"],
    type: "Freelance Platform",
    typeColor: "emerald",
    catTag: "SaaS Platform",
    catColor: "cyan",
    title: "My Services, Freelance Booking Platform",
    desc: "A website where clients order my freelance services: presentation design, web and app development, writing, research help, and Microsoft Office work. Every order goes into an admin dashboard with live Telegram alerts.",
    metrics: ["Admin dashboard", "Telegram notifications", "Live order tracking"],
    stack: ["React.js", "JavaScript", "Supabase", "REST API"],
    github: null,
    live: "https://my-services-smoky-one.vercel.app/",
    modal: {
      subtitle: "React.js · JavaScript · Supabase · REST API · Telegram Bot",
      sections: [
        { title: "Overview", text: "A booking platform for my freelance work. Clients pick a service (presentations, web apps, writing, research, Microsoft Office documents) and place an order directly on the site." },
        { title: "Admin Dashboard", text: "Every order appears in a private admin dashboard where I can edit details, confirm or cancel an order, and confirm payment, all in one place." },
        { title: "Telegram Alerts", text: "As soon as a client places a new order, I get an instant notification in Telegram, so I never miss a job." },
        { title: "Tech Stack", text: "Built with React.js and JavaScript on the frontend, Supabase for the database and backend, and a REST API connecting everything together." },
      ],
    },
  },
];

