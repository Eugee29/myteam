import { ReactComponent as LogoSvg } from '../assets/svg/logo.svg'
import { ReactComponent as FacebookSvg } from '../assets/svg/icon-facebook.svg'
import { ReactComponent as PinterestSvg } from '../assets/svg/icon-pinterest.svg'
import { ReactComponent as TwitterSvg } from '../assets/svg/icon-twitter.svg'

export const AppFooter = () => {
  return (
    <footer className="app-footer main-layout">
      <div className="logo-container">
        <LogoSvg className="logo" />
      </div>
      <nav className="footer-nav">
        <h1>home</h1>
        <h1>about</h1>
      </nav>
      <section className="contact-info">
        <small>
          987 Hillcrest Lane <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us: 949-833-7432
        </small>
      </section>
      <section className="socials">
        <a className="facebook" href="facebook.com">
          <FacebookSvg />
        </a>
        <a className="pinterest" href="pinterest.com">
          <PinterestSvg />
        </a>
        <a className="twitter" href="twitter.com">
          <TwitterSvg />
        </a>
      </section>
      <small className="copyright">Copyright 2020, All Rights Reserved</small>
    </footer>
  )
}
