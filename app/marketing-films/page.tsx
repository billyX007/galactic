import Image from "next/image";
import Header from "../components/header/Header";

export default function MarketingFilms() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="marketing-films"
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
                    Marketing Films
                  </span>
                </h1>
                <div className="a9-16 f6-6">
                  <div className="typeset typeset--large revealable-container">
                    <div
                      className="revealable"
                      style={{ transform: "translateY(0%)", opacity: 1 }}
                    >
                      <p>
                        Immersive and highly realistic CGI films operate as
                        powerful marketing and sales tools.
                        <br />
                        <br />
                        State-of-the-art virtual production and green screen
                        techniques enable TVCs and films to be created at an
                        unprecedented scale and speed, with best-in-class
                        results.
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
                                defaultValue={34254}
                                type="checkbox"
                                name="sectors[]"
                                id="sectors-34254"
                              />
                              <label
                                className="filter__option-label"
                                htmlFor="sectors-34254"
                              >
                                Infrastructure
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
                  href="https://www.the-boundary.com/work/1428-brickell-film"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36519/FilmTheBoundaryBrickellPoster.webp?v=1709723988"
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
                  href="https://www.the-boundary.com/work/mercedes-benz-places-film"
                  className="listing listing--size_2 swiper-slide"
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
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/five-park-miami-beach-film"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36461/FilmFiveParkPoster.webp?v=1709723994"
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
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/611w56-film"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36633/Film611MainPoster.webp?v=1709723993"
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
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/the-whiteley-london-film"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36911/FilmWhiteleysPoster.webp?v=1709723989"
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
                  href="https://www.the-boundary.com/work/waldorf-astoria-films"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36903/FilmWaldorfPoster.webp?v=1709723989"
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
            </div>
            <div className="grid flex flex--wrap">
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/the-clay-yard-film"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/63133/LiddelRoad13.webp?v=1709723988"
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
                  href="https://www.the-boundary.com/work/the-bryanston"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36435/FIlmTheBryanstonPoster.webp?v=1709724001"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">The Bryanston</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/toranomon-hills-film"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36456/FilmToranomonHillsPoster.webp?v=1709723994"
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
                  href="https://www.the-boundary.com/work/87-park-film"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36425/Film87ParkPoster.webp?v=1709723995"
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
                  href="https://www.the-boundary.com/work/565-broome-street-film"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36918/Film565BroomPoster01.webp?v=1709723995"
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
                  href="https://www.the-boundary.com/work/la-mer-main-beach-film"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/91372/LaMer11.webp?v=1710179416"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">La Mer Main Beach</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/red-sea-film"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36471/FilmRedSeaFIIposter.webp?v=1709723998"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Red Sea</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/fisher-paykel"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36531/FilmFisherPaykelReelPoster.webp?v=1710177919"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Fisher &amp; Paykel</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/st-regis-venice-film"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36889/FilmStRegisPoster.webp?v=1709724004"
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
                  href="https://www.the-boundary.com/work/te-awa-lakes-digital-twin"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/832321668/rendition/1080p/file.mp4?loc=external&signature=838c8ed6c54cc312199718002d8862b72f5f3a1f8d952ca00e66b041fa39e318"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/43539/TeAwaLakes_Banner_Poster.webp?v=1709727058"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Te Awa Lakes Digital Twin
                    </div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/northport-vision"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/36566/FilmNorthportVisionPoster.webp?v=1709724000"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Northport Vision</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/northport-digital-twin"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/832322882/rendition/1080p/file.mp4?loc=external&signature=04145a2a308e439ce7f359447f7f96c9fa4de3bbbcf4a63a4e73771a0fd75f78"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/43675/Northport-Digital-Twin-Banner-Poster.webp?v=1709727053"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Northport Digital Twin</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/ormiston-digital-twin"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/833696581/rendition/1080p/file.mp4?loc=external&signature=8b40b68863bc3db1eb63289f38b3a2e23b5161a8922a2543a9de3a750cfef0e8"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/44073/Ormiston-Town-Centre-Digital-Twin-Banner-Poster.webp?v=1709727060"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Ormiston Digital Twin</div>
                  </div>
                </a>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <a
                  href="https://www.the-boundary.com/work/christchurch-airport-2040"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/833715251/rendition/1080p/file.mp4?loc=external&signature=6c57c60147a75eb1cd9b6a89c458abd5e279f8f5e08e8e8871326af7cb1246db"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/44257/Christchurch-Airport-2040-Banner-Poster.webp?v=1709727051"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Christchurch Airport 2040
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
