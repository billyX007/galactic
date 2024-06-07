import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer--base">
      <div className="container">
        <nav className="footer footer--main">
          <div className="flex flex--wrap grid">
            <div className="grid__item a3-12 c4-12 f6-6">
              <div className="footer__section">
                <h2 className="footer__heading">
                  John Doe
                  <br />
                  Business Development Director UK
                </h2>
                <p className="">
                  <a href="#" target="_blank">
                    johndoe@email.com
                  </a>
                </p>
              </div>
            </div>

            <div className="grid__item a3-12 c4-12 f6-6">
              <div className="footer__section">
                <h2 className="footer__heading">London</h2>
                <p className="">+44 (0) 123 123 1234</p>
              </div>
              <div className="footer__section">
                <p>
                  Oval Road
                  <br />
                  London
                  <br />
                  DGW 1234
                  <br />
                  <a
                    className="footer__link footer__link--underline"
                    href="#"
                    // href="https://maps.app.goo.gl/cxGASuKyNbHNxMfb6"
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
                <p className="">+1 (123) 123 1234</p>
              </div>
              <div className="footer__section">
                <p>
                  The Great Building
                  <br />
                  New York City
                  <br />
                  12345
                  <br />
                  <a
                    className="footer__link footer__link--underline"
                    href="#"
                    // href="https://goo.gl/maps/TERCbeq1AqYfcBCZ7"
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
                <p className="">+64 1 2344 456</p>
              </div>
              <div className="footer__section">
                <p>
                  24b Autumn Avenue
                  <br />
                  Auckland
                  <br />
                  1234
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
          <Link className="footer__logo" href="/" aria-label="Homepage" />

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
                  <Link
                    className="footer__link footer__link--social footer__link--underline"
                    href="/legal/privacy"
                  >
                    Privacy
                  </Link>
                </li>
                {/* <li className="nowrap">
                  Site by{" "}
                  <a
                    className="footer__link footer__link--underline footer__link--credit"
                    href="#"
                  >
                    Ten4
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="grid__item f6-6">
              <ul className="flex flex--align-end">
                <li>
                  <a
                    href="https://www.instagram.com/galacticlabshq/?next=%2Fyugalabs%2F"
                    className="footer__link footer__link--social footer__link--underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.me/GalacticLabsHQ"
                    className="footer__link footer__link--social footer__link--underline"
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/37BQ8qn9g5"
                    className="footer__link footer__link--social footer__link--underline"
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tiktok.com/@galacticlabs"
                    className="footer__link footer__link--social footer__link--underline"
                  >
                    Tiktok
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/GalacticLabsHQ"
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
