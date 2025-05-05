/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hemalatha's Portfolio",
  description:
    "Leading cross-functional development teams, architecting scalable solutions, and delivering complex software products, bridge business goals with technical execution.",
  og: {
    title: "Hemalatha Dhakshinamoorthy Portfolio",
    type: "website",
    url: "http://hemalathadhakshinamoorthy.com/",
  },
};

//Home Page
const greeting = {
  title: "Hemalatha Dhakshinamoorthy",
  logo_name: "Hemalatha",
  nickname: "Technical Lead",
  subTitle:
    "Leading cross-functional development teams, architecting scalable solutions, and delivering complex software products, bridge business goals with technical execution.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository:
    "https://github.com/HemalathaDhakshinamoorthy/hemalathaPortfolio",
  githubProfile: "https://github.com/HemalathaDhakshinamoorthy",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/HemalathaDhakshinamoorthy",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hemalatha-dhakshinamoorthy/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:hemalatha.dhakshinamoorthy13@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Technical Leadership",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Guiding teams through the full software development lifecycle—from design and development to deployment and support",
        "⚡ Strong communication and cross-team collaboration with product, QA, stakeholder engagement",
        "⚡ Strategic thinking with attention to detail",
        "⚡ Conflict resolution and team empowerment",
        "⚡ Experienced in Agile/Scrum project management methodologies",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "",
        },
      ],
    },
    {
      title: "FullStack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React, Angular, etc.",
        "⚡ Skilled in building scalable RESTful, GraphQL, OpenAI APIs",
        "⚡ Proficient in backend technologies like Java, Spring Boot, Hibernate, Javascript, NodeJs, ExpressJs, NestJs, Python, Django etc.",
        "⚡ Expertise in multiple design patterns and Architectures like MVC, Microservices, Serverless, Event Driven Architecture",
        "⚡ Implementing secure authentication systems, payment gateways",
        "⚡ CI/CD using Docker, Kubernetes, Jenkins, GitHub Actions",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Cloud infrastructure",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Optimizing database queries for enhanced performance, enabling faster data retrieval and processing",
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining web applications on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Business Intelligence",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Skilled in designing and developing, automating interactive dashboards, reports",
        "⚡ Transforming raw data into actionable insights to support strategic decision-making",
        "⚡ Automating repetitive tasks and data workflows using Excel Macros",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "DAX",
          fontAwesomeClassname: "",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Power Query",
          fontAwesomeClassname: "",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "VBA",
          fontAwesomeClassname: "",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Generative AI/LLM",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Skilled in prompt engineering, fine-tuning, and integrating LLMs into real-world solutions for content generation, chatbots, etc.",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI API",
          fontAwesomeClassname: "",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
  ],
};

// Education Page
/*const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "",
    },
    
  ],
};
*/

const degrees = {
  degrees: [
    {
      title:
        "Idhaya College of Engineering for Women, Anna University, Chennai, India",
      subtitle: "B.E - Computer Science and Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "Anna University, Chennai",
      duration: "2008 - 2012",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, OOAD, C++, SA, Java, etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.iecw.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Project Management Professional",
      subtitle: "- PMI 2025",
      logo_path: "stanford_logo.png",
      certificate_link: "",
      alt_name: "PMI",
      color_code: "#8C151599",
    },
    {
      title: "Generative AI for Web Developers",
      subtitle: "- 2025",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "2025",
      color_code: "#00000099",
    },
    {
      title: "Complete Guide to Power BI for Data Analysts",
      subtitle: "- Microsoft 2025",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "Microsoft 2025",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "",
  description:
    "I started my career from a evolving startup as Associate Software Developer, Software Developer, Senior Software Developer. I have also worked with some well established companies mostly as Senior Software Developer, Technical Lead. I have worked on multiple projects in the field of Full Stack Development, Data Science, Cloud Computing, Visualization, Generative AI, etc.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Technical Lead",
          company: "Oceaneering",
          company_url: "https://www.oceaneering.com/",
          logo_path: "oceaneering_logo.jpg",
          duration: "Sept 2021 - Apr 2025",
          location: "Stavanger, Norway",
          description:
            "Leading cross-functional development teams, architecting scalable solutions, and delivering complex software products, bridge business goals with technical execution. Strong communication and cross-team collaboration with product, QA, stakeholder engagement. Driving Agile Innovation & Scalable Solutions. Worked on Large Language Models, Generative AI, Business Intelligence Tools.",
          color: "#000000",
        },
        {
          title: "Senior Software Developer",
          company: "Wipro Technologies",
          company_url: "https://www.wipro.com/",
          logo_path: "wipro_logo.jpg",
          duration: "Oct 2017 - Aug 2021",
          location: "Chennai, India",
          description:
            "Involved in analysing, designing, developing and deploying the software. Collecting the data, sanitizing the pre and post trade data, creating the visual dashboards upon client request. Preparing Design Specifications, Technical Approach Document, Unit Test Plan, Process Document and Release Notes. Collaborating with cross functional teams to deliver high-quality products to tight deadlines.",
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "Qness Software Pvt. Ltd ",
          company_url: "https://qnesssoftware.com/",
          logo_path: "qness_logo.jpg",
          duration: "Feb 2013 - Oct 2017",
          location: "Bangalore, India",
          description:
            "Created various reports and dashboards for a transaction based portfolio monitoring system. Automated the creation of mock financial investments transaction process. Implemented transaction feeds for Credit Agricole, BNP Paribas, JPMorgan US, Pictet, HSBC, State Street banks etc. Created and automated unit tests using JUnit and TestNG. Involved in the Analysis, design, and development of software development.",
          color: "#9b1578",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects use variety of frameworks and tools. One of the best is to create a website as my own portfolio.",
  avatar_image_path: "projects_image.svg",
};

/*
const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};
*/

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "If you message me, I will respond within 24 hours. I am open to discussing new projects and opportunities.",
  },
  /*blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },*/
  addressSection: {
    title: "Location",
    subtitle: "Sandnes, Stavanger, Norway",
    locality: "Stavanger",
    country: "Norway",
    region: "Rogaland",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  //competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  //publicationsHeader,
  //publications,
  contactPageData,
};
