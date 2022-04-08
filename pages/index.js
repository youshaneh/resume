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
                  I&apos;m a full stack developer with over 5 years of professional experience designing and developing different kinds of systems.
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
                    <p>
                      Implement dashboards that incorporate services under different accounts on multiple platforms including AWS, Alibaba Cloud, Tencent Cloud, etc.
                    </p>
                    <p>
                      Work closely with front-end developers and project managers
                    </p>
                  </ExperienceItem>
                  <ExperienceItem ExperienceItem icon="images/cathay.jpg" timeframe="JUL 2019 - MAR 2020"
                    company="Cathay Insurance" position="Web Developer">
                    <p>
                      Implement online payment features for existing services
                    </p>
                    <p>
                      Develop new features for intra-company applications
                    </p>
                  </ExperienceItem>
                  <ExperienceItem ExperienceItem icon="images/asus.jpg" timeframe="SEP 2015 - FEB 2019"
                    company="Asus Computer Inc." position="Senior Software Engineer">
                    <p>
                      Customize Android framework for OEM software feature
                    </p>
                    <p>
                      Cooperate with board support package team for OEM hardware feature
                    </p>
                    <p>
                      Fix stock Android framework bugs
                    </p>
                    <p>
                      Develop built-in Android apps for Zenfone and ROG Phone
                    </p>
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
