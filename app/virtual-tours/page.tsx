import Image from "next/image";
import Header from "../components/header/Header";
import Link from "next/link";

export default function VirtualTours() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="virtual-tours"
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
                    Virtual Tours
                  </span>
                </h1>
                <div className="a9-16 f6-6">
                  <div className="typeset typeset--large revealable-container">
                    <div
                      className="revealable"
                      style={{ transform: "translateY(0%)", opacity: 1 }}
                    >
                      <p>
                        Virtual tours deliver the ultimate off-plan sales and
                        marketing experience, allowing unbuilt environments to
                        be explored and appreciated in real-time.
                        <br />
                        <br />
                        Engage clients by interactively exploring the full scope
                        of a space — changing levels, materials, day/night
                        lighting in a live environment.
                        <br />
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
              src="https://player.vimeo.com/progressive_redirect/playback/925345638/rendition/1080p/file.mp4?loc=external&log_user=0&signature=4a5ef2ecfec8c23924b3eed52fbaddb15f463ecab9b26521933d046ab9b250c6"
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
                    <form id="js-listing-filters" action="" method="get">
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
                                defaultValue={230}
                                type="checkbox"
                                name="sectors[]"
                                id="sectors-230"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="sectors-230"
                              >
                                Hospitality
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
              <div className="listing__item grid__item a6-12 f6-6">
                <Link
                  href="/work/elements-budds-beach-virtual-tours"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/911490248/rendition/720p/file.mp4?loc=external&log_user=0&signature=1290ff3e3a30d7ee8c8942b6b80a79f112c146f685cb6c67aba8ddbb02ebe566"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/84520/Elements-Video-Cover-01.webp?v=1710854533"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Elements Budds Beach Virtual Tours
                    </div>
                  </div>
                </Link>
              </div>
              <div className="listing__item grid__item a6-12 f6-6">
                <Link
                  href="/work/ancora-collins-wharf-virtual-tours"
                  className="listing listing--size_2 swiper-slide"
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
                      Ancora at Collins Wharf Virtual Tour
                    </div>
                  </div>
                </Link>
              </div>
              <div className="listing__item grid__item a6-12 f6-6">
                <Link
                  href="/work/park-quarter"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/919221423/rendition/1440p/file.mp4?loc=external&log_user=0&signature=3ad426c12daaa63e257ef32d4bcf04cb021ba26e43fd6b578231d2b9387eaade"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/85924/ParkQuarterVideoCover.webp?v=1709747656"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Park Quarter</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="grid flex flex--wrap">
              <div className="listing__item grid__item a4-12 f6-6">
                <Link
                  href="/work/waldorf-astoria"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/75190/WaldorfExterior07.webp?v=1709723764"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Waldorf Astoria</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item grid__item a4-12 f6-6">
                <Link
                  href="/work/arc-residences"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/908626451/rendition/2160p/file.mp4?loc=external&log_user=0&signature=adf8726cce1be7715184adde207b09e0a50350f01e78c7348f40864f41531bdd"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/83769/Arc-Residences-Video-Banner-3.webp?v=1709726908"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Arc Residences</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item grid__item a4-12 f6-6">
                <Link
                  href="/work/green-square"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/919515415/rendition/1080p/file.mp4?loc=external&log_user=0&signature=7b58f3e341de828847475123362afe238b6b8c3a506ea648335c5b828a2900b9"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/86942/BridgeHill20.webp?v=1709747656"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Green Square</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item grid__item a4-12 f6-6">
                <Link
                  href="/work/the-monaco"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/453891580/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6714cc4990ffdfd5c6ed9668f12c1c5ad2c3b74c61463b82f5b2e97ac562ecb2"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/58403/TheMonaco12.webp?v=1709726912"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">The Monaco</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item grid__item a4-12 f6-6">
                <Link
                  href="/work/victoria-and-albert"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/60552/VictoriandAlbert03.webp?v=1709726908"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Victoria and Albert</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item grid__item a4-12 f6-6">
                <Link
                  href="/work/masthead-ocean-club"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/901808237/rendition/2160p/file.mp4?loc=external&log_user=0&signature=083d365ecf636f1ca5bb26403656f4ad999914cc704f0012cfafd5af816c638a"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/82699/Masthead01.webp?v=1709726909"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Masthead Ocean Club</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item grid__item a4-12 f6-6">
                <Link
                  href="/work/northbrook-wynyard-quarter"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/901162222/rendition/2160p/file.mp4?loc=external&log_user=0&signature=5e0bf42c175c75705353d204d7eec5d302899d8798732e722115887474d5134a"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/81728/Northbrook11.webp?v=1709726913"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Northbrook Wynyard Quarter
                    </div>
                  </div>
                </Link>
              </div>
              <div className="listing__item grid__item a4-12 f6-6">
                <Link
                  href="/work/white-main-beach"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/407813900/rendition/1080p/file.mp4?loc=external&log_user=0&signature=f62d8d17a5061affdca3cf9b71d74ed86aec9d153630fc5b822ab2a423da7fcd"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/59172/WhiteMainBeach21.webp?v=1709726912"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">White Main Beach</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item grid__item a4-12 f6-6">
                <Link
                  href="/work/coast"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/57060/Coast01.webp?v=1709726914"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Coast</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <Link
                  href="/work/royale-gold-coast"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/701857010/rendition/1440p/file.mp4?loc=external&log_user=0&signature=28d1685cc3b4fb2888b9a0fd22b9137a0fe2ed12f216927d83079e543b4a567a"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/58008/RoyaleGoldCoast02.webp?v=1709726913"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Royale Gold Coast</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <Link
                  href="/work/la-vera"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/901119132/rendition/1080p/file.mp4?loc=external&log_user=0&signature=e11f953c7eb95b00eeab86a1c212dcbd575f18576abba310e7be8af26ab3a6b1"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/81374/LaVeraVideoCover.webp?v=1709726908"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">La Vera</div>
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
