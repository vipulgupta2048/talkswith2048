---
title: "Interview Questions - Vipul Gupta"
description: "Vipul Gupta (vipulgupta2048) shares detailed answers to interview questions on ownership, hardware-in-the-loop, and open-source work."
---

# Questions about work

<details>
  <summary>What’s the most impressive or the most difficult thing that you’ve built? Describe the technical challenge in depth and a link to it if possible.</summary>
  
  ## Creating a hardware-in-the-loop (HiL) pipeline to test software on actual hardware. 

IoT systems need to be extremely reliable. Environmental, hardware, software, networks, and even humans are all causes of failures to account for. BalenaOS supports 100+ device types, that’s 100+ distinct balenaOS releases that we support. Each version needs to be secure, fault-tolerant, compatible, and be capable of self-healing in cases of incidents.

Our HiL pipeline tests each version of balenaOS directly on a device under test (DUT) that is connected to our test jig called autokit. The device is booted and an operating system is flashed, provisioned, tested, validated, upgraded, and then corrupted in a few different ways to check recovery. Our system completely automates balenaOS release from pull request to production. Every week we test 2000+ balenaOS releases, saving our team over 160 hours of work combined.

Broad Technical challenges that show my learning journey:
    1. Creating Hardware: Designing a test jig called autokit [1], a completely off-the-shelf, open-source HIL testing device that can power on, flash, and execute commands on an embedded device. Never worked with hardware. 
    2. First time writing device firmware [2]: Writing code to interact with many of Autokit’s components.
    3. Building a test system involving, a test framework to write tests, queue management, and discovery of available workers to run the tests no matter their location [3]

The documented experience of facing major uncertainity, technical challenges and our team's 4-year journey as we went through supply chain issues, COVID, silicon chip shortage every day: [https://blog.balena.io/from-pr-to-release-os-testing-at-balena/](https://blog.balena.io/from-pr-to-release-os-testing-at-balena/) and [https://blog.balena.io/balenaos-testing-goes-virtual/](https://blog.balena.io/balenaos-testing-goes-virtual/) 

I have also been sharing my work in talks and workshops at open-source conferences all over the world: [https://docs.mixster.dev/Talks](https://docs.mixster.dev/Talks)
 
[1]: https://github.com/balena-io-hardware/autokit-info-doc  
[2]: https://github.com/balena-io-hardware/autokit-interface-sw 
[3]: https://github.com/balena-os/leviathan/ 
 
</details>

<details>
  <summary>Ownership I took on at the deep end - Leviathan: Story so far.</summary>
  
  ## The time when we almost scrapped Leviathan.
  
  Hardware-in-loop testing (HiLT) is a challenging concept. It’s a system able to test software on real hardware to provide back feedback.
  
  Balena was my first job. In my 3rd month in the company, we received a silent deadline by the CEO to give up the concept or start fresh. A truly desperate time turned worse with the senior developer leaving the project to only two people in the team. Leviathan project overall was in a bad shape. Confused product decisions, unreasonable requirements, undocumented code and lots of technical debt was where I spent a lot of time in the first 6 months.
  
  I took ownership and worked on all aspects of the product: software, hardware, strategy, planning, support, CI/CD, reliability, writing tests, and even documentation. I learned on the job, iterated quickly, exchanging context with multiple teams and dealt with ever changing requirements. The uncertainty of whether the product or my role would survive got worse with peak covid, chip shortage and reliability concerns in every part of our project
  
  Still we kept on going. As a product owner, I ran experiments, talked to the customers, consulted with ex-employees, and researched the demands of the market. I documented all of it, crafted a new spec for leviathan MVP, and we convinced the management to spend resources into creating an off-the- shelf test jig called Autokit, deprecating the old testbot hardware that was all proprietary and very expensive to build.
  
  10 months later, we released support for our first device type, Raspberry Pi 3. The team could now run automated tests for Raspberry Pi3 on real devices for each PR. In a few short months, we added support for the entire Raspberry Pi family. Freeing our OS team from weeks worth of manual testing and saving tens of thousands of dollars.
  
  4 years total, Leviathan has been a journey. Still doing its job, still having debt but finally now being put to rest. Being replaced by a better system the team is working on. The first step of which we are taking from moving everything from Jenkins to GitHub Actions atm. Here’s where we are atm:
    ⁃ My colleague and I grew the team to 6 people. Caught over 10+ production bugs and enabled the team to focus on building important features.
    ⁃ We launched Autokit internally to customers and partners, who actively using it to test their software changes on new BalenaOS revisions. Public launch this quarter.
    ⁃ We support over 50+ devices enabling Balena to grow further towards its 10x device support goal.
    ⁃ I am constantly documenting, sharing and speaking about HiTL pipelines. Additionally, starting a OpenHiL community on my own to spread awareness on the topic so people won’t reinvent the wheel atleast and get help from the uncertainty we never got: https://openhil.github.io
  
  Blogs & GitHub
  - https://blog.balena.io/maximizing-resources-in-the-chip-shortage-how- balenaos-testing-went-virtual/
  - https://blog.balena.io/from-pr-to-release-os-testing-at-balena/
  - https://github.com/balena-os/leviathan
</details>

<details>
  <summary>What's that one time you executed a strategy/feature/product launch under pressure in resource constrained environments?</summary>
  
  ## Navigating Hardware Scarcity: Virtualizing balenaOS Testing Under Pressure

**Situation**  
During the 2020 global semiconductor shortage, our hardware testing pipeline at balena faced collapse. With 40% of our critical test devices unavailable and release deadlines looming, I led the charge to virtualize balenaOS testing to avoid delaying updates for thousands of IoT fleets.  

**Task**  
My goal was to replicate hardware-accurate testing for 80+ device types within three weeks using zero physical hardware, ensuring no regression in OS quality or release timelines.  

**Action**  
I spearheaded a three-engineer team to build a QEMU-based virtualization framework. Key steps:  
1. **Custom Boot Emulation**: Developed scripts to mimic unique bootloaders across ARM/x86 devices, ensuring balenaOS initialization behaved identically to physical hardware.  
2. **CI/CD Overhaul**: Rebuilt Jenkins pipelines to orchestrate virtual machines instead of physical testbots, slashing setup time from hours to minutes.  
3. **Deterministic Testing**: Implemented storage and network fault injection in virtual environments to test edge cases impractical with physical devices.  

**Result**  
- **Zero Release Delays**: Shipped balenaOS 2.108 on schedule with 100% test coverage across architectures.  
- **4x Faster Testing**: Reduced full test suite runtime from 3.5 hours to 45 minutes.  
- **Cost Savings**: Eliminated $250K/year in hardware procurement costs for test devices.  
- **Scalability**: Enabled instant onboarding of 12 new device types within six months post-launch.  

The virtualization system became a cornerstone of our DevOps strategy, later adopted by 90% of balena’s engineering teams for pre-merge validation. This experience taught me that resource constraints often spark transformative solutions—what began as crisis management evolved into a key competitive advantage in IoT fleet management.    
</details>

<details>
  <summary>Tell me about a time when you had to take on a task that was not part of your usual responsibilities. How did you approach the situation, and what did you learn from it?</summary>

## Taking ownership of documentation at Balena

For the longest time, we didn’t have a documentarian or any docs team. It’s incredibly hard to get engineers to keep the docs updated. Finding someone to do docs for operating systems, backend components, Docker Engines, Linux, and hardware devices is a tall order and that's the vast surface of balena's product surface. With no maintainence, 400+ issues open, docs were outdated, incomplete, and not user-friendly. I have always followed the principle of `If you see something, fix something.`
 
I decided to take on ownership of urgent issues on BalenaCloud, which could have been easy fixes, but realized all too soon that this needs to be an entire company effort and a culture issue that we need to tackle. Thankfully, the CEO had a pretty big buy-in on docs already and needed no convincing on the sad state of docs. I had a vision of how to get them back on track. 

I worked with the leadership team to implement Documentation Driven Development from scratch that would suit our way of working. I championed this and helped my colleagues take this up gradually in their projects. I even took sessions to help my peers in the operations team [learn Git & GitHub](https://docs.mixster.dev/git-intro). We truly wanted everyone to write and commit docs. 

The approach I wanted to take was one of collective ownership of the docs by their product owners. The road that led to it was filled with a lot of learnings and iterations. We want the docs to be painless to contribute to and truly be treated as a first-class citizen. 

This new role led to me running the company’s first-ever docs sprint: [https://blog.balena.io/release-party-improving-balenacloud-docs/](https://blog.balena.io/release-party-improving-balenacloud-docs/), which led to further understanding of contributor success, friction logging, technical debt addressal, architecture discussion, and solving 100+ issues in under 9 hours with the whole team coming together. 

Time passed, as I methodologically worked on a roadmap towards a further point of integrating docs right where developers commit code to build a Docs-like-code culture in the entire company. What started as GitHub issues being fixed ended up as being the Docs Lead, and now, I work on developer education initiatives. My colleague and I built [DocuBuilder](https://github.com/vipulgupta2048/docusaurus-builder/) to deploy docusaurus sites for our products on scale. [Ended up saving $18000/year](https://mixster.dev/2023/04/16/on-netlify/) and closing our accounts in Heroku, Netlify, and WordPress. 
</details>

<details>
  <summary>Can you describe a time when you had to scale a system or application to handle a significant increase in traffic or usage? What were the key challenges you faced, and how did you overcome them?</summary>

## Scaling a queue management system of a hardware-in-the-loop testing system

We implemented a queue management for our test workers that accepts test jobs at scale. Before a test job starts, available workers are picked from the pool based on the DUT (device under test), peripherals, CPU architecture, and software tags.

At first, the workers were only exposed to a limited number of device repositories in staging. In production, we had 80+ repositories generating hundreds of pull requests every hour, which would request workers to run tests. During deployment, we faced a concurrency issue where multiple jobs acquired a single worker for their tests. The workers couldn’t change the IDLE status to BUSY to show real-time availability for several reasons. This broke the pipeline as test jobs thought they were executing, but in reality, nothing was running. We had three options to scale: 

1. Horizontally: Where we need more autokits to be set up as workers.  
2. Vertically: Where each worker can be set up to handle more jobs.   
3. But the toughest, the queue management system, needed to be scaled. 

I optimized for short-term pain for long-term gain. I first looked into the code to find where exactly the availability switch was taking time. Even milliseconds of delay mattered. This delay could resolve the issue and make finding available workers seamless. We didn’t account for our host CI/CD Hetzner systems to be that fast, even when we implemented staggered worker assignments. Originally, the spec was to prepare for redundancy more than concurrency. 

After two hours of tinkering, I made a patch to the queue system to mark the availability as BUSY as soon as the request came in, and reworked the worker assessment to be done before checking availability, which made the process a couple of seconds faster. We solved the scaling blocker, but not the issue. The increased load would take hours to resolve.

We later iterated this system vertically further by using features from GitHub Actions. Using what we had, we implemented job matrices, cache storage, job retires, and GH artifact registry for faster temporary artifact uploads. On further iterations, we automated the process to scale up our capacity to serve 100+ pull requests, testing about 1000+ balenaOS releases each week. 

I want to mention, in the end, we could have thrown money at the problem to horizontally scale and set up 100 more autokits, but continuously improving the system is the long game that is worth playing. Just like public transportation, systems should always be running at a little bit more than their peak capacity to get the most out of what you are paying for them. 
</details>

<details>
<summary>Have you ever had to work with limited resources to solve a problem? How did you prioritize tasks and make decisions about what to tackle first? Include an example</summary>

## Working in resource-constrained environments

IoT has been the biggest teacher of how to solve complex problems with limited resources. Whether that’s RAM, storage, cost, or even the physical boundary of what a device can or can’t do. One of the examples I want to take an example of limited resources such as time. Deadlines are industry-agnostic. 

I start work by assessing our current scope of the problem, stakeholders, and deliverables. I get feedback from the stakeholders and prioritize my tasks to solve the problem with impact, effort, and priority. My goal is to always [build an SLC, not an MVP](https://longform.asmartbear.com/slc/) to provide the best experience to our customers and not half measures.

Throughout the project, I communicated regularly. Practice radical candor when facing challenges that would affect my progress and need to be revised. This could be an approach we set out to experiment with if it works out, or an open-source tool we wanted to try. I try to make the most of my limited time to always stick to the tasks decided on and not let feature creep come in between solving a problem. A lot of times, you also identify other things that could have been fixed. 

A solid example of making the best from limited resources would be my 8 months spent building a completely virtual Hardware in the loop pipeline using QEMU, you can read about that all here.  [https://blog.balena.io/balenaos-testing-goes-virtual/](https://blog.balena.io/balenaos-testing-goes-virtual/) 
</details>