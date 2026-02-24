import manage from '../public/assets/projects/manage.png';
import preview from '../public/assets/projects/previewImg.png';
import recipick from '../public/assets/projects/recipick.png';
import interviewFlow from '../public/assets/projects/interview_flow.png';

export const projectsData = [
  {
    id: 'interview-flow',
    title: 'InterviewFlow',
    description:
      'A comprehensive AI-powered interview preparation platform that helps users practice role-specific technical interview questions with real-time guidance from Google Gemini.',
    imageUrl: interviewFlow,
    imageAlt:
      'InterviewFlow platform showing interview practice session with questions and AI assistant',
    url: 'https://interview-flow-sable.vercel.app/',
    code: 'https://github.com/chingu-voyages/V59-tier2-team-22',
    tools: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Google Gemini API',
      'React Router',
    ],
    caseStudy: {
      overview:
        'A full-featured interview preparation platform built collaboratively during Chingu Voyage 59 that provides role-based practice sessions, AI-powered hints, daily challenges, and comprehensive review of interview performance.',
      challenges: [
        'Integrating Google Gemini API for context-aware AI assistance without spoiling answers',
        'Managing complex state for interview sessions, authentication, and chat history',
        'Creating an intuitive multi-step interview flow with role selection and results review',
        'Building an accessible, responsive experience across all devices',
      ],
      solutions: [
        'Implemented React Context API for global state management of auth, interviews, and chat',
        'Built dynamic system prompts for AI that provide hints using interview frameworks like STAR method',
        'Created a modular component architecture with dedicated pages for each interview stage',
        'Used Tailwind CSS utilities and mobile-first design for seamless responsiveness',
        'Integrated localStorage for persistent authentication and session history',
      ],
      results:
        'Deployed on Vercel with 20 randomized questions per session, real-time progress tracking, 3-session history storage, AI chatbot assistance, and daily challenges with full question reviews',
    },
  },
  {
    id: 'recipick',
    title: 'ReciPick',
    description:
      'ReciPick is a JavaScript based tool that allows users to input an ingredient and find recipes that use that specific ingredient.',
    imageUrl: recipick,
    imageAlt:
      'ReciPick application interface showing ingredient search functionality',
    url: 'https://recipick-v46-tier1-team-02.netlify.app/',
    code: 'https://github.com/chingu-voyages/v46-tier1-team-02',
    tools: ['HTML', 'CSS', 'JavaScript'],
    caseStudy: {
      overview:
        'A recipe discovery tool that simplifies finding meals based on available ingredients.',
      challenges: [
        'Designing an intuitive search interface for ingredient input',
        'Managing API calls efficiently to prevent rate limiting',
        'Ensuring fast load times for recipe data',
      ],
      solutions: [
        'Implemented debounced search input to reduce unnecessary API calls',
        'Cached recipe results to improve performance',
        'Used semantic HTML for better accessibility and SEO',
      ],
      results:
        'Reduced API calls by 60%, improved page load time to under 2 seconds, achieved 92 Lighthouse accessibility score',
    },
  },
  {
    id: 'manage',
    title: 'Manage Landing Page',
    description:
      'Landing page project is fully responsive and features a carousel using Swiper. I created this project primarily using Tailwind CSS. It is fully responsive and has some visual changes based on screen/device size.',
    imageUrl: manage,
    imageAlt:
      'Manage landing page showing responsive design with hero section and feature carousel',
    url: 'https://celebrated-biscochitos-f95934.netlify.app/',
    code: 'https://github.com/lawlawson/manage-landing-page',
    tools: ['HTML', 'Tailwind CSS', 'Swiper'],
    caseStudy: {
      overview:
        'A responsive landing page showcasing a SaaS product with interactive carousel components.',
      challenges: [
        'Creating a responsive layout that works across all device sizes',
        'Implementing a smooth carousel without compromising performance',
        'Ensuring accessible keyboard navigation for the carousel',
      ],
      solutions: [
        'Used Tailwind CSS utility classes for responsive design with mobile-first approach',
        'Integrated Swiper library with ARIA attributes for accessible carousel',
        'Optimized images with Next.js Image component',
      ],
      results:
        'Achieved 98 Lighthouse performance score, 100% accessibility score, perfect Core Web Vitals across all devices',
    },
  },
  {
    id: 'markdown-previewer',
    title: 'Markdown Previewer',
    description:
      'Markdown Previewer is a responsive React built project that allows users to input markdown, which is a markup language used to create formatted text.',
    imageUrl: preview,
    imageAlt:
      'Markdown Previewer showing split view with input editor and live preview pane',
    url: 'https://mp-react.netlify.app/',
    code: 'https://github.com/lawlawson/markdown-previewer-react',
    tools: ['React', 'JavaScript', 'CSS'],
    caseStudy: {
      overview:
        'A real-time markdown editor with live preview for testing and learning markdown syntax.',
      challenges: [
        'Rendering markdown safely without XSS vulnerabilities',
        'Maintaining smooth real-time updates as users type',
        'Creating an intuitive split-pane layout',
      ],
      solutions: [
        'Used DOMPurify to sanitize and safely render markdown HTML',
        'Implemented React hooks for efficient state management and debounced updates',
        'Built responsive split-pane UI that stacks on mobile devices',
      ],
      results:
        'Zero security vulnerabilities, instant preview with <100ms render time, responsive across all devices',
    },
  },
];
