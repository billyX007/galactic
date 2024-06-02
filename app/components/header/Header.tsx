import Link from "next/link";

interface HeaderProps {
  className: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`header ${className}`}>
      <div className="container">
        <div className="flex flex--justify-space-between relative">
          <Link className="header__logo" href="/" aria-label="Homepage" />
          <div className="header__realspace-logo" />
          <nav className="header__locale" aria-label="Website locale">
            <button
              id="locale-toggle"
              className="header__locale-button"
              data-region="uk-and-europe"
              aria-label="Change your locale"
            >
              UK &amp; Europe
            </button>
            <div className="header__locale-options">
              <ul data-barba-prevent="all">
                <li>
                  <button
                    id="locale-link-uk-and-europe"
                    data-url="https://www.the-boundary.com/cgis-animations-cinemagraphs"
                    className="header__locale-option header__locale-option--selected"
                  >
                    UK &amp; Europe
                  </button>
                </li>
                <li>
                  <button
                    id="locale-link-us"
                    data-url="https://www.the-boundary.com/us/cgis-animations-cinemagraphs"
                    className="header__locale-option"
                  >
                    USA
                  </button>
                </li>
                <li>
                  <button
                    id="locale-link-gcc"
                    data-url="https://www.the-boundary.com/gcc/cgis-animations-cinemagraphs"
                    className="header__locale-option"
                  >
                    GCC
                  </button>
                </li>
                <li>
                  <button
                    id="locale-link-apac"
                    data-url="https://www.the-boundary.com/apac/cgis-animations-cinemagraphs"
                    className="header__locale-option"
                  >
                    Asia-Pacific
                  </button>
                </li>
              </ul>
            </div>
          </nav>
          <button
            id="nav-toggle"
            className="header__menu-toggle"
            aria-label="Toggle menu"
          />
          <nav className="nav" aria-label="Primary navigation">
            <div className="nav__container container">
              <Link
                className="nav__link nav__link--site-logo"
                href="/"
                aria-label="Home"
              />
              <div className="nav__navs-container a13-16 c12-12 flex flex--wrap">
                <ul className="nav__main-nav">
                  <li className="nav__item has-subnav" aria-expanded="true">
                    <button
                      className="nav__link nav__link--has-subnav"
                      aria-expanded="false"
                    >
                      Work
                    </button>
                    <div className="nav__subnav">
                      <ul>
                        <li>
                          <Link
                            className="nav__link nav__link--subnav"
                            href="/cgis-animations-cinemagraphs"
                          >
                            CGIs, Animations &amp; Cinemagraphs
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__link nav__link--subnav"
                            href="/marketing-films"
                          >
                            Marketing Films
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__link nav__link--subnav"
                            href="/virtual-tours"
                          >
                            Virtual Tours
                          </Link>
                        </li>
                        <li>
                          <a
                            className="nav__link nav__link--subnav"
                            href="/virtual-showrooms"
                          >
                            Virtual Showrooms
                          </a>
                        </li>
                        <li>
                          <Link
                            className="nav__link nav__link--subnav"
                            href="/digital-twins"
                          >
                            Digital Twins
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nav__link nav__link--subnav"
                            href="/realspace"
                          >
                            Realspace Sales Platform
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <Link className="nav__link" href="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" href="/people">
                      People
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" href="/contact">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link className="nav__link" href="/careers">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <nav className="footer footer--nav">
                <div className="grid flex flex--wrap flex--justify-space-between footer__legal">
                  <div className="grid__item a6-12 f6-6">
                    <ul className="flex">
                      <li>
                        <Link
                          className="footer__link footer__link--social footer__link--underline"
                          href="/press"
                        >
                          Press
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="footer__link footer__link--social footer__link--underline"
                          href="/legal/cookies"
                        >
                          Cookies
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="footer__link footer__link--social footer__link--underline"
                          href="/legal/terms"
                        >
                          Terms
                        </Link>
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
                          href="#"
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
                          href="#"
                          className="footer__link footer__link--social footer__link--underline"
                        >
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="footer__link footer__link--social footer__link--underline"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="footer__link footer__link--social footer__link--underline"
                        >
                          Behance
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="footer__link footer__link--social footer__link--underline"
                        >
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="footer__link footer__link--social footer__link--underline"
                        >
                          Twitter
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>{" "}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
