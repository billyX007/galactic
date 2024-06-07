import Image from "next/image";
import Header from "../components/header/Header";
import Link from "next/link";

export default function Realspace() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="realspace"
      style={{ opacity: 1 }}
    >
      <Header />
      <main id="main-content" className="main">
        <section className="section">
          <div className="page__spacing-sm">
            <div className="intro">
              <div className="container">
                <h1 className="intro__title ph revealable-container">
                  <span
                    className="revealable"
                    style={{ transform: "translateY(0%)", opacity: 1 }}
                  >
                    Realspace Sales Platform
                  </span>
                </h1>
                <div className="a9-16 f6-6">
                  <div className="typeset typeset--large revealable-container">
                    <div
                      className="revealable"
                      style={{ transform: "translateY(0%)", opacity: 1 }}
                    >
                      <p>
                        Realspace is an interactive experience CMS platform that
                        empowers real estate sales teams to memorably showcase
                        and efficiently sell down off-the-plan property.
                        <br />
                        <br />
                        Offering a&nbsp;content agnostic platform that can be
                        enhanced through integration with The Boundary&apos;s
                        Virtual Tours. Sales teams can clearly communicate the
                        vision of an unbuilt development, through personalised
                        non-linear storytelling.
                      </p>
                      <p>
                        Key features include a single hub for all content,
                        integrated content management system, CRM integration,
                        bespoke client microsites, integrated virtual tours, AI
                        powered analytics and white glove support.
                        <br />
                      </p>
                    </div>
                  </div>
                  <div className="revealable-container">
                    <a
                      className="a a--large a--arrow a--underline revealable"
                      href="http://realspace.io/"
                      target="_blank"
                      style={{ transform: "translateY(0%)", opacity: 1 }}
                    >
                      Visit the Realspace Website
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="revealable-container container">
              <div
                className="revealable"
                style={{ transform: "translateY(0%)", opacity: 1 }}
              >
                <Link
                  className="mt-32 button button--fill-green button--rounded"
                  href="/contact"
                >
                  Discuss your project
                </Link>
              </div>
            </div>
          </div>
          <div className="mb-80">
            <video
              className="fw"
              src="https://player.vimeo.com/progressive_redirect/playback/927093524/rendition/2160p/file.mp4?loc=external&log_user=0&signature=22f316720285f436b2ce60cbeea28a02176f39a645cc2d6093e7823c6b7ad32a"
              autoPlay
              muted
              playsInline
              loop
            />
          </div>
          <div className="filter">
            <div className="container">
              <div className="filter__align grid flex flex--wrap">
                <div className="grid__item a3-16 f6-6">
                  <button className="filter__toggle">Show Filter</button>
                </div>
                <div className="grid__item a13-16 f6-6">
                  <div className="grid flex filter__applied">
                    <div className="grid__item">
                      <p className="filter__applied-text" />
                    </div>
                    <div className="grid__item">
                      <button className="filter__clear">Clear filters</button>
                    </div>
                  </div>
                  <div className="filter__panel">
                    <form id="js-listing-filters" method="get">
                      <div className="grid flex flex--wrap">
                        <div className="grid__item a4-12 f3-6">
                          <h3 className="filter__heading">Sector</h3>
                          <ul>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={227}
                                type="checkbox"
                                name="sectors[]"
                                id="sectors-227"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="sectors-227"
                              >
                                Residential
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="grid__item a4-12 f3-6">
                          <h3 className="filter__heading">Location</h3>
                          <ul>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={225}
                                type="checkbox"
                                name="location[]"
                                id="location-225"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="location-225"
                              >
                                Rest of the World
                              </label>
                            </li>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={226}
                                type="checkbox"
                                name="location[]"
                                id="location-226"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="location-226"
                              >
                                Asia Pacific
                              </label>
                            </li>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={29619}
                                type="checkbox"
                                name="location[]"
                                id="location-29619"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="location-29619"
                              >
                                Virtual
                              </label>
                            </li>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={34255}
                                type="checkbox"
                                name="location[]"
                                id="location-34255"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="location-34255"
                              >
                                New Zealand
                              </label>
                            </li>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={84347}
                                type="checkbox"
                                name="location[]"
                                id="location-84347"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="location-84347"
                              >
                                Australia
                              </label>
                            </li>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={90292}
                                type="checkbox"
                                name="location[]"
                                id="location-90292"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="location-90292"
                              >
                                USA
                              </label>
                            </li>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={90293}
                                type="checkbox"
                                name="location[]"
                                id="location-90293"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="location-90293"
                              >
                                UK
                              </label>
                            </li>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={90322}
                                type="checkbox"
                                name="location[]"
                                id="location-90322"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="location-90322"
                              >
                                Europe
                              </label>
                            </li>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={91073}
                                type="checkbox"
                                name="location[]"
                                id="location-91073"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="location-91073"
                              >
                                Canada
                              </label>
                            </li>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={91217}
                                type="checkbox"
                                name="location[]"
                                id="location-91217"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="location-91217"
                              >
                                Saudi Arabia
                              </label>
                            </li>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={91283}
                                type="checkbox"
                                name="location[]"
                                id="location-91283"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="location-91283"
                              >
                                United Arab Emirates
                              </label>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="results container page__spacing-xs">
            <div className="grid flex flex--wrap">
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <Link
                  href="/work/ancora-collins-wharf-realspace"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/924973830/rendition/1080p/file.mp4?loc=external&log_user=0&signature=a3015760f567d07328b84c014996ed1f66bac086331baed320e371ab1e7f5f95"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/103297/CollinsWharfVideoCover12.webp?v=1710849931"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Ancora at Collins Wharf Realspace
                    </div>
                  </div>
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <Link
                  href="/work/elements-budds-beach-realspace"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/924955467/rendition/2160p/file.mp4?loc=external&log_user=0&signature=0589b1ff5269116728c6eb141fd59113813e417fc8f3dd5769d5925c8fb1e113"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/103208/ElementsVideoCover06.webp?v=1710848223"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Elements Budds Beach Realspace
                    </div>
                  </div>
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <Link
                  href="/work/park-quarter-realspace"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/98245/Park-Quarter-RS-cover.webp?v=1710389989"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Park Quarter Realspace</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <Link
                  href="/work/collins-wharf-realspace"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/920464473/rendition/1440p/file.mp4?loc=external&log_user=0&signature=fc903ea79c83da7e80e0eb904a848b43028b38e70ab7118886ba360f09855e46"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/87969/Collins-Wharf-Video-Cover-01.webp?v=1710177246"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Regatta at Collins Wharf Realspace
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="grid flex flex--wrap">
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <Link
                  href="/work/collins-wharf"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/920464473/rendition/1440p/file.mp4?loc=external&log_user=0&signature=fc903ea79c83da7e80e0eb904a848b43028b38e70ab7118886ba360f09855e46"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/87969/Collins-Wharf-Video-Cover-01.webp?v=1710177246"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Collins Wharf</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="page__spacing-lg">
            <div className="call-to-action">
              <div className="container">
                <h2 className="call-to-action__title revealable-container">
                  <span
                    className="revealable"
                    style={{ transform: "translateY(0%)", opacity: 1 }}
                  >
                    Project in the Pipeline?
                  </span>
                </h2>
                <div className="a9-16 f6-6 revealable-container">
                  <div
                    className="call-to-action__description revealable"
                    style={{ transform: "translateY(0%)", opacity: 1 }}
                  >
                    <p>
                      If you have a project you would like to work with us on,
                      get in touch and one of our team will get back to you
                    </p>
                  </div>
                </div>
                <Link
                  href="/contact"
                  className="button button--fill-green button--rounded"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
