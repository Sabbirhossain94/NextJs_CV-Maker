import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import LinearProgress from "@mui/material/LinearProgress";
import { useState, useContext } from "react";
import PersonalDetails from "../components/PersonalDetails";
import Education from "../components/Education";
import SocialLinks from "../components/SocialLinks";
import Employment from "../components/Employment";
import ProfessionalSummary from "../components/ProfessionalSummary";
import Skills from "../components/Skills";
import AddSection from "../components/AddSection";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PDFFile from "../components/PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import DataContext from "../components/Context";
// import Viewer from "../components/Viewer";

export default function CVBuilder() {
  const [progress, setProgress] = useState(0);
  const data = useContext(DataContext);
  const [formDetails, setFormDetails] = useState(data);
  console.log(formDetails);
  const [allSections, setAllSections] = useState([
    {
      id: 1,
      name: <Employment />,
    },
    {
      id: 2,
      name: <Education />,
    },
    {
      id: 3,
      name: <SocialLinks />,
    },
    {
      id: 4,
      name: <Skills />,
    },
  ]);

  const deleteCustomSection = (id) => {
    const result = allSections.filter((item) => {
      if (item.id != id) {
        return item.id;
      }
    });
    setAllSections(result);
  };

  return (
    <DataContext.Provider value={[formDetails, setFormDetails]}>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            padding: "5%",
            backgroundColor: "white",
          }}
        >
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              marginTop: "10px",
              width: "93%",
            }}
          />
          <Box sx={{ marginTop: "4rem", width: "100%", height: "100vh" }}>
            <PersonalDetails />
            <ProfessionalSummary />
            {allSections.map((item) => (
              <List key={item.id}> {item.name}</List>
            ))}
            <AddSection
              allSections={allSections}
              setAllSections={setAllSections}
              deleteCustomSection={deleteCustomSection}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                width: "90%",
                marginTop: "50px",
              }}
            ></Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            backgroundColor: "#656e83",
          }}
        >
          {/* <Viewer /> */}
          <PDFDownloadLink document={<PDFFile />} fileName="CV">
            Download
          </PDFDownloadLink>
          <PDFFile />
        </Box>
      </Box>
    </DataContext.Provider>
  );
}
