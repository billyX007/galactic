export default function Footer() {
  return (
    <footer className="footer footer--base footer--hidden">
      <div className="container">
        <nav className="footer footer--main">
          <div className="flex flex--wrap grid">
            <div className="grid__item a3-12 c4-12 f6-6">
              <div className="footer__section">
                <h2 className="footer__heading">
                  Dean Kennedy
                  <br />
                  Business Development Director UK
                </h2>
                <p className="">
                  <a href="mailto:dean@the-boundary.com" target="_blank">
                    dean@the-boundary.com
                  </a>
                </p>
              </div>
            </div>

            <div className="grid__item a3-12 c4-12 f6-6">
              <div className="footer__section">
                <h2 className="footer__heading">London</h2>
                <p className="">+44 (0) 203 026 6270</p>
              </div>
              <div className="footer__section">
                <p>
                  Academic House, 24-28 Oval Road
                  <br />
                  London
                  <br />
                  NW1 7DJ
                  <br />
                  <a
                    className="footer__link footer__link--underline"
                    href="https://maps.app.goo.gl/cxGASuKyNbHNxMfb6"
                    target="_blank"
                  >
                    Map
                  </a>
                </p>
              </div>
            </div>
            <div className="grid__item a3-12 c4-12 f6-6">
              <div className="footer__section">
                <h2 className="footer__heading">New York City</h2>
                <p className="">+1 (646) 661 5616</p>
              </div>
              <div className="footer__section">
                <p>
                  The Graybar Building
                  <br />
                  New York City
                  <br />
                  10170
                  <br />
                  <a
                    className="footer__link footer__link--underline"
                    href="https://goo.gl/maps/TERCbeq1AqYfcBCZ7"
                    target="_blank"
                  >
                    Map
                  </a>
                </p>
              </div>
            </div>
            <div className="grid__item a3-12 c4-12 f6-6">
              <div className="footer__section">
                <h2 className="footer__heading">Auckland</h2>
                <p className="">+64 9 3666 468</p>
              </div>
              <div className="footer__section">
                <p>
                  24b Spring Street
                  <br />
                  Auckland
                  <br />
                  1011
                  <br />
                  <a
                    className="footer__link footer__link--underline"
                    href="https://goo.gl/maps/ZqWGDhSsHys4fGp68"
                    target="_blank"
                  >
                    Map
                  </a>
                </p>
              </div>
            </div>
          </div>
          <a
            className="footer__logo"
            href="https://www.the-boundary.com/"
            aria-label="Homepage"
          ></a>

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
    </footer>
  );
}
