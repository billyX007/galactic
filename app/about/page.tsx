import Image from "next/image";
import Header from "../components/header/Header";

export default function About() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="about"
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
                    About
                  </span>
                </h1>
                <div className="a9-16 f6-6">
                  <div className="typeset typeset--large revealable-container">
                    <div
                      className="revealable"
                      style={{ transform: "translateY(0%)", opacity: 1 }}
                    >
                      <p>
                        The Boundary is a world leading creative agency which
                        has mastered computer generated imagery (CGI) and real
                        time gaming technology to create photorealistic
                        marketing content and solutions for real estate
                        developers, destination marketers, and eCommerce focused
                        brands looking to improve their ROI and exploit emerging
                        web3/metaverse opportunities. Innovation and excellence
                        define us.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="container">
            <div className="carousel carousel--about">
              <div className="carousel__inner relative">
                <div className="carousel__absolute-buttons-container grid flex flex--justify-space-between">
                  <div className="grid__item a6-16 f6-6">
                    <div className="carousel__buttons">
                      <button
                        className="carousel__button carousel__button--prev"
                        aria-label="Previous"
                      />
                      <button
                        className="carousel__button carousel__button--next"
                        aria-label="Next"
                      />
                    </div>
                  </div>
                </div>
                <div className="carousel__viewport is-draggable">
                  <div
                    className="carousel__container"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div className="carousel__slide viewing">
                      <div className="grid flex flex--justify-space-between fh">
                        <div className="grid__item a4-16 move-down removed-at-f">
                          <Image
                            className="lazy loaded"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47003/office_culture_01-v1672232382.webp?v=1710435921"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47003/office_culture_01-v1672232382.webp?v=1710435921"
                            width={664}
                            height={712}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="grid__item a10-16 f6-6">
                          <Image
                            className="lazy loaded"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47004/boundaryabout-v1673260847.webp?v=1710435923"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47004/boundaryabout-v1673260847.webp?v=1710435923"
                            width={1768}
                            height={1234}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid flex flex--justify-space-between fh">
                        <div className="grid__item a2-12 removed-at-f" />
                        <div className="grid__item a8-16 f6-6 move-down move-down--xs">
                          <Image
                            className="lazy loaded"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47012/staffphotoxmas2022-v1676630592.webp?v=1710435926"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47012/staffphotoxmas2022-v1676630592.webp?v=1710435926"
                            width={1768}
                            height={1234}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="a1-16 removed-at-f" />
                        <div className="grid__item a5-16 f6-6 removed-at-f">
                          <Image
                            className="lazy loaded"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47011/42GA_11-v1672911236.webp?v=1710435926"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47011/42GA_11-v1672911236.webp?v=1710435926"
                            width={664}
                            height={712}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid flex flex--justify-space-between fh">
                        <div className="grid__item a3-16" />
                        <div className="grid__item a4-16 f6-6">
                          <Image
                            className="lazy loaded"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47013/PeterHenry-v1676633998.webp?v=1710435927"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47013/PeterHenry-v1676633998.webp?v=1710435927"
                            width={664}
                            height={712}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="grid__item a8-16 f6-6">
                          <Image
                            className="lazy"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47014/ChristmasMontage-v1676631349.webp?v=1710435930"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47014/ChristmasMontage-v1676631349.webp?v=1710435930"
                            width={1768}
                            height={1234}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid flex flex--justify-space-between fh">
                        <div className="grid__item a2-12 removed-at-f" />
                        <div className="grid__item a8-16 f6-6 move-down move-down--xs">
                          <Image
                            className="lazy"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47010/AucklandOffice001-v1676633340.webp?v=1710435932"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47010/AucklandOffice001-v1676633340.webp?v=1710435932"
                            width={1768}
                            height={1234}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="a1-16 removed-at-f" />
                        <div className="grid__item a5-16 f6-6 removed-at-f">
                          <Image
                            className="lazy"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47009/AucklandOffice002-v1676633327.webp?v=1710435934"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47009/AucklandOffice002-v1676633327.webp?v=1710435934"
                            width={664}
                            height={712}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid flex flex--justify-space-between fh">
                        <div className="grid__item a4-16 move-down removed-at-f">
                          <Image
                            className="lazy"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47005/TheBoundaryPool01-v1676635691.webp?v=1710435935"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47005/TheBoundaryPool01-v1676635691.webp?v=1710435935"
                            width={664}
                            height={712}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="grid__item a10-16 f6-6">
                          <Image
                            className="lazy"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47006/TheBoundaryLondon-v1676635681.webp?v=1710435938"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47006/TheBoundaryLondon-v1676635681.webp?v=1710435938"
                            width={1768}
                            height={1234}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid flex flex--justify-space-between fh">
                        <div className="grid__item a3-16" />
                        <div className="grid__item a4-16 f6-6">
                          <Image
                            className="lazy"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47007/Chopper01-v1676638111.webp?v=1710435938"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_small/47007/Chopper01-v1676638111.webp?v=1710435938"
                            width={664}
                            height={712}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <div className="grid__item a8-16 f6-6">
                          <Image
                            className="lazy"
                            src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47008/TheBoundaryNewYork-v1676638113.webp?v=1710435941"
                            data-src="https://cdn.the-boundary.com/uploads/about/_about_image_xl/47008/TheBoundaryNewYork-v1676638113.webp?v=1710435941"
                            width={1768}
                            height={1234}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="page__spacing-lg">
              <h2 className="ph mb-32">Services</h2>
              <div className="typeset typeset--large">
                <ul className="columns a12-16">
                  <li>CGIs</li>
                  <li>Metaverse/Web 3.0</li>
                  <li>Animation</li>
                  <li>Art Direction</li>
                  <li>Film</li>
                  <li>Interior Design &amp; Styling</li>
                  <li>Virtual Reality</li>
                  <li>Photography</li>
                  <li>Interactive 3D Experience</li>
                  <li>Drone Photography</li>
                  <li>eCommerce</li>
                  <li>Sales Gallery Software</li>
                  <li>Digital Twin</li>
                  <li>Web Design</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="flex flex--wrap">
              <div className="page__spacing-lg">
                <div className="grid flex flex--wrap flex--align-center flex--justify-space-between">
                  <div className="grid__item a8-16 f6-6">
                    <Image
                      className="about-blocks__image"
                      src="https://cdn.the-boundary.com/uploads/about/_image_half/47008/TheBoundaryNewYork-v1676638113.webp?v=1710435881"
                      width={1044}
                      height={695}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="grid__item a7-16 f6-6">
                    <h2 className="ph mb-16">Global team</h2>
                    <div className="typeset typeset--large">
                      <p>
                        With over 100 in-house CGI artists and creative
                        technologists based across our London, New York and New
                        Zealand studios, The Boundary is uniquely positioned to
                        deliver photorealistic end-to-end client services across
                        the emerging web3/metaverse for real estate, hospitality
                        and eCommerce clients with the benefit of 24/7 working
                        patterns.
                      </p>
                    </div>
                    <a
                      className="about-blocks__link"
                      href="https://www.the-boundary.com/people"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="page__spacing-lg fw">
                <div className="grid flex flex--wrap flex--align-center flex--justify-space-between flex--row-reverse">
                  <div className="grid__item a8-16 f6-6">
                    <div data-heading="Realspace">
                      <div className="video-in-slideshow video-in-slideshow--paused flex-container">
                        <video
                          className="video-in-slideshow__video controlled-video"
                          src="https://player.vimeo.com/progressive_redirect/playback/807442138/rendition/1080p/file.mp4?loc=external&signature=5361494775ce304c1f972019bf4d6f535730fe198608d5ac1a0f446ba3f7f60b"
                          playsInline
                          poster="https://cdn.the-boundary.com/uploads/projects/_video_poster/42683/RealspaceCommercialPoster.webp?v=1710435884"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid__item a7-16 f6-6">
                    <h2 className="ph mb-16">Realspace</h2>
                    <div className="typeset typeset--large">
                      <p>
                        Realspace transforms the way you sell off-plan, speeding
                        up the sales cycle and improving conversion. Watch the
                        full video explainer here which brings all the benefits
                        and functionality to life.
                      </p>
                    </div>
                    <a
                      className="about-blocks__link"
                      href="https://www.the-boundary.com/contact"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="page__spacing-lg">
              <div className="a9-16 f6-6">
                <h2 className="intro__title ph">The Boundary</h2>
                <div className="typeset typeset--large">
                  <p>
                    We believe the social cohesion of the team is fundamental to
                    the success of the studio. From attending&nbsp;industry
                    conferences to summer trips to unwind, we try to have fun
                    and of course, document it.&nbsp;
                    <br />
                    <br />
                    Here are some of the highlights of past years.
                  </p>
                </div>
              </div>
              <div
                className="carousel carousel--bleed carousel--dynamic-heading"
                data-autoplay-videos={0}
              >
                <div className="carousel__header flex flex--align-center flex--justify-space-between">
                  <h2 className="carousel__partner-heading carousel__partner-heading--dynamic">
                    Christmas Party 2023
                  </h2>
                  <div className="carousel__buttons ">
                    <button
                      className="carousel__button carousel__button--prev"
                      aria-label="Previous"
                    />
                    <button
                      className="carousel__button carousel__button--next"
                      aria-label="Next"
                    />
                  </div>
                </div>
                <div className="carousel__viewport is-draggable">
                  <div
                    className="carousel__container"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      className="carousel__slide carousel__slide--video_slide viewing"
                      data-heading="Christmas Party 2023"
                    >
                      <div className="video-in-slideshow video-in-slideshow--paused flex-container">
                        <video
                          className="video-in-slideshow__video controlled-video"
                          src="https://player.vimeo.com/progressive_redirect/playback/896123221/rendition/1440p/file.mp4?loc=external&log_user=0&signature=ebca372c18ba60a8564bd256fa3b726fd2faf39ae35d98d42ce5360c17bd0e90"
                          playsInline
                          poster="https://cdn.the-boundary.com/uploads/_video_poster/80216/Christmas-23-Cover.webp?v=1710435943"
                        />
                        <video
                          className="video-in-slideshow__video-poster"
                          src="https://player.vimeo.com/progressive_redirect/playback/896123221/rendition/1440p/file.mp4?loc=external&log_user=0&signature=ebca372c18ba60a8564bd256fa3b726fd2faf39ae35d98d42ce5360c17bd0e90"
                          playsInline
                          autoPlay
                          muted
                          loop
                          poster="https://cdn.the-boundary.com/uploads/_video_poster/80216/Christmas-23-Cover.webp?v=1710435943"
                        />
                      </div>
                    </div>
                    <div
                      className="carousel__slide carousel__slide--video_slide"
                      data-heading="Mallorca 2023"
                    >
                      <div className="video-in-slideshow video-in-slideshow--paused flex-container">
                        <video
                          className="video-in-slideshow__video controlled-video"
                          src="https://player.vimeo.com/progressive_redirect/playback/891932085/rendition/1080p/file.mp4?loc=external&log_user=0&signature=417845966036a8ccb4edcb0ff9ab3295a8f82155da55f718c33c09ab759b2e17"
                          playsInline
                          poster="https://cdn.the-boundary.com/uploads/_video_poster/72885/Mallorca-2023-Cover.webp?v=1710435945"
                        />
                      </div>
                    </div>
                    <div
                      className="carousel__slide carousel__slide--video_slide"
                      data-heading="Christmas Party 2022"
                    >
                      <div className="video-in-slideshow video-in-slideshow--paused flex-container">
                        <video
                          className="video-in-slideshow__video controlled-video"
                          src="https://player.vimeo.com/progressive_redirect/playback/788710978/rendition/1080p/file.mp4?loc=external&signature=7809c1c08d36b4dbe35aa759ce3cf166ada8721c90a488cc612b4edf80829b8b"
                          playsInline
                          poster="https://cdn.the-boundary.com/uploads/_video_poster/47015/christmas2022-v1673541418.webp?v=1710435947"
                        />
                      </div>
                    </div>
                    <div
                      className="carousel__slide carousel__slide--video_slide"
                      data-heading="Mallorca 2022"
                    >
                      <div className="video-in-slideshow video-in-slideshow--paused flex-container">
                        <video
                          className="video-in-slideshow__video controlled-video"
                          src="https://player.vimeo.com/progressive_redirect/playback/722986373/rendition/1080p/file.mp4?loc=external&signature=0fd5bbe7abde0eccbae4cc386c64fdcd8f2d3456634b0f07e401f4575a529c48"
                          playsInline
                          poster="https://cdn.the-boundary.com/uploads/_video_poster/80802/mallorca2022-v1673001547_2023-12-19-113159_dqnn.webp?v=1710435949"
                        />
                      </div>
                    </div>
                    <div
                      className="carousel__slide carousel__slide--video_slide"
                      data-heading="Christmas Party 2021"
                    >
                      <div className="video-in-slideshow video-in-slideshow--paused flex-container">
                        <video
                          className="video-in-slideshow__video controlled-video"
                          src="https://player.vimeo.com/progressive_redirect/playback/656960578/rendition/1080p/file.mp4?loc=external&signature=853273d44b3f53ed1f7a7f06d98fb97db6956cae5b5a8cca01b15dfeefc7aafd"
                          playsInline
                          poster="https://cdn.the-boundary.com/uploads/_video_poster/47017/christmas2021-v1673539480.webp?v=1710435951"
                        />
                      </div>
                    </div>
                    <div
                      className="carousel__slide carousel__slide--video_slide"
                      data-heading="Summer video 2019"
                    >
                      <div className="video-in-slideshow video-in-slideshow--paused flex-container">
                        <video
                          className="video-in-slideshow__video controlled-video"
                          src="https://player.vimeo.com/progressive_redirect/playback/375896299/rendition/1080p/file.mp4?loc=external&signature=7eb3cea5c8d4d4db10d90ba11078d95f63b6d31dbf223f487aaed20045bff888"
                          playsInline
                          poster="https://cdn.the-boundary.com/uploads/_video_poster/47020/summer2019-v1673611660.webp?v=1710435953"
                        />
                      </div>
                    </div>
                    <div
                      className="carousel__slide carousel__slide--video_slide"
                      data-heading="Christmas party 2019"
                    >
                      <div className="video-in-slideshow video-in-slideshow--paused flex-container">
                        <video
                          className="video-in-slideshow__video controlled-video"
                          src="https://player.vimeo.com/progressive_redirect/playback/380332273/rendition/1080p/file.mp4?loc=external&signature=09d164108a131bed4dd95afa0306bc0a6589d6e8be983fa9e7eadda4ab9bff8b"
                          playsInline
                          poster="https://cdn.the-boundary.com/uploads/_video_poster/47019/christmas2019-v1673612499.webp?v=1710435955"
                        />
                      </div>
                    </div>
                    <div
                      className="carousel__slide carousel__slide--video_slide"
                      data-heading="Summer video 2020"
                    >
                      <div className="video-in-slideshow video-in-slideshow--paused flex-container">
                        <video
                          className="video-in-slideshow__video controlled-video"
                          src="https://player.vimeo.com/progressive_redirect/playback/476036532/rendition/1080p/file.mp4?loc=external&signature=c8a69cc427122bbe3e257b4cb477d9b97dd373fe6b4f009cbb074c63c080a287"
                          playsInline
                          poster="https://cdn.the-boundary.com/uploads/_video_poster/47018/summer2020-v1673612772.webp?v=1710435957"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
