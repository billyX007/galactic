import Image from "next/image";
import Header from "../components/header/Header";

export default function VirtualShowrooms() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="virtual-showrooms"
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
                    Virtual Showrooms
                  </span>
                </h1>
                <div className="a9-16 f6-6">
                  <div className="typeset typeset--large revealable-container">
                    <div
                      className="revealable"
                      style={{ transform: "translateY(0%)", opacity: 1 }}
                    >
                      <p>
                        Immersive virtual showroom experiences are redefining
                        the product sales experience.
                        <br />
                        <br />
                        The Boundary’s next-generation interactive tools allow
                        brands to showcase their products through
                        hyper-photorealistic, shoppable, virtual stores and
                        showrooms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="revealable-container container">
              <div
                className="revealable"
                style={{ transform: "translateY(0%)", opacity: 1 }}
              >
                <a
                  className="mt-32 button button--fill-green button--rounded"
                  href="https://www.the-boundary.com/contact"
                >
                  Discuss your project
                </a>
              </div>
            </div>
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
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={228}
                                type="checkbox"
                                name="sectors[]"
                                id="sectors-228"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="sectors-228"
                              >
                                Cultural
                              </label>
                            </li>
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={28396}
                                type="checkbox"
                                name="sectors[]"
                                id="sectors-28396"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="sectors-28396"
                              >
                                E-commerce
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
                <a
                  href="https://www.the-boundary.com/work/sky-frame-virtual-showroom"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/923142444/rendition/1080p/file.mp4?loc=external&log_user=0&signature=ad55d44e667d57a01ef38a178677e16fd109214b997047c0af32038d6072ef6d"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/97084/Screenshot-2024-03-14-at-1.16.34-PM.webp?v=1710381533"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Sky-Frame Virtual Showroom
                    </div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/fisher-paykel-virtual-showroom"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/787144909/rendition/1080p/file.mp4?loc=external&signature=c7958857c336abbacf3efd9d748fc4845e82c63d1e2fc9a7ee7b7916864ab807"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/31321/fpbanner.webp?v=1709726234"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Fisher &amp; Paykel Virtual Showroom
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid flex flex--wrap">
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/the-iconic-home-3"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/68685/IconicHomeThree04.webp?v=1709726231"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">The Iconic Home 3</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/the-etsy-house"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/784751764/rendition/1080p/file.mp4?loc=external&signature=5df9d6e9dd12ee0b6fa13e78a80eba7ff8b0853ede214b300ac6e28612e4069a"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/18808/etsy_xmas_poster.webp?v=1709726233"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">The Etsy House</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/condé-nast-iconic-home-2"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36482/FilmCondeNastIconicHome2Poster.webp?v=1709726237"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">The Iconic Home 2</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/the-iconic-home"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/786549317/rendition/1080p/file.mp4?loc=external&signature=fb627b5a89357abb542661cab9c820990dfa7560de02e4906455e3df01b51a2f"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/29048/iconiccinemaposter.webp?v=1709726241"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">The Iconic Home</div>
                  </div>
                </a>
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
                <a
                  href="https://www.the-boundary.com/contact"
                  className="button button--fill-green button--rounded"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
