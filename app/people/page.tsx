import Image from "next/image";
import Header from "../components/header/Header";

export default function People() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="people"
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
                    People
                  </span>
                </h1>
                <div className="a9-16 f6-6">
                  <div className="typeset typeset--large revealable-container">
                    <div
                      className="revealable"
                      style={{ transform: "translateY(0%)", opacity: 1 }}
                    >
                      <p>
                        We are a wonderfully eclectic and creative team, all
                        driven by the same insatiable thirst to be the best in
                        the world at what we do, with a culture underpinned by a
                        deep passion and commitment for learning and
                        professional development across the business, which
                        attracts the most talented staff from around the world.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="container">
            <div className="mb-58">
              <div className="grid flex flex--justify-space-between">
                <div className="grid__item a4-16 move-down">
                  <Image
                    className="lazy loaded"
                    src="https://cdn.the-boundary.com/uploads/about/_about_image_small/77638/Auckland-Team-Photo.webp?v=1710435959"
                    data-src="https://cdn.the-boundary.com/uploads/about/_about_image_small/77638/Auckland-Team-Photo.webp?v=1710435959"
                    width={664}
                    height={712}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="grid__item a10-16">
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
              </div>
            </div>
          </div>
          <div className="container container--bleed-f"></div>
          <div id="people" className="container">
            <div className="page__spacing-lg">
              <h2 className="ph mb-32">Our people</h2>
              <div className="a9-16 f6-6">
                <div className="typeset typeset--large" />
              </div>
            </div>
            <div className="page__spacing-md">
              <div className="grid flex flex--wrap">
                <div className="grid__item a4-16 f3-6">
                  <figure
                    className="founder fold-out-toggle"
                    data-fold-out="#fold-out-1"
                  >
                    <div className="founder__image">
                      <Image
                        className="lazy loaded"
                        src="https://cdn.the-boundary.com/uploads/people/_portrait/37007/230124_Boundary_Portraits_3425.webp?v=1710435879"
                        data-src="https://cdn.the-boundary.com/uploads/people/_portrait/37007/230124_Boundary_Portraits_3425.webp?v=1710435879"
                        width={500}
                        height={670}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="figcaption founder__caption">
                      <span className="figcaption__bold">Henry Goss</span>
                      <br />
                      Founder
                    </figcaption>
                  </figure>
                </div>
                <div id="fold-out-1" className="fold-out">
                  <div className="fold-out__inner">
                    <button className="fold-out__close" aria-label="Close" />
                    <div className="fold-out__content">
                      <figure className="fold-out__figure">
                        <div className="fold-out__image">
                          <Image
                            className="lazy loaded"
                            src="https://cdn.the-boundary.com/uploads/people/_portrait/37007/230124_Boundary_Portraits_3425.webp?v=1710435879"
                            data-src="https://cdn.the-boundary.com/uploads/people/_portrait/37007/230124_Boundary_Portraits_3425.webp?v=1710435879"
                            width={500}
                            height={670}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="figcaption figcaption--invert">
                          <span className="figcaption__bold">Henry Goss</span>
                          <br />
                          Founder
                        </figcaption>
                      </figure>
                      <div className="typeset">
                        <p>
                          Henry studied at the Welsh School of Architecture in
                          Cardiff, graduating with a first class BSc (Hons)
                          degree in 2005. He continued his studies in Cardiff
                          and was awarded Distinction in his Diploma of
                          Architecture and later went on to win the young
                          European Architect of the Year Award by the Leading
                          European Architects Forum (LEAF) in 2009.
                          <br />
                          <br />
                          Henry qualified as an architect in 2008 and became a
                          chartered member of the RIBA the same year. Following
                          seven years of experience in the architectural
                          profession at practices including Foster &amp;
                          partners, John Pardey Architects, Collins and Turner
                          and Rick Mather Architects, Henry established Henry
                          Goss Architects in 2011 and is a co-founder of The
                          Boundary established in 2014.
                        </p>
                      </div>
                      <ul>
                        <li>
                          <a
                            className="fold-out__link"
                            target="_blank"
                            href="https://www.henrygossarchitects.com/"
                          >
                            www.henrygossarchitects.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                <div className="grid__item a4-16 f3-6">
                  <figure
                    className="founder fold-out-toggle"
                    data-fold-out="#fold-out-2"
                  >
                    <div className="founder__image">
                      <Image
                        className="lazy loaded"
                        src="https://cdn.the-boundary.com/uploads/people/_portrait/36931/230124_Boundary_Portraits_3451.webp?v=1710435879"
                        data-src="https://cdn.the-boundary.com/uploads/people/_portrait/36931/230124_Boundary_Portraits_3451.webp?v=1710435879"
                        width={500}
                        height={670}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="figcaption founder__caption">
                      <span className="figcaption__bold">Peter Guthrie</span>
                      <br />
                      Founder
                    </figcaption>
                  </figure>
                </div>
                <div id="fold-out-2" className="fold-out">
                  <div className="fold-out__inner">
                    <button className="fold-out__close" aria-label="Close" />
                    <div className="fold-out__content">
                      <figure className="fold-out__figure">
                        <div className="fold-out__image">
                          <Image
                            className="lazy loaded"
                            src="https://cdn.the-boundary.com/uploads/people/_portrait/36931/230124_Boundary_Portraits_3451.webp?v=1710435879"
                            data-src="https://cdn.the-boundary.com/uploads/people/_portrait/36931/230124_Boundary_Portraits_3451.webp?v=1710435879"
                            width={500}
                            height={670}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="figcaption figcaption--invert">
                          <span className="figcaption__bold">
                            Peter Guthrie
                          </span>
                          <br />
                          Founder
                        </figcaption>
                      </figure>
                      <div className="typeset">
                        <p>
                          Peter graduated from Edinburgh College of Art with a
                          Diploma in Architecture (RIBA Part 2) in 2000.
                          Following a five year period working at Richard Murphy
                          Architects as a project architect he established Peter
                          Guthrie Visualisation which, through his constant
                          thrust for research &amp; development and perpetual
                          willingness to share knowledge with the industry
                          through his blogging, rapidly became a world leader in
                          architectural visualisation. Peter’s HDRI skies, which
                          he continues to develop and refine at PG Skies are
                          considered some of the best image based lighting
                          solutions available. Peter is a co-founder of The
                          Boundary established in 2014.
                        </p>
                      </div>
                      <ul>
                        <li>
                          <a
                            className="fold-out__link"
                            target="_blank"
                            href="http://www.peterguthrie.net/"
                          >
                            www.peterguthrie.net
                          </a>
                        </li>
                        <li>
                          <a
                            className="fold-out__link"
                            target="_blank"
                            href="https://www.pg-skies.net/"
                          >
                            www.pg-skies.net
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                <div className="grid__item a1-12" />
                <div className="grid__item a6-16 f6-6">
                  <figure className="quote quote--smaller">
                    <blockquote>
                      <span className="quote__mark">“</span>
                      <p className="quote__text">
                        Value in graphic imagery lies not simply in a sense of
                        beauty but how that beauty makes you feel. The Boundary
                        adds value by understanding and harnessing emotional
                        responses which lie at the heart of all human decisions.
                      </p>
                    </blockquote>
                    <figcaption className="quote__cap">
                      <div className="quote__cap-text">
                        – Henry &amp; Peter{" "}
                      </div>
                    </figcaption>
                  </figure>{" "}
                </div>
              </div>
            </div>
            <div className="page__spacing-sm">
              <div className="grid flex flex--justify-center">
                <div className="grid__item a10-16 f6-6">
                  <div className="grid flex flex--wrap">
                    <div className="grid__item a5-12 f6-6">
                      <figure className="quote quote--smaller">
                        <blockquote>
                          <span className="quote__mark">“</span>
                          <p className="quote__text">
                            I am inspired by the creativity and expertise shown
                            by our incredibly talented global team on a daily
                            basis, and I am very proud to lead our business as
                            we continue to set the benchmark within our emerging
                            sector.
                          </p>
                        </blockquote>
                        <figcaption className="quote__cap">
                          <div className="quote__cap-text">
                            Tom Wood
                            <br />
                            <div className="quote__job-title">CEO</div>{" "}
                          </div>
                        </figcaption>
                      </figure>{" "}
                    </div>
                    <div className="grid__item a2-12" />
                    <div className="grid__item a5-12 f6-6">
                      <figure>
                        <div className="mb-16">
                          <Image
                            className="lazy loaded"
                            src="https://cdn.the-boundary.com/uploads/people/_portrait/37010/230126_Boundary_Portraits_4051.webp?v=1710435881"
                            data-src="https://cdn.the-boundary.com/uploads/people/_portrait/37010/230126_Boundary_Portraits_4051.webp?v=1710435881"
                            width={500}
                            height={670}
                            alt=""
                            loading="lazy"
                          />
                        </div>
                        <figcaption className="figcaption">
                          <span className="figcaption__bold">Tom Wood</span>
                          <br />
                          CEO
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="page__spacing-lg">
              <div
                className="carousel carousel--fade carousel--people"
                data-autoplay=""
                data-options='{"loop": true}'
              >
                <div className="carousel__meta">
                  <button className="carousel__refresh" aria-label="Refresh" />
                </div>
                <div className="carousel__viewport is-draggable">
                  <div
                    className="carousel__container"
                    style={{ transform: "translate3d(-6020.39px, 0px, 0px)" }}
                  >
                    <div className="carousel__slide">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38472/221209_Boundary_Portraits_2496.webp?v=1710435884"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38472/221209_Boundary_Portraits_2496.webp?v=1710435884"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Gareth Ross</p>
                              <p className="person__job">
                                Creative Director/ Founder
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44482/230613_Boundary_Portraits_0353.webp?v=1710435884"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44482/230613_Boundary_Portraits_0353.webp?v=1710435884"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">James Falconer</p>
                              <p className="person__job">
                                Managing Director USA
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38318/221209_Boundary_Portraits_0743.webp?v=1710435884"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38318/221209_Boundary_Portraits_0743.webp?v=1710435884"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Tim Johnson</p>
                              <p className="person__job">CTO</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37081/230126_Boundary_Portraits_4296.webp?v=1710435884"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37081/230126_Boundary_Portraits_4296.webp?v=1710435884"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">
                                Adam Lancaster-Bartle
                              </p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37083/221209_Boundary_Portraits_2168.webp?v=1710435885"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37083/221209_Boundary_Portraits_2168.webp?v=1710435885"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Aina Barcelo</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37012/230124_Boundary_Portraits_3342.webp?v=1710435885"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37012/230124_Boundary_Portraits_3342.webp?v=1710435885"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Constantine Rybkin</p>
                              <p className="person__job">Senior Associate</p>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37091/230124_Boundary_Portraits_3368.webp?v=1710435885"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37091/230124_Boundary_Portraits_3368.webp?v=1710435885"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Chris Mitchell</p>
                              <p className="person__job">
                                Business Development Director GCC
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38394/221209_Boundary_Portraits_0624.webp?v=1710435885"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38394/221209_Boundary_Portraits_0624.webp?v=1710435885"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Patrick Redmond</p>
                              <p className="person__job">
                                Business Development Director USA
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38552/221209_Boundary_Portraits_2507.webp?v=1710435885"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38552/221209_Boundary_Portraits_2507.webp?v=1710435885"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Mandy Ross</p>
                              <p className="person__job">
                                Executive Office Administrator
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37014/230126_Boundary_Portraits_4237.webp?v=1710435885"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37014/230126_Boundary_Portraits_4237.webp?v=1710435885"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Dawid Jaskowiak</p>
                              <p className="person__job">Associate</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37093/221209_Boundary_Portraits_0471.webp?v=1710435885"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37093/221209_Boundary_Portraits_0471.webp?v=1710435885"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Domenico Federico</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44484/230613_Boundary_Portraits_0378.webp?v=1710435886"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44484/230613_Boundary_Portraits_0378.webp?v=1710435886"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Jonas Motejunas</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37089/221209_Boundary_Portraits_1319.webp?v=1710435886"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37089/221209_Boundary_Portraits_1319.webp?v=1710435886"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Jordan Samuels</p>
                              <p className="person__job">Head of Production</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37140/230124_Boundary_Portraits_3267.webp?v=1710435886"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37140/230124_Boundary_Portraits_3267.webp?v=1710435886"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Josh Gruitt</p>
                              <p className="person__job">Technical Director</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37142/221209_Boundary_Portraits_2265.webp?v=1710435886"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37142/221209_Boundary_Portraits_2265.webp?v=1710435886"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Mandy Liu</p>
                              <p className="person__job">Associate</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37144/221209_Boundary_Portraits_1055.webp?v=1710435886"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37144/221209_Boundary_Portraits_1055.webp?v=1710435886"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Michele Straiotto</p>
                              <p className="person__job">
                                Executive Project Manager
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37146/221209_Boundary_Portraits_0906.webp?v=1710435886"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37146/221209_Boundary_Portraits_0906.webp?v=1710435886"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Mitchell Saunders</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44486/230613_Boundary_Portraits_0549.webp?v=1710435886"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44486/230613_Boundary_Portraits_0549.webp?v=1710435886"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Natalia Protyven</p>
                              <p className="person__job">Associate</p>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37020/221209_Boundary_Portraits_1797.webp?v=1710435886"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37020/221209_Boundary_Portraits_1797.webp?v=1710435886"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Nora Galimberti</p>
                              <p className="person__job">Senior Associate</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37148/221209_Boundary_Portraits_0418.webp?v=1710435886"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37148/221209_Boundary_Portraits_0418.webp?v=1710435886"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Oleg Stahopoulos</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37022/230126_Boundary_Portraits_4418.webp?v=1710435887"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37022/230126_Boundary_Portraits_4418.webp?v=1710435887"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Sam Williams</p>
                              <p className="person__job">CFO</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38562/221209_Boundary_Portraits_0767.webp?v=1710435887"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38562/221209_Boundary_Portraits_0767.webp?v=1710435887"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Jason Wong</p>
                              <p className="person__job">
                                Lead Realtime Artist
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44488/230613_Boundary_Portraits_0563.webp?v=1710435887"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44488/230613_Boundary_Portraits_0563.webp?v=1710435887"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Sanjaya Dewalegama</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37024/230126_Boundary_Portraits_3590.webp?v=1710435887"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37024/230126_Boundary_Portraits_3590.webp?v=1710435887"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Steven Man</p>
                              <p className="person__job">Senior Associate</p>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37152/221209_Boundary_Portraits_1119.webp?v=1710435887"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37152/221209_Boundary_Portraits_1119.webp?v=1710435887"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Thais Cargnelutti</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37026/230124_Boundary_Portraits_2947.webp?v=1710435887"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37026/230124_Boundary_Portraits_2947.webp?v=1710435887"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Toni Buzolic</p>
                              <p className="person__job">Senior Associate</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44490/230613_Boundary_Portraits_0360.webp?v=1710435887"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44490/230613_Boundary_Portraits_0360.webp?v=1710435887"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Alister Scott</p>
                              <p className="person__job">HR Director</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37199/230126_Boundary_Portraits_3734.webp?v=1710435887"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37199/230126_Boundary_Portraits_3734.webp?v=1710435887"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Zak Pulis</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44492/230613_Boundary_Portraits_0582.webp?v=1710435888"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44492/230613_Boundary_Portraits_0582.webp?v=1710435888"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">
                                Francesco D&apos;Amario
                              </p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37203/221209_Boundary_Portraits_1546.webp?v=1710435888"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37203/221209_Boundary_Portraits_1546.webp?v=1710435888"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Rosie Mitchell</p>
                              <p className="person__job">
                                Senior Project Manager
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37253/230124_Boundary_Portraits_3077.webp?v=1710435888"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37253/230124_Boundary_Portraits_3077.webp?v=1710435888"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Federico Melis</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38570/221209_Boundary_Portraits_0797.webp?v=1710435888"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38570/221209_Boundary_Portraits_0797.webp?v=1710435888"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Vincent Vulliez</p>
                              <p className="person__job">Lead CGI Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37259/221209_Boundary_Portraits_0846.webp?v=1710435888"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37259/221209_Boundary_Portraits_0846.webp?v=1710435888"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Dotty Jackson</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44494/230613_Boundary_Portraits_0504.webp?v=1710435888"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44494/230613_Boundary_Portraits_0504.webp?v=1710435888"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Ozlem Halibryam</p>
                              <p className="person__job">
                                Marketing and Communications Lead
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44496/230613_Boundary_Portraits_0412.webp?v=1710435888"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44496/230613_Boundary_Portraits_0412.webp?v=1710435888"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Nuno Viana</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37318/230126_Boundary_Portraits_4175.webp?v=1710435888"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37318/230126_Boundary_Portraits_4175.webp?v=1710435888"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Jonny Lee</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106847/240306_The_Boundary_Headshots_0913.webp?v=1711039012"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106847/240306_The_Boundary_Headshots_0913.webp?v=1711039012"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Dean Kennedy</p>
                              <p className="person__job">
                                Business Development Director UK
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37447/230126_Boundary_Portraits_3669.webp?v=1710435888"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37447/230126_Boundary_Portraits_3669.webp?v=1710435888"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Vitaliano Fratto</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44498/230613_Boundary_Portraits_0508.webp?v=1710435888"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44498/230613_Boundary_Portraits_0508.webp?v=1710435888"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Francesco Pierce</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37468/230126_Boundary_Portraits_4000.webp?v=1710435889"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37468/230126_Boundary_Portraits_4000.webp?v=1710435889"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Tom Wass</p>
                              <p className="person__job">
                                Financial Accountant
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37476/230124_Boundary_Portraits_2904.webp?v=1710435889"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37476/230124_Boundary_Portraits_2904.webp?v=1710435889"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Ben Inivale</p>
                              <p className="person__job">
                                Financial Controller
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37498/230126_Boundary_Portraits_3753.webp?v=1710435889"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37498/230126_Boundary_Portraits_3753.webp?v=1710435889"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Lucas Pedro</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37520/221209_Boundary_Portraits_2408.webp?v=1710435889"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37520/221209_Boundary_Portraits_2408.webp?v=1710435889"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Serena Biccari</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37630/221209_Boundary_Portraits_1729.webp?v=1710435889"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37630/221209_Boundary_Portraits_1729.webp?v=1710435889"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">
                                Majo Abellan Tejero
                              </p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37973/230126_Boundary_Portraits_3908.webp?v=1710435889"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37973/230126_Boundary_Portraits_3908.webp?v=1710435889"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">
                                Diego Vargas Escobar
                              </p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37981/230126_Boundary_Portraits_3849.webp?v=1710435889"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/37981/230126_Boundary_Portraits_3849.webp?v=1710435889"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Reyaz Alankandy</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38018/221209_Boundary_Portraits_0352.webp?v=1710435890"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38018/221209_Boundary_Portraits_0352.webp?v=1710435890"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Alex Papaspyros</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38026/221209_Boundary_Portraits_0558.webp?v=1710435890"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38026/221209_Boundary_Portraits_0558.webp?v=1710435890"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Alina Pipoyan</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide viewing">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38083/221209_Boundary_Portraits_2600.webp?v=1710435890"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38083/221209_Boundary_Portraits_2600.webp?v=1710435890"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Mariusz Majchrzak</p>
                              <p className="person__job">Senior Modeller</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38210/230126_Boundary_Portraits_4133.webp?v=1710435890"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38210/230126_Boundary_Portraits_4133.webp?v=1710435890"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">
                                Massimiliano Ossino
                              </p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38221/221209_Boundary_Portraits_0656.webp?v=1710435890"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38221/221209_Boundary_Portraits_0656.webp?v=1710435890"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Brendan Toal</p>
                              <p className="person__job">
                                Senior Project Manager
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38673/P_image_1_post.webp?v=1710435893"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/38673/P_image_1_post.webp?v=1710435893"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Dmitrijs Utkins</p>
                              <p className="person__job">Senior Modeller</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44523/230613_Boundary_Portraits_0238.webp?v=1710435894"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44523/230613_Boundary_Portraits_0238.webp?v=1710435894"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Eliza Wellington</p>
                              <p className="person__job">Account Director</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44540/230613_Boundary_Portraits_0266.webp?v=1710435894"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44540/230613_Boundary_Portraits_0266.webp?v=1710435894"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Harry Winship</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44562/230613_Boundary_Portraits_0293.webp?v=1710435894"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44562/230613_Boundary_Portraits_0293.webp?v=1710435894"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Meagan Gibbons</p>
                              <p className="person__job">
                                Senior Project Manager
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44599/230613_Boundary_Portraits_0319.webp?v=1710435897"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44599/230613_Boundary_Portraits_0319.webp?v=1710435897"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Ben Brown</p>
                              <p className="person__job">COO</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy loaded"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44619/230613_Boundary_Portraits_0332.webp?v=1710435898"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/44619/230613_Boundary_Portraits_0332.webp?v=1710435898"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Lorenzo Brunetti</p>
                              <p className="person__job">Unreal Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106533/240306_The_Boundary_Headshots_0031.webp?v=1711039029"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106533/240306_The_Boundary_Headshots_0031.webp?v=1711039029"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Isaac Gilich</p>
                              <p className="person__job">Unreal Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106548/240306_The_Boundary_Headshots_0055.webp?v=1711039029"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106548/240306_The_Boundary_Headshots_0055.webp?v=1711039029"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Andrey Novik</p>
                              <p className="person__job">Senior Modeller</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106557/240306_The_Boundary_Headshots_0091.webp?v=1711039029"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106557/240306_The_Boundary_Headshots_0091.webp?v=1711039029"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Fred Silva</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106578/240306_The_Boundary_Headshots_0158.webp?v=1711039029"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106578/240306_The_Boundary_Headshots_0158.webp?v=1711039029"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Jose Guimaraes</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106588/240306_The_Boundary_Headshots_0389.webp?v=1711039030"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106588/240306_The_Boundary_Headshots_0389.webp?v=1711039030"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Dimitra Zintro</p>
                              <p className="person__job">
                                Assistant Management Accountant
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106600/240306_The_Boundary_Headshots_0459.webp?v=1711039032"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106600/240306_The_Boundary_Headshots_0459.webp?v=1711039032"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Anusha Sathish</p>
                              <p className="person__job">Project Coordinator</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106634/240306_The_Boundary_Headshots_0576.webp?v=1711039033"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106634/240306_The_Boundary_Headshots_0576.webp?v=1711039033"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Sofia Ayala</p>
                              <p className="person__job">
                                Senior Project Manager
                              </p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106645/240306_The_Boundary_Headshots_0725.webp?v=1711039032"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106645/240306_The_Boundary_Headshots_0725.webp?v=1711039032"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Stefania Bravo</p>
                              <p className="person__job">Artist</p>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106716/240306_The_Boundary_Headshots_0790.webp?v=1711039033"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106716/240306_The_Boundary_Headshots_0790.webp?v=1711039033"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Rob Brimley</p>
                              <p className="person__job" />
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="carousel__slide">
                      <div className="grid grid--wide flex flex--wrap grid--people">
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106727/240306_The_Boundary_Headshots_0848.webp?v=1711039033"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106727/240306_The_Boundary_Headshots_0848.webp?v=1711039033"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Valentin Zaffaroni</p>
                              <p className="person__job" />
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106749/240306_The_Boundary_Headshots_0901.webp?v=1711039034"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106749/240306_The_Boundary_Headshots_0901.webp?v=1711039034"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Denis Donea</p>
                              <p className="person__job" />
                            </figcaption>
                          </figure>
                        </div>
                        <div className="grid__item a2-12 f3-6">
                          <figure className="person">
                            <div className="person__image">
                              <Image
                                className="lazy"
                                src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106769/240306_The_Boundary_Headshots_0938.webp?v=1711039036"
                                data-src="https://cdn.the-boundary.com/uploads/people/_portrait_tall/106769/240306_The_Boundary_Headshots_0938.webp?v=1711039036"
                                width={368}
                                height={522}
                                alt=""
                                loading="lazy"
                              />
                            </div>
                            <figcaption>
                              <p className="person__name">Silvia Patussi</p>
                              <p className="person__job" />
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page__bg-light">
            <div className="careers-footer">
              <div className="grid flex flex--column-f flex--align-center-f">
                <div className="grid__item a1-12" />
                <div className="grid__item flex-item--self-start a3-12 f5-6">
                  <Image
                    src="https://cdn.the-boundary.com/uploads/about/_careers_footer/34461/soaboundary.webp?v=1710435899"
                    width={537}
                    height={390}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="grid__item a4-12 f6-6">
                  <a className="careers-footer__link" href="/about">
                    Learn more
                  </a>
                </div>
                <div className="grid__item flex-item--self-end a3-12 f5-6 ">
                  <Image
                    src="https://cdn.the-boundary.com/uploads/about/_careers_footer/34472/meettheteam.webp?v=1710435900"
                    width={537}
                    height={390}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="grid__item a1-12" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
