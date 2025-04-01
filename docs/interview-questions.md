# Answers to Interview Questions

<details>
  <summary>What’s the most impressive or the most difficult thing that you’ve built? Describe the technical challenge in depth and a link to it if possible.</summary>
  
  Creating a hardware-in-the-loop (HiL) pipeline to test software on actual hardware. 
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
  <summary>Leviathan: Story so far.</summary>
  
  The time when we almost scrapped Leviathan.
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


