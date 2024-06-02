import HomeClasses from "./components/base/client/HomeClasses";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <div data-barba="container" data-barba-namespace="home">
      <Header />
      <HomeClasses />
      <main id="main-content" className="main">
        <div className="scroll-container">
          <h1 className="invisible">Home</h1>

          <div className="relative">
            <a className="cursor-default" href="#start">
              <section className="scroll-container__section" id="home-main">
                <div
                  className="hero hero--home"
                  style={{
                    backgroundImage:
                      "url( 'https://cdn.the-boundary.com/uploads/about/_carousel_poster/35001/tbhomepageposter.webp?v=1710865632' )",
                  }}
                >
                  <video
                    className="hero__video"
                    src="https://player.vimeo.com/progressive_redirect/playback/788307741/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=7f7bb92698d7502f7a435cadb026058b2e7b29fc9ac6ce36ea9964a2195adb84"
                    poster="https://cdn.the-boundary.com/uploads/about/_carousel_poster/35001/tbhomepageposter.webp?v=1710865632"
                    playsInline
                    muted
                    loop
                    autoPlay
                  />

                  <div className="hero__arrow"></div>
                </div>
              </section>
            </a>

            <div className="hero__headline-container revealable-container">
              <div
                className="a10-16 f6-6 revealable hero__headline"
                style={{ transform: "translateY(0%); opacity: 1" }}
              >
                Blurring the boundary between the imagined and the real
              </div>

              <div className="revealable-container">
                <div
                  className="revealable"
                  style={{ transform: "translateY(0%); opacity: 1" }}
                >
                  <a
                    className="mt-32 button button--fill-white button--rounded"
                    href="https://www.the-boundary.com/contact"
                  >
                    Discuss your project
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="start" className="relative">
            <div className="carousel-nav">
              <div className="container container--bleed-right-f">
                <ul className="flex carousel-nav__ul">
                  <li
                    data-id="cgis-animations-cinemagraphs"
                    className="carousel-nav__item"
                  >
                    <a href="#cgis-animations-cinemagraphs">
                      CGIs, Animations &amp; Cinemagraphs
                    </a>
                  </li>
                  <li data-id="marketing-films" className="carousel-nav__item">
                    <a href="#marketing-films">Marketing Films</a>
                  </li>
                  <li data-id="virtual-tours" className="carousel-nav__item">
                    <a href="#virtual-tours">Virtual Tours</a>
                  </li>
                  <li
                    data-id="virtual-showrooms"
                    className="carousel-nav__item"
                  >
                    <a href="#virtual-showrooms">Virtual Showrooms</a>
                  </li>
                  <li data-id="digital-twins" className="carousel-nav__item">
                    <a href="#digital-twins">Digital Twins</a>
                  </li>
                  <li data-id="realspace" className="carousel-nav__item">
                    <a href="#realspace">Realspace Sales Platform</a>
                  </li>
                </ul>
              </div>
            </div>

            <section
              className="scroll-container__section"
              id="cgis-animations-cinemagraphs"
            >
              <div className="hp-carousel carousel--homepage">
                <div className="container">
                  <div className="hp-carousel__buttons">
                    <div className="carousel__buttons">
                      <button
                        className="carousel__button carousel__button--prev"
                        aria-label="Previous"
                      ></button>
                      <button
                        className="carousel__button carousel__button--next"
                        aria-label="Next"
                      ></button>
                    </div>
                  </div>
                </div>

                <div className="hp-carousel__viewport is-draggable">
                  <div
                    className="hp-carousel__container"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      className="hp-carousel__slide carousel__slide carousel__slide--video hp-carousel__slide--video viewing"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/49930/whitley-homepage-video-still.webp?v=1708509397' )",
                      }}
                    >
                      <video
                        className="hp-carousel__video"
                        src="https://player.vimeo.com/progressive_redirect/playback/787297322/rendition/1080p/file.mp4?loc=external&amp;signature=8cd9096dd33782e32d3d9402262a7f546ea501e811ba32492c66e7e2f648d8c0#t=0.1"
                        playsInline
                        muted
                        loop
                        preload="none"
                        poster="https://cdn.the-boundary.com/uploads/_carousel_poster/49930/whitley-homepage-video-still.webp?v=1708509397"
                      ></video>

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/the-whiteley-london">
                              The Whiteley London
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/cgis-animations-cinemagraphs"
                          >
                            View all CGIs, Animations &amp; Cinemagraphs case
                            studies
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hp-carousel__slide carousel__slide carousel__slide--video hp-carousel__slide--video"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/projects/_carousel_poster/63131/LiddelRoad07.webp?v=1708528607' )",
                      }}
                    >
                      <video
                        className="hp-carousel__video"
                        src="https://player.vimeo.com/progressive_redirect/playback/887706760/rendition/2160p/file.mp4?loc=external&amp;log_user=0&amp;signature=3656f84b9fd6809e383ffe46b287be1098dc7a3b2eaf9e13db56ee0c4322947b#t=0.1"
                        playsInline
                        muted
                        loop
                        preload="none"
                        poster="https://cdn.the-boundary.com/uploads/projects/_carousel_poster/63131/LiddelRoad07.webp?v=1708528607"
                      ></video>

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/the-clay-yard">
                              The Clay Yard
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/cgis-animations-cinemagraphs"
                          >
                            View all CGIs, Animations &amp; Cinemagraphs case
                            studies
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hp-carousel__slide carousel__slide carousel__slide--video hp-carousel__slide--video"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/3879/brickell29.webp?v=1708971832' )",
                      }}
                    >
                      <video
                        className="hp-carousel__video"
                        src="https://player.vimeo.com/progressive_redirect/playback/887668938/rendition/1440p/file.mp4?loc=external&amp;log_user=0&amp;signature=83efe88378e6f744aedf9e73f678e115f7eea9766b267f6f2c4ce59996afedbe#t=0.1"
                        playsInline
                        muted
                        loop
                        preload="none"
                        poster="https://cdn.the-boundary.com/uploads/_carousel_poster/3879/brickell29.webp?v=1708971832"
                      ></video>

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/1428-brickell">
                              The Residence at 1428 Brickell
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/cgis-animations-cinemagraphs"
                          >
                            View all CGIs, Animations &amp; Cinemagraphs case
                            studies
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hp-carousel__slide carousel__slide"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/75190/WaldorfExterior07.webp?v=1708509400' )",
                      }}
                    >
                      <img
                        className="hp-carousel__image"
                        src="https://cdn.the-boundary.com/uploads/_hero/75190/WaldorfExterior07.webp?v=1710435893"
                        width="2160"
                        height="1440"
                        alt=""
                        loading="lazy"
                      />

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/waldorf-astoria">
                              Waldorf Astoria
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/cgis-animations-cinemagraphs"
                          >
                            View all CGIs, Animations &amp; Cinemagraphs case
                            studies
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-container__section" id="marketing-films">
              <div className="hp-carousel carousel--homepage">
                <div className="container">
                  <div className="hp-carousel__buttons">
                    <div className="carousel__buttons">
                      <button
                        className="carousel__button carousel__button--prev"
                        aria-label="Previous"
                      ></button>
                      <button
                        className="carousel__button carousel__button--next"
                        aria-label="Next"
                      ></button>
                    </div>
                  </div>
                </div>

                <div className="hp-carousel__viewport is-draggable">
                  <div
                    className="hp-carousel__container"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      className="hp-carousel__slide carousel__slide carousel__slide--video hp-carousel__slide--video viewing"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/78140/brickellposter.webp?v=1708509397' )",
                      }}
                    >
                      <video
                        className="hp-carousel__video"
                        src="https://player.vimeo.com/progressive_redirect/playback/887668938/rendition/1440p/file.mp4?loc=external&amp;log_user=0&amp;signature=83efe88378e6f744aedf9e73f678e115f7eea9766b267f6f2c4ce59996afedbe#t=0.1"
                        playsInline
                        muted
                        loop
                        preload="none"
                        poster="https://cdn.the-boundary.com/uploads/_carousel_poster/78140/brickellposter.webp?v=1708509397"
                      ></video>

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/1428-brickell-film">
                              The Residence at 1428 Brickell
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/marketing-films"
                          >
                            View all Marketing Films case studies
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hp-carousel__slide carousel__slide"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/87447/MercedesSouthside09.webp?v=1709664065' )",
                      }}
                    >
                      <img
                        className="hp-carousel__image"
                        src="https://cdn.the-boundary.com/uploads/_hero/87447/MercedesSouthside09.webp?v=1710435883"
                        width="2160"
                        height="1440"
                        alt=""
                        loading="lazy"
                      />

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/mercedes-benz-places-film">
                              Mercedes-Benz Places
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/marketing-films"
                          >
                            View all Marketing Films case studies
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hp-carousel__slide carousel__slide carousel__slide--video hp-carousel__slide--video"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/78144/Fiveparkposter.webp?v=1708509398' )",
                      }}
                    >
                      <video
                        className="hp-carousel__video"
                        src="https://player.vimeo.com/progressive_redirect/playback/888049501/rendition/2160p/file.mp4?loc=external&amp;log_user=0&amp;signature=817c7686739f8d80782eed1cebb1ced485b4421407240bf19d93814b325b5ffb#t=0.1"
                        playsInline
                        muted
                        loop
                        preload="none"
                        poster="https://cdn.the-boundary.com/uploads/_carousel_poster/78144/Fiveparkposter.webp?v=1708509398"
                      ></video>

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/five-park-miami-beach-film">
                              Five Park Miami Beach
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/marketing-films"
                          >
                            View all Marketing Films case studies
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hp-carousel__slide carousel__slide"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/100996/611FilmPoster.webp?v=1710515741' )",
                      }}
                    >
                      <img
                        className="hp-carousel__image"
                        src="https://cdn.the-boundary.com/uploads/_hero/100996/611FilmPoster.webp?v=1710515771"
                        width="2160"
                        height="1440"
                        alt=""
                        loading="lazy"
                      />

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/611w56-film">
                              611 West 56th Street
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/marketing-films"
                          >
                            View all Marketing Films case studies
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hp-carousel__slide carousel__slide"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/92016/whiteley01.webp?v=1710235764' )",
                      }}
                    >
                      <img
                        className="hp-carousel__image"
                        src="https://cdn.the-boundary.com/uploads/_hero/92016/whiteley01.webp?v=1710436058"
                        width="2160"
                        height="1440"
                        alt=""
                        loading="lazy"
                      />

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/the-whiteley-london-film">
                              The Whiteley London
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/marketing-films"
                          >
                            View all Marketing Films case studies
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hp-carousel__slide carousel__slide"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/92389/WaldorfAstoriaFilmPoster.webp?v=1710239501' )",
                      }}
                    >
                      <img
                        className="hp-carousel__image"
                        src="https://cdn.the-boundary.com/uploads/_hero/92389/WaldorfAstoriaFilmPoster.webp?v=1710515774"
                        width="2160"
                        height="1440"
                        alt=""
                        loading="lazy"
                      />

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/waldorf-astoria-films">
                              Waldorf Astoria
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/marketing-films"
                          >
                            View all Marketing Films case studies
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-container__section" id="virtual-tours">
              <div className="hp-carousel carousel--homepage">
                <div className="container">
                  <div className="hp-carousel__buttons">
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

                <div className="hp-carousel__viewport is-draggable">
                  <div
                    className="hp-carousel__container"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      className="hp-carousel__slide carousel__slide carousel__slide--video hp-carousel__slide--video viewing"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/84465/Elements29.webp?v=1708509401' )",
                      }}
                    >
                      <video
                        className="hp-carousel__video"
                        src="https://player.vimeo.com/progressive_redirect/playback/911490248/rendition/720p/file.mp4?loc=external&amp;log_user=0&amp;signature=1290ff3e3a30d7ee8c8942b6b80a79f112c146f685cb6c67aba8ddbb02ebe566#t=0.1"
                        playsInline
                        muted
                        loop
                        preload="none"
                        poster="https://cdn.the-boundary.com/uploads/_carousel_poster/84465/Elements29.webp?v=1708509401"
                      />

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/elements-budds-beach-virtual-tours">
                              Elements Budds Beach Virtual Tours
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/virtual-tours"
                          >
                            View all Virtual Tours case studies
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section
              className="scroll-container__section"
              id="virtual-showrooms"
            >
              <div className="hp-carousel carousel--homepage">
                <div className="container">
                  <div className="hp-carousel__buttons">
                    <div className="carousel__buttons">
                      <button
                        className="carousel__button carousel__button--prev"
                        aria-label="Previous"
                      ></button>
                      <button
                        className="carousel__button carousel__button--next"
                        aria-label="Next"
                      ></button>
                    </div>
                  </div>
                </div>

                <div className="hp-carousel__viewport is-draggable">
                  <div
                    className="hp-carousel__container"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      className="hp-carousel__slide carousel__slide carousel__slide--video hp-carousel__slide--video viewing"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/97084/Screenshot-2024-03-14-at-1.16.34-PM.webp?v=1710379750' )",
                      }}
                    >
                      <video
                        className="hp-carousel__video"
                        src="https://player.vimeo.com/progressive_redirect/playback/923142444/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=ad55d44e667d57a01ef38a178677e16fd109214b997047c0af32038d6072ef6d#t=0.1"
                        playsInline
                        muted
                        loop
                        preload="none"
                        poster="https://cdn.the-boundary.com/uploads/_carousel_poster/97084/Screenshot-2024-03-14-at-1.16.34-PM.webp?v=1710379750"
                      ></video>

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/sky-frame-virtual-showroom">
                              Sky-Frame Virtual Showroom
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/virtual-showrooms"
                          >
                            View all Virtual Showrooms case studies
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hp-carousel__slide carousel__slide carousel__slide--video hp-carousel__slide--video"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/92034/FisherPaykelVideoCover.webp?v=1710235763' )",
                      }}
                    >
                      <video
                        className="hp-carousel__video"
                        src="https://player.vimeo.com/progressive_redirect/playback/787144909/rendition/1080p/file.mp4?loc=external&amp;signature=c7958857c336abbacf3efd9d748fc4845e82c63d1e2fc9a7ee7b7916864ab807#t=0.1"
                        playsInline
                        muted
                        loop
                        preload="none"
                        poster="https://cdn.the-boundary.com/uploads/_carousel_poster/92034/FisherPaykelVideoCover.webp?v=1710235763"
                      ></video>

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/fisher-paykel-virtual-showroom">
                              Fisher &amp; Paykel Virtual Showroom
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/virtual-showrooms"
                          >
                            View all Virtual Showrooms case studies
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-container__section" id="digital-twins">
              <div className="hp-carousel carousel--homepage">
                <div className="container">
                  <div className="hp-carousel__buttons">
                    <div className="carousel__buttons">
                      <button
                        className="carousel__button carousel__button--prev"
                        aria-label="Previous"
                      ></button>
                      <button
                        className="carousel__button carousel__button--next"
                        aria-label="Next"
                      ></button>
                    </div>
                  </div>
                </div>

                <div className="hp-carousel__viewport is-draggable">
                  <div
                    className="hp-carousel__container"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      className="hp-carousel__slide carousel__slide carousel__slide--video hp-carousel__slide--video viewing"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/30566/wellingtonbposter.webp?v=1709600452' )",
                      }}
                    >
                      <video
                        className="hp-carousel__video"
                        src="https://player.vimeo.com/progressive_redirect/playback/787146241/rendition/1080p/file.mp4?loc=external&amp;signature=db28e4e0ac5c11c6c13cabc8742da41eaa57d74c0ee438a04a1a179de21c2834#t=0.1"
                        playsInline
                        muted
                        loop
                        preload="none"
                        poster="https://cdn.the-boundary.com/uploads/_carousel_poster/30566/wellingtonbposter.webp?v=1709600452"
                      ></video>

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/wellington-digital-twin">
                              Wellington Digital Twin
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/digital-twins"
                          >
                            View all Digital Twins case studies
                          </a>
                        </div>
                      </div>
                    </div>

                    <div
                      className="hp-carousel__slide carousel__slide carousel__slide--video hp-carousel__slide--video"
                      style={{
                        backgroundImage:
                          "url( 'https://cdn.the-boundary.com/uploads/_carousel_poster/89961/Kinma-Valley-Video-Cover.webp?v=1709909285' )",
                      }}
                    >
                      <video
                        className="hp-carousel__video"
                        src="https://player.vimeo.com/progressive_redirect/playback/921133972/rendition/1080p/file.mp4?loc=external&amp;log_user=0&amp;signature=313daee27ebc353faf941ead07083dd604ddd14e853dff5924c170f95f0db8a5#t=0.1"
                        playsInline
                        muted
                        loop
                        preload="none"
                        poster="https://cdn.the-boundary.com/uploads/_carousel_poster/89961/Kinma-Valley-Video-Cover.webp?v=1709909285"
                      ></video>

                      <div className="container">
                        <div className="hp-carousel__content">
                          <h2>
                            <a href="https://www.the-boundary.com/work/kinma-valley">
                              Kinma Valley
                            </a>
                          </h2>
                          <a
                            className="hp-carousel__link"
                            href="https://www.the-boundary.com/digital-twins"
                          >
                            View all Digital Twins case studies
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="scroll-container__section" id="realspace">
              <div
                className="hp-carousel__slide carousel__slide"
                style={{
                  backgroundImage:
                    "url( 'https://cdn.the-boundary.com/uploads/projects/_carousel_poster/86428/ParkQuarterDisplay10.webp?v=1710341945' )",
                }}
              >
                <img
                  className="hp-carousel__image"
                  src="https://cdn.the-boundary.com/uploads/projects/_hero/86428/ParkQuarterDisplay10.webp?v=1710435903"
                  width="2160"
                  height="1440"
                  alt=""
                  loading="lazy"
                />

                <div className="container">
                  <div className="hp-carousel__content">
                    <h2>
                      <a href="https://www.the-boundary.com/work/park-quarter-realspace">
                        Park Quarter Realspace
                      </a>
                    </h2>
                    <a
                      className="hp-carousel__link"
                      href="https://www.the-boundary.com/realspace"
                    >
                      View all Realspace Sales Platform case studies
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <section className="scroll-container__section">
            <Footer />
          </section>
        </div>
      </main>
    </div>
  );
}
