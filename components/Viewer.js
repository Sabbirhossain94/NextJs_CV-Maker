import React from "react";
import { useState, useContext } from "react";
import { DataContext } from "../pages/CVBuilder";
import LinearProgress from "@mui/material/LinearProgress";
import Button from "@mui/material/Button";
import jsPDF from "jspdf";

export default function Template() {
  const [progress, setProgress] = useState(20);
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
  const [stateValue10, setStateValue10] = getData.value10;

  const createPDF = () => {
      var doc = new jsPDF("p","pt","a4");
      doc.html(document.querySelector("#pdf"),{
        callback: function(pdf){
          pdf.save("cv.pdf")
        }
      })
  };
  return (
    <div >
      <div id="pdf" style={{ height: "100vh" }}>
        <div style={{ height: "100vh" }}>
          <div
            id="container"
            style={{ width: "50.076em", margin: "auto", height: "100%", background:"red" }}
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
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h1>
                     Sabbir {stateValue1.firstname} {stateValue1.lastname}
                    </h1>
                    <h2>{stateValue1.occupation}</h2>
                  </div>

                  <div style={{ marginTop: "15px" }}>
                    <div>
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

              <div>
                <div>
                  <div>
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
                      <div>
                        <p>{stateValue2.summary}</p>
                      </div>
                    </div>
                    {/* about section */}

                    {/* skill section */}
                    <div>
                      {stateValue6[0].skill && (
                        <div>
                          <h2>Skill</h2>
                          <hr></hr>
                        </div>
                      )}
                      <div>
                        <ul style={{ listStyle: "none" }}>
                          {stateValue6.map((item, key) => (
                            <div>
                              <li key={key}>{item.skill}</li>

                              <li>
                                {item.level}
                                {/* <LinearProgress
                                variant="determinate"
                                value={''}
                                sx={{
                                  marginTop: "10px",
                                  height: "20px",
                                  width: "50%",
                                }}
                              /> */}
                              </li>
                            </div>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* skill section */}

                    {/* experience section */}
                    <div>
                      {stateValue3[0].jobtitle && (
                        <div>
                          <h2>Experience</h2>
                          <hr></hr>
                        </div>
                      )}

                      <div>
                        {stateValue3.map((item, key) => (
                          <div key={key}>
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
                    <div>
                      <div>
                        {stateValue4[0].institution && (
                          <div>
                            <h2>Education</h2>
                            <hr></hr>
                          </div>
                        )}
                        {stateValue4.map((item, key) => (
                          <div key={key}>
                            <h2>
                              {`${item.institution}${item.institutioncity}`}
                            </h2>
                            <h3>
                              {item.degree}
                              <strong>{`${item.startdate} ${item.enddate}`}</strong>
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* education section */}

                    {/* course section */}
                    <div>
                      <div>
                        {stateValue7[0].course && (
                          <div>
                            <h2>Courses</h2>
                            <hr></hr>
                          </div>
                        )}
                        {stateValue7.map((item, key) => (
                          <div key={key}>
                            <h2>{`${item.course}${item.institution}`}</h2>
                            <h3>
                              <strong>{`${item.startdate} ${item.enddate}`}</strong>
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* course section */}

                    {/* Extra Curricular Details section*/}
                    <div>
                      <div>
                        {stateValue8[0].activity && (
                          <div>
                            <h2>Extra Curricular Details</h2>
                            <hr></hr>
                          </div>
                        )}
                        {stateValue8.map((item, key) => (
                          <div key={key}>
                            <h2>{`${item.activity}${item.employer}${item.city}`}</h2>
                            <h3>
                              <strong>{`${item.startdate} ${item.enddate}`}</strong>
                            </h3>
                            <p>{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Extra Curricular Details section*/}

                    {/* Language section*/}
                    <div>
                      <div>
                        {stateValue9[0].language && (
                          <div>
                            <h2>Languages</h2>
                            <hr></hr>
                          </div>
                        )}
                        {stateValue9.map((item, key) => (
                          <div key={key}>
                            <h3>
                              <strong>{`${item.language}`}</strong>
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Language section*/}

                    {/* Hobbies section*/}
                    <div>
                      <div>
                        {stateValue10.hobbies && (
                          <div>
                            <h2>Hobbies</h2>
                            <hr></hr>
                          </div>
                        )}

                        <div>
                          <h3>
                            <strong>{`${stateValue10.hobbies}`}</strong>
                          </h3>
                        </div>
                      </div>
                    </div>
                    {/* Hobbies section*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ float: "right", marginRight: "75px", marginTop: "20px" }}>
        <Button variant="contained" onClick={createPDF} class="ToHide">
          Download
        </Button>
      </div>
    </div>
  );
}
