import React, { FunctionComponent } from "react";
import clsx from "clsx";
import styles from "./AboutMe.module.scss";
import useBaseUrl from "@docusaurus/useBaseUrl";

export const AboutMe: FunctionComponent = () => {
  return (
    <div className="margin-top--lg">
      <h2>Little about me</h2>
      <div className="row">
        <div className="col col--6">
          <p>
            I am a product owner with 6+ years of niche expertise in building
            hard-tech applications, scalable documentation, and thriving
            open-source communities.
          </p>

          <p>
            My diverse experience comes from wearing multiple hats at startups,
            taking ownership in uncertainty and solving complex problems with
            first principles thinking. My professional background spans full
            stack development, product development, release engineering, DevOps,
            developer education, community management and growth.
          </p>

          <blockquote>
            With each pivot in my career, I have delivered my best work from
            taking on new challenges, embracing the uncertainity and excelling
            against the odds.
          </blockquote>

          <h2>Technical Expertise</h2>
          <p>
            As a skilled operator, my core engineering experience lies in
            building highly scalable, reliable applications with
            Node.js/TypeScript/Python for resource-constrained environments. I
            built and maintained the first ever open-source Hardware in the Loop
            system for a leading IoT fleet management company. While mastering
            hardware, firmware, and operating systems during this stint, I also
            created a fully automated generative documentation system before
            LLMs became mainstream, saved millions of dollars in cloud &
            engineering costs through strategic projects, and presented my
            learnings (and mistakes too) at major international conferences as a
            speaker.
          </p>

          <h2>Open-source shaped who I am</h2>
          <p>
            Contributing since 2016, my origin story in tech is through
            open-source. I initially aspired to be an architect in urban
            planning, but fell in love with the idea of a community building
            things together globally—for everyone, for free. I've been fortunate
            to collaborate with some of the best minds in the industry through
            Mozilla Festival, HackMIT, Google Summer of Code, AMA Mentorship
            program & Google Code-in.
          </p>

          <blockquote>
            I bring a strong sense of ownership with a unique blend of
            "firestarter" energy to any collective I join. My guiding principle
            is eliminating problems, not just continually solving them. Working
            remotely for over 8 years, I have driven teams to achieve measurable
            results in every organization I've been part of.
          </blockquote>

          <h2>Present day</h2>
          <p>
            My weekends are dedicated as Communication Lead for PyCon India,
            mentoring college students through ALiAS, a 3000+ members
            open-source community fostering open-sourc, and organizing meetups
            for GitHub GitTogether Delhi-NCR community. I've also been involved
            in various initiatives promoting open-source software and hardware,
            including workshops, hackathons, and meetups. Currently, I'm scaling
            up the Open Hardware in the Loop community.
          </p>

          <p>
            Today, I serve as a product owner & documentation lead at Balena. I
            also run Mixster, an initiative to "right" the docs and build
            scalable content pipelines for startups and organizations. I'm
            always exploring new challenges at the intersection of product,
            people, and code.
          </p>
        </div>
        <div className={clsx("col col--5", styles.avatarContainer)}>
          <div className={styles.avatar}>
            <img src={useBaseUrl("/img/avatar.png")} alt="Avatar" />
          </div>
          <div className={styles.hackmitImage}>
            <img
              src={useBaseUrl("/img/cropped_image.png")}
              alt="HackMIT Experience"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
