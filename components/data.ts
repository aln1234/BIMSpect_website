export const commercialNavLinks = [
  { href: "#workflow", label: "Workflow" },
  { href: "#benefits", label: "Benefits" },
  { href: "#roles", label: "Roles" },
  { href: "#sample-report", label: "Sample Report" },
  { href: "#security", label: "Security" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" }
];

export const technicalNavLinks = [
  { href: "#workflow", label: "Workflow" },
  { href: "#product-screenshots", label: "Screenshots" },
  { href: "#sample-report", label: "Sample Report" },
  { href: "#security", label: "Security" },
  { href: "#research", label: "Research" },
  { href: "#about", label: "Team" }
];

export const footerLinks = [
  { href: "#workflow", label: "Workflow" },
  { href: "#roles", label: "Roles" },
  { href: "#sample-report", label: "Sample Report" },
  { href: "#security", label: "Security & Data" },
  { href: "#about", label: "About" },
  {
    href: "https://www.linkedin.com/company/bimspect",
    label: "LinkedIn",
    external: true
  }
];

export const technicalFooterLinks = [
  { href: "#workflow", label: "Workflow" },
  { href: "#product-screenshots", label: "Screenshots" },
  { href: "#sample-report", label: "Sample Report" },
  { href: "#security", label: "Security & Data" },
  { href: "#research", label: "Research" },
  { href: "#about", label: "Team" },
  {
    href: "https://www.linkedin.com/company/bimspect",
    label: "LinkedIn",
    external: true
  }
];

export const navLinks = commercialNavLinks;

export const trustMarkers = [
  "IFC2x3 / IFC4",
  "BIM coordination",
  "Design management",
  "Research-backed",
  "EU-based",
  "No AI training on client files"
];

export const problemCards = [
  {
    icon: "🔁",
    title: "Model versions multiply",
    body: "Disciplines issue new IFC files continuously, but teams lack a repeatable way to understand the delta between releases."
  },
  {
    icon: "📍",
    title: "Impact is hard to locate",
    body: "Technical changes need to be translated into project-level implications: where they occurred, who is affected and what should be reviewed next."
  },
  {
    icon: "⏱",
    title: "Late detection is costly",
    body: "Changes found late can affect procurement, prefabrication, site sequencing and coordination work. Earlier visibility creates time to respond."
  }
];

export const workflowCards = [
  {
    number: "01",
    title: "Model comparison",
    body: "Upload two or more IFC versions and detect added, deleted and modified objects across the project."
  },
  {
    number: "02",
    title: "Change understanding",
    body: "Structure changes by discipline, object type, floor, system or other project-relevant categories."
  },
  {
    number: "03",
    title: "Risk prioritisation",
    body: "Highlight possible coordination concerns and changes that may require review before procurement or site work."
  },
  {
    number: "04",
    title: "Management reporting",
    body: "Generate reports that support BIM coordination meetings, design management reviews and client communication."
  }
];

export const benefitCards = [
  {
    title: "Review model changes in hours, not days",
    body: "Move from manual model inspection toward a structured IFC comparison workflow.",
    items: [
      "Detect added, deleted and modified objects.",
      "Compare model releases without starting from a blank screen.",
      "Focus expert review on meaningful changes."
    ]
  },
  {
    title: "Understand what changed before the meeting",
    body: "Prepare design and BIM coordination meetings with evidence instead of assumptions.",
    items: [
      "Summarise changes by discipline and category.",
      "Identify late or repeated model changes.",
      "Create a shared view of design development."
    ]
  },
  {
    title: "Prioritise coordination risks",
    body: "Separate routine modelling updates from changes that may require management attention.",
    items: [
      "Flag possible downstream effects.",
      "Support accountability discussions with traceable evidence.",
      "Connect BIM change data to project decisions."
    ]
  },
  {
    title: "Turn BIM data into project reports",
    body: "Translate technical IFC differences into outputs that project teams can actually use.",
    items: [
      "Export management-level summaries.",
      "Support design gate reviews and follow-up.",
      "Build a repeatable change history across versions."
    ]
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

export const roleCards = [
  {
    title: "BIM Coordinators",
    body: "Find what changed before coordination meetings and focus review time on the most relevant model differences."
  },
  {
    title: "Design Managers",
    body: "Understand whether design work is stabilising or drifting across disciplines and model releases."
  },
  {
    title: "Contractors",
    body: "Detect design changes that may affect procurement, production planning or site sequencing."
  },
  {
    title: "Clients",
    body: "See whether design development is controlled, transparent and ready for project-level decisions."
  },
  {
    title: "Design Offices",
    body: "Provide clearer change evidence to clients, contractors and project partners."
  }
];

export const projectTypeCards = [
  {
    title: "Building projects",
    body: "Architecture, structures and building services models compared across releases."
  },
  {
    title: "Infrastructure projects",
    body: "IFC-based coordination for linear, civil and infrastructure design workflows."
  },
  {
    title: "Design-build projects",
    body: "Earlier visibility for contractors responsible for both design coordination and production impact."
  },
  {
    title: "Public projects",
    body: "Transparent reporting for client organisations and multi-party project governance."
  },
  {
    title: "Industrial projects",
    body: "Change tracking where systems, structures and installation sequences interact."
  },
  {
    title: "Renovation and retrofit",
    body: "Follow model updates where existing conditions, design intent and constructability are tightly linked."
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

export const proofPoints = [
  {
    value: "Δ",
    title: "Change volume",
    body: "Added, deleted and modified IFC objects between model versions."
  },
  {
    value: "↘",
    title: "Design stability",
    body: "Whether model changes decrease, continue or concentrate late in the process."
  },
  {
    value: "3D",
    title: "Discipline load",
    body: "Which disciplines create, receive or accumulate the most change."
  },
  {
    value: "!",
    title: "Coordination focus",
    body: "Which changes should be reviewed before the next coordination meeting."
  }
];

export const pricingComparison = [
  {
    title: "Manual IFC change review",
    tone: "negative",
    items: [
      "One-to-one comparisons miss the process view",
      "Difficult to see how design change evolves over time",
      "Heat maps and summaries must be rebuilt manually",
      "Change interpretation depends on individual experts",
      "Coordination meetings rely on fragmented evidence",
      "No consistent project history across model releases"
    ]
  },
  {
    title: "BIMSpect",
    tone: "positive",
    items: [
      "IFC version history analytics",
      "Design Buzz heat maps over time",
      "Select views by discipline, zone, object type or severity",
      "Automatic change concentration mapping",
      "Ontology-based plain-language findings",
      "Shared reports for design management and coordination"
    ],
    cta: "Request project analysis",
    href: "#contact"
  }
];

export const pricingPlans = [
  {
    tier: "Early adopter",
    name: "Single User",
    description:
      "For BIM coordinators and early adopters analysing IFC model changes across their own projects.",
    priceNote: "Named user licence",
    note:
      "Designed for individual professional use. Multiple projects can be analysed, but access is not shared with a wider project team.",
    features: [
      "One named user",
      "Multiple projects for personal professional use",
      "IFC version history analysis",
      "Design Buzz heat maps",
      "Change views by discipline, zone, object type and severity",
      "Ontology-based plain-language findings",
      "Exportable summary reports",
      "Email support"
    ],
    cta: "Start as single user",
    href: "#contact",
    featured: false
  },
  {
    tier: "Main product",
    name: "Project License",
    description:
      "For active BIM projects that need shared IFC change visibility across the project team.",
    priceNote: "Project-based monthly licence",
    note:
      "Includes a shared project workspace and 10 users. Additional users can be added with a low-cost monthly add-on.",
    features: [
      "One active project workspace",
      "10 included users",
      "Low-cost add-on for additional users",
      "IFC version history and time-series analytics",
      "Design Buzz heat maps across model releases",
      "Discipline, zone, object type and severity-based views",
      "Management-level plain-language reports",
      "Project onboarding session"
    ],
    cta: "Request project license",
    href: "#contact",
    featured: true
  },
  {
    tier: "Organisation-wide",
    name: "Portfolio / Enterprise",
    description:
      "For organisations standardising IFC change analytics across multiple projects.",
    priceNote: "Tailored offer",
    note:
      "For contractors, developers, design offices, public clients and BIM-intensive organisations managing several projects.",
    features: [
      "Multiple project workspaces",
      "Portfolio-level Design Buzz overview",
      "Organisation-wide reporting templates",
      "Cross-project design stability indicators",
      "User and role management",
      "API or data pipeline integration",
      "Security and data handling documentation",
      "Dedicated onboarding and account support"
    ],
    cta: "Request tailored offer",
    href: "#contact",
    featured: false
  }
];

export const adoptionSteps = [
  {
    number: "01",
    title: "Explore",
    body: "Analyse IFC version history as a single expert user."
  },
  {
    number: "02",
    title: "Share",
    body: "Adopt a Project License for a common project view."
  },
  {
    number: "03",
    title: "Standardise",
    body: "Use recurring Design Buzz reviews and reporting templates."
  },
  {
    number: "04",
    title: "Scale",
    body: "Create portfolio visibility across multiple projects."
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

export const researchFacts = [
  {
    title: "Aalto University Research to Business",
    body: "BIMSpect originated from an Aalto University Research to Business project focused on making IFC model change analysis practically useful for construction project management."
  },
  {
    title: "Construction management research",
    body: "The product direction is grounded in construction project management, design management and BIM coordination research."
  },
  {
    title: "Technical development",
    body: "Current development focuses on IFC comparison, model version history, change classification, visual analytics and management-level reporting."
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

export const workflowSteps = workflowCards.map((step) => ({
  number: step.number,
  title:
    step.number === "01"
      ? "Upload IFC model versions or connect via API"
      : step.title,
  body: step.body
}));

export const useCases = roleCards.slice(0, 3).map((role) => ({
  tag: role.title,
  title: role.title,
  body: role.body
}));

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
