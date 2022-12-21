import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useContext } from "react";
import { DataContext } from "../pages/CVBuilder";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function MyDocument() {
  const getData = useContext(DataContext);
  console.log(getData);
  //   const {a,b,c,d,e,f,g,h,i,j}=value
  //    const [stateValue1, setStateValue1] = value.value1;
  //    const [stateValue2, setStateValue2] = value.value2;
  //    const [stateValue3, setStateValue3] = value.value3;
  //    const [stateValue4, setStateValue4] = value.value4;
  //    const [stateValue5, setStateValue5] = value.value5;
  //    const [stateValue6, setStateValue6] = value.value6;
  //    const [stateValue7, setStateValue7] = value.value7;
  //    const [stateValue8, setStateValue8] = value.value8;
  //    const [stateValue9, setStateValue9] = value.value9;
  //    const [stateValue10, setStateValue10] = value.value10;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* {stateValue1.firstname && (
          <View style={styles.section}>
            <Text>{stateValue1.firstname}</Text>
            <Text>{stateValue1.lastname}</Text>
          </View>
        )} */}
      </Page>
    </Document>
  );
}
