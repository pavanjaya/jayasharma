export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: { heading?: string; paragraphs: string[]; bullets?: string[] }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "understanding-sarfaesi-recovery",
    image: "/insights/sarfaesi-recovery.jpg",
    title: "Understanding SARFAESI: What Banks and Borrowers Should Know",
    category: "Banking & Recovery",
    excerpt:
      "A plain-language look at how banks recover secured debt under the SARFAESI Act, and what rights borrowers retain during the process.",
    date: "2026-05-12",
    readTime: "5 min read",
    content: [
      {
        paragraphs: [
          "The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002 — commonly known as SARFAESI — gives banks and financial institutions a faster route to recover dues secured against collateral, without first approaching a civil court. For borrowers, understanding this process is often the difference between responding effectively and losing valuable time.",
        ],
      },
      {
        heading: "How the process typically begins",
        paragraphs: [
          "Once a loan account is classified as a Non-Performing Asset (NPA), the lender issues a demand notice under Section 13(2), giving the borrower 60 days to clear the outstanding dues. If the dues remain unpaid, the bank can proceed to take possession of the secured asset under Section 13(4), and eventually sell it to recover the debt.",
        ],
      },
      {
        heading: "What borrowers can do",
        paragraphs: [
          "Borrowers are not without recourse. Objections to the demand notice can be raised within the 60-day window, and the bank is required to respond to those objections in writing. If possession proceedings continue despite valid objections, an appeal lies before the Debt Recovery Tribunal (DRT) under Section 17 of the Act.",
        ],
        bullets: [
          "Respond to the Section 13(2) notice in writing within the stipulated period",
          "Keep records of all correspondence and payments with the lender",
          "File an appeal before the DRT if possession action proceeds unfairly",
          "Seek legal advice early — timelines under SARFAESI are strict",
        ],
      },
      {
        heading: "Why timing matters",
        paragraphs: [
          "Most of the disputes that end up dragging on could have been resolved faster with an early, well-drafted response. Whether you are a bank pursuing recovery or a borrower contesting a notice, the strength of your position often depends on how promptly and precisely the first response is made.",
        ],
      },
    ],
  },
  {
    slug: "nclt-vs-drt-which-forum",
    image: "/insights/nclt-vs-drt.jpg",
    title: "NCLT vs DRT: Which Forum Handles Your Recovery Matter?",
    category: "Banking & Recovery",
    excerpt:
      "Debt recovery in India can route through two different tribunals depending on the nature of the debtor and the claim. Here's how to tell which one applies.",
    date: "2026-04-18",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "Clients often ask why a recovery matter is heading to the Debt Recovery Tribunal (DRT) rather than the National Company Law Tribunal (NCLT), or vice versa. The answer usually comes down to who the debtor is and what remedy is being sought.",
        ],
      },
      {
        heading: "Debt Recovery Tribunal (DRT)",
        paragraphs: [
          "The DRT was established under the Recovery of Debts and Bankruptcy Act, 1993, and primarily handles recovery of debts owed to banks and financial institutions above a specified threshold. It is the standard forum for SARFAESI appeals and straightforward recovery suits against individuals, partnerships, or companies.",
        ],
      },
      {
        heading: "National Company Law Tribunal (NCLT)",
        paragraphs: [
          "The NCLT's jurisdiction is broader in scope but distinct in purpose — it primarily deals with corporate matters under the Companies Act, 2013, and insolvency proceedings under the Insolvency and Bankruptcy Code, 2016. Where a corporate debtor is in financial distress, a creditor may need to initiate proceedings before the NCLT rather than the DRT.",
        ],
      },
      {
        heading: "Choosing the right forum",
        paragraphs: [
          "Filing in the wrong forum wastes time that a distressed recovery often cannot afford. The right choice depends on factors such as whether the debtor is a company, whether insolvency proceedings are already underway, and what remedy — recovery of money versus resolution or liquidation — is actually being sought.",
        ],
        bullets: [
          "DRT: recovery suits and SARFAESI appeals against individuals or entities",
          "NCLT: corporate insolvency, resolution, and liquidation matters",
          "Assess the debtor's status and the remedy sought before filing",
        ],
      },
    ],
  },
  {
    slug: "cheque-bounce-section-138",
    image: "/insights/cheque-bounce.jpg",
    title: "What Happens in a Cheque Bounce Case Under Section 138?",
    category: "Criminal Defense",
    excerpt:
      "Cheque dishonour cases are among the most common disputes in Indian courts. Here's what both complainants and accused should expect.",
    date: "2026-03-22",
    readTime: "5 min read",
    content: [
      {
        paragraphs: [
          "Section 138 of the Negotiable Instruments Act, 1881 makes it a criminal offence for a cheque to bounce due to insufficient funds, provided certain procedural steps are followed. Despite being extremely common, the process trips up a lot of people simply because the timelines are easy to miss.",
        ],
      },
      {
        heading: "The procedural sequence",
        paragraphs: [
          "The complainant must issue a demand notice to the drawer of the cheque within 30 days of receiving the bank's dishonour memo. The drawer then has 15 days to make the payment. Only if payment is not made within that window does a cause of action to file a criminal complaint arise — and that complaint must be filed within one month of the 15-day period expiring.",
        ],
      },
      {
        heading: "For the accused",
        paragraphs: [
          "Being named in a cheque bounce complaint does not necessarily mean liability is settled. Defenses can include disputing the existence of a legally enforceable debt, challenging service of the demand notice, or showing that payment was in fact made within the stipulated period.",
        ],
      },
      {
        heading: "For the complainant",
        paragraphs: [
          "Complainants should preserve the original cheque, the dishonour memo, proof of dispatch of the demand notice, and any acknowledgment of debt. Courts scrutinise these procedural requirements closely, and a technical lapse can delay recovery considerably.",
        ],
        bullets: [
          "Demand notice must be sent within 30 days of the dishonour memo",
          "Drawer has 15 days to pay before a complaint can be filed",
          "Complaint must be filed within one month after the 15-day period lapses",
          "Documentation and timelines are frequently the deciding factor",
        ],
      },
    ],
  },
  {
    slug: "property-due-diligence-checklist",
    image: "/insights/property-due-diligence.jpg",
    title: "Property Due Diligence: A Checklist Before You Buy",
    category: "Property Law",
    excerpt:
      "Most property disputes trace back to due diligence that was skipped or rushed. A practical checklist before you sign anything.",
    date: "2026-02-10",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "A significant share of property litigation could be avoided with thorough due diligence before purchase. Because real estate transactions in India often involve multiple layers of documentation, it helps to approach the process methodically rather than relying on assurances alone.",
        ],
      },
      {
        heading: "Documents to verify",
        paragraphs: [
          "Title verification is the starting point, but it shouldn't be the only check performed. A complete due diligence exercise typically covers the chain of title, statutory approvals, and the seller's actual authority to transfer the property.",
        ],
        bullets: [
          "Chain of title for at least the past 30 years, where available",
          "Encumbrance certificate confirming the property is free of liabilities",
          "Approved building plan and occupancy certificate, for constructed property",
          "Property tax receipts and utility bills in the seller's name",
          "RERA registration status, for under-construction projects",
        ],
      },
      {
        heading: "Common red flags",
        paragraphs: [
          "Missing links in the title chain, mismatched names across documents, unusually urgent sale timelines, and reluctance to share original documents are all signals worth pausing over. None of these are automatically disqualifying, but each warrants a closer look before proceeding.",
        ],
      },
      {
        heading: "Why legal review matters",
        paragraphs: [
          "A legal opinion on title, prepared after reviewing the actual documents, is a modest cost relative to the value of the transaction — and considerably less expensive than untangling a dispute after possession has changed hands.",
        ],
      },
    ],
  },
  {
    slug: "child-custody-what-courts-consider",
    image: "/insights/child-custody.jpg",
    title: "Child Custody in India: What Courts Actually Consider",
    category: "Family Law",
    excerpt:
      "Custody decisions are rarely about which parent 'wins.' Here's what Indian courts weigh when deciding what's best for the child.",
    date: "2026-01-15",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "Custody disputes are often approached as a contest between parents, but Indian courts are guided by a different standard: the welfare of the child. Under the Guardians and Wards Act, 1890, and personal laws such as the Hindu Minority and Guardianship Act, 1956, the child's best interest overrides either parent's individual claim.",
        ],
      },
      {
        heading: "Factors courts weigh",
        paragraphs: [
          "There is no fixed formula, but courts consistently look at a similar set of factors when assessing what arrangement serves the child best.",
        ],
        bullets: [
          "The child's age, with very young children often placed with the mother absent strong reasons otherwise",
          "The child's own preference, given appropriate weight as they grow older",
          "Each parent's financial stability and ability to provide a secure environment",
          "Continuity — minimising disruption to the child's schooling and social environment",
          "Any history of neglect, abuse, or conduct harmful to the child's welfare",
        ],
      },
      {
        heading: "Types of custody arrangements",
        paragraphs: [
          "Courts can order physical custody to one parent with visitation rights to the other, joint custody with shared responsibilities, or in some cases guardianship arrangements involving extended family. The arrangement is tailored to the specific family situation rather than applied as a default.",
        ],
      },
      {
        heading: "A practical note",
        paragraphs: [
          "Custody proceedings tend to go better for everyone — most of all the child — when they are handled with restraint rather than as an extension of marital conflict. Courts notice, and it factors into how arrangements are decided.",
        ],
      },
    ],
  },
  {
    slug: "drafting-a-legal-notice",
    image: "/insights/legal-notice.jpg",
    title: "Drafting a Legal Notice: Why Precision Matters",
    category: "Legal Documentation",
    excerpt:
      "A legal notice is often the first formal step in a dispute — and a poorly drafted one can undermine the case before it even begins.",
    date: "2025-12-08",
    readTime: "3 min read",
    content: [
      {
        paragraphs: [
          "A legal notice is frequently the first indication to the other side that a dispute is being taken seriously. Beyond signaling intent, in many matters — cheque bounce cases and SARFAESI proceedings among them — a properly issued notice is a mandatory procedural requirement, not a formality that can be skipped.",
        ],
      },
      {
        heading: "What a well-drafted notice includes",
        paragraphs: [
          "A notice that only expresses frustration rarely helps. An effective one lays out facts clearly, cites the specific right or breach involved, and states exactly what is being demanded and by when.",
        ],
        bullets: [
          "A clear, chronological statement of relevant facts",
          "Specific reference to the agreement, obligation, or provision of law relied upon",
          "A precise demand — what is sought, and the timeline for compliance",
          "A clear statement of the consequence of non-compliance, without overstatement",
        ],
      },
      {
        heading: "Common mistakes",
        paragraphs: [
          "Vague demands, incorrect recipient details, missed statutory timelines, and notices that read as personal grievances rather than legal correspondence all weaken a case later. Courts and tribunals often examine the notice closely, particularly where it forms a procedural precondition to filing.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "A notice is a legal document, not a warning shot — treating it that way from the outset tends to save considerable time and cost down the line.",
        ],
      },
    ],
  },
];
