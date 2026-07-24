export const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#sample-report", label: "Sample Report" },
  { href: "#pricing", label: "Pricing" },
  { href: "#security", label: "Security & Data" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

export const problemCards = [
  {
    icon: "🔁",
    title: "Models keep changing",
    body: "Design disciplines issue new IFC versions continuously. Without structured comparison, project managers lack a clear view of what actually changed between releases."
  },
  {
    icon: "📍",
    title: "Impact is hard to locate",
    body: "Even when changes are identified, understanding where they occurred and whether coordination risks have increased requires manual cross-referencing."
  },
  {
    icon: "⏱",
    title: "Late detection is costly",
    body: "Design changes identified late on site affect procurement, prefabrication and scheduling. Earlier visibility reduces downstream impact."
  }
];

export const screenshots = [
  {
    src: "/images/bimspect/bimspect-viewer-change-visualization.png",
    width: 920,
    height: 936,
    alt: "BIMSpect Viewer – 3D IFC model with change visualization",
    label: "BIMSpect Viewer.",
    body: "3D IFC model with colour-coded change intensity. Blue = unchanged, pink/red = high change activity."
  },
  {
    src: "/images/bimspect/bimspect-discipline-analytics-dashboard.png",
    width: 1352,
    height: 728,
    alt: "BIMSpect Architectural Analytics dashboard",
    label: "Discipline Analytics.",
    body: "Design completion, confidence, stability and rework pressure shown as management-level KPIs with recommended next steps."
  }
];

export const workflowSteps = [
  {
    number: "01",
    title: "Upload IFC model versions or connect via API",
    body: "Provide two or more IFC files from the same project, or use API access to pull versions directly from your own CDE or project database. BIMSpect accepts standard IFC2x3 and IFC4."
  },
  {
    number: "02",
    title: "BIMSpect analyses model changes",
    body: "Added, deleted and modified objects are detected, classified by discipline, and structured for review."
  },
  {
    number: "03",
    title: "Coordination risks are highlighted",
    body: "Changes are linked to potential coordination concerns that require attention from the project team."
  },
  {
    number: "04",
    title: "A management report is generated",
    body: "The output supports design meetings, BIM coordination sessions and project-level follow-up."
  }
];

export const outputMetrics = [
  {
    label: "Change volume",
    value: "51",
    valueClass: "value-accent",
    description: "Objects changed in this version",
    progress: 65,
    color: "var(--accent)"
  },
  {
    label: "Coordination risks",
    value: "4",
    valueClass: "value-warn",
    description: "Items flagged for review",
    progress: 30,
    color: "var(--warn)"
  },
  {
    label: "Disciplines covered",
    value: "3",
    valueClass: "",
    description: "ARK, RAK, TATE",
    progress: 100,
    color: "var(--ok)"
  },
  {
    label: "Report output",
    value: "PDF",
    valueClass: "value-ok",
    description: "Exportable for meetings",
    progress: 100,
    color: "var(--ok)"
  }
];

export const useCases = [
  {
    tag: "BIM Coordinators",
    title: "Track what changed and focus on what matters",
    body: "Track what changed between model versions and focus coordination meetings on the most relevant changes. Stop reviewing models manually — let BIMSpect surface the delta."
  },
  {
    tag: "Design Managers",
    title: "Understand design progress and model maturity",
    body: "Understand design progress, model maturity and change intensity across disciplines. Get a structured view of design development that supports informed decisions at design gates."
  },
  {
    tag: "Contractors",
    title: "Detect late design changes before they reach the site",
    body: "Detect late design changes that may affect procurement, production planning or site coordination. Earlier visibility means fewer surprises and more time to respond."
  }
];

export const reportKpis = [
  { value: "51", label: "Total changes", className: "kpi-blue" },
  { value: "+14", label: "Added", className: "kpi-green" },
  { value: "−6", label: "Deleted", className: "kpi-red" },
  { value: "~31", label: "Modified", className: "kpi-orange" }
];

export const disciplineRows = [
  { name: "Structural", count: "28", progress: 82 },
  { name: "Architectural", count: "14", progress: 41 },
  { name: "MEP / TATE", count: "9", progress: 26 }
];

export const riskItems = [
  "Beam cross-section change in grid F4–F6 may affect connection details (RAK ↔ ARK)",
  "Door position shift in corridor B may conflict with MEP routing",
  "3 new slab openings added — MEP clash check recommended"
];

export const reportContents = [
  "Project overview and model versions compared",
  "Change volume summary (added / deleted / modified)",
  "Discipline-level change intensity",
  "Coordination risk indicators",
  "Management summary",
  "Recommended review questions for the coordination meeting",
  "Exportable PDF format"
];

export const quotes = [
  {
    quote: '"We need this design progress and maturity data for our daily work."',
    initials: "BM",
    name: "BIM Manager",
    role: "Pilot participant, infrastructure project"
  },
  {
    quote: '"Looks nice! We can see the design work now."',
    initials: "DM",
    name: "Design Manager",
    role: "Pilot participant, building project"
  },
  {
    quote:
      '"This tool reduces the impact of design changes on our coordination process."',
    initials: "PM",
    name: "Project Manager",
    role: "Pilot participant, contractor"
  },
  {
    quote:
      '"Having a structured change report before the coordination meeting saves time and helps us focus on the right things."',
    initials: "BC",
    name: "BIM Coordinator",
    role: "Pilot participant, design office"
  }
];

export const pricingPlans = [
  {
    tier: "Option 1",
    name: "Project Report",
    description:
      "Fixed-price analysis for one project or model package. Ideal for evaluating BIMSpect on a real project before committing.",
    features: [
      "Full design history — all IFC versions, all disciplines",
      "Change report delivered as PDF",
      "Coordination risk indicators",
      "Single invoice, no subscription required"
    ],
    price: "€490",
    priceSuffix: "/ project",
    detail:
      "Full design history analysis across all IFC versions submitted for the project — all disciplines, no version limits. Delivered as a management report. Single invoice, no subscription.",
    cta: "Request a project report",
    href: "#contact",
    featured: false
  },
  {
    tier: "Option 2",
    name: "Professional Licence",
    description:
      "For BIM coordinators and design managers who need repeated model comparisons throughout the project lifecycle.",
    features: [
      "Unlimited projects, unlimited IFC versions",
      "Continuous analysis as new versions are submitted",
      "Full report history",
      "Discipline-level breakdowns",
      "DPA available on request"
    ],
    price: "€1 490",
    priceSuffix: "/ user / year",
    subDetail: "€125 / month, billed annually",
    detail:
      "Continuous analysis across all your active projects. New IFC versions are analysed as they are submitted. Unlimited projects, unlimited versions. Reports shareable within your organisation.",
    cta: "Request professional access",
    href: "#contact",
    featured: true
  },
  {
    tier: "Option 3",
    name: "Paid Evaluation",
    description:
      "For companies that want to evaluate BIMSpect across multiple projects or integrate it into an existing BIM workflow.",
    features: [
      "Multi-project scope",
      "Custom report format options",
      "NDA and DPA available",
      "Onboarding session included"
    ],
    detail: "Custom pricing — contact us for a tailored package.",
    cta: "Book a product walkthrough",
    href: "#contact",
    featured: false
  }
];

export const securityItems = [
  {
    icon: "📁",
    title: "What files can you upload?",
    body: "IFC files (IFC2x3, IFC4). No proprietary format lock-in. Files are accepted in standard open-format exchange packages."
  },
  {
    icon: "🌍",
    title: "Where is data processed?",
    body: "Processing takes place within the EU. We will specify the exact data centre location on request."
  },
  {
    icon: "🗑",
    title: "Is data stored or deleted?",
    body: "Project files are used solely for producing the requested analysis. Deletion schedules and retention periods are agreed per contract."
  },
  {
    icon: "🤝",
    title: "NDA and DPA",
    body: "Non-disclosure agreements and data processing agreements are available for all professional access tiers. Contact us to arrange before uploading any sensitive files."
  },
  {
    icon: "🔒",
    title: "Who sees your files?",
    body: "Only the BIMSpect team processes your models, solely for the purposes stated in your access agreement. No third-party access without written consent."
  },
  {
    icon: "🚫",
    title: "Personal data",
    body: "We do not intentionally collect personal data from IFC files. If models contain personal information, this should be noted in the access request."
  }
];

export const teamMembers = [
  {
    initials: "EL",
    name: "Dr. Eelon Lappalainen",
    role: "CEO & Co-Founder",
    bio: "Construction and BIM researcher. Background in work study methodology and digital construction systems. Leads business development and product strategy."
  },
  {
    initials: "HA",
    name: "Dr. Hisham Abou-Ibrahim",
    role: "CPO & Co-Founder",
    bio: "BIM and construction informatics specialist. Leads product development and design. Research background in building information modelling and design management."
  },
  {
    initials: "AL",
    name: "Albin Lamichhane",
    role: "CTO & Co-Founder",
    bio: "Software engineer leading technical development. Responsible for BIMSpect's IFC processing engine and report generation pipeline."
  },
  {
    initials: "OS",
    name: "Prof. Olli Seppänen",
    role: "Scientific Advisor",
    bio: "Professor of construction management at Aalto University. Scientific advisor on construction project management and lean construction research."
  }
];
