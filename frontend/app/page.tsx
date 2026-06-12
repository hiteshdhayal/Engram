'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import HeroSection from '@/components/HeroSection';
import AgentDemoSection from '@/components/AgentDemoSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BrainActivityBox from '@/components/BrainActivityBox';
import FeatureCardsSection from '@/components/FeatureCardsSection';
import StatsSection from '@/components/StatsSection';
import ClosingCTASection from '@/components/ClosingCTASection';

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <HeroSection />
      <AgentDemoSection />
      <HowItWorksSection />
      <BrainActivityBox />
      <FeatureCardsSection />
      <StatsSection />
      <ClosingCTASection />
    </main>
  );
}
