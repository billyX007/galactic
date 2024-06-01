import HasSubnavMenuItem from "../base/client/HasSubnavMenuItem";
import { LocaleNav } from "../base/client/LocaleNav";
import MenuButton from "../base/client/MenuButton";

export default function Header() {
  return (
    <header className="header header--invert">
      <div className="container">
        <div className="flex flex--justify-space-between relative">
          <a
            className="header__logo"
            href="https://www.the-boundary.com/"
            aria-label="Homepage"
          ></a>
          <div className="header__realspace-logo"></div>
          <LocaleNav />
          <MenuButton />
          <nav className="nav" aria-label="Primary navigation">
            <div className="nav__container container">
              <a
                className="nav__link nav__link--site-logo"
                href="https://www.the-boundary.com/"
                aria-label="Home"
              ></a>
              <div className="nav__navs-container a13-16 c12-12 flex flex--wrap">
                <ul className="nav__main-nav">
                  <HasSubnavMenuItem label="Work">
                    <ul>
                      <li>
                        <a
                          className="nav__link nav__link--subnav"
                          href="https://www.the-boundary.com/cgis-animations-cinemagraphs"
                        >
                          CGIs, Animations &amp; Cinemagraphs
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav__link nav__link--subnav"
                          href="https://www.the-boundary.com/marketing-films"
                        >
                          Marketing Films
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav__link nav__link--subnav"
                          href="https://www.the-boundary.com/virtual-tours"
                        >
                          Virtual Tours
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav__link nav__link--subnav"
                          href="https://www.the-boundary.com/virtual-showrooms"
                        >
                          Virtual Showrooms
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav__link nav__link--subnav"
                          href="https://www.the-boundary.com/digital-twins"
                        >
                          Digital Twins
                        </a>
                      </li>
                      <li>
                        <a
                          className="nav__link nav__link--subnav"
                          href="https://www.the-boundary.com/realspace"
                        >
                          Realspace Sales Platform
                        </a>
                      </li>
                    </ul>
                  </HasSubnavMenuItem>
                  <li>
                    <a
                      className="nav__link"
                      href="https://www.the-boundary.com/about"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav__link"
                      href="https://www.the-boundary.com/people"
                    >
                      People
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav__link"
                      href="https://www.the-boundary.com/enquiries"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav__link"
                      href="https://www.the-boundary.com/careers"
                    >
                      Careers
                    </a>
                  </li>
                </ul>
              </div>

              <nav className="footer footer--nav">
                <div className="grid flex flex--wrap flex--justify-space-between footer__legal">
                  <div className="grid__item a6-12 f6-6">
                    <ul className="flex">
                      <li>
                        <a
                          className="footer__link footer__link--social footer__link--underline"
                          href="https://www.the-boundary.com/press"
                        >
                          Press
                        </a>
                      </li>
                      <li>
                        <a
                          className="footer__link footer__link--social footer__link--underline"
                          href="https://www.the-boundary.com/legal/cookies"
                        >
                          Cookies
                        </a>
                      </li>
                      <li>
                        <a
                          className="footer__link footer__link--social footer__link--underline"
                          href="https://www.the-boundary.com/legal/terms"
                        >
                          Terms
                        </a>
                      </li>
                      <li>
                        <a
                          className="footer__link footer__link--social footer__link--underline"
                          href="https://www.the-boundary.com/legal/privacy"
                        >
                          Privacy
                        </a>
                      </li>
                      <li className="nowrap">
                        Site by{" "}
                        <a
                          className="footer__link footer__link--underline footer__link--credit"
                          href="https://www.ten4design.co.uk/"
                        >
                          Ten4
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="grid__item f6-6">
                    <ul className="flex flex--align-end">
                      <li>
                        <a
                          href="https://www.instagram.com/the_boundaryuk/"
                          className="footer__link footer__link--social footer__link--underline"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/the-boundary-london"
                          className="footer__link footer__link--social footer__link--underline"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.behance.net/theboundary"
                          className="footer__link footer__link--social footer__link--underline"
                        >
                          Behance
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.facebook.com/theboundaryuk/"
                          className="footer__link footer__link--social footer__link--underline"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://twitter.com/theboundaryuk"
                          className="footer__link footer__link--social footer__link--underline"
                        >
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
