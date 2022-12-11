import React from "react";
import { useContext } from "react";
import { DataContext } from "../pages/CVBuilder";
import Head from "next/head";

export default function Template() {
  const getData = useContext(DataContext);
  const [stateValue1, setStateValue1] = getData.value1;
  const [stateValue2, setStateValue2] = getData.value2;
  const [stateValue3, setStateValue3] = getData.value3;
  const [stateValue4, setStateValue4] = getData.value4;
  const [stateValue5, setStateValue5] = getData.value5;
  const [stateValue6, setStateValue6] = getData.value6;
  const [stateValue7, setStateValue7] = getData.value7;
  const [stateValue8, setStateValue8] = getData.value8;
  console.log(stateValue4);
  return (
    <div>
      <div>
        <Head>
          <link href="/public/styles.css" rel="stylesheet" key="test" />
        </Head>
      </div>

      <div id="body" style={{ height: "100vh" }}>
        <div
          id="container"
          style={{ width: "50.076em", margin: "auto", height: "100%" }}
        >
          <div
            id="inner"
            style={{
              padding: "10px 80px",
              margin: "80px auto",
              background: "#f5f5f5",
              height: "100%",
            }}
          >
            <div id="hd">
              <div
                class="yui-gc"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div class="yui-u first">
                  <h1>
                    {stateValue1.firstname} {stateValue1.lastname}
                  </h1>
                  <h2>{stateValue1.occupation}</h2>
                </div>

                <div class="yui-u" style={{ marginTop: "15px" }}>
                  <div class="contact-info">
                    <h4>
                      {stateValue1.address} {stateValue1.postalcode}
                    </h4>
                    <h4>
                      <a href="mailto:name@yourdomain.com">
                        {stateValue1.email}
                      </a>
                    </h4>
                    <h4>{stateValue1.phone}</h4>
                    <h4>{stateValue5.linkurl}</h4>
                  </div>
                </div>
              </div>
            </div>

            <div id="bd">
              <div id="yui-main">
                <div class="yui-b">
                  {/* about section */}
                  <div>
                    <div>
                      {stateValue2.summary && (
                        <div>
                          <h2>About </h2>
                          <hr></hr>
                        </div>
                      )}
                    </div>
                    <div class="yui-u">
                      <p class="enlarge">{stateValue2.summary}</p>
                    </div>
                  </div>
                  {/* about section */}

                  {/* skill section */}
                  <div class="yui-gf">
                    {stateValue6[0].skill && (
                      <div>
                        <h2>Skill</h2>
                        <hr></hr>
                      </div>
                    )}
                    <div style={{ display: "flex" }}>
                      <ul class="skills">
                        {stateValue6.map((item) => (
                          <li>{item.skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* skill section */}

                  {/* experience section */}
                  <div class="yui-gf">
                    {stateValue3[0].jobtitle && (
                      <div>
                        <h2>Experience</h2>
                        <hr></hr>
                      </div>
                    )}

                    <div class="yui-u">
                      {stateValue3.map((item) => (
                        <div class="experience">
                          <h2>{item.jobtitle}</h2>
                          <h3>{item.employer}</h3>
                          <h4>{`${item.startdate} ${item.enddate}`}</h4>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* experience section */}

                  {/* education section */}
                  <div class="yui-gf last">
                    <div>
                      {stateValue4[0].institution && (
                        <div>
                          <h2>Education</h2>
                          <hr></hr>
                        </div>
                      )}
                      {stateValue4.map((item) => (
                        <div class="yui-u">
                          <h2>
                            {`${item.institution}${item.institutioncity}`}
                          </h2>
                          <h3>
                            {item.degree}
                            <strong>{`${item.startdate} ${item.enddate}`}</strong>{" "}
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* education section */}
                  <div class="yui-gf last">
                    <div>
                      {stateValue7[0].course && (
                        <div>
                          <h2>Courses</h2>
                          <hr></hr>
                        </div>
                      )}
                      {stateValue7.map((item) => (
                        <div class="yui-u">
                          <h2>{`${item.course}${item.institution}`}</h2>
                          <h3>
                            <strong>{`${item.startdate} ${item.enddate}`}</strong>
                          </h3>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div id="ft">
              <p>
                Jonathan Doe —{" "}
                <a href="mailto:name@yourdomain.com">name@yourdomain.com</a> —
                (313) - 867-5309
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
