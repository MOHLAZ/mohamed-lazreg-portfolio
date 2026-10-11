import type { Translations } from './types';

export const de: Translations = {
  dir: 'ltr',
  nav: {
    profile: 'Profil',
    domains: 'Bereiche',
    experiences: 'Erfahrung',
    projects: 'Projekte',
    skills: 'Kompetenzen',
    education: 'Ausbildung',
    certifications: 'Zertifikate',
    languages: 'Sprachen',
    contact: 'Kontakt',
  },
  navAriaLabel: 'Hauptnavigation',
  langSelectorAria: 'Sprachauswahl',

  profile: {
    sectionLabel: 'Professionelles Profil',
    name: 'Mohamed Lazreg',
    title: 'IT-Projektkoordination | Business Analysis | PMO',
    paragraphs: [
      "Mein Werdegang verbindet ein Studium der Geisteswissenschaften, eine Ausbildung im Unternehmertum und praktische Erfahrung in der Koordination von IT-Projekten. Diese Vielfalt hat mich dazu geführt, mich auf Arbeitsorganisation, Anforderungsanalyse und die Suche nach strukturierten Lösungen für konkrete Probleme zu konzentrieren.",
      "Bei RIF France und DM-NOVA habe ich Teams bei der Anwendung des Scrum-Frameworks, der Strukturierung ihrer Aktivitäten und der Arbeitsorganisation in digitalen Projekten unterstützt.",
      "Gleichzeitig habe ich ASENFAR konzipiert, ein persönliches Projekt, das der Erkundung einer Methodik-Unterstützungsplattform für das Projektmanagement gewidmet ist. Diese Initiative führte mich zur Arbeit an Produktvision, funktionalen Anforderungen, Prozessen, Dokumentation und KI-gestütztem Prototyping.",
      "Ich möchte meine berufliche Entwicklung in der IT-Projektkoordination, Business Analysis und im digitalen Produktdesign fortsetzen und zur Strukturierung von Anforderungen, zur Koordination von Aktivitäten und zur Umsetzung von Ideen in konkrete Lösungen beitragen.",
    ],
  },

  photo: {
    name: 'Mohamed Lazreg',
    portrait: 'Professionelles Porträt',
    placeholder: 'Reservierter Platz für ein professionelles Foto.',
    profileLabel: 'Professionelles Profil',
    format: 'Porträtformat 4:5',
  },

  domains: {
    sectionLabel: 'Überblick über die Kompetenzbereiche',
    sectionTitle: 'Kompetenzbereiche',
    cards: [
      {
        title: 'IT-Projektmanagement',
        description: "Arbeit organisieren, Aktivitäten strukturieren, Iterationen verfolgen und Teams bei der Anwendung agiler Methoden begleiten. Meine Erfahrung umfasst insbesondere die Scrum-Begleitung und die Koordination eines Softwareentwicklungsprojekts.",
      },
      {
        title: 'Business Analysis und Anforderungen',
        description: "Eine Idee oder einen Bedarf in verständliche und nutzbare Elemente übersetzen: funktionale Anforderungen, User Stories, Backlog, Prozesse und Dokumentation. Ziel ist es, zu klären, was umgesetzt werden soll und warum.",
      },
      {
        title: 'Produktmanagement',
        description: "Ein Problem erkunden, ein Wertversprechen definieren und eine digitale Lösung über Produktvision, User Journeys, Spezifikationen und Prototyping strukturieren. ASENFAR veranschaulicht diesen Weg von der Idee zum Prototyp.",
      },
      {
        title: 'Angewandte KI',
        description: "Den Einsatz von Künstlicher Intelligenz erkunden, um Dokumentation zu strukturieren, das Design zu unterstützen und digitale Lösungen zu erproben. Diese Praxis ist Teil eines persönlichen Ansatzes zum Lernen und zum KI-gestützten Prototyping.",
      },
    ],
  },

  experiences: {
    sectionLabel: 'Beruflicher Werdegang',
    sectionTitle: 'Erfahrung',
    items: [
      {
        period: 'Februar – Mai 2024',
        organization: 'RIF France',
        location: 'Remote · Frankreich',
        subtitle: 'Begleitung agiler Projekte',
        descriptionParagraphs: [
          "Im Rahmen von Ingenieurabschlussprojekten habe ich fünf Teams bei der Organisation ihrer Arbeit und der praktischen Anwendung des Scrum-Frameworks begleitet. Ihre Bedürfnisse variierten je nach Fortschritt der Projekte und ihrer Arbeitsweise.",
          "Meine Rolle bestand darin, die Prinzipien und Praktiken von Scrum zu erklären, ihre Anwendung zu begleiten und zur Strukturierung der Aktivitäten beizutragen. Ich habe an der Organisation und Durchführung von Scrum-Events teilgenommen, darunter Sprint Plannings, Sprint Reviews und Retrospektiven.",
          "Die Begleitung umfasste auch die Verfolgung von Aktivitäten und Iterationen, die Strukturierung des Backlogs und der User Stories, die Identifizierung aufgetretener Schwierigkeiten sowie die Erstellung von Berichten für die Betreuung.",
        ],
        domainsLabel: 'Einsatzbereiche',
        domains: [
          'Scrum',
          'Agile-Begleitung',
          'Backlog & User Stories',
          'Iterationsverfolgung',
          'Kommunikation mit der Betreuung',
        ],
        isPersonal: false,
      },
      {
        period: 'Februar – Mai 2025',
        organization: 'DM-NOVA',
        location: 'Sousse · Tunesien',
        subtitle: 'IT-Projektkoordination — PAVER',
        descriptionParagraphs: [
          "Als ich bei DM-NOVA eintrat, war die Entwicklung von PAVER, einer digitalen Plattform für Freelancer und ihre Kunden, bereits im Rückstand. Das Projekt benötigte eine strukturiertere Organisation, um Anforderungen zu klären, die Arbeit zu koordinieren und auf eine erste Produktversion hinzuarbeiten.",
          "Ich habe das Team bei der Arbeitsorganisation begleitet, indem ich Scrum und den Softwareentwicklungslebenszyklus (SDLC) kombinierte. Ich trug zur Formalisierung der Anforderungen, zur Organisation des Backlogs und zur Verfolgung von Aktivitäten und Iterationen bei, insbesondere mit ClickUp und GitHub.",
          "Dieser Ansatz begleitete den Fortschritt des Projekts bis zur Erstellung eines MVP und dem Beginn von Tests und Korrekturen. Der Eigentümer stoppte das Projekt dann vor dem öffentlichen Start. Das Produkt wurde daher nicht online gestellt.",
        ],
        domainsLabel: 'Einsatzbereiche',
        domains: [
          'IT-Koordination',
          'Scrum & SDLC',
          'Anforderungsstrukturierung',
          'ClickUp',
          'GitHub',
        ],
        isPersonal: false,
      },
      {
        period: 'Seit 2025',
        organization: 'ASENFAR',
        location: 'Persönliche Initiative',
        subtitle: 'Produktdesign und KI-gestütztes Prototyping',
        descriptionParagraphs: [
          "Die Idee zu ASENFAR entstand während meiner Erfahrung bei DM-NOVA aus einer Reflexion über die Grenzen traditioneller Projektmanagement-Tools. Ich interessierte mich dafür, wie eine Plattform einem Projektverantwortlichen helfen könnte, die nächsten Schritte zu bestimmen und einen подходящий Ansatz für seine Situation zu wählen.",
          "Ich habe diese Reflexion in ein strukturiertes Produktkonzept umgewandelt. Die Arbeit umfasste die Produktvision, das Geschäftsmodell, die Markt- und Wettbewerberanalyse, die funktionalen und technischen Anforderungen, die Projektmanagement-Prozesse und die User Journeys.",
          "Ich habe Produkt- und Technisdokumentation erstellt, darunter ein PRD und ein TSD, und dann KI-gestütztes Prototyping und Entwicklung erkundet. Das Projekt verfügt über einen vollständigen Businessplan, Produkt- und Technisdokumentation und einen teilweise funktionsfähigen Prototyp.",
          "ASENFAR befindet sich weiterhin in der Entwicklung und wurde nicht öffentlich gestartet. Es handelt sich um eine persönliche Initiative, nicht um eine Festanstellung oder eine Kundenleistung.",
        ],
        domainsLabel: 'Arbeitsbereiche',
        domains: [
          'Produktvision',
          'Businessplan',
          'PRD & TSD',
          'Prozesse & Workflows',
          'KI-gestütztes Prototyping',
        ],
        isPersonal: true,
      },
    ],
  },

  projects: {
    sectionLabel: 'Leistungen und Initiativen',
    sectionTitle: 'Projekte',
    items: [
      {
        number: 'Projekt 01',
        badge: 'MVP erstellt',
        title: 'PAVER — Digitale Plattform für Freelancer',
        subtitle: 'DM-NOVA · Februar – Mai 2025 · Sousse, Tunesien',
        contextLabel: 'Kontext und Problem',
        context: "PAVER ist eine Plattform, die Freelancer und ihre Kunden verbinden soll. Bei meinem Eintritt war die Entwicklung im Rückstand. Die Anforderungen, das Backlog und die Iterationen mussten besser strukturiert werden, um den Fortschritt des Produkts zu unterstützen.",
        contributionLabel: 'Mein Beitrag',
        contributions: [
          "Koordination und Scrum-Begleitung eines dreiköpfigen Teams, zusätzlich zu mir.",
          "Formalisierung von über 80 User Stories.",
          "Organisation der Arbeit in sieben Sprints.",
          "Einsatz von Scrum ergänzend zum Softwareentwicklungslebenszyklus (SDLC).",
          "Einsatz von ClickUp und GitHub zur Organisation und Verfolgung der Arbeit.",
          "Beitrag zu Wireframes, Prototyp und Dokumentation.",
        ],
        resultLabel: 'Ergebnis und Projektstatus',
        result: "Ein MVP wurde erstellt und die Test- und Korrekturphase begonnen. Der Eigentümer stoppte das Projekt dann vor dem öffentlichen Start. Kein öffentlicher Release wird beansprucht.",
        skillsLabel: 'Demonstrierte Kompetenzen',
        skills: ['IT-Koordination', 'Scrum', 'User Stories', 'Backlog', 'ClickUp', 'GitHub'],
        statusLabel: 'Status',
        status: 'privates Projekt, keine öffentliche Demo verfügbar.',
        isInProgress: false,
      },
      {
        number: 'Projekt 02',
        badge: 'Laufend',
        title: 'ASENFAR — Methodik-Unterstützung für das Projektmanagement',
        subtitle: 'Persönliche Initiative · Seit 2025',
        contextLabel: 'Kontext und Problem',
        context: "ASENFAR erkundet ein Plattformkonzept, das Projektverantwortlichen helfen soll, die nächsten relevanten Aktionen zu identifizieren und einen подходящий Ansatz zur Situation zu wählen. Die Idee entstand aus einer Reflexion über die Grenzen traditioneller aufgabenverfolgungszentrierter Tools.",
        contributionLabel: 'Durchgeführte Arbeiten',
        contributions: [
          "Problemdefinition, Produktvision und Wertversprechen.",
          "Erstellung eines Businessplans und Markt- und Wettbewerberanalyse.",
          "Verfassung eines PRD (Product Requirements Document) und eines TSD (Technical Specification Document).",
          "Strukturierung von Prozessen und Workflows basierend auf Referenzen wie PMI, PRINCE2 und Agile.",
          "Gestaltung der Informationsarchitektur, der User Journeys und der UX/UI-Struktur.",
          "Erkundung des KI-gestützten Prototypings und der Entwicklung.",
        ],
        resultLabel: 'Aktueller Status',
        result: "Der Businessplan und die Produkt- und Technisdokumentation sind verfügbar. Der Prototyp ist teilweise funktionsfähig und die Entwicklung läuft. Das Projekt wurde nicht öffentlich gestartet; keine Kundenakzeptanz wird beansprucht.",
        skillsLabel: 'Demonstrierte Kompetenzen',
        skills: ['Problemanalyse', 'Produktvision', 'Businessplan', 'PRD & TSD', 'Prozesse', 'Angewandte KI', 'KI-gestütztes Prototyping'],
        statusLabel: 'Status',
        status: 'persönliche Initiative in Entwicklung, keine öffentliche Demo verfügbar.',
        isInProgress: true,
      },
    ],
  },

  skills: {
    sectionLabel: 'Kompetenzen',
    sectionTitle: 'Kompetenzen',
    cards: [
      {
        title: 'Projektmanagement',
        items: [
          "Arbeitsorganisation in Sprints mit Scrum.",
          "Aufgabenverteilung und -verfolgung in ClickUp und Jira.",
          "Strukturierung des Backlogs.",
          "Anforderungsmanagement und Projektdokumentation.",
          "Verfolgung des Fortschritts von Aktivitäten und Liefergegenständen.",
        ],
      },
      {
        title: 'Business Analysis',
        items: [
          "Beschreibung der Kundenanforderungen.",
          "Formalisierung von Anforderungen in User Stories.",
          "Sicherung der Qualität durch Akzeptanzkriterien.",
          "Definition der umzusetzenden Funktionen für jeden Teil.",
          "Dokumentation von PRD und TSD.",
        ],
      },
      {
        title: 'Digitale Produktentwicklung',
        items: [
          "Produktvision.",
          "Erstellung des Prototyps und anschließend der Wireframes der Plattform.",
          "Einsatz von KI zur Unterstützung von Design und Prototyping.",
          "Kombination von KI und Automatisierung für eine User Journey im Projektmanagement.",
          "Dokumentation und Spezifikationen.",
        ],
      },
      {
        title: 'Kommunikation und Teamarbeit',
        items: [
          "Erstellung von Präsentations- und Schulungsunterlagen.",
          "Einholen von Kundenfeedback und Nachverfolgung der geforderten Korrekturen.",
          "Zusammenarbeit im Team über direkte Kanäle und Brainstorming.",
          "Lösung von Problemen zwischen Teammitgliedern im laufenden Prozess.",
        ],
      },
    ],
  },

  education: {
    sectionLabel: 'Ausbildung',
    sectionTitle: 'Ausbildung',
    items: [
      {
        title: "Master im Unternehmertum",
        institution: 'IHEC: Institut de Hautes Etudes Commerciales',
        institutionLabel: 'Einrichtung',
        location: 'Sousse, Tunesien',
        locationLabel: 'Ort',
        period: 'September 2023–Juli 2025',
        periodLabel: 'Zeitraum',
        description: "Ein Studium mit Schwerpunkt auf Management, Anforderungsanalyse, Unternehmensführung und Projektstrukturierung.",
      },
      {
        title: "Philosophie, Ethik und politische Philosophie",
        institution: 'ISSHT: Institut Supérieur de Sciences Humaines',
        institutionLabel: 'Einrichtung',
        location: 'Tunis, Tunesien',
        locationLabel: 'Ort',
        period: '2010–2013',
        periodLabel: 'Zeitraum',
        description: "Ein Studium mit Schwerpunkt auf kritischem Denken, begründeter Analyse, ethischer Reflexion und der Untersuchung von Ideen.",
      },
    ],
  },

  certifications: {
    sectionLabel: 'Zertifikate und Weiterbildungen',
    sectionTitle: 'Zertifikate und Weiterbildungen',
    groups: [
      {
        category: 'Projektmanagement',
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
        category: 'Management und Organisation',
        items: [
          'Management Leadership — Saylor Academy',
          'Organisation Planning and Development for the Six Sigma Black Belt',
        ],
      },
      {
        category: 'Weitere Weiterbildungen',
        items: [
          'Risk in Modern Society',
          'International Security Management',
          'The Effect of Fires on People, Property and the Environment',
          'Leading Healthcare Quality and Safety',
          'QHSE-Verantwortlicher — Qualitas Groupe, Sousse',
        ],
      },
    ],
  },

  languages: {
    sectionLabel: 'Sprachen',
    sectionTitle: 'Sprachen',
    cards: [
      {
        name: 'Arabisch',
        level: 'Muttersprache',
        levelLabel: 'Niveau',
        certs: [],
        certsLabel: 'Zertifikate',
      },
      {
        name: 'Französisch',
        level: 'C1',
        levelLabel: 'Angegebenes Niveau',
        certs: [],
        certsLabel: 'Zertifikate',
      },
      {
        name: 'Deutsch',
        level: '',
        levelLabel: 'Niveau',
        certs: ['telc Deutsch B2'],
        certsLabel: 'Erhaltene Zertifikate',
      },
      {
        name: 'Englisch',
        level: 'B1',
        levelLabel: 'Niveau',
        certs: [],
        certsLabel: 'Zertifikate',
      },
    ],
  },

  contact: {
    sectionLabel: '',
    title: 'Nehmen wir Kontakt auf',
    text: "",
    formTitle: '',
    formNotice: "",
    nameLabel: 'Name',
    namePlaceholder: 'Ihr Name',
    emailLabel: 'E-Mail-Adresse',
    emailPlaceholder: 'Ihre E-Mail-Adresse',
    subjectLabel: 'Betreff',
    subjectPlaceholder: 'Betreff Ihrer Nachricht',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Ihre Nachricht',
    submitButton: 'Senden',
  },

  footer: {
    name: 'Mohamed Lazreg',
    portfolioMention: 'Professionelles Portfolio',
    rights: 'Alle Rechte vorbehalten.',
  },
};
