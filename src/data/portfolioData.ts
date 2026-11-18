const BASE_URL = import.meta.env.BASE_URL;

export const SITE = {
  name: 'Raj Kumar',
  pageTitle: 'Raj Kumar | Software Developer',
  role: 'MCA Candidate · Software Developer',
  email: 'rajgupta82289@gmail.com',
  phone: '918228957219',
  displayPhone: '+91 82289 57219',
  whatsappMessage: 'Hi Raj, I visited your portfolio and would like to get in touch.',
  available: true,
};

export const HERO = {
  eyebrow: 'MCA CANDIDATE · SOFTWARE DEVELOPER',
  headline: 'RAJ KUMAR',
  roles: ['SOFTWARE DEVELOPER', 'MCA CANDIDATE'] as [string, string],
  tagline: 'Building practical digital solutions with Java, Spring Boot, Python and applied AI.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'GET IN TOUCH',
  image: `${BASE_URL}assets/raj-kumar-hero.jpg`,
  imageAlt: 'Raj Kumar, software developer',
  imagePosition: 'center center',
};

export const LOADER = {
  statement: 'BUILDING PRACTICAL SOFTWARE WITH PURPOSE',
  redWords: ['PRACTICAL', 'PURPOSE'],
};

export const ABOUT = {
  eyebrow: 'MCA CANDIDATE · SOFTWARE DEVELOPER · DEHRADUN',
  portrait: `${BASE_URL}media/raj-kumar-profile.jpg`,
  portraitAlt: 'Portrait of Raj Kumar',
  portraitCaption: 'MCA Candidate',
  paragraphs: [
    'I’m Raj Kumar, an MCA candidate focused on Java, Spring Boot, Python and applied AI. I turn real-world problems into secure applications and useful tools.',
    'My project work includes a role-based blood donation management application and an AI-powered healthcare prediction project. I’m looking to grow as a software developer and contribute to practical, user-focused products.',
  ],
  technologies: ['Java', 'Spring Boot', 'Python', 'SQL', 'TensorFlow', 'MySQL'],
  focus: ['Backend Development', 'Applied AI', 'Data Analytics'],
};

export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/raj-kumar-gupta' },
] as const;

export const NAV_ITEMS = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'Java', category: 'Spring Boot · Spring Security', level: 'Project Use' },
  { name: 'Python', category: 'TensorFlow · Keras · Streamlit', level: 'Project Use' },
  { name: 'Databases', category: 'SQL · MySQL', level: 'Development' },
  { name: 'Web Development', category: 'HTML5 · CSS3 · JavaScript', level: 'Frontend' },
  { name: 'Data Analytics', category: 'Excel · Power BI · Tableau', level: 'Analytics' },
  { name: 'Computer Science', category: 'OOP · Data Structures & Algorithms', level: 'Foundation' },
];

export const TECH_STACK: string[] = [
  'Java',
  'Spring Boot',
  'Python',
  'TensorFlow',
  'MySQL',
  'JavaScript',
];

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'raktasetu',
    kind: 'software',
    title: 'RaktaSetu',
    subtitle: 'Blood donation management system',
    category: 'WEB APPLICATION',
    poster: `${BASE_URL}assets/thumbnails/raktasetu.jpg`,
    description:
      'A role-based web application built to connect blood donors and people requesting blood, with donor and request management features.',
    tags: ['Java', 'Spring Boot', 'MySQL'],
  },
  {
    id: 'medipredict-ai',
    kind: 'software',
    title: 'MediPredict AI',
    subtitle: 'AI-powered healthcare prediction',
    category: 'AI / MACHINE LEARNING',
    poster: `${BASE_URL}assets/thumbnails/medipredict-ai.jpg`,
    description:
      'An academic healthcare prediction project using Python, TensorFlow and Keras, with a Streamlit interface.',
    tags: ['Python', 'TensorFlow', 'Keras', 'Streamlit'],
  },
];

export const PORTFOLIO_STATS = [
  { id: 'stat-1', value: 2, suffix: '', label: 'FEATURED PROJECTS' },
  { id: 'stat-2', value: 20, suffix: '', label: 'TECHNOLOGIES & TOOLS' },
  { id: 'stat-3', value: 2, suffix: '', label: 'ACADEMIC QUALIFICATIONS' },
] as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;
