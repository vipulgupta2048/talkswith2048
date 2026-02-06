---
title: "Career Highlights - Vipul Gupta"
description: "Vipul Gupta (vipulgupta2048) career highlights: Leviathan HiL testing, documentation leadership, GitHub Actions migration, and community building impact."
sidebar_label: "Career Highlights"
sidebar_position: 1
---

# Career Highlights

{/* Hero Section */}
<div style={{
  background: 'linear-gradient(135deg, #0f2744 0%, #1e3a5f 50%, #16213e 100%)',
  borderRadius: '20px',
  padding: 'clamp(2rem, 5vw, 3.5rem)',
  marginBottom: '3rem',
  position: 'relative',
  overflow: 'hidden'
}}>
  <div style={{
    position: 'absolute',
    top: '-30%',
    right: '-5%',
    width: '450px',
    height: '450px',
    background: 'radial-gradient(circle, rgba(184, 251, 60, 0.12) 0%, transparent 60%)',
    borderRadius: '50%',
    pointerEvents: 'none'
  }}></div>

  <div style={{position: 'relative', zIndex: 1}}>
    <p style={{
      color: 'rgba(184, 251, 60, 0.9)',
      textTransform: 'uppercase',
      letterSpacing: '4px',
      fontSize: '0.7rem',
      fontWeight: '700',
      marginBottom: '1rem'
    }}>Case Studies</p>

    <h2 style={{
      color: 'white',
      fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
      fontWeight: '900',
      lineHeight: '1.1',
      marginBottom: '1.5rem',
      maxWidth: '700px',
      letterSpacing: '-0.02em'
    }}>Projects that moved the <span style={{color: '#b8fb3c'}}>needle</span></h2>

    <p style={{
      color: 'rgba(255,255,255,0.8)',
      fontSize: '1.05rem',
      lineHeight: '1.7',
      maxWidth: '620px',
      marginBottom: '0'
    }}>The stories behind the work—technical challenges, ownership journeys, and the impact that resulted. These aren't just projects; they're problems I lived with for years.</p>
  </div>
</div>

---

{/* Case Study 1: Leviathan */}
<div style={{
  background: 'var(--ifm-background-surface-color)',
  borderRadius: '20px',
  overflow: 'hidden',
  border: '2px solid #b8fb3c',
  marginBottom: '3rem',
  position: 'relative'
}}>
  <div style={{
    position: 'absolute', top: '1.5rem', right: '1.5rem',
    background: '#b8fb3c', color: '#0f2744',
    padding: '0.4rem 1rem', borderRadius: '20px',
    fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px'
  }}>🏆 Flagship Project</div>

  <div style={{
    background: 'linear-gradient(135deg, #0f2744 0%, #1a1a2e 100%)',
    padding: '2.5rem',
    color: 'white'
  }}>
    <div style={{marginBottom: '1rem'}}>
      <span style={{
        fontSize: '0.75rem', color: 'rgba(184, 251, 60, 0.8)',
        textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600'
      }}>Infrastructure · 2020-Present · 4+ Years</span>
    </div>
    <h2 style={{
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      fontWeight: '800',
      margin: '0',
      color: 'white',
      lineHeight: '1.2'
    }}>Leviathan: Hardware-in-the-Loop Testing</h2>
    <p style={{
      color: 'rgba(255,255,255,0.7)',
      fontSize: '1rem',
      marginTop: '0.75rem',
      marginBottom: '0'
    }}>The first open-source HiL testing system for IoT. Automated embedded OS testing on physical devices at scale.</p>
  </div>

  <div style={{padding: '2.5rem'}}>
    {/* Impact Metrics */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '1rem',
      marginBottom: '2rem'
    }}>
      {[
        { value: '6 weeks → 3 hrs', label: 'Release Cycle' },
        { value: '2000+', label: 'Weekly Tests' },
        { value: '200+', label: 'Device Types' },
        { value: '$250K', label: 'Yearly Savings' }
      ].map((metric, i) => (
        <div key={i} style={{
          textAlign: 'center',
          padding: '1rem 0.5rem',
          background: 'var(--ifm-color-emphasis-100)',
          borderRadius: '12px'
        }}>
          <div style={{fontSize: '1.1rem', fontWeight: '800', color: 'var(--ifm-color-primary)', lineHeight: '1.2'}}>{metric.value}</div>
          <div style={{fontSize: '0.65rem', color: 'var(--ifm-color-emphasis-600)', marginTop: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.5px'}}>{metric.label}</div>
        </div>
      ))}
    </div>

    {/* The Story */}
    <div style={{marginBottom: '2rem'}}>
      <h4 style={{fontSize: '1rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-800)'}}>The Story</h4>
      <p style={{color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.8', marginBottom: '1rem'}}>
        <strong>The crisis:</strong> In my 3rd month at Balena, we received a silent deadline from the CEO—give up on hardware testing or start fresh. The senior developer had just left. The project was in shambles: confused product decisions, undocumented code, mountains of technical debt.
      </p>
      <p style={{color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.8', marginBottom: '1rem'}}>
        <strong>What I did:</strong> I took ownership of everything—software, hardware, strategy, planning, support, CI/CD, reliability, tests, and documentation. Ran experiments, talked to customers, consulted ex-employees, researched market demands. Documented it all, crafted a new MVP spec, and convinced management to build Autokit—a completely off-the-shelf test jig replacing expensive proprietary hardware.
      </p>
      <p style={{color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.8'}}>
        <strong>The result:</strong> 10 months later, we released support for Raspberry Pi 3. Then the entire Pi family. The team could now run automated tests for each PR. What took weeks of manual testing became hours of automated validation.
      </p>
    </div>

    {/* Technical Challenges */}
    <div style={{
      background: 'var(--ifm-color-emphasis-100)',
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '2rem'
    }}>
      <h4 style={{fontSize: '0.9rem', fontWeight: '700', marginBottom: '1rem', color: 'var(--ifm-color-emphasis-800)'}}>Technical Challenges Conquered</h4>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
        <div>
          <span style={{fontSize: '1.25rem'}}>🔧</span>
          <p style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)', marginTop: '0.5rem', marginBottom: '0'}}>
            <strong>Hardware Design:</strong> Built Autokit—an open-source HiL testing device that can power on, flash, and execute commands on embedded devices
          </p>
        </div>
        <div>
          <span style={{fontSize: '1.25rem'}}>💾</span>
          <p style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)', marginTop: '0.5rem', marginBottom: '0'}}>
            <strong>Device Firmware:</strong> First time writing firmware to interact with Autokit's components
          </p>
        </div>
        <div>
          <span style={{fontSize: '1.25rem'}}>🧪</span>
          <p style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-700)', marginTop: '0.5rem', marginBottom: '0'}}>
            <strong>Test Framework:</strong> Built queue management and worker discovery across distributed locations
          </p>
        </div>
      </div>
    </div>

    {/* Links */}
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
      <a href="https://blog.balena.io/from-pr-to-release-os-testing-at-balena/" target="_blank" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.6rem 1.25rem', background: '#0f2744', color: 'white',
        borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none'
      }}>📖 Read the Full Story</a>
      <a href="https://github.com/balena-os/leviathan" target="_blank" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.6rem 1.25rem', border: '2px solid var(--ifm-color-emphasis-300)',
        color: 'var(--ifm-color-emphasis-700)', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none'
      }}>GitHub</a>
      <a href="https://blog.balena.io/maximizing-resources-in-the-chip-shortage-how-balenaos-testing-went-virtual/" target="_blank" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.6rem 1.25rem', border: '2px solid var(--ifm-color-emphasis-300)',
        color: 'var(--ifm-color-emphasis-700)', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none'
      }}>Chip Shortage Story</a>
    </div>
  </div>
</div>

---

{/* Case Study 2: GitHub Actions Migration */}
<div style={{
  background: 'var(--ifm-background-surface-color)',
  borderRadius: '20px',
  overflow: 'hidden',
  border: '1px solid var(--ifm-color-emphasis-200)',
  marginBottom: '3rem'
}}>
  <div style={{
    background: 'linear-gradient(90deg, #24292f 0%, #0d1117 100%)',
    height: '4px'
  }}></div>

  <div style={{padding: '2.5rem'}}>
    <div style={{marginBottom: '1rem'}}>
      <span style={{
        fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-500)',
        textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600'
      }}>DevOps · 2024 · 6 Months</span>
    </div>
    <h2 style={{
      fontSize: 'clamp(1.4rem, 3.5vw, 1.75rem)',
      fontWeight: '800',
      margin: '0 0 1rem',
      lineHeight: '1.2'
    }}>Jenkins to GitHub Actions Migration</h2>

    <p style={{color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.8', marginBottom: '1.5rem'}}>
      Spearheaded the migration of Balena's entire balenaOS build-test-deploy CI/CD pipelines from Jenkins to GitHub Actions. Reduced Hetzner costs significantly while improving pipeline reliability and easing engineering pain points across the organization.
    </p>

    {/* Impact */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      marginBottom: '1.5rem'
    }}>
      {[
        { value: '100+', label: 'Pipelines Migrated' },
        { value: '40%', label: 'Cost Reduction' },
        { value: '3x', label: 'Faster Builds' }
      ].map((metric, i) => (
        <div key={i} style={{
          textAlign: 'center',
          padding: '1rem',
          background: 'var(--ifm-color-emphasis-100)',
          borderRadius: '10px'
        }}>
          <div style={{fontSize: '1.25rem', fontWeight: '800', color: 'var(--ifm-color-primary)'}}>{metric.value}</div>
          <div style={{fontSize: '0.7rem', color: 'var(--ifm-color-emphasis-600)', marginTop: '0.25rem', textTransform: 'uppercase'}}>{metric.label}</div>
        </div>
      ))}
    </div>

    <a href="https://www.balena.io/blog/migrating-the-entire-balenaos-ci-cd-to-github-actions/" target="_blank" style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
      padding: '0.6rem 1.25rem', background: '#24292f', color: 'white',
      borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none'
    }}>📖 Read the Migration Story</a>
  </div>
</div>

---

{/* Case Study 3: Documentation Leadership */}
<div style={{
  background: 'var(--ifm-background-surface-color)',
  borderRadius: '20px',
  overflow: 'hidden',
  border: '1px solid var(--ifm-color-emphasis-200)',
  marginBottom: '3rem'
}}>
  <div style={{
    background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
    height: '4px'
  }}></div>

  <div style={{padding: '2.5rem'}}>
    <div style={{marginBottom: '1rem'}}>
      <span style={{
        fontSize: '0.75rem', color: 'var(--ifm-color-emphasis-500)',
        textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '600'
      }}>Developer Education · 2022-Present</span>
    </div>
    <h2 style={{
      fontSize: 'clamp(1.4rem, 3.5vw, 1.75rem)',
      fontWeight: '800',
      margin: '0 0 1rem',
      lineHeight: '1.2'
    }}>Documentation Leadership & DocuBuilder</h2>

    <p style={{color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.8', marginBottom: '1.5rem'}}>
      Took ownership of Balena's documentation landscape when there was no docs team. Built DocuBuilder—a framework powering 30+ documentation sites with zero-config Docusaurus deployments. Championed Documentation Driven Development, ran the company's first docs sprint, and saved $18K/year by migrating off Netlify/Heroku.
    </p>

    {/* Impact */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1rem',
      marginBottom: '1.5rem'
    }}>
      {[
        { value: '30+', label: 'Sites Powered' },
        { value: '$18K', label: 'Yearly Savings' },
        { value: '400+', label: 'Issues Resolved' }
      ].map((metric, i) => (
        <div key={i} style={{
          textAlign: 'center',
          padding: '1rem',
          background: 'var(--ifm-color-emphasis-100)',
          borderRadius: '10px'
        }}>
          <div style={{fontSize: '1.25rem', fontWeight: '800', color: 'var(--ifm-color-primary)'}}>{metric.value}</div>
          <div style={{fontSize: '0.7rem', color: 'var(--ifm-color-emphasis-600)', marginTop: '0.25rem', textTransform: 'uppercase'}}>{metric.label}</div>
        </div>
      ))}
    </div>

    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
      <a href="https://github.com/product-os/docusaurus-builder" target="_blank" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.6rem 1.25rem', background: '#3b82f6', color: 'white',
        borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none'
      }}>DocuBuilder on GitHub</a>
      <a href="https://blog.balena.io/release-party-improving-balenacloud-docs/" target="_blank" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.6rem 1.25rem', border: '2px solid var(--ifm-color-emphasis-300)',
        color: 'var(--ifm-color-emphasis-700)', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none'
      }}>Docs Sprint Story</a>
    </div>
  </div>
</div>

---

{/* Earlier Highlights */}
<details>
<summary style={{cursor: 'pointer', fontWeight: '700', padding: '1rem 0', fontSize: '1.1rem'}}>📚 Earlier Career Highlights (2016-2021)</summary>

<div style={{padding: '1.5rem', background: 'var(--ifm-color-emphasis-100)', borderRadius: '12px', marginTop: '1rem'}}>
  <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem'}}>Google Summer of Code (2018-2019)</h3>
  <p style={{marginBottom: '1rem'}}>Two consecutive years as a GSoC student with Sugar Labs, then continuing as a mentor:</p>
  <ul style={{marginBottom: '1rem', paddingLeft: '1.5rem'}}>
    <li><strong>2018:</strong> Built Sugar Port—migration tool for educational software</li>
    <li><strong>2019:</strong> Continued development and expanded tooling</li>
    <li><strong>2018-2019:</strong> Mentored 300+ pre-university students through Google Code-in</li>
  </ul>
  <p style={{marginBottom: '2rem'}}><a href="/gsoc">View GSoC certificates →</a></p>

  <hr style={{margin: '1.5rem 0', borderColor: 'var(--ifm-color-emphasis-200)'}} />

  <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem'}}>HackMIT 2018</h3>
  <p style={{marginBottom: '2rem'}}>Selected among 1000+ applicants to attend MIT's premier hackathon. The experience led me to create the <strong>Abroad Opportunities Fund Scholarship</strong> at my alma mater—ensuring future students wouldn't face the same funding barriers.</p>

  <hr style={{margin: '1.5rem 0', borderColor: 'var(--ifm-color-emphasis-200)'}} />

  <h3 style={{fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem'}}>Community Founding: ALiAS (2016)</h3>
  <p style={{marginBottom: '1rem'}}>Founded ALiAS (Amity Linux Assistance Sapience)—an independent open-source college community that grew from a classroom to hundreds of students across campuses. Started the ALiAS AMA program that helped 20+ students get selected in GSoC.</p>
  <p><a href="/Community">Read more about ALiAS →</a></p>
</div>
</details>

---

<div style={{
  background: 'linear-gradient(135deg, #0f2744 0%, #1a1a2e 100%)',
  borderRadius: '16px',
  padding: '2.5rem',
  textAlign: 'center',
  marginTop: '2rem'
}}>
  <h3 style={{color: 'white', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.75rem'}}>
    💼 Interested in working together?
  </h3>
  <p style={{color: 'rgba(255,255,255,0.8)', maxWidth: '480px', margin: '0 auto 1.5rem', lineHeight: '1.6'}}>
    I thrive in ownership roles—undefined problems, resource constraints, and high-impact outcomes.
  </p>
  <a href="mailto:vipulgupta2048@gmail.com" style={{
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    padding: '0.75rem 1.5rem', background: '#b8fb3c', color: '#0f2744',
    borderRadius: '10px', fontSize: '1rem', fontWeight: '700', textDecoration: 'none'
  }}>📧 Let's Connect</a>
</div>
