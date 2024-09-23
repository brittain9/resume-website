import {AcademicCapIcon, ArrowDownTrayIcon, CalendarIcon, MapIcon, SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import wikiquizImage from '../images/portfolio/wikiquiz.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Alexander Brittain",
  description: 'A site to showcase my skills and experience',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Alexander Brittain.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a student at <strong className="text-stone-100">The University of Texas at Austin</strong>, currently
        studying
        <strong className="text-stone-100"> Management Information Systems</strong>, where I get to explore my interests
        in both business and technology.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me staying active in the <strong className="text-stone-100">gym</strong>,
        studying at a <strong className="text-stone-100">coffee shop</strong>, or exploring{' '}
        <strong className="text-stone-100">Austin, Texas</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm passionate about creating engaging applications that add real value to users' lives. 
  With three years of programming experience, I've built a strong foundation in the .NET ecosystem and am enhancing my frontend skills with React. 
  My attention to detail ensures high-quality work, and I thrive in collaborative environments. 
  Outside of work, I stay active by biking and going to the gym, and I enjoy reading and being outdoors`,
  aboutItems: [
    {label: 'Location', text: 'Austin, TX', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Interests', text: 'Mountain Biking, Live Music, Jui Jitsu', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Texas at Austin', Icon: AcademicCapIcon},
  ],
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'December 2024',
    location: 'Unversity of Texas at Austin',
    title: 'Bachelor of Business Administration in Management Information Systems',
    link: 'https://www.mccombs.utexas.edu/faculty-and-research/departments/irom/degree-programs/undergraduate/mis/',
    content: (
      <p>
        During my time at the University of Texas at Austin, I have developed a strong understanding of the intersection
        between business and technology. I honed my technical skills in SQL, Python, and C#, and enhanced my teamwork
        abilities through collaborative projects. This combination of technical expertise and collaborative experience
        enables me to effectively tackle complex organizational challenges and work well within a team.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2024 - Present',
    location: 'Data Annotation',
    title: 'AI Data Annotator',
    content: (
      <ul className="list-disc pl-5">
        <li>
          {' '}
          Utilize advanced technical skills to evaluate AI model outputs across coding, math, and reasoning tasks,
          ensuring high standards of correctness and adherence to instructions.{' '}
        </li>
        <li>
          {' '}
          Contribute to RLHF (Reinforcement Learning from Human Feedback) by providing detailed evaluations of AI
          outputs, offering insights on performance and rating responses to refine model behavior.{' '}
        </li>
        <li>
          {' '}
          Demonstrate proficiency in a diverse set of programming languages, including C languages, Python, Bash,
          TypeScript, and more, to thoroughly test and verify code outputs.{' '}
        </li>
        <li>
          {' '}
          Leverage deep understanding of large language models, showcasing familiarity with industry terminology and the
          ability to effectively utilize and navigate these advanced AI systems.{' '}
        </li>
      </ul>
    ),
  },
  {
    date: 'August 2021 - October 2022',
    location: 'University of Texas University Unions',
    title: 'Student Facility Manager',
    content: (
      <ul className="list-disc pl-5">
        <li>
          Ensured a safe environment for an average of 6,500 daily visitors by conducting hourly safety checks and
          coordinating with multiple departments.
        </li>
        <li>
          Managed detailed logs using Microsoft Word and communicated updates via Outlook, demonstrating strong
          organizational and communication skills.
        </li>
        <li>
          Delivered exceptional customer service at the hospitality desk by assisting visitors with directions, tasks,
          and safety measures, including distributing masks and self-test kits.
        </li>
        <li>Enhanced my ability to prioritize safety and multitask effectively in a high-traffic environment.</li>
      </ul>
    ),
  },
];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Business',
    skills: [
      {
        name: 'Communication',
        level: 9,
      },
      {
        name: 'Project Management',
        level: 8,
      },
      {
        name: 'Data Analysis',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML/CSS',
        level: 7,
      },
      {
        name: 'React',
        level: 5,
      },
      {
        name: 'Blazor',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'ASP.NET',
        level: 8,
      },
      {
        name: 'SQL',
        level: 7,
      },
      {
        name: 'Python',
        level: 6,
      },
    ],
  },
  {
    name: 'Tools and Frameworks',
    skills: [
      {
        name: 'Git',
        level: 9,
      },
      {
        name: '.NET',
        level: 7,
      },
      {
        name: 'Azure',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Wikipedia Quiz App',
    description: 'A web app for generating quizes on millions of different topics in nine languages.',
    url: 'https://github.com/brittain9',
    image: wikiquizImage,
    bulletPoints: [
      'Fetches random Wikipedia articles',
      'Generates multiple-choice questions',
      'Tracks previous user quizes',
    ],
    technologies: ['React', 'ASP.NET Core', 'Wikipedia API', 'Microsoft Semantic Kernel'],
    date: 'July 2024',
  },
];

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Interested in connecting? Reach out anytime – I'd love to chat!",
  items: [
    {
      type: ContactType.Email,
      text: 'alexbrittain9@gmail.com',
      href: 'mailto:alexbrittain9@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Austin, TX',
      href: 'https://www.google.com/maps/place/Austin,+TX/@30.3075557,-98.0671994,11z',
    },
    {
      type: ContactType.Github,
      text: 'brittain9',
      href: 'https://github.com/brittain9',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/brittain9'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/alexanderbrittain/'},
];
