import LanguageProvider from '@/i18n/LanguageProvider';
import Navbar from '@/components/Navbar';
import ProfileSection from '@/components/ProfileSection';
import DomainsSection from '@/components/DomainsSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import CertificationsSection from '@/components/CertificationsSection';
import LanguagesSection from '@/components/LanguagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-mesh text-slate-800">
        <Navbar />
        <main>
          <ProfileSection />
          <DomainsSection />
          <ExperiencesSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <CertificationsSection />
          <LanguagesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
