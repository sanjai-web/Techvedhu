export const internshipsData = {
  'python': {
    title: 'PYTHON',
    description: 'Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.',
    curriculum: [
      { title: 'Introduction to Python', content: 'Learn the basics of Python programming language, syntax, variables, and data types.' },
      { title: 'Functions and Data Structures', content: 'Master functions, lists, dictionaries, tuples, and sets to manipulate data.' },
      { title: 'File Handling and Modules', content: 'Understand how to read from and write to files, and use Python modules.' },
      { title: 'Object-Oriented Programming (OOP)', content: 'Dive deep into classes, objects, inheritance, polymorphism, and encapsulation.' },
      { title: 'Advanced Python Concepts', content: 'Explore decorators, generators, iterators, and context managers.' },
      { title: 'Introduction to Web Scraping', content: 'Learn to extract data from websites using Beautiful Soup and Requests.' },
      { title: 'Web Frameworks', content: 'Get a brief overview of popular Python web frameworks like Django and Flask.' }
    ],
    projects: [
      { title: 'Todo List Application', desc: 'Create a command-line or GUI-based to-do list app to practice basic Python concepts.', icon: 'FileText' },
      { title: 'Simple Calculator', desc: 'Build a calculator that performs basic arithmetic operations.', icon: 'MonitorPlay' },
      { title: 'Weather Forecast App', desc: 'Develop a program that fetches and displays weather information using an API.', icon: 'Briefcase' },
      { title: 'Adventure Game', desc: 'Design an interactive text-based game where players navigate a storyline.', icon: 'Play' }
    ],
    tools: [
      { name: 'PyCharm', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg' },
      { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
      { name: 'Django', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Django_logo.svg' }
    ]
  },
  'web-development': {
    title: 'WEB DEVELOPMENT',
    description: 'Master front-end and back-end technologies to build full-stack web applications. Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB.',
    curriculum: [
      { title: 'HTML5 & CSS3', content: 'Semantic web pages, modern layouts with Flexbox and Grid, and responsive design.' },
      { title: 'JavaScript Essentials', content: 'ES6+ syntax, DOM manipulation, async programming, and API integration.' },
      { title: 'Frontend with React', content: 'Component-based architecture, state management, hooks, and routing.' },
      { title: 'Backend with Node.js', content: 'Creating RESTful APIs, routing, and middleware with Express.js.' },
      { title: 'Database Management', content: 'NoSQL databases using MongoDB and Mongoose.' }
    ],
    projects: [
      { title: 'E-commerce Platform', desc: 'A full-stack application with user authentication, product catalog, and cart functionality.', icon: 'Briefcase' },
      { title: 'Social Media Dashboard', desc: 'A real-time dashboard displaying user analytics and feed updates.', icon: 'MonitorPlay' },
      { title: 'Task Manager', desc: 'A drag-and-drop task board with real-time updates.', icon: 'FileText' }
    ],
    tools: [
      { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
      { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
      { name: 'MongoDB', logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/MongoDB-Logo.svg' }
    ]
  },
  'machine-learning': {
    title: 'MACHINE LEARNING',
    description: 'Dive into machine learning techniques to build predictive models. Learn data preprocessing, regression, classification, clustering, and deep learning basics.',
    curriculum: [
      { title: 'Data Preprocessing', content: 'Handling missing data, feature scaling, and encoding categorical data.' },
      { title: 'Supervised Learning', content: 'Linear Regression, Logistic Regression, Decision Trees, and SVMs.' },
      { title: 'Unsupervised Learning', content: 'K-Means clustering and Principal Component Analysis (PCA).' },
      { title: 'Deep Learning Basics', content: 'Introduction to Neural Networks and TensorFlow.' }
    ],
    projects: [
      { title: 'House Price Prediction', desc: 'A regression model to predict housing prices based on multiple features.', icon: 'MonitorPlay' },
      { title: 'Customer Segmentation', desc: 'A clustering model to group retail customers based on purchasing behavior.', icon: 'Users' }
    ],
    tools: [
      { name: 'TensorFlow', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg' },
      { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
      { name: 'Scikit-Learn', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' }
    ]
  },
  'ui-ux-design': {
    title: 'UI/UX DESIGN',
    description: 'Design intuitive user interfaces and enhance user experiences. Master user research, wireframing, prototyping, and modern design tools like Figma.',
    curriculum: [
      { title: 'UX Research Fundamentals', content: 'User personas, journey mapping, and usability testing.' },
      { title: 'Wireframing & Prototyping', content: 'Creating low-fidelity wireframes and interactive high-fidelity prototypes.' },
      { title: 'Visual Design Principles', content: 'Color theory, typography, spacing, and accessibility.' },
      { title: 'Design Systems', content: 'Building scalable and consistent design component libraries.' }
    ],
    projects: [
      { title: 'Mobile App Redesign', desc: 'Conduct a UX audit and redesign a popular app for better usability.', icon: 'MonitorPlay' },
      { title: 'SaaS Dashboard Design', desc: 'Create a comprehensive UI for a B2B analytics dashboard.', icon: 'Briefcase' }
    ],
    tools: [
      { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
      { name: 'Adobe XD', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg' }
    ]
  },
  'cyber-security': {
    title: 'CYBER SECURITY',
    description: 'Learn to identify vulnerabilities, secure networks, and understand ethical hacking techniques to protect digital assets from cyber threats.',
    curriculum: [
      { title: 'Networking Fundamentals', content: 'TCP/IP, OSI model, routing, and switching.' },
      { title: 'Ethical Hacking', content: 'Reconnaissance, scanning, gaining access, and covering tracks.' },
      { title: 'Network Security', content: 'Firewalls, IDS/IPS, VPNs, and securing wireless networks.' },
      { title: 'Vulnerability Assessment', content: 'Using tools like Nmap, Nessus, and Burp Suite.' }
    ],
    projects: [
      { title: 'Network Vulnerability Scanner', desc: 'Develop a basic script to scan and identify open ports and vulnerabilities.', icon: 'Shield' },
      { title: 'Phishing Simulation', desc: 'Create a controlled phishing campaign to test user awareness.', icon: 'FileText' }
    ],
    tools: [
      { name: 'Kali Linux', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Kali_Linux_2.0_wordmark.svg' },
      { name: 'Wireshark', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Wireshark_icon.png' }
    ]
  },
  'data-science': {
    title: 'DATA SCIENCE',
    description: 'Extract insights from data using statistical analysis, machine learning, and visualization techniques. Master Python, SQL, and PowerBI.',
    curriculum: [
      { title: 'Statistical Analysis', content: 'Probability distributions, hypothesis testing, and A/B testing.' },
      { title: 'Data Manipulation', content: 'Data wrangling with Pandas and NumPy.' },
      { title: 'Data Visualization', content: 'Creating interactive dashboards with PowerBI and Tableau.' },
      { title: 'SQL for Data Science', content: 'Complex querying, joins, and database optimization.' }
    ],
    projects: [
      { title: 'Sales Analytics Dashboard', desc: 'An interactive dashboard showing sales trends and KPIs.', icon: 'BarChart3' },
      { title: 'Churn Prediction Model', desc: 'Analyze customer data to predict and prevent user churn.', icon: 'Users' }
    ],
    tools: [
      { name: 'Python', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
      { name: 'PowerBI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' }
    ]
  },
  'java': {
    title: 'JAVA PROGRAMMING',
    description: 'Learn enterprise-grade backend development with Java. Master Object-Oriented Programming, Spring Boot, and microservices architecture.',
    curriculum: [
      { title: 'Core Java', content: 'OOPs concepts, Collections framework, and Exception handling.' },
      { title: 'Advanced Java', content: 'Multithreading, JDBC, and Servlets.' },
      { title: 'Spring Boot Framework', content: 'Dependency injection, REST APIs, and Spring Data JPA.' },
      { title: 'Microservices Basics', content: 'Architecture patterns and API gateways.' }
    ],
    projects: [
      { title: 'Library Management API', desc: 'A secure REST API for managing books and users.', icon: 'Briefcase' },
      { title: 'Banking Application', desc: 'A transactional system with concurrent user handling.', icon: 'MonitorPlay' }
    ],
    tools: [
      { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
      { name: 'Spring', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Spring_Framework_Logo_2018.svg' }
    ]
  }
};

// Fallback data for any ID not specifically defined above
export const fallbackData = {
  title: 'INTERNSHIP PROGRAM',
  description: 'Join our comprehensive internship program designed to provide you with industry-relevant skills and hands-on experience through real-world projects.',
  curriculum: [
    { title: 'Module 1: Fundamentals', content: 'Learn the core concepts and basics required for this domain.' },
    { title: 'Module 2: Advanced Topics', content: 'Dive deeper into industry-standard practices and complex implementations.' },
    { title: 'Module 3: Hands-on Projects', content: 'Apply your learning to build functional projects from scratch.' },
    { title: 'Module 4: Career Prep', content: 'Resume building, interview preparation, and mock assessments.' }
  ],
  projects: [
    { title: 'Industry Project 1', desc: 'A beginner-friendly project to apply core concepts.', icon: 'FileText' },
    { title: 'Capstone Project', desc: 'A complex, real-world application built from start to finish.', icon: 'Briefcase' }
  ],
  tools: [
    { name: 'Industry Tools', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' }
  ]
};
