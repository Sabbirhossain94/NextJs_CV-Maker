import Box from "@mui/material/Box";
import List from "@mui/material/List";
import LinearProgress from "@mui/material/LinearProgress";
import { useState, useRef } from "react";
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

export default function CVBuilder() {
  const formData = useRef();
  const [progress, setProgress] = useState(20);
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
      if (item.id !== id) {
        return item.id;
      }
    });
    setAllSections(result);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      firstname,
      lastname,
      email,
      phone,
      country,
      city,
      address,
      postalcode,
      nationality,
      placeofbirth,
      dateofbirth,
      jobtitle,
      employer,
      employmentcity,
      startdate,
      enddate
    } = formData.current;
    console.log(
      `Job Title:${jobtitle.value} Employer:${employer.value} City:${employmentcity.value} Start Date:${startdate.value} End Date:${enddate.value} `
    );
    console.log(formData.current.value)
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
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
          <LinearProgress variant="determinate" value={progress} />
          <Box sx={{ marginTop: "4rem", width: "100%" }}>
            <form ref={formData} onSubmit={handleSubmit}>
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
              <Button type="submit" variant="contained">
                Submit
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "50vw",
          height: "100vh",
          backgroundColor: "#e0e0e0",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      ></Box>
    </Box>
  );
}
