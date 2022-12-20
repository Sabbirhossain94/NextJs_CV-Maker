import React from "react";
import { useContext, useState } from "react";
import { DataContext } from "./CVBuilder";
import PDF from "./Practice";
import { PDFDownloadLink } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
export default function Test() {
  return (
    <div>
      <PDF />
      <PDFDownloadLink document={<PDF />} filename="sample.pdf">
        <button>Download</button>
      </PDFDownloadLink>
    </div>
  );
}
