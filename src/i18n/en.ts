import type { Translations } from './types';

export const en: Translations = {
  dir: 'ltr',
  nav: {
    profile: 'Profile',
    domains: 'Domains',
    experiences: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    certifications: 'Certifications',
    languages: 'Languages',
    contact: 'Contact',
  },
  navAriaLabel: 'Main navigation',
  langSelectorAria: 'Language selector',

  profile: {
    sectionLabel: 'Professional Profile',
    name: 'Mohamed Lazreg',
    title: 'IT Project Coordination | Business Analysis | PMO',
    paragraphs: [
      "My background combines studies in humanities, training in entrepreneurship, and hands-on experience in coordinating IT projects. This diversity led me to focus on work organization, requirements analysis, and the search for structured solutions to concrete problems.",
      "At RIF France and DM-NOVA, I supported teams in applying the Scrum framework, structuring their activities, and organizing work on digital projects.",
      "In parallel, I designed ASENFAR, a personal project dedicated to exploring a methodology-assistance platform for project management. This initiative led me to work on product vision, functional requirements, processes, documentation, and AI-assisted prototyping.",
      "I wish to continue my professional development in IT project coordination, Business Analysis, and digital product design, contributing to structuring requirements, coordinating activities, and transforming ideas into concrete solutions.",
    ],
  },

  photo: {
    name: 'Mohamed Lazreg',
    portrait: 'Professional portrait',
    placeholder: 'Reserved space for a professional photograph.',
    profileLabel: 'Professional profile',
    format: 'Portrait format 4:5',
    download: 'Download photo',
  },

  domains: {
    sectionLabel: 'Overview of areas of expertise',
    sectionTitle: 'Areas of expertise',
    cards: [
      {
        title: 'IT Project Management',
        description: "Organizing work, structuring activities, tracking iterations, and supporting teams in applying agile methods. My experience notably covers Scrum support and the coordination of a software development project.",
      },
      {
        title: 'Business Analysis and requirements',
        description: "Turning an idea or a need into understandable and actionable elements: functional requirements, User Stories, backlog, processes, and documentation. The goal is to clarify what must be delivered and why.",
      },
      {
        title: 'Product management',
        description: "Exploring a problem, defining a value proposition, and structuring a digital solution through product vision, user journeys, specifications, and prototyping. ASENFAR illustrates this approach from idea to prototype.",
      },
      {
        title: 'Applied AI',
        description: "Exploring the use of artificial intelligence to structure documentation, support design, and experiment with digital solutions. This practice is part of a personal approach to learning and AI-assisted prototyping.",
      },
    ],
  },

  experiences: {
    sectionLabel: 'Professional journey',
    sectionTitle: 'Experience',
    items: [
      {
        period: 'February – May 2024',
        organization: 'RIF France',
        location: 'Remote · France',
        subtitle: 'Agile project support',
        descriptionParagraphs: [
          "As part of final-year engineering projects, I supported five teams in organizing their work and putting the Scrum framework into practice. Their needs varied depending on the progress of their projects and how they worked.",
          "My role was to explain the principles and practices of Scrum, support their application, and contribute to structuring activities. I participated in organizing and facilitating Scrum events, including Sprint Plannings, Sprint Reviews, and retrospectives.",
          "The support also covered tracking activities and iterations, structuring the backlog and User Stories, identifying difficulties encountered, and preparing progress reports for the supervision team.",
        ],
        domainsLabel: 'Areas of intervention',
        domains: [
          'Scrum',
          'Agile support',
          'Backlog & User Stories',
          'Iteration tracking',
          'Communication with supervision',
        ],
        isPersonal: false,
      },
      {
        period: 'February – May 2025',
        organization: 'DM-NOVA',
        location: 'Sousse · Tunisia',
        subtitle: 'IT project coordination — PAVER',
        descriptionParagraphs: [
          "When I joined DM-NOVA, the development of PAVER, a digital platform for freelancers and their clients, was already behind schedule. The project needed a more structured organization to clarify requirements, coordinate work, and progress toward a first version of the product.",
          "I supported the team in organizing their work by combining Scrum and the software development lifecycle (SDLC). I contributed to formalizing requirements, organizing the backlog, and tracking activities and iterations, notably using ClickUp and GitHub.",
          "This approach guided the project's progression up to the production of an MVP, followed by the start of testing and corrections. The owner then halted the project before its public launch. The product was therefore not put online.",
        ],
        domainsLabel: 'Areas of intervention',
        domains: [
          'IT coordination',
          'Scrum & SDLC',
          'Requirements structuring',
          'ClickUp',
          'GitHub',
        ],
        isPersonal: false,
      },
      {
        period: 'Since 2025',
        organization: 'ASENFAR',
        location: 'Personal initiative',
        subtitle: 'Product design and AI-assisted prototyping',
        descriptionParagraphs: [
          "The idea for ASENFAR emerged during my experience at DM-NOVA, from a reflection on the limitations of traditional project management tools. I became interested in how a platform could help a project manager determine the next actions to take and choose an approach suited to their situation.",
          "I turned this reflection into a structured product concept. The work covered product vision, the business model, market and competitor analysis, functional and technical requirements, project management processes, and user journeys.",
          "I developed product and technical documentation, including a PRD and a TSD, then explored AI-assisted prototyping and development. The project has a complete business plan, product and technical documentation, and a partially functional prototype.",
          "ASENFAR remains under development and has not been publicly launched. It is a personal initiative, not salaried employment or a client engagement.",
        ],
        domainsLabel: 'Areas of work',
        domains: [
          'Product vision',
          'Business plan',
          'PRD & TSD',
          'Processes & workflows',
          'AI-assisted prototyping',
        ],
        isPersonal: true,
      },
    ],
  },

  projects: {
    sectionLabel: 'Achievements and initiatives',
    sectionTitle: 'Projects',
    items: [
      {
        number: 'Project 01',
        badge: 'MVP delivered',
        title: 'PAVER — Digital platform for freelancers',
        subtitle: 'DM-NOVA · February – May 2025 · Sousse, Tunisia',
        contextLabel: 'Context and problem',
        context: "PAVER is a platform designed to connect freelancers and their clients. Upon my arrival, development was behind schedule. The requirements, backlog, and iterations needed better structuring to support the product's progression.",
        contributionLabel: 'My contribution',
        contributions: [
          "Coordination and Scrum support for a team of three, in addition to myself.",
          "Formalization of over 80 User Stories.",
          "Organization of work into seven sprints.",
          "Use of Scrum alongside the software development lifecycle (SDLC).",
          "Use of ClickUp and GitHub to organize and track work.",
          "Contribution to wireframes, the prototype, and documentation.",
        ],
        resultLabel: 'Result and project status',
        result: "An MVP was produced and the testing and correction phase began. The owner then halted the project before its public launch. No public release is claimed.",
        skillsLabel: 'Skills demonstrated',
        skills: ['IT coordination', 'Scrum', 'User Stories', 'Backlog', 'ClickUp', 'GitHub'],
        statusLabel: 'Status',
        status: 'private project, no public demo available.',
        isInProgress: false,
      },
      {
        number: 'Project 02',
        badge: 'In progress',
        title: 'ASENFAR — Methodology assistance for project management',
        subtitle: 'Personal initiative · Since 2025',
        contextLabel: 'Context and problem',
        context: "ASENFAR explores a platform concept designed to help project managers identify the next relevant actions and choose an approach suited to the situation. The idea emerged from a reflection on the limitations of traditional task-tracking-centered tools.",
        contributionLabel: 'Work done',
        contributions: [
          "Problem definition, product vision, and value proposition.",
          "Development of a business plan and market and competitor analysis.",
          "Drafting of a PRD (Product Requirements Document) and a TSD (Technical Specification Document).",
          "Structuring of processes and workflows based on references such as PMI, PRINCE2, and Agile.",
          "Design of information architecture, user journeys, and UX/UI structure.",
          "Exploration of AI-assisted prototyping and development.",
        ],
        resultLabel: 'Current status',
        result: "The business plan and product and technical documentation are available. The prototype is partially functional and development is ongoing. The project has not been publicly launched; no client adoption is claimed.",
        skillsLabel: 'Skills demonstrated',
        skills: ['Problem analysis', 'Product vision', 'Business Plan', 'PRD & TSD', 'Processes', 'Applied AI', 'AI-assisted prototyping'],
        statusLabel: 'Status',
        status: 'personal initiative in development, no public demo available.',
        isInProgress: true,
      },
    ],
  },

  skills: {
    sectionLabel: 'Skills',
    sectionTitle: 'Skills',
    cards: [
      {
        title: 'Project Management',
        items: [
          "Organizing work in sprints with Scrum.",
          "Assigning and tracking tasks in ClickUp and Jira.",
          "Structuring the backlog.",
          "Managing requirements and project documentation.",
          "Tracking progress of activities and deliverables.",
        ],
      },
      {
        title: 'Business Analysis',
        items: [
          "Describing client needs.",
          "Formalizing requirements into User Stories.",
          "Maintaining quality through acceptance criteria.",
          "Defining the features to be delivered for each part.",
          "Documenting PRDs and TSDs.",
        ],
      },
      {
        title: 'Digital Product Development',
        items: [
          "Product vision.",
          "Building the prototype and then the wireframes of the platform.",
          "Using AI to support design and prototyping.",
          "Combining AI and automation to create a project-management user journey.",
          "Documentation and specifications.",
        ],
      },
      {
        title: 'Communication and Teamwork',
        items: [
          "Preparing presentation and training materials.",
          "Collecting client feedback and tracking the requested corrections.",
          "Collaborating with the team through direct channels and brainstorming.",
          "Resolving issues between team members as they arise.",
        ],
      },
    ],
  },

  education: {
    sectionLabel: 'Education',
    sectionTitle: 'Education',
    items: [
      {
        title: "Master's in Entrepreneurship",
        institution: 'IHEC: Institut de Hautes Etudes Commerciales',
        institutionLabel: 'Institution',
        location: 'Sousse, Tunisia',
        locationLabel: 'Location',
        period: 'September 2023–July 2025',
        periodLabel: 'Period',
        description: "A program focused on management, requirements analysis, business administration, and project structuring.",
      },
      {
        title: "Philosophy, Ethics, and Political Philosophy",
        institution: 'ISSHT: Institut Supérieur de Sciences Humaines',
        institutionLabel: 'Institution',
        location: 'Tunis, Tunisia',
        locationLabel: 'Location',
        period: '2010–2013',
        periodLabel: 'Period',
        description: "A program centered on critical thinking, reasoned analysis, ethical inquiry, and the examination of ideas.",
      },
    ],
  },

  certifications: {
    sectionLabel: 'Certifications and additional training',
    sectionTitle: 'Certifications and additional training',
    groups: [
      {
        category: 'Project Management',
        items: ['Google Project Management Certificate — Google / Coursera'],
      },
      {
        category: 'Scrum',
        items: [
          'Introduction to Scrum Master Profession',
          'Scrum Fundamentals Certified (SFC) - SCRUMstudy',
        ],
      },
      {
        category: 'Business Analysis',
        items: ['Foundations of SAP Business Analysis'],
      },
      {
        category: 'Data',
        items: [
          'Ask Questions to Make Data-Driven Decisions',
          'Foundations: Data, Data, Everywhere',
        ],
      },
      {
        category: 'Management and Organization',
        items: [
          'Management Leadership — Saylor Academy',
          'Organisation Planning and Development for the Six Sigma Black Belt',
        ],
      },
      {
        category: 'Other training',
        items: [
          'Risk in Modern Society',
          'International Security Management',
          'The Effect of Fires on People, Property and the Environment',
          'Leading Healthcare Quality and Safety',
          'QHSE Manager — Qualitas Groupe, Sousse',
        ],
      },
    ],
  },

  languages: {
    sectionLabel: 'Languages',
    sectionTitle: 'Languages',
    cards: [
      {
        name: 'Arabic',
        level: 'Native language',
        levelLabel: 'Level',
        certs: [],
        certsLabel: 'Certifications',
      },
      {
        name: 'French',
        level: 'C1',
        levelLabel: 'Declared level',
        certs: [],
        certsLabel: 'Certifications',
      },
      {
        name: 'German',
        level: '',
        levelLabel: 'Level',
        certs: ['telc Deutsch B2'],
        certsLabel: 'Certifications obtained',
      },
      {
        name: 'English',
        level: 'B1',
        levelLabel: 'Level',
        certs: [],
        certsLabel: 'Certifications',
      },
    ],
  },

  contact: {
    sectionLabel: '',
    title: "Let's get in touch",
    text: "",
    formTitle: '',
    formNotice: "",
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email address',
    emailPlaceholder: 'Your email address',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'Subject of your message',
    messageLabel: 'Message',
    messagePlaceholder: 'Your message',
    submitButton: 'Send',
    submittingButton: 'Sending...',
    successTitle: 'Message sent successfully',
    successMessage: 'Thank you for your message. I will get back to you directly via email as soon as possible.',
    errorMessage: 'An error occurred while sending your message. Please try again later.',
    rateLimitMessage: 'Please wait a few moments before sending another message.',
    resetButton: 'Send another message',
  },

  footer: {
    name: 'Mohamed Lazreg',
    portfolioMention: 'Professional portfolio',
    rights: 'All rights reserved.',
  },
};
