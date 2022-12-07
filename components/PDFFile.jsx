import React from "react";
import { useContext, useEffect } from "react";
import DataContext from "./Context";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";
import { valueToPercent } from "@mui/base";
import { useState } from "react";

const styles = StyleSheet.create({
  body: {
    paddingBottom: 65,
    paddingHorizontal: 35,
    height: "100vh",
  },
  page: {
    flexDirection: "column",
    border: "2px solid rgba(0, 0, 0, 0.233)",
    padding: 20,
    paddingHorizontal: 40,
    width: "100vw",
  },
  section: {
    padding: 10,
    flexGrow: 1,
  },
  heading: {
    backgroundColor: "blue",
    color: "white",
    paddingVertical: 10,
  },
  header: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    backgroundColor: "blue",
    height: "20px",
  },
  text: {
    marginVertical: 4,
    fontSize: 14,
    fontFamily: "Regular",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

export default function PDFFile() {
  const data = useContext(DataContext);
  console.log(data)
  return (
    <Document>
      <Page size="A4">
        <View>
          <Text>hello world!</Text>
        </View>
      </Page>
    </Document>
  );
}

// export default function CodeForPDF() {
//   return (
//     <div>

//     </div>
//   );
// }
