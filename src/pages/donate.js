//Modules
import React from "react"
//Sass
import styles from "./styles/DonatePage.module.scss"

const DonatePage = () => {
  return (
    <section className={styles.DonateDetails}>
      <div>
        <h1>Donate Here</h1>
        <p>Accn 016-2-97347-9</p>
        <p>Name: Sang Foundation</p>
        <p>Bank: Kasikorn Bank</p>
        <p>Swift Code: KASITHBK</p>
        <p>Tax Redemption ID: 0-9930-00372-79-4</p>
      </div>

      <div>
        <h1>Donation Copy</h1>
        <p>
          Sang foundation is a Thai government registered and certified non
          profit organization. We have tax ID which issues by minister of
          finance for tax redemption.
        </p>
        <p>
          A suggested donation of 100 - 500 Baht will go towards sponsoring and
          supporting the following organisations:
        </p>
        <div>
          <h2>Grin Green International</h2>
          <p>
            A student centered social enterprise. We organize Beach clean up and
            social events in different public places. Sang Foundation research
            manufacturing sources, funds their merchandise, handing financial
            part of the transactions plus organize together all activities as a
            group.
          </p>
        </div>

        <div>
          <h2>Precious plastic </h2>
          <p>
            For the moment PP shredders machines to recreate merchandise from
            plastic caps. In the future we like to reduce the cost of the
            machine, produce more precious plastic machines for each schools to
            produce more articles . In the future we like to produce an
            injection machine to produce more Recycled merchandise to help local
            communities to Recycle their own plastic waste and turn them into
            merchandise to generate income. Sang Foundation helps to organize
            event and taking actions with PP to get into schools & communities
            together.
          </p>
        </div>

        <div>
          <h2>Eco Beasts</h2>
          <p>
            Sang Foundation is creating a school curriculum together with Eco
            Beast to define how to build a Waste Free school with children and
            their parents. Plus bring in specialist in this domain to help us
            for information and statistics, learning from other countries
            sustainable educational activities. The funds will go to creat an
            educational curriculum for all schools, staring from international
            schools in Thailand to go Waste Free.
          </p>
        </div>

        <div>
          <h2>Trash Hero Thailand </h2>
          <p>
            Together we organize different Clean up events, link with government
            municipalities & other parties to reduce & use recycled materials.
            Link with other Sistainable projects such as growing mangroves,
            planting trees.... organize students events... etc
          </p>
        </div>
      </div>
    </section>
  )
}

export default DonatePage
