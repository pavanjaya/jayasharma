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
    slug: "rera-complaint-against-builder",
    image: "/insights/rera-building-construction.jpg",
    title: "How to File a RERA Complaint Against a Builder in Maharashtra",
    category: "Property Law",
    excerpt:
      "Delayed possession, a project that no longer matches what was promised, or a builder who's gone quiet — MahaRERA exists precisely for situations like these.",
    date: "2026-08-30",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "The Real Estate (Regulation and Development) Act, 2016 established MahaRERA in Maharashtra to regulate real estate projects and give homebuyers a dedicated forum for disputes with builders — a faster, more specialised alternative to routing every grievance through civil litigation.",
        ],
      },
      {
        heading: "What MahaRERA actually covers",
        paragraphs: [
          "A complaint can be filed against any registered project for issues such as delayed possession beyond the promised date, deviation from the sanctioned plan or approved layout, structural defects reported within the statutory defect liability period, or a builder's failure to refund a booking amount when a buyer is entitled to it.",
        ],
      },
      {
        heading: "Filing a complaint",
        paragraphs: [
          "Complaints are filed directly through the MahaRERA online portal against the registered project, along with a nominal filing fee and supporting documents — the booking agreement, payment receipts, and any correspondence with the builder. The matter is then heard by the authority, which can direct compensation, refund, or possession as appropriate.",
        ],
      },
      {
        heading: "What you can actually claim",
        paragraphs: [
          "Depending on the facts, a successful complaint can result in more than one type of relief.",
        ],
        bullets: [
          "Refund of the amount paid, along with interest",
          "Possession of the unit, along with interest for the period of delay",
          "Compensation for loss caused by the builder's default",
          "Interest for every month of delay under Section 18 of the Act, where possession itself is not sought",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Since the outcome of a RERA complaint depends heavily on the specific booking agreement and payment trail, having those documents reviewed early — before filing — makes a real difference to how the complaint is framed and how strong it is.",
        ],
      },
    ],
  },
  {
    slug: "agricultural-land-disputes-revenue-tribunal",
    image: "/insights/agricultural-land-farmer.jpg",
    title: "Agricultural Land Disputes: Why They Often Start at the Revenue Office, Not Court",
    category: "Property Law",
    excerpt:
      "Not every land dispute begins with a lawsuit. Many start with a disputed mutation entry at the Talathi's office — here's how the revenue system and the courts actually fit together.",
    date: "2026-08-30",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "Agricultural land disputes in Maharashtra frequently begin not in a civil court, but before revenue authorities — since the land records themselves are created, updated, and corrected through the revenue administration, not the judiciary.",
        ],
      },
      {
        heading: "The revenue record system",
        paragraphs: [
          "The 7/12 extract (Saat Baara Utara) is the primary record of rights for agricultural land in Maharashtra, showing ownership, cultivation details, and any encumbrances. Changes to it — a sale, inheritance, or partition — are recorded as mutation entries, first noted by the Talathi and then verified by the Circle Officer.",
        ],
      },
      {
        heading: "Where disputes actually start",
        paragraphs: [
          "Most agricultural land disputes trace back to one of a few recurring issues: a disputed or incorrect mutation entry, tenancy claims under the Maharashtra Tenancy and Agricultural Lands Act, disagreements over land classification or boundaries, or inheritance that isn't accurately reflected in the 7/12 record.",
        ],
      },
      {
        heading: "Revenue authorities vs. civil court",
        paragraphs: [
          "Choosing the right forum matters more than it might seem, since filing in the wrong one can cost significant time before the matter even gets addressed on its merits.",
        ],
        bullets: [
          "The Talathi and Tehsildar handle mutation entries and related corrections in the first instance",
          "Tenancy disputes are generally heard by the Tehsildar or Sub-Divisional Officer under the Maharashtra Tenancy and Agricultural Lands Act",
          "The Maharashtra Revenue Tribunal hears certain appeals from these revenue authorities",
          "Civil courts retain jurisdiction over genuine title and ownership disputes that go beyond simply correcting a record",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "The first real decision in an agricultural land dispute isn't legal strategy — it's identifying whether the dispute is really about the record (revenue forum) or about title itself (civil court), since that determines where the matter needs to be filed in the first place.",
        ],
      },
    ],
  },
  {
    slug: "arbitration-vs-litigation",
    image: "/insights/arbitration-agreement-review.jpg",
    title: "Arbitration vs. Litigation: Which Route Fits Your Dispute?",
    category: "Arbitration & ADR",
    excerpt:
      "Not every commercial dispute needs a courtroom. Here's how arbitration actually compares to litigation, and what determines which route is even available.",
    date: "2026-08-29",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "Many commercial, employment, and real estate contracts contain an arbitration clause, yet when a dispute actually arises, parties often default to assuming a civil suit is the only option. Whether arbitration is available — and whether it's the better route — depends on the agreement itself and the nature of the dispute.",
        ],
      },
      {
        heading: "What arbitration actually involves",
        paragraphs: [
          "Arbitration is a private dispute resolution process governed in India by the Arbitration and Conciliation Act, 1996. Instead of a judge, one or more arbitrators hear the matter and issue a binding award, which is enforceable in much the same way as a civil court decree once passed.",
        ],
      },
      {
        heading: "When arbitration is — and isn't — available",
        paragraphs: [
          "Arbitration is only available where the underlying contract contains an arbitration clause, or where both parties separately agree to refer the dispute to arbitration. It cannot be forced on a party who never agreed to it. Certain categories of disputes — criminal matters, matrimonial disputes, and some others considered to affect public rights — cannot be arbitrated even where an agreement exists.",
        ],
      },
      {
        heading: "Arbitration vs. litigation: the real differences",
        paragraphs: [
          "The two processes differ in several practical respects that matter more than people often expect going in.",
        ],
        bullets: [
          "Confidentiality — arbitration proceedings are private; civil litigation is a matter of public record",
          "Choice of decision-maker — parties can select an arbitrator with relevant subject-matter expertise, unlike court allocation",
          "Limited appeal — an arbitral award can be challenged only on narrow grounds, unlike the multiple appellate levels available in litigation",
          "Cost isn't automatically lower — for smaller disputes, arbitrator fees and administrative costs can make arbitration comparably expensive",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Whether arbitration is even an option comes down to what the underlying contract actually says — reviewing that agreement is the first step before deciding how to pursue any dispute.",
        ],
      },
    ],
  },
  {
    slug: "does-your-business-need-a-partnership-agreement",
    image: "/insights/partnership-agreement-handshake.jpg",
    title: "Does Your Business Need a Partnership Agreement?",
    category: "Corporate Law",
    excerpt:
      "Two people starting a business together often skip formal documentation, assuming trust is enough. Here's what actually happens when it isn't.",
    date: "2026-08-28",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "It's common for small businesses and professional partnerships in India to begin without any written agreement between the partners, relying instead on goodwill and the default rules of the Indian Partnership Act, 1932. Those default rules don't always reflect what the partners actually intended.",
        ],
      },
      {
        heading: "What happens without a written agreement",
        paragraphs: [
          "In the absence of a partnership deed, the Act's default provisions govern the relationship — profits and losses are shared equally regardless of each partner's capital contribution or role, there is no restriction on a partner exiting or competing, and there's no agreed mechanism for resolving disagreements when they arise.",
        ],
      },
      {
        heading: "What a partnership agreement should cover",
        paragraphs: [
          "A properly drafted deed addresses the specific points that tend to cause disputes later.",
        ],
        bullets: [
          "Capital contribution and the actual profit-and-loss sharing ratio",
          "Roles, responsibilities, and decision-making authority between partners",
          "The process for admitting a new partner or removing an existing one",
          "What happens to the business on a partner's death, exit, or the firm's dissolution",
          "An agreed mechanism for resolving disputes between partners",
        ],
      },
      {
        heading: "Registration: optional but consequential",
        paragraphs: [
          "Registering a partnership firm under the Act isn't mandatory, but an unregistered firm faces real practical restrictions — most notably, it generally cannot sue a third party, or even another partner, to enforce a contractual right arising from the partnership.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Disagreements between partners are far more manageable when the terms were agreed and documented before the business started, rather than negotiated for the first time in the middle of a dispute.",
        ],
      },
    ],
  },
  {
    slug: "how-is-maintenance-calculated-after-divorce",
    image: "/insights/maintenance-rupee-notes.jpg",
    title: "How Is Maintenance Calculated After Divorce?",
    category: "Family Law",
    excerpt:
      "There's no fixed formula for maintenance in Indian law — but courts do weigh a consistent set of factors when deciding what's reasonable.",
    date: "2026-08-27",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "Maintenance is one of the most contested aspects of a matrimonial matter, and unlike some other jurisdictions, Indian law doesn't prescribe a fixed percentage-of-income formula. Instead, courts assess a set of factors on the facts of each case.",
        ],
      },
      {
        heading: "The legal basis",
        paragraphs: [
          "Maintenance claims can arise under more than one provision depending on the circumstances — Section 125 of the Code of Criminal Procedure (now carried forward under the Bharatiya Nagarik Suraksha Sanhita) provides a general, religion-neutral remedy, while the Hindu Marriage Act and the Hindu Adoptions and Maintenance Act provide for interim and permanent maintenance in matters governed by Hindu law. Other personal laws and the Special Marriage Act contain their own provisions.",
        ],
      },
      {
        heading: "Factors courts actually weigh",
        paragraphs: [
          "Rather than applying a formula, courts typically look at a combination of factors specific to the parties involved.",
        ],
        bullets: [
          "Income and earning capacity of both spouses, not just the paying spouse",
          "The standard of living the parties maintained during the marriage",
          "The claimant's reasonable needs, including housing and medical expenses",
          "Whether the claimant has independent income or assets of their own",
          "The needs of any children, where maintenance for children is also being decided",
        ],
      },
      {
        heading: "Interim vs. permanent maintenance",
        paragraphs: [
          "Interim maintenance may be awarded while proceedings are still pending, to meet immediate needs during the litigation itself. Permanent maintenance or alimony is fixed at the time of the final decree, and can be structured as periodic payments or a one-time lump sum, depending on what the parties agree or the court directs.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Because there's no fixed formula, presenting a clear, well-documented picture of both spouses' actual financial position is usually what determines the outcome — far more than the arguments made around it.",
        ],
      },
    ],
  },
  {
    slug: "limitation-period-filing-a-case-india",
    image: "/insights/limitation-period-calendar.jpg",
    title: "Limitation Period in India: Why Filing on Time Matters",
    category: "Civil Litigation",
    excerpt:
      "A strong case can still be dismissed for one reason alone: it was filed too late. Here's how limitation periods actually work in Indian law.",
    date: "2026-08-26",
    readTime: "3 min read",
    content: [
      {
        paragraphs: [
          "Under the Limitation Act, 1963, every type of legal claim carries a specific window within which it must be filed. Miss that window, and the claim can be dismissed as time-barred — regardless of how strong it is on the merits.",
        ],
      },
      {
        heading: "How the clock starts",
        paragraphs: [
          "The limitation period generally begins from the date the \"cause of action\" arises — the date of a breach, the date a debt falls due, or the date a party gains knowledge of a fraud — rather than necessarily the date of the underlying event itself. Identifying the correct start date is often where disputes over limitation actually get decided.",
        ],
      },
      {
        heading: "Common limitation periods",
        paragraphs: [
          "The applicable period varies significantly by the type of claim.",
        ],
        bullets: [
          "Three years for most contractual and money recovery suits",
          "Twelve years for suits seeking possession of immovable property",
          "One year for certain torts, including defamation",
          "Ninety days is a common window for many civil appeals",
          "Arbitration-related applications often carry their own shorter statutory windows, sometimes as little as 30 or 60 days",
        ],
      },
      {
        heading: "Can the delay be condoned?",
        paragraphs: [
          "Section 5 of the Limitation Act allows delay to be condoned in certain categories of proceedings — though notably not ordinary civil suits — where \"sufficient cause\" is shown for the delay. Courts tend to interpret this narrowly, and delay caused by simple inattention is rarely excused.",
        ],
      },
      {
        heading: "The takeaway",
        paragraphs: [
          "Given how unforgiving limitation law can be, having a matter reviewed as soon as a dispute arises — rather than waiting — preserves options that a delay would otherwise close off permanently.",
        ],
      },
    ],
  },
  {
    slug: "who-owns-property-after-owners-death",
    image: "/insights/property-inheritance.jpg",
    title: "Who Owns Property After the Owner's Death?",
    category: "Succession Law",
    excerpt:
      "When someone dies without leaving clear instructions, property doesn't automatically go to the 'closest' relative. Here's how ownership is actually decided.",
    date: "2026-08-25",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "One of the most common questions after a death in the family is a deceptively simple one: who owns the property now? The answer depends almost entirely on whether the deceased left a valid Will, and if not, which personal law applies to the family.",
        ],
      },
      {
        heading: "If there is a Will",
        paragraphs: [
          "Where a valid Will exists, the property passes according to its terms, regardless of who the legal heirs would otherwise have been. The named executor is responsible for administering the estate, and in many cases, probate — court validation of the Will — is required before the property can be formally transferred, particularly for immovable property in certain states.",
        ],
      },
      {
        heading: "If there is no Will (intestate succession)",
        paragraphs: [
          "In the absence of a Will, succession is governed by the personal law applicable to the deceased — the Hindu Succession Act, 1956 for Hindus, Buddhists, Sikhs, and Jains; Muslim personal law for Muslims; and the Indian Succession Act, 1925 for Christians and Parsis, among others. Each framework has its own rules on who qualifies as a legal heir and in what proportion they inherit.",
        ],
        bullets: [
          "Under Hindu succession law, Class I heirs (spouse, children, and mother) inherit first and equally",
          "Only in the absence of Class I heirs do Class II heirs — such as siblings — come into the picture",
          "Muslim inheritance follows fixed shares under Islamic law, distinct from the Hindu framework",
          "A legal heir certificate or succession certificate is often required to formally claim the property",
        ],
      },
      {
        heading: "What families should do",
        paragraphs: [
          "Disputes usually arise not because the law is unclear, but because families act on assumptions rather than verifying the actual legal position. Getting a clear opinion on applicable succession law — and formally documenting the transfer through mutation records — early on prevents years of avoidable conflict later.",
        ],
      },
    ],
  },
  {
    slug: "can-a-legal-notice-be-ignored",
    image: "/insights/legal-notice-envelope.jpg",
    title: "Can a Legal Notice Be Ignored?",
    category: "Legal Documentation",
    excerpt:
      "Technically, yes — nothing forces a reply. But ignoring a legal notice rarely works out the way people expect it to.",
    date: "2026-08-18",
    readTime: "3 min read",
    content: [
      {
        paragraphs: [
          "A legal notice has no power to force an immediate response on its own — there's no penalty simply for staying silent. But that doesn't mean ignoring one is a safe or sensible strategy, and in practice, it rarely works out well for the recipient.",
        ],
      },
      {
        heading: "What actually happens if you don't respond",
        paragraphs: [
          "Silence is often treated by courts as an inability to dispute the claims made in the notice, particularly where a reasonable person would have been expected to respond. In several types of matters — cheque bounce cases and SARFAESI proceedings among them — failing to respond within the specified window can also mean losing procedural rights that were only available during that period.",
        ],
      },
      {
        heading: "When ignoring it might genuinely be fine",
        paragraphs: [
          "Not every notice deserves a formal reply. A notice with no legal basis, sent to the wrong party, or clearly an attempt at intimidation rather than a genuine legal step may not warrant a detailed response. Even then, it's worth having someone assess the notice first — the difference between 'safe to ignore' and 'risky to ignore' isn't always obvious from the wording alone.",
        ],
        bullets: [
          "A considered response, even a brief one, preserves your position better than silence",
          "Some notices are procedural preconditions to litigation — ignoring them doesn't stop the case from being filed",
          "Silence can later be characterised in court as an admission or lack of a genuine defence",
          "A quick legal opinion on the notice usually costs far less than dealing with its consequences later",
        ],
      },
      {
        heading: "The practical takeaway",
        paragraphs: [
          "The safest default is to have the notice reviewed before deciding whether — and how — to respond, rather than assuming that no response is the low-risk option.",
        ],
      },
    ],
  },
  {
    slug: "fir-vs-nc-complaint",
    image: "/insights/police-complaint.jpg",
    title: "FIR vs NC Complaint: What's the Difference?",
    category: "Criminal Defense",
    excerpt:
      "Both start with a visit to the police station, but an FIR and a Non-Cognizable (NC) complaint set very different processes in motion.",
    date: "2026-08-10",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "When someone approaches the police to report an incident, the type of complaint registered — an FIR or an NC entry — determines what happens next, and the difference matters far more than most people realise at the time.",
        ],
      },
      {
        heading: "First Information Report (FIR)",
        paragraphs: [
          "An FIR is registered for cognizable offences — serious crimes such as theft, assault, or fraud, where the police have the authority to investigate and arrest without needing prior court permission. Once an FIR is filed under Section 154 of the Code of Criminal Procedure, the police are legally obligated to investigate.",
        ],
      },
      {
        heading: "Non-Cognizable (NC) Complaint",
        paragraphs: [
          "An NC complaint is registered for less serious, non-cognizable offences, where the police cannot investigate or arrest without prior permission from a magistrate. It is often used for matters like minor disputes or defamation, and mainly serves as an official record rather than triggering an active investigation.",
        ],
        bullets: [
          "FIR: cognizable offence, mandatory police investigation, arrest possible without a warrant",
          "NC complaint: non-cognizable offence, investigation only with magistrate's permission",
          "You can request a copy of either document — it's your right",
          "If police refuse to register an FIR for a cognizable offence, a complaint can be made to a superior officer or the magistrate directly",
        ],
      },
      {
        heading: "Why the distinction matters",
        paragraphs: [
          "Confusing the two can leave a genuine complaint without any real follow-up, or leave someone facing serious allegations without realising an active investigation has begun. If you're unsure which category your matter falls under, it's worth getting that confirmed before deciding your next step.",
        ],
      },
    ],
  },
  {
    slug: "loan-guarantor-liability",
    image: "/insights/loan-agreement-signing.jpg",
    title: "Loan Guarantor Liability: What You're Actually Signing Up For",
    category: "Banking & Recovery",
    excerpt:
      "Standing as a guarantor is often treated as a formality between friends or family. Legally, it's a serious financial commitment.",
    date: "2026-08-02",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "Agreeing to be a loan guarantor is often seen as a favour — a signature to help someone else get approved. In law, it creates a binding obligation that can make the guarantor just as liable as the borrower if the loan goes unpaid.",
        ],
      },
      {
        heading: "What a guarantor actually agrees to",
        paragraphs: [
          "Under the Indian Contract Act, 1872, a guarantor's liability is 'co-extensive' with that of the borrower, unless the guarantee agreement says otherwise. In practice, this means the lender is not required to exhaust all recovery options against the borrower first — it can proceed directly against the guarantor for the outstanding amount.",
        ],
      },
      {
        heading: "Common misconceptions",
        paragraphs: [
          "Many guarantors assume their liability is limited, secondary, or that the bank must chase the borrower first. None of these are guaranteed protections unless they're explicitly written into the agreement. Guarantors are also often unaware that they can be named in SARFAESI proceedings or recovery suits alongside the borrower.",
        ],
        bullets: [
          "A guarantor's liability generally continues until the loan is fully repaid or the guarantee is formally revoked",
          "Death of the guarantor does not automatically end the guarantee — it may bind the guarantor's estate",
          "A guarantor can request updates on the loan account, though lenders don't always volunteer this",
          "Reviewing the guarantee document's exact terms matters more than assuming standard protections apply",
        ],
      },
      {
        heading: "Before you sign",
        paragraphs: [
          "Standing as a guarantor should be treated with the same seriousness as taking the loan yourself — because in a recovery scenario, that's effectively the legal position you're in.",
        ],
      },
    ],
  },
  {
    slug: "anticipatory-bail-explained",
    image: "/insights/courtroom-justice.jpg",
    title: "Anticipatory Bail: When and How to Apply",
    category: "Criminal Defense",
    excerpt:
      "Anticipatory bail protects a person from arrest before it happens — but it isn't automatic, and timing matters more than most people expect.",
    date: "2026-07-22",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "Anticipatory bail is a pre-arrest legal remedy available under Section 438 of the Code of Criminal Procedure (now reflected under the Bharatiya Nagarik Suraksha Sanhita), allowing a person to seek protection from arrest in anticipation of being accused of a non-bailable offence.",
        ],
      },
      {
        heading: "When it's typically sought",
        paragraphs: [
          "Anticipatory bail is usually filed when a person has reasonable grounds to believe they may be arrested — for instance, after an FIR is registered against them, or when they learn a complaint is being prepared. It is a preventive step, not something available once an arrest has already taken place.",
        ],
      },
      {
        heading: "What courts consider",
        paragraphs: [
          "Granting anticipatory bail is entirely at the court's discretion, and judges weigh several factors before deciding.",
        ],
        bullets: [
          "The nature and seriousness of the alleged offence",
          "Whether the applicant has a prior criminal record",
          "The likelihood of the applicant fleeing or tampering with evidence",
          "Whether the accusation appears to be made with an intent to humiliate or harass",
        ],
      },
      {
        heading: "Conditions that usually apply",
        paragraphs: [
          "Even when granted, anticipatory bail typically comes with conditions — cooperating with the investigation, making oneself available for questioning, and not leaving the jurisdiction without permission, among others. Violating these conditions can result in the bail being cancelled. Acting quickly once the possibility of an FIR arises makes a meaningful difference to how this process plays out.",
        ],
      },
    ],
  },
  {
    slug: "will-testament-explained",
    image: "/insights/will-document-pen.jpg",
    title: "Why Every Adult Should Have a Will",
    category: "Succession Law",
    excerpt:
      "A Will isn't just for the wealthy or the elderly. It's the single simplest way to prevent your family from dealing with succession disputes later.",
    date: "2026-07-10",
    readTime: "3 min read",
    content: [
      {
        paragraphs: [
          "A Will is a legal declaration of how a person wants their assets distributed after death. It sounds like a formality that can wait — until a family is left navigating intestate succession law, competing claims, and months of documentation that a simple Will could have avoided entirely.",
        ],
      },
      {
        heading: "What makes a Will valid",
        paragraphs: [
          "Under the Indian Succession Act, 1925, a Will must be made voluntarily by a person of sound mind, signed by the testator, and attested by at least two witnesses who also sign in the testator's presence. Registration is not mandatory in most cases, but a registered Will carries stronger evidentiary weight if challenged later.",
        ],
      },
      {
        heading: "What a Will actually solves",
        paragraphs: [
          "Without a Will, property passes according to intestate succession rules, which may not reflect what the deceased actually wanted — and often takes far longer to formally settle, since all legal heirs typically need to be identified and involved.",
        ],
        bullets: [
          "Clearly specifies who receives what, reducing the scope for family disputes",
          "Allows appointment of a guardian for minor children",
          "Can account for specific circumstances a fixed statutory formula wouldn't — a dependent, a family business, a specific bequest",
          "Can be updated as circumstances change, unlike decisions made after death",
        ],
      },
      {
        heading: "A simple starting point",
        paragraphs: [
          "A basic, properly executed Will is far less complicated — and far less expensive — than most people assume, especially compared to the cost of resolving a dispute among heirs after the fact.",
        ],
      },
    ],
  },
  {
    slug: "power-of-attorney-explained",
    image: "/insights/signing-document-attorney.jpg",
    title: "Power of Attorney Explained: Types and When You Need One",
    category: "Legal Documentation",
    excerpt:
      "A Power of Attorney lets someone else act on your behalf — but the type you choose determines exactly how much authority they actually get.",
    date: "2026-06-28",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "A Power of Attorney (POA) is a legal document authorising one person — the agent — to act on behalf of another — the principal — in specified matters. It's commonly used when the principal is unavailable, unwell, or simply needs someone to handle a transaction on their behalf.",
        ],
      },
      {
        heading: "General vs Special Power of Attorney",
        paragraphs: [
          "A General Power of Attorney grants broad authority across a range of matters — financial transactions, property management, legal proceedings — and should be granted only to someone fully trusted, given how wide-ranging it is. A Special Power of Attorney, by contrast, is limited to a specific transaction or purpose, such as registering a single property sale, and expires once that purpose is fulfilled.",
        ],
      },
      {
        heading: "Common situations where a POA is used",
        paragraphs: [
          "POAs are frequently used by NRIs managing property in India, elderly individuals who need assistance with routine transactions, or anyone unable to be physically present for a specific legal formality.",
        ],
        bullets: [
          "Managing or selling property when the owner is abroad or unavailable",
          "Handling banking transactions on behalf of someone who is unwell",
          "Representing someone in court proceedings for procedural matters",
          "Completing a single, defined transaction without granting broader authority",
        ],
      },
      {
        heading: "A word of caution",
        paragraphs: [
          "A Power of Attorney is not the same as ownership, and it does not itself transfer title to property — a distinction that has led to real disputes when POAs were mistakenly treated as a substitute for a proper sale deed. Getting the scope, wording, and registration right at the outset avoids that confusion later.",
        ],
      },
    ],
  },
  {
    slug: "divorce-by-mutual-consent",
    image: "/insights/wedding-rings-separation.jpg",
    title: "Divorce by Mutual Consent: The Process Explained",
    category: "Family Law",
    excerpt:
      "When both spouses agree to separate, the law offers a faster, less adversarial path than a contested divorce — but it still has clear procedural steps.",
    date: "2026-06-15",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "Where both spouses agree that the marriage cannot continue, divorce by mutual consent — available under Section 13B of the Hindu Marriage Act, 1955, and similar provisions in other personal laws — offers a comparatively faster and less contentious route than a contested divorce.",
        ],
      },
      {
        heading: "The basic requirements",
        paragraphs: [
          "Both spouses must have been living separately for at least one year, must agree that the marriage has irretrievably broken down, and must file a joint petition stating their mutual consent to divorce, along with agreed terms on matters like alimony, custody, and asset division.",
        ],
      },
      {
        heading: "The two-motion process",
        paragraphs: [
          "After the joint petition is filed, the court typically requires a first motion, followed by a mandatory 'cooling-off' period of six months — intended to allow for reconciliation — before the second motion can be filed to finalise the divorce. Courts have discretion to waive this period in appropriate cases, particularly where reconciliation is clearly not viable.",
        ],
        bullets: [
          "First motion: joint statement confirming intent to divorce",
          "Cooling-off period: typically six months, waivable in certain circumstances",
          "Second motion: confirmation before the court that consent remains unchanged",
          "Decree of divorce: granted once the court is satisfied all requirements are met",
        ],
      },
      {
        heading: "Why the terms matter as much as the process",
        paragraphs: [
          "Most disputes in mutual consent divorces arise later, from vague or incomplete terms on alimony or custody agreed to hastily. Getting these terms clearly and properly documented at the outset prevents the process from becoming contested down the line.",
        ],
      },
    ],
  },
  {
    slug: "sale-deed-vs-agreement-to-sell",
    image: "/insights/house-keys-contract.jpg",
    title: "Sale Deed vs Agreement to Sell: What's the Difference?",
    category: "Property Law",
    excerpt:
      "These two documents are often confused, but only one of them actually transfers ownership. Knowing the difference matters before you sign either.",
    date: "2026-06-01",
    readTime: "3 min read",
    content: [
      {
        paragraphs: [
          "An Agreement to Sell and a Sale Deed are both central to a property transaction, but they serve entirely different legal functions — and confusing the two is one of the more common, and costly, mistakes in real estate dealings.",
        ],
      },
      {
        heading: "Agreement to Sell",
        paragraphs: [
          "An Agreement to Sell is a promise to transfer property in the future, subject to agreed conditions being fulfilled — typically full payment. It creates a right to obtain the sale deed, but it does not itself transfer ownership or title. Possession may sometimes be handed over under an Agreement to Sell, but that alone does not make the buyer the legal owner.",
        ],
      },
      {
        heading: "Sale Deed",
        paragraphs: [
          "A Sale Deed is the actual instrument of transfer — it conveys ownership from seller to buyer, and must be registered under the Registration Act, 1908 to be legally valid and enforceable. Only after a registered Sale Deed is executed does the buyer become the legal owner of the property.",
        ],
        bullets: [
          "Agreement to Sell: a promise to transfer, does not itself convey ownership",
          "Sale Deed: the actual, registered instrument that transfers ownership",
          "Stamp duty and registration apply to the Sale Deed, not typically the Agreement to Sell",
          "Disputes often arise when parties treat an unregistered Agreement to Sell as if it were a completed sale",
        ],
      },
      {
        heading: "The practical implication",
        paragraphs: [
          "If ownership hasn't legally transferred through a registered Sale Deed, the buyer's position remains vulnerable — regardless of how much has been paid or how long possession has been held. Ensuring the transaction is carried through to a properly registered Sale Deed is what actually secures the buyer's title.",
        ],
      },
    ],
  },
  {
    slug: "recovery-suits-for-unpaid-money",
    image: "/insights/unpaid-invoice-money.jpg",
    title: "Recovery Suits: How to Legally Recover Unpaid Money",
    category: "Civil Litigation",
    excerpt:
      "Whether it's an unpaid loan to a friend or an unsettled business invoice, a recovery suit is the formal legal route to getting your money back.",
    date: "2026-05-20",
    readTime: "4 min read",
    content: [
      {
        paragraphs: [
          "Money owed and not repaid — whether from a personal loan, a business transaction, or an unpaid invoice — can be recovered through a civil recovery suit, provided the claim is filed correctly and within the legally permitted time.",
        ],
      },
      {
        heading: "What a recovery suit requires",
        paragraphs: [
          "A recovery suit requires establishing that a specific, quantifiable sum is owed, and that the debtor has failed to repay despite being liable to do so. Documentary evidence — loan agreements, invoices, bank transfer records, or written acknowledgments — substantially strengthens the case.",
        ],
      },
      {
        heading: "The limitation period",
        paragraphs: [
          "Under the Limitation Act, 1963, a recovery suit generally must be filed within three years from the date the debt became due, or from the last acknowledgment of the debt by the debtor, whichever is later. Filing after this period, without a valid explanation for the delay, can result in the claim being dismissed regardless of its merits.",
        ],
        bullets: [
          "Standard limitation period for money recovery suits: three years",
          "A written acknowledgment of debt can reset the limitation clock",
          "A legal notice is often sent before filing, giving the debtor a final opportunity to pay",
          "Interest on the outstanding amount can typically be claimed alongside the principal",
        ],
      },
      {
        heading: "Before filing suit",
        paragraphs: [
          "Not every unpaid debt needs to go straight to litigation — a well-drafted legal notice resolves a meaningful share of these disputes without a full trial. Where it doesn't, having the documentation and timelines in order from the outset makes the eventual suit considerably stronger.",
        ],
      },
    ],
  },
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
