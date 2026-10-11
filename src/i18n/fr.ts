import { User } from 'lucide-react';
import type { Translations } from './types';

export const fr: Translations = {
  dir: 'ltr',
  nav: {
    profile: 'Profil',
    domains: 'Domaines',
    experiences: 'Expériences',
    projects: 'Projets',
    skills: 'Compétences',
    education: 'Formation',
    certifications: 'Certifications',
    languages: 'Langues',
    contact: 'Contact',
  },
  navAriaLabel: 'Navigation principale',
  langSelectorAria: 'Sélecteur de langue',

  profile: {
    sectionLabel: 'Profil professionnel',
    name: 'Mohamed Lazreg',
    title: 'Coordination de projets IT | Business Analysis | PMO',
    paragraphs: [
      "Mon parcours associe une formation en sciences humaines, une formation en entrepreneuriat et une expérience pratique de la coordination de projets informatiques. Cette diversité m'a conduit à m'intéresser à l'organisation du travail, à l'analyse des besoins et à la recherche de solutions structurées à des problèmes concrets.",
      "Chez RIF France et DM-NOVA, j'ai accompagné des équipes dans l'application du framework Scrum, la structuration de leurs activités et l'organisation du travail sur des projets numériques.",
      "En parallèle, j'ai conçu ASENFAR, un projet personnel consacré à l'exploration d'une plateforme d'assistance méthodologique au management de projet. Cette initiative m'a amené à travailler sur la vision produit, les exigences fonctionnelles, les processus, la documentation et le prototypage assisté par l'intelligence artificielle.",
      "Je souhaite poursuivre mon développement professionnel dans la coordination de projets IT, la Business Analysis et la conception de produits numériques, en contribuant à la structuration des besoins, à la coordination des activités et à la transformation des idées en solutions concrètes.",
    ],
  },

  photo: {
    name: 'Mohamed Lazreg',
    portrait: 'Portrait professionnel',
    placeholder: 'Emplacement réservé à une photographie professionnelle.',
    profileLabel: 'Profil professionnel',
    format: 'Format portrait 4:5',
  },

  domains: {
    sectionLabel: 'Aperçu Professionnel',
    sectionTitle: 'Domaines de compétence',
    cards: [
      {
        title: 'Gestion de projets IT',
        description: "Organiser le travail, structurer les activités, suivre les itérations et accompagner les équipes dans l’application de méthodes agiles. Mon expérience couvre notamment l’accompagnement Scrum et la coordination d’un projet de développement logiciel",
      },
      {
        title: 'B.Analysis et besoins',
        description: "Transformer une idée ou un besoin en éléments compréhensibles et exploitables : exigences fonctionnelles, User Stories, backlog, processus et documentation. L’objectif est de clarifier ce qui doit être réalisé et pourquoi.",
      },
      {
        title: 'Gestion de produits',
        description: "Explorer un problème, définir une proposition de valeur et structurer une solution numérique à travers la vision produit, les parcours utilisateurs, les spécifications et le prototypage. ASENFAR illustre cette démarche de l’idée au prototype.",
      },
      {
        title: 'IA appliquée',
        description: "Explorer l’utilisation de l’intelligence artificielle pour structurer la documentation, soutenir la conception et expérimenter des solutions numériques. Cette pratique s’inscrit dans une démarche personnelle d’apprentissage et de prototypage assisté par l’IA.",
      },
    ],
  },

  experiences: {
    sectionLabel: 'Parcours professionnel',
    sectionTitle: 'Expériences',
    items: [
      {
        period: 'Février – Mai 2024',
        organization: 'RIF France',
        location: 'À distance · France',
        subtitle: 'Accompagnement de projets agiles',
        descriptionParagraphs: [
          "Dans le cadre de projets de fin d'études en ingénierie, j'ai accompagné cinq équipes dans l'organisation de leur travail et la mise en pratique du framework Scrum. Leurs besoins variaient selon l'état d'avancement des projets et leur manière de travailler.",
          "Mon rôle consistait à expliquer les principes et les pratiques de Scrum, à accompagner leur application et à contribuer à la structuration des activités. J'ai participé à l'organisation et à l'animation des événements Scrum, notamment les Sprint Plannings, les Sprint Reviews et les rétrospectives.",
          "L'accompagnement portait également sur le suivi des activités et des itérations, la structuration du backlog et des User Stories, l'identification des difficultés rencontrées ainsi que la préparation de comptes rendus destinés à l'encadrement.",
        ],
        domainsLabel: "Domaines d'intervention",
        domains: [
          'Scrum',
          'Accompagnement agile',
          'Backlog & User Stories',
          'Suivi des itérations',
          "Communication avec l'encadrement",
        ],
        isPersonal: false,
      },
      {
        period: 'Février – Mai 2025',
        organization: 'DM-NOVA',
        location: 'Sousse · Tunisie',
        subtitle: 'Coordination de projet IT — PAVER',
        descriptionParagraphs: [
          "Lorsque j'ai rejoint DM-NOVA, le développement de PAVER, une plateforme numérique destinée aux freelances et à leurs clients, avait déjà pris du retard. Le projet avait besoin d'une organisation plus structurée pour clarifier les besoins, coordonner le travail et progresser vers une première version du produit.",
          "J'ai accompagné l'équipe dans l'organisation de son travail en combinant Scrum et le cycle de développement logiciel (SDLC). J'ai contribué à la formalisation des besoins, à l'organisation du backlog et au suivi des activités et des itérations, notamment à l'aide de ClickUp et GitHub.",
          "Cette démarche a accompagné la progression du projet jusqu'à la production d'un MVP, puis au début des tests et des corrections. Le propriétaire a ensuite interrompu le projet avant son lancement public. Le produit n'a donc pas été mis en ligne.",
        ],
        domainsLabel: "Domaines d'intervention",
        domains: [
          'Coordination IT',
          'Scrum & SDLC',
          'Structuration des besoins',
          'ClickUp',
          'GitHub',
        ],
        isPersonal: false,
      },
      {
        period: 'Depuis 2025',
        organization: 'ASENFAR',
        location: 'Initiative personnelle',
        subtitle: "Conception produit et prototypage assisté par l'IA",
        descriptionParagraphs: [
          "L'idée d'ASENFAR est née au cours de mon expérience chez DM-NOVA, à partir d'une réflexion sur les limites des outils traditionnels de gestion de projet. Je me suis intéressé à la manière dont une plateforme pourrait aider un responsable de projet à déterminer les prochaines actions à entreprendre et à choisir une démarche adaptée à sa situation.",
          "J'ai transformé cette réflexion en un concept produit structuré. Le travail a porté sur la vision du produit, le modèle économique, l'analyse du marché et des solutions concurrentes, les exigences fonctionnelles et techniques, les processus de management de projet et les parcours utilisateurs.",
          "J'ai élaboré une documentation produit et technique, notamment un PRD et un TSD, puis exploré le prototypage et le développement assistés par l'intelligence artificielle. Le projet dispose d'un business plan complet, d'une documentation produit et technique et d'un prototype partiellement fonctionnel.",
          "ASENFAR reste en cours de développement et n'a pas fait l'objet d'un lancement public. Il s'agit d'une initiative personnelle, et non d'un emploi salarié ou d'une prestation réalisée pour un client.",
        ],
        domainsLabel: 'Domaines de travail',
        domains: [
          'Vision produit',
          'Business plan',
          'PRD & TSD',
          'Processus & workflows',
          "Prototypage assisté par l'IA",
        ],
        isPersonal: true,
      },
    ],
  },

  projects: {
    sectionLabel: 'Réalisations et initiatives',
    sectionTitle: 'Projets',
    items: [
      {
        number: 'Projet 01',
        badge: 'MVP réalisé',
        title: 'PAVER — Plateforme numérique pour freelances',
        subtitle: 'DM-NOVA · Février – Mai 2025 · Sousse, Tunisie',
        contextLabel: 'Contexte et problème',
        context: "PAVER est une plateforme destinée à mettre en relation des freelances et leurs clients. À mon arrivée, le développement avait pris du retard. Il fallait mieux structurer les besoins, le backlog et les itérations pour accompagner la progression du produit.",
        contributionLabel: 'Ma contribution',
        contributions: [
          "Coordination et accompagnement Scrum d'une équipe de trois personnes, en plus de moi.",
          "Formalisation de plus de 80 User Stories.",
          "Organisation du travail en sept sprints.",
          "Utilisation de Scrum en complément du cycle de développement logiciel (SDLC).",
          "Utilisation de ClickUp et GitHub pour organiser et suivre le travail.",
          "Contribution aux wireframes, au prototype et à la documentation.",
        ],
        resultLabel: 'Résultat et état du projet',
        result: "Un MVP a été produit et la phase de tests et de corrections a commencé. Le propriétaire a ensuite interrompu le projet avant son lancement public. Aucune mise en ligne publique n'est revendiquée.",
        skillsLabel: 'Compétences démontrées',
        skills: ['Coordination IT', 'Scrum', 'User Stories', 'Backlog', 'ClickUp', 'GitHub'],
        statusLabel: 'Statut',
        status: 'projet privé, sans démonstration publique disponible.',
        isInProgress: false,
      },
      {
        number: 'Projet 02',
        badge: 'En cours',
        title: 'ASENFAR — Assistance méthodologique au management de projet',
        subtitle: 'Initiative personnelle · Depuis 2025',
        contextLabel: 'Contexte et problème',
        context: "ASENFAR explore un concept de plateforme destiné à aider les responsables de projet à identifier les prochaines actions pertinentes et à choisir une démarche adaptée à la situation. L'idée est née d'une réflexion sur les limites des outils traditionnels centrés sur le suivi des tâches.",
        contributionLabel: 'Travail réalisé',
        contributions: [
          "Définition du problème, de la vision produit et de la proposition de valeur.",
          "Élaboration d'un business plan et analyse du marché et des solutions concurrentes.",
          "Rédaction d'un PRD (Product Requirements Document) et d'un TSD (Technical Specification Document).",
          "Structuration de processus et de workflows à partir de références telles que PMI, PRINCE2 et Agile.",
          "Conception de l'architecture de l'information, des parcours utilisateurs et de la structure UX/UI.",
          "Exploration du prototypage et du développement assistés par l'intelligence artificielle.",
        ],
        resultLabel: 'État actuel',
        result: "Le business plan et la documentation produit et technique sont disponibles. Le prototype est partiellement fonctionnel et le développement se poursuit. Le projet n'a pas été lancé publiquement ; aucune adoption par des clients n'est revendiquée.",
        skillsLabel: 'Compétences démontrées',
        skills: ['Problem analysis', 'Vision produit', 'Business Plan', 'PRD & TSD', 'Processes', 'IA appliqué', 'Prototage assisté par IA'],
        statusLabel: 'Statut',
        status: 'initiative personnelle en développement, sans démonstration publique.',
        isInProgress: true,
      },
    ],
  },

  skills: {
    sectionLabel: 'Compétences',
    sectionTitle: 'Compétences',
    cards: [
      {
        title: 'Gestion de projets',
        items: [
          "Organisation du travail en sprints avec Scrum.",
          "Répartition et suivi des tâches dans ClickUp et Jira.",
          "Structuration du backlog.",
          "Gestion des exigences et documentation projet.",
          "Suivi de l'avancement des activités et les livrables.",
        ],
      },
      {
        title: 'Business Analysis',
        items: [
          "Description des besoins des clients.",
          "Formalisation des exigences en User Storys.",
          "Maintenir la qualité à travers les critères d'acceptation.",
          "Définition des fonctionnalités à réaliser pour chaque partie.",
          "Documentation des PRD, TSD.",
        ],
      },
      {
        title: 'Devéloppement digital de produits',
        items: [
          "Vision produit.",
          "Élaboration du prototype et ensuite le wireframe de la plateforme.",
          "Utilisation de l'IA pour assister la conception et le prototypage.",
          "Combination entre l'IA et l'automatisation pour créer un parcours utilisateur en gestion de projets.",
          "Documentation et spécifications.",
        ],
      },
      {
        title: 'Communication et équipe ',
        items: [
          "Préparation de supports de présentation et de formation.",
          "Recueil des retours du client et suivi des corrections.",
          "Collaboration avec l'équipe à travers les canals direct et le brainstorming.",
          "Résoudre les problèmes entre les menbres par l'instant.",
        ],
      },
    ],
  },

  education: {
    sectionLabel: 'Formation',
    sectionTitle: 'Formation',
    items: [
      {
        title: "Master en entrepreneuriat",
        institution: 'IHEC: Institut de Hautes Etudes Commerciales',
        institutionLabel: 'Établissement',
        location: 'Sousse, Tunisie',
        locationLabel: 'Lieu',
        period: 'Septembre 2023–juillet 2025',
        periodLabel: 'Période',
        description: "Formation axée sur le management, l’analyse des besoins, la gestion d’entreprise et la structuration de projets.",
      },
      {
        title: "Philosophie, éthique et philosophie politique",
        institution: 'ISSHT: Institut Supèrieur de Sciences Humaines',
        institutionLabel: 'Établissement',
        location: 'Tunis, Tunisie',
        locationLabel: 'Lieu',
        period: '2010–2013',
        periodLabel: 'Période',
        description: "Formation centrée sur la pensée critique, l’analyse argumentée, le questionnement éthique et l’examen des idées.",
      },
    ],
  },

  certifications: {
    sectionLabel: 'Certifications et formations complémentaires',
    sectionTitle: 'Certifications et formations complémentaires',
    groups: [
      {
        category: 'Gestion de projet',
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
        category: 'Management et organisation',
        items: [
          'Management Leadership — Saylor Academy',
          'Organisation Planning and Development for the Six Sigma Black Belt',
        ],
      },
      {
        category: 'Autres formations',
        items: [
          'Risk in Modern Society',
          'International Security Management',
          'The Effect of Fires on People, Property and the Environment',
          'Leading Healthcare Quality and Safety',
          'Responsable QHSE — Qualitas Groupe, Sousse',
        ],
      },
    ],
  },

  languages: {
    sectionLabel: 'Langues',
    sectionTitle: 'Langues',
    cards: [
      {
        name: 'Arabe',
        level: 'Langue maternelle',
        levelLabel: 'Niveau',
        certs: [],
        certsLabel: 'Certifications',
      },
      {
        name: 'Français',
        level: 'C1',
        levelLabel: 'Niveau déclaré',
        certs: [],
        certsLabel: 'Certifications',
      },
      {
        name: 'Allemand',
        level: '',
        levelLabel: 'Niveau',
        certs: ['telc Deutsch B2'],
        certsLabel: 'Certifications obtenues',
      },
      {
        name: 'Anglais',
        level: 'B1',
        levelLabel: 'Niveau',
        certs: [],
        certsLabel: 'Certifications',
      },
    ],
  },

  contact: {
    sectionLabel: '',
    title: 'Entrons en contact',
    text: "",
    formTitle: '',
    formNotice: "",
    nameLabel: 'Nom',
    namePlaceholder: 'Votre nom',
    emailLabel: 'Adresse e-mail',
    emailPlaceholder: 'Votre adresse e-mail',
    subjectLabel: 'Sujet',
    subjectPlaceholder: 'Sujet de votre message',
    messageLabel: 'Message',
    messagePlaceholder: 'Votre message',
    submitButton: 'Envoyer',
  },

  footer: {
    name: 'Mohamed Lazreg',
    portfolioMention: 'Portfolio professionnel',
    rights: 'Tous droits réservés.',
  },
};
