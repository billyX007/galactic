import Image from "next/image";
import Header from "../../components/header/Header";
import Link from "next/link";

export default function Slug() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="case_study"
      style={{ opacity: 1 }}
    >
      <Header />
      <main id="main-content" className="main">
        <div
          className="hero hero--flush parallax"
          style={{ transform: "translate3d(0px, 1068.8px, 0px)" }}
        >
          <video
            className="hero-media"
            src="https://player.vimeo.com/progressive_redirect/playback/787297322/rendition/1080p/file.mp4?loc=external&signature=8cd9096dd33782e32d3d9402262a7f546ea501e811ba32492c66e7e2f648d8c0"
            autoPlay
            muted
            playsInline
            loop
          />
          <Image
            className="hero-media__poster hero-media__poster--faded"
            src="https://cdn.the-boundary.com/uploads/projects/_carousel_poster/32512/whiteleycine01poster.webp?v=1708509431"
            width={1512}
            height={865}
            alt=""
            loading="lazy"
          />
          <h1
            className="hero__title revealable-container"
            style={{ transform: "translate3d(0px, -1068.8px, 0px)" }}
          >
            <span
              className="revealable"
              style={{ transform: "translateY(0%)", opacity: 1 }}
            >
              The Whiteley London
            </span>
          </h1>
        </div>
        <section className="section parallax-content">
          <div className="breadcrumbs-bar-wrapper">
            <div className="breadcrumbs-bar breadcrumbs-bar--sticky">
              <div className="container">
                <div className="breadcrumbs-bar__inner">
                  <nav className="breadcrumbs-bar__breadcrumbs">
                    <ol>
                      <li>
                        <Link
                          className="breadcrumbs-bar__link"
                          href="/cgis-animations-cinemagraphs"
                        >
                          CGIs, Animations &amp; Cinemagraphs
                        </Link>
                      </li>
                      <li>The Whiteley London</li>
                    </ol>
                  </nav>
                  <Link
                    href="/cgis-animations-cinemagraphs"
                    className="breadcrumbs-bar__back-to-sector"
                    aria-label="Back to top"
                  />
                  <Link className="breadcrumbs-bar__link" href="/contact">
                    Contact us
                  </Link>
                  <button
                    className="breadcrumbs-bar__back-to-top"
                    aria-label="Back to top"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="page__spacing-lg">
              <div className="grid flex flex--wrap flex--justify-space-between">
                <div className="grid__item a8-16 f6-6">
                  <div className="typeset typeset--large">
                    <p>
                      Through external restoration and thoughtful design, The
                      Whiteley London re-opens its doors with Londona&apos;s
                      first Six Senses Hotel and new private residences, shops
                      and amenities designed by Foster + Partners.&nbsp;
                      <br />
                    </p>
                  </div>
                </div>
                <div className="grid__item a6-16 f6-6">
                  <div className="project-detail__container">
                    <div className="project-detail grid flex flex--wrap">
                      <div className="grid__item a4-12">
                        <div className="project-detail__heading">Location</div>
                      </div>
                      <div className="grid__item a8-12">UK</div>
                    </div>
                    <div className="project-detail grid flex flex--wrap">
                      <div className="grid__item a4-12">
                        <div className="project-detail__heading">Developer</div>
                      </div>
                      <div className="grid__item a8-12">MARK</div>
                    </div>
                    <div className="project-detail grid flex flex--wrap">
                      <div className="grid__item a4-12">
                        <div className="project-detail__heading">Architect</div>
                      </div>
                      <div className="grid__item a8-12">
                        Foster &amp; Partners
                      </div>
                    </div>
                    <div className="project-detail grid flex flex--wrap">
                      <div className="grid__item a4-12">
                        <div className="project-detail__heading">
                          Project Services
                        </div>
                      </div>
                      <div className="grid__item a8-12">
                        CGIs + Animations + Cinemagraphs + Film
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--images">
            <div className="container">
              <div className="grid flex">
                <div className="grid__item a16-16">
                  <div className="project-block__image">
                    <Image
                      className="lazy loaded"
                      src="https://cdn.the-boundary.com/uploads/projects/_hero/1968/whiteley01.webp?v=1710435966"
                      data-src="https://cdn.the-boundary.com/uploads/projects/_hero/1968/whiteley01.webp?v=1710435966"
                      width={2160}
                      height={1440}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--video_autoplay">
            <div className="container container--fw container--full-bleed relative">
              <div className="project-block__video">
                <video
                  className="video-autoplay"
                  src="https://player.vimeo.com/progressive_redirect/playback/787297353/rendition/1080p/file.mp4?loc=external&signature=11796e922f566d3bb3f4d2375dd440b512254aac1e8e109276fc7c28796aa11d"
                  poster="https://cdn.the-boundary.com/uploads/projects/whiteleycine04poster.jpg?v=1673179425"
                  playsInline
                  muted
                  loop
                />
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--text">
            <div className="container ">
              <div className="a8-16 f6-6">
                <div className="typeset typeset--large">
                  <h2>Architecture</h2>
                  <p>
                    The £1 billion re-development of the previous historic site
                    of The Whiteley combines its heritage with the latest in
                    British innovation and design to create a new, contemporary
                    look
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--video_autoplay">
            <div className="container  relative">
              <div className="project-block__video">
                <video
                  className="video-autoplay"
                  src="https://player.vimeo.com/progressive_redirect/playback/787317056/rendition/1080p/file.mp4?loc=external&signature=e6db3db272e8431ab3cd7e4d99242a713de790e81e9b7d19ee7f388cb9d1ec1d"
                  poster="https://cdn.the-boundary.com/uploads/projects/whiteleyexteriorposter.jpg?v=1673188540"
                  playsInline
                  muted
                  loop
                />
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--call_to_action">
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
          <div className="project-block project-block-- project-block--quote">
            <div className="container">
              <div className="grid grid--wide flex flex--wrap flex--align-center flex--justify-end">
                <div className="grid__item a5-16 f6-6">
                  <Image
                    className="lazy loaded"
                    src="https://cdn.the-boundary.com/uploads/projects/_project_slide/32692/whiteley058.webp?v=1710435969"
                    data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/32692/whiteley058.webp?v=1710435969"
                    width={1920}
                    height={1440}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="grid__item a2-16 remove-at-f" />
                <div className="grid__item a6-16 f6-6">
                  <figure className="quote">
                    <blockquote>
                      <span className="quote__mark">“</span>
                      <p className="quote__text">
                        The architecture creates a wonderful quality of
                        calmness, light and space, where the new and old are
                        carefully interwoven
                      </p>
                    </blockquote>
                    <figcaption className="quote__cap">
                      <div className="quote__cap-text">
                        Patrick Campbell
                        <br />
                        <div className="quote__job-title">
                          Foster + Partners
                        </div>{" "}
                      </div>
                    </figcaption>
                  </figure>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--images">
            <div className="container">
              <div className="grid grid--double flex">
                <div className="grid__item a8-16">
                  <div className="project-block__image">
                    <Image
                      className="lazy loaded"
                      src="https://cdn.the-boundary.com/uploads/projects/_project_portrait/1969/whiteley02.webp?v=1710435972"
                      data-src="https://cdn.the-boundary.com/uploads/projects/_project_portrait/1969/whiteley02.webp?v=1710435972"
                      width={1008}
                      height={1362}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid__item a8-16">
                  <div className="project-block__image">
                    <Image
                      className="lazy loaded"
                      src="https://cdn.the-boundary.com/uploads/projects/_project_portrait/14280/whiteley39.webp?v=1710435974"
                      data-src="https://cdn.the-boundary.com/uploads/projects/_project_portrait/14280/whiteley39.webp?v=1710435974"
                      width={1008}
                      height={1362}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--video_controls">
            <div className="container relative">
              <div className="project-block__video project-block__video--controls">
                <video
                  className="video-controls controlled-video"
                  src="https://player.vimeo.com/progressive_redirect/playback/797454287/rendition/1080p/file.mp4?loc=external&signature=c87eab720bf2eb54a7b0fb34566675e5e5b66a3c3053952ff7ab10dcd6821c91"
                  poster="https://cdn.the-boundary.com/uploads/projects/FilmWhiteleysPoster.jpg?v=1675967455"
                  playsInline
                  controls
                />
                <button className="project-block__video-play-button" />
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--image_slideshow">
            <div className="container container--bleed-right">
              <div
                className="carousel carousel--bleed carousel--project-images"
                data-options='{
						"dragFree": true
					}'
                data-autoplay-videos={1}
              >
                <div className="carousel__header flex flex--align-center flex--justify-space-between">
                  <div className="carousel__slide-count">
                    <span className="carousel__slide-count-current">1</span>
                    <span className="carousel__slide-count-bar" />
                    <span className="carousel__slide-count-total">4</span>
                  </div>
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
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy loaded"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33052/whiteley59.webp?v=1710435976"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33052/whiteley59.webp?v=1710435976"
                        width={1440}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy loaded"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1974/whiteley07.webp?v=1710435979"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1974/whiteley07.webp?v=1710435979"
                        width={2194}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy loaded"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1972/whiteley05.webp?v=1710435982"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1972/whiteley05.webp?v=1710435982"
                        width={2559}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy loaded"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1973/whiteley06.webp?v=1710435986"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1973/whiteley06.webp?v=1710435986"
                        width={2559}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <p className="project-block__slideshow-caption" />
            </div>
          </div>
          <div className="project-block project-block-- project-block--text">
            <div className="container ">
              <div className="a8-16 f6-6">
                <div className="typeset typeset--large">
                  <p>
                    Modelled to a high level,&nbsp;The Boundary produced a
                    series of over 50 crafted CGI&apos;s and Animations for The
                    Whiteley to use in their marketing suite. Modelling and
                    visualizing the full environment of the spaces has been a
                    key part of the journey of launching and supporting the
                    restoration the mixed use development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--before_after_image">
            <div className="container">
              <div className="project-block__before-after-wrapper">
                <Image
                  className="project-block__before-after-item lazy loaded"
                  src="https://cdn.the-boundary.com/uploads/projects/_hero/15400/whiteleycomp01diff.webp?v=1710435986"
                  data-src="https://cdn.the-boundary.com/uploads/projects/_hero/15400/whiteleycomp01diff.webp?v=1710435986"
                  width={2160}
                  height={1440}
                  alt=""
                  loading="lazy"
                />
                <Image
                  className="project-block__before-after-item project-block__before-after-item--after lazy loaded"
                  src="https://cdn.the-boundary.com/uploads/projects/_hero/15399/whiteleycomp01clay.webp?v=1710435986"
                  data-src="https://cdn.the-boundary.com/uploads/projects/_hero/15399/whiteleycomp01clay.webp?v=1710435986"
                  width={2160}
                  height={1440}
                  alt=""
                  loading="lazy"
                />
                <input
                  type="range"
                  min={0}
                  max={400}
                  defaultValue={200}
                  step={1}
                  className="project-block__before-after-slider"
                  name="slider"
                  aria-label="Compare before and after"
                />
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--quote">
            <div className="container">
              <div className="grid grid--wide flex flex--wrap flex--align-center flex--justify-end">
                <div className="grid__item a5-16 f6-6">
                  <Image
                    className="lazy loaded"
                    src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1994/whiteley28.webp?v=1710435988"
                    data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1994/whiteley28.webp?v=1710435988"
                    width={1152}
                    height={1440}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="grid__item a2-16 remove-at-f" />
                <div className="grid__item a6-16 f6-6">
                  <figure className="quote">
                    <blockquote>
                      <span className="quote__mark">“</span>
                      <p className="quote__text">
                        The scale and impact that The Whiteley will have on
                        Bayswater area and this particular part of London are
                        enormous, therefore, an agency that could deliver above
                        expectations and that is known for excellence in their
                        field was essential.
                      </p>
                    </blockquote>
                    <figcaption className="quote__cap">
                      <div className="quote__cap-text">
                        Charles Leigh
                        <br />
                        <div className="quote__job-title">Finchatton</div>{" "}
                      </div>
                    </figcaption>
                  </figure>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--text">
            <div className="container ">
              <div className="a8-16 f6-6">
                <div className="typeset typeset--large">
                  <h2>Residences</h2>
                  <p>
                    Presenting 139 new residences, every apartment at The
                    Whiteley residence is unique from its design to its
                    space.&nbsp;Playing with scale, space and light through
                    impressive ceiling heights, the residence provides an escape
                    whilst being connected to the West London community.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--images">
            <div className="container">
              <div className="grid flex">
                <div className="grid__item a16-16">
                  <div className="project-block__image">
                    <Image
                      className="lazy loaded"
                      src="https://cdn.the-boundary.com/uploads/projects/_hero/20100/whiteley16_2022-12-29-145358_ozap.webp?v=1710435988"
                      data-src="https://cdn.the-boundary.com/uploads/projects/_hero/20100/whiteley16_2022-12-29-145358_ozap.webp?v=1710435988"
                      width={2160}
                      height={1440}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--video_autoplay">
            <div className="container  relative">
              <div className="project-block__video">
                <video
                  className="video-autoplay"
                  src="https://player.vimeo.com/progressive_redirect/playback/787317006/rendition/1080p/file.mp4?loc=external&signature=454019e02541a85aded1177d87cc5a3f951995455e11980c58ea64368fb802e5"
                  poster="https://cdn.the-boundary.com/uploads/projects/whiteleyresiposter.jpg?v=1673189887"
                  playsInline
                  muted
                  loop
                />
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--quote">
            <div className="container">
              <div className="grid grid--wide flex flex--wrap flex--align-center flex--justify-end flex--row-reverse">
                <div className="grid__item a5-16 f6-6">
                  <Image
                    className="lazy"
                    src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1984/whiteley17.webp?v=1710435990"
                    data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1984/whiteley17.webp?v=1710435990"
                    width={1152}
                    height={1440}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="grid__item a2-16 remove-at-f" />
                <div className="grid__item a6-16 f6-6">
                  <figure className="quote">
                    <blockquote>
                      <span className="quote__mark">“</span>
                      <p className="quote__text">
                        The Boundary’s approach and commitment to detail allowed
                        us to navigate towards our vision with ease and without
                        compromise, and we continue to use their services as the
                        project enters new phases. We would highly recommend
                        them
                      </p>
                    </blockquote>
                    <figcaption className="quote__cap">
                      <div className="quote__cap-text">
                        Charles Leigh
                        <br />
                        <div className="quote__job-title">Finchatton</div>{" "}
                      </div>
                    </figcaption>
                  </figure>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--images">
            <div className="container">
              <div className="grid grid--double flex">
                <div className="grid__item a8-16">
                  <div className="project-block__image">
                    <Image
                      className="lazy"
                      src="https://cdn.the-boundary.com/uploads/projects/_project_portrait/20025/whiteley19_2022-12-29-122828_odac.webp?v=1710435991"
                      data-src="https://cdn.the-boundary.com/uploads/projects/_project_portrait/20025/whiteley19_2022-12-29-122828_odac.webp?v=1710435991"
                      width={1008}
                      height={1362}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="grid__item a8-16">
                  <div className="project-block__image">
                    <Image
                      className="lazy"
                      src="https://cdn.the-boundary.com/uploads/projects/_project_portrait/20027/whiteley09_2022-12-29-122846_yuxf.webp?v=1710435991"
                      data-src="https://cdn.the-boundary.com/uploads/projects/_project_portrait/20027/whiteley09_2022-12-29-122846_yuxf.webp?v=1710435991"
                      width={1008}
                      height={1362}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--video_autoplay">
            <div className="container  relative">
              <div className="project-block__video">
                <video
                  className="video-autoplay"
                  src="https://player.vimeo.com/progressive_redirect/playback/787297328/rendition/1080p/file.mp4?loc=external&signature=3752c60725676b659ed2d28823cf4cc03130aada5f8bd905f1c20d90f92503fa"
                  poster="https://cdn.the-boundary.com/uploads/projects/whiteleycine02poster.jpg?v=1673191984"
                  playsInline
                  muted
                  loop
                />
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--image_slideshow">
            <div className="container container--bleed-right">
              <div
                className="carousel carousel--bleed carousel--project-images"
                data-options='{
						"dragFree": true
					}'
                data-autoplay-videos={1}
              >
                <div className="carousel__header flex flex--align-center flex--justify-space-between">
                  <div className="carousel__slide-count">
                    <span className="carousel__slide-count-current">1</span>
                    <span className="carousel__slide-count-bar" />
                    <span className="carousel__slide-count-total">7</span>
                  </div>
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
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1979/whiteley12.webp?v=1710435991"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1979/whiteley12.webp?v=1710435991"
                        width={2160}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1980/whiteley13.webp?v=1710435991"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1980/whiteley13.webp?v=1710435991"
                        width={2161}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/20018/whiteley14_2022-12-29-122738_zryl.webp?v=1710435991"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/20018/whiteley14_2022-12-29-122738_zryl.webp?v=1710435991"
                        width={2162}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/20021/whiteley15_2022-12-29-122747_pqvp.webp?v=1710435991"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/20021/whiteley15_2022-12-29-122747_pqvp.webp?v=1710435991"
                        width={2559}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/20109/whiteley20_2022-12-29-145540_khne.webp?v=1710435991"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/20109/whiteley20_2022-12-29-145540_khne.webp?v=1710435991"
                        width={2160}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1989/whiteley22.webp?v=1710435991"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1989/whiteley22.webp?v=1710435991"
                        width={2160}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1990/whiteley23.webp?v=1710435992"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1990/whiteley23.webp?v=1710435992"
                        width={2160}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <p className="project-block__slideshow-caption" />
            </div>
          </div>
          <div className="project-block project-block-- project-block--video_autoplay">
            <div className="container  relative">
              <div className="project-block__video">
                <video
                  className="video-autoplay"
                  src="https://player.vimeo.com/progressive_redirect/playback/787336354/rendition/1080p/file.mp4?loc=external&signature=d967cc769b68371d8cdd01cf01f43e100b5382a6566b95051c7501e5dfec64b1"
                  poster="https://cdn.the-boundary.com/uploads/projects/whiteleysdrone.jpg?v=1673195496"
                  playsInline
                  muted
                  loop
                />
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--text">
            <div className="container ">
              <div className="a8-16 f6-6">
                <div className="typeset typeset--large">
                  <p>
                    With ten years experience of aerial photography in cities
                    across the globe, The Boundary continues to provide the
                    highest quality drone photography and cinematography in a
                    new technological era of Unmanned Aerial Surveillance
                    Aircraft. Be it 360 view photography, video content for
                    marketing films or photographic assets for integration in
                    our CGI workflow we have it all covered.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--image_slideshow">
            <div className="container container--bleed-right">
              <div
                className="carousel carousel--bleed carousel--project-images"
                data-options='{
						"dragFree": true
					}'
                data-autoplay-videos={1}
              >
                <div className="carousel__header flex flex--align-center flex--justify-space-between">
                  <div className="carousel__slide-count">
                    <span className="carousel__slide-count-current">1</span>
                    <span className="carousel__slide-count-bar" />
                    <span className="carousel__slide-count-total">4</span>
                  </div>
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
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1984/whiteley17.webp?v=1710435990"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1984/whiteley17.webp?v=1710435990"
                        width={1152}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/20108/whiteley27_2022-12-29-145517_hnmh.webp?v=1710435992"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/20108/whiteley27_2022-12-29-145517_hnmh.webp?v=1710435992"
                        width={2160}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/20106/whiteley26_2022-12-29-145454_vlnb.webp?v=1710435992"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/20106/whiteley26_2022-12-29-145454_vlnb.webp?v=1710435992"
                        width={2160}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1985/whiteley18.webp?v=1710435992"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1985/whiteley18.webp?v=1710435992"
                        width={2161}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <p className="project-block__slideshow-caption">
                Some of the vignettes we created for the campaign. A mix of
                unusual viewpoints and more intimate camera angles.
              </p>
            </div>
          </div>
          <div className="project-block project-block-- project-block--call_to_action">
            <div className="call-to-action">
              <div className="container">
                <h2 className="call-to-action__title revealable-container">
                  <span
                    className="revealable"
                    style={{ transform: "translateY(0%)", opacity: 1 }}
                  >
                    Interested to learn more?
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
          <div className="project-block project-block-- project-block--video_autoplay">
            <div className="container  relative">
              <div className="project-block__video">
                <video
                  className="video-autoplay"
                  src="https://player.vimeo.com/progressive_redirect/playback/787297336/rendition/1080p/file.mp4?loc=external&signature=7239d061d927ccaa82af5442cbb3102572cc2de92ecd225a1dd80a48e38992f7"
                  poster="https://cdn.the-boundary.com/uploads/projects/whiteleycine03poster.jpg?v=1673179588"
                  playsInline
                  muted
                  loop
                />
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--text">
            <div className="container ">
              <div className="a8-16 f6-6">
                <div className="typeset typeset--large">
                  <h2>Amenities</h2>
                  <p>Shared amenities for residents and hotel guests</p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--images">
            <div className="container container--fw container--full-bleed">
              <div className="grid flex">
                <div className="grid__item a16-16">
                  <div className="project-block__image project-block__image--fw-bleed">
                    <Image
                      className="lazy"
                      src="https://cdn.the-boundary.com/uploads/projects/_full_width/1996/whiteley30.webp?v=1710435992"
                      data-src="https://cdn.the-boundary.com/uploads/projects/_full_width/1996/whiteley30.webp?v=1710435992"
                      width={2160}
                      height={1215}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--video_autoplay">
            <div className="container  relative">
              <div className="project-block__video">
                <video
                  className="video-autoplay"
                  src="https://player.vimeo.com/progressive_redirect/playback/787317028/rendition/1080p/file.mp4?loc=external&signature=54b3191f27439f92a11f14434f81a84e27bf3ad24e5c11b7fd3462c07bf90123"
                  poster="https://cdn.the-boundary.com/uploads/projects/whiteleyamenitiesposter.jpg?v=1673189850"
                  playsInline
                  muted
                  loop
                />
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--image_slideshow">
            <div className="container container--bleed-right">
              <div
                className="carousel carousel--bleed carousel--project-images"
                data-options='{
						"dragFree": true
					}'
                data-autoplay-videos={1}
              >
                <div className="carousel__header flex flex--align-center flex--justify-space-between">
                  <div className="carousel__slide-count">
                    <span className="carousel__slide-count-current">1</span>
                    <span className="carousel__slide-count-bar" />
                    <span className="carousel__slide-count-total">4</span>
                  </div>
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
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/2000/whiteley35.webp?v=1710435992"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/2000/whiteley35.webp?v=1710435992"
                        width={2561}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/2001/whiteley36.webp?v=1710435992"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/2001/whiteley36.webp?v=1710435992"
                        width={2559}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/27491/whiteley37.webp?v=1710435993"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/27491/whiteley37.webp?v=1710435993"
                        width={2559}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33347/whiteley61.webp?v=1710435996"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33347/whiteley61.webp?v=1710435996"
                        width={2561}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <p className="project-block__slideshow-caption" />
            </div>
          </div>
          <div className="project-block project-block-- project-block--images">
            <div className="container">
              <div className="grid flex">
                <div className="grid__item a16-16">
                  <div className="project-block__image">
                    <Image
                      className="lazy"
                      src="https://cdn.the-boundary.com/uploads/projects/_hero/33346/whiteley62.webp?v=1710435996"
                      data-src="https://cdn.the-boundary.com/uploads/projects/_hero/33346/whiteley62.webp?v=1710435996"
                      width={2160}
                      height={1440}
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--text">
            <div className="container ">
              <div className="a8-16 f6-6">
                <div className="typeset typeset--large">
                  <h2>Six Senses Hotel</h2>
                  <p>
                    The Six Senses belief is that wellness is everything and
                    anything, residents and members have access to a state of
                    the art gym, spa, sauna and steam room paired with a large
                    indoor pool
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--video_autoplay">
            <div className="container  relative">
              <div className="project-block__video">
                <video
                  className="video-autoplay"
                  src="https://player.vimeo.com/progressive_redirect/playback/787316984/rendition/1080p/file.mp4?loc=external&signature=10224d61bd4511f6d9774481ecf6a1d0707de02f471057d7de3806e5abd731a9"
                  poster="https://cdn.the-boundary.com/uploads/projects/whiteleyhotelposter.jpg?v=1673190832"
                  playsInline
                  muted
                  loop
                />
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--image_slideshow">
            <div className="container container--bleed-right">
              <div
                className="carousel carousel--bleed carousel--project-images"
                data-options='{
						"dragFree": true
					}'
                data-autoplay-videos={1}
              >
                <div className="carousel__header flex flex--align-center flex--justify-space-between">
                  <div className="carousel__slide-count">
                    <span className="carousel__slide-count-current">1</span>
                    <span className="carousel__slide-count-bar" />
                    <span className="carousel__slide-count-total">7</span>
                  </div>
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
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1998/whiteley32.webp?v=1710435996"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1998/whiteley32.webp?v=1710435996"
                        width={2161}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33378/whiteley056.webp?v=1710435996"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33378/whiteley056.webp?v=1710435996"
                        width={1440}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33377/whiteley057.webp?v=1710435996"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33377/whiteley057.webp?v=1710435996"
                        width={2159}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1971/whiteley04.webp?v=1710435997"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1971/whiteley04.webp?v=1710435997"
                        width={2263}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/2003/whiteley33.webp?v=1710435997"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/2003/whiteley33.webp?v=1710435997"
                        width={2161}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1999/whiteley34.webp?v=1710435997"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1999/whiteley34.webp?v=1710435997"
                        width={2559}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy loaded"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1972/whiteley05.webp?v=1710435982"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/1972/whiteley05.webp?v=1710435982"
                        width={2559}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <p className="project-block__slideshow-caption" />
            </div>
          </div>
          <div className="project-block project-block-- project-block--image_slideshow">
            <div className="container container--bleed-right">
              <div
                className="carousel carousel--bleed carousel--project-images"
                data-options='{
						"dragFree": true
					}'
                data-autoplay-videos={1}
              >
                <div className="carousel__header flex flex--align-center flex--justify-space-between">
                  <div className="carousel__slide-count">
                    <span className="carousel__slide-count-current">1</span>
                    <span className="carousel__slide-count-bar" />
                    <span className="carousel__slide-count-total">8</span>
                  </div>
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
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33539/whiteleystatues07.webp?v=1710435997"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33539/whiteleystatues07.webp?v=1710435997"
                        width={1018}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33537/whiteleystatues05.webp?v=1710435997"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33537/whiteleystatues05.webp?v=1710435997"
                        width={1018}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide viewing">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33536/whiteleystatues04.webp?v=1710435997"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33536/whiteleystatues04.webp?v=1710435997"
                        width={1018}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33538/whiteleystatues06.webp?v=1710435997"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33538/whiteleystatues06.webp?v=1710435997"
                        width={1018}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33543/whiteleystatues03.webp?v=1710435998"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33543/whiteleystatues03.webp?v=1710435998"
                        width={1018}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33542/whiteleystatues02.webp?v=1710435998"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33542/whiteleystatues02.webp?v=1710435998"
                        width={1018}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33541/whiteleystatues01.webp?v=1710435998"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33541/whiteleystatues01.webp?v=1710435998"
                        width={1018}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="carousel__slide">
                      <Image
                        className="lazy"
                        src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33540/whiteleystatues08.webp?v=1710435998"
                        data-src="https://cdn.the-boundary.com/uploads/projects/_project_slide/33540/whiteleystatues08.webp?v=1710435998"
                        width={1018}
                        height={1440}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <p className="project-block__slideshow-caption" />
            </div>
          </div>
          <div className="project-block project-block-- project-block--text">
            <div className="container ">
              <div className="a8-16 f6-6">
                <div className="typeset typeset--large">
                  <p>
                    The Boundary created a series of renders of the original
                    &qout;Summer&qout; and &qout;Winter&qout; statues that
                    flanked the main entrance of Whiteleys Department Store.
                    Made using state of the art 3d scanning techniques, these
                    renders were used in the printed sales brochure.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--text">
            <div className="container ">
              <div className="a8-16 f6-6">
                <div className="typeset typeset--large">
                  <h2>Project links &amp; press</h2>
                  <p>
                    <br />
                  </p>
                  <p>
                    Project website:{" "}
                    <a
                      href="https://www.thewhiteleylondon.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      thewhiteleylondon.com
                      <br />
                    </a>
                    Developer:{" "}
                    <a
                      href="https://thisismark.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Mark
                      <br />
                    </a>
                    Development Manager:{" "}
                    <a
                      href="https://www.finchatton.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Finchatton
                      <br />
                    </a>
                    Architect:{" "}
                    <a
                      href="https://www.fosterandpartners.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Foster + Partners
                      <br />
                    </a>
                    Interior Design Six Senses:{" "}
                    <a
                      href="https://www.avroko.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      AvroKO
                      <br />
                    </a>
                    Branding Agency:&nbsp;
                    <a
                      href="https://noeassociates.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Noë &amp; Associates
                    </a>
                    <br />
                    <br />
                    Evening Standard:{" "}
                    <a
                      href="https://www.standard.co.uk/news/london/whiteleys-shopping-centre-bayswater-hotel-b74940.html"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      First images of £1billion overhaul of Whiteleys...
                    </a>
                    <br />
                    Wallpaper:{" "}
                    <a
                      href="https://www.wallpaper.com/architecture/the-whiteley-redesigned-foster-and-partners-london-uk"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      First look into The Whiteley redesign by Foster + Partners
                      in London
                    </a>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="project-block project-block-- project-block--call_to_action">
            <div className="call-to-action">
              <div className="container">
                <h2 className="call-to-action__title revealable-container">
                  <span
                    className="revealable"
                    style={{ transform: "translateY(0%)", opacity: 1 }}
                  >
                    Like what you see?
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
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="page__spacing-sm">
              <button className="back-to-top" aria-label="Back to top" />
            </div>
            <div className="page__spacing-lg">
              <h2 className="lh">Related projects</h2>
              <div className="grid flex flex--wrap">
                <div className="grid__item a8-16 f6-6">
                  <Link className="project-listing" href="/work/1428-brickell">
                    <div className="project-listing__image">
                      <Image
                        src="https://cdn.the-boundary.com/uploads/_listing_image/3879/brickell29.webp?v=1710435918"
                        width={1002}
                        height={668}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <p className="project-listing__title">
                      The Residence at 1428 Brickell
                    </p>
                  </Link>
                </div>
                <div className="grid__item a8-16 f6-6">
                  <Link
                    className="project-listing"
                    href="/work/waldorf-astoria-films"
                  >
                    <div className="project-listing__image">
                      <Image
                        src="https://cdn.the-boundary.com/uploads/projects/_listing_image/36903/FilmWaldorfPoster.webp?v=1710435998"
                        width={1002}
                        height={668}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <p className="project-listing__title">Waldorf Astoria</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="page__spacing-lg">
              <Link
                className="project-listing__more-link"
                href="/cgis-animations-cinemagraphs"
              >
                <span>
                  All CGIs, Animations &amp; Cinemagraphs case studies
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
