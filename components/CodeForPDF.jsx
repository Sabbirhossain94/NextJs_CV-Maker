import React from "react";
// import Box from "@mui/material/Box";
import {
  Page,
  Text,
  View,
  Document,
  Image,
  StyleSheet,
  
} from "@react-pdf/renderer";
const styles = StyleSheet.create({
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
});

const PDFFile = () => {
  <Document>
    <Page style={styles.page}>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 5,
          overflow: "hidden",
          minHeight: "10vh",
        }}
      >
        <View
          style={{
            maxWidth: 150,
            maxHeight: 100,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image source={""} style={{ width: "100%", objectFit: "cover" }} />
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 12, fontFamily: "Regular" }}></Text>
          <Text style={{ fontSize: 30, fontFamily: "Heavy" }}>
            Capability Statement
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Heavy",
                  paddingHorizontal: 5,
                }}
              >
                CAGE:
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "Medium" }}></Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Heavy",
                  paddingHorizontal: 5,
                }}
              >
                DUNS:
              </Text>
              <Text style={{ fontSize: 12, fontFamily: "Medium" }}></Text>
            </View>
            {/* <Text style={{fontSize:12, fontFamily:"Heavy", paddingHorizontal:5}}>CAGE: { .cage}</Text> */}
            {/* <Text style={{fontSize:12, fontFamily:"Heavy", paddingHorizontal:5}}>DUNS: { .duns}</Text> */}
          </View>
        </View>
      </View>

      <View>
        <View
          style={{ minHeight: "10vh", paddingVertical: 10, marginBottom: 10 }}
        >
          <Text style={{ fontSize: 14, fontFamily: "Regular" }}></Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", minHeight: "25vh" }}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <View style={{ paddingVertical: 10 }}></View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ paddingVertical: 10 }}></View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column", flex: 1, marginRight: 10 }}>
          <View style={{ minHeight: "25vh" }}>
            <View style={{ padding: 5, paddingLeft: 8 }}>
              <Text style={styles.text}>{""}</Text>
              <Text style={styles.text}>{""}</Text>
              <Text style={styles.text}>{""}</Text>
              <Text style={styles.text}>{""}</Text>
            </View>
          </View>
          <View style={{}}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 5,
              }}
            >
              <View
                style={{
                  width: 80,
                  marginHorizontal: 5,
                  maxHeight: 80,
                  borderRadius: 500,
                  overflow: "hidden",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  source={""}
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <View style={{ padding: 5, paddingLeft: 8 }}>
            <Text style={styles.text}>{}</Text>
            <Text style={styles.text}>{}</Text>
            <Text style={styles.text}>{}</Text>
            <View style={{ height: 20 }} />
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Heavy",
                  paddingHorizontal: 5,
                }}
              >
                CAGE:
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular",
                  paddingHorizontal: 5,
                }}
              ></Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Heavy",
                  paddingHorizontal: 5,
                }}
              >
                DUNS:
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Regular",
                  paddingHorizontal: 5,
                }}
              ></Text>
            </View>
            <View style={{ height: 20 }} />
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Heavy",
                paddingHorizontal: 5,
              }}
            >
              NAICS Codes
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontFamily: "Regular",
                paddingHorizontal: 5,
              }}
            >
              asadasd
            </Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>;
};

export default PDFFile;
