export type LanguageCode = 'fr' | 'en' | 'de' | 'ar';

export interface NavStrings {
  profile: string;
  domains: string;
  experiences: string;
  projects: string;
  skills: string;
  education: string;
  certifications: string;
  languages: string;
  contact: string;
}

export interface DomainCard {
  title: string;
  description: string;
}

export interface ActivityItem {
  text: string;
}

export interface Experience {
  period: string;
  organization: string;
  location: string;
  subtitle: string;
  descriptionParagraphs: string[];
  domainsLabel: string;
  domains: string[];
  isPersonal: boolean;
}

export interface Project {
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  contextLabel: string;
  context: string;
  contributionLabel: string;
  contributions: string[];
  resultLabel: string;
  result: string;
  skillsLabel: string;
  skills: string[];
  statusLabel: string;
  status: string;
  isInProgress: boolean;
}

export interface SkillCard {
  title: string;
  items: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  institutionLabel: string;
  location: string;
  locationLabel: string;
  period: string;
  periodLabel: string;
  description: string;
}

export interface CertGroup {
  category: string;
  items: string[];
}

export interface LanguageCard {
  name: string;
  level: string;
  levelLabel: string;
  certs: string[];
  certsLabel: string;
}

export interface PhotoStrings {
  name: string;
  portrait: string;
  placeholder: string;
  profileLabel: string;
  format: string;
  download: string;
}

export interface Translations {
  dir: 'ltr' | 'rtl';
  nav: NavStrings;
  navAriaLabel: string;
  langSelectorAria: string;
  profile: {
    sectionLabel: string;
    name: string;
    title: string;
    paragraphs: string[];
  };
  photo: PhotoStrings;
  domains: {
    sectionLabel: string;
    sectionTitle: string;
    cards: DomainCard[];
  };
  experiences: {
    sectionLabel: string;
    sectionTitle: string;
    items: Experience[];
  };
  projects: {
    sectionLabel: string;
    sectionTitle: string;
    items: Project[];
  };
  skills: {
    sectionLabel: string;
    sectionTitle: string;
    cards: SkillCard[];
  };
  education: {
    sectionLabel: string;
    sectionTitle: string;
    items: EducationItem[];
  };
  certifications: {
    sectionLabel: string;
    sectionTitle: string;
    groups: CertGroup[];
  };
  languages: {
    sectionLabel: string;
    sectionTitle: string;
    cards: LanguageCard[];
  };
  contact: {
    sectionLabel: string;
    title: string;
    text: string;
    formTitle: string;
    formNotice: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submittingButton: string;
    successTitle: string;
    successMessage: string;
    errorMessage: string;
    rateLimitMessage: string;
    resetButton: string;
  };
  footer: {
    name: string;
    portfolioMention: string;
    rights: string;
  };
}
