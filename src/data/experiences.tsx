export type Experience = {
  id: number;
  image?: string;
  companyName: string;
  title: string;
  description: string;
  isActive: boolean;
  technologies: string[];
  date: {
    start: Date;
    end: Date | null;
  };
};

export const experiences: Experience[] = [
  {
    id: 1,
    image: "cimbniaga.png",
    companyName: "Cimb Niaga",
    title: "IT Developer",
    description:
      "Developed and managed backend services using Golang. Built OTP validation and audit log services, integrated eKYC, implemented Conjur for microservices security, and managed CI/CD pipelines.",
    isActive: true,
    technologies: [
      "Golang",
      "Ruby",
      "React",
      "Vue.js",
      "Java",
      "Docker",
      "Next.js",
      "Nuxt.js",
    ],
    date: {
      start: new Date("2023-09-11"),
      end: null,
    },
  },
  {
    id: 2,
    image: "telkomuniverisity.png",
    companyName: "Telkom University",
    title: "Backend Developer",
    description:
      "Migrated 27 services from monolithic to microservices using Golang, documented UML diagrams, conducted API testing with Postman, and performed load testing with K6.",
    isActive: false,
    technologies: ["Golang", "K6", "Fiber", "Microservices"],
    date: {
      start: new Date("2023-11-25"),
      end: new Date("2024-01-08"),
    },
  },
  {
    id: 3,
    image: "bangkitacademy.png",
    companyName: "Bangkit Academy",
    title: "Cloud Computing Cohort",
    description:
      "Developed API History for Dietin using Node.js and Firestore, documented APIs with Swagger, and deployed scalable services on Cloud Run with Docker.",
    isActive: false,
    technologies: ["Express.js", "Javascript", "Google Cloud"],
    date: {
      start: new Date("2023-06-15"),
      end: new Date("2023-09-01"),
    },
  },
  {
    id: 4,
    image: "ead-laboratory.png",
    companyName: "EAD Laboratory",
    title: "Web Application Mentor",
    description:
      "Developed structured rules for web development practicum, designed case studies on login registration with PHP, and mentored 18 students, achieving a 94% success rate",
    isActive: false,
    technologies: ["PHP", "Web Development", "Sessions", "Cookies"],
    date: {
      start: new Date("2023-09-01"),
      end: new Date("2023-12-01"),
    },
  },
];

export const formatDate = (date: Date | null): string => {
  if (!date) return "Present";

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return date.toLocaleDateString("en-US", options);
};
