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
  const [progress, setProgress] = useState(0);
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
      enddate,
      institution,
      degree,
      institutioncity,
      label,
      linkurl,
    } = formData.current;

    const personalDetails = {
      FirstName: firstname.value,
      LastName: lastname.value,
      Email: email.value,
      Phone: phone.value,
      Country: country.value,
      City: city.value,
      Address: address.value,
      PostalCode: postalcode.value,
      Nationality: nationality.value,
      PlaceOfBirth: placeofbirth.value,
      DateOfBirth: dateofbirth.value,
      
    };

     console.log(personalDetails);
    console.log(JSON.stringify(personalDetails));
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
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{
              marginTop: "10px",
              width: "93%",
            }}
          />
          <Box sx={{ marginTop: "4rem", width: "100%", height: "100vh" }}>
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  width: "90%",
                  marginTop: "50px",
                }}
              >
                <Button type="submit" variant="contained">
                  Submit
                </Button>
              </Box>
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
