import { Fragment, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import useReducedMotion from '../hooks/useReducedMotion'

import adminAuth from '../assets/admin_auth.png'
import adminDash from '../assets/admin_dash.png'
import adminEdit from '../assets/admin_edit.png'
import adminGraph from '../assets/admin_graph.png'
import adminGraph2 from '../assets/admin_graph2.png'
import adminGraph3 from '../assets/admin_graph3.png'
import adminRbac from '../assets/admin_rbac.png'
import adminSettings from '../assets/admin_settings.png'
import adminSub from '../assets/admin_sub.png'
import adminSuspend from '../assets/admin_suspend.png'

const heroBadges = [
  'Admin Management Module',
  'Collaboration with ServerSalad',
  'React.js + Tailwind CSS',
  'Django REST Framework',
  'JWT Session Lifecycle',
  'Role-Based Access Control (RBAC)',
  'Storage Quota Tracking',
  'Multi-Dimensional Analytics',
]

const atGlanceItems = [
  {
    title: 'Admin Authentication & JWT',
    desc: 'Secure admin login flow verified with Django password hashing and persistent JWT access and refresh token sessions.',
  },
  {
    title: 'Granular Role-Based Access Control',
    desc: 'Custom HasAdminPermission class enforcing strict server-side authorization separating Super Admin and Restricted Admins.',
  },
  {
    title: 'Centralized Administrative Dashboard',
    desc: 'Live operational overview consolidating user counts, server metrics, subscription statuses, and aggregate storage capacity.',
  },
  {
    title: 'Interactive Analytics in Charts',
    desc: 'Visual data breakdown using pie, bar, and line charts for storage allocation, package distributions, and revenue trends.',
  },
  {
    title: 'User Lifecycle & Moderation',
    desc: 'Comprehensive user management table with real-time search, filtering, account auditing, and instantaneous suspension/reactivation.',
  },
  {
    title: 'Storage Quota & Billing Oversight',
    desc: 'Calculates file sizes against package limits with automatic usage percentages, warning indicators, and revenue tracking.',
  },
]

const rbacPermissions = [
  { code: 'users.view', desc: 'Inspect registered user profiles and metadata' },
  { code: 'users.manage', desc: 'Update profiles, change packages, and suspend accounts' },
  { code: 'payments.view', desc: 'Audit payment records, transactions, and invoice history' },
  { code: 'payments.manage', desc: 'Adjust billing tiers, resolve disputes, and grant credits' },
  { code: 'storage.view', desc: 'Monitor storage allocations, files, and server health' },
  { code: 'storage.manage', desc: 'Configure tier quotas and manage system capacity limits' },
  { code: 'reports.view', desc: 'Access financial, activity, and aggregate analytic reports' },
  { code: 'settings.manage', desc: 'Configure global security policies and admin preferences' },
  { code: 'admin_permissions.manage', desc: 'Assign roles, create admins, and grant granular permissions' },
]

const predefinedRoles = [
  {
    role: 'Super Admin',
    badge: 'Full Access',
    desc: 'Unrestricted access to all system APIs, role assignment, administrative accounts, and system configuration.',
  },
  {
    role: 'User Administrator',
    badge: 'Operations',
    desc: 'Focuses on user account lifecycle, profile moderation, suspension/reactivation, and basic storage audits.',
  },
  {
    role: 'Payment Administrator',
    badge: 'Finance',
    desc: 'Monitors revenue streams, subscription package upgrades/downgrades, and billing reconciliations.',
  },
  {
    role: 'Storage Administrator',
    badge: 'Infrastructure',
    desc: 'Monitors disk utilization, user consumption thresholds, server capacity alerts, and storage quotas.',
  },
  {
    role: 'Support Administrator',
    badge: 'Customer Care',
    desc: 'Assists users with account inquiries, password reset coordinations, and read-level permission checks.',
  },
  {
    role: 'Read-Only Auditor',
    badge: 'Compliance',
    desc: 'Enjoys visibility across analytics, logs, and user tables for security auditing without write or modification rights.',
  },
]

const engineeringDecisions = [
  {
    tag: 'Security Architecture',
    title: 'Why Backend-Enforced RBAC via Custom DRF Permission?',
    rationale:
      'Frontend navigation gating can be bypassed by manual API calls. Centralizing logic in a custom `HasAdminPermission` class verifies authentication, staff flags, and granular permission nodes on every protected endpoint before executing database queries.',
  },
  {
    tag: 'Performance & Scalability',
    title: 'Why Database-Level Aggregation for Analytics?',
    rationale:
      'Instead of transferring thousands of raw records to the browser, the Django backend utilizes ORM aggregation functions (Count, Sum, Avg) to compute grouped daily, weekly, monthly, and yearly metrics close to the data layer, slashing payload sizes.',
  },
  {
    tag: 'API Reliability & DX',
    title: 'Why Axios Interceptors for Token Refresh?',
    rationale:
      'Axios request interceptors inject the JWT Bearer access token automatically across all administrative calls, while response interceptors catch 401 Unauthorized responses to seamlessly obtain fresh tokens without interrupting the admin workflow.',
  },
  {
    tag: 'Platform Safety',
    title: 'Why Automated Self-Suspension Prevention?',
    rationale:
      'Accidental self-lockout by an administrator could leave the platform without access. Backend validation actively compares the acting administrator ID with the target account ID, rejecting self-suspension or self-demotion requests.',
  },
  {
    tag: 'Data Integrity',
    title: 'Why Multi-Tier Password Policy & Verification?',
    rationale:
      'Admin credentials hold elevated authority. The system enforces strict length minimums, verifies current password authenticity through Django PBKDF2 hashing, and prevents reuse of existing passwords before updating custom and auth models.',
  },
  {
    tag: 'Architectural Cleanliness',
    title: 'Why Decouple Admin Management into a Modular Interface?',
    rationale:
      'Separating the Admin Management Module from general user-facing file storage interfaces minimizes bundle footprint, enhances auditability, and allows isolated maintenance and testing of sensitive operational tools.',
  },
]

const techStackGroups = [
  { category: 'Frontend', techs: ['React.js', 'Tailwind CSS', 'Axios (Interceptors)', 'React Router', 'Context API', 'Lucide React'] },
  { category: 'Backend', techs: ['Python', 'Django REST Framework', 'Simple JWT', 'Custom Permission Classes', 'Django ORM'] },
  { category: 'Security & Auth', techs: ['JWT Tokens', 'Role-Based Access Control (RBAC)', 'Django Password Hasher', 'Self-Lockout Guard'] },
  { category: 'Analytics & Visualization', techs: ['Interactive Charts', 'Aggregation Queries', 'Time-Series Breakdown', 'Storage Quotas'] },
  { category: 'DevOps & Collaboration', techs: ['Git & GitHub', 'ServerSalad Collaboration', 'Vercel Deployment', 'RESTful API Design'] },
]

const outcomeHighlights = [
  'Full Admin Management Module Built & Integrated',
  'Custom DRF `HasAdminPermission` Class',
  'Multi-Role Authorization Architecture (6 Roles)',
  'Multi-Dimensional Visual Analytics Row',
  'Safe Account Lifecycle & Suspension Workflows',
  'Real-Time Quota & Subscription Oversight',
]

function Reveal({ children, className = '', delay = 0, style }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      style={style}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

function ProjectImage({ src, alt, className = '', onOpen }) {
  return (
    <button className={`case-image-button ${className}`} type="button" onClick={() => onOpen({ src, alt })}>
      <img src={src} alt={alt} />
      <span>View screenshot ↗</span>
    </button>
  )
}

function SectionHeading({ kicker, title }) {
  return (
    <div className="case-section-heading">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
    </div>
  )
}

function CloudStorageSolution() {
  const [lightboxImage, setLightboxImage] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!lightboxImage) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLightboxImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxImage])

  return (
    <div className="case-study case-study--cloud-storage">
      {/* Hero Section */}
      <section className="case-hero" id="hero">
        <PageContainer>
          <div className="case-hero-grid">
            <Reveal className="case-hero-copy">
              <p className="section-kicker">02 / Selected Project Case Study</p>
              <h1>
                CEYNOA – Cloud Storage Solution
                <br />
                <span>Admin Management Module & Analytics Platform</span>
              </h1>
              <p className="case-eyebrow">
                SECOND-YEAR SOFTWARE PROJECT · DEVELOPED IN COLLABORATION WITH SERVERSALAD · 2025–2026
              </p>
              <p className="case-lede case-lede--compact">
                CEYNOA is a cloud storage solution engineered to give users a secure platform for storing, managing,
                and sharing files. As a core member of the development team, my primary responsibility was architecting
                and building the <strong>Admin Management Module</strong>—encompassing frontend React interfaces,
                Django REST API integration, JWT authentication, granular Role-Based Access Control (RBAC), user lifecycle
                moderation, storage quota tracking, and interactive administrative visual analytics.
              </p>

              <div className="case-badge-row">
                {heroBadges.map((badge) => (
                  <span key={badge} className="case-badge">
                    {badge}
                  </span>
                ))}
              </div>

              <div className="repopilot-action-row">
                <a
                  className="hero-button hero-button-primary"
                  href="https://software-project-storage-solution.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore Live Demo
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="hero-button hero-button-secondary"
                  href="https://github.com/chirath1231/Software-Project-Storage-Solution"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Source Code
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>

            <Reveal className="case-hero-media" delay={0.1}>
              <ProjectImage
                src={adminDash}
                alt="CEYNOA Admin Management Dashboard overview showcase"
                onOpen={setLightboxImage}
              />
              <div className="case-hero-stats">
                <div>
                  <strong>11+</strong>
                  <span>Admin Modules Built</span>
                </div>
                <div>
                  <strong>RBAC</strong>
                  <span>Granular Security</span>
                </div>
                <div>
                  <strong>Real-Time</strong>
                  <span>Storage & Quotas</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="case-highlight-strip">
            <div>
              <span>Core Responsibility</span>
              <strong>Admin Management Module (Frontend & Backend Integration)</strong>
            </div>
            <div>
              <span>Security Paradigm</span>
              <strong>Backend-Enforced Role-Based Access Control (RBAC)</strong>
            </div>
            <div>
              <span>Tech Stack</span>
              <strong>React.js · Tailwind CSS · Django REST Framework · Simple JWT</strong>
            </div>
            <div>
              <span>Partnership</span>
              <strong>ServerSalad Industry Collaboration</strong>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* At a Glance */}
      <section className="case-section" id="at-a-glance">
        <PageContainer>
          <SectionHeading kicker="Overview" title="At a Glance: Admin Management Capabilities" />
          <div className="case-glance-grid">
            {atGlanceItems.map((item, idx) => (
              <Reveal key={item.title} className="case-glance-card" delay={idx * 0.05}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Deep-Dive Module 1: Admin Dashboard & System Overview */}
      <section className="case-section" id="dashboard-overview">
        <PageContainer>
          <div className="repopilot-showcase-grid">
            <Reveal className="repopilot-showcase-copy">
              <span className="case-badge">Operational Control</span>
              <h2>Centralized Admin Dashboard & System Overview</h2>
              <p>
                The Admin Dashboard serves as the central command cockpit for the entire cloud storage platform.
                Rather than forcing administrators to manually inspect disparate database tables or execute server queries,
                the dashboard aggregates crucial platform metrics into a unified, high-contrast operational interface.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Total Registered Users & Growth</strong>
                  <p>Real-time tally of active, pending, and suspended user accounts with monthly onboarding velocity.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Global Storage Utilization</strong>
                  <p>Aggregate disk space allocated versus consumed across all active storage nodes and user buckets.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Subscription Plans & Revenue Overview</strong>
                  <p>Instant breakdown of active free, pro, and enterprise packages alongside monthly recurring revenue.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Health & System Statistics</strong>
                  <p>API response rates, transaction volume, and operational indicators informing administrative decisions.</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={adminDash}
                alt="Centralized Admin Dashboard displaying KPIs, metrics, and storage overview"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* Deep-Dive Module 2: Admin Authentication & JWT Lifecycle */}
      <section className="case-section case-section--alt" id="auth-flow">
        <PageContainer>
          <div className="repopilot-showcase-grid repopilot-showcase-grid--reverse">
            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={adminAuth}
                alt="CEYNOA Admin Authentication and JWT-secured login interface"
                onOpen={setLightboxImage}
              />
            </Reveal>

            <Reveal className="repopilot-showcase-copy">
              <span className="case-badge">Security Flow</span>
              <h2>Admin Authentication & Secure JWT Login</h2>
              <p>
                To maintain the integrity of administrative tools, I engineered a robust authentication lifecycle
                ensuring that only verified staff accounts can access the administrative zone.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Credentials Verification & Password Hashing</strong>
                  <p>Email and password validation utilizing Django&apos;s hardened PBKDF2 password hashing mechanism.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>JWT Access & Refresh Token Pair</strong>
                  <p>Short-lived access tokens for secure API queries paired with encrypted refresh tokens stored in secure browser state.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Automated Role Identification & Route Guards</strong>
                  <p>Automatic extraction of staff credentials and assigned role claims immediately upon login, redirecting unauthorized users away from admin views.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Axios Bearer Interceptor</strong>
                  <p>Axios instances configured to transparently attach authorization headers to all subsequent requests without manual token handling.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* Deep-Dive Module 3: Role-Based Access Control (RBAC) */}
      <section className="case-section" id="rbac">
        <PageContainer>
          <SectionHeading kicker="Access Governance" title="Role-Based Access Control (RBAC) & Custom DRF Permissions" />
          <p className="case-section-intro">
            Enterprise cloud platforms require defense in depth. Instead of granting blanket permissions, I instituted
            a granular Role-Based Access Control (RBAC) model powered by a custom Django REST Framework permission class:
            <code className="cloud-inline-code">HasAdminPermission</code>.
          </p>

          <div className="repopilot-showcase-grid" style={{ marginBottom: '3rem' }}>
            <Reveal className="repopilot-showcase-copy">
              <span className="case-badge">Backend Enforcement</span>
              <h2>Server-Side Authority Verification</h2>
              <p>
                Frontend UI buttons can be inspected or altered by knowledgeable users. To eliminate authorization bypass,
                every single administrative API route strictly verifies the incoming JWT token against both staff status
                and the required permission node before touching any database model.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Super Admin Privileges</strong>
                  <p>Unrestricted oversight across all modules, configuration panels, and administrative role assignments.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Restricted Admin Profiles</strong>
                  <p>Granular delegation granting staff members access strictly to their designated operational areas.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Dynamic Permission Checking</strong>
                  <p>Endpoint-level validation evaluating specific permission strings such as <code className="cloud-inline-code">storage.manage</code> or <code className="cloud-inline-code">users.manage</code>.</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={adminRbac}
                alt="Role-Based Access Control management interface showing permission toggles"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>

          {/* Granular Permission Nodes Table */}
          <div className="cloud-rbac-grid">
            <Reveal className="cloud-rbac-card">
              <h3>Granular Permission Nodes</h3>
              <p>Fine-grained permissions evaluated by the <code className="cloud-inline-code">HasAdminPermission</code> DRF class:</p>
              <div className="cloud-permission-tags">
                {rbacPermissions.map((perm) => (
                  <div key={perm.code} className="cloud-perm-item">
                    <span className="cloud-perm-code">{perm.code}</span>
                    <span className="cloud-perm-desc">{perm.desc}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="cloud-rbac-card" delay={0.1}>
              <h3>Predefined Administrative Roles</h3>
              <p>Presets designed to streamline administrative onboarding across department responsibilities:</p>
              <div className="cloud-roles-list">
                {predefinedRoles.map((role) => (
                  <div key={role.role} className="cloud-role-item">
                    <div className="cloud-role-header">
                      <strong>{role.role}</strong>
                      <span className="cloud-role-badge">{role.badge}</span>
                    </div>
                    <p>{role.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* Deep-Dive Module 4: CRITICAL REQUIREMENT — Visual Analysis & Analytics in a Row */}
      <section className="case-section case-section--alt" id="analytics">
        <PageContainer>
          <SectionHeading kicker="Data Intelligence" title="Administrative Analytics & Data Visualization" />
          <p className="case-section-intro">
            A hallmark of the Admin Panel is transforming raw tabular data into intuitive visual insights.
            Rather than scanning flat database rows, administrators can diagnose storage bottlenecks, track user acquisition,
            and monitor revenue trends across distinct chart formats.
          </p>

          {/* 3 Graph Images Displayed in a Row */}
          <div className="cloud-analytics-row-header">
            <span className="case-badge">Visual Representation of Analysis</span>
            <p className="cloud-analytics-subtitle">
              Interactive multi-dimensional charts (Pie, Bar, and Line) rendered across storage utilization, bandwidth metrics, and financial performance.
            </p>
          </div>

          <div className="cloud-analytics-row">
            {/* Graph 1: Storage Allocation & Quota Utilization */}
            <Reveal className="cloud-graph-card" delay={0.05}>
              <div className="cloud-graph-media">
                <ProjectImage
                  src={adminGraph}
                  alt="Storage allocation and capacity utilization charts"
                  onOpen={setLightboxImage}
                />
              </div>
              <div className="cloud-graph-body">
                <div className="cloud-graph-tag">Storage & Quota Analysis</div>
                <h4>Capacity Allocation & Tier Distribution</h4>
                <p>
                  Pie and donut charts illustrating the percentage of disk space occupied by Pro vs Enterprise tiers,
                  flagging servers nearing 80% threshold limits.
                </p>
              </div>
            </Reveal>

            {/* Graph 2: Bandwidth & System Utilization */}
            <Reveal className="cloud-graph-card" delay={0.1}>
              <div className="cloud-graph-media">
                <ProjectImage
                  src={adminGraph2}
                  alt="Bandwidth utilization and system traffic trends"
                  onOpen={setLightboxImage}
                />
              </div>
              <div className="cloud-graph-body">
                <div className="cloud-graph-tag">Traffic & Operations</div>
                <h4>Bandwidth & Traffic Dynamics</h4>
                <p>
                  Bar visualizations comparing upload vs download throughput across peak business hours to optimize
                  cloud storage server workloads and prevent bandwidth throttling.
                </p>
              </div>
            </Reveal>

            {/* Graph 3: Growth, Subscriptions & Revenue Metrics */}
            <Reveal className="cloud-graph-card" delay={0.15}>
              <div className="cloud-graph-media">
                <ProjectImage
                  src={adminGraph3}
                  alt="Historical user acquisition, subscription plans, and revenue trends"
                  onOpen={setLightboxImage}
                />
              </div>
              <div className="cloud-graph-body">
                <div className="cloud-graph-tag">Financial & User Growth</div>
                <h4>Revenue & Subscription Trends</h4>
                <p>
                  Multi-series line graphs tracking monthly recurring revenue (MRR) alongside new user conversions,
                  enabling clear financial forecasting.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Time-Based Aggregation Explanations */}
          <div className="cloud-chart-types-grid">
            <Reveal className="cloud-chart-type-box">
              <span className="cloud-chart-type-icon">🥧</span>
              <h4>Pie & Donut Charts</h4>
              <p>Visualizing proportional distributions: subscription tier breakdown, storage allocations, and geographic user cohorts.</p>
            </Reveal>
            <Reveal className="cloud-chart-type-box" delay={0.08}>
              <span className="cloud-chart-type-icon">📊</span>
              <h4>Comparative Bar Charts</h4>
              <p>Comparing discrete metrics: revenue generated per subscription plan, departmental storage usage, and monthly signups.</p>
            </Reveal>
            <Reveal className="cloud-chart-type-box" delay={0.16}>
              <span className="cloud-chart-type-icon">📈</span>
              <h4>Time-Series Line Charts</h4>
              <p>Displaying longitudinal trends: daily active users, weekly storage growth, monthly revenue, and annual usage curves.</p>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* Deep-Dive Module 5: Reports & Database-Level Aggregation */}
      <section className="case-section" id="reports-aggregation">
        <PageContainer>
          <div className="repopilot-showcase-grid">
            <Reveal className="repopilot-showcase-copy">
              <span className="case-badge">Backend Architecture</span>
              <h2>Time-Based Aggregations & Query Efficiency</h2>
              <p>
                Reporting functionality must scale seamlessly as millions of file entries populate the database.
                Instead of burdening the browser with thousands of raw records, data aggregation is pushed entirely
                to the database engine via Django ORM.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Multi-Interval Reporting Views</strong>
                  <p>Switch between Daily, Weekly, Monthly, and Yearly operational summaries with cached query responses.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>ORM Aggregations (Sum, Count, TruncDate)</strong>
                  <p>Database queries aggregate file records and payment entries directly, returning concise summary payloads.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Minimal Frontend Footprint</strong>
                  <p>Reduces client-side CPU overhead and memory footprint, ensuring swift chart re-renders even on mobile devices.</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={adminSettings}
                alt="Admin Settings and time-based reporting configuration"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* Deep-Dive Module 6: User Management, Subscriptions & Storage Quotas */}
      <section className="case-section case-section--alt" id="user-management">
        <PageContainer>
          <SectionHeading kicker="User Operations" title="Centralized User Management & Storage Quotas" />
          <p className="case-section-intro">
            Managing thousands of registered accounts requires intuitive, responsive tooling.
            The User Management module combines comprehensive data views with immediate operational controls.
          </p>

          <div className="repopilot-showcase-grid repopilot-showcase-grid--reverse" style={{ marginBottom: '3rem' }}>
            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={adminEdit}
                alt="User account editing and profile management modal"
                onOpen={setLightboxImage}
              />
            </Reveal>

            <Reveal className="repopilot-showcase-copy">
              <span className="case-badge">Account Lifecycle</span>
              <h2>Comprehensive User Directory & Profile Auditing</h2>
              <p>
                The user directory presents high-density metadata in an accessible table format:
                Username, Email, Country, Registration Date, Last Login, Active Package, Storage Usage, and Account Status.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Instant Search & Dynamic Filtering</strong>
                  <p>Debounced client search by username or email paired with filters for account status and tier.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Inline Profile Modification</strong>
                  <p>Audit and update user contact details, role affiliations, or adjust allocated subscription tiers.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Storage Limit Calculations</strong>
                  <p>Automated comparison of total uploaded bytes against tier limits with percentage progress gauges.</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="repopilot-showcase-grid">
            <Reveal className="repopilot-showcase-copy">
              <span className="case-badge">Revenue & Tiers</span>
              <h2>Subscription & Payment Monitoring</h2>
              <p>
                Visibility into tier conversions and billing health is essential for cloud storage sustainability.
                The subscription module tracks tier distribution, active package renewals, and storage tier limits.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Package Distribution Breakdown</strong>
                  <p>Track proportion of users on Free (5 GB), Pro (50 GB), and Enterprise (1 TB) tiers.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Payment History & Transaction Verification</strong>
                  <p>Inspect invoice statuses, transaction timestamps, and revenue contribution per tier.</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={adminSub}
                alt="Subscription package monitoring and tier allocation screen"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* Deep-Dive Module 7: Account Suspension & Security Governance */}
      <section className="case-section" id="account-moderation">
        <PageContainer>
          <div className="repopilot-showcase-grid repopilot-showcase-grid--reverse">
            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={adminSuspend}
                alt="Account suspension and reactivation workflow modal"
                onOpen={setLightboxImage}
              />
            </Reveal>

            <Reveal className="repopilot-showcase-copy">
              <span className="case-badge">Platform Moderation</span>
              <h2>Account Suspension, Reactivation & Safeguards</h2>
              <p>
                To respond rapidly to policy violations, suspicious authentication attempts, or payment defaults,
                authorized administrators can suspend user accounts instantly.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Instant Status Invalidation</strong>
                  <p>Suspension flips the user&apos;s active status in the Django authentication system, invalidating ongoing sessions.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>One-Click Reactivation</strong>
                  <p>When security audits pass or issues are resolved, authorized administrators can restore full access immediately.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Critical Self-Suspension Safeguard</strong>
                  <p>Backend validation strictly checks <code className="cloud-inline-code">request.user.id !== target_user.id</code>, preventing an administrator from inadvertently locking themselves out of the system.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* Engineering Decisions */}
      <section className="case-section case-section--alt" id="engineering-decisions">
        <PageContainer>
          <SectionHeading kicker="Technical Architecture" title="Key Architectural & Engineering Decisions" />
          <p className="case-section-intro">
            Enterprise administrative systems demand deliberate trade-offs across security, performance, and maintainability.
            Here is the rationale behind the primary architectural choices in CEYNOA:
          </p>

          <div className="repopilot-decision-grid">
            {engineeringDecisions.map((decision, idx) => (
              <Reveal key={decision.title} className="repopilot-decision-card" delay={idx * 0.06}>
                <span className="repopilot-decision-tag">{decision.tag}</span>
                <h3>{decision.title}</h3>
                <p>{decision.rationale}</p>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Tech Stack Summary */}
      <section className="case-section" id="tech-stack">
        <PageContainer>
          <SectionHeading kicker="Technologies" title="Technologies & Frameworks Employed" />
          <div className="case-stack-grid">
            {techStackGroups.map((group, idx) => (
              <Reveal key={group.category} className="case-stack-category" delay={idx * 0.05}>
                <h3>{group.category}</h3>
                <ul>
                  {group.techs.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Key Learning Outcomes & Impact */}
      <section className="case-section case-section--alt" id="outcomes">
        <PageContainer>
          <SectionHeading kicker="Professional Growth" title="Key Learning Outcomes & Engineering Takeaways" />
          <div className="case-outcome-grid">
            <Reveal className="outcome-copy">
              <p className="outcome-intro">
                Designing and implementing the CEYNOA Admin Management Module provided invaluable hands-on experience
                building high-stakes administrative infrastructure that goes far beyond simple CRUD operations:
              </p>
              <div className="outcome-chips">
                {outcomeHighlights.map((highlight, index) => (
                  <span key={highlight}>
                    <span className="case-badge">{highlight}</span>
                    {index < outcomeHighlights.length - 1 ? (
                      <span aria-hidden="true" className="outcome-plus">
                        +
                      </span>
                    ) : null}
                  </span>
                ))}
              </div>
              <p className="outcome-statement">
                This project cemented my expertise in decoupled client-server security architectures,
                role-based authorization hierarchies, database-level query optimization, and constructing data-driven
                dashboards that empower non-technical administrators with actionable system visibility.
              </p>

              <div className="repopilot-action-row" style={{ marginTop: '2.5rem' }}>
                <a
                  className="hero-button hero-button-primary"
                  href="https://software-project-storage-solution.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch Live Demo
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="hero-button hero-button-secondary"
                  href="https://github.com/chirath1231/Software-Project-Storage-Solution"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inspect on GitHub
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
            <Reveal className="outcome-image" delay={0.1}>
              <ProjectImage
                src={adminDash}
                alt="CEYNOA Admin Panel system dashboard overview"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>

          <a className="case-back-link" href="/#projects">
            ← Back to projects
          </a>
        </PageContainer>
      </section>

      {/* Full-Screen Interactive Lightbox */}
      {lightboxImage && (
        <div
          className="case-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Project screenshot preview"
          onClick={() => setLightboxImage(null)}
        >
          <button type="button" aria-label="Close screenshot preview" onClick={() => setLightboxImage(null)}>
            ×
          </button>
          <img src={lightboxImage.src} alt={lightboxImage.alt} />
        </div>
      )}
    </div>
  )
}

export default CloudStorageSolution
