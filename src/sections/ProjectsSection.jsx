import { motion } from 'motion/react'
import PageContainer from '../components/layout/PageContainer'
import { heroReveal, heroTransition } from '../animations/motionPresets'
import { projects } from '../data/projects'
import useReducedMotion from '../hooks/useReducedMotion'

function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion()
  const initial = prefersReducedMotion ? 'visible' : 'hidden'

  return (
    <section className="portfolio-section" id="projects" aria-labelledby="projects-title">
      <PageContainer>
        <div className="section-intro section-intro-projects">
          <motion.p
            className="section-kicker"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={heroReveal}
            transition={heroTransition}
          >
            02 / Selected projects
          </motion.p>
          <motion.h2
            className="section-title"
            id="projects-title"
            initial={initial}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={heroReveal}
            transition={{ ...heroTransition, delay: 0.08 }}
          >
            Practical systems, built to solve real problems.
          </motion.h2>
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              className={`project-item${project.href ? ' project-item--linked' : ''}${project.githubUrl ? ' project-item--has-github' : ''}`}
              key={project.title}
              initial={initial}
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={heroReveal}
              transition={{ ...heroTransition, delay: index * 0.08 }}
              whileHover={prefersReducedMotion ? undefined : { y: -4 }}
            >
              {project.href ? (
                <a
                  className="project-item-stretch-link"
                  href={project.href}
                  aria-label={`${project.linkLabel ?? 'View project'}: ${project.title}`}
                />
              ) : null}
              {project.githubUrl ? (
                <a
                  className="project-github-link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.githubLabel ?? 'View source code'} for ${project.title} on GitHub`}
                  onClick={(event) => event.stopPropagation()}
                >
                  <svg viewBox="0 0 19 19" aria-hidden="true" focusable="false">
                    <use href="/icons.svg#github-icon" />
                  </svg>
                </a>
              ) : null}
              <div className="project-index">{project.number}</div>
              <div className="project-body">
                <div className="project-heading-row">
                  <div>
                    <p className="project-type">{project.type}</p>
                    <h3 className="project-title">{project.title}</h3>
                  </div>
                  {project.href ? (
                    <a
                      className="project-link"
                      href={project.href}
                      tabIndex={-1}
                      aria-hidden="true"
                    >
                      {project.linkLabel ?? 'View project'}
                    </a>
                  ) : null}
                </div>
                <p className="project-summary">{project.summary}</p>
                <p className="project-contribution">
                  <span>My contribution</span>
                  {project.contribution}
                </p>
                <div className="project-feature-row">
                  {project.features.map((feature) => (
                    <span key={feature}>{feature}</span>
                  ))}
                </div>
                <div className="project-tech-row" aria-label="Technologies used">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </PageContainer>
    </section>
  )
}

export default ProjectsSection
