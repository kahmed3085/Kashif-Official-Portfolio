# Claude Design Resume Instructions - Kashif Ahmed

## PROMPT FOR CLAUDE DESIGN

You are creating an interactive, animated resume for Kashif Ahmed with a modern dark theme (Background: #0A0A0A, Accent: #89AACC / #4E85BF). Follow these specifications:

---

## SECTION 1: HERO / HEADER
**Objective**: Professional introduction with certification badges

### Composition:
- **Layout**: Two-column (60% text, 40% photo)
- **Left Column**:
  - Label: "AI-FIRST OPERATIONS · PORTFOLIO 2026" (11px, IBM Plex Mono, #8a8a8a, letter-spacing 3)
  - Name: "Kashif Ahmed." (Bricolage Grotesque, 132px, bold, #F5F5F5 + #4E85BF period)
  - Tagline: "An Operator who scales businesses with AI." (18px, #C4C4C4)
  - Description: "Client success & CX professional turning operational chaos into systems that run themselves — across fintech, SaaS and global teams." (14px, #7f7f7f)

- **Right Column** (Image + Badges):
  - **Profile Photo**: kashif-bw.png (monochrome, drop shadow, locked/permanent - NO drag-drop)
  - **Certification Badges** (2×2 grid, positioned ABOVE photo):
    - Top-left: Azure Fundamentals (Blue gradient #0078D4 → #50E6FF)
    - Top-right: Microsoft Copilot M365 (Green gradient #1B7A3B → #27AE60)
    - Bottom-left: Google Project Management (Orange gradient)
    - Bottom-right: ISO 9001 (Gray/professional gradient)
    - **Size**: clamp(56px, 8vw, 90px) — readable but not dominant
    - **Animation**: Staggered fade-in (350ms-650ms delays) synchronized with photo fade-in
    - **Easing**: back.out with blur effect (0 → 4px blur)
    - **Style**: SVG badges with custom gradients and drop shadows

### Animation Cues:
- Badges fade in with scale effect (0.8 → 1.0) + blur out
- Photo fades in smoothly after loader completes
- All animations sync at hero entrance

---

## SECTION 2: WORK EXPERIENCE / CAREER
**Objective**: Interactive career timeline with expandable role details

### Structure:
Each role is a card in a vertical stack (5 total roles). Cards must be **clickable** with hover effects.

**Roles & Years** (MUST MATCH SCREENSHOT):

| # | Company | Title | Dates | Location |
|---|---------|-------|-------|----------|
| 01 | **ITWorks** | Co-Founder — AI-first operations consulting | 2025 — Present | Remote · Asia |
| 02 | **Zones, LLC** | Client Success Manager — Microsoft Strategic Accounts | 2024 — 2025 | Islamabad |
| 03 | **GRAPA** | Client Success Lead | 2022 — 2023 | Chicago, USA |
| 04 | **Techlify** | Operations Manager — SaaS | 2022 | Guyana · Remote |
| 05 | **Transworld Inc** | Manager — Support Centre Operations | 2020 — 2022 | New York, USA |

### Card Styling:
- **Background**: Semi-transparent dark (#141414 + border #1F1F1F)
- **Text**: Company name (Instrument Serif, italic, 28px, #F5F5F5) + Role (14px, #9a9a9a)
- **Date/Location**: Right-aligned, IBM Plex Mono, 12.5px, #C2C2C2
- **Status Badge**: If current, show "CURRENT" badge (green #34C78C)

### Interactive Behavior:
- **Hover Effect**: Card lifts with subtle glow/shadow (scale 1.02, shadow increase)
- **Click Behavior**: "VIEW DETAILS" button appears on hover (right side of card)
- **Hover Animation**: Smooth lift + glow effect (300ms transition)

---

## SECTION 3: EXPANDABLE ROLE DETAILS (MODAL / DRAWER)
**Objective**: Deep-dive into each role when user clicks "VIEW DETAILS"

### Display Style:
- **Modal/Drawer**: Full-width overlay or side panel (your choice)
- **Close**: X button, Escape key, click outside
- **Animation**: Slide-in from right + fade-in background

### Content for Each Role:

#### ROLE 1: ITWorks (Co-Founder) — 2025 Present
**SPECIAL INSTRUCTION - BE CREATIVE**: Show TWO distinct but interconnected roles:
1. **Co-Founder at ITWorks** (primary)
2. **Growth Consultant at London Heathrow Cars** (concurrent engagement)

**Suggested Visual Approach for Dual Roles**:
- Use a **split view** or **overlapping timeline** to show both roles running concurrently
- OR use visual **tabs/toggles** to switch between ITWorks operations and LHC engagement
- OR show them as **interconnected nodes** with visual flow between them
- Key insight: ITWorks is the consulting firm, LHC is the primary live client — make this relationship visible

**ITWorks (Co-Founder) — 2025 Present**
- **Organization**: AI-first operations consulting firm
- **Focus Areas**: Intelligent automation, agentic systems, CRM analytics, process design
- **Current Engagement**: London Heathrow Cars (LHC) — Live Client Engagement
- **Status**: ACTIVE (green indicator)
- **Vision**: Transform operational chaos into autonomous systems

**London Heathrow Cars (LHC) — Growth Consulting, Live Client**
- **Client Type**: Growth consulting + live client engagement
- **Scope**: Strategic growth initiatives, revenue optimization, operational scaling
- **Key Responsibilities**: 
  - Drive growth strategy initiatives
  - Optimize client operations
  - Support revenue assurance (GRAPA connection)
  - Implement process improvements
- **Engagement Status**: Ongoing (show as concurrent with ITWorks Co-Founder role)

**Combined Responsibilities & Initiatives**:
- Design and implement AI automation workflows (Claude + Make.com)
- Develop agentic systems (booking agents, quoting engines, data parsing — autonomous)
- Drive client success strategies for at-risk accounts
- Optimize CRM analytics and provide data-driven insights
- Lead process design and operational transformation projects
- Support LHC's growth initiatives with strategic consulting
- Build 24/7 automation systems that run independently

**Key Differentiators**:
- Automation focus (not manual processes)
- Agentic systems (self-running, not human-triggered)
- Client success through operational efficiency
- Revenue assurance and process optimization

---

#### ROLE 2: Zones, LLC (Client Success Manager) — 2024 2025
**Note**: This role has TWO distinct phases/evolutions. Show career growth clearly.

**Phase 1: Demand Management Specialist (Mar 2024 - Dec 2024) — 9 months**
- **Role Title**: Demand Management Specialist / Pre-Sales Engineer
- **Platform**: Microsoft Strategic Accounts (Azure Cloud Pre-Sales Function)
- **Reporting**: Microsoft Pre-Sales Operations
- **Key Responsibilities**:
  - Qualify inbound Microsoft referrals to understand requirements
  - Maintain accurate and up-to-date CRM records of customer interactions
  - Track and manage lead progress through pipeline
  - Monitor and analyze demand management data for optimization
  - Participate in team meetings to discuss progress, challenges, opportunities

**Phase 2: Client Success Manager 2 (Dec 2024 - Present) — 6+ months**
- **Role Title**: Client Success Manager 2
- **Client Scope**: Microsoft Strategic Account (USA CC1010)
- **Team**: Software Procurement Support Team (serving Halo Studios + wider Microsoft operations)
- **Reporting**: Client Success Operations
- **Key Achievement - Microsoft Kaizen Software Catalog Expansion (Q2 2025)**:
  - Expanded software catalog to make pre-approved tools more accessible
  - Added new software categories to ProcureWeb and ServiceNow
  - Resolved catalog visibility and licensing issues
  - Delivered on-time project completion
  - Impact: Streamlined software procurement for Microsoft teams

**Recognition**: 
- Nominated for Zones Five-Star Service Award
- Recognition for strong support during Fiscal Year End 2025
- Acknowledgement of support to Halo Studios for critical software needs

**Company Context**: 
- Zones, LLC is an authorized buyer for Microsoft
- Zones assists Microsoft in sourcing hardware and software needs
- Role involves coordinating with suppliers and publishers on Microsoft's behalf
- Focus: Streamline procurement, optimize costs, ensure compliance

---

#### ROLE 3: GRAPA (Client Success Lead) — Oct 2022 - Oct 2023
**Location**: Chicago, Illinois, United States
**Duration**: 1 year 1 month

**Responsibilities**:
- Drive client satisfaction through proactive communication and support
- Lead initiatives to optimize client experience and retention
- Develop and implement retention strategies for at-risk accounts
- Foster collaborative relationships across departments (Finance, Operations, Sales)
- Achieve departmental goals and client satisfaction targets
- Identify trends in client feedback and act on improvement opportunities

**Impact**: Built client success foundations and retention strategies

---

#### ROLE 4: Techlify (Operations Manager — SaaS) — May 2022 - Oct 2022
**Location**: Georgetown, Demerara-Mahaica, Guyana · Remote
**Duration**: 6 months

**Responsibilities**:
- **Vendor Management**: Formalize vendor relationships, evaluate performance, define SLAs
- **Risk Mitigation**: Mitigate operational risks and track renewal schedules
- **Operations**: Ensure smooth day-to-day SaaS operations and uptime

**Projects Delivered**:
1. **Customer Onboarding Workflow Automation** — Streamlined new customer setup process
2. **Change Management** — Implemented global scheduled work hours policy

**Impact**: Improved operational efficiency through automation and vendor optimization

---

#### ROLE 5: Transworld Inc — Jan 2020 - May 2022
**Location**: New York, United States
**Total Duration**: 2 years 5 months

**Phase 1: Assistant Manager Commercial Operations (Aug 2020 - Jan 2022) — 1 year 6 months**

**Responsibilities**:
- Coordinate with all stakeholders on Commercial Lines operations
- Manage pay plans and their revisions
- Process endorsements, audits, and recommendations
- Handle quote generation and management
- Manage renewals, cancellations, and underwriting issues
- Bind new policies and issue certificates of insurance
- Provide operational support to agents, carriers, mortgagees, and finance companies
- Maintain strong relationships across the commercial insurance ecosystem

**Phase 2: Manager — Support Centre Operations (Jan 2022 - May 2022) — 5 months**

**Operational Management**:
- Manage day-to-day support center operations
- Source equipment and manage physical resources
- Plan staffing levels and resource allocation
- Apply call center strategies and best practices

**Performance Management**:
- Set performance targets and track against KPIs
- Conduct performance reviews and evaluations
- Prepare detailed reports on performance levels and KPIs
- Monitor call quality through random call audits
- Track operative performance and identify gaps

**Staff Development**:
- Undertake needs assessments for staff training
- Plan and conduct training sessions
- Identify training needs through performance reviews
- Coach and motivate staff for retention
- Manage staff evaluations and development plans

**Recruitment & Hiring**:
- Coordinate staff recruitment processes
- Write and post job advertisements
- Interview and hire new team members
- Onboard new incumbents

**Escalation & Quality**:
- Handle the most complex customer complaints and inquiries
- Monitor call quality and minimize errors
- Improve customer service standards

**Shift & Staffing Planning**:
- Organize shift patterns and scheduling
- Determine staffing levels to meet demand
- Forecast demand and adjust schedules accordingly

**Incentives & Compensation**:
- Coordinate bonus, reward, and incentive schemes
- Align compensation with performance targets

**Financial Analysis**:
- Forecast and analyze data against budget figures
- Perform weekly and monthly budget tracking
- Provide cost/benefit analyses for decisions

**Impact**: Transformed support center operations with focus on quality, efficiency, and team development

---

## SECTION 4: WORK SHOWCASE / PORTFOLIO GRID
**Objective**: Display work engagements with logos and descriptions

### Cards (4 total) — Responsive Grid Layout:

**Card 1: ITWorks**
- **Grid Span**: 7 columns (larger card)
- **Logo**: ITWORKS_IMAGE (permanent, locked, no drag-drop)
- **Title**: "ITWorks"
- **Subtitle**: "AI-first operations consulting · Co-Founder"
- **Status Badge**: LIVE (green #34C78C indicator)
- **Description**: AI-first operations consulting focusing on automation and agentic systems

**Card 2: London Heathrow Cars (LHC)**
- **Grid Span**: 5 columns (medium card)
- **Logo**: LHC_LOGO (permanent, locked, no drag-drop)
- **Title**: "London Heathrow Cars"
- **Subtitle**: "Growth consulting · live client"
- **Status Badge**: LIVE (green #34C78C indicator)
- **Description**: Active growth consulting engagement with strategic focus

**Card 3: Microsoft × Zones**
- **Grid Span**: 5 columns (medium card)
- **Logo**: MICROSOFT_ZONES_LOGO (permanent, locked, no drag-drop)
- **Title**: "Microsoft Strategic Accounts"
- **Subtitle**: "Client success at scale · via Zones"
- **Status Badge**: None (archived project)
- **Description**: Large-scale client success and software procurement management

**Card 4: GRAPA**
- **Grid Span**: 7 columns (larger card)
- **Logo**: GRAPA_LOGO (permanent, locked, no drag-drop)
- **Title**: "GRAPA"
- **Subtitle**: "Client success lead · Chicago"
- **Status Badge**: None (archived project)
- **Description**: Client success leadership and retention strategy initiatives

### Card Styling & Interactions:
- **Grid System**: 12-column responsive layout
- **Background**: Semi-transparent dark (#141414)
- **Border**: Subtle 1px border #1F1F1F
- **Hover Effect**: 
  - Card lifts (subtle 3D effect)
  - Shadow increases and glows with accent color
  - Smooth 300ms transition
- **Load Animation**: Staggered fade-in with 3D perspective (rotateX: 10deg → 0deg)

### Image Specifications:
- **All logos/images**: PERMANENT and LOCKED (no user editing/modification)
- **No drag-drop functionality**: Images are static assets
- **Aspect Ratios**: Maintain proper branding proportions
- **Quality**: High resolution, professional appearance, optimized for web
- **Filters**: Optional subtle color overlay to match theme blue

---

## SECTION 5: CERTIFICATIONS & EDUCATION
**Objective**: Display credentials, education, and language proficiencies

### Certifications (from Google Project Management Certificate):
1. Foundations of Project Management
2. Project Initiation: Starting a Successful Project
3. Agile Project Management
4. Project Execution: Running the Project
5. Protecting Profitability by Reducing Financial Risk

**Display Style**:
- List format with checkmark icons (✓ in blue accent color)
- Clean, simple typography
- Each certification on its own line

### Education:
- **Degree**: MBA, Project Management
- **Institution**: The University of Lahore (MBA Executive Program)
- **Graduation Year**: 2020

### Languages:
- Urdu
- English
- Punjabi
- Sindhi

---

## SECTION 6: CONTACT & CALL-TO-ACTION
**Objective**: Easy outreach and engagement

### Copy:
- **Heading**: "Ready to scale?"
- **Description**: "Open to Client Success, CX Strategy and Product Ops roles — or a conversation about automating your operations. No pitch."
- **CTA Button**: kahmed_3085@hotmail.com (mailto link)
- **Email Text**: "kahmed_3085@hotmail.com ↗"
- **Footer Contact**:
  - LinkedIn: linkedin.com/in/kashif-ahmed-12130538
  - Email: kahmed_3085@hotmail.com
  - Phone: +92 302 5344435
  - Status: "Open to opportunities" (with green pulsing indicator)

### Animation:
- Fade-in on scroll into view
- Button hover: Scale up 1.05, smooth color transition
- Contact info: Subtle hover effects on each link

---

## GLOBAL DESIGN SYSTEM

### Color Palette:
- **Background**: #0A0A0A (dark, sophisticated)
- **Text Primary**: #F5F5F5 (off-white, readable)
- **Text Secondary**: #888 to #9a9a9a (muted)
- **Accent Blue**: #89AACC (light) / #4E85BF (dark) — use for highlights
- **Success Green**: #34C78C (live indicators)
- **Borders**: #1F1F1F (subtle) / #262626 (stronger)
- **Card Backgrounds**: #141414 / #121212 (very dark, minimal contrast)

### Typography Stack:
- **Headings**: Bricolage Grotesque (700-800 weight)
  - Font sizes: 54-132px (responsive with clamp)
  - Letter-spacing: -0.03em to -0.04em
  - Line-height: 0.84-1.0

- **Titles**: Instrument Serif (italic, 400 weight)
  - Font sizes: 20-32px
  - Creates elegant, serif accent for role titles

- **Body Text**: Inter (400-600 weight)
  - Font sizes: 14-16px for body, 11-13px for labels
  - Line-height: 1.4-1.6 for readability

- **Monospace**: IBM Plex Mono (400-500 weight)
  - Font sizes: 10-12.5px for labels, dates, meta
  - Letter-spacing: 0.06em-0.34em for labels

### Animations & Transitions:
- **Fade-in**: 0.8-1.2s ease-out (entrance animations)
- **Hover**: 300ms ease-out (smooth, responsive feedback)
- **Stagger**: 80-120ms between elements (cascade effect)
- **Easing Functions**: 
  - power3.out (most common for scrolls)
  - back.out (for bouncy/playful effects)
  - ease-in-out (for smooth transitions)

- **3D Transforms**: 
  - rotateX: 10deg → 0deg (card entrance)
  - scale: 0.92-1.0 (hover lift)
  - translateY: subtle movement

### Spacing System:
- **Padding**: clamp(16px, 2vw, 30px) — responsive padding
- **Gaps**: clamp(14px, 2vw, 26px) — spacing between grid items
- **Margins**: clamp(20px, 3vh, 40px) — section margins

---

## RESPONSIVE DESIGN BREAKPOINTS

### Mobile (< 820px):
- Single column layout
- Cards stack vertically
- Text sizes scale down (clamp functions handle this)
- Hero: Photo on top, text below (centered)
- Badges: Smaller sizing (56px)

### Tablet (820px - 1280px):
- Two-column layout where applicable
- Balanced spacing
- Medium text sizes
- Hero: Side-by-side with adjusted proportions

### Desktop (> 1280px):
- Full multi-column grids
- Maximum spacing and breathing room
- Full text sizes
- Hero: Optimized 60/40 split

---

## CREATIVE DIRECTION & SPECIAL EFFECTS

### Paisley Tie Enhancement:
**Concept**: The monochrome profile photo is elegant. Enhance the paisley tie pattern with the website's theme blue to create visual cohesion.

**Execution Options**:
1. **Color Overlay**: Apply subtle blue tint (#89AACC at 15-25% opacity) to the paisley region
2. **Filter Effect**: Use CSS color-dodge or screen blend mode to add blue emphasis
3. **Pattern Animation**: Subtle animation on paisley region (very slight opacity pulse or micro-movement)
4. **Gradient Overlay**: Subtle blue-to-transparent radial gradient on tie

**Integration**:
- This tie detail should feel like a hidden design element that rewards close inspection
- Use the same blue in accent elements (borders, hover effects) to create visual harmony
- Consider paisley-inspired organic curves in background patterns (optional, subtle)

### Dual Roles Visualization (ITWorks + LHC):
**Challenge**: Show two concurrent roles that are interconnected but distinct

**Creative Solutions**:

**Option 1: Timeline Visualization**
- Horizontal timeline showing ITWorks start (2025)
- LHC engagement appearing below/alongside (same period)
- Visual line or arrow showing the connection (LHC as primary client)
- Time labels showing overlap

**Option 2: Split Card Design**
- Top half: ITWorks (Co-Founder details)
- Visual divider (gradient or line)
- Bottom half: LHC (Growth Consultant details)
- Connection indicator showing they work together

**Option 3: Interactive Toggle**
- Button/tabs to switch between "ITWorks Operations" and "LHC Engagement"
- Animated transition between views
- Shows both run concurrently when toggled

**Option 4: Node-Based Connection**
- ITWorks box on left (Co-Founder)
- LHC box on right (Growth Consultant)
- Animated bidirectional arrow or flow between them
- Shows mutual influence and connection

**Key Messages to Communicate**:
1. Both roles run simultaneously (same timeline)
2. LHC is the primary engagement/client of ITWorks
3. Skills are applied (consulting expertise → client results)
4. Career progression (founder role managing live client engagement)

**Recommended Approach**: Use **Option 2 (Split Card)** or **Option 1 (Timeline)** for clarity. Make the connection visual and obvious — not buried in text.

---

## TECHNICAL IMPLEMENTATION NOTES

### Image Optimization:
- All logos should be in SVG where possible (scalable, crisp)
- Profile photo (kashif-bw.png): High quality, 300-500px width (with srcset for responsiveness)
- Compress images: Use WebP format with PNG fallback
- Lazy-load portfolio grid images (load on scroll)

### Accessibility Requirements:
- All interactive elements must have visible focus states (outline or glow)
- Icons must have `alt` text or `aria-label`
- Color contrast ratios: Minimum WCAG AA (4.5:1 for text)
- Animations: Respect `prefers-reduced-motion` media query

### Performance Optimization:
- Minimize animation frame drops: Use CSS transforms (translateZ, scale) not position changes
- Debounce scroll animations (prevent excessive trigger calls)
- Use `will-change` CSS property sparingly (only on animated elements)
- Code-split role detail modals (lazy-load on demand)

### Browser Support:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox (full support expected)
- CSS animations and transforms (no polyfills needed)
- Optional: Fallback for older browsers (no animations, static layout)

---

## DELIVERABLES CHECKLIST

Before submitting, ensure:

✅ All dates match the screenshot provided (CRITICAL)
✅ Interactive hover effects on career cards (lift + glow)
✅ "VIEW DETAILS" button functional on each role
✅ Role detail modals with correct content (all 5 roles)
✅ ITWorks + LHC dual role creatively visualized
✅ Portfolio grid with 4 cards (images locked/permanent)
✅ Badges in hero section (2×2, above photo)
✅ Paisley tie enhanced with subtle theme blue
✅ Responsive design (mobile, tablet, desktop)
✅ Smooth animations throughout
✅ Accessibility features (focus states, alt text)
✅ Dark theme maintained (#0A0A0A + accents)
✅ Professional typography and spacing
✅ Contact section with CTA

---

## FINAL NOTES FOR CLAUDE DESIGN

1. **Accuracy First**: Year dates are critical — they must match the screenshot. Double-check all start/end dates.

2. **Creativity Encouraged**: The ITWorks + LHC dual role is your opportunity to showcase design thinking. Make the connection visual and clear without cluttering.

3. **Paisley Detail**: Subtle blue enhancement to the tie should feel intentional but not forced. Think "creative director whisper" not "loud banner."

4. **Animation Polish**: Every hover, click, and scroll should feel smooth and responsive. Micro-interactions matter.

5. **Dark Theme Elegance**: Keep it sophisticated. Avoid neon, harsh gradients, or over-the-top effects. Subtlety is strength here.

6. **Images Are Locked**: All logos and photos must be permanent assets. No user-editable drag-drop for portfolio showcase — it's a read-only gallery.

7. **Brand Consistency**: The #89AACC blue accent should appear in badges, hover effects, accents, and the tie — creating visual harmony.

Good luck! This resume is going to look amazing. 🎨✨

