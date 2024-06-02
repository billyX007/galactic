import Image from "next/image";
import Header from "../components/header/Header";

export default function CGIAnimationCinemagraphs() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="cgis-animations-cinemagraphs"
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
                    CGIs, Animations &amp; Cinemagraphs
                  </span>
                </h1>
                <div className="a9-16 f6-6">
                  <div className="typeset typeset--large revealable-container">
                    <div
                      className="revealable"
                      style={{ transform: "translateY(0%)", opacity: 1 }}
                    >
                      <p>
                        Evocative CGI content that drive off-plan sales,
                        underpinning high-quality marketing campaigns and
                        architectural visualization projects.
                        <br />
                        <br />
                        The Boundary stands at the forefront of innovation,
                        working on many of the world&apos;s most prestigious
                        developments and alongside ten Pritzker prize winners.
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
                <a
                  className="mt-32 button button--fill-green button--rounded"
                  href="https://www.the-boundary.com/contact"
                >
                  Discuss your project
                </a>
              </div>
            </div>
          </div>
          <div className="mb-80">
            <video
              className="fw"
              src="https://player.vimeo.com/progressive_redirect/playback/787297322/rendition/1080p/file.mp4?loc=external&signature=8cd9096dd33782e32d3d9402262a7f546ea501e811ba32492c66e7e2f648d8c0"
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
                                defaultValue={229}
                                type="checkbox"
                                name="sectors[]"
                                id="sectors-229"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="sectors-229"
                              >
                                Commercial
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
                            <li className="filter__option-item">
                              <input
                                className="filter__option-input"
                                defaultValue={29618}
                                type="checkbox"
                                name="sectors[]"
                                id="sectors-29618"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="sectors-29618"
                              >
                                Automotive
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
                  href="https://www.the-boundary.com/work/the-whiteley-london"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/787297322/rendition/1080p/file.mp4?loc=external&signature=8cd9096dd33782e32d3d9402262a7f546ea501e811ba32492c66e7e2f648d8c0"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/32512/whiteleycine01poster.webp?v=1709723763"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">The Whiteley London</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/1428-brickell"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/887668938/rendition/1440p/file.mp4?loc=external&log_user=0&signature=83efe88378e6f744aedf9e73f678e115f7eea9766b267f6f2c4ce59996afedbe"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/3879/brickell29.webp?v=1709723765"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      The Residence at 1428 Brickell
                    </div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/waldorf-astoria"
                  className="listing listing--size_3 swiper-slide"
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
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/611-west-56th-street"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://de0dqb7pdorb1.cloudfront.net/sizaduskwww.mp4"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/14229/duskteaser.webp?v=1709723763"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">611 West 56th Street</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="grid flex flex--wrap">
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/the-clay-yard"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/887706760/rendition/2160p/file.mp4?loc=external&log_user=0&signature=3656f84b9fd6809e383ffe46b287be1098dc7a3b2eaf9e13db56ee0c4322947b"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/63131/LiddelRoad07.webp?v=1709723768"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">The Clay Yard</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/100-george-street"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/107645/100GeorgeStreet05.webp?v=1712912125"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">100 George Street</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/barts-square"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/891814199/rendition/1080p/file.mp4?loc=external&log_user=0&signature=2d092d9aa3b18c7858a5e4df5710fc0b752afaeb2306f970bf9cf9fa5237e30b"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/11257/bartssquare03.webp?v=1709723769"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Barts Square</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/waldorf-astoria-residences"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/81011/SouthOcean03.webp?v=1709723770"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Waldorf Astoria Residences
                    </div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/mercedes-benz-places"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/87447/MercedesSouthside09.webp?v=1709723988"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Mercedes-Benz Places</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/the-residences-at-mandarin-oriental"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/107887/MandarinOriental01.webp?v=1715355664"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      The Residences at Mandarin Oriental
                    </div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/rosewood-dallas"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/942379977/rendition/1080p/file.mp4?loc=external&log_user=0&signature=afeccf94d50aac46439300c93cdf1e357619a51cb9a3f6f123eb99bad51f9dee"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/107973/RosewoodDallas04.webp?v=1715940451"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Rosewood Residences Dallas
                    </div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/rosewood-bermuda"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/914748702/rendition/1080p/file.mp4?loc=external&log_user=0&signature=126b4aa59d84981a3ebe5918fc3fa5b583d1db59445ca847e814b5d0b398eccf"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/85581/RosewoodBermuda01.webp?v=1709746969"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Rosewood Residences Bermuda
                    </div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/rosewood-beverly-hills"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/946928536/rendition/1080p/file.mp4?loc=external&log_user=0&signature=d7bbb08adce485d37622c03f7351b1a82df11dca4bacad006039b0037785bc30"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/80883/Rosewood-Beverly-Hills-04.webp?v=1709746969"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Rosewood Residences Beverly Hills
                    </div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/ritz-carlton-residences"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/109505/RitzMiami03.webp?v=1715611731"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      The Ritz-Carlton Residences
                    </div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/shore-club"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/81191/MiamiShoreClub03.webp?v=1709723771"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Shore Club</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/flagler-towers"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/80433/FlaglerTowers01.webp?v=1709723772"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Flagler Towers</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/five-park-miami-beach"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/888049501/rendition/2160p/file.mp4?loc=external&log_user=0&signature=817c7686739f8d80782eed1cebb1ced485b4421407240bf19d93814b325b5ffb"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/64324/FiveParkMiami66.webp?v=1709723775"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Five Park Miami Beach</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/cipriani-residences"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/63622/Cipriani05.webp?v=1709723775"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Cipriani Residences</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/the-perigon"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/65649/ThePerigon16.webp?v=1709723776"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">The Perigon</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/shell-bay-residences"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/85317/ShellBay01.webp?v=1709746973"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Shell Bay Residences</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/habitat-los-angeles"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/83369/HabitatLA02.webp?v=1709723780"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Habitat Los Angeles</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/elements-budds-beach"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/84465/Elements29.webp?v=1709726909"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Elements Budds Beach</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/arc-residences"
                  className="listing listing--size_1 swiper-slide"
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
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/eighty-seven-park"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/785196035/rendition/1080p/file.mp4?loc=external&signature=cce8713b8b20916f46400462b9fad574967351fd6809adc680ab4c73ad25e3bb"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/22462/87parkposter.webp?v=1709723794"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Eighty Seven Park</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/forma-towers"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/887676527/rendition/1080p/file.mp4?loc=external&log_user=0&signature=afc2ec0ec27b7dc8906de39e7ef37784bd777103c6706b44fd17b23a64dd6d8a"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/27167/forma04.webp?v=1709723781"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Forma Towers</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/565-broome-soho"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/17816/565broome01.webp?v=1709723818"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">565 Broome SoHo</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/one-crown-place"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_listing/17005/onecrownplace31.webp?v=1709723815"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">One Crown Place</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/152-elizabeth-street"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/19259/elizabethstreet08.webp?v=1709723804"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">152 Elizabeth Street</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/toranomon-hills"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/889142641/rendition/2160p/file.mp4?loc=external&log_user=0&signature=f9a35cc20480abffaeb143c7112a4e3f1683f93edb732d672d4fd2c9a24b3b58"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/66382/toranomon45.webp?v=1709723781"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Toranomon Hills</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/the-forest-v"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/895786288/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c65a83a43906be2e120281e9743f35d97aa8c927bdaca44f83f82db32043e050"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/79432/VerticalForest27.webp?v=1709723798"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">The Forest V</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/the-cedar"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/21694/damansara01.webp?v=1709723801"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">The Cedar</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/one-bennett-park"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_listing/15036/onebennettpark05.webp?v=1709723812"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">One Bennett Park</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/70-vestry"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/18117/70vestry04.webp?v=1709723820"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">70 Vestry</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/111-north"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/784981614/rendition/1080p/file.mp4?loc=external&signature=af15c84c6864b76c606bb752a5fdb9588c6446cd9c9387ea83b17b5cde1c04df"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/20039/111northloopposter.webp?v=1709723790"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">111 North</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/waterline-square"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_listing/17279/waterlinesquare01.webp?v=1709723806"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Waterline Square</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/beckford-house"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://de0dqb7pdorb1.cloudfront.net/beckford_clouds.mp4"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/13936/beckford_clouds.webp?v=1709723810"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Beckford House &amp; Tower
                    </div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/one-clinton-street"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_listing/16190/oneclintonstreet19.webp?v=1709723814"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">One Clinton Street</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/magazine-street-residence"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_listing/20364/magazinest04.webp?v=1709723823"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Magazine Street Residence
                    </div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/stockholm-apartment"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/13464/stockholmapartment14.webp?v=1709723796"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Stockholm Apartment</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/st-regis-hotel-venice"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://de0dqb7pdorb1.cloudfront.net/StRegis_cinemagraph_www.mp4"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/1207/stregis.webp?v=1710177917"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">St Regis Hotel Venice</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/glenstone"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/archive/_selected_slide/1195/Glenstone_08.webp?v=1709723788"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Glenstone</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/hunter-house"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://de0dqb7pdorb1.cloudfront.net/lightmixmain.mp4"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/13869/lightmixmainposter.webp?v=1709723792"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Hunter House</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/city-walk-central-park"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/99678/CityWalk02.webp?v=1712324603"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">City Walk Central Park</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/alarous"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/67168/Roshn01.webp?v=1709723786"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">AlArous</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/nobu-residences"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/67010/NobuResidences01.webp?v=1709723784"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Nobu Residences</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/maybach-s-class"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_listing/29320/maybachsclass04.webp?v=1709726244"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Maybach S-Class</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/mercedes-gla"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/29862/mercedesgla11.webp?v=1709726239"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Mercedes GLA</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/gls-maybach"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/29180/glsmaybach01.webp?v=1709726243"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">GLS Maybach</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/maybach-2022"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/archive/_listing/29491/maybachgls05.webp?v=1709726247"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Maybach 2022</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/2000-ocean"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_listing/20484/2000ocean17.webp?v=1709723826"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">2000 Ocean</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/superhouse"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_listing/22035/superhouse14.webp?v=1709723828"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Superhouse</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/carey-house"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_listing/22844/carey11.webp?v=1709723831"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Carey House</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/staithe-end"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_listing/23013/staith05.webp?v=1709723832"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Staithe End</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/aurora-event-centre"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/archive/_listing/21489/aurora02.webp?v=1709723824"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Aurora Event Centre</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/akili-tower"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_listing/22626/akili05.webp?v=1709723829"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Akili Tower</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/case-furniture"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_listing/28397/case006.webp?v=1709726246"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Case Furniture</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/one-bangkok"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_listing/79637/OneBangkok04.webp?v=1709723802"
                      width={896}
                      height={598}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">One Bangkok</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/anne-moma-virtual-gallery"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/26240/annemoma10.webp?v=1709723808"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Anne Moma Virtual Gallery
                    </div>
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
