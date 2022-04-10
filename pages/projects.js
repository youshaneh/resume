import Head from 'next/head'
import StaticImage from '../components/staticImage'
import * as skills from '../components/skills';
import { StackItem } from '../components/widgets';

export default function Projects() {
  return (
    <>
      <Head>
        <title>You-Sheng Huang | Projects</title>
      </Head>
      <main>
        <section className="hero project-hero">
          <div className="container">
            <div className="wrapper">
              <h1 className="title">Projects</h1>
              <div className="description">
                Side projects and freelance projects that I have done
              </div>
            </div>
          </div>
        </section>

        <section className="projects">
          <div className="container">
            <div className="wrapper">
              <div className="content">
                <div className="snapshot-wrapper">
                  <div className="snapshot">
                    <StaticImage src="images/projects/chyushya.jpg" alt="Static Website CMS" width={640} height={360} />
                  </div>
                  <div className="menu">
                    <a href="https://chyushya.com.tw" target="_blank" rel="noreferrer">Visit</a>
                    <a href="https://github.com/youshaneh/cms" target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
                <div className="description">
                  <h2 className="title">Static Website CMS</h2>
                  <div className="stack">
                    <StackItem skill={skills.next} />
                    <StackItem skill={skills.express} />
                    <StackItem skill={skills.postgresql} />
                    <StackItem skill={skills.github} />
                    <StackItem skill={skills.githubActions} />
                  </div>
                  <ul>
                    <li>Node.js / Express.js and PostgreSQL for authentication</li>
                    <li>Use GitHub REST API for content management</li>
                    <li>Use Next.js and GitHub Actions for static site generation and deployment</li>
                  </ul>
                </div>
              </div>

              <div className="content">
                <div className="snapshot-wrapper">
                  <div className="snapshot">
                    <StaticImage src="images/projects/iredeem.jpg" alt="Award Ticket Finder" width={640} height={360} />
                  </div>
                  <div className="menu">
                    <a href="https://github.com/youshaneh/iredeem" target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
                <div className="description">
                  <h2 className="title">Reward Ticket Finder</h2>
                  <div className="stack">
                    <StackItem skill={skills.react} />
                    <StackItem skill={skills.redux} />
                    <StackItem skill={skills.java} />
                    <StackItem skill={skills.spring} />
                    <StackItem skill={skills.mysql} />
                    <StackItem skill={skills.node} />
                  </div>
                  <ul>
                    <li>React and Redux for front end application</li>
                    <li>Java / Spring for API and authentication servers</li>
                    <li>MySQL and Spring Data JPA for database</li>
                    <li>Node.js for scraping airline ticket information</li>
                  </ul>
                </div>
              </div>
              
              <div className="content">
                <div className="snapshot-wrapper">
                  <div className="snapshot">
                    <StaticImage src="images/projects/caerus.jpg" alt="Caerus" width={640} height={360} />
                  </div>
                  <div className="menu">
                    <a href="https://caerus.com.tw" target="_blank" rel="noreferrer">Visit</a>
                    <a href="https://github.com/youshaneh/sharkec-caerus" target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
                <div className="description">
                  <h2 className="title">Caerus</h2>
                  <div className="stack">
                    <StackItem skill={skills.html} />
                    <StackItem skill={skills.css} />
                    <StackItem skill={skills.scss} />
                    <StackItem skill={skills.js} />
                  </div>
                  <ul>
                    <li>Freelance project</li>
                    <li>Turning the design to a fully responsive web page</li>
                  </ul>
                </div>
              </div>
              
              <div className="content">
                <div className="snapshot-wrapper">
                  <div className="snapshot">
                    <StaticImage src="images/projects/blue.jpg" alt="Blue" width={640} height={360} />
                  </div>
                  <div className="menu">
                    <a href="https://bluewax.com.tw" target="_blank" rel="noreferrer">Visit</a>
                    <a href="https://github.com/youshaneh/sharkec-blue" target="_blank" rel="noreferrer">GitHub</a>
                  </div>
                </div>
                <div className="description">
                  <h2 className="title">Blue Waxing</h2>
                  <div className="stack">
                    <StackItem skill={skills.html} />
                    <StackItem skill={skills.css} />
                    <StackItem skill={skills.scss} />
                    <StackItem skill={skills.js} />
                  </div>
                  <ul>
                    <li>Freelance project</li>
                    <li>Turning the design to a fully responsive web page</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
