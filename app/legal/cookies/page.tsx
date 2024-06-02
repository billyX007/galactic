import Header from "@/app/components/header/Header";

export default function Cookies() {
  return (
    <div data-barba="container" data-barba-namespace="legal">
      <Header />
      <main id="main-content" className="main">
        <section className="section">
          <div className="container">
            <h1 className="ph mb-32">Cookies</h1>
            <div className="a7-12 f6-6">
              <div className="typeset" />
              <div className="cookie-manager">
                <div className="cookie-manager__button-parent">
                  <div className="cookie-manager__scroller">
                    <div className="cookie-manager__container cookie-manager__container--spaced">
                      <h2 className="cookie-manager__title-hidden">
                        Information about our use of cookies
                      </h2>
                      <p>
                        Our website uses cookies to distinguish you from other
                        users of our website. This helps us to provide you with
                        a good experience when you browse our website and also
                        allows us to improve our site.
                      </p>
                      <p>
                        A cookie is a small file of letters and numbers that we
                        store on your browser or the hard drive of your computer
                        if you agree. Cookies contain information that is
                        transferred to your computer&apos;s hard drive.
                      </p>
                      <ul className="cookie-manager__category-list cookie-manager__category-list--spaced">
                        <li
                          className="cookie-manager__category"
                          id="category-strictly_necessary"
                        >
                          <div className="cookie-manager__category-info">
                            <div>
                              <h3>Strictly necessary cookies</h3>
                              <p>
                                These are cookies that are required for the
                                operation of our website. They include, for
                                example, cookies that enable you to log into
                                secure areas of our website, use a shopping cart
                                or make use of e-billing services.
                              </p>
                            </div>
                          </div>
                          <div className="cookie-manager__provider-info">
                            <div>
                              <h4>Application</h4>
                              <p>
                                These cookies are set by the website itself, and
                                are only used for the purposes of user
                                authentication, form validation/security, and
                                basic web application operations.
                              </p>
                            </div>
                          </div>
                          <table className="cookie-manager__cookie-table">
                            <thead>
                              <tr>
                                <th>Cookie Name</th>
                                <th>Expiry</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="Cookie Name">session</td>
                                <td data-label="Expiry">Session</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">
                                  ten4_cookie_consent
                                </td>
                                <td data-label="Expiry">90 Days</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">
                                  ten4_preferred_locale_cookie
                                </td>
                                <td data-label="Expiry">24 Hours</td>
                              </tr>
                            </tbody>
                          </table>
                        </li>
                        <li
                          className="cookie-manager__category"
                          id="category-analytical"
                        >
                          <div className="cookie-manager__category-info">
                            <div>
                              <h3>Analytical or performance cookies</h3>
                              <p>
                                These allow us to recognise and count the number
                                of visitors and to see how visitors move around
                                our website when they are using it. This helps
                                us to improve the way our website works, for
                                example, by ensuring that users are finding what
                                they are looking for easily.
                              </p>
                            </div>
                            <div className="cookie-manager__category-buttons">
                              <button
                                className="cookie-manager__button cookie-manager__button--primary"
                                data-cookie-manager-accept-all-category="analytical"
                              >
                                Accept All
                              </button>
                              <button
                                className="cookie-manager__button"
                                data-cookie-manager-deny-all-category="analytical"
                              >
                                Deny All
                              </button>
                            </div>
                          </div>
                          <div className="cookie-manager__provider-info">
                            <div>
                              <h4>Google Analytics</h4>
                              <p>
                                Google uses these cookies to distinguish users
                                and track sessions.
                              </p>
                              <p>
                                <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
                                  More information
                                </a>
                              </p>
                            </div>
                            <div>
                              <label className="cookie-manager__lightswitch">
                                <input
                                  autoComplete="off"
                                  data-cookie-manager-provider-preference="google_analytics"
                                  type="checkbox"
                                />
                                <span
                                  className="cookie-manager__lightswitch-slider"
                                  aria-label="Accept cookie category"
                                />
                              </label>
                            </div>
                          </div>
                          <table className="cookie-manager__cookie-table">
                            <thead>
                              <tr>
                                <th>Cookie Name</th>
                                <th>Expiry</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="Cookie Name">_ga</td>
                                <td data-label="Expiry">2 Years</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_gat</td>
                                <td data-label="Expiry">1 Minute</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_gid</td>
                                <td data-label="Expiry">24 Hours</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_ga_VMSZGT70S0</td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">NID</td>
                                <td data-label="Expiry">6 Months</td>
                              </tr>
                            </tbody>
                          </table>
                        </li>
                        <li
                          className="cookie-manager__category"
                          id="category-functionality"
                        >
                          <div className="cookie-manager__category-info">
                            <div>
                              <h3>Functionality cookies</h3>
                              <p>
                                These are used to recognise you when you return
                                to our website. This enables us to personalise
                                our content for you, greet you by name and
                                remember your preferences (for example, your
                                choice of language or region).
                              </p>
                            </div>
                            <div className="cookie-manager__category-buttons">
                              <button
                                className="cookie-manager__button cookie-manager__button--primary"
                                data-cookie-manager-accept-all-category="functionality"
                              >
                                Accept All
                              </button>
                              <button
                                className="cookie-manager__button"
                                data-cookie-manager-deny-all-category="functionality"
                              >
                                Deny All
                              </button>
                            </div>
                          </div>
                          <div className="cookie-manager__provider-info">
                            <div>
                              <h4>Vimeo</h4>
                              <p>
                                Vimeo uses these cookies to distinguish users
                                and track sessions.
                              </p>
                              <p>
                                <a href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
                                  More information
                                </a>
                              </p>
                            </div>
                            <div>
                              <label className="cookie-manager__lightswitch">
                                <input
                                  autoComplete="off"
                                  data-cookie-manager-provider-preference="vimeo"
                                  type="checkbox"
                                />
                                <span
                                  className="cookie-manager__lightswitch-slider"
                                  aria-label="Accept cookie category"
                                />
                              </label>
                            </div>
                          </div>
                          <table className="cookie-manager__cookie-table">
                            <thead>
                              <tr>
                                <th>Cookie Name</th>
                                <th>Expiry</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="Cookie Name">__cf_bm</td>
                                <td data-label="Expiry">2 Years</td>
                              </tr>
                            </tbody>
                          </table>
                        </li>
                        <li
                          className="cookie-manager__category"
                          id="category-targeting"
                        >
                          <div className="cookie-manager__category-info">
                            <div>
                              <h3>Targeting cookies</h3>
                              <p>
                                These cookies record your visit to our website,
                                the pages you have visited and the links you
                                have followed. We will use this information to
                                make our website and the advertising displayed
                                on it more relevant to your interests. [We may
                                also share this information with third parties
                                for this purpose.]
                              </p>
                            </div>
                            <div className="cookie-manager__category-buttons">
                              <button
                                className="cookie-manager__button cookie-manager__button--primary"
                                data-cookie-manager-accept-all-category="targeting"
                              >
                                Accept All
                              </button>
                              <button
                                className="cookie-manager__button"
                                data-cookie-manager-deny-all-category="targeting"
                              >
                                Deny All
                              </button>
                            </div>
                          </div>
                          <div className="cookie-manager__provider-info">
                            <div>
                              <h4>LinkedIn</h4>
                              <p>
                                LinkedIn uses cookies for authentication (liap),
                                to save user preferences and enable features
                                (lidc, li_mc, li_gc, lang, bcookie), to gather
                                insights and analytcs (lms_analytics,
                                AnalyticsSyncHistory, ln_or) and for targeting
                                purposes (lms_ads, UserMatchHistory, _guid)
                              </p>
                              <p>
                                <a href="https://www.linkedin.com/legal/l/cookie-table">
                                  More information
                                </a>
                              </p>
                            </div>
                            <div>
                              <label className="cookie-manager__lightswitch">
                                <input
                                  autoComplete="off"
                                  data-cookie-manager-provider-preference="linkedin"
                                  type="checkbox"
                                />
                                <span
                                  className="cookie-manager__lightswitch-slider"
                                  aria-label="Accept cookie category"
                                />
                              </label>
                            </div>
                          </div>
                          <table className="cookie-manager__cookie-table">
                            <thead>
                              <tr>
                                <th>Cookie Name</th>
                                <th>Expiry</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="Cookie Name">lidc</td>
                                <td data-label="Expiry">1 Day</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">li_mc</td>
                                <td data-label="Expiry">6 Months</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">lms_analytics</td>
                                <td data-label="Expiry">1 Month</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">lms_ads</td>
                                <td data-label="Expiry">1 Month</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">
                                  AnalyticsSyncHistory
                                </td>
                                <td data-label="Expiry">1 Month</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">
                                  UserMatchHistory
                                </td>
                                <td data-label="Expiry">1 Month</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_guid</td>
                                <td data-label="Expiry">2 Months</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">liap</td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">ln_or</td>
                                <td data-label="Expiry">1 Day</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">li_gc</td>
                                <td data-label="Expiry">1 Month</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">lang</td>
                                <td data-label="Expiry">Session</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">bcookie</td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="cookie-manager__provider-info">
                            <div>
                              <h4>Pipedrive</h4>
                              <p>
                                Pipedrive uses cookies to track and analyse user
                                behaviour.
                              </p>
                              <p>
                                <a href="https://www.pipedrive.com/en/cookie-notice#how-do-we-use-cookies">
                                  More information
                                </a>
                              </p>
                            </div>
                            <div>
                              <label className="cookie-manager__lightswitch">
                                <input
                                  autoComplete="off"
                                  data-cookie-manager-provider-preference="pipedrive"
                                  type="checkbox"
                                />
                                <span
                                  className="cookie-manager__lightswitch-slider"
                                  aria-label="Accept cookie category"
                                />
                              </label>
                            </div>
                          </div>
                          <table className="cookie-manager__cookie-table">
                            <thead>
                              <tr>
                                <th>Cookie Name</th>
                                <th>Expiry</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="Cookie Name">__cf_bm</td>
                                <td data-label="Expiry">1 Hour</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">OptanonConsent</td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">
                                  optimizelyEndUserId
                                </td>
                                <td data-label="Expiry">Session</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">ps_mode</td>
                                <td data-label="Expiry">3 Months</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_rdt_uuid</td>
                                <td data-label="Expiry">3 Months</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_fbp</td>
                                <td data-label="Expiry">3 Months</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_gcl_au</td>
                                <td data-label="Expiry">3 Months</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">
                                  ajs_anonymous_id
                                </td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">
                                  pd_language_selection
                                </td>
                                <td data-label="Expiry">Session</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">
                                  _hjSessionUser_2119898
                                </td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_ttp</td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">
                                  _tt_enable_cookie
                                </td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">pd_referrer</td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_ga</td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_uetvid</td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">
                                  OptanonAlertBoxClosed
                                </td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_ga_23LL2TCRVT</td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                              <tr>
                                <td data-label="Cookie Name">_lfa</td>
                                <td data-label="Expiry">1 Year</td>
                              </tr>
                            </tbody>
                          </table>
                        </li>
                      </ul>
                      <h3>Preference</h3>
                      <p>
                        You can block cookies by activating the setting on your
                        browser that allows you to refuse the setting of all or
                        some cookies. However, if you use your browser settings
                        to block all cookies (including essential cookies) you
                        may not be able to access all or parts of our website.
                      </p>
                    </div>
                  </div>
                  <div className="cookie-manager__button-container">
                    <div className="cookie-manager__buttons cookie-manager__buttons-accept-deny">
                      <button
                        className="cookie-manager__button cookie-manager__button--primary"
                        data-cookie-manager-accept-all=""
                      >
                        Accept All
                      </button>
                      <button
                        className="cookie-manager__button"
                        data-cookie-manager-deny-all=""
                      >
                        Deny All
                      </button>
                    </div>
                    <div className="cookie-manager__buttons cookie-manager__buttons-save-deny">
                      <button
                        className="cookie-manager__button cookie-manager__button--primary"
                        data-cookie-manager-save-changes=""
                      >
                        Save Changes
                      </button>
                      <button
                        className="cookie-manager__button"
                        data-cookie-manager-deny-all=""
                      >
                        Deny All
                      </button>
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
