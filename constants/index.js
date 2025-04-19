import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "skills",
    title: "Skills",
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
  // {
  //   title: "Java Backend Developer",
  //   icon: <FullStackIcon />,
  // },
  // {
  //   title: "Frontend Developer",
  //   icon: <FrontendIcon />,
  // },
  {
    title: "Java Backend Developer",
    icon: <BackendIcon />,
  },
  {
    title: "Machine Learning Engineer",
    icon: <FrontendIcon />,
  },
  {
    title: "Problem Solving",
    icon: <ProblemSolvingIcon />,
  },
  // {
  //   title: "Freelancer",
  //   icon: <FreelancerIcon />,
  // },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "C",
      icon: "/assets/tech/c.svg",
      link: "https://en.cppreference.com/w/c",
    },
    {
      name: "C++",
      icon: "/assets/tech/c++.png",
      link: "https://en.cppreference.com/w/",
    },
    {
      name: "Java",
      icon: "/assets/tech/java.svg",
      link: "https://www.java.com/en/",
    },
    {
      name: "Python",
      icon: "/assets/tech/python.svg",
      link: "https://www.python.org/",
    },
    // {
    //   name: "HTML5",
    //   icon: "/assets/tech/html5.svg",
    //   link: "https://html.spec.whatwg.org/multipage/",
    // },
    // {
    //   name: "CSS3",
    //   icon: "/assets/tech/css3.svg",
    //   link: "https://www.w3.org/Style/CSS/Overview.en.html",
    // },
    // {
    //   name: "JavaScript",
    //   icon: "/assets/tech/javascript.svg",
    //   link: "https://262.ecma-international.org/",
    // },
    // {
    //   name: "TypeScript",
    //   icon: "/assets/tech/typescript.svg",
    //   link: "https://www.typescriptlang.org/",
    // },
    
  ],
  frameworks: [
    
    {
      name: "SpringBoot",
      icon: "/assets/tech/Spring_Boot.svg",
      link: "https://spring.io/projects/spring-boot",
    },
    {
      name: "Tensorflow",
      icon: "/assets/tech/Tensorflow_logo.svg",
      link: "https://www.tensorflow.org/",
    },

  ],
  libraries: [
    {
      name: "React",
      icon: "/assets/tech/react.svg",
      link: "https://react.dev/",
    },
    {
      name: "Scikit-Learn",
      icon: "/assets/tech/scikit-learn.svg",
      link: "https://scikit-learn.org/stable/",
    },
    {
      name: "Pandas",
      icon: "/assets/tech/Pandas.svg",
      link: "https://pandas.pydata.org/",
    },
    {
      name: "Numpy",
      icon: "/assets/tech/numpy.svg",
      link: "https://numpy.org/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: "/assets/tech/git.svg",
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: "/assets/icons/github.svg",
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: "/assets/tech/postman.svg",
      link: "https://www.postman.com/",
    },
    // {
    //   name: "Docker",
    //   icon: "/assets/tech/docker.svg",
    //   link: "https://www.docker.com/",
    // },
  ],
  environments: [
    // {
    //   name: "Node.js",
    //   icon: "/assets/tech/nodejs.svg",
    //   link: "https://nodejs.org/en",
    // },
  ],
  databases: [
    {
      name: "MySQL",
      icon: "/assets/tech/my-sql.png",
      link: "https://www.mysql.com/",
    },
    // {
    //   name: "PostgreSQL",
    //   icon: "/assets/tech/postgresql.png",
    //   link: "https://www.postgresql.org",
    // },
    {
      name: "MongoDB",
      icon: "/assets/tech/mongodb.svg",
      link: "https://www.mongodb.com/",
    },
    // {
    //   name: "Firebase",
    //   icon: "/assets/tech/firebase.svg",
    //   link: "https://firebase.google.com/",
    // },
  ],

  Coding_Platforms: [
    {
      name: "Leetcode",
      icon: "/assets/tech/leetcode.svg",
      link: "https://leetcode.com/u/Anuj_Rawat-1/",
    },
    {
      name: "GeeksForGeeks",
      icon: "/assets/tech/geeksforgeeks.svg",
      link: "https://www.geeksforgeeks.org/user/rawatanxz7y/?ref=header_profile",
    },
  ],
};

const experiences = [
  // {
  //   title: "Full Stack Developer",
  //   company_name: "Tech Lead at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "July 2023 - Present",
  //   points: [
  //     "Currently serving as the Tech Lead of GDSC, responsible for guiding technical aspects, fostering collaboration, and contributing to strategic decisions.",
  //     "Led induction programs, ensured new member alignment with GDSC's mission, and provided technical mentorship.",
  //     "Developed GDSC MVJCE website, enhancing the organization's online visibility.",
  //     "Spearheaded promotional campaigns, actively engaged with the GDSC community, and played a key role in planning and executing events.",
  //   ],
  // },


  // {
  //   title: "Frontend Developer Intern",
  //   company_name: "Intern at Curowell Healthcare Private Ltd",
  //   icon: "/assets/company/curowell-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "November 2023",
  //   points: [
  //     "Developing a healthcare SaaS platform using Next.js, TypeScript, and Tailwind CSS, significantly enhancing user experience.",
  //     "Maintaining an efficient codebase under senior guidance, ensuring adherence to best practices in software development.",
  //     "Contributing to the DND form microfrontend, improving user interaction by 30%.",
  //     "Collaborating in UI/UX design efforts, leading to a 25% reduction in component development time.",
  //   ],
  // },


  // {
  //   title: "Full Stack Developer Intern",
  //   company_name: "Intern at DRDO CABS",
  //   icon: "/assets/company/drdo-cabs.png",
  //   iconBg: "#E6DEDD",
  //   date: "November 2023",
  //   points: [
  //     "Developed a Facility Bookings Manager for DRDO CABS using TypeScript, React, Node.js, Express, Prisma, and MySQL within a month.",
  //     "Actively addressed client issues and queries, ensuring seamless integration with their platform and local cluster system.",
  //     "Led the design and implementation of the frontend, providing a user-friendly interface for efficient facility management.",
  //     "Collaborated with a backend intern throughout the internship to deliver a comprehensive solution tailored to DRDO CABS's needs.",
  //   ],
  // },


  // {
  //   title: "Frontend Developer",
  //   company_name: "Tech team member at GDSC MVJCE",
  //   icon: "/assets/company/gdsc-logo.svg",
  //   iconBg: "#E6DEDD",
  //   date: "February 2022 - July 2023",
  //   points: [
  //     "Successfully planned and executed induction programs, providing new members with crucial information about the organization's goals and values.",
  //     "Demonstrated web development expertise by conducting CSS workshops, equipping participants with practical web design and styling skills.",
  //     "Played a crucial role in promoting GDSC events and actively collaborated with cross-functional teams to deliver high-quality projects, fostering teamwork and innovation.",
  //     "Actively engaged with the GDSC community, assisted in workshops, and contributed to planning and managing GDSC events, ensuring their success and growth.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [

  // AI ML Projects 
  
  {
    name: "Movie Recommender System",
    description:
      "Developed a Movie Recommender System using a Content-Based Filtering approach to suggest movies based on user preferences and movie metadata. Applied advanced text vectorization methods, including Bag of Words, to transform over 4800 movie descriptions into numerical vectors; enhanced the accuracy of similarity calculations for generating personalized recommendations",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Kaggle",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/Movie_Recommender.png",
    source_code_link: "https://github.com/AnujRawat1/Movie-Recommender-System",
    deployed_link: "https://github.com/AnujRawat1/Movie-Recommender-System",
    category: "ai-ml",
  },
  {
    name: "SMS Spam Detection",
    description:
      "Built an Email Spam Classifier using machine learning algorithms like Naive Bayes , Logistic Regression, Random Forest for accurate spam detection. Applied text preprocessing techniques (tokenization, stemming, vectorization) to prepare the email data.  Achieved 98.16% accuracy and validated model performance using cross-validation and confusion matrix.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "Kaggle",
        color: "pink-text-gradient",
      },
      {
        name: "Pandas",
        color: "yellow-text-gradient",
      },
    ],
    image: "/assets/projects/Spam_SMS_Detection.png",
    source_code_link: "https://github.com/AnujRawat1/Email-SMS-Spam-Classifier",
    deployed_link: "https://github.com/AnujRawat1/Email-SMS-Spam-Classifier",
    category: "ai-ml",
  },
  {
    name: "Stock Price Prediction",
    description:
      "Designed a real-time stock price prediction model using Long Short-Term Memory (LSTM) networks, implemented in Python. Processed and analyzed over 10 years of historical data using Tiingo, improving prediction reliability for future stock prices To enable visualisation and user interaction, an interactive web application was designed utilising Streamlit.",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "green-text-gradient",
      },
      {
        name: "LSTM",
        color: "yellow-text-gradient",
      },
      {
        name: "Tiingo",
        color: "green-text-gradient",
      },
      {
        name: "Kaggle",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/Stock_Price.jpg",
    source_code_link: "https://github.com/AnujRawat1/Stock-Price-Prediction-Using-Tiingo-",
    deployed_link: "https://github.com/AnujRawat1/Stock-Price-Prediction-Using-Tiingo-",
    category: "ai-ml",
  },

// JAVA PROJECTs
  {
    name: "Linkit",
    description:
      "Email Reply Generator is a productivity tool designed to streamline professional communication. The backend, built using Java Spring Boot, handles the logic to generate context-aware replies based on input email content and selected tone. The React-based frontend provides a clean and intuitive UI to interact with the service. Additionally, a Chrome extension integrates directly with Gmail, allowing users to generate smart replies within the email compose window itself, enhancing accessibility and workflow efficiency.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Microservices",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "yellow-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Web Socketing",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/LinkIt.png",
    source_code_link: "https://github.com/AnujRawat1/LinkIt.git",
    deployed_link: "https://linkit-ten.vercel.app/",
    category: "java",
  },
  {
    name: "Smart Email Reply Generator",
    description:
      "Email Reply Generator is a productivity tool designed to streamline professional communication. The backend, built using Java Spring Boot, handles the logic to generate context-aware replies based on input email content and selected tone. The React-based frontend provides a clean and intuitive UI to interact with the service. Additionally, a Chrome extension integrates directly with Gmail, allowing users to generate smart replies within the email compose window itself, enhancing accessibility and workflow efficiency.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Microservices",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "yellow-text-gradient",
      },
      {
        name: "Material UI",
        color: "green-text-gradient",
      },
      {
        name: "Chrome Extension",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/Email_Reply.jpg",
    source_code_link: "https://github.com/AnujRawat1/Email-Reply-Generator.git",
    deployed_link: "https://smart-email-reply-generator.vercel.app/",
    category: "java",
  },


  {
    name: "AI Based Research Assistant",
    description:
      "AI-Powered Research Assistant is a versatile tool designed to enhance productivity while reading or researching online. Built with Java Spring Boot for the backend, the assistant supports multiple AI-driven operations such as summarization, paraphrasing, translation, code generation, and custom prompts. Users can interact directly through a Chrome extension that overlays these features on any webpage. It also includes the ability to save important notes and download them locally, making it a valuable assistant for academic, technical, or professional use cases.",
    tags: [
      {
        name: "Spring Boot",
        color: "blue-text-gradient",
      },
      {
        name: "Microservices",
        color: "green-text-gradient",
      },
      {
        name: "Chrome Extension",
        color: "pink-text-gradient",
      },
    ],
    image: "/assets/projects/Research_Assistant.png",
    source_code_link: "https://github.com/AnujRawat1/Research-Assistant.git",
    deployed_link: "https://github.com/AnujRawat1/Research-Assistant.git",
    category: "java",
  },
  
];



const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/AnujRawat1",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/anuj-rawat1/",
  },
  // {
  //   id: "x",
  //   icon: <XIcon />,
  //   link: "https://twitter.com/Shivam_1_Sharma",
  // },
  // {
  //   id: "instagram",
  //   icon: <InstagramIcon />,
  //   link: "https://www.instagram.com/_.shivam._.here._",
  // },
];

const heroTexts = [
  "AI / ML Engineer",
  500,
  "Java Backend Developer",
  500,
  "Problem Solver",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
