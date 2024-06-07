import Image from "next/image";
import Header from "../components/header/Header";
import Link from "next/link";

export default function DigitalTwins() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="digital-twins"
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
                    Digital Twins
                  </span>
                </h1>
                <div className="a9-16 f6-6">
                  <div className="typeset typeset--large revealable-container">
                    <div
                      className="revealable"
                      style={{ transform: "translateY(0%)", opacity: 1 }}
                    >
                      <p>
                        Hyper-photorealistic Digital Twins provide an immersive
                        exploration of existing and off-plan environments — from
                        architectural visualization of single-building
                        developments to district planning and large-scale
                        cities.
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
                <Link
                  href="/work/ancora-collins-wharf-digital-twin"
                  className="listing listing--size_1 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/941552012/rendition/1080p/file.mp4?loc=external&log_user=0&signature=a6ad4b09a766465238d6e9218530283efe5386882b8fd013b94ba8f3968605df"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/109351/Collins-Wharf-Video-Cover20.webp?v=1714559714"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Ancora at Collins Wharf Digital Twin
                    </div>
                  </div>
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <Link
                  href="/work/kinma-valley"
                  className="listing listing--size_2 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/921133972/rendition/1080p/file.mp4?loc=external&log_user=0&signature=313daee27ebc353faf941ead07083dd604ddd14e853dff5924c170f95f0db8a5"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/89961/Kinma-Valley-Video-Cover.webp?v=1710177551"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Kinma Valley</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <Link
                  href="/work/wellington-digital-twin"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/787146241/rendition/1080p/file.mp4?loc=external&signature=db28e4e0ac5c11c6c13cabc8742da41eaa57d74c0ee438a04a1a179de21c2834"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/_selected_slide/30566/wellingtonbposter.webp?v=1709727046"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">
                      Wellington Digital Twin
                    </div>
                  </div>
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a6-12 f6-6">
                <Link
                  href="/work/auckland-digital-twin"
                  className="listing listing--size_4 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/832323524/rendition/1080p/file.mp4?loc=external&signature=9008e5cde0e131d4f217cc3561805485b6d869b32c96a1c8f6b3b07a537334a5"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/43760/Auckland-Digital-Twin-Future-Banner-Poster.webp?v=1709727048"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Auckland Digital Twin</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="grid flex flex--wrap">
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <Link
                  href="/work/northport-digital-twin"
                  className="listing listing--size_1 swiper-slide"
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
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <Link
                  href="/work/christchurch-airport-2040"
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
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <Link
                  href="/work/tauranga"
                  className="listing listing--size_3 swiper-slide"
                >
                  <div className="listing__image-container">
                    <video
                      className="listing__video"
                      src="https://player.vimeo.com/progressive_redirect/playback/787513629/rendition/1080p/file.mp4?loc=external&signature=1fba2bf5e93bb49dec0c42565789c82bb075e8f8c3ba65a85558d95d83fb00b9"
                      playsInline
                      muted
                      loop
                    />
                    <Image
                      className="listing__image"
                      src="https://cdn.the-boundary.com/uploads/projects/_selected_slide/34256/taurangaposter.webp?v=1709727055"
                      width={1360}
                      height={906}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="listing__content">
                    <div className="listing__title">Tauranga Digital Twin</div>
                  </div>
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <Link
                  href="/work/te-awa-lakes-digital-twin"
                  className="listing listing--size_4 swiper-slide"
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
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <Link
                  href="/work/ormiston-digital-twin"
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
                </Link>
              </div>
              <div className="listing__item listing__item--hidden grid__item a4-12 f6-6">
                <Link
                  href="/work/royale-gold-coast"
                  className="listing listing--size_3 swiper-slide"
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
