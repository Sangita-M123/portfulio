import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  expressjs,
  java,
  eduonix,
  slashMark,
  food,
  expense,
  ichat,
  cer1,
  cer2,
  cer3,
  cer4,
  cer5,
  cer6,
  gfg,
  hackerrank,
  leetcode,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full stack Developer",
    icon: creator,
  },
  {
    title: "java (Data Structure & Algorithm)",
    icon: web,
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
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

  {
    name: "java",
    icon: java,
  },
  {
    name: "express js",
    icon: expressjs,
  },
];

const experiences = [
  // {
  //   title: "React.js Developer",
  //   company_name: "Starbucks",
  //   icon: starbucks,
  //   iconBg: "#383E56",
  //   date: "March 2020 - April 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Web Developer",
    company_name: "eduonix",
    icon: eduonix,
    iconBg: "#383E56",
    date: "oct 2024 - Dec 2024",
    points: [
      "Developing and maintaining web applications using Html , Css and JavaScript and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "slashMark",
    icon: slashMark,
    iconBg: "#E6DEDD",
    date: "Jan 15-2024 - April 15-2024",
    points: [
      "Developing and maintaining web applications using React.js,Express.js,Node.js,MongoDB and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Passionate coder with a knack for solving complex problems and building efficient, scalable solutions. Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape",
    name: "GeeksforGeeks",
    link: "https://auth.geeksforgeeks.org/user/sangitamesk7kk",
    image: gfg,
  },
  {
    testimonial:
      "Enthusiastic developer with a strong foundation in algorithms and software development. Committed to writing clean, maintainable code and continuously improving my skills.",
    name: "LeetCode",
    link: "https://leetcode.com/u/sangita1234/",
    image: leetcode,
  },
  {
    testimonial:
      "Creative and detail-oriented programmer who loves turning ideas into functional, high-performance code",
    name: "Hackerrank",
    link: "https://www.hackerrank.com/profile/sangitameshram91",
    image: hackerrank,
  },
];

const projects = [
  {
    name: "Food Services",
    description:
      "This application saves our time, the process consists of a customer choosing the restaurant of their choice, scanning the menu items, and finally choosing for pick-up or delivery.",
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
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: food,
    project_link: "https://eat-stol1.onrender.com/",
    source_code_link: "https://github.com/Sangita-M123/eat-stol1",
  },
  {
    name: "Express Tracker",
    description:
      "easily track spending , identity areas  for improvement, and make data-driven decision with our innovative expense tracker. our intuitive tracker app helps you monitor spending , set financial goals,and achieve a more stable financial future. ",
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
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "red-text-gradient",
      },
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
    ],
    image: expense,
    project_link: "https://exp-tracker-8.onrender.com/",
    source_code_link: "https://github.com/Sangita-M123/exp_tracker",
  },
  {
    name: "Ichat",
    description:
      "chatapp is an innovative and user friendly messaging platform that connects people around the world.",
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
        name: "Socketio",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: ichat,
    project_link: "https://mern-chat-r129.onrender.com/login",
    source_code_link: "https://github.com/Sangita-M123/mern-chat",
  },
];

const certificates = [
  {
    image: cer1,
  },
  {
    image: cer2,
  },
  {
    image: cer3,
  },
  {
    image: cer4,
  },
  {
    image: cer5,
  },
  {
    image: cer6,
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  certificates,
};
