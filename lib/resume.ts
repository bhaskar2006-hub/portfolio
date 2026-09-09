export const profile = {
  name: 'Bhaskar Reddy J S',
  title: 'Full-Stack Developer',
  avatar: '/profile.jpg',
  email: 'bhaskarreddy2006js@gmail.com',
  phone: '+91 76718 61347',
  location: 'India',
  summary:
    'Full-Stack Developer and B.Tech CSE (AI) student with hands-on experience building and deploying MERN applications. Skilled in React, Node.js, Express.js, MongoDB, REST APIs, JWT authentication, Flask, and AWS EC2. Strong foundation in DSA, OOP, and database design; seeking full-stack development internships and freelance opportunities.',
  links: {
    linkedin: 'https://www.linkedin.com/in/bhaskar-reddy-485575319/',
    github: 'https://github.com/bhaskar2006-hub',
    leetcode: 'https://leetcode.com/u/bhaskarreddy2006/',
  },
}

export const skillGroups = [
  {
    label: 'Frontend Development',
    items: ['React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'HTML5', 'CSS3', 'Next.js', 'State Management'],
  },
  {
    label: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'OAuth 2.0', 'Flask', 'Middleware Pipelines', 'Role-Based Access Control (RBAC)'],
  },
  {
    label: 'Database Systems',
    items: ['MongoDB', 'MongoDB Atlas', 'Mongoose ODM', 'PostgreSQL', 'SQL (Advanced)', 'Aggregation Pipelines', 'Indexing & Schemas'],
  },
  {
    label: 'Cloud & DevOps',
    items: ['AWS EC2', 'AWS S3', 'Docker Containers', 'Render', 'Vercel', 'Nginx Reverse Proxy', 'PM2 Daemon', 'Git', 'GitHub CI/CD'],
  },
  {
    label: 'AI & Data Engineering',
    items: ['Agentic AI', 'Autonomous LLMs', 'Prompt Engineering', 'Python', 'Pandas', 'NumPy', 'IBM AI Microservices', 'Vector Search'],
  },
  {
    label: 'CS Fundamentals & Architecture',
    items: ['Data Structures & Algorithms', 'Object-Oriented Design (OOP)', 'Database Management (DBMS)', 'C++', 'System Architecture', 'Operating Systems'],
  },
]

// DevFlow URLs
export const DEVFLOW_LIVE_URL = 'https://devflow123.vercel.app/'
export const DEVFLOW_GITHUB_URL = 'https://github.com/bhaskar2006-hub/DevFlow'

export const projects = [
  {
    id: 'gocart',
    name: 'GoCart',
    tagline: 'MERN E-Commerce Application',
    category: 'E-Commerce Platform',
    shortLabel: 'MERN Application',
    statusBadge: 'AWS EC2 LIVE',
    liveLabel: 'Launch App',
    repoLabel: 'Code',
    description:
      'Built an end-to-end e-commerce application with product browsing, category navigation, cart management, and user-session workflows, backed by RESTful services and deployed on AWS EC2.',
    highlights: [
      'Built an end-to-end e-commerce application with product browsing, category navigation, cart management, and user-session workflows.',
      'Developed RESTful backend services for product inventory, cart transactions, and application data management using Node.js, Express.js, and MongoDB.',
      'Created a responsive React interface with live cart updates, product filtering, and reusable frontend components.',
      'Deployed and configured the application on AWS EC2 for reliable public access.',
    ],
    stack: [
      'JavaScript',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'HTML5',
      'CSS3',
      'AWS EC2',
    ],
    liveUrl: 'https://ec2-16-112-109-129.ap-south-2.compute.amazonaws.com/',
    repoUrl: 'https://github.com/bhaskar2006-hub',
    caseStudy: {
      overview:
        'GoCart was built to solve session management and realtime cart synchronisation challenges in scalable MERN architectures. The project implements a fully detached React SPA communicating over REST API endpoints to a Node/Express backend backed by MongoDB Atlas and deployed on AWS EC2.',
      architecture: [
        'Client Tier: React SPA with Context API state management for atomic cart updates.',
        'API Tier: Express.js REST APIs with custom middleware for payload validation & rate limiting.',
        'Data Tier: MongoDB Atlas cluster with indexing on product categories and SKU identifiers.',
        'Cloud Infrastructure: AWS EC2 Ubuntu instance with Nginx reverse proxy and PM2 process manager.',
      ],
      databaseSchema: [
        'Users Collection: {_id, name, email, passwordHash, role, createdAt}',
        'Products Collection: {_id, title, category, price, stockQuantity, imageUrI, skuCode}',
        'CartTransactions Collection: {_id, userId, items: [{productId, quantity, price}], status, updatedAt}',
      ],
      awsSetup:
        'Configured an Ubuntu 22.04 LTS instance on AWS EC2 in ap-south-1. Configured Security Groups for HTTP (80) & HTTPS (443). Nginx acts as an SSL-terminating reverse proxy pointing to PM2-managed Node.js process on port 5000.',
      challenges: [
        {
          problem: 'State desynchronisation between cart drawer and inventory stock on rapid item increments.',
          solution: 'Implemented optimistic UI updates in React Context coupled with backend atomic MongoDB `$inc` operators to guarantee consistency without race conditions.',
        },
        {
          problem: 'Handling AWS EC2 IP changes and persistent server execution.',
          solution: 'Configured AWS Elastic IP and deployed PM2 process manager with automatic systemd reboot daemon.',
        },
      ],
    },
  },
  {
    id: 'bytesecure',
    name: 'ByteSecure',
    tagline: 'Role-Based Authentication & Authorization System',
    category: 'Security & Access Control',
    shortLabel: 'RBAC Security',
    statusBadge: 'RBAC SECURED',
    liveLabel: 'Live Demo',
    repoLabel: 'Code',
    description:
      'Engineered a full-stack authentication system with role-based access control (RBAC), bcrypt password hashing, and JWT token authentication in a Node.js and Express.js backend.',
    highlights: [
      'Engineered a full-stack authentication system with role-based access control for protected application features.',
      'Implemented bcrypt password hashing and JWT token authentication in a Node.js and Express.js backend.',
      'Built protected React routes, role-aware navigation, and responsive authentication forms.',
      'Designed MongoDB schemas for hashed credentials, user profiles, roles, and access logs.',
    ],
    stack: ['JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt'],
    liveUrl: null,
    repoUrl: 'https://github.com/bhaskar2006-hub/ByteSecure',
    caseStudy: {
      overview:
        'ByteSecure provides enterprise-grade authentication and granular authorization (Admin, Moderator, User). It guarantees zero raw password persistence, salt-based key derivation, and signed JWT token validation across stateful and stateless APIs.',
      architecture: [
        'Authentication Layer: JWT stateless token verification with 15-minute access token expiration.',
        'Authorization Middleware: Express middleware evaluating required role bitmasks against user JWT claims.',
        'Security Cryptography: Bcrypt with 12 salt rounds for hash generation.',
        'Client Guard: React Higher-Order Components (HOC) guarding restricted UI routes.',
      ],
      databaseSchema: [
        'AuthCredentials: {_id, email, passwordHash, salt, isVerified, failedLogins}',
        'UserRoles: {_id, userId, role: ("ADMIN" | "MODERATOR" | "USER"), permissions: []}',
        'AuditLogs: {_id, userId, ipAddress, action, timestamp}',
      ],
      awsSetup:
        'Ready for containerized microservices deployment with environment secret injection via dotenv and AWS Secrets Manager integration.',
      challenges: [
        {
          problem: 'Preventing Unauthorized Role Escalation via manipulated request bodies.',
          solution: 'Enforced strict server-side schema verification and excluded role fields from public user registration payloads.',
        },
      ],
    },
  },
  {
    id: 'devflow',
    name: 'DevFlow',
    tagline: 'Developer Collaboration Platform',
    category: 'Developer Collaboration Platform',
    shortLabel: 'Full-Stack SaaS',
    statusBadge: 'FULL-STACK SAAS',
    liveLabel: 'Live Demo',
    repoLabel: 'GitHub',
    description:
      'Built a full-stack collaboration platform for development teams to manage organizations, projects, issues, assignments, comments, and activity tracking.',
    fullDescription:
      'DevFlow is a full-stack developer collaboration platform that helps software teams organize projects, manage issues, assign work, collaborate through comments, and track development activity from a centralized workspace.',
    highlights: [
      'Implemented JWT authentication with bcrypt password hashing and Google OAuth.',
      'Designed MongoDB schemas for organizations, members, projects, issues, comments, and activity logs.',
      'Built role-based authorization with OWNER, ADMIN, MEMBER, and VIEWER permissions.',
      'Developed REST APIs using Node.js, Express.js, and Mongoose.',
      'Built a React + TypeScript dashboard with project and issue management.',
      'Added issue status, priority, assignment, search, filtering, comments, and activity tracking.',
      'Containerized the backend with Docker and deployed the application using Vercel, Render, and MongoDB Atlas.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT',
      'Google OAuth',
      'Docker',
      'REST API',
    ],
    liveUrl: DEVFLOW_LIVE_URL,
    repoUrl: DEVFLOW_GITHUB_URL,
    caseStudy: {
      overview:
        'DevFlow is a full-stack developer collaboration platform that helps software teams organize projects, manage issues, assign work, collaborate through comments, and track development activity from a centralized workspace.',
      problem:
        'Development teams often manage tasks, discussions, assignments, and project progress across disconnected tools. This makes it difficult to understand ownership, status, priorities, and project activity from one place.',
      solution:
        'DevFlow provides a centralized workspace where teams can create projects, manage issues, assign developers, communicate through comments, and track activity.',
      architecture: [
        'Client Tier: React + TypeScript Single Page Application with Tailwind CSS and Axios for type-safe API communication.',
        'API Tier: Express.js REST API with modular controllers, centralized error handling, and request validation middleware.',
        'Security & Auth Middleware: JWT token verification, bcrypt password hashing, Google OAuth 2.0 authentication, and multi-tier RBAC authorization guards.',
        'Service Layer: Decoupled domain services for organization scoping, issue state transitions, and comment threading.',
        'Data Tier: Mongoose ODM connecting to MongoDB Atlas cloud database with relational document references.',
        'Containerization & Cloud: Dockerized backend deployed on Render, frontend deployed on Vercel, and database hosted on MongoDB Atlas.',
      ],
      architectureFlow: [
        'React + TypeScript',
        'Axios',
        'Express REST API',
        'Authentication / Authorization Middleware',
        'Controllers / Services',
        'Mongoose',
        'MongoDB Atlas',
      ],
      authFlow: [
        'Email / Password or Google OAuth',
        'Backend verification',
        'Find/Create User',
        'JWT',
        'Protected API requests',
      ],
      databaseModelFlow: [
        'User',
        'OrganizationMember',
        'Organization',
        'Project',
        'Issue',
        'Comment',
      ],
      databaseSchema: [
        'User Collection: {_id, name, email, passwordHash, googleId, avatar, createdAt}',
        'Organization Collection: {_id, name, slug, ownerId, createdAt}',
        'OrganizationMember Collection: {_id, organizationId, userId, role: ("OWNER" | "ADMIN" | "MEMBER" | "VIEWER"), joinedAt}',
        'Project Collection: {_id, organizationId, name, description, key, leadUserId, status, createdAt}',
        'Issue Collection: {_id, projectId, title, description, status: ("BACKLOG" | "TODO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE"), priority: ("LOW" | "MEDIUM" | "HIGH" | "URGENT"), assigneeId, reporterId, createdAt}',
        'Comment Collection: {_id, issueId, userId, content, createdAt}',
        'ActivityLog Collection: {_id, organizationId, projectId, issueId, userId, action, metadata, timestamp}',
      ],
      rbacRoles: [
        {
          role: 'OWNER',
          access:
            'Full control over workspace settings, billing, member deletion, role assignment, and project creation/deletion.',
        },
        {
          role: 'ADMIN',
          access:
            'Manage projects, invite and manage organization members, configure issue boards, and assign work.',
        },
        {
          role: 'MEMBER',
          access:
            'Create and update issues, assign tasks, update statuses, participate in comment threads, and log activity.',
        },
        {
          role: 'VIEWER',
          access:
            'Read-only visibility across organizations, projects, issue trackers, comments, and activity timelines.',
        },
      ],
      issueStatuses: ['BACKLOG', 'TODO', 'IN_PROGRESS', 'IN_REVIEW', 'DONE'],
      priorityLevels: ['LOW', 'MEDIUM', 'HIGH', 'URGENT'],
      deployment:
        'Frontend: Vercel | Backend: Render (Docker Containerized) | Database: MongoDB Atlas',
      awsSetup:
        'Frontend hosted and deployed on Vercel with automatic continuous integration. Backend is fully containerized with Docker and deployed as a web service on Render. Data is persisted on a high-availability MongoDB Atlas cluster with automated backups and connection pooling.',
      whyItMatters: [
        'Authentication: Email/password registration with bcrypt password hashing alongside Google OAuth 2.0 flow.',
        'OAuth & Token Security: Stateless JWT authentication with secure headers and protected API routes.',
        'Authorization & RBAC: Multi-tier role permissions (OWNER, ADMIN, MEMBER, VIEWER) enforced at middleware and controller levels.',
        'REST API Design: Clean controller/service architecture with standardized JSON responses and error handling.',
        'Database Modeling: Complex relational schemas in MongoDB with Mongoose document population and indexing.',
        'React State Management: Type-safe TypeScript dashboard with project filtering, issue search, and activity tracking.',
        'API Integration: Axios client with request/response interceptors for seamless JWT token attachment.',
        'Error Handling: Structured try/catch pipelines with client-friendly error messaging.',
        'Docker Containerization: Portable, reproducible backend container environments.',
        'Cloud Deployment: Full-stack deployment architecture utilizing Vercel, Render, and MongoDB Atlas.',
      ],
      challenges: [
        {
          problem:
            'Development teams often manage tasks, discussions, assignments, and project progress across disconnected tools, making it difficult to understand ownership, status, priorities, and activity in one place.',
          solution:
            'Built DevFlow as a unified workspace organizing teams into organizations, projects, and issues with threaded discussions and automated audit logging.',
        },
        {
          problem:
            'Enforcing granular multi-tenant access control across nested organization, project, and issue endpoints without leaking unauthorized data.',
          solution:
            'Designed reusable Express authorization middleware that checks organization membership and role permissions (OWNER, ADMIN, MEMBER, VIEWER) before delegating to controller services.',
        },
      ],
    },
  },
]

export const testimonials = [
  {
    quote:
      'Bhaskar consistently delivers clean, well-structured MERN code. His ability to handle complex database schemas and AWS EC2 deployments makes him an invaluable full-stack engineer.',
    author: 'College Technical Club Advisor',
    title: 'Department of Computer Science (AI)',
    organization: 'MRTK',
  },
  {
    quote:
      'Working with Bhaskar on full-stack projects is seamless. He designs REST APIs with clarity, enforces security best practices, and builds interfaces that look incredible.',
    author: 'Senior Peer Developer',
    title: 'Technical Core Team',
    organization: 'Full-Stack Group',
  },
]

export const experience = [
  {
    role: 'Full-Stack Web Developer',
    company: 'Technical Core Member / Freelance',
    period: 'Jun 2026 – Jul 2026',
    points: [
      'Developed responsive web applications using React, Node.js, Express and MongoDB.',
      'Designed REST APIs and database schemas for application workflows and authentication.',
      'Configured and deployed applications using AWS EC2, Nginx and PM2.',
    ],
  },
]

export const education = [
  {
    degree: 'B.Tech. in Computer Science and Engineering (Artificial Intelligence)',
    school: 'Malla Reddy Technical Campus, Malla Reddy Vishwavidyapeeth',
    period: 'Expected 2029',
    detail: 'CGPA: 9.33 / 10',
  },
]

export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  meta: string
  credentialId?: string
  url: string | null
  file: string
  thumbnail: string
  category: 'AI & Cloud' | 'Backend & APIs' | 'Data & Databases' | 'Leadership & Soft Skills' | 'DevOps & Tools' | 'Hackathons & Events'
  isMain: boolean
  tags: string[]
  description?: string
}

export const certifications: Certification[] = [
  // ─── MAIN COURSE CERTIFICATIONS (FEATURED FIRST) ───────────────────
  {
    id: 'oracle-agentic-ai',
    name: 'Oracle Agentic AI Certified Foundations Associate',
    issuer: 'Oracle University',
    date: 'Jul 2026',
    meta: 'Credential ID: 330057245AAI26OFA',
    credentialId: '330057245AAI26OFA',
    url: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=330057245AAI26OFA',
    file: '/certificates/oracle-ai-agent-foundation.pdf',
    thumbnail: '/certificates/oracle-ai-agent-foundation.pdf.png',
    category: 'AI & Cloud',
    isMain: true,
    tags: ['Oracle Cloud', 'Agentic AI', 'Autonomous LLMs', 'Multi-Agent Systems'],
    description: 'Foundational certification covering autonomous agent architectures, LLM reasoning patterns, tool-calling frameworks, and enterprise agent deployment.',
  },
  {
    id: 'google-ai-essentials',
    name: 'Google AI Essentials Specialization (5 Courses)',
    issuer: 'Google Career Certificates',
    date: 'Aug 2026',
    meta: 'Google Verified Specialization',
    credentialId: 'Google-AI-Essentials',
    url: 'https://coursera.org/verify/specialization/google-ai-essentials',
    file: '/certificates/google-ai-essentials.pdf',
    thumbnail: '/certificates/google-ai-essentials.pdf.png',
    category: 'AI & Cloud',
    isMain: true,
    tags: ['Google AI', 'Generative AI', 'Prompt Engineering', 'Responsible AI'],
    description: '5-course comprehensive specialization covering practical generative AI tooling, prompt structuring, ethical AI development, and workflow automation.',
  },
  {
    id: 'ibm-ai-flask',
    name: 'Developing AI Applications with Python and Flask',
    issuer: 'IBM via Coursera',
    date: 'Jul 2026',
    meta: 'Credential ID: U6U8CWDLMNRS',
    credentialId: 'U6U8CWDLMNRS',
    url: 'https://coursera.org/verify/U6U8CWDLMNRS',
    file: '/certificates/ibm-ai-flask-applications.pdf',
    thumbnail: '/certificates/ibm-ai-flask-applications.pdf.png',
    category: 'Backend & APIs',
    isMain: true,
    tags: ['Python', 'Flask', 'AI Services', 'REST APIs', 'Watson AI'],
    description: 'Hands-on development of AI-powered web microservices using Flask, embedding sentiment analysis models, speech recognition, and REST API endpoints.',
  },
  {
    id: 'google-prompting-essentials',
    name: 'Google Prompting Essentials Specialization (4 Courses)',
    issuer: 'Google Career Certificates',
    date: 'Aug 2026',
    meta: 'Credential ID: 9KLCJZ6KWCW6',
    credentialId: '9KLCJZ6KWCW6',
    url: 'https://coursera.org/verify/specialization/9KLCJZ6KWCW6',
    file: '/certificates/google-prompting-essentials.pdf',
    thumbnail: '/certificates/google-prompting-essentials.pdf.png',
    category: 'AI & Cloud',
    isMain: true,
    tags: ['Prompt Engineering', 'Chain-of-Thought', 'Data Analysis', 'AI Workflows'],
    description: 'Mastery of advanced prompting strategies, few-shot prompting, persona steering, synthetic dataset synthesis, and data presentation optimization.',
  },
  {
    id: 'ibm-python-data-science',
    name: 'Python for Data Science, AI & Development',
    issuer: 'IBM via Coursera',
    date: 'Aug 2026',
    meta: 'Credential ID: 3J8YVP1EXHBZ',
    credentialId: '3J8YVP1EXHBZ',
    url: 'https://coursera.org/verify/3J8YVP1EXHBZ',
    file: '/certificates/ibm-python-data-science-ai.pdf',
    thumbnail: '/certificates/ibm-python-data-science-ai.pdf.png',
    category: 'Backend & APIs',
    isMain: true,
    tags: ['Python', 'Pandas', 'NumPy', 'Web Scraping', 'REST APIs'],
    description: 'In-depth Python programming for data extraction, scientific computation with Pandas & NumPy, HTTP requests, and backend AI pipelines.',
  },
  {
    id: 'datacamp-ai-developer',
    name: 'AI Engineer for Developers Associate',
    issuer: 'DataCamp',
    date: 'Jul 2026',
    meta: 'Credential ID: AIEDA0014827763452',
    credentialId: 'AIEDA0014827763452',
    url: 'https://www.datacamp.com/certificate/AIEDA0014827763452',
    file: '/certificates/datacamp-ai-engineer-developers.pdf',
    thumbnail: '/certificates/datacamp-ai-engineer-developers.pdf.png',
    category: 'AI & Cloud',
    isMain: true,
    tags: ['AI Engineering', 'LLM Integration', 'Embeddings', 'Vector Search'],
    description: 'Professional validation for building LLM applications, integrating embeddings, vector retrieval, and automated AI evaluation pipelines.',
  },
  {
    id: 'datacamp-ai-scientist',
    name: 'AI Engineer for Data Scientists Associate',
    issuer: 'DataCamp',
    date: 'Aug 2026',
    meta: 'Credential ID: AEDS0011677950954',
    credentialId: 'AEDS0011677950954',
    url: 'https://www.datacamp.com/certificate/AEDS0011677950954',
    file: '/certificates/datacamp-ai-engineer-data-scientists.pdf',
    thumbnail: '/certificates/datacamp-ai-engineer-data-scientists.pdf.png',
    category: 'AI & Cloud',
    isMain: true,
    tags: ['Data Science', 'Machine Learning', 'Model Evaluation', 'Python'],
    description: 'Rigorous assessment in supervised machine learning workflows, model tuning, feature engineering, and data pipeline orchestration.',
  },
  {
    id: 'nptel-communication',
    name: 'Employment Communication — NPTEL Elite (80%)',
    issuer: 'IIT Kharagpur & NPTEL',
    date: 'Mar 2026',
    meta: 'Credential ID: NPTEL26HS60S557303757',
    credentialId: 'NPTEL26HS60S557303757',
    url: 'https://drive.google.com/file/d/1ZRQvrBwSME3MiR9_7veRTWIalEACkP5q/view?usp=sharing',
    file: '/certificates/nptel-employment-communication.pdf',
    thumbnail: '/certificates/nptel-employment-communication.pdf.png',
    category: 'Leadership & Soft Skills',
    isMain: true,
    tags: ['Elite 80%', 'Executive Communication', 'Technical Writing', 'Team Leadership'],
    description: 'Top-tier 8-week lab certification from IIT Kharagpur covering executive communication, technical presentation, and professional workplace discourse.',
  },

  // ─── TECHNICAL SKILL CERTIFICATES & HACKATHONS ─────────────────────
  {
    id: 'hackerrank-sql-adv',
    name: 'HackerRank: SQL (Advanced)',
    issuer: 'HackerRank',
    date: 'Certified',
    meta: 'Verified Skill Assessment',
    credentialId: 'c43c22715e54',
    url: 'https://www.hackerrank.com/certificates/iframe/c43c22715e54',
    file: '/certificates/hackerrank-sql-advanced.pdf',
    thumbnail: '/certificates/hackerrank-sql-advanced.pdf.png',
    category: 'Data & Databases',
    isMain: false,
    tags: ['SQL', 'Complex Subqueries', 'Window Functions', 'Query Optimization'],
    description: 'Demonstrated mastery in advanced query design, multi-table joins, subqueries, indexing, and high-performance relational database querying.',
  },
  {
    id: 'hackerrank-nodejs',
    name: 'HackerRank: Node.js (Intermediate)',
    issuer: 'HackerRank',
    date: 'Certified',
    meta: 'Verified Skill Assessment',
    credentialId: 'c8aac2ddba1a',
    url: 'https://www.hackerrank.com/certificates/iframe/c8aac2ddba1a',
    file: '/certificates/hackerrank-nodejs-intermediate.pdf',
    thumbnail: '/certificates/hackerrank-nodejs-intermediate.pdf.png',
    category: 'Backend & APIs',
    isMain: false,
    tags: ['Node.js', 'Express', 'Async Patterns', 'Event Loop'],
    description: 'Validated capabilities in Node.js asynchronous architecture, streaming, event emitters, error management, and server middleware design.',
  },
  {
    id: 'hackerrank-rest-api',
    name: 'HackerRank: REST API (Intermediate)',
    issuer: 'HackerRank',
    date: 'Certified',
    meta: 'Verified Skill Assessment',
    credentialId: 'dfd284bdab37',
    url: 'https://www.hackerrank.com/certificates/iframe/dfd284bdab37',
    file: '/certificates/hackerrank-rest-api-intermediate.pdf',
    thumbnail: '/certificates/hackerrank-rest-api-intermediate.pdf.png',
    category: 'Backend & APIs',
    isMain: false,
    tags: ['REST APIs', 'HTTP Methods', 'CRUD Operations', 'API Design'],
    description: 'Tested proficiency in designing clean REST endpoints, pagination, authentication headers, error status modeling, and HTTP request routing.',
  },
  {
    id: 'hackerrank-javascript',
    name: 'HackerRank: JavaScript (Intermediate)',
    issuer: 'HackerRank',
    date: 'Certified',
    meta: 'Verified Skill Assessment',
    credentialId: '1845843f0833',
    url: 'https://www.hackerrank.com/certificates/iframe/1845843f0833',
    file: '/certificates/hackerrank-javascript-intermediate.pdf',
    thumbnail: '/certificates/hackerrank-javascript-intermediate.pdf.png',
    category: 'Backend & APIs',
    isMain: false,
    tags: ['JavaScript ES6+', 'Closures', 'Promises', 'Prototypes'],
    description: 'Comprehensive evaluation in modern JavaScript fundamentals, prototype chains, closures, async/await pipelines, and DOM/object manipulation.',
  },
  {
    id: 'hackathon-devnovate',
    name: 'DevNovate Hackathon Achievement',
    issuer: 'DevNovate Tech Summit',
    date: '2026',
    meta: 'National Hackathon Competitor',
    credentialId: 'DEVNOVATE-2026',
    url: null,
    file: '/certificates/hackathon-devnovate.jpg',
    thumbnail: '/certificates/hackathon-devnovate.jpg.png',
    category: 'Hackathons & Events',
    isMain: false,
    tags: ['Hackathon', 'Full-Stack MVP', 'Rapid Prototyping', 'Team Lead'],
    description: 'Recognized for engineering a high-impact full-stack prototype under rapid time constraints with real-time features and responsive UI.',
  },
  {
    id: 'unifesto-hackitx',
    name: 'Unifesto HackITX Technical Championship',
    issuer: 'Unifesto',
    date: 'Aug 2026',
    meta: 'Credential ID: UF-HAKITX-0665',
    credentialId: 'UF-HAKITX-0665',
    url: null,
    file: '/certificates/unifesto-hackathon.pdf',
    thumbnail: '/certificates/unifesto-hackathon.pdf.png',
    category: 'Hackathons & Events',
    isMain: false,
    tags: ['Hackathon', 'Innovation', 'System Architecture'],
    description: 'Awarded for technical problem solving, system architecture design, and competitive software development in HackITX 2026.',
  },
  {
    id: 'scrimba-git',
    name: 'Advanced Git & GitHub Professional Course',
    issuer: 'Scrimba',
    date: 'Aug 2026',
    meta: 'Verified Certificate',
    credentialId: 'Scrimba-2ffent',
    url: 'https://scrimba.com/@bhaskar2006-hub:certs;cert2ffentAFPGJy7bhxdsr6j6yc28fM4gkaGmv15FEJ3YzRvy',
    file: '/certificates/scrimba-git-and-github.pdf',
    thumbnail: '/certificates/scrimba-git-and-github.pdf.png',
    category: 'DevOps & Tools',
    isMain: false,
    tags: ['Git', 'GitHub', 'Rebase & Merge', 'CI/CD Workflows'],
    description: 'Mastery in distributed version control, interactive rebase, conflict resolution, collaborative pull request reviews, and Git CLI pipelines.',
  },
  {
    id: 'iict-ai-readiness',
    name: 'Foundation Course on AI Readiness',
    issuer: 'Indian Institute of Creative Technologies',
    date: 'Aug 2026',
    meta: 'Credential ID: IICT-24072658297',
    credentialId: 'IICT-24072658297',
    url: null,
    file: '/certificates/iict-ai-readiness.pdf',
    thumbnail: '/certificates/iict-ai-readiness.pdf.png',
    category: 'AI & Cloud',
    isMain: false,
    tags: ['AI Readiness', 'Emerging Tech', 'Applied AI'],
    description: 'Foundational coursework exploring generative AI applications, prompt crafting, AI transformation strategies, and modern tooling frameworks.',
  },
  {
    id: 'hackerrank-sql-basic',
    name: 'HackerRank: SQL (Basic)',
    issuer: 'HackerRank',
    date: 'Certified',
    meta: 'Verified Skill Certificate',
    credentialId: 'c43c22715e54',
    url: 'https://www.hackerrank.com/certificates/iframe/c43c22715e54',
    file: '/certificates/hackerrank-sql-basic.pdf',
    thumbnail: '/certificates/hackerrank-sql-basic.pdf.png',
    category: 'Data & Databases',
    isMain: false,
    tags: ['SQL', 'Relational Schemas', 'Filtering', 'Aggregations'],
    description: 'Assessment covering fundamental SQL syntax, relational table querying, conditional aggregation, and data normalization.',
  },
]




