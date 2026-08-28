export const CREDENTIALS = ["B.Com.", "LL.B.", "LL.M."];

export const BAR_REGISTRATION = "MAH/4623/2010";

export const SKILLS = [
  "Legal Drafting",
  "Negotiation",
  "Legal Opinions",
  "Arbitration",
  "Intellectual Property",
  "Document Vetting",
  "Client Counseling",
  "Debt Recovery (DRT/NCLT)",
];

export const HIGHLIGHTS = [
  {
    id: "bar-registration",
    title: "Bar Council of India Enrolled",
    description:
      "Registered Advocate with the Bar Council of India (Reg. No. MAH/4623/2010), enrolled since 2010.",
  },
  {
    id: "current-practice",
    title: "Independent Practice & Legal Associate, Nashik",
    description:
      "Runs her own independent legal practice in Nashik, and has served as a Legal Associate with Jayant D Jaybhave and Associates since February 2022, handling civil, criminal, and corporate matters.",
  },
  {
    id: "high-court",
    title: "DRT, NCLT & Karnataka High Court",
    description:
      "As Senior Advocate at H R Katti Associates, Bangalore (2016–2022), represented clients before the Debt Recovery Tribunal, NCLT, and the Karnataka High Court.",
  },
  {
    id: "panel-advocate",
    title: "Panel Advocate for Leading Banks",
    description:
      "Empanelled with Bank of Maharashtra, Vishwas Cooperative Bank, and Shree Samarth Sahakari Bank, Nashik, for debt recovery and financial disputes.",
  },
  {
    id: "iocl",
    title: "Empanelled with Indian Oil Corporation Ltd.",
    description:
      "Appointed as an Advocate for Indian Oil Corporation Ltd., Nashik District, handling legal matters and representation as required.",
  },
  {
    id: "masters",
    title: "LL.M. in Business Law",
    description:
      "Postgraduate specialisation from Nathmal Goenka Law College, Akola (SGB Amravati University), 2010–2012.",
  },
];

export const EXPERIENCE = [
  {
    role: "Advocate",
    firm: "Independent Practice",
    location: "Nashik, Maharashtra",
    period: "Feb 2022 – Present",
    description:
      "Runs her own independent legal practice in Nashik, handling cases in civil, criminal, and corporate law, providing legal representation and drafting essential documents, with strategic legal advice tailored to each client's challenges.",
  },
  {
    role: "Legal Associate",
    firm: "Jayant D Jaybhave and Associates",
    location: "Nashik, Maharashtra",
    period: "Feb 2022 – Present",
    description:
      "Serves as a Legal Associate handling civil, criminal, and corporate matters, providing legal representation and drafting essential documents, with strategic legal advice tailored to each client's challenges.",
  },
  {
    role: "Senior Advocate",
    firm: "H R Katti Associates",
    location: "Bangalore, Karnataka",
    period: "Aug 2016 – Jan 2022",
    description:
      "Represented clients across multiple legal forums, including the Debt Recovery Tribunal (DRT), National Company Law Tribunal (NCLT), the High Court of Karnataka, and District Courts. Handled complex legal cases ranging from debt recovery to corporate disputes, provided expert legal opinions, and crafted effective litigation strategies.",
  },
  {
    role: "Legal Consultant",
    firm: "Advocate SS Girase Associates",
    location: "Shahada, Maharashtra",
    period: "Jun 2013 – Jul 2015",
    description:
      "Responsible for drafting affidavits, legal notices, and search reports. Managed court diaries, tracked case progress, and handled follow-ups to ensure timely resolution, alongside supporting case preparation and attending court hearings.",
  },
  {
    role: "Advocate",
    firm: "Advocate Satish Bhutada & Associates",
    location: "Akola, Maharashtra",
    period: "Jun 2010 – Mar 2013",
    description:
      "Prepared detailed search reports for banks, drafted legal notices, and maintained court diaries. Assisted with case follow-ups and provided client counseling to help clients understand their legal matters and options.",
  },
];

export const EDUCATION = [
  {
    degree: "LL.M. in Business Law",
    institution: "Nathmal Goenka Law College, Akola",
    university: "SGB Amravati University, Amravati, Maharashtra",
    period: "2010 – 2012",
  },
  {
    degree: "LL.B.",
    institution: "Nathmal Goenka Law College, Akola",
    university: "SGB Amravati University, Amravati, Maharashtra",
    period: "2007 – 2010",
  },
  {
    degree: "B.Com.",
    institution: "Gopalrao Khedkar College, Telhara, Akola",
    university: "SGB Amravati University, Amravati, Maharashtra",
    period: "2004 – 2007",
  },
];

export const CERTIFICATIONS = [
  {
    title: "All India Bar Examination",
    issuer: "Bar Council of India, New Delhi",
    period: "March 2011",
  },
  {
    title: "Diploma in Financial Accounting",
    issuer: "Maharashtra Knowledge Corporation Limited",
  },
  {
    title: "MS-CIT",
    issuer: "Maharashtra State Board of Technical Education",
  },
];

export const PANEL_ADVOCATE_FOR = [
  {
    name: "Bank of Maharashtra",
    role: "Panel Advocate — Debt Recovery",
  },
  {
    name: "Vishwas Cooperative Bank",
    role: "Panel Advocate — Recovery & Compliance",
  },
  {
    name: "Shree Samarth Sahakari Bank, Nashik",
    role: "Panel Advocate — Civil & Financial Disputes",
  },
  {
    name: "Indian Oil Corporation Ltd.",
    role: "Appointed Advocate — Nashik District",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "client-first",
    title: "Client-First Approach",
    description:
      "Every matter is handled with individual attention — clients are kept informed at each stage, not left to guess at case status.",
  },
  {
    id: "transparent-process",
    title: "Transparent Process",
    description:
      "Clear communication on strategy, timelines, and fees from the outset, so there are no surprises along the way.",
  },
  {
    id: "meticulous-drafting",
    title: "Meticulous Drafting",
    description:
      "Precision in pleadings, contracts, and legal opinions — the kind of attention to detail that prevents disputes before they arise.",
  },
  {
    id: "practical-advisory",
    title: "Practical, Business-First Advice",
    description:
      "Corporate advisory grounded in real commercial experience, not just theory — advice that is actionable for your business.",
  },
];

export type Service = {
  slug: string;
  title: string;
  icon:
    | "corporate"
    | "civil"
    | "family"
    | "criminal"
    | "property"
    | "documentation"
    | "banking"
    | "arbitration";
  shortDescription: string;
  longDescription: string;
  bullets: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "civil-litigation",
    title: "Civil Litigation",
    icon: "civil",
    shortDescription:
      "A civil lawyer in Nashik offering skilled representation in civil disputes, from filing through trial and appeal.",
    longDescription:
      "Civil disputes demand patience, procedural precision, and a clear-eyed litigation strategy. As a civil lawyer in Nashik with over 15 years handling civil and commercial matters before the Nashik District Court, this practice covers the full lifecycle of a dispute — from the initial notice through trial and, where necessary, appeal.",
    bullets: [
      "Recovery suits and contractual disputes",
      "Injunctions and interim relief applications",
      "Commercial and business disputes",
      "Appeals before appellate courts",
      "Settlement negotiation and mediation support",
    ],
  },
  {
    slug: "property-law",
    title: "Property Law",
    icon: "property",
    shortDescription:
      "A property lawyer in Nashik for title verification, disputes, and transactions handled with due diligence.",
    longDescription:
      "Property transactions and disputes require careful due diligence to avoid costly complications down the line. As a property lawyer in Nashik, this practice covers title verification, documentation review, and representation in property disputes, protecting clients' interests in one of their most significant assets.",
    bullets: [
      "Title investigation and due diligence",
      "Sale, lease, and gift deed drafting",
      "Property and boundary disputes",
      "Partition suits",
      "Encroachment and possession matters",
    ],
  },
  {
    slug: "arbitration-adr",
    title: "Arbitration & Alternate Dispute Resolution",
    icon: "arbitration",
    shortDescription:
      "An arbitration lawyer in Nashik offering efficient, confidential resolution of disputes through arbitration, mediation, and negotiated settlement.",
    longDescription:
      "Not every dispute needs a courtroom. As an arbitration lawyer in Nashik, drawing on her skills in arbitration and negotiation developed across corporate and banking matters, Advocate Jaya Sharma helps clients resolve disputes through arbitration and mediation — often faster, more confidential, and less adversarial than litigation, while still producing a binding, enforceable outcome.",
    bullets: [
      "Drafting and vetting of arbitration clauses and agreements",
      "Representation in arbitral proceedings",
      "Mediation and negotiated settlements",
      "Enforcement of arbitral awards",
      "Commercial dispute resolution outside the courtroom",
    ],
  },
  {
    slug: "legal-documentation",
    title: "Legal Documentation",
    icon: "documentation",
    shortDescription:
      "A legal documentation lawyer in Nashik for precise drafting and vetting of agreements, deeds, and legal instruments.",
    longDescription:
      "Well-drafted documentation is the foundation of any sound legal position, whether personal or commercial. As a legal documentation lawyer in Nashik, this practice provides precise drafting and vetting of agreements, deeds, and legal instruments — the kind of careful documentation work that prevents disputes rather than merely responding to them.",
    bullets: [
      "Agreements, deeds, and MOUs",
      "Legal opinion writing",
      "Power of attorney documentation",
      "Wills and testamentary documents",
      "Notices and legal correspondence",
    ],
  },
  {
    slug: "banking-recovery-nclt",
    title: "Banking, Recovery & NCLT",
    icon: "banking",
    shortDescription:
      "A bank recovery advocate in Nashik handling debt recovery, DRT and NCLT proceedings, and banking dispute resolution for financial institutions.",
    longDescription:
      "As a bank recovery advocate in Nashik and formerly Senior Advocate at H R Katti Associates, Bangalore, Advocate Jaya Sharma represented clients before the Debt Recovery Tribunal and the National Company Law Tribunal on debt recovery and corporate disputes. She is presently empanelled as Panel Advocate for Bank of Maharashtra, Vishwas Cooperative Bank, and Shree Samarth Sahakari Bank, Nashik, handling recovery and financial matters on their behalf.",
    bullets: [
      "Debt Recovery Tribunal (DRT) proceedings",
      "NCLT and insolvency-related matters",
      "Bank recovery suits and financial disputes",
      "Panel advocate for cooperative and nationalised banks",
      "Search report preparation for banking due diligence",
    ],
  },
  {
    slug: "corporate-law",
    title: "Corporate Law",
    icon: "corporate",
    shortDescription:
      "A corporate lawyer in Nashik for business structuring, compliance, contracts, and advisory support for companies of every size.",
    longDescription:
      "From incorporation to ongoing governance, corporate clients need counsel that understands both the law and the practical realities of running a business. As a corporate lawyer in Nashik, Advocate Jaya Sharma's corporate practice spans civil, criminal, and corporate matters through her independent practice and her association with Jayant D Jaybhave and Associates, giving her a grounded, business-first perspective on every engagement.",
    bullets: [
      "Company incorporation and regulatory compliance",
      "Drafting and vetting of commercial contracts",
      "Shareholder and partnership agreements",
      "Corporate governance advisory",
      "Vendor, licensing, and service agreements",
    ],
  },
  {
    slug: "family-law",
    title: "Family Law",
    icon: "family",
    shortDescription:
      "A divorce lawyer in Nashik offering compassionate guidance through matrimonial, custody, and inheritance matters.",
    longDescription:
      "Family matters are rarely just legal questions — they touch every part of a client's life. As a divorce lawyer in Nashik, this practice combines procedural rigour with a compassionate approach, guiding clients through matrimonial disputes, custody arrangements, and inheritance matters with discretion and care.",
    bullets: [
      "Divorce and matrimonial disputes",
      "Child custody and guardianship matters",
      "Maintenance and alimony proceedings",
      "Succession and inheritance disputes",
      "Domestic violence and protection proceedings",
    ],
  },
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    icon: "criminal",
    shortDescription:
      "A criminal defense lawyer in Nashik providing rigorous defense strategy and courtroom advocacy to protect your rights.",
    longDescription:
      "A criminal matter can be one of the most stressful experiences in a person's life. As a criminal defense lawyer in Nashik, this practice provides rigorous defense strategy and steady courtroom advocacy, working to protect clients' rights and interests at every stage of proceedings before the Nashik District Court.",
    bullets: [
      "Bail applications and anticipatory bail",
      "Trial representation and defense strategy",
      "Cheque bounce and financial offence matters",
      "Quashing petitions",
      "Appeals against conviction or sentence",
    ],
  },
];

export type PracticeAreaLandingPage = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  heading: string;
  intro: string[];
  relatedPostSlugs: string[];
};

export const PRACTICE_AREA_LANDING_PAGES: PracticeAreaLandingPage[] = [
  {
    slug: "family-law",
    seoTitle: "Divorce & Family Lawyer in Nashik | Advocate Jaya Sharma",
    seoDescription:
      "Advocate Jaya Sharma is a divorce and family lawyer in Nashik handling matrimonial disputes, child custody, maintenance, and inheritance matters with a practical, compassionate approach.",
    heading: "Divorce & Family Lawyer in Nashik",
    intro: [
      "Family disputes are rarely just legal questions — they touch every part of a client's life, from finances to children to where someone will live next. As a family lawyer in Nashik, Advocate Jaya Sharma combines procedural rigour with a compassionate, practical approach, helping clients navigate matrimonial disputes, custody arrangements, and inheritance matters with discretion and care.",
      "Whether the matter is a straightforward divorce by mutual consent or a more contested dispute involving custody, maintenance, or property, the priority is the same: giving clients a clear, honest picture of where they stand before deciding on a strategy, and representing them steadily before the Nashik District Court through to resolution.",
    ],
    relatedPostSlugs: ["divorce-by-mutual-consent", "child-custody-what-courts-consider"],
  },
  {
    slug: "property-law",
    seoTitle: "Property Lawyer in Nashik | Advocate Jaya Sharma",
    seoDescription:
      "Advocate Jaya Sharma is a property lawyer in Nashik providing title verification, due diligence, sale deed drafting, and representation in property disputes and partition suits.",
    heading: "Property Lawyer in Nashik",
    intro: [
      "Property transactions and disputes require careful due diligence to avoid costly complications down the line. As a property lawyer in Nashik, Advocate Jaya Sharma helps clients verify title, review documentation, and navigate property disputes — protecting what is often one of a client's most significant assets.",
      "This practice covers the full range of property matters common in Nashik and across Maharashtra: due diligence before a purchase, drafting and vetting of sale deeds and other instruments, boundary and possession disputes, and partition suits among family members. Each matter starts with a clear-eyed review of the actual documents, not assumptions.",
    ],
    relatedPostSlugs: [
      "sale-deed-vs-agreement-to-sell",
      "property-due-diligence-checklist",
      "who-owns-property-after-owners-death",
    ],
  },
  {
    slug: "banking-recovery-nclt",
    seoTitle: "Bank Recovery Advocate in Nashik | DRT & NCLT | Advocate Jaya Sharma",
    seoDescription:
      "Advocate Jaya Sharma is a bank recovery advocate in Nashik representing banks and financial institutions in DRT and NCLT proceedings, SARFAESI matters, and recovery suits.",
    heading: "Bank Recovery Advocate in Nashik",
    intro: [
      "As a bank recovery advocate in Nashik, Advocate Jaya Sharma represents banks and financial institutions in debt recovery matters, drawing on prior experience before the Debt Recovery Tribunal and the National Company Law Tribunal as Senior Advocate at H R Katti Associates, Bangalore.",
      "She is presently empanelled as Panel Advocate for Bank of Maharashtra, Vishwas Cooperative Bank, and Shree Samarth Sahakari Bank, Nashik, handling SARFAESI proceedings, recovery suits, and NCLT and insolvency-related matters on their behalf — as well as search report preparation for banking due diligence.",
    ],
    relatedPostSlugs: [
      "understanding-sarfaesi-recovery",
      "nclt-vs-drt-which-forum",
      "loan-guarantor-liability",
    ],
  },
];

export const FAQS = [
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can reach out by phone, email, or the contact form on this website. Consultations are available Monday through Saturday during office hours.",
  },
  {
    question: "What should I bring to my first consultation?",
    answer:
      "Bring any documents relevant to your matter — contracts, notices, correspondence, court papers, or identification documents. Even if you're unsure what's relevant, bring what you have; it helps in assessing the matter accurately from the outset.",
  },
  {
    question: "How are legal fees determined?",
    answer:
      "Fees depend on the nature, complexity, and expected duration of the matter. This is discussed transparently during the initial consultation before any engagement begins, so there are no surprises later.",
  },
  {
    question: "Do you handle matters outside Nashik?",
    answer:
      "The primary practice is before the Nashik District Court, with prior experience before the Debt Recovery Tribunal, NCLT, and the Karnataka High Court. Matters outside this jurisdiction can be discussed on a case-by-case basis.",
  },
  {
    question: "How long does a typical case take to resolve?",
    answer:
      "Timelines vary significantly depending on the court, the nature of the dispute, and whether it proceeds to trial or settles earlier. A realistic timeline estimate is provided after reviewing the specifics of your matter.",
  },
  {
    question: "Is my consultation confidential?",
    answer:
      "Yes. All client communications and case details are treated as strictly confidential, in accordance with professional conduct rules governing advocates.",
  },
  {
    question: "Can I get a legal opinion without pursuing litigation?",
    answer:
      "Yes. Legal opinions, document vetting, and advisory consultations are offered independent of any litigation — many clients simply need clarity on a legal question or document before making a decision.",
  },
  {
    question: "How will I be updated on my case progress?",
    answer:
      "Clients are kept informed at each significant stage of their matter, whether by phone, email, or in person, so you always know where your case stands.",
  },
];
