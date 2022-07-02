import { ReactComponent as BgSvg } from '../assets/svg/bg-pattern-home-6-about-5.svg'

export const CallToAction = () => {
  return (
    <section className="call-to-action">
      <h1 className="title">Ready to get started?</h1>
      <a className="contact">contact us</a>
      <BgSvg className="bg-svg" />
    </section>
  )
}
