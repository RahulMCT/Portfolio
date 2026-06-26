import { assetUrl } from '../utils/assetUrl';

export const personalInfo = {
  name: 'Rahul Kumar',
  title: 'Java Full Stack Developer | HxGN EAM Technical Consultant',
  location: 'New Delhi, India',
  experience: '3+ Years',
  company: 'MCT India Infotech Pvt Ltd',
  role: 'Software Developer (HxGN EAM / Java Full Stack)',
  email: 'rahulkumarcs0509@gmail.com',
  phone: '+91-9304224945',
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '919304224945',
  whatsappDefaultMessage:
    'Hello Rahul, I came across your portfolio and would like to connect regarding an opportunity.',
  portfolioUrl: 'https://rahulmct.github.io/Portfolio/',
  github: 'https://github.com/RahulMCT',
  linkedin: 'https://www.linkedin.com/in/rahulkumar-26b2bb171/',
  resumeUrl: assetUrl('images/RahulKumar.pdf'),
  profileImage: assetUrl('images/IMG_20211010_220625.jpg'),
  logoImage: assetUrl('images/Icons.jfif'),
  typingRoles: [
    'Java Full Stack Developer',
    'HxGN EAM Consultant',
    'Spring Boot Developer',
    'React Developer',
    'Enterprise Integration Specialist',
  ],
};

export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_igkl7fr',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_pdd0m8e',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'IAFKtsnvii6BVhaQL',
};

export const aboutContent = {
  summary:
    'Results-driven Java Full Stack Developer and HxGN EAM Technical Consultant with 3+ years of experience building enterprise-grade applications. Skilled in Java, Spring Boot, React.js, Ext JS, and REST APIs with a strong track record of delivering customizations for global clients across asset management, logistics, and industrial sectors.',
  objective:
    'To leverage my expertise in enterprise Java development and HxGN EAM customization to build scalable, high-performance solutions that drive business value for organizations worldwide.',
  highlights: [
    { label: 'Experience', value: '3+ Years' },
    { label: 'Current Company', value: 'MCT India Infotech Pvt Ltd' },
    { label: 'Current Role', value: 'Software Developer (HxGN EAM / Java Full Stack)' },
    { label: 'Location', value: 'New Delhi, India' },
  ],
};

export const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', level: 95 },
      { name: 'JavaScript', level: 85 },
      { name: 'SQL', level: 90 },
    ],
  },
  {
    title: 'Frameworks',
    skills: [
      { name: 'Spring Boot', level: 90 },
      { name: 'Spring MVC', level: 85 },
      { name: 'Hibernate', level: 85 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'Ext JS', level: 88 },
      { name: 'HTML5 / CSS3', level: 90 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Java EE', level: 85 },
      { name: 'REST APIs', level: 92 },
      { name: 'JBoss', level: 80 },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'Oracle', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'SQL Server', level: 80 },
    ],
  },
  {
    title: 'Enterprise Platforms',
    skills: [
      { name: 'HxGN EAM (Infor EAM)', level: 92 },
      { name: 'EF Customizations', level: 90 },
      { name: 'Enterprise Integrations', level: 88 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Maven', level: 85 },
      { name: 'Git', level: 90 },
      { name: 'JBoss', level: 80 },
    ],
  },
  {
    title: 'APIs & Version Control',
    skills: [
      { name: 'REST APIs', level: 92 },
      { name: 'Git / GitHub', level: 90 },
      { name: 'Postman', level: 85 },
    ],
  },
];

export const experience = [
  {
    company: 'MCT India Infotech Pvt Ltd',
    role: 'Software Developer (HxGN EAM / Java Full Stack)',
    period: 'May 2023 – Present',
    location: 'New Delhi, India',
    responsibilities: [
      'Develop enterprise applications using Java, Spring Boot, React.js, Ext JS, and REST APIs.',
      'Customize HxGN EAM applications including screens, workflows, business rules, and reports.',
      'Build enterprise integrations for international clients including DHL, WISAG, Nutricia, EVOS, Advario, Veolia, and others.',
      'Design and implement custom REST APIs for third-party system integrations.',
      'Optimize SQL queries and backend performance for production workloads.',
      'Provide production support and troubleshoot critical enterprise issues.',
    ],
    technologies: ['Java', 'Spring Boot', 'React.js', 'Ext JS', 'HxGN EAM', 'Oracle', 'REST APIs'],
  },
  {
    company: 'Technotask Business Solutions (Meesho Client)',
    role: 'Customer Support Associate (L2) / Team Lead',
    period: 'December 2021 – April 2023',
    location: 'India',
    responsibilities: [
      'Worked as an L2 support associate for the Meesho marketplace.',
      'Performed product quality verification before catalog approval.',
      'Managed supplier catalogs and ensured compliance with quality standards.',
      'Led a small operations team and monitored daily productivity.',
      'Assisted suppliers in resolving catalog-related issues.',
      'Improved process quality and maintained operational KPIs.',
    ],
    technologies: ['Operations Management', 'Quality Verification', 'Team Leadership', 'Catalog Management'],
  },
  {
    company: 'Aegis (Starttek)',
    role: 'Customer Support Associate (L1)',
    period: 'February 2020 – August 2021',
    location: 'Bhopal, India',
    responsibilities: [
      'Provided Level 1 customer support by resolving customer queries through calls, chats, and emails.',
      'Understood customer issues and delivered appropriate solutions within SLA timelines.',
      'Escalated complex issues to higher support teams when required.',
      'Maintained high customer satisfaction through effective communication and issue resolution.',
    ],
    technologies: ['Customer Support', 'SLA Management', 'Communication', 'Issue Resolution'],
  },
];

export const enterpriseExperience = {
  title: 'HxGN EAM Enterprise Experience',
  subtitle: 'Enterprise Asset Management Customizations & Integrations',
  clients: ['DHL', 'WISAG', 'Nutricia', 'EVOS', 'Advario', 'Veolia', 'JMB', 'ITQ', 'EMO', 'Evides'],
  capabilities: [
    {
      icon: 'customizations',
      title: 'Enterprise Customizations',
      description: 'Custom screens, forms, and UI extensions using Ext JS and EF framework.',
    },
    {
      icon: 'rules',
      title: 'Business Rules',
      description: 'Implemented complex business logic and validation rules for enterprise workflows.',
    },
    {
      icon: 'workflows',
      title: 'Workflows',
      description: 'Designed and configured approval workflows and automated business processes.',
    },
    {
      icon: 'api',
      title: 'REST APIs',
      description: 'Built and consumed REST APIs for seamless third-party integrations.',
    },
    {
      icon: 'integration',
      title: 'Integrations',
      description: 'Integrated HxGN EAM with external ERP, logistics, and operational systems.',
    },
    {
      icon: 'sql',
      title: 'SQL Optimization',
      description: 'Optimized complex SQL queries for reports, dashboards, and batch processes.',
    },
    {
      icon: 'support',
      title: 'Production Support',
      description: 'Provided L2/L3 support for live enterprise deployments across global clients.',
    },
  ],
};

export const projects = [
  {
    title: 'Enterprise Asset Management (HxGN EAM)',
    description:
      "Enterprise-wide asset management solution customized for multiple international clients. Delivered custom screens, workflows, business rules, reports, and REST API integrations tailored to each client's operational requirements.",
    technologies: ['Java', 'Spring Boot', 'Ext JS', 'HxGN EAM', 'Oracle', 'REST APIs', 'SQL'],
    features: [
      'Custom EF screen development',
      'Workflow automation',
      'Business rule engine customization',
      'REST API integrations',
      'Custom report development',
      'SQL performance optimization',
    ],
    responsibilities: [
      'Led customization of HxGN EAM modules for DHL, WISAG, Nutricia, and other enterprise clients.',
      'Developed REST APIs for third-party system integrations.',
      'Optimized backend SQL queries reducing report generation time.',
      'Provided production support for live deployments.',
    ],
    github: 'https://github.com/RahulMCT',
    image: assetUrl('images/portfolio-banner.png'),
  },
  {
    title: 'MVP Talent Market',
    description:
      'A talent marketplace platform connecting professionals with opportunities. Built with modern full-stack technologies featuring user profiles, job listings, and application management.',
    technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'REST APIs', 'Maven'],
    features: [
      'User registration and authentication',
      'Talent profile management',
      'Job listing and search',
      'Application tracking',
      'RESTful API backend',
    ],
    responsibilities: [
      'Designed and developed REST API endpoints using Spring Boot.',
      'Built responsive React.js frontend components.',
      'Implemented database schema and optimized queries.',
      'Integrated frontend with backend services.',
    ],
    github: 'https://github.com/RahulCs0509',
    image: null,
  },
];

export const achievements = [
  {
    title: '3+ Years Enterprise Development',
    description: 'Delivered production-grade enterprise applications for global clients across multiple industries.',
  },
  {
    title: 'International Client Delivery',
    description: 'Successfully delivered HxGN EAM customizations for DHL, WISAG, Nutricia, Veolia, and 6+ other clients.',
  },
  {
    title: 'Full Stack Expertise',
    description: 'Proficient across the entire stack — from Java/Spring Boot backend to React.js and Ext JS frontend.',
  },
  {
    title: 'SQL Performance Optimization',
    description: 'Improved query performance for enterprise reports and batch processes in production environments.',
  },
  {
    title: 'REST API Integrations',
    description: 'Built robust REST APIs enabling seamless integration between HxGN EAM and external systems.',
  },
  {
    title: 'Production Support',
    description: 'Provided reliable L2/L3 production support for live enterprise deployments.',
  },
];

export const education = [
  {
    degree: 'B.Tech',
    field: 'Computer Science & Engineering',
    institution: 'IES College of Technology',
    location: 'Bhopal, India',
    period: 'Graduated',
  },
  {
    degree: 'Intermediate',
    field: 'Science',
    institution: 'M J K College',
    location: 'Bettiah, Bihar',
    period: 'Completed',
  },
  {
    degree: 'Secondary School (10th)',
    field: 'General',
    institution: 'Khrist Raja Senior Secondary School',
    location: 'Bettiah, Bihar',
    period: '2016',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const socialLinks = [
  { name: 'GitHub', url: personalInfo.github, icon: 'github' },
  { name: 'LinkedIn', url: personalInfo.linkedin, icon: 'linkedin' },
  { name: 'Email', url: `mailto:${personalInfo.email}`, icon: 'email' },
];

export function getWhatsAppUrl(message = personalInfo.whatsappDefaultMessage) {
  const number = personalInfo.whatsappNumber.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
