import React from "react";
import {
  Page,
  Document,
  PDFViewer,
  PDFDownloadLink,
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

  console.log(stateValue3);
  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <Page size="A4" style={styles.page}>
            {/* left section */}
            <View style={styles.section_left}>
              {stateValue1.map((item) => (
                <View style={styles.profile_container}>
                  {/* <Image style={styles.profile_img} /> */}
                  <View
                    style={{
                      justifyContent: "center",
                    }}
                  >
                    <Text style={styles.name_text}>
                      {item.firstname} {item.lastname}
                    </Text>
                    <Text style={styles.profession_text}>
                      {item.occupation}
                    </Text>
                  </View>

                  <View>
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        padding: "10px",
                      }}
                    >
                      <View
                        style={{
                          marginTop: "40px",
                          display: "flex",
                          fontSize: "10px",
                          color: "white",
                        }}
                      >
                        <li>
                          <View>
                            <Text
                              style={{
                                fontSize: "12px",
                              }}
                            >
                              {item.address ? "Address" : ""}
                            </Text>
                            <Text
                              style={{ marginTop: "15px", color: "#d1d5db" }}
                            >
                              {item.address}
                            </Text>
                          </View>
                        </li>

                        <li>
                          <View style={{ marginTop: "30px" }}>
                            <Text style={{ fontSize: "12px" }}>
                              {item.phone ? "Phone" : ""}
                            </Text>
                            <Text
                              style={{ marginTop: "15px", color: "#d1d5db" }}
                            >
                              {item.phone}
                            </Text>
                          </View>
                        </li>

                        <li>
                          <View style={{ marginTop: "50px" }}>
                            <Text style={{ fontSize: "12px" }}>
                              {item.email ? "Email" : ""}
                            </Text>
                            <Text
                              style={{ marginTop: "15px", color: "#d1d5db" }}
                            >
                              {item.email}
                            </Text>
                          </View>
                        </li>

                        <li>
                          <View style={{ marginTop: "70px" }}>
                            <Text style={{ fontSize: "12px" }}>
                              {item.nationality ? "Nationality" : ""}
                            </Text>
                            <Text
                              style={{ marginTop: "15px", color: "#d1d5db" }}
                            >
                              {item.nationality}
                            </Text>
                          </View>
                        </li>

                        <li></li>
                      </View>
                    </ul>
                  </View>
                </View>
              ))}

              {/* links section */}
              <View
                style={{
                  marginTop: "20px",
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
            <View>
              {stateValue2.map((item) => (
                <View style={{ padding: "10px", width: "100%" }}>
                  <Text style={{ fontSize: "12px" }}>{item.summary}</Text>
                </View>
              ))}

              {stateValue3[0].jobtitle && (
                <View>
                  <Text style={{ fontSize: "15px", padding: "10px" }}>
                    Experience
                  </Text>
                  <View style={[styles.profile_line, { marginTop: "10px" }]} />

                  {stateValue3.map((item, key) => (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "10px",
                      }}
                      key={key}
                    >
                      <Text style={{ fontSize: "12px" }}>
                        {`${
                          item.startdate.slice(0, 7) +
                          " - " +
                          item.enddate.slice(0, 7)
                        }`}
                      </Text>
                      <View
                        style={{
                          fontSize: "15px",
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "40px",
                        }}
                      >
                        <Text>{item.jobtitle}</Text>
                        <Text>{item.city}</Text>
                        <Text>{item.description}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              )}

              {stateValue4[0].institution && (
                <View>
                  <Text style={{ fontSize: "15px", padding: "10px" }}>
                    Education
                  </Text>
                  <View style={[styles.profile_line, { marginTop: "10px" }]} />
                  {stateValue4.map((item, key) => (
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "10px",
                      }}
                      key={key}
                    >
                      <Text style={{ fontSize: "12px" }}>
                        {`${
                          item.startdate.slice(0, 7) +
                          " - " +
                          item.enddate.slice(0, 7)
                        }`}
                      </Text>
                      <View
                        style={{
                          fontSize: "15px",
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: "40px",
                        }}
                      >
                        <Text>{`${item.degree}` + ","}</Text>
                        <Text style={{ marginLeft: "5px" }}>
                          {item.institution}
                        </Text>
                      </View>
                    </View>
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
