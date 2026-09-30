/**
 * SCALARK Business Systems Architecture Knowledge Corpus & Diagnostic Engine
 * Comprehensive institutional knowledge base for SCALARK AI Copilot.
 * Derived from SCALARK.pdf (Enterprise Systems Doctrine & 5-Phase Framework).
 */

export const SCALARK_SYSTEMS_OVERVIEW = {
  name: "SCALARK Systems Architecture Copilot",
  version: "4.2.0-Enterprise",
  philosophy: "Your business doesn't need more effort. It needs a better system.",
  tagline: "Find the Problem. Fix the System. Scale the Business.",
  coreAudience: "Entrepreneurs, Startups, Scaling SMEs, MSMEs, and Cross-Border Enterprise Founders",
  globalPresence: ["Dubai (UAE)", "London (UK)", "Singapore", "Mumbai & Bengaluru (India)"],
  primaryMetric: "3.8x - 4.6x Enterprise Valuation Multiple Uplift",
  predictabilityRate: "98.4% System Operationalization without downtime",
  ownerTimeRecovery: "Up to 65% Founder Capacity Recovered from daily firefighting"
};

// 6 Core Architectural Pillars
export const ARCHITECTURAL_PILLARS = [
  {
    id: "growth",
    number: "01",
    title: "Business Growth Architecture",
    description: "Engineering predictable, non-linear enterprise expansion that removes reliance on intuitive luck.",
    keyMetrics: ["Sustainable MoM Velocity", "Customer Lifetime Value (LTV)", "Unit Economics Health"],
    symptoms: ["Revenue plateaus despite increased marketing spend", "Customer acquisition cost (CAC) exceeding margin thresholds", "Lack of clear market differentiation"],
    cure: "Re-architecting market positioning, unit margins, and distribution flywheels before deploying growth capital."
  },
  {
    id: "operations",
    number: "02",
    title: "Operations & Workflow Engineering",
    description: "Eliminating founder heroics and chaotic handover friction by institutionalizing SOPs and automated accountability.",
    keyMetrics: ["Cycle Time Reduction", "Defect/Error Rate <0.2%", "Standard Operating Procedure (SOP) Adoption >95%"],
    symptoms: ["Founder must approve every minor decision", "Projects stalled due to key-person dependencies", "Inconsistent customer service delivery"],
    cure: "Codifying end-to-end departmental runbooks, role accountability matrices (RACI), and autonomous escalation pathways."
  },
  {
    id: "finance",
    number: "03",
    title: "Finance & Cash-Flow Architecture",
    description: "Transforming delayed retrospective accounting into real-time predictive unit economics and runway intelligence.",
    keyMetrics: ["Days Sales Outstanding (DSO) Reduction", "Operating Cash Flow Margin", "Predictive 13-Week Runway Visibility"],
    symptoms: ["Profitable on paper (P&L) but bank account is constantly dry", "Uncollected receivables strangling cash flow", "No visibility into product/service gross margin leakages"],
    cure: "Deploying automated cash-flow waterfall dashboards, dynamic unit economics models, and rigid working capital governance."
  },
  {
    id: "sales",
    number: "04",
    title: "Sales & Commercial Engine",
    description: "Replacing erratic pipeline guesses with an institutional conversion pipeline and disciplined revenue operations.",
    keyMetrics: ["Pipeline Conversion Velocity", "Average Contract Value (ACV) Expansion", "Quota Attainment Consistency >90%"],
    symptoms: ["Sales depend entirely on founder relationships", "Reps give large discounts to close deals", "Forecasts miss quarter after quarter"],
    cure: "Building multi-channel qualification criteria, algorithmic deal stage gates, and programmatic sales playbooks."
  },
  {
    id: "technology",
    number: "05",
    title: "Technology & Automation Systems",
    description: "Connecting disconnected SaaS silos and automating repetitive manual data-entry to unleash team leverage.",
    keyMetrics: ["API Integration Health 100%", "Manual Hours Saved / Week", "Single Source of Truth Data Accuracy"],
    symptoms: ["Staff manually re-entering data between CRM, ERP, and Excel", "Subscription bloat with 20+ underutilized tools", "Reporting requires 3 days of manual spreadsheet compilation"],
    cure: "Consolidating software architectures into unified data hubs, automated webhook workflows, and unified leadership dashboards."
  },
  {
    id: "governance",
    number: "06",
    title: "Performance & Leadership Governance",
    description: "Institutionalizing metric-backed transparency, weekly operational cadences, and self-managing leadership squads.",
    keyMetrics: ["Daily / Weekly KPI Cadence Adherence", "Employee Net Promoter Score (eNPS)", "Autonomous Department Execution"],
    symptoms: ["Endless unproductive meetings without clear follow-ups", "Employees unclear on what success looks like daily", "High turnover in critical operational seats"],
    cure: "Installing weekly rhythm scorecards, OKR/KPI cascading frameworks, and autonomous operational squad governance."
  }
];

// The 5-Phase Architecture Framework (SCALARK.pdf Section 06)
export const FIVE_PHASE_FRAMEWORK = [
  {
    phase: "01",
    name: "Diagnose",
    doctrine: "Understand Before We Recommend",
    timeline: "Week 1 - 2",
    objective: "Perform exhaustive end-to-end structural audit of operations, sales pipeline, cash flow, and team dependencies.",
    deliverables: ["Institutional Friction Diagnostic Report", "Root-Cause Dependency Map", "Value Leakage Quantification Matrix"]
  },
  {
    phase: "02",
    name: "Design",
    doctrine: "Build the Right Institutional Solution",
    timeline: "Week 3 - 4",
    objective: "Architect bespoke role scorecards, standard operating procedures, tech stack integrations, and financial visibility models.",
    deliverables: ["Systems Architecture Blueprint", "Institutional RACI Matrix", "Real-Time Executive KPI Dashboard Specs"]
  },
  {
    phase: "03",
    name: "Implement",
    doctrine: "Turn the Plan Into Action",
    timeline: "Week 5 - 8",
    objective: "Embed workflows into daily operations, train functional leaders, integrate tech pipelines, and eliminate old manual habits.",
    deliverables: ["Live Workflow Automation Deployments", "Trained Departmental Champions", "Elimination of Critical Founder Bottlenecks"]
  },
  {
    phase: "04",
    name: "Measure",
    doctrine: "Make Performance Visible",
    timeline: "Week 9 - 10",
    objective: "Establish daily and weekly KPI cadence boards to track system adoption, variance, and financial performance.",
    deliverables: ["Real-Time Unit Economics Cockpit", "Variance Management Review Cadence", "Adoption Audit Certification"]
  },
  {
    phase: "05",
    name: "Scale",
    doctrine: "Build for Enduring Growth",
    timeline: "Week 11+",
    objective: "Unlock multi-market regional expansion, strategic acquisitions, and institutional enterprise valuation expansion.",
    deliverables: ["Cross-Border Playbooks", "M&A Operational Readiness Dossier", "Self-Operating Management Board Framework"]
  }
];

// Multi-step Interactive Diagnostic Quiz
export const DIAGNOSTIC_QUIZ = [
  {
    id: "q1",
    category: "Operations & Founder Load",
    question: "If you took an uninterrupted 30-day leave tomorrow, what happens to your business?",
    options: [
      { text: "Complete paralysis; key decisions freeze and revenue plummets.", points: 10, bottleneck: "Critical Founder Dependency" },
      { text: "Team struggles; minor errors escalate into client emergencies.", points: 25, bottleneck: "Process Fragility" },
      { text: "Operations continue but strategic growth halts completely.", points: 38, bottleneck: "Strategic Bottleneck" },
      { text: "Business thrives independently with clear SOPs and metrics.", points: 50, bottleneck: "None" }
    ]
  },
  {
    id: "q2",
    category: "Financial & Cash Visibility",
    question: "How quickly can your finance team report precise gross margin by product/service for the current month?",
    options: [
      { text: "We only know when the accountant files taxes months later.", points: 8, bottleneck: "Blind Cash Flow" },
      { text: "Takes 2 to 3 weeks of manual spreadsheet compilation.", points: 20, bottleneck: "Delayed Unit Economics" },
      { text: "Available in 3 to 5 days, but with occasional discrepancies.", points: 35, bottleneck: "Semi-Automated Reporting" },
      { text: "Real-time automated dashboard updated daily.", points: 50, bottleneck: "None" }
    ]
  },
  {
    id: "q3",
    category: "Sales & Revenue Predictability",
    question: "Where do 80% of your new high-value customer acquisitions come from?",
    options: [
      { text: "Founder personal network & unpredictable word-of-mouth.", points: 12, bottleneck: "Erratic Commercial Engine" },
      { text: "Heavy ad spend with inconsistent conversion ROI.", points: 22, bottleneck: "Ad-Dependent CAC Bleed" },
      { text: "Inbound leads, but sales team closes erratically.", points: 34, bottleneck: "Sales Stage Friction" },
      { text: "Repeatable, multi-channel inbound/outbound machine with predictable CAC.", points: 50, bottleneck: "None" }
    ]
  },
  {
    id: "q4",
    category: "SOPs & Execution Quality",
    question: "How are standard operating procedures (SOPs) currently documented and enforced?",
    options: [
      { text: "In people's heads; training is tribal and ad-hoc.", points: 10, bottleneck: "Tribal Knowledge Bleed" },
      { text: "PDF documents that sit forgotten in a Google Drive folder.", points: 18, bottleneck: "Dormant Documentation" },
      { text: "Documented in software, but adherence requires micromanagement.", points: 32, bottleneck: "Adoption Enforcement Gap" },
      { text: "Embedded natively in automated workflows with strict QA gates.", points: 50, bottleneck: "None" }
    ]
  },
  {
    id: "q5",
    category: "Technology Stack Integration",
    question: "How seamlessly does your CRM, invoicing, project management, and ERP software communicate?",
    options: [
      { text: "Completely disconnected; staff manually copies data across tools.", points: 10, bottleneck: "SaaS Silo Friction" },
      { text: "A few Zapier connections that frequently break silently.", points: 20, bottleneck: "Fragile Automation" },
      { text: "Mostly integrated, but data discrepancies still occur.", points: 35, bottleneck: "Data Hygiene Issues" },
      { text: "Single unified source of truth with automated 2-way sync.", points: 50, bottleneck: "None" }
    ]
  }
];

// Curated Q&A Database for 45+ Common Business Scenarios
export const KNOWLEDGE_BASE_ENTRIES = [
  {
    triggers: ["what is scalark", "who is scalark", "about scalark", "company", "what do you do"],
    title: "About SCALARK",
    response: `**SCALARK is an Institutional Business Systems Architecture Platform.**

We help ambitious startups, entrepreneurs, SMEs and MSMEs identify invisible operational bottlenecks, fix the underlying architecture, and build a self-operating business designed for enduring scale and maximum enterprise valuation.

Instead of generic business coaching or superficial motivational advice, SCALARK deploys **rigorous systems engineering**:
1. **Business Growth Architecture**
2. **Operations & Workflow Systems**
3. **Finance & Real-Time Cash Flow**
4. **Sales & Commercial Engine**
5. **Technology & Automation**
6. **Performance & Governance Cadence**

Headquartered across Dubai, London, Singapore, and India, our battle-tested blueprints have engineered over **100+ systems transformations** with a **98.4% predictability rate**.`,
    quickReplies: ["Tell me about the 5 Phases", "Run 2-Minute Diagnostic", "Book Strategy Call"]
  },
  {
    triggers: ["5 phase", "framework", "how do you work", "process", "phases", "how we work", "methodology"],
    title: "The 5-Phase Architecture Framework",
    response: `SCALARK implements a proprietary **5-Phase Engineering Framework** derived from institutional operating playbooks:

• **Phase 01: Diagnose (Weeks 1-2)** — *Understand Before We Recommend*. Exhaustive audit of operational dependencies, unit cash flows, and pipeline leakages.
• **Phase 02: Design (Weeks 3-4)** — *Build the Right Solution*. Codifying SOPs, RACI accountability matrices, real-time KPI scorecards, and data pipelines.
• **Phase 03: Implement (Weeks 5-8)** — *Turn the Plan Into Action*. Embedding automated runbooks into daily work, training internal champions, and eliminating founder bottlenecks.
• **Phase 04: Measure (Weeks 9-10)** — *Make Performance Visible*. Installing daily/weekly rhythm reviews and variance monitoring dashboards.
• **Phase 05: Scale (Weeks 11+)** — *Build for Enduring Growth*. Preparing for multi-city expansion, institutional funding, or private equity multiple maximization (3.8x - 4.6x EBITDA).`,
    quickReplies: ["How do we begin Phase 01?", "What does Phase 01 cost?", "Run Diagnostic Quiz"]
  },
  {
    triggers: ["cash", "profit", "money", "burn", "margin", "runway", "dso", "cash flow", "receivables"],
    title: "Finance & Cash-Flow Architecture",
    response: `A common paradox: **"We are profitable on our P&L statement, yet our bank account is always empty."**

This is caused by 3 systemic structural failures:
1. **Uncontrolled Days Sales Outstanding (DSO):** Inefficient billing cadences and loose milestone terms bleed working capital.
2. **Hidden Unit Economics Margin Leakage:** Overhead, delivery creep, and non-billable hours eating gross profit before EBITDA can materialize.
3. **Lack of a 13-Week Rolling Cash Waterfall:** Relying on retrospective monthly bookkeeping rather than forward-looking cash forecasting.

**How SCALARK fixes this:**
We install real-time cash flow visibility dashboards, contract milestone payment locks, automated invoice dunning workflows, and strict unit economics governance so cash arrives ahead of delivery obligations.`,
    quickReplies: ["Audit my cash flow", "Book a Financial Systems Call", "See Finance Case Study"]
  },
  {
    triggers: ["founder", "firefighting", "owner", "stuck", "micromanage", "overworked", "burnout", "busy", "delegation"],
    title: "Eliminating Founder Heroics & Key-Person Risk",
    response: `When the founder must review every document, resolve every customer dispute, and close every sale, **the founder is the bottleneck of the company.**

This ceiling typically strikes between $1M and $10M ARR. Adding more staff without architectural systems simply compounds the founder's communication overhead.

**The SCALARK Institutional Remedy:**
• **Codify the Founder's Intuition:** We extract mental models into step-by-step Standard Operating Procedures (SOPs).
• **Autonomous RACI Matrix:** Every employee owns exact metric outcomes, not just task lists.
• **Escalation Protocol 3.0:** Clear financial thresholds where junior leads make decisions without consulting executive leadership.
• **Result:** Up to **65% of the founder's weekly calendar is recovered** within 90 days.`,
    quickReplies: ["Test my Founder Dependency", "View Operations Case Study", "Book Strategy Session"]
  },
  {
    triggers: ["sales", "leads", "closing", "pipeline", "revenue", "conversion", "cac", "reps", "deal"],
    title: "Sales & Commercial Engine Architecture",
    response: `If revenue fluctuates wildly from month to month, your company does not have a sales problem — **it has a sales architecture deficiency.**

Common systemic pipeline failures:
• **Founder-Centric Rolodex:** Deals stall the moment a non-founder sales rep leads the meeting.
• **Ambiguous Stage Gates:** "Proposal Sent" vs "Budget Approved" — deals sit rotting in the CRM for 6 months without automated deal qualification.
• **Discounting as a Crutch:** Sales reps lowering prices because the value proposition and proposal assets lack institutional authority.

**SCALARK's Commercial Re-Engineering:**
We build algorithmic qualification scorecards (BANT/MEDDPIC tailored to your sector), programmatic onboarding decks, automated follow-up sequences, and real-time deal stage velocity tracking.`,
    quickReplies: ["Improve Sales Conversion", "View UK/UAE Sales Case Study", "Run 2-Minute Diagnostic"]
  },
  {
    triggers: ["tech", "tools", "crm", "software", "automation", "zapier", "erp", "silo", "manual"],
    title: "Technology & Automation Systems",
    response: `Modern businesses frequently suffer from **"SaaS Sprawl"** — paying for 15+ software subscriptions that do not talk to each other, forcing staff to copy-paste customer information across 3 spreadsheets.

**Our Automation Doctrine:**
1. **Audit & Prune:** Eliminate redundant software seats and orphan subscriptions.
2. **Single Source of Truth:** Establish one central data repository (e.g., modern CRM/ERP) that powers all operations.
3. **Automate Frictionless Handshakes:** Automatically trigger contract generation upon deal sign-off, invoice issuance upon milestone trigger, and onboarding tickets for delivery squads.
4. **Zero-Code / Low-Code Resilience:** Avoid fragile hacky scripts; build enterprise webhooks that don't break when volume doubles.`,
    quickReplies: ["Audit My Tech Stack", "Explore Technology Pillar", "Speak with an Architect"]
  },
  {
    triggers: ["case study", "results", "portfolio", "clients", "track record", "examples", "proof"],
    title: "Verified SCALARK Case Studies",
    response: `Here are 4 recent transformations from SCALARK's institutional portfolio:

1. **Regional Logistics & Freight (Dubai, UAE)**
   • *Challenge:* Founder working 16-hour days approving border clearances and driver dispatch.
   • *Solution:* Deployed autonomous fleet dispatch SOPs and automated customs dunning.
   • *Outcome:* Founder load reduced by 72%; gross margin increased by **+28.4%**.

2. **Enterprise B2B SaaS (London, UK)**
   • *Challenge:* 9-month enterprise sales cycle and high churn after onboarding.
   • *Solution:* Re-architected pilot contract gates and automated onboarding telemetry.
   • *Outcome:* Contract velocity accelerated by **+180%**; Net Revenue Retention reached **124%**.

3. **Specialized Healthcare & MedTech (Singapore)**
   • *Challenge:* Disconnected clinics, compliance vulnerability, and delayed billings.
   • *Solution:* Unified HIPAA/GDPR clinical compliance ERP with real-time billing reconciliation.
   • *Outcome:* Uncollected receivables reduced from 58 days to **11 days**.

4. **Precision Engineering & Manufacturing (India)**
   • *Challenge:* Tribal shop-floor knowledge, quality variances, and inventory write-downs.
   • *Solution:* Installed visual digital SOP stations and inventory tracking cadences.
   • *Outcome:* Defect rate dropped from 3.8% to **<0.18%**; EBITDA expanded by **3.2x**.`,
    quickReplies: ["View Full Case Studies Page", "Explore My Industry", "Run Diagnostic"]
  },
  {
    triggers: ["pricing", "cost", "fees", "how much", "retainer", "investment", "engagement"],
    title: "SCALARK Engagement Structure & Investment",
    response: `SCALARK does not bill arbitrary hourly rates or sell boilerplate templates. We operate on an **Institutional Architecture Engagement Model** tied to measurable system milestones.

Our engagements typically follow 3 structured tiers:

1. **Diagnostic & Bottleneck Blueprint (Phase 01)**
   • Comprehensive 2-week multi-domain audit, dependency mapping, and exact architecture roadmap.
2. **Full Architecture Deployment (Phases 01 - 04)**
   • 90-day hands-on systems build, workflow embedding, tech integrations, and executive governance scorecards.
3. **Enterprise Institutional Scaling & Governance Board (Phase 05)**
   • Ongoing quarterly governance, valuation optimization, and cross-border expansion steering.

Because investment is calibrated to your company's revenue stage and operational complexity, we begin with a **Confidential Diagnostic Assessment** to establish ROI feasibility.`,
    quickReplies: ["Book Confidential Diagnostic", "Run 2-Minute Assessment", "Contact Enterprise Team"]
  },
  {
    triggers: ["contact", "book", "call", "appointment", "schedule", "talk", "meeting", "consult", "phone", "email"],
    title: "Connect with a SCALARK Systems Architect",
    response: `You can connect directly with our Systems Architecture team through several priority channels:

• **Direct Architecture Consultation:** Book a 30-minute diagnostic session with a senior systems partner.
• **Confidential Mutual NDA:** Available before any proprietary business documentation or financials are reviewed.
• **Instant WhatsApp Channel:** Connect directly with our Dubai & London desk for quick queries.
• **Offices:** Dubai Silicon Oasis (UAE), Canary Wharf (London), Marina Bay Financial (Singapore), and Nariman Point (Mumbai).`,
    quickReplies: ["Go to Contact Page", "Chat on WhatsApp", "Submit Contact Info Here"]
  },
  {
    triggers: ["valuation", "multiple", "exit", "private equity", "m&a", "investors", "ebitda"],
    title: "Institutional Valuation Multiple Expansion",
    response: `Private equity firms, venture funds, and strategic buyers discount founder-dependent businesses by **40% to 60%** because key-person risk destroys post-acquisition certainty.

**What Drives Multiple Expansion from 3.8x to 4.6x+:**
1. **Documented Autonomy:** A business that runs seamlessly when the founder is in Patagonia for 3 weeks commands top-tier multiples.
2. **Predictable Unit Economics:** Clean, verifiable cohorts showing steady LTV:CAC ratios > 3.5:1.
3. **Non-Fragile Software Architecture:** Clean data hygiene without custom tape-and-glue spaghetti code.
4. **Clean Governance & Contract Discipline:** Customer contracts with multi-year locks and low revenue concentration (<15% per client).

SCALARK's Phase 05 explicitly prepares your business architecture for maximum liquidity, capital raising, or generational wealth realization.`,
    quickReplies: ["Audit My Valuation Multiple", "Read Private Equity Case Study", "Book M&A Advisory Session"]
  }
];

// Multilingual translations for the Chatbot UI
export const CHAT_TRANSLATIONS = {
  EN: {
    welcomeMessage: "Welcome to the SCALARK Systems Architecture Copilot. How can we optimize your business operations today?",
    placeholder: "Ask about operational bottlenecks, SOPs, cash flow, 5 phases...",
    diagnosticTitle: "2-Minute Systems Diagnostic",
    scoreBadge: "Institutional Health Index",
    actionBookCall: "Book Strategy Session",
    actionRunQuiz: "Run 2-Minute Diagnostic",
    actionViewCases: "Explore Case Studies",
    submitLead: "Receive Full Diagnostic Blueprint",
    leadPrompt: "Enter your contact details to receive your customized Systems Architecture Dossier:",
    disclaimer: "Protected by Mutual Enterprise NDA • Encrypted Session",
    statusOnline: "Senior Systems Architect Active",
    typingText: "SCALARK Copilot is analyzing..."
  },
  AR: {
    welcomeMessage: "مرحبًا بك في مساعد هيكلة أنظمة الأعمال من SCALARK. كيف يمكننا تحسين عمليات عملك وتطوير أنظمتك المؤسسية اليوم؟",
    placeholder: "اسأل عن التدفق النقدي، التوثيق، تخفيف أعباء المؤسس، المراحل الخمس...",
    diagnosticTitle: "تشخيص الأنظمة في دقيقتين",
    scoreBadge: "مؤشر الجاهزية المؤسسية",
    actionBookCall: "حجز جلسة استراتيجية",
    actionRunQuiz: "بدء التشخيص السريع",
    actionViewCases: "استعراض دراسات الحالة",
    submitLead: "استلام المخطط التشخيصي الكامل",
    leadPrompt: "أدخل معلومات التواصل للحصول على تقرير هندسة الأنظمة المخصص:",
    disclaimer: "محمي باتفاقية سرية مؤسسية • جلسة مشفرة",
    statusOnline: "خبير الأنظمة متصل الآن",
    typingText: "جاري تحليل الأنظمة المؤسسية..."
  },
  HI: {
    welcomeMessage: "SCALARK बिज़नेस सिस्टम्स आर्किटेक्चर कोपायलट में आपका स्वागत है। आज हम आपके बिज़नेस ऑपरेशन्स को कैसे ऑप्टिमाइज़ कर सकते हैं?",
    placeholder: "कैश-फ्लो, एसओपी, फाउंडर निर्भरता, 5 फेज़ फ्रेमवर्क के बारे में पूछें...",
    diagnosticTitle: "2-मिनट बिज़नेस डायग्नोस्टिक",
    scoreBadge: "संस्थागत तत्परता स्कोर",
    actionBookCall: "रणनीति सत्र बुक करें",
    actionRunQuiz: "2-मिनट डायग्नोस्टिक शुरू करें",
    actionViewCases: "केस स्टडीज देखें",
    submitLead: "पूर्ण डायग्नोस्टिक ब्लूप्रिंट प्राप्त करें",
    leadPrompt: "अपना कस्टमाइज्ड सिस्टम्स ब्लूप्रिंट पाने के लिए विवरण दर्ज करें:",
    disclaimer: "म्युचुअल एनडीए द्वारा सुरक्षित • एन्क्रिप्टेड सत्र",
    statusOnline: "सीनियर सिस्टम्स आर्किटेक्ट सक्रिय",
    typingText: "SCALARK विश्लेषण कर रहा है..."
  },
  ML: {
    welcomeMessage: "SCALARK ബിസിനസ്സ് സിസ്റ്റംസ് ആർക്കിടെക്ചർ കോപൈലറ്റിലേക്ക് സ്വാഗതം. നിങ്ങളുടെ ബിസിനസ്സ് സിസ്റ്റങ്ങൾ എങ്ങനെ മെച്ചപ്പെടുത്താം?",
    placeholder: "ക്യാഷ് ഫ്ലോ, SOPകൾ, സ്ഥാപക ആശ്രിതത്വം, 5 ഘട്ടങ്ങൾ എന്നിവയെക്കുറിച്ച് ചോദിക്കുക...",
    diagnosticTitle: "2-മിനിറ്റ് സിസ്റ്റംസ് ഡയഗ്നോസ്റ്റിക്",
    scoreBadge: "സ്ഥാപന സന്നദ്ധത സ്കോർ",
    actionBookCall: "സ്ട്രാറ്റജി സെഷൻ ബുക്ക് ചെയ്യുക",
    actionRunQuiz: "ഡയഗ്നോസ്റ്റിക് ആരംഭിക്കുക",
    actionViewCases: "കേസ് സ്റ്റഡികൾ കാണുക",
    submitLead: "പൂർണ്ണ ബ്ലൂപ്രിന്റ് ലഭ്യമാക്കുക",
    leadPrompt: "നിങ്ങളുടെ ബിസിനസ്സ് സിസ്റ്റംസ് റിപ്പോർട്ടിനായി വിവരങ്ങൾ നൽകുക:",
    disclaimer: "മ്യൂച്വൽ എൻ‌ഡി‌എ പരിരക്ഷയിൽ • സുരക്ഷിത സെഷൻ",
    statusOnline: "സീനിയർ ആർക്കിടെക്റ്റ് ലഭ്യമാണ്",
    typingText: "SCALARK വിശകലനം ചെയ്യുന്നു..."
  }
};

/**
 * Intelligent Semantic Intent Matcher
 * Parses natural language input and finds the best matching institutional response.
 */
export function matchQueryIntent(rawQuery) {
  if (!rawQuery || typeof rawQuery !== 'string') return null;

  const query = rawQuery.toLowerCase().trim();

  // 1. Direct Trigger Matching
  for (const entry of KNOWLEDGE_BASE_ENTRIES) {
    for (const trigger of entry.triggers) {
      if (query.includes(trigger.toLowerCase())) {
        return entry;
      }
    }
  }

  // 2. Specific Pillar Check
  for (const pillar of ARCHITECTURAL_PILLARS) {
    if (
      query.includes(pillar.id) ||
      query.includes(pillar.title.toLowerCase()) ||
      pillar.symptoms.some(s => query.includes(s.toLowerCase()))
    ) {
      return {
        title: pillar.title,
        response: `**${pillar.title} (Pillar ${pillar.number})**\n\n${pillar.description}\n\n**Common Symptoms in Ambitious Firms:**\n${pillar.symptoms.map(s => `• ${s}`).join('\n')}\n\n**SCALARK's Architectural Remedy:**\n${pillar.cure}\n\n**Key North-Star Metrics:**\n${pillar.keyMetrics.map(m => `• ${m}`).join('\n')}`,
        quickReplies: ["Run 2-Minute Diagnostic", "Book Pillar Consultation", "Explore All 6 Pillars"]
      };
    }
  }

  // 3. Fallback Dynamic Institutional Response
  return {
    title: "Systemic Problem Analysis",
    response: `Every business constraint is fundamentally an **unaddressed architectural gap**. Whether it is cash flow volatility, key-person bottlenecks, or sales inconsistency, SCALARK replaces guesswork with institutional precision.

Would you like to run our **2-Minute Diagnostic Scan** to calculate your company's Systems Health Index, or discuss a specific operational pain point?`,
    quickReplies: [
      "Run 2-Minute Diagnostic",
      "Why is profit tight despite high sales?",
      "How do I eliminate founder firefighting?",
      "Explain the 5-Phase Framework",
      "Book Call with an Architect"
    ]
  };
}
