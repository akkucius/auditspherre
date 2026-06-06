# Auditspherre — Website Design & Build Prompt
**For use with: Claude Design / Google Stitch**
**Prepared for: Senior Designer + Senior Frontend Developer handoff**

---

## 1. Project Overview

**Company name:** Auditspherre
**Tagline:** *Precision. Compliance. Trust.*
**Industry:** Audit & Compliance Services
**Target clients:** Stock brokers, financial intermediaries, IT companies, regulated fintech entities in India

Auditspherre is a professional audit firm offering two core services:
- **Stock Broker Audit** — SEBI-mandated compliance audits for registered stock brokers and sub-brokers
- **Cyber Audit** — Cybersecurity audits, VAPT, and IT infrastructure assessments for regulated entities

The company positions itself as a specialised, high-trust firm — not a generalist IT services company. The tone is formal, credible, and precise. Think: Big Four audit aesthetics applied to a boutique specialist firm.

---

## 2. Brand & Design Direction

### Aesthetic Direction
**Refined authority.** Dark navy as the dominant background, off-white and slate text, with a single sharp gold or electric teal accent. The visual language should evoke financial precision — think annual audit reports, Bloomberg terminals, regulatory filings. NOT startup SaaS. NOT cyberpunk neon. NOT generic B2B blue.

### Typography (suggestions for designer)
- **Display / Heading:** A geometric serif (e.g. Playfair Display, Cormorant Garamond, or similar) — conveys gravitas and authority
- **Body / UI:** A clean, legible sans-serif (e.g. DM Sans, Sora, or similar)
- Avoid: Inter, Roboto, Arial, or generic system fonts

### Color Palette (CSS variables to define)
```
--color-bg-primary:      #0C1220   /* deep navy, main background */
--color-bg-surface:      #131C2E   /* slightly lighter surface */
--color-bg-card:         #1A2540   /* card/section backgrounds */
--color-accent:          #C9A84C   /* gold accent — CTAs, highlights */
--color-accent-alt:      #3EB8A0   /* teal secondary accent — optional */
--color-text-primary:    #F2F0EB   /* off-white, main body text */
--color-text-secondary:  #8B9CB5   /* muted blue-grey, subtext */
--color-border:          #2A3550   /* subtle border */
--color-danger:          #E05C5C   /* error/alert states */
```

### Visual Details
- Subtle geometric grid lines or topographic-map-like patterns in section backgrounds
- No stock photography of people shaking hands or data center servers
- Data-forward elements: audit checklists, compliance badges, shield/lock iconography (outline style)
- Section dividers: thin 1px gold rule lines
- Micro-animations: numbers counting up on stats, hover shimmer on cards
- Mobile-first: 768px breakpoint for navigation collapse

---

## 3. Site Architecture (4 Pages)

| Page | URL slug | Priority |
|------|----------|----------|
| Homepage | `/` | P0 |
| Products | `/services` | P0 |
| About Us | `/about` | P1 |
| Contact Us | `/contact` | P1 |

---

## 4. Global Elements (All Pages)

### Navigation (Sticky, dark)
- **Logo:** "Auditspherre" wordmark — serif font, gold accent on the double-'r' or trailing sphere dot
- **Nav links:** Home · Services · About · Contact
- **CTA button:** "Request an Audit" — gold background, dark text, slight border-radius
- On scroll: subtle backdrop blur + border-bottom appears

### Footer
- Logo + one-line tagline
- Two column links: Services | Company
- Compliance note: "Registered audit firm | SEBI empanelled auditors"
- Copyright line
- NO social media icons unless added later by client

---

## 5. Page-by-Page Content & Layout Spec

---

### PAGE 1 — Homepage (`/`)

#### Section 1: Hero
**Layout:** Full-viewport hero, text left-aligned, abstract geometric visual right
**Headline (H1):**
> Audit Intelligence for India's Financial Markets

**Subheadline:**
> Auditspherre delivers SEBI-mandated stock broker audits and comprehensive cyber audits — helping regulated entities stay compliant, secure, and inspection-ready.

**CTAs:**
- Primary: "Explore Our Services" → links to `/services`
- Secondary: "Talk to an Auditor" → links to `/contact`

**Visual element (right side):**
Abstract: A wireframe sphere or rotating audit checklist — or a minimal illustration of a shield overlaid with a financial graph line. No photos.

**Trust bar below hero (logos row):**
Text label: "Trusted by entities regulated under" followed by: SEBI · RBI · MCA · CERT-In

---

#### Section 2: What We Do (Two-column product preview)
**Section label:** `OUR SERVICES`
**Heading:** Built for Regulated Entities

Two large cards, side by side:

**Card A — Stock Broker Audit**
- Icon: Scales / document with checkmark (outline)
- Title: Stock Broker Audit
- Body: Comprehensive annual and concurrent audits for SEBI-registered stock brokers, sub-brokers, and depository participants. Covering internal controls, client fund segregation, margin reporting, and exchange compliance.
- Link: "See what's covered →"

**Card B — Cyber Audit**
- Icon: Shield with circuit (outline)
- Title: Cyber Audit
- Body: End-to-end cybersecurity audits — VAPT, network security assessment, application security review, and SEBI Cyber Security Circular compliance — for brokers, AMCs, and IT infrastructure teams.
- Link: "See what's covered →"

---

#### Section 3: Use Cases
**Section label:** `WHO WE WORK WITH`
**Heading:** Compliance challenges we solve

Four use-case tiles in a 2×2 grid (or horizontal scroll on mobile):

1. **Stock Broker — Annual Audit**
   "Your exchange demands an annual audit report. We deliver it on time, with zero compliance gaps and full documentation for SEBI submission."

2. **Broker IT Team — Cyber Circular Compliance**
   "SEBI's Cyber Security and Cyber Resilience Framework mandates annual audits. We assess, report, and help you remediate before the deadline."

3. **New NSE/BSE Member — Pre-inspection Readiness**
   "First exchange inspection coming up? We conduct mock audits against exchange checklists so you're never caught off-guard."

4. **Fintech / Sub-broker — Third-Party Risk**
   "Platforms onboarding broker APIs must demonstrate security posture to their partners. We provide the audit reports they need."

---

#### Section 4: Stats / Social Proof
**Layout:** Full-width dark band with 3–4 count-up numbers

| Stat | Label |
|------|-------|
| 200+ | Audits completed |
| 50+ | Broker clients served |
| 100% | On-time delivery |
| 15+ | Years of regulatory expertise |

*(Numbers are illustrative — client to confirm actual figures)*

---

#### Section 5: Process Preview
**Heading:** How an Auditspherre audit works

Three steps, horizontal layout:
1. **Scope & Onboarding** — We understand your entity type, exchange memberships, and regulatory obligations
2. **Fieldwork & Assessment** — On-site or remote audit, evidence collection, control testing
3. **Report & Remediation** — Detailed findings report, executive summary, and remediation guidance

CTA below: "Start your audit process →" → `/contact`

---

#### Section 6: CTA Band
Dark gold band or bordered box:
> "Regulatory deadlines don't wait."
> Book a scoping call today — we'll tell you exactly what your audit requires.
> [Request an Audit] button

---

### PAGE 2 — Services / Products (`/services`)

#### Section 1: Page Hero (smaller than homepage)
**Heading:** Our Audit Services
**Subheading:** Specialised compliance and cybersecurity audits for India's regulated financial sector

---

#### Section 2: Stock Broker Audit (full detail)
**Anchor:** `#stock-broker-audit`
**Badge:** `SEBI MANDATED`

**Heading:** Stock Broker Audit

**Introduction paragraph:**
Auditspherre conducts annual internal audits for SEBI-registered stockbrokers and trading members across NSE, BSE, MCX, and NCDEX. Our audit methodology aligns with SEBI Circular No. MIRSD/DPS III/ Cir-26/08 and subsequent exchange directives.

**What's covered — 4-column icon grid:**
- Client Fund Segregation & Bank Reconciliation
- Margin Reporting & Peak Margin Compliance
- Back-office System Controls & Reconciliation
- KYC/AML/CFT Process Review
- Investor Grievance Redressal Mechanism
- Risk Management Framework Assessment
- Sub-broker / Authorised Person Compliance
- SEBI/Exchange Circular Implementation Review

**Deliverables (numbered list style):**
1. Detailed Audit Report (DAR) — exchange format
2. Management Letter with observations and recommendations
3. Compliance Certificate (where applicable)
4. Evidence binders / working paper summary

**Who is this for:**
- NSE / BSE / MCX / NCDEX registered trading members
- Depository Participants (CDSL/NSDL)
- Sub-brokers and authorised persons
- Portfolio Management Services (PMS) providers

**CTA:** "Get a scoping call for your brokerage →" → `/contact`

---

#### Section 3: Cyber Audit (full detail)
**Anchor:** `#cyber-audit`
**Badge:** `CERT-IN · SEBI CYBER CIRCULAR`

**Heading:** Cyber Audit

**Introduction paragraph:**
The SEBI Cyber Security and Cyber Resilience Framework (CSCRF) mandates annual cybersecurity audits for market infrastructure institutions and registered intermediaries. Auditspherre conducts end-to-end cyber audits covering your networks, applications, and IT governance posture.

**What's covered — 4-column icon grid:**
- Vulnerability Assessment & Penetration Testing (VAPT)
- Network Security Assessment (Firewall, IDS/IPS, DMZ)
- Web & Mobile Application Security Testing
- Source Code Security Review
- IT Asset & Configuration Hardening Audit
- Data Localisation & Data Privacy Controls
- Incident Response Readiness Assessment
- SEBI CSCRF Gap Analysis & Compliance Mapping

**Deliverables:**
1. VAPT Report (with CVSS-scored findings)
2. SEBI CSCRF Compliance Report
3. Risk Register with prioritised remediation plan
4. Executive Summary for Board/Management

**Who is this for:**
- Stock brokers and depository participants with IT infrastructure
- AMCs and Custodians
- Clearing corporations and market intermediaries
- Fintech companies regulated as SEBI-registered entities

**CTA:** "Assess your cyber compliance posture →" → `/contact`

---

#### Section 4: Comparison / Why choose us
Two-column layout:

**Left — What most firms do:**
- Generic IT audits not tailored to SEBI mandates
- Offshore VAPT teams with no financial sector experience
- Reports that don't meet exchange submission formats
- No guidance on remediation timelines

**Right — The Auditspherre difference:**
- Audit methodology built exclusively for SEBI-regulated entities
- Auditors with securities market and CERT-In empanelled experience
- Reports in exchange-accepted formats, ready for submission
- Post-audit remediation support included

---

### PAGE 3 — About Us (`/about`)

#### Section 1: About Hero
**Heading:** Who is Auditspherre?

**Body (2–3 paragraphs):**
Auditspherre is a specialist audit and compliance firm focused exclusively on India's regulated financial ecosystem. We work with stockbrokers, depository participants, and financial technology companies to ensure they meet their mandatory audit obligations — without disruption to daily operations.

Our auditors bring deep expertise in SEBI regulations, exchange compliance frameworks, and cybersecurity standards like ISO 27001, CERT-In guidelines, and the SEBI Cyber Security & Cyber Resilience Framework.

We believe auditing should be more than a checkbox exercise. Every engagement we undertake is designed to identify real risks, provide practical recommendations, and leave your organisation stronger.

---

#### Section 2: Our Expertise
**Heading:** Where we specialise

Three pillar cards:
- **Regulatory Knowledge** — Deep familiarity with SEBI circulars, exchange bye-laws, and IRDAI/RBI frameworks
- **Cybersecurity Depth** — Certified ethical hackers and information security auditors with CISA, CEH, OSCP credentials
- **Financial Domain** — Auditors who understand the securities market — not just generic IT compliance

---

#### Section 3: Why trust Auditspherre
Bullet-style trust signals:
- SEBI empanelled audit firm *(to confirm with client)*
- Auditors holding CISA, CEH, ISO 27001 LA/LI certifications
- Experience across NSE, BSE, MCX, NCDEX-registered entities
- Confidential engagement process — all data under NDA
- 100% on-time report delivery track record

---

#### Section 4: CTA
"Ready to work with us? Let's start with a conversation."
[Contact us] button → `/contact`

---

### PAGE 4 — Contact Us (`/contact`)

#### Layout: Two-column
**Left column — Contact form:**
Form fields:
- Full Name (text)
- Organisation Name (text)
- Email Address (email)
- Phone Number (tel)
- Service required (dropdown): Stock Broker Audit / Cyber Audit / Both / Not sure yet
- Brief description of requirement (textarea — 4 rows)
- [Submit Request] button — gold CTA

Form note below: "We respond within 1 business day. All information shared is strictly confidential."

**Right column — Direct contact info:**
- Email: [contact@auditspherre.com] *(placeholder)*
- Phone: [+91 XXXXX XXXXX] *(placeholder)*
- Location: Mumbai, India
- Working hours: Monday–Saturday, 10am–6pm IST

Optional: A small embedded Google Map if a physical office address is confirmed.

---

## 6. Technical Notes for Developer

### Stack assumptions (align with your current setup)
- React 18 + TypeScript + Vite
- Tailwind CSS (or custom CSS variables as above)
- shadcn/ui for form components and dialog components
- React Router for page routing
- Framer Motion for scroll-triggered animations and count-up stats

### Component structure suggestion
```
/src
  /components
    /layout
      Navbar.tsx
      Footer.tsx
    /sections
      Hero.tsx
      ServiceCards.tsx
      UseCases.tsx
      Stats.tsx
      ProcessSteps.tsx
      CTABand.tsx
    /pages
      HomePage.tsx
      ServicesPage.tsx
      AboutPage.tsx
      ContactPage.tsx
    /ui
      Badge.tsx
      IconCard.tsx
      StatCounter.tsx
      ContactForm.tsx
```

### Key interactions to implement
- Navbar: transparent on load, dark + blur on scroll (IntersectionObserver or scroll event)
- Stats section: count-up animation triggered on viewport entry (Intersection Observer)
- Contact form: client-side validation + success state (no backend required at MVP — use Formspree or similar)
- Services page: smooth scroll to `#stock-broker-audit` or `#cyber-audit` from nav/homepage cards
- Mobile: hamburger menu, single-column card layout at < 768px

### Accessibility
- All icons must have `aria-label` or accompanying text
- Form fields must have associated `<label>` elements
- Color contrast ratio ≥ 4.5:1 for all body text on dark backgrounds
- Focus-visible states on all interactive elements

---

## 7. Content Variables (to fill before launch)

| Variable | Placeholder | To confirm with client |
|----------|-------------|----------------------|
| Firm registration number | — | Yes |
| SEBI empanelment status | "SEBI empanelled auditors" | Verify |
| Auditor certifications | CISA, CEH, ISO 27001 LA | Verify actual certs |
| Stats (audits, clients) | 200+, 50+, 15+ years | Client to confirm |
| Contact email | contact@auditspherre.com | Yes |
| Contact phone | +91 XXXXX XXXXX | Yes |
| Office address | Mumbai, India | Yes |
| LinkedIn / social | — | Optional |

---

## 8. Competitive Positioning (Context for Designer)

**Key competitor references studied:**
- **gispl.co** — Cybersecurity-heavy, broad service menu, Forbes recognition badge, WordPress-based. Strength: credibility signals. Weakness: cluttered nav, generic aesthetic.
- **riskbricks.com** — Stock broker + cyber audit specialist, SEBI audit experience prominent, targets financial sector. Strength: SEBI-specific positioning. Weakness: dated UI, poor hierarchy.

**Auditspherre differentiation to express visually:**
1. More premium and refined than both competitors
2. Fewer services, deeper expertise — the site should feel curated, not exhaustive
3. Financial sector credibility front and centre — not general IT services
4. Clear dual-product focus (stock audit + cyber audit) without confusion

---

*End of prompt document. Use this as the single source of truth for design and development. All copy is draft — client to review and approve before finalisation.*
