import Header from "@/app/components/header/Header";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div
      data-barba="container"
      data-barba-namespace="default"
      style={{ opacity: 1 }}
    >
      <Header />
      <main id="main-content" className="main">
        <section className="section">
          <div className="container">
            <div className="grid flex flex--wrap">
              <div className="grid__item a3-16 f6-6">
                <Link className="button button--back" href="/careers">
                  Back to careers
                </Link>
              </div>
              <div className="grid__item a10-16 f6-6">
                <div className="page__spacing-xs">
                  <h1 className="lh lh--margin-xs">
                    Senior Project Manager - Auckland
                  </h1>
                  <p className="mh lighter">Auckland, Full-time</p>
                </div>
                <div className="page__spacing-xs">
                  <h2 className="mh mh--increase-margin mh--colour-secondary">
                    Description
                  </h2>
                  <div className="typeset">
                    <p>
                      We are looking for an experienced Senior Project Manager
                      to join our team. This role is based in our Freemans Bay
                      studio. We will only consider people who already have the
                      right to work in the NZ.
                    </p>
                    <p />
                    <p>
                      The role of the Senior Project Manager is to lead a
                      project team consisting of external client stakeholders as
                      well as Boundary production talent, through the project
                      life cycle using planning, budgeting, scheduling,
                      resourcing and tracking tools to meet an agreed project
                      plan. They regularly communicate updates on project status
                      with the in-house artists and external stakeholders,
                      manage risks and issues and monitor quality of output to
                      ensure that the project meets the brief to the highest
                      standard. You will be required to undertake the following:
                    </p>
                    <p />
                    <ul>
                      {" "}
                      <li>Plan and implement projects</li>{" "}
                      <li>Help define project scope, goals and deliverables</li>{" "}
                      <li>Allocation and management of project resources</li>{" "}
                      <li>Create a schedule and project timeline</li>{" "}
                      <li>Track deliverables</li>{" "}
                      <li>Monitor and report on project progress</li>{" "}
                      <li>
                        Implement and manage change when necessary to meet
                        project outputs
                      </li>{" "}
                      <li>Evaluate and assess the result of the project</li>{" "}
                    </ul>
                  </div>
                </div>
                <div className="page__spacing-xs">
                  <h2 className="mh mh--increase-margin mh--colour-secondary">
                    Requirements
                  </h2>
                  <div className="typeset">
                    <ul>
                      {" "}
                      <li>Extensive Project Management experience</li>{" "}
                      <li>Methodical and analytical approach</li>{" "}
                      <li>
                        Capable of leading multiple projects at the same time
                        under pressure
                      </li>{" "}
                      <li>
                        Excellent communication skills to a range of audiences
                      </li>{" "}
                      <li>Problem-solving and leadership skills</li>{" "}
                      <li>Highly numerate</li>{" "}
                      <li>Strong attention to detail</li>{" "}
                      <li>
                        A positive team player able to motivate, support and
                        reassure
                      </li>{" "}
                      <li>
                        Microsoft Office / Google Suite – particularly
                        excel/sheets and word/doc at an intermediate level
                      </li>{" "}
                    </ul>
                    <p />
                    <p>
                      It is a strong bonus if you have a background in
                      architectural visualisation, architecture, real estate,
                      interior design or 3D. However, we are happy to teach the
                      right candidate what they need to know about these areas
                      in order to be successful in the role.
                    </p>
                  </div>
                </div>
                <div className="page__spacing-xs">
                  <h2 className="mh mh--increase-margin mh--colour-secondary">
                    Benefits
                  </h2>
                  <div className="typeset">
                    <p />
                    <p />
                    <ul>
                      {" "}
                      <li>
                        Bonus Scheme: based on annual company performance
                      </li>{" "}
                      <li>Holidays: 4 weeks per year + Stat Holidays</li>{" "}
                      <li>
                        Gym membership contribution or contribution to other
                        fitness goals
                      </li>{" "}
                      <li>Mental Health support</li>{" "}
                      <li>Great Learning &amp; Development opportunities</li>{" "}
                      <li>Regular team events and social activities</li>{" "}
                      <li>Fantastic office environment in a great location</li>{" "}
                    </ul>
                  </div>
                </div>
                <a href="#" target="_blank" className="button button--primary">
                  Apply for this job
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
