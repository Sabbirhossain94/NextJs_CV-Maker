import React from "react";
import Head from "next/head";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useState } from "react";
import PersonalDetails from "../components/FormComponents/PersonalDetails";
import Education from "../components/FormComponents/Education";
import SocialLinks from "../components/FormComponents/SocialLinks";
import Employment from "../components/FormComponents/Employment";
import ProfessionalSummary from "../components/FormComponents/ProfessionalSummary";
import Skills from "../components/FormComponents/Skills";
import AddSection from "../components/FormComponents/AddSection";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import PDFView from "../components/PDFSection";
import ImageUpload from "../components/FormComponents/ImageUpload";
import LoadingAnimation from "../components/StyleComponents/LoadingAnimation";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";

export const DataContext = React.createContext();

export default function CVBuilder() {
  const [delay, setDelay] = useState(0);
  setTimeout(() => setDelay(1), 1000);
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);
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
    },
  ]);
  const [socialLinksDetails, setSocialLinksDetails] = useState([
    {
      icon: "",
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

  const [projectDetails, setProjectDetails] = useState([
    {
      projecttitle: "",
      startdate: "",
      enddate: "",
      description: "",
    },
  ]);

  const [extraCurricularDetails, setExtraCurricularDetails] = useState([
    {
      activity: "",
      institution: "",
      startdate: "",
      enddate: "",
      role: "",
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
  const [referenceDetails, setReferenceDetails] = useState([{
    referrername: "",
    position: "",
    organization: "",
    address: "",
    phone: "",
    email: ""
  }])

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

  const [customSection, setCustomSection] = useState([])
  const [showExpLevel, setShowExpLevel] = useState(false)

  const deleteCustomSection = (sectionId) => {
    setCustomSection(prevSections => prevSections.filter(section => section.id !== sectionId))
  };

  return delay === 0 ? (
    <LoadingAnimation />
  ) : (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "column",
            md: "column",
            lg: "row",
            xl: "row",
          },
          height: "100%",
        }}

      >
        <Head>
          <title>CV Builder</title>
        </Head>
        <DataContext.Provider
          value={{
            image: [images, setImages],
            imageUrls: [imageURLs, setImageURLs],
            personalInformation: [personalDetails, setPersonalDetails],
            summary: [professionalSummary, setProfessionalSummary],
            employment: [employmentDetails, setEmploymentDetails],
            education: [educationDetails, setEducationDetails],
            socials: [socialLinksDetails, setSocialLinksDetails],
            skills: [skillDetails, setSkillDetails],
            project: [projectDetails, setProjectDetails],
            extraCurricular: [extraCurricularDetails, setExtraCurricularDetails],
            languages: [languageDetails, setLanguageDetails],
            hobbies: [hobbiesDetails, setHobbiesDetails],
            reference: [referenceDetails, setReferenceDetails],
            skillExpLevel: [showExpLevel, setShowExpLevel]
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "50%",
                xl: "50%",
              },
              height: {
                lg: "100%",
                xl: "100%",
              },
              padding: {
                xs: '5%',
                lg: '2%',
                xl: '2%'
              },
              position: {
                lg: 'fixed',
                xl: 'fixed'
              },
              overflowY: "scroll",
              backgroundColor: "white",
            }}
          >
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              paddingTop: {
                xs: '50px',
                sm: '0px'
              },
              margin: "auto"
            }}>
              <ImageUpload />
              <PersonalDetails />
              <ProfessionalSummary />
              {allSections.map((item) => (
                <List key={item.id}> {item.name}</List>
              ))}
              {customSection.map((item, index) => (
                <List key={index}> {item.name}</List>
              ))}
              <AddSection
                allSections={allSections}
                setAllSections={setAllSections}
                customSection={customSection}
                setCustomSection={setCustomSection}
                deleteCustomSection={deleteCustomSection}
              />
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "100%",
                lg: "50%",
                xl: "50%",
              },
              position: {
                lg: "fixed",
                xl: "fixed",
              },
              top: {
                lg: "0%",
                xl: 0,
              },
              right: 0,
              height: "100%",

            }}
          >
            <PDFView />
          </Box>
        </DataContext.Provider>
      </Box>
    </>
  );
}
