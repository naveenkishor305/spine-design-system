import { DocsNavigationProvider } from "@/components/layout/docs-navigation-provider";
import { DocsSidebar } from "@/components/layout/docs-sidebar";
import { SiteHeader } from "@/components/layout/site-header";
import { AccessibilitySection } from "@/components/sections/accessibility-section";
import { ClinicalPatternsSection } from "@/components/sections/clinical-patterns-section";
import { ComponentsSection } from "@/components/sections/components-section";
import { ContentLanguageSection } from "@/components/sections/content-language-section";
import { ExternalReferralSection } from "@/components/sections/external-referral-section";
import { FoundationsSection } from "@/components/sections/foundations-section";
import { GovernanceSection } from "@/components/sections/governance-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InformationArchitectureSection } from "@/components/sections/information-architecture-section";
import { PrinciplesSection } from "@/components/sections/principles-section";
import { PrivacyAccessAuditSection } from "@/components/sections/privacy-access-audit-section";
import { ReleaseRoadmapSection } from "@/components/sections/release-roadmap-section";
import { RoleWorkspacesSection } from "@/components/sections/role-workspaces-section";
import { SystemStatesSection } from "@/components/sections/system-states-section";

export default function Home() {
  return (
    <DocsNavigationProvider>
      <SiteHeader />
      <DocsSidebar />

      <main className="min-h-screen pt-14 lg:pl-[264px]">
        <HeroSection />
        <PrinciplesSection />
        <FoundationsSection />
        <ComponentsSection />
        <ClinicalPatternsSection />
        <AccessibilitySection />
        <ContentLanguageSection />
        <InformationArchitectureSection />
        <ExternalReferralSection />
        <RoleWorkspacesSection />
        <SystemStatesSection />
        <PrivacyAccessAuditSection />
        <GovernanceSection />
        <ReleaseRoadmapSection />
      </main>
    </DocsNavigationProvider>
  );
}
