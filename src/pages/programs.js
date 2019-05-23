//Modules
import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
//Components
import Layout from "../components/Layout/Layout"
//Sass
import styles from "./styles/ProgramsPage.module.scss"

const ProgramsPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Sang Foundation: Our Programs</title>
      </Helmet>
      <main className={styles.Programs}>
        <section className={styles.Bobo}>
          <h1>BOBO the Whale</h1>
          <h2>
            Fact 1: One of the most detrimental environmental problems in our
            world today is the tons of plastic being dumped relentlessly into
            our oceans.
          </h2>
          <p>
            In July 2017, Sang foundation was invited by the UN in Bangkok to
            build a giant whale installation - to be exhibited during the Asian
            Pacific UN Ministerial Environment Summit from 5-8 September 2017.
            The result was "Bobo The Whale", a concept created by Mutsumi
            Adachi. As the founder of the Sang Foundation, she wanted to raise
            awareness by displaying a whale with plastic debris in its belly.
            Bobo had different interactive features to educate viewers, as well
            as a poem expressing the sadness of this environmental emergency.
            The UN also invited the Clean Ocean Organization of New York to play
            a 4D VR video called "The Lonely Whale" at the summit. This VR video
            gave participants the experience of a being a whale swimming in a
            sea of trash. Viewers could clearly imagine how this magnificent
            whale would suffer a slow and painful death from ingesting plastic
            debris. The exhibits focused on the disastrous effects of ocean
            pollution, particularly around Thailand. The UN did not provide
            funds for Bobo; this project was solely funded by Sang Foundation
            volunteers. The time frame for Bobo's construction was extremely
            short, but with help from dedicated supporters and volunteers, it
            was completed successfully and managed to create positive change.
          </p>
          <h2>
            Fact 2: Bobo was designed to raise awareness of the problem of ocean
            debris
          </h2>
          <p>
            To create Bobo, Mutsumi contacted Thai Taiyo Tent factory. Mr. Tohru
            Hirono made the technical drawing for the design. The 3 meter-tall,
            3meter-wide, and nearly 9 meter-long structure were completed after
            a good deal of precise concentrated efforts. Bobo has fins on both
            sides measuring around 1.5m each, and a 4 meter-long tail stuffed
            with plastic bottles collected from the UN coffee shops and
            cafeteria, and from volunteers' personal contributions. To avoid
            using plastic, Sang Foundation hoped to make Bobo out of recyclable
            fabric. The Trend Denim Company generously donated 110 yards of blue
            denim to cover the body of the whale. Many volunteers from Trash
            Hero Hua Hin collected ocean debris from Pattaya. Many other
            volunteers and school students also helped to collect trash to build
            the exhibit.
          </p>
        </section>

        <section className={styles.CTAOne}>
          <div>
            <h3>Get in touch with us</h3>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h3>Start acting now!</h3>
            <a href="https://forms.gle/RwXXjtwhkYSy4tWg8">Volunteer</a>
          </div>
        </section>

        <section className={styles.CoreProgram}>
          <h1>What we do:</h1>
          <ul>
            <li>
              <p>Create curriculum for school to follow to raise awareness.</p>
              <ul>
                <li>Pre-school</li>
                <li>6-12 years old</li>
                <li>12-18 years old</li>
                <li>College & university students Separately</li>
              </ul>
            </li>

            <li>
              <p>
                Organize community activities with shopping malls or public
                places
              </p>
            </li>
            <li>
              <p>
                Organize Clean up Beach and village committee with local school
                students
              </p>
            </li>
            <li>
              <p>
                Organize events in culture centers to promote companies and
                government establishments to go plastic free.
              </p>
            </li>
          </ul>
        </section>

        <section className={styles.CTATwo}>
          <div>
            <h3>Get in touch with us</h3>
            <Link to="/contact">Contact</Link>
          </div>

          <div>
            <h3>Start acting now!</h3>
            <a href="https://forms.gle/RwXXjtwhkYSy4tWg8">Volunteer</a>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default ProgramsPage
