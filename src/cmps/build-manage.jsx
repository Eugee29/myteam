import { ReactComponent as PersonSvg } from '../assets/svg/icon-person.svg'
import { ReactComponent as CogSvg } from '../assets/svg/icon-cog.svg'
import { ReactComponent as ChartSvg } from '../assets/svg/icon-chart.svg'
import { ReactComponent as BgSvg } from '../assets/svg/bg-pattern-home-3.svg'

export const BuildManage = () => {
  return (
    <section className="build-manage main-layout">
      <div className="inner-container">
        <h1 className="title">Build & manage distributed teams like no one else.</h1>
        <ul className="highlight-list">
          <li className="highlight">
            <div className="highlight-svg-container">
              <PersonSvg />
            </div>
            <div className="highlight-text">
              <h2 className="highlight-title">Experienced Individuals</h2>
              <p className="highlight-details">
                Our network is made up of highly experienced professionals who are passionate about what they do.
              </p>
            </div>
          </li>
          <li className="highlight">
            <div className="highlight-svg-container">
              <CogSvg />
            </div>
            <div className="highlight-text">
              <h2 className="highlight-title">Easy to Implement</h2>
              <p className="highlight-details">
                Our processes have been refined over years of implementation meaning our teams always deliver.
              </p>
            </div>
          </li>
          <li className="highlight">
            <div className="highlight-svg-container">
              <ChartSvg />
            </div>
            <div className="highlight-text">
              <h2 className="highlight-title">Enhanced Productivity</h2>
              <p className="highlight-details">
                Our customized platform with in-built analytics helps you manage your distributed teams.
              </p>
            </div>
          </li>
        </ul>
        <div className="bg-decoration"></div>
      </div>
      <BgSvg className="bg-svg" />
    </section>
  )
}
