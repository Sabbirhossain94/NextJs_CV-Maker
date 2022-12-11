import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";
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
import CodeForPDF from "../components/CodeForPDF";
import { PDFDownloadLink } from "@react-pdf/renderer";

export const DataContext = React.createContext();

export default function CVBuilder() {
  const [progress, setProgress] = useState(0);
  const [personalDetails, setPersonalDetails] = useState([
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
  ]);
  const [professionalSummary, setProfessionalSummary] = useState([
    {
      summary: "",
    },
  ]);
  const [employmentDetails, setEmploymentDetails] = useState([
    {
      jobtitle: "",
      employer: "",
      startdate: "",
      enddate: "",
      city: "",
      description: "",
    },
  ]);
  const [educationDetails, setEducationDetails] = useState([
    {
      institution: "",
      degree: "",
      startdate: "",
      enddate: "",
      institutioncity: "",
      description: "",
    },
  ]);
  const [socialLinksDetails, setSocialLinksDetails] = useState([
    {
      label: "",
      linkurl: "",
    },
  ]);
  const [skillDetails, setSkillDetails] = useState([
    {
      skill: "",
      level: "",
    },
  ]);
  const [courseDetails, setCourseDetails] = useState([
    {
      course: "",
      institution: "",
      startdate: "",
      enddate: "",
    },
  ]);
  const [extraCurricularDetails, setExtraCurricularDetails] = useState([
    {
      activity: "",
      employer: "",
      startdate: "",
      enddate: "",
      city: "",
      description: "",
    },
  ]);
  const [languageDetails, setLanguageDetails] = useState([
    {
      language: "",
      level: "",
    },
  ]);
  const [hobbiesDetails, setHobbiesDetails] = useState({ hobbies: "" });

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
    <Box
      sx={{
        display: "flex",
      }}
    >
      <DataContext.Provider
        value={{
          value1: [personalDetails, setPersonalDetails],
          value2: [professionalSummary, setProfessionalSummary],
          value3: [employmentDetails, setEmploymentDetails],
          value4: [educationDetails, setEducationDetails],
          value5: [socialLinksDetails, setSocialLinksDetails],
          value6: [skillDetails, setSkillDetails],
          value7: [courseDetails, setCourseDetails],
          value8: [extraCurricularDetails, setExtraCurricularDetails],
          value9: [languageDetails, setLanguageDetails],
          value10: [hobbiesDetails, setHobbiesDetails],
        }}
      >
        <Box
          sx={{
            width: "50%",
            height: "100%",
            padding: "5%",
            backgroundColor: "white",
            overflowY: "scroll",
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
            >
              {/* <PDFDownloadLink document={<CodeForPDF />} fileName="CV">
                  {({ blob, url, loading, error }) =>
                    loading ? (
                      <button>"Loading document..."</button>
                    ) : (
                     <button> "Download now!"</button>
                    )
                  }
                </PDFDownloadLink> */}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50%",
            backgroundColor: "#656e83",
          }}
        >
          {/* <Viewer /> */}
          <CodeForPDF />
        </Box>
      </DataContext.Provider>
    </Box>
  );
}
