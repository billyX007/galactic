import Image from "next/image";
import Header from "../components/header/Header";

export default function Careers() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="careers"
      style={{ opacity: 1 }}
    >
      <Header />
      <main id="main-content" className="main">
        <section className="section">
          <div className="page__spacing-lg">
            <div className="intro">
              <div className="container">
                <h1 className="intro__title ph revealable-container">
                  <span
                    className="revealable"
                    style={{ transform: "translateY(0%)", opacity: 1 }}
                  >
                    Careers
                  </span>
                </h1>
                <div className="a9-16 f6-6">
                  <div className="typeset typeset--large revealable-container">
                    <div
                      className="revealable"
                      style={{ transform: "translateY(0%)", opacity: 1 }}
                    >
                      <p>
                        We provide the right environment and training to allow
                        all our staff to realise their true potential and
                        accelerate their professional development across all our
                        teams, and a sharing and learning culture is at the core
                        of who we are.
                        <br />
                        <br /> Artists flourish under the tutelage and guidance
                        of both founding partners Peter Guthrie and Henry Goss,
                        supported by our structured continuous learning and
                        professional development programmes and seminars, while
                        technical, commercial and operational team members
                        thrive within a supportive management structure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div className="container container--full-bleed">
            <div className="page__spacing-lg">
              <div className="page__image">
                <Image
                  src="https://cdn.the-boundary.com/uploads/about/_careers_main/34455/staff-photo-xmas-2022_3k.webp?v=1710435961"
                  width={1260}
                  height={720}
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="page__spacing-lg">
              <div className="a8-16 f6-6">
                <div className="typeset typeset--large">
                  <p>
                    We’re always on the look out for new talent so please don’t
                    hesitate to get in touch or check out our current vacancies
                    below.
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="page__spacing-lg">
              <h2 className="h h--reduce-f">Current Vacancies</h2>
              <ul className="vacancies">
                <li className="vacancies__item">
                  <a href="https://www.the-boundary.com/careers/vacancy/junior-level-architectural-visualisation-artist-london-2">
                    <span className="a6-16 f6-6">
                      Junior Level Architectural Visualisation Artist - London
                    </span>
                    <span className="a3-16 vacancies__inner lighter">
                      Full-time
                      <span className="vacancies__comma show-at-f">
                        ,&nbsp;
                      </span>
                    </span>
                    <span className="a7-16 vacancies__inner lighter">
                      London
                    </span>
                  </a>
                </li>
                <li className="vacancies__item">
                  <a href="https://www.the-boundary.com/careers/vacancy/associate-level-artist-london">
                    <span className="a6-16 f6-6">
                      Associate Level Artist - London
                    </span>
                    <span className="a3-16 vacancies__inner lighter">
                      Full-time
                      <span className="vacancies__comma show-at-f">
                        ,&nbsp;
                      </span>
                    </span>
                    <span className="a7-16 vacancies__inner lighter">
                      London
                    </span>
                  </a>
                </li>
                <li className="vacancies__item">
                  <a href="https://www.the-boundary.com/careers/vacancy/realtime-architectural-modeller-auckland">
                    <span className="a6-16 f6-6">
                      Junior/Intermediate Realtime Architectural Modeller -
                      Auckland
                    </span>
                    <span className="a3-16 vacancies__inner lighter">
                      Full-time
                      <span className="vacancies__comma show-at-f">
                        ,&nbsp;
                      </span>
                    </span>
                    <span className="a7-16 vacancies__inner lighter">
                      Auckland
                    </span>
                  </a>
                </li>
                <li className="vacancies__item">
                  <a href="https://www.the-boundary.com/careers/vacancy/mid-level-architectural-visualisation-artist-london">
                    <span className="a6-16 f6-6">
                      Mid-level Architectural Visualisation Artist - London
                    </span>
                    <span className="a3-16 vacancies__inner lighter">
                      Full-time
                      <span className="vacancies__comma show-at-f">
                        ,&nbsp;
                      </span>
                    </span>
                    <span className="a7-16 vacancies__inner lighter">
                      London
                    </span>
                  </a>
                </li>
                <li className="vacancies__item">
                  <a href="https://www.the-boundary.com/careers/vacancy/3d-unreal-artist-auckland">
                    <span className="a6-16 f6-6">
                      3D Unreal Artist - Auckland
                    </span>
                    <span className="a3-16 vacancies__inner lighter">
                      Full-time
                      <span className="vacancies__comma show-at-f">
                        ,&nbsp;
                      </span>
                    </span>
                    <span className="a7-16 vacancies__inner lighter">
                      Auckland
                    </span>
                  </a>
                </li>
                <li className="vacancies__item">
                  <a href="https://www.the-boundary.com/careers/vacancy/senior-architectural-visualisation-artist-london">
                    <span className="a6-16 f6-6">
                      Senior Architectural Visualisation Artist - London
                    </span>
                    <span className="a3-16 vacancies__inner lighter">
                      Full-time
                      <span className="vacancies__comma show-at-f">
                        ,&nbsp;
                      </span>
                    </span>
                    <span className="a7-16 vacancies__inner lighter">
                      London
                    </span>
                  </a>
                </li>
                <li className="vacancies__item">
                  <a href="https://www.the-boundary.com/careers/vacancy/freelance-artist-london-4">
                    <span className="a6-16 f6-6">
                      Freelance Artist - London
                    </span>
                    <span className="a3-16 vacancies__inner lighter">
                      Contract
                      <span className="vacancies__comma show-at-f">
                        ,&nbsp;
                      </span>
                    </span>
                    <span className="a7-16 vacancies__inner lighter">
                      London
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="page__spacing-lg">
              <div className="grid flex flex--wrap flex--justify-space-between flex--align-center">
                <div className="grid__item a7-16 f6-6">
                  <h2 className="ph mb-32">
                    How to stand out from other applicants
                  </h2>
                  <div className="typeset typeset--large">
                    <p>
                      We receive a lot of applications, here are some tips to
                      make sure you get noticed.
                    </p>
                    <ul>
                      <li>
                        <strong>What to send?</strong> A single page CV and a
                        PDF portfolio
                      </li>
                      <li>
                        <strong>Keep it simple. </strong>Big images, clear
                        layouts.&nbsp;
                      </li>
                      <li>
                        <strong>Make it personal.</strong> A few lines about
                        what attracted you to the position.
                      </li>
                      <li>
                        <strong>Show your passion.</strong> We love seeing your
                        personal projects
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="grid__item a8-16 f6-6">
                  <Image
                    src="https://cdn.the-boundary.com/uploads/about/_image_half/34466/aboutinterview.webp?v=1710435962"
                    width={1044}
                    height={695}
                    alt=""
                    loading="lazy"
                  />
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
                  <a
                    className="careers-footer__link"
                    href="https://www.the-boundary.com/people"
                  >
                    Meet the team
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
