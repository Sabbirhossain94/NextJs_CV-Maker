import React from "react";
import { useContext } from "react";
import { DataContext } from "../pages/CVBuilder";
import Head from "next/head";

// import "../App.css";
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
  const [stateValue9, setStateValue9] = getData.value9;

  console.log(stateValue7);
  return (
    <div>
      <div id="body" style={{ height: "100%" }}>
        <div
          id="container"
          style={{ width: "50.076em", height: "20em", margin: "auto" }}
        >
          <div
            id="inner"
            style={{
              padding: "10px 80px",
              margin: "80px auto",
              background: "#f5f5f5",

              borderWidth: "8px 0 2px 0",
            }}
          >
            <div
              class="yui-gc"
              style={{ width: "100%", display: "flex", flexDirection: "row" }}
            >
              <div class="yui-u first">
                <h2>
                  {stateValue1.firstname} {stateValue1.lastname}
                </h2>
                <h3>{stateValue1.wantedjobtitle}</h3>
              </div>

              <div
                class="yui-u"
                style={{ width: "50%", marginLeft: "150px", marginTop: "10px" }}
              >
                <div class="contact-info">
                  <h4> {stateValue1.address}</h4>
                  <h4>
                    <a href="mailto:name@yourdomain.com">{stateValue1.email}</a>
                  </h4>
                  <h4>{stateValue1.phone}</h4>
                </div>
              </div>
            </div>

            <div id="bd">
              <div id="yui-main">
                <div class="yui-b">
                  <div class="yui-gf">
                    <div class="yui-u first">
                      <h2>{stateValue2.summary === "" ? "" : "About"}</h2>
                    </div>
                    <div class="yui-u">
                      <p class="enlarge">{stateValue2.summary}</p>
                    </div>
                  </div>

                  <div class="yui-gf">
                    <div class="yui-u first">
                      <h2>Skills</h2>
                      <hr></hr>
                    </div>
                    <div class="yui-u" style={{ display: "flex" }}>
                      <ul class="talent">
                        {stateValue6.map((item, key) => (
                          <li key={key}>{item.skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div class="yui-gf">
                    <div class="yui-u first">
                      <h2>Social Links</h2>
                      <hr></hr>
                    </div>
                    <div class="yui-u" style={{ display: "flex" }}>
                      <ul class="talent">
                        {stateValue5.map((item, key) => (
                          <li key={key}>
                            <a href={item.linkurl}> {item.label} </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div class="yui-gf">
                    <div class="yui-u first">
                      <h2>Experience</h2>
                      <hr></hr>
                    </div>

                    <div class="yui-u">
                      {stateValue3.map((item, key) => (
                        <li key={key} style={{ listStyle: "none" }}>
                          <div class="job">
                            <h2>{item.employer}</h2>
                            <h3>{item.jobtitle}</h3>
                            <h4>
                              {item.startdate}-{item.enddate}
                            </h4>
                            <h4>{item.city}</h4>
                            <p>{item.description}</p>
                          </div>
                        </li>
                      ))}
                    </div>
                  </div>

                  <div class="yui-gf last">
                    <div class="yui-u first">
                      <h2>Education</h2>
                      <hr></hr>
                    </div>
                    {stateValue4.map((item, key) => (
                      <li key={key} style={{ listStyle: "none" }}>
                        <div class="yui-u">
                          <h2>
                            {item.institution} - {item.institutioncity}
                          </h2>
                          <h3>
                            {item.degree}
                            <strong>{`${item.startdate} ${item.enddate}`}</strong>
                          </h3>
                        </div>
                      </li>
                    ))}
                  </div>
                  <div class="yui-gf last">
                    <div class="yui-u first">
                      <h2>
                        {stateValue7[0].course === "" ? "" : "Certfications"}
                      </h2>
                      <hr></hr>
                    </div>
                    {stateValue7.map((item, key) => (
                      <li key={key} style={{ listStyle: "none" }}>
                        <div class="yui-u">
                          <h3>{item.course}</h3>
                          <h3>
                            {item.institution}
                            <strong>{`${item.startdate} ${item.enddate}`}</strong>
                          </h3>
                        </div>
                      </li>
                    ))}
                  </div>
                  <div class="yui-gf last">
                    <div class="yui-u first">
                      {stateValue8[0].activity === "" ? (
                        ""
                      ) : (
                        <h2>Extra-curricular Activities</h2>
                      )}
                      <hr></hr>
                    </div>
                    {stateValue8.map((item, key) => (
                      <li key={key} style={{ listStyle: "none" }}>
                        <div class="yui-u">
                          <h2>
                            {item.activity} - {item.employer}
                          </h2>
                          <h3>
                            <strong>{`${item.startdate} ${item.enddate}`}</strong>
                          </h3>
                        </div>
                      </li>
                    ))}
                  </div>
                  <div class="yui-gf">
                    <div class="yui-u first">
                      <h2>Language</h2>
                      <hr></hr>
                    </div>
                    <div class="yui-u" style={{ display: "flex" }}>
                      <ul class="talent">
                        {stateValue9.map((item, key) => (
                          <li key={key}>{item.language}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
