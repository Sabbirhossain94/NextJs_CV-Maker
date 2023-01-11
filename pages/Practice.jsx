import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Page,
  Document,
  PDFViewer,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import { Text, View, Image } from "@react-pdf/renderer";
import styles from "../components/StyleComponents/styles";
export default function Practice() {
  const [progress, setProgress] = useState(30);
  const details = [
    {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      occupation: "",
      address: "",
      postalcode: "",
      nationality: "",
      placeofbirth: "",
      dateofbirth: "",
    },
  ];
  return (
    <div>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          {[1, 2, 3].map((item) => (
            <Page size="A4" style={styles.page}>
              <View style={styles.section_left}>
                <Text></Text>
              </View>
            </Page>
          ))}
        </Document>
      </PDFViewer>
    </div>
  );
}
