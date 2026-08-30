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
      "Specific performance of contracts",
      "Defamation and other tort claims",
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
      "Property transactions and disputes require careful due diligence to avoid costly complications down the line. As a property lawyer in Nashik, this practice covers title verification, documentation review, and representation in property disputes, protecting clients' interests in one of their most significant assets. It also extends to RERA disputes and builder-buyer conflicts, and to agricultural land matters before revenue tribunals — both common sources of dispute in and around Nashik.",
    bullets: [
      "Title investigation and due diligence",
      "Sale, lease, and gift deed drafting",
      "Property and boundary disputes",
      "Partition suits",
      "Encroachment and possession matters",
      "RERA disputes and builder-buyer conflicts",
      "Agricultural land and revenue tribunal matters",
      "Developer agreement vetting",
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
      "Trust deed drafting",
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
  process: { title: string; description: string }[];
  commonQuestions: { question: string; answer: string }[];
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
    ],
    process: [
      {
        title: "Initial Consultation",
        description:
          "We discuss your situation, confirm whether mutual consent divorce is possible, and outline realistic timelines for your specific circumstances.",
      },
      {
        title: "Filing the Petition",
        description:
          "For mutual consent matters, a joint petition is filed before the Nashik Family/District Court along with agreed terms on maintenance, custody, and assets.",
      },
      {
        title: "The Cooling-Off Period",
        description:
          "Courts typically require a six-month waiting period between the first and second motion — this can sometimes be waived where reconciliation is clearly not viable.",
      },
      {
        title: "Decree & Resolution",
        description:
          "Once the second motion confirms consent, the court passes the divorce decree, formally concluding the matter.",
      },
    ],
    commonQuestions: [
      {
        question: "How long does a mutual consent divorce take in Nashik?",
        answer:
          "With both parties in agreement and no disputes over terms, it typically takes around six to eight months, largely due to the statutory cooling-off period. Contested matters take considerably longer.",
      },
      {
        question: "What if my spouse doesn't agree to a mutual consent divorce?",
        answer:
          "The matter proceeds as a contested divorce instead, filed on legally recognised grounds. It takes longer and involves more court appearances, but is still very much a workable path.",
      },
      {
        question: "Will I automatically get custody if I file for divorce?",
        answer:
          "No — Indian courts decide custody based solely on the child's welfare, not on which parent initiated the case. Factors like the child's age, stability, and each parent's circumstances are what matter.",
      },
      {
        question: "Is maintenance mandatory in every divorce?",
        answer:
          "Not automatically — it depends on the financial circumstances of both spouses and is either agreed upon (in mutual consent cases) or decided by the court based on need and capacity to pay.",
      },
    ],
    relatedPostSlugs: [
      "divorce-by-mutual-consent",
      "child-custody-what-courts-consider",
      "how-is-maintenance-calculated-after-divorce",
    ],
  },
  {
    slug: "property-law",
    seoTitle: "Property Lawyer in Nashik | Advocate Jaya Sharma",
    seoDescription:
      "Advocate Jaya Sharma is a property lawyer in Nashik providing title verification, due diligence, sale deed drafting, and representation in property disputes and partition suits.",
    heading: "Property Lawyer in Nashik",
    intro: [
      "Property transactions and disputes require careful due diligence to avoid costly complications down the line. As a property lawyer in Nashik, Advocate Jaya Sharma helps clients verify title, review documentation, and navigate property disputes — protecting what is often one of a client's most significant assets.",
    ],
    process: [
      {
        title: "Document Collection & Review",
        description:
          "We review the title chain, encumbrance certificate, tax receipts, and any prior sale deeds relevant to the property in question.",
      },
      {
        title: "Verification",
        description:
          "The chain of ownership, statutory approvals, and the seller's actual authority to transfer the property are cross-checked against official records.",
      },
      {
        title: "Drafting or Vetting",
        description:
          "Whether it's a sale deed, agreement to sell, or gift deed, the instrument is drafted or reviewed carefully before anyone signs.",
      },
      {
        title: "Registration",
        description:
          "Where a transaction is involved, we support execution and registration at the Sub-Registrar's office to formally complete the transfer.",
      },
    ],
    commonQuestions: [
      {
        question: "How far back should I check a property's title history?",
        answer:
          "A minimum of 30 years is the general standard where records are available, tracing the chain of ownership through each transfer to confirm there are no unresolved claims or defects.",
      },
      {
        question: "What is an encumbrance certificate and why does it matter?",
        answer:
          "It's an official record confirming whether a property is free of registered liabilities like mortgages or legal claims. It's one of the first documents checked in any due diligence exercise.",
      },
      {
        question: "Can I buy property that is involved in a family dispute?",
        answer:
          "It's possible but genuinely risky — buying into an active dispute can tie your ownership to litigation you weren't originally part of. This is exactly the kind of red flag a title review is meant to catch beforehand.",
      },
      {
        question: "What if the seller doesn't have all the original documents?",
        answer:
          "Missing originals are a serious red flag that warrants closer scrutiny, though not always disqualifying — it depends on why they're missing and what can be independently verified through official records.",
      },
      {
        question: "Can I file a complaint against a builder for a delayed project?",
        answer:
          "Yes — under the Real Estate (Regulation and Development) Act, homebuyers can approach MahaRERA for delayed possession, deviations from the sanctioned plan, or other builder defaults, and seek compensation, interest, or refund depending on the facts.",
      },
      {
        question: "Are agricultural land disputes handled in civil court or somewhere else?",
        answer:
          "Many agricultural land matters — mutation entries, tenancy disputes, land classification — fall first before revenue authorities such as the Tehsildar or Sub-Divisional Officer under the Maharashtra Land Revenue Code, rather than a civil court, though some disputes can proceed to civil court depending on the relief sought.",
      },
    ],
    relatedPostSlugs: [
      "sale-deed-vs-agreement-to-sell",
      "property-due-diligence-checklist",
      "who-owns-property-after-owners-death",
      "rera-complaint-against-builder",
      "agricultural-land-disputes-revenue-tribunal",
    ],
  },
  {
    slug: "banking-recovery-nclt",
    seoTitle: "Bank Recovery Advocate in Nashik | DRT & NCLT | Advocate Jaya Sharma",
    seoDescription:
      "Advocate Jaya Sharma is a bank recovery advocate in Nashik representing banks and financial institutions in DRT and NCLT proceedings, SARFAESI matters, and recovery suits.",
    heading: "Bank Recovery Advocate in Nashik",
    intro: [
      "As a bank recovery advocate in Nashik, Advocate Jaya Sharma represents banks and financial institutions in debt recovery matters, drawing on prior experience before the Debt Recovery Tribunal and the National Company Law Tribunal as Senior Advocate at H R Katti Associates, Bangalore. She is presently empanelled as Panel Advocate for Bank of Maharashtra, Vishwas Cooperative Bank, and Shree Samarth Sahakari Bank, Nashik.",
    ],
    process: [
      {
        title: "Case Assessment",
        description:
          "The loan account, security documents, and NPA classification are reviewed to determine the correct recovery route — SARFAESI, DRT, or NCLT.",
      },
      {
        title: "Notice Stage",
        description:
          "For secured loans, a Section 13(2) demand notice is issued to the borrower, opening a 60-day window for repayment or objections.",
      },
      {
        title: "Recovery Proceedings",
        description:
          "If dues remain unpaid, we proceed to possession action, a DRT recovery suit, or an NCLT insolvency application depending on the debtor and remedy sought.",
      },
      {
        title: "Resolution",
        description:
          "Matters conclude through settlement, enforced recovery, or a tribunal order — whichever route the facts and the client's priorities point to.",
      },
    ],
    commonQuestions: [
      {
        question: "How long does SARFAESI recovery typically take?",
        answer:
          "The notice-and-possession process itself can move in a matter of months if uncontested, but disputed matters that reach the DRT on appeal often take considerably longer to resolve.",
      },
      {
        question: "Can a borrower stop possession proceedings?",
        answer:
          "Yes, in certain circumstances — by clearing dues within the notice period, raising valid objections to the Section 13(2) notice, or filing an appeal before the DRT under Section 17.",
      },
      {
        question: "Should my matter go to the DRT or the NCLT?",
        answer:
          "It depends on who the debtor is and what you're seeking. The DRT generally handles recovery suits and SARFAESI appeals against individuals or entities; the NCLT deals with corporate insolvency and resolution matters.",
      },
      {
        question: "Do I need a lawyer to respond to a bank's demand notice?",
        answer:
          "It's strongly advisable — the response window is short and strictly timed, and how the objection is framed often determines whether it's taken seriously by the lender or the tribunal later.",
      },
    ],
    relatedPostSlugs: [
      "understanding-sarfaesi-recovery",
      "nclt-vs-drt-which-forum",
      "loan-guarantor-liability",
    ],
  },
  {
    slug: "civil-litigation",
    seoTitle: "Civil Lawyer in Nashik | Advocate Jaya Sharma",
    seoDescription:
      "Advocate Jaya Sharma is a civil lawyer in Nashik handling recovery suits, contractual disputes, injunctions, and civil appeals before the Nashik District Court.",
    heading: "Civil Lawyer in Nashik",
    intro: [
      "Civil disputes demand patience, procedural precision, and a clear-eyed litigation strategy. As a civil lawyer in Nashik with over 15 years handling civil and commercial matters before the Nashik District Court, this practice covers the full lifecycle of a dispute — from the initial notice through trial and, where necessary, appeal.",
    ],
    process: [
      {
        title: "Case Assessment",
        description:
          "The facts, documents, and legal merits of the dispute are reviewed before deciding on the right strategy.",
      },
      {
        title: "Pre-Litigation Notice",
        description:
          "Where appropriate, a legal notice is sent first — this resolves a meaningful share of disputes without ever reaching court.",
      },
      {
        title: "Filing & Trial",
        description:
          "The suit is filed, pleadings exchanged, evidence presented, and arguments made before the court.",
      },
      {
        title: "Judgment & Appeal",
        description:
          "Once judgment is passed, the outcome is reviewed and, where warranted, an appeal is pursued before the appellate court.",
      },
    ],
    commonQuestions: [
      {
        question: "How long does a civil suit typically take to resolve?",
        answer:
          "Timelines vary widely depending on the court, the complexity of the matter, and whether it's contested or settled early. A realistic estimate is shared after reviewing the specifics of your case.",
      },
      {
        question: "Do I need to send a legal notice before filing a civil suit?",
        answer:
          "It's not always mandatory, but it's standard practice — a well-drafted notice often resolves the matter faster and more cheaply than proceeding straight to litigation.",
      },
      {
        question: "What's the limitation period for filing a civil suit?",
        answer:
          "Generally three years from when the cause of action arose, though this varies by claim type. Missing this window can bar the claim entirely, regardless of its merits.",
      },
      {
        question: "Can civil disputes be settled outside court?",
        answer:
          "Yes — many are resolved through negotiation or mediation, either before filing or during the proceedings, often faster and less costly than a full trial.",
      },
      {
        question: "What is a suit for specific performance?",
        answer:
          "It's a claim asking the court to compel the other party to actually carry out their contractual obligation — such as completing a property sale — rather than simply pay compensation for breaching it. Courts generally require the underlying contract to be clear, valid, and capable of being enforced.",
      },
      {
        question: "Can I sue someone for defamation in a civil court?",
        answer:
          "Yes — defamation can be pursued as a civil tort claim seeking damages, separately from (or alongside) any criminal defamation complaint. The claim generally needs to show a false statement was published or communicated to a third party and caused harm to reputation.",
      },
    ],
    relatedPostSlugs: [
      "recovery-suits-for-unpaid-money",
      "limitation-period-filing-a-case-india",
    ],
  },
  {
    slug: "arbitration-adr",
    seoTitle: "Arbitration Lawyer in Nashik | Advocate Jaya Sharma",
    seoDescription:
      "Advocate Jaya Sharma is an arbitration lawyer in Nashik providing efficient, confidential dispute resolution through arbitration, mediation, and negotiated settlement.",
    heading: "Arbitration Lawyer in Nashik",
    intro: [
      "Not every dispute needs a courtroom. As an arbitration lawyer in Nashik, drawing on skills in arbitration and negotiation developed across corporate and banking matters, Advocate Jaya Sharma helps clients resolve disputes through arbitration and mediation — often faster, more confidential, and less adversarial than litigation, while still producing a binding, enforceable outcome.",
    ],
    process: [
      {
        title: "Clause Review",
        description:
          "The arbitration agreement or clause is reviewed to confirm scope, procedure, and the applicable rules.",
      },
      {
        title: "Initiating Proceedings",
        description:
          "A notice invoking arbitration is issued, and an arbitrator is appointed as per the agreement or, if needed, by the court.",
      },
      {
        title: "Arbitral Hearings",
        description:
          "Both sides present evidence and arguments before the arbitral tribunal, similar to a simplified trial.",
      },
      {
        title: "Award & Enforcement",
        description:
          "The arbitrator issues a binding award, which can be enforced like a court decree if not honoured voluntarily.",
      },
    ],
    commonQuestions: [
      {
        question: "Is an arbitration award legally binding?",
        answer:
          "Yes — a properly passed arbitral award is binding and enforceable in much the same way as a civil court decree.",
      },
      {
        question: "Can I choose arbitration even without a prior agreement?",
        answer:
          "Only if the other party agrees. Arbitration is based on consent, either through a clause already in your contract or a fresh agreement between the parties.",
      },
      {
        question: "How is arbitration different from mediation?",
        answer:
          "Arbitration results in a binding decision made by the arbitrator; mediation is a facilitated negotiation where the parties themselves reach a voluntary settlement.",
      },
      {
        question: "Can an arbitration award be challenged?",
        answer:
          "Only on limited legal grounds, such as fraud or serious procedural irregularity — not simply because a party disagrees with the outcome.",
      },
    ],
    relatedPostSlugs: ["arbitration-vs-litigation"],
  },
  {
    slug: "legal-documentation",
    seoTitle: "Legal Documentation & Drafting Lawyer in Nashik | Advocate Jaya Sharma",
    seoDescription:
      "Advocate Jaya Sharma provides legal documentation services in Nashik — drafting and vetting of agreements, deeds, wills, powers of attorney, and legal notices.",
    heading: "Legal Documentation Lawyer in Nashik",
    intro: [
      "Well-drafted documentation is the foundation of any sound legal position, whether personal or commercial. As a legal documentation lawyer in Nashik, this practice provides precise drafting and vetting of agreements, deeds, and legal instruments — the kind of careful documentation work that prevents disputes rather than merely responding to them.",
    ],
    process: [
      {
        title: "Understanding the Requirement",
        description:
          "The purpose, parties, and intent behind the document are clarified before any drafting begins.",
      },
      {
        title: "Drafting or Review",
        description:
          "A fresh document is drafted, or an existing one is reviewed clause by clause for gaps and risks.",
      },
      {
        title: "Clarification & Revision",
        description:
          "Terms are explained in plain language and revised based on your input before anything is finalised.",
      },
      {
        title: "Execution",
        description:
          "The document is finalised, signed, and where required, registered or notarised.",
      },
    ],
    commonQuestions: [
      {
        question: "Do all legal documents need to be registered?",
        answer:
          "No — only certain categories, like sale deeds and some gift deeds, are legally required to be registered. Others are valid once properly signed and witnessed.",
      },
      {
        question: "Can I use a template I found online?",
        answer:
          "Generic templates often miss details specific to your situation and applicable law — exactly where disputes tend to originate later.",
      },
      {
        question: "How long does drafting a legal document usually take?",
        answer:
          "Simple documents can be turned around quickly; more detailed agreements take longer to ensure every relevant clause is properly addressed.",
      },
      {
        question: "What's the difference between vetting and drafting?",
        answer:
          "Drafting creates a document from scratch. Vetting reviews one you already have — often from the other party — to check it protects your interests before you sign.",
      },
    ],
    relatedPostSlugs: [
      "drafting-a-legal-notice",
      "power-of-attorney-explained",
      "will-testament-explained",
      "trust-deed-explained",
    ],
  },
  {
    slug: "corporate-law",
    seoTitle: "Corporate Lawyer in Nashik | Advocate Jaya Sharma",
    seoDescription:
      "Advocate Jaya Sharma is a corporate lawyer in Nashik providing business structuring, compliance, contract drafting, and advisory support for companies of every size.",
    heading: "Corporate Lawyer in Nashik",
    intro: [
      "From incorporation to ongoing governance, corporate clients need counsel that understands both the law and the practical realities of running a business. As a corporate lawyer in Nashik, Advocate Jaya Sharma's practice spans civil, criminal, and corporate matters, giving her a grounded, business-first perspective on every engagement.",
    ],
    process: [
      {
        title: "Business Review",
        description:
          "The company's structure, stage, and specific legal needs are assessed before advising on next steps.",
      },
      {
        title: "Compliance & Structuring",
        description:
          "Incorporation, regulatory filings, or governance structures are set up or corrected as needed.",
      },
      {
        title: "Contract Drafting & Vetting",
        description:
          "Commercial agreements, vendor contracts, and partnership terms are drafted or reviewed to protect the business.",
      },
      {
        title: "Ongoing Advisory",
        description:
          "As the business grows, legal support continues on compliance, disputes, and new agreements as they arise.",
      },
    ],
    commonQuestions: [
      {
        question: "When should a small business get a lawyer involved?",
        answer:
          "Ideally before signing any significant contract or facing a dispute — early review is far cheaper than fixing a problem after the fact.",
      },
      {
        question: "What compliance do companies need to maintain in India?",
        answer:
          "Requirements vary by structure and sector, but generally include regular filings with the Registrar of Companies, tax compliance, and maintaining statutory registers.",
      },
      {
        question: "Do I need a written partnership agreement?",
        answer:
          "Strongly recommended — an oral understanding offers little protection if the partnership runs into disagreement later.",
      },
      {
        question: "Can a lawyer help recover payment from a defaulting client?",
        answer:
          "Yes — typically through a legal notice in the first instance, and a recovery suit if that doesn't resolve the matter.",
      },
    ],
    relatedPostSlugs: [
      "recovery-suits-for-unpaid-money",
      "does-your-business-need-a-partnership-agreement",
      "company-registration-business-structure-india",
    ],
  },
  {
    slug: "criminal-defense",
    seoTitle: "Criminal Defense Lawyer in Nashik | Advocate Jaya Sharma",
    seoDescription:
      "Advocate Jaya Sharma is a criminal defense lawyer in Nashik providing bail applications, trial representation, and defense strategy before the Nashik District Court.",
    heading: "Criminal Defense Lawyer in Nashik",
    intro: [
      "A criminal matter can be one of the most stressful experiences in a person's life. As a criminal defense lawyer in Nashik, this practice provides rigorous defense strategy and steady courtroom advocacy, working to protect clients' rights and interests at every stage of proceedings before the Nashik District Court.",
    ],
    process: [
      {
        title: "Immediate Assessment",
        description:
          "The facts, charges, and any FIR or notice are reviewed urgently, since early steps often matter most in a criminal matter.",
      },
      {
        title: "Bail Application",
        description:
          "Where custody is a concern, a bail or anticipatory bail application is filed promptly.",
      },
      {
        title: "Trial Preparation",
        description:
          "Evidence is reviewed, witnesses assessed, and a defense strategy built around the specific facts of the case.",
      },
      {
        title: "Trial & Resolution",
        description:
          "The matter is represented through trial, working toward acquittal, a favourable plea, or the strongest available outcome.",
      },
    ],
    commonQuestions: [
      {
        question: "What should I do immediately if I'm named in an FIR?",
        answer:
          "Avoid making statements without legal advice, gather any relevant documents, and consult a lawyer promptly — early steps can materially affect how the case unfolds.",
      },
      {
        question: "What's the difference between bail and anticipatory bail?",
        answer:
          "Anticipatory bail is sought before arrest, as protection against being taken into custody. Regular bail is sought after arrest has already occurred.",
      },
      {
        question: "How long do criminal trials typically take in Nashik?",
        answer:
          "It varies significantly based on the nature of the offence, court backlog, and whether the matter is contested. A realistic estimate is given after reviewing the specific case.",
      },
      {
        question: "Can criminal charges be quashed before trial?",
        answer:
          "In certain circumstances, yes — where the complaint is legally deficient or amounts to an abuse of process, a quashing petition can be filed before the High Court.",
      },
    ],
    relatedPostSlugs: [
      "cheque-bounce-section-138",
      "fir-vs-nc-complaint",
      "anticipatory-bail-explained",
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
