import { Hero } from './sections/Hero/Hero';
import { Features } from './sections/Features/Features';
import { ModulesSection } from './sections/Modules/Modules';
import { PricingSection } from './sections/Pricing/Pricing';
import { Footer } from './components/Footer/Footer';
import styles from './App.module.scss';

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Hero />
      <Features />
      <ModulesSection />
      <PricingSection />
      <Footer />
    </div>
  );
};