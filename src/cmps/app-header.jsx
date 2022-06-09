import { ReactComponent as LogoSvg } from '../assets/svg/logo.svg'
import { ReactComponent as HamburgerSvg } from '../assets/svg/icon-hamburger.svg'

export const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="inner-header">
        <LogoSvg className="logo" />
        <nav className="header-nav">
          <a>home</a>
          <a>about</a>
          <a className="contact">contact us</a>
        </nav>
        <HamburgerSvg className="hamburger" />
      </div>
    </header>
  )
}
