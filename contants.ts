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
    yrsOfExp: "2023 - Present",
    company: "Caratlane Trading Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    description: LOREM_20,
    link: "https://www.caratlane.com",
  },
  {
    yrsOfExp: "2021 - 2023",
    company: "Pickyourtrail",
    location: "Chennai, Tamil Nadu",
    description: LOREM_20,
    link: "https://www.pickyourtrail.com",
  },
  {
    yrsOfExp: "2021",
    company: "Clayfin",
    location: "Chennai, Tamil Nadu",
    description: LOREM_20,
    link: "https://www.clayfin.com/",
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
