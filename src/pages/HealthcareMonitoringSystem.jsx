import { useState } from 'react'
import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import useReducedMotion from '../hooks/useReducedMotion'
import hardware1 from '../assets/hardware1.jpeg'
import hardware2 from '../assets/hardware2.jpeg'
import hardware3 from '../assets/hardware3.jpeg'
import hardware4 from '../assets/hardware4.jpeg'

const glanceItems = [
  ['Health monitoring', 'Multiple health parameters'],
  ['ECG', 'AD8232 single-lead monitoring'],
  ['Live display', 'Sensor readings through web UI'],
  ['Patient history', 'Retrieve previous records'],
  ['PDF reports', 'Generate health reports'],
]

const flowItems = ['Patient', 'Sensors', 'Data acquisition', 'Processing / communication', 'Web application', 'Health dashboard', 'History / PDF report']

const featureItems = [
  { number: '01', title: 'Health parameter monitoring', body: 'Heart rate, SpO₂, body temperature, height, weight, and ECG.' },
  { number: '02', title: 'ECG monitoring', body: 'The AD8232 acquires a single-lead ECG signal through body electrodes.' },
  { number: '03', title: 'Real-time data display', body: 'Readings appear in the web interface with current status and reference ranges.' },
  { number: '04', title: 'Patient history', body: 'A patient ID and date can be used to retrieve previously recorded data.' },
  { number: '05', title: 'PDF report generation', body: 'Recorded patient health information can be packaged into a PDF report.' },
]

const learningItems = ['ECG signals', 'Sensor integration', 'Embedded systems', 'Web integration', 'Troubleshooting', 'Teamwork']

function Reveal({ children, className = '', delay = 0 }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      className={className}
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
      <span>Open image ↗</span>
    </button>
  )
}

function SectionHeading({ kicker, title }) {
  return <div className="case-section-heading"><p className="section-kicker">{kicker}</p><h2>{title}</h2></div>
}

function HealthcareMonitoringSystem() {
  const [lightboxImage, setLightboxImage] = useState(null)

  return (
    <div className="case-study">
      <section className="case-hero" id="hero">
        <PageContainer>
          <div className="case-hero-grid">
            <Reveal className="case-hero-copy">
              <p className="section-kicker">01 / Case study</p>
              <h1>Healthcare<br /><span>Monitoring System</span></h1>
              <p className="case-eyebrow">1ST YEAR HARDWARE PROJECT · 2024–2025</p>
              <p className="case-lede">A first-year hardware project that combines sensor-based health monitoring, ECG signal acquisition and a web-based interface for displaying health measurements and patient records.</p>
              <div className="case-meta-grid">
                <div><span>Project type</span><strong>1st Year Hardware Project</strong></div>
                <div><span>Area</span><strong>Healthcare · Embedded Systems · IoT</strong></div>
                <div><span>Technologies</span><strong>HTML · CSS · JavaScript · Sensors · AD8232</strong></div>
              </div>
            </Reveal>
            <Reveal className="case-hero-media" delay={0.1}>
              <ProjectImage src={hardware4} alt="Healthcare monitoring prototype with sensor hardware" onOpen={setLightboxImage} />
              <div className="case-hero-stats"><div><strong>6+</strong><span>Health parameters</span></div><div><strong>AD8232</strong><span>ECG sensor</span></div><div><strong>WEB</strong><span>Monitoring dashboard</span></div></div>
            </Reveal>
          </div>
          <div className="case-highlight-strip"><div><span>Health parameters</span><strong>Heart Rate · SpO₂ · Temperature · Height · Weight · ECG</strong></div><div><span>ECG sensor</span><strong>AD8232 Single-Lead ECG</strong></div><div><span>My role</span><strong>ECG Monitoring + Frontend Support</strong></div></div>
        </PageContainer>
      </section>

      <section className="case-section case-glance"><PageContainer><SectionHeading kicker="02 / At a glance" title="A system you can understand at a glance." /><div className="glance-grid">{glanceItems.map(([title, body], index) => <Reveal className="glance-item" delay={index * 0.05} key={title}><span className="case-index">0{index + 1}</span><h3>{title}</h3><p>{body}</p></Reveal>)}</div></PageContainer></section>

      <section className="case-section case-aim"><PageContainer><div className="aim-layout"><SectionHeading kicker="03 / The aim" title="Make health data easier to collect, read, and revisit." /><Reveal><p className="aim-statement">To develop a basic healthcare monitoring system capable of collecting multiple health-related measurements and presenting them through a clear, user-friendly interface.</p><ul className="case-check-list"><li>Collect multiple health parameters</li><li>Monitor ECG signals</li><li>Present readings and records through a web interface</li></ul></Reveal></div></PageContainer></section>

      <section className="case-section case-flow"><PageContainer><SectionHeading kicker="04 / How it works" title="From patient signal to usable record." /><div className="flow-track">{flowItems.map((item, index) => <Reveal className="flow-node" delay={index * 0.04} key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < flowItems.length - 1 && <i aria-hidden="true">↓</i>}</Reveal>)}</div></PageContainer></section>

      <section className="case-section"><PageContainer><SectionHeading kicker="05 / Main features" title="Small parts of one connected workflow." /><div className="feature-grid">{featureItems.map((feature, index) => <Reveal className={`feature-item ${index === 0 ? 'feature-item-wide' : ''}`} delay={index * 0.04} key={feature.number}><span className="case-index">FEATURE {feature.number}</span><h3>{feature.title}</h3><p>{feature.body}</p>{index === 0 && <div className="mini-tags">{['Heart Rate', 'SpO₂', 'Temperature', 'Height', 'Weight', 'ECG'].map((tag) => <span key={tag}>{tag}</span>)}</div>}</Reveal>)}</div></PageContainer></section>

      <section className="case-section case-contribution"><PageContainer><div className="contribution-layout"><Reveal><ProjectImage src={hardware3} alt="Healthcare monitoring prototype wiring and sensor setup" onOpen={setLightboxImage} /></Reveal><Reveal className="contribution-copy" delay={0.08}><SectionHeading kicker="06 / My main contribution" title="ECG monitoring with AD8232" /><p>The AD8232 was used to acquire a single-lead ECG signal by measuring the electrical potential difference captured through ECG electrodes.</p><div className="electrode-grid"><div><strong>AD8232</strong><span>Single-lead ECG sensor</span></div><div><strong>RA</strong><span>Right arm</span></div><div><strong>LA</strong><span>Left arm</span></div><div><strong>RL</strong><span>Reference electrode</span></div></div><p className="case-note">RA and LA capture the electrical potential difference. RL provides the reference connection. The project also explored lead-off detection through LO+ and LO− to monitor electrode connectivity.</p></Reveal></div></PageContainer></section>

      <section className="case-section case-architecture"><PageContainer><SectionHeading kicker="07 / System architecture" title="A clear path through the stack." /><div className="architecture-stack">{[['Sensor layer', 'Health sensors + AD8232'], ['Data acquisition', 'Collect sensor readings'], ['Processing & communication', 'Transfer measurements to the application'], ['Web application', 'HTML + CSS + JavaScript'], ['User', 'Health dashboard + history + PDF reports']].map(([title, body], index) => <Reveal className="architecture-layer" delay={index * 0.05} key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></Reveal>)}</div><p className="architecture-flow">Patient <b>→</b> Sensors <b>→</b> Data Acquisition <b>→</b> Processing / Communication <b>→</b> Web Application <b>→</b> Health Dashboard <b>→</b> History / PDF Report</p></PageContainer></section>

      <section className="case-section case-implementation"><PageContainer><div className="implementation-layout"><Reveal><SectionHeading kicker="08 / Implementation" title="Hardware, signals, and a readable interface." /><p>Multiple sensors feed a microcontroller-based setup, while the web layer gives the collected measurements a clear place to live. The physical build was where the system became tangible.</p><div className="tool-groups"><div><span>Hardware</span><strong>AD8232 ECG Sensor · ECG Electrodes · Microcontroller · Other health sensors</strong></div><div><span>Software</span><strong>HTML · CSS · JavaScript · Web interface · PDF generation</strong></div></div></Reveal><Reveal className="implementation-image" delay={0.1}><ProjectImage src={hardware2} alt="Assembled healthcare monitoring hardware prototype" onOpen={setLightboxImage} /></Reveal></div></PageContainer></section>

      <section className="case-section case-role"><PageContainer><div className="role-layout"><SectionHeading kicker="09 / My role" title="A team project, with a focused ECG contribution." /><Reveal><p className="role-lede">My main individual contribution was the ECG monitoring component using the AD8232 sensor.</p><div className="role-list">{['Understanding the AD8232 working principle', 'Understanding single-lead ECG acquisition', 'RA, LA, and RL electrode connections', 'Electrode placement and stable signal monitoring', 'Exploring the reference electrode and LO+ / LO− lead-off detection'].map((item) => <span key={item}>{item}</span>)}</div><p className="case-note">I also made a small frontend contribution using HTML, CSS, and JavaScript, supporting the display of health-related readings and information.</p></Reveal></div></PageContainer></section>

      <section className="case-section case-learning"><PageContainer><SectionHeading kicker="10 / What I learned" title="The first project where hardware met software." /><div className="learning-grid">{learningItems.map((item, index) => <Reveal className="learning-item" delay={index * 0.04} key={item}><span>{String(index + 1).padStart(2, '0')}</span><h3>{item}</h3><p>{['Understanding real-world biological signals', 'Connecting hardware components', 'Working with hardware and data acquisition', 'Connecting collected data with a web interface', 'Working through hardware and software issues', 'Building a complete system collaboratively'][index]}</p></Reveal>)}</div><p className="learning-close">The project was one of my first experiences connecting physical hardware with software to create a complete working system.</p></PageContainer></section>

      <section className="case-section case-outcome"><PageContainer><div className="outcome-layout"><Reveal><SectionHeading kicker="11 / Project outcome" title="What we built." /><p className="outcome-statement">A working academic prototype demonstrating how multiple health parameters can be collected and presented through a unified monitoring interface.</p><div className="outcome-data"><div><span>Health parameters</span><strong>Heart Rate · SpO₂ · Temperature · Height · Weight · ECG</strong></div><div><span>Data</span><strong>Current readings + historical records</strong></div><div><span>Output</span><strong>Web dashboard + PDF reports</strong></div></div></Reveal><Reveal className="outcome-image" delay={0.1}><ProjectImage src={hardware1} alt="Healthcare dashboard showing collected health readings" onOpen={setLightboxImage} /></Reveal></div><p className="disclaimer">Academic prototype for educational and demonstration purposes; not intended for clinical diagnosis.</p><a className="case-back-link" href="/#projects">← Back to projects</a></PageContainer></section>

      {lightboxImage && <div className="case-lightbox" role="dialog" aria-modal="true" aria-label="Project image preview" onClick={() => setLightboxImage(null)}><button type="button" aria-label="Close image preview" onClick={() => setLightboxImage(null)}>×</button><img src={lightboxImage.src} alt={lightboxImage.alt} /></div>}
    </div>
  )
}

export default HealthcareMonitoringSystem