import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";
import { useContext, useState } from "react";

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
   const [data, setData] = useState({
     firstname: "Sabbir",
     lastname: "Hossain",
   });
 
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{data.firstname}</Text>
        </View>
        <View style={styles.section}>
          <Text>{data.lastname}</Text>
        </View>
      </Page>
    </Document>
  );
}
