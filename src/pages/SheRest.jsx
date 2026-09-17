import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import useReducedMotion from '../hooks/useReducedMotion'
import sherest1 from '../assets/sherest1.jpeg'
import sherest2 from '../assets/sherest2.jpeg'
import sherest3 from '../assets/sherest3.jpeg'
import sherest4 from '../assets/sherest4.jpeg'
import sherest5 from '../assets/sherest5.jpeg'
import sherest6 from '../assets/sherest6.jpeg'
import sherest7 from '../assets/sherest7.jpeg'
import sherest8 from '../assets/sherest8.jpeg'

const heroBadges = [
  'AI-Assisted',
  "Women's Safety",
  'Mental Well-being',
  'Privacy-Focused',
  'UX / UI',
  'Ongoing',
]

const atGlanceItems = [
  {
    title: "Women's Safety",
    desc: 'Confidential guidance, rapid response protocols, and direct emergency access.',
  },
  {
    title: 'AI Legal & Safety Guidance',
    desc: 'Step-by-step assistance for incident documentation, legal literacy, and verified reporting pathways.',
  },
  {
    title: 'Emotional Well-being',
    desc: 'Guided meditation, affirmations, mindful music, and trusted mental health consultation.',
  },
  {
    title: 'Community Support',
    desc: 'Moderated, topic-based safe spaces for shared experiences and peer encouragement.',
  },
  {
    title: 'Privacy-Focused',
    desc: 'Anonymous chatting mechanisms, pseudonymous profiles, and privacy-preserving architecture.',
  },
]

const problemStats = [
  {
    source: 'UGC + UNICEF 2022',
    metric: '34.3%',
    label: 'Psychological violence from ragging',
    detail: 'Physical abuse reported by 23.8% and sexual harassment by 16.6% in university environments.',
  },
  {
    source: 'UNFPA 2015 Study',
    metric: '90%',
    label: 'Public transport harassment',
    detail: 'Surveyed women who experienced sexual harassment on public transport at least once in Sri Lanka.',
  },
  {
    source: 'Sri Lanka Police 2024',
    metric: '2,785',
    label: 'Reported harassment cases',
    detail: 'Sexual harassment cases against women officially recorded in nationwide police reports.',
  },
]

const silenceReasons = [
  'Fear of social judgment and victim-blaming',
  'Privacy concerns and fear of exposure',
  'Lack of trusted, confidential guidance',
  'Uncertainty about legal and reporting processes',
  'Limited access to professional emotional support',
  'Absence of moderated, safe spaces to speak freely',
]

const solutionPillars = [
  'Confidential incident guidance',
  'Legal and safety assistance',
  'Mental health consultation',
  'Guided meditation & mindfulness',
  'Emotional healing experiences',
  'Moderated peer community',
  'Personalized positive content',
  'Emergency assistance & hotlines',
]

const coreFeatures = [
  {
    number: '01',
    title: 'AI Legal & Safety Chatbot',
    badge: 'Guidance · Not Legal Counsel',
    hint: 'Confidential incident documentation & verified guidance',
    body: 'A confidential, empathetic assistant that helps women document incidents clearly and understand possible legal and safety steps without fear of premature disclosure.',
    points: [
      'Empathetic guided documentation of incidents with contextual prompts',
      'Step-by-step navigation of reporting options and rights',
      'Direct redirection to verified emergency contacts and accredited legal bodies',
      'Explicit boundary: designed to guide and connect, not replace professional legal counsel',
    ],
    image: sherest6,
    imageAlt: 'SheRest confidential AI safety chat interface with emergency contact overlay',
    caption: 'Confidential chat for guidance with one-tap emergency help when you need it most.',
  },
  {
    number: '02',
    title: 'Mental Health Consultation',
    badge: 'Professional Support',
    hint: 'Confidential access to verified counselors',
    body: 'Direct, secure channels to connect women with certified mental health counselors, accredited NGOs, and verified support volunteers.',
    points: [
      'Confidential appointment booking and triage workflow',
      'Partnership-ready structure for accredited mental health organizations',
      'Crisis de-escalation protocols and referral pipelines',
      'Private communications ensuring user confidentiality',
    ],
  },
  {
    number: '03',
    title: 'Guided Meditation & Healing',
    badge: 'Calming Experience',
    hint: 'Empathetic avatar, breathwork & affirmations',
    body: 'An empathetic female guide avatar leads users through gentle breathing exercises, mindfulness routines, positive affirmations, and calming audio sessions tailored to mental state.',
    points: [
      'Initial "What brings you here today?" mood check (anxiety, harassment, trauma, burnout)',
      '30-minute tailored meditation sessions with interactive audio player',
      'Calming visual pacing designed to lower acute stress and heart rate',
      'Personalized affirmations reinforcing self-worth and safety',
    ],
    image: sherest8,
    imageAlt: 'SheRest guided meditation session and mental state check screen',
    caption: 'Guided meditation with a gentle mood check to understand mental state and support healing.',
  },
  {
    number: '04',
    title: 'Shared-Experience Community',
    badge: 'Safe & Moderated',
    hint: 'Anonymous topic-based connection',
    body: 'Carefully moderated spaces where women can read stories, exchange mutual encouragement, and know they are not alone, all under pseudonym protection.',
    points: [
      'Categorized community channels based on user preferences and experiences',
      'Zero real-name requirement — interact via protected avatars and nicknames',
      'Strict community moderation guidelines to prevent harassment or trolling',
      'Opt-in community recommendations based on gentle onboarding inputs',
    ],
    image: sherest4,
    imageAlt: 'SheRest recommended safe community spaces for women to share and connect',
    caption: 'Moderated topic spaces where women can connect and share without fear of judgment.',
  },
  {
    number: '05',
    title: 'Music & Positive Notifications',
    badge: 'Daily Wellness',
    hint: 'AI-assisted mood reminders & uplifting audio',
    body: 'AI-assisted recommendations, uplifting affirmations, and well-being reminders designed to provide gentle, sustained emotional reinforcement throughout the day.',
    points: [
      'Daily Moment of Peace card featured prominently on the home feed',
      'Gentle motivational push notifications timed for emotional ease',
      'Curated soothing soundscapes and relaxation tracks',
      'Configurable frequency to preserve user peace and privacy',
    ],
  },
  {
    number: '06',
    title: 'Emergency Help Panel',
    badge: 'Instant Access',
    hint: 'One-tap verified national hotlines & SOS',
    body: 'Rapid, discreet access to verified national emergency numbers (911, 1990 Suwa Seriya), personal trusted contacts ("Call Mom"), and local shelter resources.',
    points: [
      'Floating quick-access SOS button available across core screens',
      'Immediate dial triggers for emergency healthcare and police assistance',
      'Discreet design minimizing screen glow in urgent situations',
      'Offline-accessible contact directory for critical numbers',
    ],
  },
]

const userJourneySteps = [
  {
    label: 'Enter SheRest',
    tip: 'Soft, calming onboarding with nickname and avatar creation — no forced identity disclosure.',
  },
  {
    label: 'Choose Support',
    tip: 'Select immediate need: confidential guidance, emotional healing, or quick emergency help.',
  },
  {
    label: 'AI Guidance / Healing',
    tip: 'Engage with AI safety chatbot, explore verified legal paths, or begin guided meditation.',
  },
  {
    label: 'Community or SOS',
    tip: 'Connect with moderated peer groups or trigger verified emergency hotline dials.',
  },
  {
    label: 'Continued Support',
    tip: 'Receive gentle affirmations, monitor wellness habits, and access ongoing counseling.',
  },
]

const privacyPillars = [
  {
    number: '01',
    title: 'Encrypted Storage Pipelines',
    desc: 'All recorded incidents, journal entries, and consultation notes are secured with end-to-end encryption to guard against unauthorized access.',
  },
  {
    number: '02',
    title: 'Pseudonymous Identity',
    desc: 'Users interact solely using custom avatars and nicknames. Personal names, emails, and identifiers are strictly decoupled from public activity.',
  },
  {
    number: '03',
    title: 'Zero Third-Party Sharing',
    desc: 'No personal data, telemetry, or incident transcripts are shared with third parties or advertisers without explicit, granular user consent.',
  },
  {
    number: '04',
    title: 'Privacy-Preserving Principles',
    desc: 'Engineered with realistic privacy safeguards — avoiding exaggerated claims while systematically reducing exposure risks at every level.',
  },
]

const sensitiveContentGuidelines = [
  {
    title: 'Empathetic Response Tone',
    desc: 'All chatbot scripts and interface copy avoid accusatory or clinical phrasing, prioritizing gentle validation and non-judgmental warmth.',
  },
  {
    title: 'Trauma-Informed UX Copy',
    desc: 'Copy is crafted to avoid triggering re-traumatization, allowing users to pause, skip, or exit sensitive flows at any point.',
  },
  {
    title: 'Professional Review Intent',
    desc: 'Commitment to co-design and validate mental health responses and crisis workflows in direct consultation with licensed psychologists.',
  },
  {
    title: 'Non-Judgmental Safety Net',
    desc: 'Ensuring that users seeking help regarding harassment, ragging, or abuse never encounter moralizing, blame, or dismissive messaging.',
  },
]

const roadmapPhases = [
  {
    phase: '01',
    title: 'Research & Problem Validation',
    status: 'Completed',
    desc: 'Field interviews, secondary research synthesis on harassment in universities and transit, and identifying core user pain points.',
  },
  {
    phase: '02',
    title: 'UX Wireframing',
    status: 'Completed',
    desc: 'Mapping low-fidelity user structures, empathetic information architecture, and confidential navigation flows.',
  },
  {
    phase: '03',
    title: 'Interactive Prototyping',
    status: 'Current Phase',
    desc: 'High-fidelity Figma clickable prototypes for AI safety chat, 30-min guided meditation, community spaces, and emergency SOS.',
  },
  {
    phase: '04',
    title: 'User Testing & Refinement',
    status: 'Upcoming',
    desc: 'Usability testing with target user groups, psychological ease evaluation, and accessibility validation across screen sizes.',
  },
  {
    phase: '05',
    title: 'Pitch & Presentation',
    status: 'Upcoming',
    desc: 'Final presentation, pitch deck refinement, interactive walkthrough demonstrations, and expert panel review at Artemia 1.0.',
  },
]

const futureMilestones = [
  'Zero-knowledge encrypted architecture for sensitive incident records',
  "Institutional collaboration with Sri Lanka's Legal Aid Commission & Women's Bureau",
  'Formal co-design partnerships with accredited mental health professionals and NGOs',
  'Advanced multilingual conversational AI supporting Sinhala, Tamil, and English',
  'Discreet offline quick-exit gestures and disguised app icon modes',
  'Nationwide expansion of verified local emergency contact directories',
  'Continued iterative usability testing and trauma-informed design audits',
  'Production-ready full-stack progressive web application implementation',
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
      variants={{ hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay }}
    >
      {children}
    </motion.div>
  )
}

function ProjectImage({ src, alt, className = '', onOpen }) {
  return (
    <button
      className={`case-image-button ${className}`}
      type="button"
      onClick={() => onOpen({ src, alt })}
      aria-label={`Preview image: ${alt}`}
    >
      <img src={src} alt={alt} loading="lazy" />
      <span>View image ↗</span>
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

function SheRest() {
  const [lightboxImage, setLightboxImage] = useState(null)

  useEffect(() => {
    if (!lightboxImage) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setLightboxImage(null)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [lightboxImage])

  return (
    <div className="case-study case-study--sherest">
      {/* ==================== 1. HERO SECTION ==================== */}
      <section className="case-hero case-hero--sherest" id="hero" aria-labelledby="sherest-hero-title">
        <PageContainer>
          <div className="case-hero-grid">
            <Reveal className="case-hero-copy">
              <p className="section-kicker">05 / Case study</p>
              <h1 id="sherest-hero-title">
                SheRest
                <br />
                <span>A Safe Haven for Every Woman</span>
              </h1>
              <p className="case-eyebrow">ONGOING · ARTEMIA 1.0 IDEATHON PROPOSAL</p>
              <p className="case-lede case-lede--compact">
                SheRest is a secure digital sanctuary designed to support women&apos;s safety and emotional
                well-being through confidential guidance, mental health support, healing experiences, community
                connection, and emergency assistance.
              </p>
              <div className="case-badge-row">
                {heroBadges.map((badge) => (
                  <span key={badge} className="case-badge case-badge--sherest">
                    {badge}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal className="case-hero-media" delay={0.1}>
              <ProjectImage
                src={sherest1}
                alt="SheRest calming mobile interface designed to feel safe"
                onOpen={setLightboxImage}
              />
              <div className="case-hero-stats case-hero-stats--sherest">
                <div>
                  <strong>ONGOING</strong>
                  <span>Project status</span>
                </div>
                <div>
                  <strong>ARTEMIA 1.0</strong>
                  <span>Ideathon proposal</span>
                </div>
                <div>
                  <strong>TEAM NEXIO</strong>
                  <span>Univ. of Moratuwa</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="case-highlight-strip case-highlight-strip--sherest">
            <div>
              <span>Core Mission</span>
              <strong>Women&apos;s Safety · Legal Literacy · Emotional Healing</strong>
            </div>
            <div>
              <span>Ideathon Theme</span>
              <strong>Let&apos;s Empower Her Safety (IEEE SB, USJ)</strong>
            </div>
            <div>
              <span>Design Principles</span>
              <strong>Privacy-Preserving · Calming Aesthetics · Empathetic AI</strong>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* ==================== 2. AT A GLANCE ==================== */}
      <section className="case-section case-glance" aria-labelledby="glance-heading">
        <PageContainer>
          <SectionHeading kicker="01 / At a glance" title="Five highlights of the sanctuary." />
          <div className="glance-grid">
            {atGlanceItems.map(({ title, desc }, index) => (
              <Reveal className="glance-item" delay={index * 0.04} key={title}>
                <span className="case-index">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ==================== 3. THE PROBLEM ==================== */}
      <section className="case-section case-problem" aria-labelledby="problem-heading">
        <PageContainer>
          <SectionHeading kicker="02 / The problem" title="Why SheRest matters." />

          <div className="aim-layout">
            <Reveal>
              <p className="aim-statement">
                Women and girls experience harassment across both physical and digital environments, yet the majority
                suffer in silence.
              </p>
              <p className="case-body-text" style={{ marginTop: '1.2rem', color: 'var(--color-ink-muted)' }}>
                When facing harassment, ragging, or emotional trauma, victims often confront a compounding web of
                barriers that make seeking timely help feel impossible:
              </p>
              <ul className="case-check-list">
                {silenceReasons.map((reason) => (
                  <li key={reason}>{reason}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="section-subkicker">Contextual Sri Lankan Insights</p>
              <div className="stats-cards-stack">
                {problemStats.map((item) => (
                  <div className="stat-card" key={item.metric}>
                    <div className="stat-card-header">
                      <span className="stat-source">{item.source}</span>
                      <strong className="stat-metric">{item.metric}</strong>
                    </div>
                    <h4 className="stat-label">{item.label}</h4>
                    <p className="stat-detail">{item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="case-note" style={{ marginTop: '1.2rem' }}>
                These statistics highlight systemic gaps in accessible, non-judgmental support infrastructure,
                affirming the urgent necessity of private, supportive tools.
              </p>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* ==================== 4. SOLUTION OVERVIEW ==================== */}
      <section className="case-section case-solution" aria-labelledby="solution-heading">
        <PageContainer>
          <SectionHeading
            kicker="03 / Solution overview"
            title="A private digital sanctuary for safety and healing."
          />

          <div className="solution-overview-layout">
            <Reveal className="solution-overview-copy">
              <p className="aim-statement aim-statement--compact">
                SheRest brings multiple essential forms of support into one cohesive, comforting digital experience.
              </p>
              <p className="case-body-text" style={{ color: 'var(--color-ink-muted)', marginTop: '1rem' }}>
                Rather than forcing women to navigate disjointed apps, intimidating institutional portals, or unsafe
                public forums, SheRest integrates confidential guidance, recovery, and emergency safety in one single,
                serene touchpoint:
              </p>

              <div className="solution-tags-grid">
                {solutionPillars.map((pillar) => (
                  <div className="solution-pill" key={pillar}>
                    <span aria-hidden="true">✦</span>
                    <span>{pillar}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="solution-overview-media" delay={0.1}>
              <ProjectImage
                src={sherest2}
                alt="First look of SheRest showing the suite of mobile screens"
                onOpen={setLightboxImage}
              />
              <p className="image-caption">
                The comprehensive SheRest ecosystem: Profile & Communities, Guided Healing, Splash Sanctuary,
                Homefeed with Emergency Help, and Confidential AI Chat.
              </p>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* ==================== 5. CORE FEATURES ==================== */}
      <section className="case-section case-features" aria-labelledby="features-heading">
        <PageContainer>
          <SectionHeading
            kicker="04 / Core features"
            title="Thoughtful modules, built for safety and solace."
          />

          <div className="feature-interactive-grid">
            {coreFeatures.map((feat) => (
              <Reveal className="feature-block-card" key={feat.number}>
                <div className="feature-block-header">
                  <div className="feature-block-meta">
                    <span className="case-index">{feat.number}</span>
                    <span className="feature-badge">{feat.badge}</span>
                  </div>
                  <h3 className="feature-block-title">{feat.title}</h3>
                  <p className="feature-block-lede">{feat.body}</p>
                </div>

                <ul className="feature-point-list">
                  {feat.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>

                {feat.image ? (
                  <div className="feature-block-image-wrap">
                    <ProjectImage src={feat.image} alt={feat.imageAlt} onOpen={setLightboxImage} />
                    {feat.caption ? <p className="image-caption">{feat.caption}</p> : null}
                  </div>
                ) : null}
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ==================== 6. MY CONTRIBUTION / TEAM ==================== */}
      <section className="case-section case-contribution-section" aria-labelledby="contribution-heading">
        <PageContainer>
          <SectionHeading
            kicker="05 / Team & contribution"
            title="Collaborative ideathon proposal by Team Nexio."
          />

          <div className="role-layout">
            <Reveal>
              <div className="team-event-card">
                <span className="team-kicker">Event & Theme</span>
                <h3>Artemia 1.0 Ideathon Proposal</h3>
                <p className="team-org">
                  Organized by the <strong>IEEE Student Branch</strong>, University of Sri Jayewardenepura
                </p>
                <p className="team-theme">
                  <span>Theme:</span> <em>Let&apos;s Empower Her Safety</em>
                </p>
                <div className="team-roster">
                  <span className="team-roster-label">Team Nexio (University of Moratuwa)</span>
                  <ul>
                    <li>Sahas Abeygunarathne</li>
                    <li>N.A. Poojani Danulya</li>
                    <li>Rashmi Abeysekera</li>
                  </ul>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="role-lede">
                A collaborative ideation effort focused on human-centered safety design.
              </p>
              <p className="case-body-text" style={{ color: 'var(--color-ink-muted)', marginTop: '1rem' }}>
                As an ongoing ideathon submission, the team collaborated on synthesising research data, scoping the
                digital sanctuary concept, and formulating the core UX architecture:
              </p>
              <div className="contribution-points-grid">
                <div className="contribution-point-item">
                  <strong>Empathic Problem Scoping</strong>
                  <span>Synthesizing local harassment statistics and user vulnerabilities to shape the core feature set.</span>
                </div>
                <div className="contribution-point-item">
                  <strong>User Journey & Wireframes</strong>
                  <span>Designing low-friction flows that allow users to reach emotional support or hotlines within seconds.</span>
                </div>
                <div className="contribution-point-item">
                  <strong>Privacy-First System Modeling</strong>
                  <span>Establishing pseudonymous profiles, zero-pressure onboarding, and confidential chatbot protocols.</span>
                </div>
                <div className="contribution-point-item">
                  <strong>Ideathon Proposal & Storyboarding</strong>
                  <span>Crafting the concept narrative, pitch documentation, and end-to-end presentation walkthroughs.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* ==================== 7. DESIGN & UI/UX ==================== */}
      <section className="case-section case-design-section" aria-labelledby="design-heading">
        <PageContainer>
          <SectionHeading
            kicker="06 / Design & UI/UX"
            title="Designed to feel safe before it feels complex."
          />

          <div className="brand-layout">
            <Reveal>
              <p className="aim-statement aim-statement--compact">
                The interface deliberately uses soothing tones, organic curves, and empathetic visual metaphors to create
                an immediate sense of emotional ease.
              </p>
              <p className="case-body-text" style={{ color: 'var(--color-ink-muted)', marginTop: '1rem' }}>
                Women seeking guidance during moments of distress cannot be burdened by intimidating dashboards,
                aggressive warnings, or clinical aesthetics. Every visual detail was selected to reassure the user that
                she is protected and heard.
              </p>

              <div className="design-tokens-grid">
                <div className="principle-item">
                  <span className="principle-label">Soft Pink</span>
                  <div className="color-swatch" style={{ backgroundColor: '#fcd3f4' }} />
                  <span>#fcd3f4 · Calming Comfort</span>
                </div>
                <div className="principle-item">
                  <span className="principle-label">Pure Canvas</span>
                  <div className="color-swatch" style={{ backgroundColor: '#ffffff' }} />
                  <span>#ffffff · Clarity & Space</span>
                </div>
                <div className="principle-item">
                  <span className="principle-label">Symbolism</span>
                  <strong>Lotus Emblem</strong>
                  <span style={{ fontSize: '0.72rem' }}>Purity, resilience, and blooming through adversity</span>
                </div>
                <div className="principle-item">
                  <span className="principle-label">Avatar Guide</span>
                  <strong>Empathetic Mentor</strong>
                  <span style={{ fontSize: '0.72rem' }}>Gentle female companion for meditation & guidance</span>
                </div>
                <div className="principle-item">
                  <span className="principle-label">Tooling</span>
                  <strong>Figma & Illustrator</strong>
                  <span style={{ fontSize: '0.72rem' }}>Vector icons, mobile layouts, and design systems</span>
                </div>
              </div>
            </Reveal>

            <Reveal className="brand-image" delay={0.1}>
              <ProjectImage
                src={sherest7}
                alt="SheRest simple onboarding login and registration mobile screens"
                onOpen={setLightboxImage}
              />
              <p className="image-caption">
                Simple onboarding: Easy login and safe registration to start your healing journey gently without
                invasive questions.
              </p>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* ==================== 8. USER EXPERIENCE JOURNEY ==================== */}
      <section className="case-section case-journey" aria-labelledby="journey-heading">
        <PageContainer>
          <SectionHeading
            kicker="07 / User journey"
            title="A supportive path through every touchpoint."
          />

          <div className="flow-track flow-track--interactive">
            {userJourneySteps.map(({ label, tip }, index) => (
              <Reveal className="flow-node flow-node--interactive" delay={index * 0.04} key={label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{label}</strong>
                <p className="flow-tip">{tip}</p>
                {index < userJourneySteps.length - 1 && <i aria-hidden="true">↓</i>}
              </Reveal>
            ))}
          </div>

          <p className="architecture-flow" style={{ marginTop: '2.5rem' }}>
            Enter SheRest <b>→</b> Choose Support <b>→</b> AI Guidance / Consultation / Healing <b>→</b> Community or
            Emergency Help <b>→</b> Continued Support
          </p>
        </PageContainer>
      </section>

      {/* ==================== 9. PRIVACY & SAFETY ==================== */}
      <section className="case-section case-privacy" aria-labelledby="privacy-heading">
        <PageContainer>
          <div className="smart-cart-layout">
            <Reveal className="smart-cart-copy">
              <SectionHeading kicker="08 / Privacy & safety" title="Privacy is part of the product." />
              <p className="aim-statement aim-statement--compact">
                Designed around privacy-preserving principles from the ground up.
              </p>
              <p className="case-body-text" style={{ color: 'var(--color-ink-muted)', marginTop: '1rem' }}>
                We recognize that absolute claims like &ldquo;100% secure&rdquo; or &ldquo;completely anonymous&rdquo; can
                create false complacency. Instead, SheRest is architected around robust, verifiable privacy safeguards
                that minimize exposure risk:
              </p>

              <div className="privacy-cards-grid">
                {privacyPillars.map((item) => (
                  <div className="privacy-mini-card" key={item.number}>
                    <span className="case-index">{item.number}</span>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="smart-cart-image" delay={0.1}>
              <ProjectImage
                src={sherest5}
                alt="SheRest privacy first profile screen with nickname and custom avatar"
                onOpen={setLightboxImage}
              />
              <p className="image-caption">
                Privacy First: Create your profile with a nickname and avatar — your identity stays protected from
                the public community.
              </p>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* ==================== 10. SENSITIVE CONTENT ==================== */}
      <section className="case-section case-sensitive" aria-labelledby="sensitive-heading">
        <PageContainer>
          <SectionHeading
            kicker="09 / Sensitive content"
            title="Empathetic language and professional co-design."
          />

          <div className="aim-layout">
            <Reveal>
              <p className="aim-statement">
                Sensitive experiences require much more than a functionally working interface.
              </p>
              <p className="case-body-text" style={{ color: 'var(--color-ink-muted)', marginTop: '1.2rem' }}>
                When someone reaches out in crisis, words matter profoundly. Clinical jargon, overly automated
                responses, or unsympathetic phrasing can cause immediate emotional withdrawal.
              </p>
              <p className="case-body-text" style={{ color: 'var(--color-ink-muted)', marginTop: '0.8rem' }}>
                SheRest establishes strict content principles and an active intention to co-design all sensitive
                guidance scripts directly with certified mental health practitioners.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="sensitive-principles-grid">
                {sensitiveContentGuidelines.map((item) => (
                  <div className="sensitive-card" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* ==================== 11. LEGAL GUIDANCE ==================== */}
      <section className="case-section case-legal" aria-labelledby="legal-heading">
        <PageContainer>
          <SectionHeading
            kicker="10 / Legal guidance"
            title="Grounding legal information in trusted institutions."
          />

          <div className="legal-callout-card">
            <Reveal>
              <span className="legal-badge">Clear Boundary & Future Partnership</span>
              <p className="legal-statement">
                Accurate legal guidance is a vital challenge where misinformation can have severe real-world consequences.
              </p>
              <p className="legal-description">
                SheRest does not provide automated legal judgments or claim to replace qualified legal representation.
                Instead, future iterations will collaborate directly with established institutions:
              </p>
              <blockquote className="legal-quote">
                &ldquo;Future iterations should collaborate with institutions such as the Legal Aid Commission and the
                Women&apos;s Bureau to ensure that localized legal information is verified, empathetic, and consistently
                kept up to date.&rdquo;
              </blockquote>
              <div className="legal-highlights">
                <div>
                  <strong>Institutional Verification</strong>
                  <span>Accredited legal frameworks and official complaint filing guidance.</span>
                </div>
                <div>
                  <strong>Clear Disclaimers</strong>
                  <span>Transparent communication that AI acts as an informational navigator, not legal counsel.</span>
                </div>
                <div>
                  <strong>Localized Rights Literacy</strong>
                  <span>Making Sri Lankan legal protections accessible and comprehensible to every citizen.</span>
                </div>
              </div>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* ==================== 12. PROJECT ROADMAP ==================== */}
      <section className="case-section case-roadmap" aria-labelledby="roadmap-heading">
        <PageContainer>
          <SectionHeading
            kicker="11 / Project roadmap"
            title="Five phases from concept to implementation."
          />

          <div className="roadmap-grid">
            {roadmapPhases.map((phase, index) => (
              <Reveal className="roadmap-card" delay={index * 0.04} key={phase.phase}>
                <div className="roadmap-card-header">
                  <span className="case-index">PHASE {phase.phase}</span>
                  <span className={`roadmap-status-pill roadmap-status-pill--${phase.status.toLowerCase().replace(/\s+/g, '-')}`}>
                    {phase.status}
                  </span>
                </div>
                <h3>{phase.title}</h3>
                <p>{phase.desc}</p>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* ==================== 13. FUTURE DIRECTION ==================== */}
      <section className="case-section case-future" aria-labelledby="future-heading">
        <PageContainer>
          <SectionHeading kicker="12 / Future direction" title="Where SheRest is heading." />

          <Reveal>
            <p className="aim-statement aim-statement--compact">
              Transforming the ideathon concept into a verified, production-ready sanctuary.
            </p>
            <p className="case-body-text" style={{ color: 'var(--color-ink-muted)', marginTop: '1rem' }}>
              The following milestones outline the future technical and organizational roadmap currently targeted for
              upcoming iterations:
            </p>

            <div className="future-chips-grid">
              {futureMilestones.map((milestone, index) => (
                <div className="future-chip-item" key={milestone}>
                  <span className="future-chip-index">{String(index + 1).padStart(2, '0')}</span>
                  <span>{milestone}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </PageContainer>
      </section>

      {/* ==================== 14. PROJECT OUTCOME ==================== */}
      <section className="case-section case-outcome" aria-labelledby="outcome-heading">
        <PageContainer>
          <div className="outcome-layout">
            <Reveal>
              <SectionHeading
                kicker="13 / Project outcome"
                title="An ongoing concept built around safety, dignity, and support."
              />

              <div className="outcome-status-banner">
                <span className="status-dot" aria-hidden="true" />
                <strong>STATUS: ONGOING</strong>
                <span>Artemia 1.0 Ideathon Proposal · Team Nexio</span>
              </div>

              <p className="outcome-statement" style={{ marginTop: '1.5rem' }}>
                SheRest explores how technology can create a safer and more supportive digital environment for women by
                bringing safety guidance, emotional well-being, community support, and emergency resources into one
                experience.
              </p>

              <div className="outcome-pillars-summary">
                <div>
                  <span>Dignity</span>
                  <strong>Pseudonymous identity and respectful, non-judgmental guidance.</strong>
                </div>
                <div>
                  <span>Safety</span>
                  <strong>Instant hotline access and verified safety incident documentation.</strong>
                </div>
                <div>
                  <span>Healing</span>
                  <strong>Daily mindfulness, affirmations, and certified counselor access.</strong>
                </div>
              </div>
            </Reveal>

            <Reveal className="outcome-image" delay={0.1}>
              <ProjectImage
                src={sherest3}
                alt="SheRest home screen with daily positive moment and emergency contacts overlay"
                onOpen={setLightboxImage}
              />
              <p className="image-caption">
                Home screen: A welcoming home screen with quick access to healing, support, daily motivation, and
                instant emergency contacts (Call 911, Call 1990, Call Mom).
              </p>
            </Reveal>
          </div>

          <p className="disclaimer" style={{ marginTop: '3rem' }}>
            Ongoing ideathon proposal for Artemia 1.0 (IEEE Student Branch, University of Sri Jayewardenepura) by Team
            Nexio. Features and designs are ongoing concepts intended for educational and social impact exploration.
          </p>

          <a className="case-back-link" href="/#projects">
            ← Back to projects
          </a>
        </PageContainer>
      </section>

      {/* ==================== LIGHTBOX MODAL ==================== */}
      {lightboxImage && (
        <div
          className="case-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="SheRest image preview"
          onClick={() => setLightboxImage(null)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}

export default SheRest
