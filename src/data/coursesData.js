export const COURSES = [
  {
    id: 'agentic-ai',
    title: 'Artificial Intelligence (Agentic AI & Generative AI)',
    badge: 'FLAGSHIP',
    badgeType: 'flagship',
    duration: '8 Weeks / 40 Hours',
    description: 'Build autonomous AI agents, multi-agent orchestrations, enterprise RAG pipelines, and customized domain LLMs.',
    techStack: ['LangGraph', 'CrewAI', 'AutoGen', 'LLMs & RAG', 'Fine-tuning'],
    category: 'AI & GenAI',
    enquiryValue: 'Artificial Intelligence (Agentic AI & Gen AI)',
    syllabus: [
      { week: 'Weeks 1-2', topic: 'LLM Foundations & Prompt Engineering', details: 'Tokenization, embeddings, temperature, zero-shot/few-shot prompts, structured outputs.' },
      { week: 'Weeks 3-4', topic: 'Enterprise RAG & Vector Databases', details: 'Chunking strategies, ChromaDB/Pinecone, hybrid search, re-ranking, and retrieval evaluation.' },
      { week: 'Weeks 5-6', topic: 'Agentic Frameworks: LangGraph & CrewAI', details: 'Multi-agent state machines, cyclical graphs, human-in-the-loop, autonomous tool execution.' },
      { week: 'Weeks 7-8', topic: 'Deployment, Fine-Tuning & Capstone', details: 'LoRA/QLoRA adaptation, FastAPI agent serving, Docker containerization, monitoring.' }
    ]
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning (M/L)',
    badge: 'CORE ML',
    badgeType: 'secondary',
    duration: '8 Weeks / 40 Hours',
    description: 'End-to-end mathematical grounding, model training, feature engineering, and high-performance predictive systems.',
    techStack: ['Algorithms', 'Model Building', 'Predictive Modeling', 'ML Workflows'],
    category: 'Machine Learning',
    enquiryValue: 'Machine Learning',
    syllabus: [
      { week: 'Weeks 1-2', topic: 'Mathematical Foundations & Preprocessing', details: 'Linear algebra, calculus, probability, scaling, imputation, encoding.' },
      { week: 'Weeks 3-4', topic: 'Supervised Learning Algorithms', details: 'Linear & Logistic Regression, Decision Trees, Random Forests, XGBoost, LightGBM.' },
      { week: 'Weeks 5-6', topic: 'Unsupervised Learning & Deep Learning Intro', details: 'K-Means, PCA, t-SNE, neural networks architecture, backpropagation, PyTorch.' },
      { week: 'Weeks 7-8', topic: 'MLOps & Predictive Model Deployment', details: 'Pipeline building, cross-validation, hyperparameter tuning, model registry & deployment.' }
    ]
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    badge: 'ANALYTICS',
    badgeType: 'muted',
    duration: '8 Weeks / 40 Hours',
    description: 'Synthesize big enterprise tables, run statistical tests, craft SQL queries, and deliver data-backed business insights.',
    techStack: ['Data Cleaning', 'Statistical Analysis', 'Advanced SQL', 'EDA'],
    category: 'Analytics',
    enquiryValue: 'Data Analytics',
    syllabus: [
      { week: 'Weeks 1-2', topic: 'Modern Data Foundations & Excel Mastery', details: 'Pivot tables, VLOOKUP/XLOOKUP, index-match, financial modeling, descriptive stats.' },
      { week: 'Weeks 3-4', topic: 'Advanced SQL for Analytics', details: 'Complex joins, subqueries, Window functions (ROW_NUMBER, RANK, LEAD, LAG), CTEs.' },
      { week: 'Weeks 5-6', topic: 'Exploratory Data Analysis with Python', details: 'Pandas dataframes, NumPy vectors, Seaborn distributions, anomaly detection.' },
      { week: 'Weeks 7-8', topic: 'Hypothesis Testing & Business Insights', details: 'A/B testing, p-values, executive summaries, cohort retention analytics.' }
    ]
  },
  {
    id: 'python-dev',
    title: 'Python Development',
    badge: 'PROGRAMMING',
    badgeType: 'primary',
    duration: '8 Weeks / 40 Hours',
    description: 'From modular clean-code fundamentals and OOP concepts to FastAPI backend services and asynchronous architectures.',
    techStack: ['Python Basics', 'OOP Concepts', 'API Development', 'Automation'],
    category: 'Programming',
    enquiryValue: 'Python',
    syllabus: [
      { week: 'Weeks 1-2', topic: 'Core Python & Data Structures', details: 'Variables, loops, functions, lists, dicts, sets, list comprehensions, generators.' },
      { week: 'Weeks 3-4', topic: 'OOP & Modern Software Architecture', details: 'Classes, inheritance, polymorphism, encapsulation, solid design principles, modularity.' },
      { week: 'Weeks 5-6', topic: 'FastAPI Backend & Asyncio', details: 'Pydantic schemas, dependency injection, async endpoints, JWT authentication.' },
      { week: 'Weeks 7-8', topic: 'Databases, Testing & Production Ops', details: 'PostgreSQL + SQLAlchemy ORM, PyTest unit tests, Git workflows, Docker packaging.' }
    ]
  },
  {
    id: 'data-viz',
    title: 'Data Visualization',
    badge: 'BI & DASHBOARDS',
    badgeType: 'emerald',
    duration: '8 Weeks / 40 Hours',
    description: 'Turn intricate database rows into executive cockpits, interactive BI dashboards, and persuasive data stories.',
    techStack: ['Business Intelligence', 'PowerBI', 'Tableau', 'Visual Storytelling'],
    category: 'Analytics',
    enquiryValue: 'Data Visualization',
    syllabus: [
      { week: 'Weeks 1-2', topic: 'Visual Information Architecture', details: 'Gestalt principles, color psychology, layout grids, KPI card structuring.' },
      { week: 'Weeks 3-4', topic: 'PowerBI Desktop & DAX Modeling', details: 'Data relationships, CALCULATE, time intelligence functions, row-level security.' },
      { week: 'Weeks 5-6', topic: 'Tableau Visual Analytics', details: 'LOD expressions, calculated fields, dashboard actions, interactive parameters.' },
      { week: 'Weeks 7-8', topic: 'Production Executive Storytelling', details: 'Live streaming datasets, C-suite presentation frameworks, portfolio deployment.' }
    ]
  },
  {
    id: 'custom-track',
    title: 'General / Custom AI Track',
    badge: 'CUSTOM TRACK',
    badgeType: 'secondary',
    duration: 'Custom Duration',
    description: 'Designed for working engineers, career switchers, and enterprise cohorts seeking customized combination modules.',
    techStack: ['Modular Syllabi', 'Enterprise Ops', 'Flexible Timings'],
    category: 'Custom',
    enquiryValue: 'General / Multiple Courses',
    syllabus: [
      { week: 'Module 1', topic: 'Personalized Skill Diagnostic', details: '1-on-1 assessment of existing technical background, gaps, and exact career targets.' },
      { week: 'Module 2', topic: 'Customized Curriculum Path', details: 'Tailored blend of Python, ML, GenAI or BI based on your industry requirements.' },
      { week: 'Module 3', topic: 'Targeted Domain Capstone', details: 'Build a production project directly relevant to your target domain (Fintech, Health, EdTech).' },
      { week: 'Module 4', topic: 'Targeted Placement Preparation', details: 'Resume fine-tuning, domain-specific mock interview screens, and recruiter introductions.' }
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'Data Scientist @ TechLogix',
    track: 'Data Science & ML',
    batch: 'Batch of 2024',
    verified: 'Verified Placement • 140% Salary Hike',
    quote: '“The sheer focus on practical real-world capstone projects made the whole difference. Instead of theoretical code snippets, I had 4 full predictive ML pipelines running on GitHub. The weekly tests kept me on my toes, and the interview prep at Patel Nagar campus directly cracked my TechLogix placement.”',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    initials: 'RS'
  },
  {
    id: 2,
    name: 'Priya Rawat',
    role: 'AI Engineer @ AI Innovations Hub',
    track: 'Agentic AI & GenAI',
    batch: 'Batch of 2024',
    verified: 'Verified Placement • Agentic AI Track',
    quote: '“The Agentic AI curriculum is unlike anything else taught in Uttarakhand. We built production LangGraph agents, CrewAI multi-agent swarms, and RAG architectures from scratch. The 1-on-1 mock interviews mirrored actual corporate hiring loops. I had two offers in hand right after course completion!”',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    initials: 'PR'
  }
];

export const WHY_US_PILLARS = [
  {
    number: '1',
    title: '1. Real-Time Projects',
    icon: 'code_blocks',
    color: 'var(--color-primary)',
    stat: '✓ 40+ Industry Capstones',
    statColor: 'var(--color-primary)',
    description: 'Directly author production-grade code, deploy microservices, and build verifiable GitHub repositories instead of static slide presentations.'
  },
  {
    number: '2',
    title: '2. Weekly Tests',
    icon: 'monitoring',
    color: 'var(--color-tertiary)',
    stat: '✓ Detailed Scorecards',
    statColor: 'var(--color-tertiary)',
    description: 'Continuous diagnostic evaluations every Saturday to identify code efficiency gaps, algorithmic errors, and track individual learning velocity.'
  },
  {
    number: '3',
    title: '3. 1-on-1 Mock Interviews',
    icon: 'record_voice_over',
    color: 'var(--color-secondary)',
    stat: '✓ Senior Staff Engineers',
    statColor: 'var(--color-secondary)',
    description: 'Simulate realistic tech company loops: live coding screens, system architecture interrogation, and behavioral clarity drills.'
  },
  {
    number: '4',
    title: '4. Placement Support',
    icon: 'verified',
    color: 'var(--color-primary-fixed-dim)',
    stat: '✓ 100% Dedicated Support',
    statColor: 'var(--color-primary)',
    description: 'High-impact ATS-optimized resume revamping, LinkedIn re-branding, direct corporate referrals, and guaranteed interview opportunities.'
  }
];

export const CAMPUS_SCHEDULE = [
  { timeSlot: 'Morning Lab Batches', timing: '08:00 AM - 12:00 PM', highlight: false },
  { timeSlot: 'Afternoon Lab Batches', timing: '01:00 PM - 05:00 PM', highlight: false },
  { timeSlot: 'Evening Working Professional Track', timing: '06:00 PM - 08:30 PM', highlight: false },
  { timeSlot: 'Sunday Masterclasses & Code Sprints', timing: 'By Prior Registration', highlight: true }
];
