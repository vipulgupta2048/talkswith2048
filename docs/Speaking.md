---
title: "Speaking - Vipul Gupta"
description: "Vipul Gupta (vipulgupta2048) talks, workshops, podcasts, and conference appearances across supply chain security, AI evals, CI/CD, and open source."
sidebar_label: "Speaking"
sidebar_position: 2
---

# Speaking

{/* Hero Section */}
<div style={{
  background: 'linear-gradient(135deg, #0f2744 0%, #1a1a2e 50%, #16213e 100%)',
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
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(184, 251, 60, 0.15) 0%, transparent 60%)',
    borderRadius: '50%',
    pointerEvents: 'none'
  }}></div>
  <div style={{
    position: 'absolute',
    bottom: '-20%',
    left: '10%',
    width: '250px',
    height: '250px',
    background: 'radial-gradient(circle, rgba(99, 210, 151, 0.1) 0%, transparent 60%)',
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
    }}>Talks · Workshops · Podcasts</p>

    <h2 style={{
      color: 'white',
      fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
      fontWeight: '900',
      lineHeight: '1.1',
      marginBottom: '1.5rem',
      maxWidth: '700px',
      letterSpacing: '-0.02em'
    }}>Technical stories that <span style={{color: '#b8fb3c'}}>stick</span></h2>

    <p style={{
      color: 'rgba(255,255,255,0.8)',
      fontSize: '1.05rem',
      lineHeight: '1.7',
      maxWidth: '620px',
      marginBottom: '0'
    }}>From local meetups to global summits, I weave technical concepts into unconventional narratives. No repeats, no boring monologues—just good stories served on a stage near you.</p>
  </div>
</div>

{/* Stats Grid */}
<div style={{
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '1rem',
  marginBottom: '4rem',
  textAlign: 'center'
}}>
  {[
    { num: '100+', label: 'Sessions' },
    { num: '8+', label: 'Years' },
    { num: '15+', label: 'Countries' },
    { num: '100K+', label: 'Reach' }
  ].map((stat, i) => (
    <div key={i} style={{
      padding: '1.25rem 0.75rem',
      background: 'var(--ifm-background-surface-color)',
      borderRadius: '12px',
      border: '1px solid var(--ifm-color-emphasis-200)'
    }}>
      <div style={{fontSize: '1.75rem', fontWeight: '800', color: 'var(--ifm-color-primary)', lineHeight: '1'}}>{stat.num}</div>
      <div style={{fontSize: '0.7rem', color: 'var(--ifm-color-emphasis-600)', marginTop: '0.35rem', textTransform: 'uppercase', letterSpacing: '1px'}}>{stat.label}</div>
    </div>
  ))}
</div>

---

## Featured Talks (2024-2025)

{/* OpenSSF Supply Chain Security */}
<div style={{
  background: 'var(--ifm-background-surface-color)',
  borderRadius: '16px',
  overflow: 'hidden',
  border: '1px solid var(--ifm-color-emphasis-200)',
  marginBottom: '2rem'
}}>
  <div style={{
    background: 'linear-gradient(90deg, #e53e3e 0%, #c53030 100%)',
    height: '4px'
  }}></div>
  <div style={{padding: '2rem'}}>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'}}>
      <span style={{
        background: 'rgba(229, 62, 62, 0.15)',
        color: '#c53030',
        padding: '0.35rem 0.75rem',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: '600'
      }}>OpenSSF India 2025</span>
      <span style={{
        background: 'var(--ifm-color-emphasis-100)',
        color: 'var(--ifm-color-emphasis-700)',
        padding: '0.35rem 0.75rem',
        borderRadius: '20px',
        fontSize: '0.75rem'
      }}>🔐 Security</span>
      <span style={{
        background: 'var(--ifm-color-emphasis-100)',
        color: 'var(--ifm-color-emphasis-700)',
        padding: '0.35rem 0.75rem',
        borderRadius: '20px',
        fontSize: '0.75rem'
      }}>📍 Hyderabad</span>
    </div>

    <h3 style={{fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.75rem'}}>
      How Insecure Defaults Led to Undetected Supply Chain Incidents
    </h3>

    <p style={{color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.7', marginBottom: '1.25rem'}}>
      A deep dive into how a misconfigured GitHub Action exposed a long-lived token for two years, creating an undetected attack vector. Walked through attack-chain reproduction and CI hardening patterns for 250+ security engineers.
    </p>

    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
      <a href="https://www.youtube.com/watch?v=cSqEn2ulasE" target="_blank" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.5rem 1rem', background: '#c53030', color: 'white',
        borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none'
      }}>🎥 Recording</a>
      <a href="https://docs.google.com/presentation/d/1yc8o9vu7NbWIrW2VfH1VRIsn80hjDH58PLKUqjZf0MI/edit" target="_blank" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.5rem 1rem', border: '2px solid var(--ifm-color-emphasis-300)',
        color: 'var(--ifm-color-emphasis-700)', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none'
      }}>📊 Slides</a>
    </div>
  </div>
</div>

{/* GitHub Constellation */}
<div style={{
  background: 'var(--ifm-background-surface-color)',
  borderRadius: '16px',
  overflow: 'hidden',
  border: '2px solid #24292f',
  marginBottom: '2rem',
  position: 'relative'
}}>
  <div style={{
    position: 'absolute', top: '1rem', right: '1rem',
    background: '#b8fb3c', color: '#0f2744',
    padding: '0.35rem 0.85rem', borderRadius: '20px',
    fontSize: '0.65rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px'
  }}>⭐ Highlight</div>

  <div style={{background: 'linear-gradient(135deg, #24292f 0%, #0d1117 100%)', padding: '2rem', color: 'white'}}>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'}}>
      <span style={{
        background: 'rgba(255,255,255,0.15)', color: 'white',
        padding: '0.35rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600'
      }}>GitHub Constellation 2024</span>
      <span style={{
        background: 'rgba(184, 251, 60, 0.25)', color: '#b8fb3c',
        padding: '0.35rem 0.75rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: '600'
      }}>🚀 CI/CD</span>
    </div>

    <h3 style={{fontSize: '1.35rem', fontWeight: '700', marginBottom: '0', color: 'white'}}>
      How Balena Releases 100's of Embedded OS with GitHub Actions in Hours, Not Weeks
    </h3>
  </div>

  <div style={{padding: '2rem'}}>
    <p style={{color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.7', marginBottom: '1.25rem'}}>
      First GitHub conference talk—demonstrated how Balena uses GitHub Actions to test hundreds of OS images for embedded systems. Covered the complete build-test-deploy pipeline that transformed 6-week release cycles into hours.
    </p>

    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
      <a href="https://youtu.be/MTwvt2uV9YE" target="_blank" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.5rem 1rem', background: '#24292f', color: 'white',
        borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none'
      }}>🎥 Watch</a>
      <a href="https://slides.com/vipulgupta2048/constellation-2024" target="_blank" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.5rem 1rem', border: '2px solid #24292f',
        color: '#24292f', borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none'
      }}>📊 Slides</a>
    </div>
  </div>
</div>

{/* GDG DevFest - AI Evals */}
<div style={{
  background: 'var(--ifm-background-surface-color)',
  borderRadius: '16px',
  overflow: 'hidden',
  border: '1px solid var(--ifm-color-emphasis-200)',
  marginBottom: '2rem'
}}>
  <div style={{
    background: 'linear-gradient(90deg, #4285F4 0%, #34A853 33%, #FBBC04 66%, #EA4335 100%)',
    height: '4px'
  }}></div>
  <div style={{padding: '2rem'}}>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'}}>
      <span style={{
        background: 'rgba(66, 133, 244, 0.15)',
        color: '#3367d6',
        padding: '0.35rem 0.75rem',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: '600'
      }}>GDG DevFest 2025</span>
      <span style={{
        background: 'var(--ifm-color-emphasis-100)',
        color: 'var(--ifm-color-emphasis-700)',
        padding: '0.35rem 0.75rem',
        borderRadius: '20px',
        fontSize: '0.75rem'
      }}>🤖 AI/ML</span>
    </div>

    <h3 style={{fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.75rem'}}>
      Continuous AI: From YAML Hell to Continuous Intelligence
    </h3>

    <p style={{color: 'var(--ifm-color-emphasis-700)', lineHeight: '1.7', marginBottom: '1.25rem'}}>
      Explored the shift from brittle automation to autonomous agentic workflows. Live demo of self-healing pipelines that cut lead time by ~25% and boost deployment frequency by ~28%.
    </p>

    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.75rem'}}>
      <a href="https://docs.google.com/presentation/d/1DYx3pjYRspHC5EUWkDeDe9dl6bKQ4kYxqYqRBMi-twA" target="_blank" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        padding: '0.5rem 1rem', background: '#4285F4', color: 'white',
        borderRadius: '8px', fontSize: '0.85rem', fontWeight: '600', textDecoration: 'none'
      }}>📊 Slides</a>
    </div>
  </div>
</div>

---

## Workshops

<div style={{
  background: 'linear-gradient(135deg, rgba(30, 58, 95, 0.08) 0%, rgba(99, 210, 151, 0.08) 100%)',
  borderRadius: '16px',
  padding: '2rem',
  marginBottom: '2rem',
  border: '1px solid var(--ifm-color-emphasis-200)'
}}>
  <p style={{
    color: 'var(--ifm-color-emphasis-600)',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    fontSize: '0.7rem',
    fontWeight: '600',
    marginBottom: '0.5rem'
  }}>Hands-on Sessions</p>
  <h3 style={{fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem'}}>Teaching Developers Since 2017</h3>
  <p style={{color: 'var(--ifm-color-emphasis-700)', marginBottom: '1.5rem'}}>
    50+ workshops delivered, 5000+ developers trained. From Git fundamentals to containerizing Python for IoT.
  </p>

  <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem'}}>
    <div style={{background: 'var(--ifm-background-color)', borderRadius: '12px', padding: '1.25rem', border: '1px solid var(--ifm-color-emphasis-200)'}}>
      <span style={{fontSize: '1.5rem'}}>🎓</span>
      <h4 style={{fontSize: '1rem', fontWeight: '600', margin: '0.5rem 0'}}>Git & GitHub Fundamentals</h4>
      <p style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '0.75rem'}}>Intro to version control, branching, PRs, and collaboration workflows.</p>
      <a href="https://github.com/vipulgupta2048/git-intro" style={{fontSize: '0.8rem'}}>View materials →</a>
    </div>
    <div style={{background: 'var(--ifm-background-color)', borderRadius: '12px', padding: '1.25rem', border: '1px solid var(--ifm-color-emphasis-200)'}}>
      <span style={{fontSize: '1.5rem'}}>🐳</span>
      <h4 style={{fontSize: '1rem', fontWeight: '600', margin: '0.5rem 0'}}>Containerizing Python for IoT</h4>
      <p style={{fontSize: '0.85rem', color: 'var(--ifm-color-emphasis-600)', marginBottom: '0.75rem'}}>Deploy Python to edge devices with Docker and balenaCloud.</p>
      <a href="https://docs.google.com/presentation/d/1Ve43SXu78fgePMfA--psofAUZ8YeRLwPtR0HPXNsDRw" style={{fontSize: '0.8rem'}}>View slides →</a>
    </div>
  </div>
</div>

---

## Podcasts

<div style={{marginBottom: '2rem'}}>
  <p style={{color: 'var(--ifm-color-emphasis-600)', fontSize: '0.95rem', marginBottom: '1.5rem'}}>
    Conversations on open source, remote work, observability, and career journeys.
  </p>

  <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
    {[
      {
        title: 'From Pipelines to Patterns: Observability in the Wild',
        show: 'SquaredUp',
        link: 'https://www.youtube.com/watch?v=O-fWSN1H_GM',
        desc: 'How we monitor CI/CD pipelines testing on real hardware at Balena'
      },
      {
        title: 'Sustain Our Software Podcast',
        show: 'SustainOSS',
        link: 'https://podcast.sustainoss.org/4',
        desc: 'Open source activities in India and building Sugar Labs globally'
      },
      {
        title: 'How to Get a Remote Job as a Fresher',
        show: 'RemoteIndian',
        link: 'https://share.descript.com/view/25c3e54f-48bb-4dea-9b5d-78acfe0d1d88',
        desc: 'Open source, junior dev challenges, and red flags in hiring'
      }
    ].map((pod, i) => (
      <a key={i} href={pod.link} target="_blank" style={{
        display: 'flex', alignItems: 'center', gap: '1rem',
        padding: '1rem 1.25rem',
        background: 'var(--ifm-background-surface-color)',
        borderRadius: '12px',
        border: '1px solid var(--ifm-color-emphasis-200)',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'border-color 0.2s ease'
      }}>
        <span style={{fontSize: '1.5rem'}}>🎙️</span>
        <div style={{flex: 1}}>
          <div style={{fontWeight: '600', marginBottom: '0.25rem'}}>{pod.title}</div>
          <div style={{fontSize: '0.8rem', color: 'var(--ifm-color-emphasis-600)'}}>{pod.show} · {pod.desc}</div>
        </div>
        <span style={{color: 'var(--ifm-color-emphasis-400)'}}>→</span>
      </a>
    ))}
  </div>
</div>

---

## Full Speaking History

<details>
<summary style={{cursor: 'pointer', fontWeight: '600', padding: '0.75rem 0'}}>📚 2024 Talks</summary>

<table style={{width: '100%', marginTop: '1rem', borderCollapse: 'collapse'}}>
  <thead>
    <tr style={{borderBottom: '2px solid var(--ifm-color-emphasis-300)'}}>
      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '600'}}>Talk</th>
      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '600'}}>Event</th>
      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '600'}}>Links</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>Pains, Processes & Gains of Building Open-Source Hardtech</td>
      <td style={{padding: '0.75rem'}}>DelhiFOSS 2.0</td>
      <td style={{padding: '0.75rem'}}><a href="https://youtu.be/fa62hVxUUGI">Recording</a> · <a href="https://slides.com/vipulgupta2048/delhifoss-hardtech">Slides</a></td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>How Balena Releases 100's of OS with GitHub Actions</td>
      <td style={{padding: '0.75rem'}}>GitHub Constellation</td>
      <td style={{padding: '0.75rem'}}><a href="https://youtu.be/MTwvt2uV9YE">Recording</a> · <a href="https://slides.com/vipulgupta2048/constellation-2024">Slides</a></td>
    </tr>
    <tr>
      <td style={{padding: '0.75rem'}}>What's New with GitHub Copilot</td>
      <td style={{padding: '0.75rem'}}>GitHub Constellation Delhi</td>
      <td style={{padding: '0.75rem'}}><a href="https://www.linkedin.com/feed/update/urn:li:activity:7276636792185872384/">Post</a></td>
    </tr>
  </tbody>
</table>

</details>

<details>
<summary style={{cursor: 'pointer', fontWeight: '600', padding: '0.75rem 0'}}>📚 2023 Talks</summary>

<table style={{width: '100%', marginTop: '1rem', borderCollapse: 'collapse'}}>
  <thead>
    <tr style={{borderBottom: '2px solid var(--ifm-color-emphasis-300)'}}>
      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '600'}}>Talk</th>
      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '600'}}>Event</th>
      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '600'}}>Links</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>Testing 100's of OS Images with Jenkins</td>
      <td style={{padding: '0.75rem'}}>CDCon + gitOpsCon Vancouver</td>
      <td style={{padding: '0.75rem'}}><a href="https://youtu.be/Dhl61ZQ63WY?t=164">Recording</a> · <a href="https://slides.com/vipulgupta2048/vipul-cdcon2023">Slides</a></td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>Deploying Python on the Edge</td>
      <td style={{padding: '0.75rem'}}>PyDelhi Conf</td>
      <td style={{padding: '0.75rem'}}><a href="https://www.youtube.com/live/HclGLQVLBhM?t=3348">Recording</a> · <a href="https://slides.com/vipulgupta2048/pydelhiconf2023-deployedge">Slides</a></td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>Let's Build a Virtual RaspberryPi Using QEMU</td>
      <td style={{padding: '0.75rem'}}>OSS Europe</td>
      <td style={{padding: '0.75rem'}}><a href="https://www.youtube.com/watch?v=EYVkSUydqMI">Recording</a> · <a href="https://slides.com/vipulgupta2048/osseu2023-qemu">Slides</a></td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>Testing 100's of OS images: PR to Release</td>
      <td style={{padding: '0.75rem'}}>OSS Japan</td>
      <td style={{padding: '0.75rem'}}><a href="https://slides.com/vipulgupta2048/cdcon-japan-2023">Slides</a></td>
    </tr>
    <tr>
      <td style={{padding: '0.75rem'}}>Building your next open-source product</td>
      <td style={{padding: '0.75rem'}}>FOSS United Delhi</td>
      <td style={{padding: '0.75rem'}}><a href="https://www.youtube.com/watch?v=dK2Ja-5cbOU">Recording</a> · <a href="https://slides.com/vipulgupta2048/delhifoss">Slides</a></td>
    </tr>
  </tbody>
</table>

</details>

<details>
<summary style={{cursor: 'pointer', fontWeight: '600', padding: '0.75rem 0'}}>📚 2017-2022 Archive</summary>

<div style={{padding: '1rem 0'}}>
  <p style={{fontStyle: 'italic', marginBottom: '1.5rem'}}>Sabbatical during COVID (2021-2022)</p>

  <p style={{fontWeight: '700', marginBottom: '0.5rem'}}>2020</p>
  <ul style={{marginBottom: '1.5rem', paddingLeft: '1.5rem'}}>
    <li>Documenting your next Python project - PyCon India Flames Meetup</li>
    <li>Right the Docs: Mixster pitch - PyCon India 2020 Lightning Talk</li>
    <li>Containerizing Python for IoT - PyCon India Workshop</li>
  </ul>

  <p style={{fontWeight: '700', marginBottom: '0.5rem'}}>2019</p>
  <ul style={{marginBottom: '1.5rem', paddingLeft: '1.5rem'}}>
    <li>Plymouth 101: Bootloader's Frontend - ILUG-D</li>
    <li>Green dots don't matter, contributing does - Mozfest 2018</li>
    <li>Sugar Port: My GSoC project - Google London Office</li>
    <li>Google Summer of Code Headstart - Amity University</li>
  </ul>

  <p style={{fontWeight: '700', marginBottom: '0.5rem'}}>2017-2018</p>
  <ul style={{paddingLeft: '1.5rem'}}>
    <li>Introduction to Git - ILUG-D</li>
    <li>CSE Essentials - ALiAS</li>
    <li>Fish: The terminal - Women who Go</li>
    <li>PyDelhi Dev-Sprints Mentoring</li>
  </ul>
</div>

</details>

---

## Conference Appearances

<details>
<summary style={{cursor: 'pointer', fontWeight: '600', padding: '0.75rem 0'}}>📚 Full Conference History (2017-2025)</summary>

<table style={{width: '100%', marginTop: '1rem', borderCollapse: 'collapse'}}>
  <thead>
    <tr style={{borderBottom: '2px solid var(--ifm-color-emphasis-300)'}}>
      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '600'}}>Year</th>
      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '600'}}>Conference</th>
      <th style={{textAlign: 'left', padding: '0.75rem', fontWeight: '600'}}>Role</th>
    </tr>
  </thead>
  <tbody>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2025</td>
      <td style={{padding: '0.75rem'}}>Open Source Summit India</td>
      <td style={{padding: '0.75rem'}}>Speaker (OpenSSF Track)</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2025</td>
      <td style={{padding: '0.75rem'}}>OpenSSF India Community Days</td>
      <td style={{padding: '0.75rem'}}>Keynote Speaker</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2025</td>
      <td style={{padding: '0.75rem'}}>KubeCon India</td>
      <td style={{padding: '0.75rem'}}>Attendee</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2024</td>
      <td style={{padding: '0.75rem'}}>GitHub Constellation</td>
      <td style={{padding: '0.75rem'}}>Speaker</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2024</td>
      <td style={{padding: '0.75rem'}}>DelhiFOSS 2.0</td>
      <td style={{padding: '0.75rem'}}>Speaker</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2024</td>
      <td style={{padding: '0.75rem'}}>KubeCon India (Inaugural)</td>
      <td style={{padding: '0.75rem'}}>Attendee</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2023</td>
      <td style={{padding: '0.75rem'}}>OSS Japan</td>
      <td style={{padding: '0.75rem'}}>Speaker</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2023</td>
      <td style={{padding: '0.75rem'}}>OSS Europe</td>
      <td style={{padding: '0.75rem'}}>Speaker</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2023</td>
      <td style={{padding: '0.75rem'}}>CDCon Vancouver</td>
      <td style={{padding: '0.75rem'}}>Speaker</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2023</td>
      <td style={{padding: '0.75rem'}}>PyDelhi Conf</td>
      <td style={{padding: '0.75rem'}}>Speaker</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2023</td>
      <td style={{padding: '0.75rem'}}>PyCon India</td>
      <td style={{padding: '0.75rem'}}>Volunteer</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2020-2021</td>
      <td style={{padding: '0.75rem'}}>PyCon India</td>
      <td style={{padding: '0.75rem'}}>Content Lead</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2020</td>
      <td style={{padding: '0.75rem'}}>KubeCon Europe</td>
      <td style={{padding: '0.75rem'}}>Diversity Scholar</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2019</td>
      <td style={{padding: '0.75rem'}}>React India</td>
      <td style={{padding: '0.75rem'}}>Scholarship Awardee</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2018</td>
      <td style={{padding: '0.75rem'}}>Mozfest London</td>
      <td style={{padding: '0.75rem'}}>Facilitator</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2018</td>
      <td style={{padding: '0.75rem'}}>Sustain Summit</td>
      <td style={{padding: '0.75rem'}}>Invited Sustainer</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2018</td>
      <td style={{padding: '0.75rem'}}>OSS Europe</td>
      <td style={{padding: '0.75rem'}}>Scholarship Awardee</td>
    </tr>
    <tr style={{borderBottom: '1px solid var(--ifm-color-emphasis-200)'}}>
      <td style={{padding: '0.75rem'}}>2017</td>
      <td style={{padding: '0.75rem'}}>PyCon India</td>
      <td style={{padding: '0.75rem'}}>Volunteer & Web Dev</td>
    </tr>
    <tr>
      <td style={{padding: '0.75rem'}}>2017</td>
      <td style={{padding: '0.75rem'}}>PyDelhi Conf</td>
      <td style={{padding: '0.75rem'}}>First Conference Ever</td>
    </tr>
  </tbody>
</table>

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
    🎤 Want me to speak at your event?
  </h3>
  <p style={{color: 'rgba(255,255,255,0.8)', maxWidth: '450px', margin: '0 auto 1.5rem', lineHeight: '1.6'}}>
    I bring energy, practical knowledge, and storytelling to every session.
  </p>
  <a href="mailto:vipulgupta2048@gmail.com" style={{
    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
    padding: '0.75rem 1.5rem', background: '#b8fb3c', color: '#0f2744',
    borderRadius: '10px', fontSize: '1rem', fontWeight: '700', textDecoration: 'none'
  }}>📧 Get in Touch</a>
</div>
