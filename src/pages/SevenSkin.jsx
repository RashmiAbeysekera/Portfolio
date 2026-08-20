import { useState } from 'react'
import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import useReducedMotion from '../hooks/useReducedMotion'
import skin1 from '../assets/skin1.png'
import skin2 from '../assets/skin2.png'
import skin3 from '../assets/skin3.png'
import skin4 from '../assets/skin4.png'
import skin5 from '../assets/skin5.png'
import skin6Pwa from '../assets/skin6_pwa.png'

const heroBadges = ['MERN Stack', 'PWA', 'PayHere', 'MongoDB', 'Mobile-First']

const atGlanceItems = [
  { title: 'Full-Stack', desc: 'React + Node + Express + MongoDB' },
  { title: 'Installable PWA', desc: 'Offline support + service workers' },
  { title: 'Secure Checkout', desc: 'PayHere integration' },
  { title: 'Mobile-First', desc: 'Responsive shopping' },
]

const journeySteps = [
  { label: 'Discover', tip: 'Browse skincare, bodycare, and haircare categories.' },
  { label: 'Search', tip: 'Live debounced search with autocomplete suggestions.' },
  { label: 'Explore Product', tip: 'Product detail pages with specs and add-to-cart.' },
  { label: 'Add to Cart', tip: 'Slide-out cart with quantity updates and persistence.' },
  { label: 'Checkout', tip: 'Secure checkout with discount code support.' },
  { label: 'PayHere', tip: 'Server-generated payment hash for LKR transactions.' },
  { label: 'Order', tip: 'Confirmation and a polished post-purchase experience.' },
]

const featureGroups = [
  {
    title: 'Shopping',
    features: [
      'Category-based browsing',
      'Product catalog',
      'Product detail pages',
      'Best sellers',
      'Add to cart',
    ],
  },
  {
    title: 'Discovery',
    features: [
      'Live debounced search',
      'Autocomplete suggestions',
      'MongoDB-powered search',
    ],
  },
  {
    title: 'Cart & Checkout',
    features: [
      'Persistent cart',
      'Slide-out cart',
      'Quantity updates',
      'Discount codes',
      'PayHere checkout',
    ],
  },
  {
    title: 'Account & Community',
    features: [
      'Registration',
      'Login',
      'Password reset',
      'Session persistence',
      'Brand reviews',
    ],
  },
]

const techStackGroups = [
  {
    category: 'Frontend',
    techs: ['React 19', 'Vite 8', 'Tailwind CSS 3', 'React Router DOM 7', 'Context API', 'Lucide React'],
  },
  {
    category: 'PWA',
    techs: ['vite-plugin-pwa', 'Workbox', 'Service Workers'],
  },
  {
    category: 'Backend',
    techs: ['Node.js', 'Express 5', 'MongoDB', 'Mongoose 9'],
  },
  {
    category: 'Security & Services',
    techs: ['bcryptjs', 'PayHere', 'Nodemailer', 'Mailgun', 'dotenv'],
  },
  {
    category: 'Tools',
    techs: ['Nodemon', 'ESLint', 'PostCSS', 'Autoprefixer'],
  },
]

const engineeringHighlights = [
  {
    number: '01',
    title: 'Full-Stack Architecture',
    desc: 'React frontend connected to an Express REST API and MongoDB database.',
  },
  {
    number: '02',
    title: 'PWA Architecture',
    desc: 'Vite PWA + Workbox + service worker caching for offline capability.',
  },
  {
    number: '03',
    title: 'Secure Payments',
    desc: 'Server-generated PayHere payment hash to protect merchant secrets.',
  },
  {
    number: '04',
    title: 'Smart State',
    desc: 'Persistent cart using localStorage and Context API.',
  },
  {
    number: '05',
    title: 'Production-Style Data',
    desc: 'MongoDB schemas for Users, Products, and Brand Reviews.',
  },
]

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

function SevenSkin() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const [activeFeature, setActiveFeature] = useState(null)

  return (
    <div className="case-study case-study--sevenskin">
      <section className="case-hero case-hero--warm" id="hero">
        <PageContainer>
          <div className="case-hero-grid">
            <Reveal className="case-hero-copy">
              <p className="section-kicker">04 / Case study</p>
              <h1>
                7°Skin
                <br />
                <span>Full-Stack MERN PWA E-Commerce Platform</span>
              </h1>
              <p className="case-eyebrow">2025–2026</p>
              <p className="case-lede case-lede--compact">
                A production-style luxury skincare e-commerce experience built for a Sri Lankan brand.
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
                src={skin1}
                alt="7°Skin homepage with live search and editorial hero"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-glance">
        <PageContainer>
          <SectionHeading kicker="01 / At a glance" title="Four highlights of the platform." />
          <div className="glance-grid glance-grid--four">
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

      <section className="case-section case-aim">
        <PageContainer>
          <div className="aim-layout aim-layout--split">
            <SectionHeading kicker="02 / What I built" title="A complete skincare shopping experience." />
            <Reveal>
              
              <div className="category-pills">
                <span className="category-pill">Skincare</span>
                <span className="category-pill">Bodycare</span>
                <span className="category-pill">Haircare</span>
              </div>
            </Reveal>
            <Reveal className="aim-visual" delay={0.08}>
              <ProjectImage
                src={skin4}
                alt="7°Skin product catalog and category browsing"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-flow">
        <PageContainer>
          <SectionHeading kicker="03 / User journey" title="From discovery to order." />
          <div className="flow-track flow-track--interactive">
            {journeySteps.map(({ label, tip }, index) => (
              <Reveal className="flow-node flow-node--interactive" delay={index * 0.04} key={label}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{label}</strong>
                <p className="flow-tip">{tip}</p>
                {index < journeySteps.length - 1 && <i aria-hidden="true">↓</i>}
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="case-section">
        <PageContainer>
          <SectionHeading kicker="04 / Core features" title="Grouped by function, built to scale." />
          <div className="feature-groups-grid">
            {featureGroups.map(({ title, features }, index) => (
              <Reveal delay={index * 0.05} key={title}>
                <button
                  type="button"
                  className={`feature-group-card${activeFeature === title ? ' is-active' : ''}`}
                  onClick={() => setActiveFeature(activeFeature === title ? null : title)}
                  aria-expanded={activeFeature === title}
                >
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

      <section className="case-section case-pwa">
        <PageContainer>
          <div className="pwa-layout">
            <Reveal>
              <SectionHeading kicker="05 / Not just a website" title="Progressive Web App architecture." />
              <p>
                7°Skin was built as an installable Progressive Web App, allowing the experience to extend beyond a
                traditional browser-based storefront.
              </p>
              <div className="pwa-highlights">
                <div className="pwa-item">
                  <strong>Installable</strong>
                  <span>Add to Home Screen</span>
                </div>
                <div className="pwa-item">
                  <strong>Offline-Capable</strong>
                  <span>Service worker + cached assets</span>
                </div>
                <div className="pwa-item">
                  <strong>Auto-Update</strong>
                  <span>Automatic app updates</span>
                </div>
              </div>
              <p className="pwa-tech">
                <strong>Built with:</strong> Vite PWA · Workbox · Service Workers · Asset Caching
              </p>
            </Reveal>
            <Reveal className="pwa-image" delay={0.1}>
              <ProjectImage
                src={skin6Pwa}
                alt="7°Skin PWA service worker and offline capability"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-architecture">
        <PageContainer>
          <SectionHeading kicker="06 / Technical architecture" title="A clear path through the stack." />
          <div className="architecture-stack architecture-stack--vertical">
            {[
              ['React + Vite', 'Frontend UI · Component layer'],
              ['Tailwind CSS', 'Responsive styling'],
              ['REST API', 'Express endpoints'],
              ['Node.js + Express', 'Backend server'],
              ['MongoDB + Mongoose', 'Database layer'],
            ].map(([title, body], index) => (
              <Reveal className="architecture-layer" delay={index * 0.05} key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </Reveal>
            ))}
          </div>
          <p className="architecture-flow">
            React <b>→</b> Tailwind CSS <b>→</b> REST API <b>→</b> Express <b>→</b> MongoDB
          </p>
          <div className="architecture-branch">
            <span className="architecture-branch-label">Payment flow</span>
            <p className="architecture-flow architecture-flow--branch">
              React <b>→</b> PayHere Checkout
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-implementation">
        <PageContainer>
          <Reveal>
            <SectionHeading kicker="07 / Live search" title="Fast, debounced product discovery." />
            <p>
              The search experience uses a debounced API call to MongoDB, allowing users to find products quickly
              without overwhelming the backend.
            </p>
            <div className="search-flow">
              <div className="search-step">
                <span>User Types</span>
              </div>
              <i>→</i>
              <div className="search-step">
                <span>300ms Debounce</span>
              </div>
              <i>→</i>
              <div className="search-step">
                <span>API Request</span>
              </div>
              <i>→</i>
              <div className="search-step">
                <span>MongoDB Search</span>
              </div>
              <i>→</i>
              <div className="search-step">
                <span>Results</span>
              </div>
            </div>
            <div className="search-features">
              <div>
                <strong>Debounced search</strong>
                <span>300ms wait before API call</span>
              </div>
              <div>
                <strong>Autocomplete</strong>
                <span>Real-time suggestions</span>
              </div>
              <div>
                <strong>MongoDB regex</strong>
                <span>Flexible product matching</span>
              </div>
              <div>
                <strong>AbortController</strong>
                <span>Cancel stale requests</span>
              </div>
            </div>
          </Reveal>
        </PageContainer>
      </section>

      <section className="case-section">
        <PageContainer>
          <div className="smart-cart-layout">
            <Reveal className="smart-cart-copy">
              <SectionHeading kicker="08 / Smart cart state" title="Persistent across sessions." />
              <p>
                The shopping cart is persisted using localStorage so users can retain their cart across sessions.
              </p>
              <div className="cart-flow">
                <div className="cart-node">Add Product</div>
                <i>→</i>
                <div className="cart-node">Update Quantity</div>
                <i>→</i>
                <div className="cart-node">Remove Item</div>
                <i>→</i>
                <div className="cart-node">Persist Cart</div>
                <i>→</i>
                <div className="cart-node">Checkout</div>
              </div>
              <p className="cart-note">
                <strong>Key insight:</strong> The application handles both MongoDB <code>_id</code> and numeric{' '}
                <code>id</code> formats when matching products.
              </p>
            </Reveal>
            <Reveal className="smart-cart-image" delay={0.1}>
              <ProjectImage
                src={skin5}
                alt="7°Skin product detail page with add-to-cart flow"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-security">
        <PageContainer>
          <div className="security-layout">
            <Reveal>
              <SectionHeading kicker="09 / Secure checkout" title="PayHere payment integration." />
              <p>
                Payment hashes are generated server-side so merchant secrets are not exposed to the client.
              </p>
              <div className="payment-flow">
                <div className="payment-step">
                  <span>Customer</span>
                </div>
                <i>→</i>
                <div className="payment-step">
                  <span>Checkout</span>
                </div>
                <i>→</i>
                <div className="payment-step">
                  <span>Server</span>
                </div>
                <i>→</i>
                <div className="payment-step">
                  <span>PayHere Hash</span>
                </div>
                <i>→</i>
                <div className="payment-step">
                  <span>PayHere</span>
                </div>
              </div>
              <div className="security-highlights">
                <div>
                  <strong>Server-side hash</strong>
                  <span>Merchant secrets protected</span>
                </div>
                <div>
                  <strong>MD5 generation</strong>
                  <span>Secure hash creation</span>
                </div>
                <div>
                  <strong>PayHere API</strong>
                  <span>LKR payment processing</span>
                </div>
              </div>
            </Reveal>
            <Reveal className="security-image" delay={0.1}>
              <ProjectImage
                src={skin2}
                alt="7°Skin registration flow with welcome discount code"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-brand">
        <PageContainer>
          <SectionHeading kicker="10 / Brand & UX" title="Designed as a brand, not just a store." />
          <div className="brand-layout">
            <Reveal>
              <p>
                The interface uses a warm editorial visual language inspired by Sri Lankan heritage, combining luxury
                skincare aesthetics with a mobile-first shopping experience.
              </p>
              <div className="design-principles">
                <div className="principle-item">
                  <span className="principle-label">Warm Palette</span>
                  <div className="color-swatch" style={{ backgroundColor: '#fff5e1' }} />
                  <span>#fff5e1</span>
                </div>
                <div className="principle-item">
                  <span className="principle-label">Warm Palette</span>
                  <div className="color-swatch" style={{ backgroundColor: '#efe1c7' }} />
                  <span>#efe1c7</span>
                </div>
                <div className="principle-item">
                  <span className="principle-label">Typography</span>
                  <strong>Italiana</strong>
                </div>
                <div className="principle-item">
                  <span className="principle-label">Layout</span>
                  <strong>Editorial</strong>
                </div>
                <div className="principle-item">
                  <span className="principle-label">Inspiration</span>
                  <strong>Sri Lankan</strong>
                </div>
              </div>
            </Reveal>
            <Reveal className="brand-image" delay={0.1}>
              <ProjectImage
                src={skin3}
                alt="7°Skin sign-in page with editorial brand imagery"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-tech-stack">
        <PageContainer>
          <SectionHeading kicker="11 / Technology stack" title="Tools chosen for each layer." />
          <div className="tech-groups">
            {techStackGroups.map(({ category, techs }, index) => (
              <Reveal className="tech-group" delay={index * 0.04} key={category}>
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

      <section className="case-section case-database">
        <PageContainer>
          <SectionHeading kicker="12 / Database & backend" title="Structured data behind the storefront." />
          <div className="database-layout">
            <Reveal>
              <div className="database-models">
                <div className="database-model">Users</div>
                <div className="database-model">Products</div>
                <div className="database-model">Brand Reviews</div>
                <i aria-hidden="true">↓</i>
                <div className="database-model database-model--primary">MongoDB</div>
              </div>
              <p className="architecture-flow database-flow">
                React <b>→</b> REST API <b>→</b> Express <b>→</b> Mongoose <b>→</b> MongoDB
              </p>
              <ul className="database-points">
                <li>Product catalog data and category organization</li>
                <li>User accounts with authentication</li>
                <li>Brand reviews and community content</li>
                <li>REST API endpoints for the React frontend</li>
              </ul>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-highlights">
        <PageContainer>
          <SectionHeading kicker="13 / Engineering highlights" title="What makes this project complete." />
          <div className="highlights-grid">
            {engineeringHighlights.map((highlight, index) => (
              <Reveal className="highlight-card" delay={index * 0.04} key={highlight.number}>
                <span className="highlight-number">{highlight.number}</span>
                <h3>{highlight.title}</h3>
                <p>{highlight.desc}</p>
              </Reveal>
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="case-section case-outcome">
        <PageContainer>
          <div className="outcome-layout">
            <Reveal>
              <SectionHeading kicker="14 / Project outcome" title="What this demonstrates." />
              <div className="outcome-grid">
                <div className="outcome-item">
                  <span>Full-Stack Development</span>
                  <strong>Frontend + Backend + Database</strong>
                </div>
                <div className="outcome-item">
                  <span>Real E-Commerce Flow</span>
                  <strong>Catalog → Cart → Checkout</strong>
                </div>
                <div className="outcome-item">
                  <span>PWA Development</span>
                  <strong>Installable + Offline-Capable</strong>
                </div>
                <div className="outcome-item">
                  <span>Sri Lankan Market Focus</span>
                  <strong>LKR + PayHere + Local Brand Identity</strong>
                </div>
              </div>
              <p className="outcome-statement">
                7°Skin demonstrates an end-to-end approach to building a modern e-commerce product — combining
                interface design, backend architecture, database modeling, authentication, payment integration, and
                PWA capabilities.
              </p>
            </Reveal>
          </div>
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

export default SevenSkin
