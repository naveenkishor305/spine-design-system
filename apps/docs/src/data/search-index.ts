export type SearchIndexEntry = {
  label: string;
  href: string;
  group: string;
  /** Extra searchable terms not present in the label itself. */
  keywords?: string;
};

export const searchIndex: SearchIndexEntry[] = [
  // Documentation sections
  { label: "Overview", href: "#overview", group: "Sections" },
  { label: "Principles", href: "#principles", group: "Sections" },
  { label: "Foundations", href: "#foundations", group: "Sections", keywords: "color typography spacing radius elevation motion tokens" },
  { label: "Components", href: "#components", group: "Sections" },
  { label: "Clinical patterns", href: "#clinical-patterns", group: "Sections" },
  { label: "Accessibility", href: "#accessibility", group: "Sections" },
  { label: "Content & language", href: "#content-language", group: "Sections" },
  { label: "Information architecture", href: "#information-architecture", group: "Sections" },
  { label: "External referral", href: "#external-referral", group: "Sections" },
  { label: "Role workspaces", href: "#workspaces", group: "Sections" },
  { label: "System states", href: "#states", group: "Sections", keywords: "loading empty error restricted offline" },
  { label: "Privacy, access & audit", href: "#privacy", group: "Sections" },
  { label: "Governance", href: "#governance", group: "Sections" },
  { label: "Release & migration", href: "#release-roadmap", group: "Sections", keywords: "roadmap version v2" },

  // Base components
  { label: "Button", href: "#components-actions-fields", group: "Components", keywords: "primary secondary tertiary critical action" },
  { label: "IconButton", href: "#components-actions-fields", group: "Components" },
  { label: "TextField", href: "#components-actions-fields", group: "Components", keywords: "input startAdornment endAdornment" },
  { label: "SelectField", href: "#components-actions-fields", group: "Components", keywords: "dropdown select" },
  { label: "CheckboxField", href: "#components-actions-fields", group: "Components", keywords: "checkbox" },
  { label: "Alert", href: "#components-feedback", group: "Components", keywords: "information success warning error critical restricted" },
  { label: "StatusBadge", href: "#components-feedback", group: "Components", keywords: "status tone badge" },
  { label: "Panel / PanelHeader / PanelBody", href: "#components", group: "Components" },
  { label: "SystemState", href: "#components", group: "Components", keywords: "loading empty no-results error restricted critical" },

  // Cross-cutting primitives
  { label: "Timeline", href: "#components-scheduling", group: "Components", keywords: "audit log history actor timestamp" },
  { label: "ProcessStageTracker", href: "#components-lifecycle", group: "Components", keywords: "stage lifecycle workflow approval" },
  { label: "ComplianceCountdown", href: "#components-lifecycle", group: "Components", keywords: "due overdue reassessment calibration expiry" },
  { label: "ChainOfCustodyTrail", href: "#components-lifecycle", group: "Components", keywords: "handoff custody verified witness" },
  { label: "RiskScoreBadge", href: "#components-lifecycle", group: "Components", keywords: "risk fall must score sofa apache" },
  { label: "IsolationTypeBadge", href: "#components-lifecycle", group: "Components", keywords: "contact droplet airborne protective precautions" },
  { label: "InteractionSeverityBadge", href: "#components-lifecycle", group: "Components", keywords: "drug interaction contraindicated major moderate minor" },
  { label: "AssetLifecycleRecord", href: "#components-lifecycle", group: "Components", keywords: "equipment asset maintenance biomedical" },
  { label: "MetricTile", href: "#components-scheduling", group: "Components", keywords: "stat kpi dashboard" },
  { label: "RankedBarList", href: "#components-scheduling", group: "Components", keywords: "ranked bars dashboard" },
  { label: "VarianceIndicator", href: "#components-scheduling", group: "Components", keywords: "delta variance trend" },
  { label: "AgingReceivablesLadder", href: "#components-scheduling", group: "Components", keywords: "accounts receivable aging buckets rcm" },
  { label: "SlotGrid", href: "#components-scheduling", group: "Components", keywords: "scheduling slots calendar appointment theatre" },
  { label: "QueueTokenBoard", href: "#components-scheduling", group: "Components", keywords: "queue token opd waiting" },
  { label: "RequestTicketCard", href: "#components-scheduling", group: "Components", keywords: "ticket request dispatch" },
  { label: "DispatchBoard", href: "#components-scheduling", group: "Components", keywords: "kanban dispatch housekeeping biomedical transport" },
  { label: "SupplierComparisonMatrix", href: "#components-scheduling", group: "Components", keywords: "supplier rfx sourcing weighted scoring" },
  { label: "InventoryLevelGauge", href: "#components-scheduling", group: "Components", keywords: "par level stock inventory min max" },
  { label: "HierarchyTree", href: "#components-scheduling", group: "Components", keywords: "org chart department hierarchy explorer" },

  // Emergency & Trauma
  { label: "AcuityBadge", href: "#clinical-patterns-emergency", group: "Clinical patterns", keywords: "triage esi ctas manchester ats level" },
  { label: "ReassessmentTimer", href: "#clinical-patterns-emergency", group: "Clinical patterns", keywords: "reassessment overdue triage" },
  { label: "PathwayActivationBanner", href: "#clinical-patterns-emergency", group: "Clinical patterns", keywords: "trauma stroke stemi sepsis rapid response activation" },

  // Surgical & Critical Care
  { label: "SurgicalSafetyChecklist", href: "#clinical-patterns-surgical", group: "Clinical patterns", keywords: "who sign-in time-out sign-out checklist ot" },
];
