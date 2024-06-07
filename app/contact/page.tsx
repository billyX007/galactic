import Header from "../components/header/Header";

export default function Contact() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="contact"
      style={{ opacity: 1 }}
    >
      <Header />
      <main id="main-content" className="main">
        <section className="section">
          <div className="container">
            <div className="grid flex flex--wrap flex--justify-space-between">
              <div className="grid__item a7-16 f6-6">
                <div>
                  <div className="intro">
                    <h1 className="intro__title ph revealable-container">
                      <span
                        className="revealable"
                        style={{ transform: "translateY(0%)", opacity: 1 }}
                      >
                        Contact
                      </span>
                    </h1>
                    <div className="typeset typeset--large revealable-container">
                      <div
                        className="revealable"
                        style={{ transform: "translateY(0%)", opacity: 1 }}
                      >
                        <p>
                          To learn more about The Boundary&apos;s visualisation
                          services, or to arrange a demonstration, please tell
                          us about your project and we&apos;ll get back to you
                          shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-32 revealable-container">
                    <div
                      className="typeset typeset--light revealable mb-32"
                      style={{ transform: "translateY(0%)", opacity: 1 }}
                    >
                      <p>
                        Alternatively, contact our specialist
                        UK/Europe&nbsp;team directly via email:
                        <strong>
                          <br />
                          enquiries-uk-europe@the-galactic.com
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid flex flex--justify-space-between flex--align-center flex--column mb-40">
              <div className="grid__item a9-16 f6-6">
                <h2 className="h" />
                <p className="p p--large p--light" />
              </div>
              <div className="grid__item a9-16 f6-6">
                <div
                  data-tf-live="01HRYVWAGHE5SAKWR7EMR8A1FP"
                  data-tf-loaded="true"
                >
                  <div
                    data-tf-widget="hOPe57rY"
                    data-tf-opacity={100}
                    data-tf-inline-on-mobile=""
                    data-tf-iframe-props="title=The-boundary.com Enquiry UK and Europe (Ten4)"
                    data-tf-transitive-search-params=""
                    data-tf-disable-scroll=""
                    data-tf-auto-resize=""
                    data-tf-medium="snippet"
                    style={{ width: "100%", height: 1003 }}
                    data-tf-loaded="true"
                  >
                    <div className="tf-v1-widget" data-testid="tf-v1-widget">
                      <iframe
                        src="https://form.typeform.com/to/hOPe57rY?typeform-embed-id=9827637973855374&typeform-embed=embed-widget&typeform-source=the-boundary.com&typeform-medium=snippet&typeform-medium-version=next&embed-opacity=100&typeform-embed-handles-redirect=1&typeform-embed-auto-resize=true&typeform-embed-disable-scroll=true&typeform-embed-no-heading=true"
                        data-testid="iframe"
                        allow="microphone; camera"
                        title="The-boundary.com Enquiry UK and Europe (Ten4)"
                        style={{ border: 0, transform: "translateZ(0px)" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid flex flex--wrap flex--justify-space-between">
              <div className="grid__item a8-16 f6-6"></div>
            </div>
          </div>
        </section>
        <section id="get-in-touch" className="section section--dark">
          <div className="container">
            <h2 className="h">Contact</h2>
            <div className="flex flex--wrap grid">
              <div className="grid__item a4-16 e3-6 f6-6 mb-32">
                <h3 className="p--medium p--light mb-8">
                  Business Development Director UK
                  <br />
                  John Doe
                </h3>
                <a
                  className="p--medium"
                  href="mailto:enquiries-uk-europe@the-galactic.com"
                >
                  enquiries-uk-europe@the-galactic.com
                </a>
              </div>
              <div className="grid__item a4-16 e3-6 f6-6 mb-32">
                <h3 className="p--medium p--light mb-8">
                  Business Development Director MENA
                  <br />
                  John Doe
                </h3>
                <a
                  className="p--medium"
                  href="mailto:enquiries-gcc@the-galactic.com"
                >
                  enquiries-gcc@the-galactic.com
                </a>
              </div>
              <div className="grid__item a4-16 e3-6 f6-6 mb-32">
                <h3 className="p--medium p--light mb-8">
                  Business Development Director US
                  <br />
                  Jane Doe
                </h3>
                <a
                  className="p--medium"
                  href="mailto:enquiries-usa@the-galactic.com"
                >
                  enquiries-usa@the-galactic.com
                </a>
              </div>
              <div className="grid__item a4-16 e3-6 f6-6 mb-32">
                <h3 className="p--medium p--light mb-8">
                  Client Director NZ
                  <br />
                  Matt Damon
                </h3>
                <a
                  className="p--medium"
                  href="mailto:enquiries-apac@the-galactic.com"
                >
                  enquiries-apac@the-galactic.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
