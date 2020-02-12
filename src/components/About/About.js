import React from 'react';
import styles from './About.css';
import nikki from '../assets/nikki-sato.jpg';
import travis from '../assets/travis-molter.jpg';
import sam from '../assets/sam-sterns.jpg';
import mike from '../assets/mike-grace.png';

import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const About = () => (
  <>
    <div className={styles.parent}>
      <div className={styles.div1}>
        <img className={styles.img} src={nikki}></img>
        <h1>Nikki Sato</h1>
        <p>
          a huge lover of Front End Design/Development! I loved combining my
          creative side with a dash of coding. I'm also a local portland
          photography you can catch me wandering around portland catching
          reflections.
        </p>
        <a href='https://www.linkedin.com/in/nikkisato/'>
          <FaLinkedin size={32} />
        </a>
        <a href='https://github.com/nikkisato'>
          <FaGithubSquare size={32} />
        </a>
      </div>

      <div className={styles.div2}>
        <img className={styles.img} src={sam}></img>
        <h1>Sam Sterns</h1>
        <p>
          Full-Stack developer whose growth mindset and expertise in restorative
          conflict resolution inform their passion for solving people centered
          problems. I believe technology is a tool to build equity.
        </p>
        <a href='https://www.linkedin.com/in/samsterns/'>
          <FaLinkedin size={32} />
        </a>
        <a href='https://github.com/samSterns'>
          <FaGithubSquare size={32} />
        </a>
      </div>

      <div className={styles.div3}>
        <img className={styles.img} src={mike}></img>
        <h1>Mike Grace</h1>
        <p>Full-Stack developer.</p>
        <a href='https://www.linkedin.com/in/mikeegrace/'>
          <FaLinkedin size={32} />
        </a>
        <a href='https://github.com/TravelFiend'>
          <FaGithubSquare size={32} />
        </a>
      </div>

      <div className={styles.div4}>
        <img className={styles.img} src={travis}></img>
        <h1>Travis Molter</h1>
        <p>Snowboarder and Full-Stack developer.</p>
        <a href='https://www.linkedin.com/in/travismolter/'>
          <FaLinkedin size={32} />
        </a>
        <a href='https://github.com/treem0'>
          <FaGithubSquare size={32} />
        </a>
      </div>
    </div>
  </>
);

export default About;
