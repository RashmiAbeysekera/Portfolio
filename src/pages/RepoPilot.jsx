import { Fragment, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import useReducedMotion from '../hooks/useReducedMotion'
import repoCover from '../assets/repo_cover.png'
import repoFiles from '../assets/repo_files.png'
import repoChunks from '../assets/repo_chunks.png'
import repoVector from '../assets/repo_vector.png'
import repoSearch from '../assets/repo_search.png'
import repoAgent from '../assets/repo_agent.png'

const heroBadges = [
  'Solo Project',
  'FastAPI Backend',
  'End-to-End RAG',
  'PostgreSQL + pgvector',
  'Gemini AI',
  'React + Vite',
  'Docker Containerized',
]

const atGlanceItems = [
  {
    title: 'Natural-Language Exploration',
    desc: 'Query any public GitHub repo in plain English to understand architecture, APIs, workflows, and database models.',
  },
  {
    title: 'End-to-End RAG Pipeline',
    desc: 'Ingests code, filters noise, creates balanced chunks, computes embeddings, and generates source-grounded answers.',
  },
  {
    title: 'Semantic pgvector Search',
    desc: 'Vector similarity search matches developer intent, finding code even when keywords differ (e.g. auth vs login).',
  },
  {
    title: 'Controlled Agentic Investigation',
    desc: 'Autonomous multi-step investigation using restricted read-only tools to safely inspect cross-file dependencies.',
  },
  {
    title: 'Incremental Webhook Sync',
    desc: 'Event-driven synchronization via GitHub Webhooks & n8n updating only modified files without full re-indexing.',
  },
  {
    title: 'Production Engineering & Docker',
    desc: 'HMAC-SHA256 signature verification, repository isolation, bounded retries, and reproducible Docker deployment.',
  },
]

const syncFlowSteps = [
  'GitHub Push Event',
  'HMAC-SHA256 Webhook',
  'n8n Workflow Automation',
  'FastAPI Sync Endpoint',
  'Process Changed Files Only',
  'Incremental pgvector Update',
]

const engineeringDecisions = [
  {
    tag: 'Architectural Choice',
    title: 'Why RAG Instead of Fine-Tuning?',
    rationale:
      'Repositories change frequently. Retraining a model on every commit is slow and cost-prohibitive. RAG decouples knowledge updates from model weights, allowing instantaneous re-indexing without retraining.',
  },
  {
    tag: 'Efficiency & Cost',
    title: 'Why Local sentence-transformer Embeddings?',
    rationale:
      'Local embeddings eliminate per-token external API costs, reduce rate-limiting risks, and allow predictable vector generation performance directly on the backend.',
  },
  {
    tag: 'Data Architecture',
    title: 'Why PostgreSQL + pgvector?',
    rationale:
      'Storing structured repo metadata, file hierarchies, code chunks, and high-dimensional vector embeddings in one unified relational database eliminates the architectural overhead of separate vector DBs.',
  },
  {
    tag: 'Integration Pattern',
    title: 'Why Webhooks + n8n Instead of Polling?',
    rationale:
      'Webhooks provide event-driven updates. Rather than polling GitHub continuously, push notifications trigger n8n workflows that feed the FastAPI synchronization endpoint only when changes occur.',
  },
  {
    tag: 'Deployment Strategy',
    title: 'Why Docker Containerization?',
    rationale:
      'Docker defines a consistent, isolated Python runtime environment, encapsulating dependencies and ensuring reproducible execution between development, testing, and production.',
  },
  {
    tag: 'Safety & Security',
    title: 'Why Controlled Read-Only Agent Tools?',
    rationale:
      'Agentic investigation workflows need strict boundaries. Tools are restricted to read-only search and inspection operations, ensuring zero risk of unintended file modification or arbitrary command execution.',
  },
]

const techStackGroups = [
  { category: 'Frontend', techs: ['React', 'Vite', 'Tailwind CSS', 'Lucide Icons'] },
  { category: 'Backend', techs: ['Python', 'FastAPI', 'Uvicorn', 'Pydantic', 'REST APIs'] },
  { category: 'AI & Retrieval', techs: ['RAG Pipeline', 'sentence-transformers', 'Gemini API', 'Agentic Workflows'] },
  { category: 'Database', techs: ['PostgreSQL', 'Supabase', 'pgvector (Vector Store)'] },
  { category: 'Workflow & Integration', techs: ['GitHub REST API', 'GitHub Webhooks (HMAC-SHA256)', 'n8n Automation'] },
  { category: 'DevOps & Testing', techs: ['Docker', 'CI/CD Pipelines', 'Automated Testing', 'Structured Logging'] },
]

const outcomeHighlights = [
  '100% Solo Engineering Project',
  'End-to-End RAG Architecture',
  'Grounded Code Explanations with Source Citations',
  'High-Accuracy pgvector Semantic Search',
  'Safe Read-Only Agentic Tool Calling',
  'Automated Event-Driven Incremental Ingestion',
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

function RepoPilot() {
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
    <div className="case-study case-study--repopilot">
      {/* Hero Section */}
      <section className="case-hero" id="hero">
        <PageContainer>
          <div className="case-hero-grid">
            <Reveal className="case-hero-copy">
              <p className="section-kicker">01 / Featured Project</p>
              <h1>
                RepoPilot
                <br />
                <span>AI-Powered Repository Intelligence Assistant</span>
              </h1>
              <p className="case-eyebrow">INDIVIDUAL PROJECT · FULL-STACK AI ENGINEERING · 2026</p>
              <p className="case-lede case-lede--compact">
                An AI-powered software engineering assistant designed to help developers explore and understand
                unfamiliar GitHub codebases through natural-language interaction. Combines an end-to-end RAG pipeline,
                local vector embeddings, PostgreSQL/pgvector semantic search, grounded Gemini explanations, safe
                agentic tool calling, and event-driven GitHub synchronization.
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
                  href="https://repopilot-green.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore Live Demo
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="hero-button hero-button-secondary"
                  href="https://github.com/RashmiAbeysekera/RepoPilot"
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
                src={repoCover}
                alt="RepoPilot application dashboard and repository explorer"
                onOpen={setLightboxImage}
              />
              <div className="case-hero-stats">
                <div>
                  <strong>100%</strong>
                  <span>Solo Built End-to-End</span>
                </div>
                <div>
                  <strong>pgvector</strong>
                  <span>Semantic Vector Store</span>
                </div>
                <div>
                  <strong>Event-Driven</strong>
                  <span>n8n + Webhook Sync</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="case-highlight-strip">
            <div>
              <span>Core Architecture</span>
              <strong>End-to-End RAG + Controlled Agentic Investigation</strong>
            </div>
            <div>
              <span>Project Scope</span>
              <strong>Individual Full-Stack AI Project</strong>
            </div>
            <div>
              <span>Tech Stack</span>
              <strong>FastAPI · pgvector · Gemini API · React · Docker</strong>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 01 / At a Glance */}
      <section className="case-section case-glance">
        <PageContainer>
          <SectionHeading kicker="01 / At a glance" title="Built to solve the unfamiliar codebase challenge." />
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

      {/* 02 / The Challenge & Solution */}
      <section className="case-section case-problem-solution">
        <PageContainer>
          <SectionHeading kicker="02 / The challenge" title="From fragmented reading to immediate code understanding." />
          <div className="problem-solution-grid">
            <Reveal className="problem-solution-card">
              <span className="problem-solution-label">The Problem</span>
              <p>
                Developers onboarding onto an unfamiliar repository spend hours navigating through nested folders,
                manually locating feature implementations, and tracing dependencies. Traditional keyword search misses
                semantic meaning: searching for &ldquo;login&rdquo; fails to match authentication, JWT middleware, or session
                handlers.
              </p>
            </Reveal>
            <div className="problem-solution-arrow" aria-hidden="true">→</div>
            <Reveal className="problem-solution-card problem-solution-card--solution" delay={0.08}>
              <span className="problem-solution-label">RepoPilot Solution</span>
              <p>
                RepoPilot pairs vector similarity search with grounded Retrieval-Augmented Generation and read-only
                agentic investigation. Developers can ask high-level questions and receive accurate explanations backed
                by verified source citations and code snippets directly from the active codebase.
              </p>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* 03 / Repository Ingestion & File Filtering */}
      <section className="case-section">
        <PageContainer>
          <SectionHeading kicker="03 / Repository Ingestion" title="Smart file filtering and structure discovery." />
          <div className="repopilot-showcase-grid">
            <Reveal className="repopilot-showcase-copy">
              <p className="case-eyebrow">AUTOMATED REPOSITORY INGESTION</p>
              <h3 style={{ margin: '0.5rem 0 1rem', color: 'var(--color-ink)', fontSize: '1.4rem' }}>
                Fetching, validating, and filtering codebase assets.
              </h3>
              <p style={{ color: 'var(--color-ink-muted)', lineHeight: '1.7', fontSize: '0.9rem' }}>
                RepoPilot connects with GitHub&apos;s REST API to discover tree hierarchies and retrieve raw file contents.
                To maintain high retrieval precision and conserve token bandwidth, the ingestion engine automatically
                filters out non-code noise before processing.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Intelligent Noise Filtering</strong>
                  <p>Excludes binary assets, lockfiles, minified bundles, and oversized files exceeding safe size thresholds.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Repository Isolation</strong>
                  <p>Associates all indexed data with unique repository IDs, preventing cross-repo contamination during retrieval.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Metadata Preservation</strong>
                  <p>Retains complete directory paths, file extensions, and commit hashes for exact source traceability.</p>
                </div>
              </div>
            </Reveal>
            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={repoFiles}
                alt="RepoPilot file ingestion and repository structure exploration interface"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* 04 / Semantic Code Chunking */}
      <section className="case-section">
        <PageContainer>
          <SectionHeading kicker="04 / RAG Pipeline" title="Semantic chunking with contextual awareness." />
          <div className="repopilot-showcase-grid repopilot-showcase-grid--reverse">
            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={repoChunks}
                alt="Code chunking and splitting interface in RepoPilot"
                onOpen={setLightboxImage}
              />
            </Reveal>
            <Reveal className="repopilot-showcase-copy">
              <p className="case-eyebrow">CHUNK-LEVEL GRANULARITY</p>
              <h3 style={{ margin: '0.5rem 0 1rem', color: 'var(--color-ink)', fontSize: '1.4rem' }}>
                Balancing retrieval precision against surrounding code context.
              </h3>
              <p style={{ color: 'var(--color-ink-muted)', lineHeight: '1.7', fontSize: '0.9rem' }}>
                Naive text splitting breaks code syntax and causes hallucinations. RepoPilot splits source code into
                structured chunks that preserve structural context—such as function signatures, class boundaries, and
                module imports—so that the retrieval engine can surface pinpoint matches.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Syntax-Aware Boundaries</strong>
                  <p>Maintains code readability and contextual completeness for downstream LLM comprehension.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Traceable Line Ranges</strong>
                  <p>Each chunk records its source path and start/end line numbers to enable exact citation links in the UI.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Optimized Context Window</strong>
                  <p>Fits high-value segments into prompts without diluting the LLM with unnecessary boilerplate.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* 05 / Vector Embeddings & pgvector Storage */}
      <section className="case-section">
        <PageContainer>
          <SectionHeading kicker="05 / Vector Store" title="Local embeddings meet PostgreSQL with pgvector." />
          <div className="repopilot-showcase-grid">
            <Reveal className="repopilot-showcase-copy">
              <p className="case-eyebrow">VECTOR STORAGE ARCHITECTURE</p>
              <h3 style={{ margin: '0.5rem 0 1rem', color: 'var(--color-ink)', fontSize: '1.4rem' }}>
                Unified relational storage and high-speed similarity search.
              </h3>
              <p style={{ color: 'var(--color-ink-muted)', lineHeight: '1.7', fontSize: '0.9rem' }}>
                Rather than relying on third-party vector databases, RepoPilot harnesses PostgreSQL paired with the
                pgvector extension. Vector embeddings are generated locally using a sentence-transformers model,
                eliminating recurring API token expenses and vendor lock-in.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Unified Relational & Vector Data</strong>
                  <p>Repositories, file metadata, and high-dimensional vectors coexist in a single transactional database.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Local sentence-transformers</strong>
                  <p>Computes dense vector representations with zero external API fees and predictable latency.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Repository-Scoped Indexing</strong>
                  <p>Queries enforce strict SQL filters by repository ID prior to cosine similarity distance calculation.</p>
                </div>
              </div>
            </Reveal>
            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={repoVector}
                alt="PostgreSQL and pgvector database schema and vector embedding records"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* 06 / Semantic Code Search in Action */}
      <section className="case-section">
        <PageContainer>
          <SectionHeading kicker="06 / Semantic Search" title="Finding code by meaning, not just keywords." />
          <div className="repopilot-showcase-grid repopilot-showcase-grid--reverse">
            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={repoSearch}
                alt="RepoPilot semantic search interface querying concepts and displaying similarity matches"
                onOpen={setLightboxImage}
              />
            </Reveal>
            <Reveal className="repopilot-showcase-copy">
              <p className="case-eyebrow">INTENT-DRIVEN DISCOVERY</p>
              <h3 style={{ margin: '0.5rem 0 1rem', color: 'var(--color-ink)', fontSize: '1.4rem' }}>
                Bridging conceptual intent with concrete code implementation.
              </h3>
              <p style={{ color: 'var(--color-ink-muted)', lineHeight: '1.7', fontSize: '0.9rem' }}>
                Developers often know what a feature accomplishes conceptually, but not the specific variable or method
                names used. Vector similarity search retrieves semantically related files and functions even when the
                query wording has zero lexical overlap with the codebase.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Synonym & Concept Matching</strong>
                  <p>Queries for &ldquo;How do users log in?&rdquo; effortlessly return auth middleware, JWT validators, and sign-in routes.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Cosine Similarity Thresholds</strong>
                  <p>Ensures only contextually relevant chunks enter the LLM context, suppressing irrelevant noise.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Instant Relevance Scoring</strong>
                  <p>Presents retrieved chunks with confidence scores and file locations for transparent verification.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* 07 / Controlled Agentic Investigation */}
      <section className="case-section">
        <PageContainer>
          <SectionHeading kicker="07 / Safe Agentic AI" title="Iterative reasoning with strictly read-only tools." />
          <div className="repopilot-showcase-grid">
            <Reveal className="repopilot-showcase-copy">
              <p className="case-eyebrow">CONTROLLED AGENTIC WORKFLOW</p>
              <h3 style={{ margin: '0.5rem 0 1rem', color: 'var(--color-ink)', fontSize: '1.4rem' }}>
                Multi-hop investigation for complex architectural questions.
              </h3>
              <p style={{ color: 'var(--color-ink-muted)', lineHeight: '1.7', fontSize: '0.9rem' }}>
                Complex questions like &ldquo;How does the frontend communicate with the database?&rdquo; cannot be answered
                by a single retrieval step. RepoPilot equips the AI assistant with controlled, read-only tools to
                iteratively search the index, inspect source files, and traverse component relationships.
              </p>
              <div className="repopilot-feature-list">
                <div className="repopilot-feature-item">
                  <strong>Controlled Tool Calling</strong>
                  <p>The agent uses tools such as repo_search, file_inspect, and structure_explore to gather cross-file evidence.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Strict Read-Only Safety</strong>
                  <p>Agent tools are strictly sandboxed against write, delete, or arbitrary code execution actions.</p>
                </div>
                <div className="repopilot-feature-item">
                  <strong>Source Traceability & Citations</strong>
                  <p>Responses include clickable file references, enabling engineers to independently verify explanations.</p>
                </div>
              </div>
            </Reveal>
            <Reveal className="repopilot-showcase-image" delay={0.1}>
              <ProjectImage
                src={repoAgent}
                alt="Agentic investigation tool trace and multi-step reasoning response in RepoPilot"
                onOpen={setLightboxImage}
              />
            </Reveal>
          </div>
        </PageContainer>
      </section>

      {/* 08 / Event-Driven Synchronization & Reliability */}
      <section className="case-section case-flow">
        <PageContainer>
          <SectionHeading kicker="08 / Event-Driven Sync" title="Continuous synchronization via webhooks and n8n." />
          <p style={{ maxWidth: '42rem', color: 'var(--color-ink-muted)', lineHeight: '1.7', marginBottom: '2.5rem' }}>
            Instead of re-indexing an entire repository whenever code changes, RepoPilot utilizes GitHub Webhooks and
            n8n workflow automation to synchronize incrementally—processing only added, modified, or deleted files.
          </p>

          <div className="flow-track">
            {syncFlowSteps.map((step, index) => (
              <Reveal className="flow-node" delay={index * 0.04} key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{step}</strong>
                {index < syncFlowSteps.length - 1 && <i aria-hidden="true">↓</i>}
              </Reveal>
            ))}
          </div>

          <div className="architecture-branch" style={{ marginTop: '3rem' }}>
            <span className="architecture-branch-label">Key Reliability Engineering Highlight</span>
            <p className="architecture-flow architecture-flow--branch">
              A major reliability achievement was distinguishing between genuine file deletions and external GitHub
              API or network failures. Failed ingestion events preserve existing index data, and file deletion is
              executed only after definitive confirmation, preventing catastrophic accidental data loss.
            </p>
          </div>
        </PageContainer>
      </section>

      {/* 09 / Architecture Decisions & Tech Stack */}
      <section className="case-section">
        <PageContainer>
          <SectionHeading kicker="09 / Architecture Decisions" title="Deliberate engineering tradeoffs." />
          <div className="repopilot-decision-grid">
            {engineeringDecisions.map(({ tag, title, rationale }, index) => (
              <Reveal className="repopilot-decision-card" delay={index * 0.04} key={title}>
                <span className="repopilot-decision-tag">{tag}</span>
                <h3>{title}</h3>
                <p>{rationale}</p>
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: '4rem' }}>
            <h3 style={{ margin: '0 0 1.5rem', color: 'var(--color-ink)', fontSize: '1.2rem' }}>
              Technologies & Infrastructure
            </h3>
            <div className="tech-groups">
              {techStackGroups.map(({ category, techs }) => (
                <div key={category} className="tech-group">
                  <h3>{category}</h3>
                  <div className="tech-pills">
                    {techs.map((tech) => (
                      <span key={tech} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* 10 / Project Outcome & Action */}
      <section className="case-section case-outcome">
        <PageContainer>
          <div className="outcome-layout">
            <Reveal>
              <SectionHeading kicker="10 / Project outcome" title="A comprehensive full-stack AI engineering system." />
              <div className="outcome-plus-row">
                {outcomeHighlights.map((highlight, index) => (
                  <span key={highlight} className="outcome-chip-group">
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
                RepoPilot demonstrates practical full-stack expertise across AI engineering, RAG pipelines, vector
                similarity search, event-driven workflow automation, robust error recovery, and production containerization.
              </p>

              <div className="repopilot-action-row" style={{ marginTop: '2.5rem' }}>
                <a
                  className="hero-button hero-button-primary"
                  href="https://repopilot-green.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Launch Live Demo
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="hero-button hero-button-secondary"
                  href="https://github.com/RashmiAbeysekera/RepoPilot"
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
                src={repoCover}
                alt="RepoPilot complete system overview screenshot"
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

export default RepoPilot
