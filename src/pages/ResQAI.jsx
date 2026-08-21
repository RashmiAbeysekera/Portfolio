import { Fragment, useState } from 'react'
import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import useReducedMotion from '../hooks/useReducedMotion'
import resq1 from '../assets/resq1.jpeg'
import resq2 from '../assets/resq2.jpeg'
import resq3 from '../assets/resq3.jpeg'
import resq4 from '../assets/resq4.jpeg'
import resq5 from '../assets/resq5.jpeg'

const heroBadges = ['AI / ML', 'Real-Time', 'Emergency Response', 'Citizen SOS', 'Supabase', 'Next.js']

const atGlanceItems = [
  { title: 'AI Emergency Prioritization', desc: 'Analyze emergency reports and determine severity and urgency.' },
  { title: 'Smart Dispatch', desc: 'Support intelligent responder coordination using location and traffic information.' },
  { title: 'Citizen SOS', desc: 'Send emergency alerts with text, voice, images, and live location.' },
  { title: 'Live Crisis Dashboard', desc: 'Monitor incidents, responders, maps, and emergency heatmaps.' },
  { title: 'Multilingual', desc: 'Sinhala · Tamil · English' },
  { title: 'Predictive Analytics', desc: 'Forecast emergency hotspots and resource shortages.' },
]

const workflowSteps = [
  { label: 'Citizen', tip: 'A person witnesses or experiences an emergency.' },
  { label: 'Emergency Report', tip: 'The report is submitted through the platform.' },
  { label: 'AI Analysis', tip: 'The report is analyzed for meaning and context.' },
  { label: 'Incident Type + Severity + Urgency', tip: 'The system classifies what kind of emergency it is and how urgent it is.' },
  { label: 'Smart Prioritization', tip: 'Reports are ranked so the most urgent are handled first.' },
  { label: 'Responder Coordination', tip: 'Nearby responders are identified and notified.' },
  { label: 'Live Crisis Dashboard', tip: 'Operators track the incident in real time.' },
]

const sosFlowSteps = ['Citizen', 'SOS Media', 'Supabase Storage', 'Media URL', 'SOS Report', 'Realtime Operator Feed', 'Evidence Viewer']

const keyFeatures = [
  {
    title: 'AI Emergency Prioritization',
    features: ['NLP / ML analyzes emergency reports', 'Determines severity and urgency automatically'],
  },
  {
    title: 'Real-Time Smart Dispatching',
    features: ['Identifies nearby emergency responders', 'Supports responder notification'],
  },
  {
    title: 'Multilingual Communication',
    features: ['Sinhala support', 'Tamil support', 'English support'],
  },
  {
    title: 'Live Crisis Monitoring',
    features: ['Maps and incident analytics', 'Responder tracking', 'Emergency heatmaps'],
  },
  {
    title: 'AI Fake Report Detection',
    features: ['Behavioral and anomaly analysis', 'Flags potentially suspicious reports'],
  },
  {
    title: 'Predictive Resource Management',
    features: ['Uses historical and real-time data', 'Forecasts hotspots and resource shortages'],
  },
  {
    title: 'Citizen SOS',
    features: ['Live location sharing', 'Media uploads', 'Silent SOS option'],
  },
]

const contributionItems = [
  { number: '01', title: 'Supabase Storage', body: 'Worked with the sos_media storage bucket for emergency media.' },
  { number: '02', title: 'Media Upload', body: 'Implemented the citizen-side flow for uploading SOS media and associating it with the emergency report.' },
  { number: '03', title: 'Database Integration', body: 'Used the media_urls text array in sos_reports so a report can contain multiple media references.' },
  { number: '04', title: 'File Validation', body: 'Handled restrictions including a 5 MB maximum, and JPG, PNG, MP4, and WAV formats.' },
  { number: '05', title: 'Upload UX', body: 'Added loading states such as "Uploading Evidence..." to prevent duplicate submissions.' },
  { number: '06', title: 'Live SOS Feed', body: 'Worked on the operator-facing incoming SOS feed using Supabase Realtime so new reports appear without manual refresh.' },
  { number: '07', title: 'Evidence Indicator', body: 'Added logic to identify SOS reports containing media and show an "Evidence Attached" indicator.' },
  { number: '08', title: 'Evidence Viewer', body: 'Built the in-dashboard modal for viewing attached image and audio evidence, with Escape-key and overlay-click dismissal, without leaving the command center.' },
  { number: '09', title: 'Graceful Failure', body: 'Handled upload failures so the core emergency report can still be submitted if media upload fails.' },
]

const techStackGroups = [
  { category: 'Frontend', techs: ['Next.js', 'React', 'Tailwind CSS'] },
  { category: 'Mobile', techs: ['Flutter'] },
  { category: 'Backend', techs: ['Node.js'] },
  { category: 'Database', techs: ['PostgreSQL', 'Supabase'] },
  { category: 'AI / ML', techs: ['Python', 'TensorFlow', 'Scikit-learn'] },
  { category: 'NLP', techs: ['Hugging Face Transformers'] },
  { category: 'Speech', techs: ['Whisper API'] },
  { category: 'Image Processing', techs: ['OpenCV'] },
  { category: 'Maps', techs: ['Google Maps API'] },
  { category: 'Realtime', techs: ['WebSockets', 'Supabase Realtime'] },
  { category: 'Authentication', techs: ['Firebase Auth'] },
  { category: 'Cloud', techs: ['Firebase', 'Supabase'] },
]

const outcomeChips = [
  'AI-powered emergency coordination',
  'Real-time incident monitoring',
  'Citizen SOS',
  'Media evidence',
  'Multilingual support',
  'Intelligent resource coordination',
]

function Reveal({ children, className = '', delay = 0, style }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
      style={style}
      initial={prefersReducedMotion ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.14 }}
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
      <span>View</span>
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

function ResQAI() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [activeFeature, setActiveFeature] = useState(null)

  return (
    <div className="case-study case-study--resqai">
      <section className="case-hero" id="hero">
        <PageContainer>
          <div className="case-hero-grid">
            <Reveal className="case-hero-copy">
              <p className="section-kicker">03 / Case study</p>
              <h1>
                ResQAI
                <br />
                <span>AI-Powered Emergency Response Coordination Platform</span>
              </h1>
              <p className="case-eyebrow">Emergency Response Platform · Team Hackathon</p>
              <p className="case-lede case-lede--compact">
                An AI-powered emergency response coordination platform designed to centralize emergency reporting,
                intelligent prioritization, responder coordination, and live crisis monitoring.
              </p>
              <div className="case-badge-row">
                {heroBadges.map((badge) => (
                  <span key={badge} className="case-badge">
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal className="case-hero-media" delay={0.1}>
              <ProjectImage
                src={resq1}
                alt="ResQAI emergency coordination dashboard overview"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-glance">
        <PageContainer>
          <SectionHeading kicker="01 / At a glance" title="Six highlights of the platform." />
          <div className="glance-grid glance-grid--six">
            {atGlanceItems.map(({ title, desc }, index) => (
              <Reveal className="glance-item" delay={index * 0.05} key={title}>
                <span className="case-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-problem-solution">
        <PageContainer>
          <SectionHeading kicker="02 / The challenge" title="From fragmented response to one coordinated platform." />
          <div className="problem-solution-grid">
            <Reveal className="problem-solution-card">
              <span className="problem-solution-label">The problem</span>
              <p>
                Emergency response systems can be fragmented and slow, with communication gaps between emergency
                services, limited situational awareness, overloaded hotlines, language barriers, and inefficient
                resource allocation.
              </p>
            </Reveal>
            <div className="problem-solution-arrow" aria-hidden="true">→</div>
            <Reveal className="problem-solution-card problem-solution-card--solution" delay={0.08}>
              <span className="problem-solution-label">ResQAI solution</span>
              <p>
                ResQAI centralizes emergency reporting, AI-based analysis, real-time coordination, geospatial
                information, and crisis monitoring into one platform.
              </p>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-flow">
        <PageContainer>
          <SectionHeading kicker="03 / How ResQAI works" title="From citizen report to coordinated response." />
          <div className="flow-track flow-track--interactive">
            {workflowSteps.map(({ label, tip }, index) => (
              <Reveal className="flow-node flow-node--interactive" delay={index * 0.04} key={label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{label}</strong>
                <p className="flow-tip">{tip}</p>
                {index < workflowSteps.length - 1 && <i aria-hidden="true">↓</i>}
              </Reveal>
            ))}
          </div>

          <div className="architecture-branch">
            <span className="architecture-branch-label">Citizen SOS media flow</span>
            <div className="search-flow">
              {sosFlowSteps.map((step, index) => (
                <Fragment key={step}>
                  <div className="search-step">
                    <span>{step}</span>
                  </div>
                  {index < sosFlowSteps.length - 1 && <i>→</i>}
                </Fragment>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="case-section">
        <PageContainer>
          <SectionHeading kicker="04 / Key features" title="Grouped by function, built to scale." />
          <div className="feature-groups-grid">
            {keyFeatures.map(({ title, features }, index) => (
              <Reveal delay={index * 0.05} key={title}>
                <button
                  type="button"
                  className={`feature-group-card${activeFeature === title ? ' is-active' : ''}`}
                  onClick={() => setActiveFeature(activeFeature === title ? null : title)}
                  aria-expanded={activeFeature === title}
                >
                  <span className="feature-group-icon" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p className="feature-group-hint">
                    {activeFeature === title ? 'Tap to collapse' : 'Hover or tap to explore'}
                  </p>
                  <ul className="feature-list">
                    {features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </button>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-aim">
        <PageContainer>
          <SectionHeading kicker="05 / My contribution" title="SOS Media + Live Emergency Evidence" />
          <Reveal>
            <p className="case-note" style={{ maxWidth: '48rem', marginTop: '-1.5rem', marginBottom: '2rem' }}>
              ResQAI was built by a team. My contribution was focused specifically on the SOS media and storage
              pipeline and the operator-facing evidence feed — not the AI engine, smart dispatching, predictive
              analytics, or the platform as a whole.
            </p>
          </Reveal>
          <div className="highlights-grid">
            {contributionItems.map((item, index) => (
              <Reveal className="highlight-card" delay={index * 0.03} key={item.number}>
                <span className="highlight-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="aim-visual" delay={0.1} style={{ marginTop: '2rem' }}>
            <ProjectImage
              src={resq2}
              alt="ResQAI operator dashboard showing incoming SOS reports"
              onOpen={setLightboxImage}
            />
          </Reveal>
        </PageContainer>
      </section>

      <section className="case-section case-implementation">
        <PageContainer>
          <div className="smart-cart-layout">
            <Reveal className="smart-cart-copy">
              <SectionHeading kicker="06 / Evidence viewer" title="Reviewing evidence without leaving the dashboard." />
              <p>
                Operators can open an in-dashboard modal to review image and audio evidence attached to an SOS
                report, without navigating away from the command center.
              </p>
              <div className="pwa-highlights">
                <div className="pwa-item">
                  <strong>Image evidence</strong>
                  <span>Inline preview</span>
                </div>
                <div className="pwa-item">
                  <strong>Audio / voice evidence</strong>
                  <span>Inline playback</span>
                </div>
                <div className="pwa-item">
                  <strong>Escape or overlay click</strong>
                  <span>Quick dismissal</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="smart-cart-image" delay={0.1}>
              <ProjectImage
                src={resq3}
                alt="ResQAI evidence viewer modal with image and audio evidence"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-tech-stack">
        <PageContainer>
          <SectionHeading kicker="07 / Technology stack" title="Tools chosen for each layer." />
          <div className="tech-groups">
            {techStackGroups.map(({ category, techs }, index) => (
              <Reveal className="tech-group" delay={index * 0.03} key={category}>
                <h3>{category}</h3>
                <div className="tech-pills">
                  {techs.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-architecture">
        <PageContainer>
          <SectionHeading kicker="08 / Architecture" title="A clear path through the platform." />
          <div className="architecture-stack architecture-stack--vertical">
            {[
              ['Citizen Mobile App', 'Report submission entry point'],
              ['Emergency Report', 'Captured incident data'],
              ['Backend / API', 'Coordination layer'],
              ['AI / NLP Analysis', 'Classification and analysis'],
              ['Severity + Priority', 'Ranked by urgency'],
            ].map(([title, body], index) => (
              <Reveal className="architecture-layer" delay={index * 0.05} key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
          <p className="architecture-flow">
            Citizen Mobile App <b>→</b> Emergency Report <b>→</b> Backend / API <b>→</b> AI / NLP Analysis{' '}
            <b>→</b> Severity + Priority <b>→</b> Emergency Coordination <b>→</b> Responder / Authority Dashboard
          </p>

          <div className="architecture-branch">
            <span className="architecture-branch-label">My contribution — SOS evidence pipeline</span>
            <p className="architecture-flow architecture-flow--branch">
              Citizen <b>→</b> SOS Media Upload <b>→</b> Supabase Storage <b>→</b> media_urls <b>→</b> SOS Report{' '}
              <b>→</b> Supabase Realtime <b>→</b> Operator SOS Feed <b>→</b> Evidence Viewer
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-outcome">
        <PageContainer>
          <div className="outcome-layout">
            <Reveal>
              <SectionHeading kicker="09 / Project outcome" title="What this demonstrates." />
              <div className="outcome-plus-row">
                {outcomeChips.map((chip, index) => (
                  <span key={chip} className="outcome-chip-group">
                    <span className="case-badge">{chip}</span>
                    {index < outcomeChips.length - 1 ? <span aria-hidden="true" className="outcome-plus">+</span> : null}
                  </span>
                ))}
              </div>
              <p className="outcome-statement">
                ResQAI demonstrates how AI, real-time communication, geospatial technologies, and citizen-facing
                emergency reporting can be combined into a centralized emergency response platform.
              </p>
            </Reveal>
            <Reveal className="outcome-image" delay={0.1}>
              <ProjectImage
                src={resq4}
                alt="ResQAI live crisis monitoring map and analytics"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
          <Reveal className="aim-visual" delay={0.06} style={{ marginTop: '2rem' }}>
            <ProjectImage
              src={resq5}
              alt="ResQAI citizen SOS reporting screen"
              onOpen={setLightboxImage}
            />
          </Reveal>
          <a className="case-back-link" href="/#projects">
            ← Back to projects
          </a>
        </PageContainer>
      </section>

      {lightboxImage && (
        <div
          className="case-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Project image preview"
          onClick={() => setLightboxImage(null)}
        >
          <button type="button" aria-label="Close image preview" onClick={() => setLightboxImage(null)}>
            ×
          </button>
          <img src={lightboxImage.src} alt={lightboxImage.alt} />
        </div>
      )}
    </div>
  )
}

export default ResQAI
