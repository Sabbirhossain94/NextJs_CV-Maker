import React, {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import NordicWalkingOutlinedIcon from "@mui/icons-material/NordicWalkingOutlined";
import Courses from "../components/Courses"
import ExtraCurricular from "../components/ExtraCurricular"
import Hobbies from "./Hobbies";
import Language from "./Language"

export default function AddSection({allSections,setAllSections}) {
  const [sectionIsActive, setSectionIsActive]= useState(false)

  const addSectionElements = [
    {
      id: 5,
      icon: <SchoolOutlinedIcon color="primary" sx={{ fontSize: "35px" }} />,
      name: "Courses",
      component: <Courses />
    },
    {
      id: 6,
      icon: (
        <NordicWalkingOutlinedIcon color="primary" sx={{ fontSize: "35px" }} />
      ),
      name: "Extra-curricular Activities",
      component: <ExtraCurricular/>
    },
    {
      id: 7,
      icon: (
        <SportsEsportsOutlinedIcon color="primary" sx={{ fontSize: "35px" }} />
      ),
      name: "Hobbies",
      component: <Hobbies/>
    },
    {
      id: 8,
      icon: (
        <GTranslateOutlinedIcon color="primary" sx={{ fontSize: "35px" }} />
      ),
      name: "Languages",
      component: <Language/>
    },
    
  ];

  const addToDraggableSections = (newSectionId, newSectionName) => {
    setAllSections([
      ...allSections,
      { id: newSectionId, name: newSectionName },
    ]);
    setSectionIsActive(true)
  };

  return (
    <Box>
      <Typography
        sx={{
          width: "33%",
          marginTop: "50px",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        Add Section
      </Typography>
      <Grid
        container
        rowSpacing={1}
        columns={16}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        sx={{ marginLeft: "5px", padding: "-7px" }}
      >
        {addSectionElements.map((item) => (
          <Grid
            key={item.id}
            container
            item
            lg={5}
            md={10}
            sm={3}
            sx={{ width: "30%", padding: "10px" }}
          >
            <Grid>{item.icon}</Grid>
            <Grid
              item
              md="auto"
              sx={{
                marginLeft: "10px",
                marginTop: "6px",
                fontSize: "18px",
                fontWeight: "400",
                "&:hover": {
                  color: "#2196f3",
                  cursor: "pointer",
                },
              }}
              onClick={() => addToDraggableSections(item.id, item.component)}
              
            >
              {item.name}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
