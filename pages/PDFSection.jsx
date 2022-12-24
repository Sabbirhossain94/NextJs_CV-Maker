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

  return (
    <div style={{ flexGrow: 1 }}>
      <PDFViewer style={{ width: "100%", height: "100vh" }} >
        <Document>
          <Page size="A4" style={styles.page}>
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
                  </View>
                  <Text style={styles.profession_text}>{item.occupation}</Text>
                  <View style={styles.profile_line} />
                </View>
              ))}
            </View>
            <View style={styles.section_right}>
              <Text>{""}</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      {/* <PDF/> */}
    </div>
  );
};


export default PDFView;
