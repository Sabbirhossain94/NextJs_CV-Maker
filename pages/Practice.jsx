import React from "react";
import { useState,useEffect } from "react";
import {
  Page,
  Document,
  PDFViewer,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import { Text, View, Image } from "@react-pdf/renderer";
import { useViewport } from "@react-pdf/renderer";

export default function Practice() {
    // const viewport= useViewport()
    const [renderedContentSize, setRenderedContentSize] = useState({
      width: 0,
      height: 0,
    });
     const handleContentRendered = (content) => {
       setRenderedContentSize({
         width: content.width,
         height: content.height,
       });
     };
      useEffect(() => {
        if (
          renderedContentSize.width > viewport.width ||
          renderedContentSize.height > viewport.height
        ) {
          console.log("Rendered content exceeds the viewport size");
        }
      }, [renderedContentSize]);
  return (
    <div>
      <PDFViewer style={{ width: "100%", height: "100vh" }}>
        <Document>
          <Page size="A4" onRenderSuccess={handleContentRendered}>
            <View></View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}
