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
import Button from "@mui/material/Button";
import Viewer from "../components/Viewer";
// import CodeForPDF from "../components/CodeForPDF"

export const DataContext = React.createContext();

export default function CVBuilder() {
  
  const [progress, setProgress] = useState(0);
  const [personalDetails, setPersonalDetails] = useState([]);
  const [professionalSummary, setProfessionalSummary] = useState([]);
  const [employmentDetails, setEmploymentDetails] = useState([]);
  const [educationDetails, setEducationDetails] = useState([]);
  const [socialLinksDetails, setSocialLinksDetails] = useState([]);
  const [skillDetails, setSkillDetails] = useState([]);
  const [courseDetails, setCourseDetails] = useState([]);
  const [extraCurricularDetails, setExtraCurricularDetails] = useState([]);
  const [languageDetails, setLanguageDetails] = useState([]);
  const [hobbiesDetails, setHobbiesDetails] = useState([]);
  const [finalDetails, setFinalDetails] = useState([]);

  const getPersonalDetails = (values) => {
    setPersonalDetails(values);
  };
  const getProfessionalSummary = (values) => {
    setProfessionalSummary(values);
  };
  const getEmploymentDetails = (values) => {
    setEmploymentDetails(values);
  };
  const getEducationDetails = (values) => {
    setEducationDetails(values);
  };
  const getSocialLinksDetails = (values) => {
    setSocialLinksDetails(values);
  };
  const getSkillDetails = (values) => {
    setSkillDetails(values);
  };
  const getCourseDetails = (values) => {
    setCourseDetails(values);
  };
  const getExtraCurriculatDetails = (values) => {
    setExtraCurricularDetails(values);
  };
  const getLanguageDetails = (values) => {
    setLanguageDetails(values);
  };
  const getHobbiesDetails = (values) => {
    setHobbiesDetails(values);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFinalDetails([
      {
        personaldetails: personalDetails,
        professionalhistory: professionalSummary,
        employmenthistory: employmentDetails,
        education: educationDetails,
        sociallinks: socialLinksDetails,
        skills: skillDetails,
        courses: courseDetails,
        extracurricularactivities: extraCurricularDetails,
        languages: languageDetails,
        hobbies: hobbiesDetails,
      },
    ]);
    console.log(JSON.stringify(finalDetails, null, " "));
  };
  const [allSections, setAllSections] = useState([
    {
      id: 1,
      name: <Employment getEmploymentDetails={getEmploymentDetails} />,
    },
    {
      id: 2,
      name: <Education getEducationDetails={getEducationDetails} />,
    },
    {
      id: 3,
      name: <SocialLinks getSocialLinksDetails={getSocialLinksDetails} />,
    },
    {
      id: 4,
      name: <Skills getSkillDetails={getSkillDetails} />,
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
        flexDirection: "row",
      }}
    >
      <DataContext.Provider value={finalDetails}>
        <Box
          sx={{
            width: "50vw",
            height: "100%",
            padding: "5%",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              marginTop: "10px",
              width: "100%",
              height: "100vh",
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
              <PersonalDetails getPersonalDetails={getPersonalDetails} />
              <ProfessionalSummary
                getProfessionalSummary={getProfessionalSummary}
              />
              {allSections.map((item) => (
                <List key={item.id}> {item.name}</List>
              ))}
              <AddSection
                allSections={allSections}
                setAllSections={setAllSections}
                deleteCustomSection={deleteCustomSection}
                getCourseDetails={getCourseDetails}
                getExtraCurriculatDetails={getExtraCurriculatDetails}
                getLanguageDetails={getLanguageDetails}
                getHobbiesDetails={getHobbiesDetails}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  width: "90%",
                  marginTop: "50px",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                  download
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "50vw",

            backgroundColor: "#e0e0e0",
            "&:hover": {
              backgroundColor: "#656e83",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          <Viewer />
          {/* <CodeForPDF/> */}
        </Box>
      </DataContext.Provider>
    </Box>
  );
}
