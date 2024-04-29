import React from "react";
import {
  Page,
  Document,
  PDFViewer,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import { Text, View, Image } from "@react-pdf/renderer";
import { useContext } from "react";
import styles from "./StyleComponents/styles";
import { DataContext } from "../pages/CVBuilder";
import Box from "@mui/material/Box";
import Template from "../pages/Template";

const PDFView = () => {
  const { image, imageUrls, personalInformation, summary, employment, education, socials, skills, course, extraCurricular, languages, hobbies } = useContext(DataContext);
  const [personalInfo] = personalInformation[0]
  // const [{ address, city, country, dateofbirth, email, firstname, lastname, nationality, occupation, phone, placeofbirth, postalcode }] = getData.value1;
  // const [stateValue2, setStateValue2] = getData.value2;
  // const [stateValue3, setStateValue3] = getData.value3;
  // const [stateValue4, setStateValue4] = getData.value4;
  // const [stateValue5, setStateValue5] = getData.value5;
  // const [stateValue6, setStateValue6] = getData.value6;
  // const [stateValue7, setStateValue7] = getData.value7;
  // const [stateValue8, setStateValue8] = getData.value8;
  // const [stateValue9, setStateValue9] = getData.value9;
  // const [stateValue10, setStateValue10] = getData.value10;
  // const [imageUrlData, setImageUrlData] = getData.imageUrls;
  // const newArr = stateValue10.hobbies.split(",");


  var months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handlePageChange = () => {
    alert()
  }

  return (
    <div className="border p-10 mt-10 ">
      <Template />
    </div>
  );
};

export default PDFView;
