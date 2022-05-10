import Head from 'next/head'
import ExperienceItem from '../components/experienceItem'
import SkillSet from '../components/skillSet'
import StaticImage from '../components/staticImage'
import * as skills from '../components/skills';


export default function Home() {
  return (
    <>
      <Head>
        <title>You-Sheng Huang</title>
      </Head>
      <main>
        <section className="hero">
          <div className="container">
            <div className="wrapper">
              <h1 className="title">You-Sheng Huang</h1>
              <div className="description">
                Toronto based <span className="strong">full stack developer</span> with over 5 years of professional experience designing and developing different kinds of systems.
              </div>
            </div>
          </div>
        </section>

        <section className="about">
          <div className="container">
            <div className="wrapper">
              <div className="image-wrapper">
                <StaticImage src="images/avatar.jpg" alt="Picture of You-Sheng Huang" width="380" height="507" />
              </div>
              <div className="content">
                <h2 className="title">About</h2>
                <p>
                  I&apos;m a full stack developer with over 5 years of professional experience.
                  I have a strong understanding of CSS, JavaScript, React, Node.js, Java, and MySQL.
                </p>
                <h2 className="title">Information</h2>
                <p>
                  GitHub: <a href="https://github.com/youshaneh" target="_blank" rel="noreferrer">github.com/youshaneh</a><br />
                  Email: <a href="mailto:youshaneh@gmail.com">youshaneh@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="skills">
          <div className="container">
            <h2 className="title">Skills</h2>
            <div className="wrapper">
              <SkillSet header="Front End" skills={skills.frontEnd} />
              <SkillSet header="Back End" skills={skills.backEnd} />
              <SkillSet header="Tools / Operations" skills={skills.tools} />
            </div>
          </div>
        </section>

        <section className="experience">
          <div className="container">
            <div className="wrapper">
              <div className="content">
                <h2 className="title">Work</h2>
                <div className="timeline">
                  <ExperienceItem icon="images/skyline.jpg" timeframe="AUG 2020 - FEB 2021"
                    company="Skyline Worldwide" position="Back End Developer">
                    <ul>
                      <li>
                        Integrated AWS, Alibaba Cloud, and Tencent Cloud APIs for dashboard apps
                      </li>
                      <li>
                        Created and maintained REST APIs using Spring Boot
                      </li>
                      <li>
                        Expertise in databases design and implementation with MySQL
                      </li>
                    </ul>
                  </ExperienceItem>
                  <ExperienceItem ExperienceItem icon="images/cathay.jpg" timeframe="JUL 2019 - MAR 2020"
                    company="Cathay Insurance" position="Web Developer">
                    <ul>
                      <li>
                        Integrated online payment platforms using OAuth 2.0
                      </li>
                      <li>
                        Converted wireframe to responsive pages using HTML, CSS, and JavaScript
                      </li>
                      <li>
                        Hands on experience in building server-side applications with Java
                      </li>
                    </ul>
                  </ExperienceItem>
                  <ExperienceItem ExperienceItem icon="images/asus.jpg" timeframe="SEP 2015 - FEB 2019"
                    company="Asus Computer Inc." position="Senior Software Engineer">
                    <ul>
                      <li>
                        Developed native Android apps that have 50,000,000+ installs on Google Play
                      </li>
                      <li>
                        Fixed Android Open Source Project bugs using Java
                      </li>
                      <li>
                        Customized Android framework for vendor features using Java and JNI
                      </li>
                    </ul>
                  </ExperienceItem>
                </div>
              </div>
              <div className="content">
                <h2 className="title">Education</h2>
                <div className="timeline">
                  <ExperienceItem ExperienceItem icon="images/conestoga.jpg" timeframe="MAY 2020 - APR 2022"
                    company="Conestoga College" position="Postgraduate Certificate" position2="Web Design and Development">
                    <p>
                      GPA: 3.9 / 4.0
                    </p>
                  </ExperienceItem>
                  <ExperienceItem ExperienceItem icon="images/ntu.jpg" timeframe="SEP 2013 - AUG 2015"
                    company="National Taiwan University" position="Master's Degree" position2="Computer Science and Information Engineering">
                    <p>
                      GPA: 4.0 / 4.3
                    </p>
                  </ExperienceItem>
                  <ExperienceItem ExperienceItem icon="images/nccu.jpg" timeframe="SEP 2010 - AUG 2013"
                    company="National Chengchi University" position="Bachelor's Degree" position2="Computer Science">
                    <p>
                      GPA: 3.9 / 4.0
                    </p>
                  </ExperienceItem>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
