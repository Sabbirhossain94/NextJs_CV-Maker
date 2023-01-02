import React from "react";
import {
  Page,
  Document,
  PDFViewer,
  PDFDownloadLink,
  Svg,
  Line,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import { Text, View } from "@react-pdf/renderer";
import { useState, useEffect, useContext } from "react";
import styles from "../components/Sub-components/styles";
import Button from "@mui/material/Button";
import { DataContext } from "./CVBuilder";

const PDFView = () => {
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
  const newArr = stateValue10.hobbies.split(",");
  console.log(stateValue3);
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <Page size="A4" style={styles.page} fixed >
            {/* left section */}
            <View style={styles.section_left}>
              {stateValue1.map((item) => (
                <View>
                  <View
                    style={{
                      justifyContent: "center",
                      marginLeft: "10px",
                      fontFamily: "Helvetica-Bold",
                      marginTop: "20px",
                    }}
                  >
                    <Text style={styles.name_text}>
                      {item.firstname} {item.lastname}
                    </Text>
                    <Text style={styles.profession_text}>
                      {item.occupation}
                    </Text>
                  </View>

                  {item.address ||
                  item.phone ||
                  item.email ||
                  item.nationality ? (
                    <View
                      style={{
                        backgroundColor: "#002e58",
                        width: "100%",
                        padding: "5px",
                        marginTop: "15px",
                        fontFamily: "Helvetica-Bold",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: "15px",
                          color: "white",
                          marginLeft: "5px",
                        }}
                      >
                        Personal Info
                      </Text>
                    </View>
                  ) : (
                    ""
                  )}
                  <View
                    style={{ marginLeft: "10px", fontFamily: "Helvetica-Bold" }}
                  >
                    <View style={{ marginTop: "10px" }}>
                      <Text
                        style={{
                          fontSize: "12px",
                          color: "white",
                        }}
                      >
                        {item.address ? "Address" : ""}
                      </Text>
                      <Text
                        style={{
                          marginTop: "5px",
                          fontSize: "10px",
                          color: "#d1d5db",
                        }}
                      >
                        {item.address}
                      </Text>
                    </View>

                    <View style={{ marginTop: "10px" }}>
                      <Text
                        style={{
                          fontSize: "12px",
                          color: "white",
                        }}
                      >
                        {item.phone ? "Phone" : ""}
                      </Text>
                      <Text
                        style={{
                          marginTop: "5px",
                          fontSize: "10px",
                          color: "#d1d5db",
                        }}
                      >
                        {item.phone}
                      </Text>
                    </View>

                    <View style={{ marginTop: "10px" }}>
                      <Text
                        style={{
                          fontSize: "12px",
                          color: "white",
                        }}
                      >
                        {item.email ? "Email" : ""}
                      </Text>
                      <Text
                        style={{
                          marginTop: "5px",
                          fontSize: "10px",
                          color: "#d1d5db",
                        }}
                      >
                        {item.email}
                      </Text>
                    </View>

                    <View style={{ marginTop: "10px" }}>
                      <Text
                        style={{
                          fontSize: "12px",
                          color: "white",
                        }}
                      >
                        {item.nationality ? "Nationality" : ""}
                      </Text>
                      <Text
                        style={{
                          marginTop: "5px",
                          fontSize: "10px",
                          color: "#d1d5db",
                        }}
                      >
                        {item.nationality}
                      </Text>
                    </View>
                  </View>
                </View>
              ))}

              {/* links section */}
              <View
                style={{
                  marginTop: "15px",
                  color: "white",
                  width: "100%",
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {stateValue5[0].label ? (
                  <View
                    style={{
                      backgroundColor: "#002e58",
                      width: "100%",
                      padding: "5px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "15px",
                        color: "white",
                        marginLeft: "5px",
                      }}
                    >
                      Links
                    </Text>
                  </View>
                ) : (
                  ""
                )}
                {stateValue5.map((item) => (
                  <View style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <Text style={{ fontSize: "12px", color: "white" }}>
                      {item.label}
                    </Text>
                    <Text
                      style={{
                        marginTop: "5px",
                        fontSize: "10px",
                        color: "#d1d5db",
                      }}
                    >
                      {item.linkurl}
                    </Text>
                  </View>
                ))}
              </View>

              {/* skills section */}
              <View
                style={{
                  marginTop: "20px",
                  color: "white",
                  width: "100%",
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {stateValue6[0].skill ? (
                  <View
                    style={{
                      backgroundColor: "#002e58",
                      width: "100%",
                      padding: "5px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "15px",
                        color: "white",
                        marginLeft: "5px",
                      }}
                    >
                      Skills
                    </Text>
                  </View>
                ) : (
                  ""
                )}
                {stateValue6.map((item) => (
                  <View style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <Text style={{ fontSize: "12px", color: "white" }}>
                      {item.skill}
                    </Text>
                    <Text
                      style={{
                        marginTop: "5px",
                        fontSize: "10px",
                        color: "#d1d5db",
                      }}
                    >
                      {item.level}
                    </Text>
                  </View>
                ))}
              </View>

              {/* language section */}
              <View
                style={{
                  marginTop: "20px",
                  color: "white",
                  width: "100%",
                  fontFamily: "Helvetica-Bold",
                }}
              >
                {stateValue9[0].language ? (
                  <View
                    style={{
                      backgroundColor: "#002e58",
                      width: "100%",
                      padding: "5px",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: "15px",
                        color: "white",
                        marginLeft: "5px",
                      }}
                    >
                      Languages
                    </Text>
                  </View>
                ) : (
                  ""
                )}
                {stateValue9.map((item) => (
                  <View style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <Text style={{ fontSize: "12px", color: "white" }}>
                      {item.language}
                    </Text>
                    <Text
                      style={{
                        marginTop: "5px",
                        fontSize: "10px",
                        color: "#d1d5db",
                      }}
                    >
                      {item.level}
                    </Text>
                  </View>
                ))}
              </View>
            </View>

            {/* right section */}
            <View style={styles.section_right}>
              {stateValue2.map((item) => (
                <View>
                  <Text style={{ fontSize: "12px" }}>{item.summary}</Text>
                </View>
              ))}
              {/* experience section */}
              {stateValue3[0].jobtitle && (
                <View>
                  <Text
                    style={{
                      fontSize: "15px",
                      marginTop: "15px",
                      color: "#003d74",
                    }}
                  >
                    Experience
                  </Text>
                  <View
                    style={{
                      height: "0.5px",
                      width: "100%",
                      backgroundColor: "black",
                      marginTop: "5px",
                    }}
                  />
                </View>
              )}
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                {stateValue3.map((item, key) => (
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "10px",
                    }}
                  >
                    <View style={{ width: "25%" }}>
                      <Text style={{ fontSize: "12px" }}>
                        {`${item.startdate.slice(0, 7)}` +
                          `${item.enddate ? " - " : ""}` +
                          `${item.enddate.slice(0, 7)}`}
                      </Text>
                    </View>

                    <View style={{ width: "75%", marginLeft: "100px" }}>
                      <Text style={{ fontSize: "15px" }}>
                        {`${item.jobtitle}` +
                          `${item.employer ? "," : ""}` +
                          `${item.employer}`}
                      </Text>
                      <Text
                        style={{
                          fontSize: "12px",
                          marginTop: "3px",
                        }}
                      >
                        {item.city}
                      </Text>
                      <Text>{item.description}</Text>
                    </View>
                  </View>
                ))}
              </View>
              {/* education section */}
              {stateValue4[0].institution && (
                <View>
                  <Text
                    style={{
                      fontSize: "15px",
                      marginTop: "15px",
                      color: "#003d74",
                    }}
                  >
                    Education
                  </Text>
                  <View
                    style={{
                      height: "0.5px",
                      width: "100%",
                      backgroundColor: "black",
                      marginTop: "5px",
                    }}
                  />
                </View>
              )}
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                {stateValue4.map((item, key) => (
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "10px",
                    }}
                  >
                    <View style={{ width: "25%" }}>
                      <Text style={{ fontSize: "12px" }}>
                        {`${item.startdate.slice(0, 7)}` +
                          `${item.enddate ? " - " : ""}` +
                          `${item.enddate.slice(0, 7)}`}
                      </Text>
                    </View>

                    <View style={{ width: "75%", marginLeft: "100px" }}>
                      <Text style={{ fontSize: "15px" }}>
                        {`${item.institution}` +
                          `${item.institutioncity ? "," : ""}` +
                          `${item.institutioncity}`}
                      </Text>
                      <Text
                        style={{
                          fontSize: "12px",
                          marginTop: "3px",
                          fontFamily: "Times-BoldItalic",
                        }}
                      >
                        {item.degree}
                      </Text>
                      <Text>{item.description}</Text>
                    </View>
                  </View>
                ))}
              </View>
              {stateValue7[0].course && (
                <View>
                  <Text
                    style={{
                      fontSize: "15px",
                      marginTop: "15px",
                      color: "#003d74",
                    }}
                  >
                    Courses
                  </Text>
                  <View
                    style={{
                      height: "0.5px",
                      width: "100%",
                      backgroundColor: "black",
                      marginTop: "5px",
                    }}
                  />
                </View>
              )}
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                {stateValue7.map((item, key) => (
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "10px",
                    }}
                  >
                    <View style={{ width: "25%" }}>
                      <Text style={{ fontSize: "12px" }}>
                        {`${item.startdate.slice(0, 7)}` +
                          `${item.enddate ? " - " : ""}` +
                          `${item.enddate.slice(0, 7)}`}
                      </Text>
                    </View>

                    <View style={{ width: "75%", marginLeft: "100px" }}>
                      <Text style={{ fontSize: "15px" }}>{item.course}</Text>
                      <Text
                        style={{
                          fontSize: "12px",
                          marginTop: "3px",
                          fontFamily: "Times-BoldItalic",
                        }}
                      >
                        {item.institution}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>

              {stateValue8[0].activity && (
                <View>
                  <Text
                    style={{
                      fontSize: "15px",
                      marginTop: "15px",
                      color: "#003d74",
                    }}
                  >
                    Extra-Curricular Activites
                  </Text>
                  <View
                    style={{
                      height: "0.5px",
                      width: "100%",
                      backgroundColor: "black",
                      marginTop: "5px",
                    }}
                  />
                </View>
              )}
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10px",
                }}
              >
                {stateValue8.map((item, key) => (
                  <View
                    style={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      marginTop: "10px",
                    }}
                  >
                    <View style={{ width: "25%" }}>
                      <Text style={{ fontSize: "12px" }}>
                        {`${item.startdate.slice(0, 7)}` +
                          `${item.enddate ? " - " : ""}` +
                          `${item.enddate.slice(0, 7)}`}
                      </Text>
                    </View>

                    <View style={{ width: "75%", marginLeft: "100px" }}>
                      <Text style={{ fontSize: "15px" }}>
                        {`${item.activity}` +
                          `${item.employer ? "," : ""}` +
                          `${item.employer}`}
                      </Text>
                      <Text
                        style={{
                          fontSize: "12px",
                          marginTop: "3px",
                          fontFamily: "Times-BoldItalic",
                        }}
                      >
                        {item.city}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>

              {stateValue10.hobbies && (
                <View style={{ marginTop: "15px" }}>
                  <Text
                    style={{
                      fontSize: "15px",
                      marginTop: "15px",
                      color: "#003d74",
                    }}
                  >
                    Hobbies
                  </Text>
                  <View
                    style={{
                      height: "0.5px",
                      width: "100%",
                      backgroundColor: "black",
                      marginTop: "5px",
                    }}
                  />
                  {newArr.map((item) => (
                    <Text style={{ fontSize: "15px", marginTop: "10px" }}>
                      {item}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </Page>
        </Document>
      </PDFViewer>
      {/* <PDF/> */}
    </div>
  );
};

export default PDFView;
