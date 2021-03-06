//Modules
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
// import Image from "gatsby-image"
//Sass
import styles from "./COVID19.module.scss"
//Components
import Counter from "./Counter/Counter"

const COVID19 = () => {
  const data = useStaticQuery(query)
  const image = data.teamImage.childImageSharp.fluid

  return (
    <section className={styles.Container}>
      {/* <Image
        fluid={image}
        alt="COVID-19 Food Bank Team"
        className={styles.Flyer}
      /> */}

      <div className={styles.VideoContainer}>
        <div className={styles.Video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TofDIAtxfNg"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Sang foundation aid for COVID-19"
          />
        </div>
      </div>

      <div className={styles.VideoContainer} style={{ marginTop: "3rem" }}>
        <div className={styles.Video}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gtsbo5wJXMQ"
            frameborder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title="Sang Foundation Donation Drive Update 26Apr20"
          />
        </div>
      </div>

      <h1>
        Urgent Action Needed! Help those economically affected by the COVID-19
        Lockdown.
      </h1>

      <Counter />

      <p>
        The Sang Foundation is currently operating food deliveries to the
        elderly and others affected by the decimation of the tourism industry in
        Prachauap Kirikhan and Phetchaburi.
      </p>

      <p>
        It is estimated that over six thousand families are without sufficient
        food and daily supplies in these two provinces alone. Your donation will
        go directly to feeding and supporting these vulnerable families during
        this difficult time.
      </p>

      <p>
        ต้องการความช่วยเหลือด่วน!
        ชาวบ้านผู้ที่ได้รับผลกระทบทางเศรษฐกิจจากการระบาดของ COVID-19
        ขณะนี้มูลนิธิแสงกำลังดำเนินการส่งมอบอาหารให้กับผู้สูงอายุและผู้ที่ได้รับผลกระทบจากอุตสาหกรรมการท่องเที่ยวที่ลดลงในจังหวัดประจวบคีรีขันธ์และเพชรบุรี
        คาดการณ์ว่ามากกว่าพันครอบครัวในสองจังหวัดนี้
        ไม่มีอาหารและสิ่งของอุปโภคบริโภคเพียงพอแก่การยังชีพ
        การบริจาคของคุณจะเป็นการแบ่งปันให้กับผู้ยากไร้และครอบครัวที่ขาดแคลนเพื่อช่วยบรรเทาผลกระทบในช่วงเวลาที่ยากลำบากนี้
      </p>

      <div className={styles.ButtonsContainer}>
        <Link to="/covid19" className={styles.OutLink}>
          Find Out More
        </Link>

        <Link to="/donate" className={styles.OutLink}>
          Donate Now
        </Link>
      </div>
    </section>
  )
}

const query = graphql`
  {
    teamImage: file(relativePath: { eq: "food_team.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`

export default COVID19
