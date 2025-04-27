import kafka from "@/public/kafka-retrier.png";
import portfolio from "@/public/portfolio.png";
import survey from "@/public/survey.png";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export const LOREM_50 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolor reprehenderit est numquam at accusantium dolores neque temporibus fuga aperiam molestias quos, et, iure laborum natus! Ex explicabo dicta cupiditate minus aut, sequi facilis corrupti porro commodi inventore libero. Beatae veritatis minima saepe, sint inventore fugit vel quidem quia voluptatum.";
export const LOREM_20 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea praesentium sunt vel harum nesciunt labore corrupti ducimus necessitatibus! Hic!";

export const ROUTES = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Posts",
    path: "/posts",
  },
];

export const WORK_EXPERIENCE = [
  {
    yrsOfExp: "2025 - Present",
    company: "Caratlane Trading Pvt Ltd",
    role: "Senior Software Engineer I",
    location: "Chennai, Tamil Nadu",
    link: "https://www.caratlane.com",
  },
  {
    yrsOfExp: "2023 - 2025",
    company: "Caratlane Trading Pvt Ltd",
    role: "Software Engineer II",
    location: "Chennai, Tamil Nadu",
    link: "https://www.caratlane.com",
    peroid: "1 yr 10 mo",
  },
  {
    yrsOfExp: "2021 - 2023",
    company: "Pickyourtrail",
    role: "SDE I",
    location: "Chennai, Tamil Nadu",
    link: "https://www.pickyourtrail.com",
    peroid: "2 yrs",
  },
  {
    yrsOfExp: "2021",
    company: "Clayfin",
    role: "Software Trainee",
    location: "Chennai, Tamil Nadu",
    link: "https://www.clayfin.com/",
    peroid: "6 mo",
  },
];

export const EDUCATION = [
  {
    yrsOfStudies: "2019 - 2021",
    designation: "Master of Computer Applications (M.C.A)",
    institueName: "Dwaraka Doss Goverdhan Doss Vaishnav College",
    location: "Chennai, Tamil Nadu",
  },
  {
    yrsOfStudies: "2016 - 2019",
    designation: "Bachelor of Computer Applications (B.C.A)",
    institueName: "Dwaraka Doss Goverdhan Doss Vaishnav College",
    location: "Chennai, Tamil Nadu",
  },
  {
    yrsOfStudies: "2016",
    designation: "Higher Secondary",
    institueName: "St.Thomas Matriculation & Hr.sec school",
    location: "Chennai, Tamil Nadu",
  },
];

export const SKILLS = [
  {
    heading: "Languages",
    skills: [
      {
        src: "java.svg",
        name: "Java",
      },
      {
        src: "js.svg",
        name: "JavaScript",
      },
      {
        src: "ts.svg",
        name: "TypeScript",
      },
      {
        src: "ruby.svg",
        name: "Ruby",
      },
    ],
  },
  {
    heading: "Frontend",
    skills: [
      {
        src: "react.svg",
        name: "React",
      },
      {
        src: "next.svg",
        name: "NextJS",
        icon: RiNextjsFill,
      },
      {
        src: "react-native.svg",
        name: "React Native",
      },
      {
        src: "tailwind.svg",
        name: "Tailwind CSS",
      },
      {
        src: "styled-components.svg",
        name: "Styled Components",
      },
      {
        src: "redux.svg",
        name: "Redux",
      },
      {
        src: "jotai.svg",
        name: "Jotai",
      },
      {
        src: "react-query.svg",
        name: "React Query",
      },
    ],
  },
  {
    heading: "Backend",
    skills: [
      {
        src: "spring-boot.svg",
        name: "Spring Boot",
      },
      {
        src: "nodejs.svg",
        name: "NodeJs",
      },
      {
        src: "nestjs.svg",
        name: "NestJs",
      },
      {
        src: "ror.svg",
        name: "Ruby on Rails",
      },
      {
        src: "kafka.svg",
        name: "Apache Kafka",
      },
      {
        src: "graphql.svg",
        name: "GraphQL",
      },
      {
        src: "jest.svg",
        name: "Jest",
      },
    ],
  },
  {
    heading: "Databases",
    skills: [
      {
        src: "mysql.svg",
        name: "MySQL",
      },
      {
        src: "mongo.svg",
        name: "MongoDB",
      },
      {
        src: "postgres.svg",
        name: "PostgresSQL",
      },
    ],
  },
  {
    heading: "DevOps",
    skills: [
      {
        src: "docker.svg",
        name: "Docker",
      },
      {
        src: "jenkins.svg",
        name: "Jenkins",
      },
      {
        src: "kubernetes.svg",
        name: "Kubernetes",
      },
    ],
  },
];

export const SOCIAL = [
  {
    Icon: FaGithub,
    link: "https://github.com/krish7x",
  },
  {
    Icon: FaLinkedin,
    link: "https://linkedin.com/in/krish7x",
  },
  {
    Icon: FaInstagram,
    link: "https://instagram.com/krish7x",
  },
  {
    Icon: FaFacebook,
    link: "https://facebook.com/krish7x",
  },
  {
    Icon: FaTwitter,
    link: "https://x.com/_krish7x",
  },
];

export const PROJECTS = [
  {
    title: "CL Survey Dashboard",
    src: survey,
    link: "https://github.com/krish7x/cl-survey-dashboard.git",
    description:
      "The CL Survey application is an innovative tool built on top of Next.js, designed to simplify the creation and management of surveys. Featuring a user-friendly interface with drag-and-drop functionality, it allows users to easily design surveys and analyze responses in real-time. The application ensures a smooth and responsive experience across all devices. It also offers customizable templates and seamless integration with popular platforms for data export and sharing. Our project won first place at the February 2024 hackathon, reflecting its effectiveness and user appeal.",
    skills: [
      "Typescript",
      "NextJS",
      "Turbo",
      "Fastify",
      "Prisma",
      "Mongo",
      "Framer Motion",
      "Next UI",
      "Jotai",
    ],
  },
  {
    title: "Kafka Retrier NPM Package",
    src: kafka,
    link: "https://github.com/krish7x/kafka-retrier",
    description:
      "Kafka Retrier is a Node.js package that simplifies Kafka message retries and dead-letter-queue (DLQ) handling. Easily integrated with KafkaJS, it provides immediate and delayed retry mechanisms and supports custom logic for each. The package also includes a DLQ mechanism for unprocessable messages. Quick to install via npm, Kafka Retrier enhances the reliability of your Kafka message processing workflows.",
    skills: ["Typescript", "KafkaJS", "Tsup"],
  },
  {
    title: "My Portfolio",
    src: portfolio,
    link: "https://github.com/krish7x/my-portfolio",
    description:
      "This is my personal portfolio, built using Next.js and Tailwind CSS. All components are custom-built, and the domain was purchased from GoDaddy and hosted on Vercel. Thanks to Vercel for seamless hosting and deployment services. You can check out the full code for this website on my GitHub. Exciting things are coming ahead!",
    skills: [
      "Typescript",
      "NextJS",
      "Framer Motion",
      "Next UI",
      "Contentlayer",
    ],
  },
];
