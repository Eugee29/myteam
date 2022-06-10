import { ReactComponent as BottomSvg } from '../assets/svg/bg-pattern-home-2.svg'
import { ReactComponent as LeftSvg } from '../assets/svg/bg-pattern-home-1.svg'

export const FindTalent = () => {
  return (
    <section className="find-talent main-layout">
      <div className="inner-container">
        <h1 className="title">
          Find the best <span>talent</span>
        </h1>
        <p className="paragraph">
          Finding the right people and building high performing teams can be
          hard. Most companies aren’t tapping into the abundance of global
          talent. We’re about to change that.
        </p>
      </div>
      <BottomSvg className="bottom-svg" />
      <LeftSvg className="left-svg" />
    </section>
  )
}
