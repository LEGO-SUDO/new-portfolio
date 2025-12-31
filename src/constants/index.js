import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  graphql,
  coverhunt,
  microverse,
  mongo,
  helptogether,
  acmeinc,
  lyntra,
  videotube,
  bombmoney,
  kelhel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Fullstack Developer",
    icon: frontend,
  },
  {
    title: "Frontend Developer",
    icon: ux,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Smart Contract Developer",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongo,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Tria",
    icon: kelhel,
    iconBg: "#333333",
    date: "October 2023 - Present",
  },
  {
    title: "Tech Lead",
    company_name: "GPLAN",
    icon: microverse,
    iconBg: "#333333",
    date: "Jan 2024 - June 2024",
  },

  {
    title: "Software Developer",
    company_name: "Concise Labs",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Sep 2022 - Sep 2023",
  },
  {
    title: "Software Developer Intern",
    company_name: "Consensys",
    icon: microverse,
    iconBg: "#333333",
    date: "June 2022 - Aug 2022",
  },
  {
    title: "Software Developer Intern",
    company_name: "Contenterra",
    icon: coverhunt,
    iconBg: "#333333",
    date: "May 2021 - March 2022",
  },
  // {
  //   title: 'Junior Software Engineer',
  //   company_name: 'Kelhel',
  //   icon: kelhel,
  //   iconBg: '#333333',
  //   date: 'May 2022 - Oct 2022',
  // },
  // {
  //   title: 'Full Stack Developer',
  //   company_name: 'Diversity Cyber Council',
  //   icon: dcc,
  //   iconBg: '#333333',
  //   date: 'Sep 2022 - Present',
  // },
];

const projects = [
  {
    id: "project-1",
    name: "Helptogether",
    description:
      "A web3 crowdfunding app built on ethereum blockchain using. Thirweb, Etherjs, Solidity and Reactjs",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: helptogether,
    repo: "https://github.com/LEGO-SUDO/WEB3CROWDFUNDING",
    demo: "https://helptogether.netlify.app/",
  },
  {
    id: "project-2",
    name: "Lyntra",
    description:
      "An ecommerce app where user can select various products, search for products, apply filter and add to cart.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: lyntra,
    repo: "https://github.com/LEGO-SUDO/LYNTRA",
    demo: "https://lyntra.netlify.app/",
  },
  {
    id: "project-3",
    name: "VideoTube",
    description:
      "Fullstack youtube clone built using reactjs, expres, mongodb and firebase.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: videotube,
    repo: "https://github.com/LEGO-SUDO/VideoTube",
    demo: "https://videotube-lego.netlify.app/",
  },
  {
    id: "project-4",
    name: "AcmeInc",
    description: `An admin dashboard built to display all the relevant information of the business at one place.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: acmeinc,
    repo: "https://github.com/LEGO-SUDO/AcmeInc",
    demo: "https://aceminc.netlify.app/",
  },
  {
    id: "project-5",
    name: "Bomb Money",
    description: "Created the dashboard for an open source Web3 project.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bombmoney,
    repo: "https://github.com/LEGO-SUDO/bomb-dashboard-nakul",
    demo: "https://bomb-dashboard-nakul.netlify.app/dashboard",
  },
];

export { services, technologies, experiences, projects };
