import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import NordicWalkingOutlinedIcon from "@mui/icons-material/NordicWalkingOutlined";
import Courses from "../components/Courses";
import ExtraCurricular from "../components/ExtraCurricular";
import Hobbies from "./Hobbies";
import Language from "./Language";

export default function AddSection({ allSections, setAllSections }) {
  const [activeSectionId, setActiveSectionId] = useState(null);

  const addSectionElements = [
    {
      id: 5,
      icon: (
        <SchoolOutlinedIcon
          sx={{
            fontSize: "35px",
            ...{ color: activeSectionId == 5 ? "#bdbdbd" : "#1565c0" },
          }}
        />
      ),
      name: "Courses",
      component: <Courses />,
    },
    {
      id: 6,
      icon: (
        <NordicWalkingOutlinedIcon
          color="primary"
          sx={{
            fontSize: "35px",
            ...{ color: activeSectionId == 6 ? "#bdbdbd" : "#1565c0" },
          }}
        />
      ),
      name: "Extra-curricular Activities",
      component: <ExtraCurricular />,
    },
    {
      id: 7,
      icon: (
        <SportsEsportsOutlinedIcon
          color="primary"
          sx={{
            fontSize: "35px",
            ...{ color: activeSectionId == 7 ? "#bdbdbd" : "#1565c0" },
          }}
        />
      ),
      name: "Hobbies",
      component: <Hobbies />,
    },
    {
      id: 8,
      icon: (
        <GTranslateOutlinedIcon
          color="primary"
          sx={{
            fontSize: "35px",
            ...{ color: activeSectionId == 8 ? "#bdbdbd" : "#1565c0" },
          }}
        />
      ),
      name: "Languages",
      component: <Language />,
    },
  ];

  const addToDraggableSections = (newSectionId, newSectionName) => {
    setAllSections([
      ...allSections,
      { id: newSectionId, name: newSectionName },
    ]);
  };

  

  const triggerActiveSection = (id) => {
    const activeId = addSectionElements.filter((item) => {
      if (item.id === id) {
        return item.id;
      }
    });
    setActiveSectionId(activeId[0].id);
    console.log(activeSectionId);
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
                ...{
                  pointerEvents: item.id === activeSectionId ? "none" : "auto",
                },
                ...{
                  color: item.id === activeSectionId ? "#bdbdbd" : "primary",
                },
              }}
              onClick={() => {
                addToDraggableSections(item.id, item.component);
                triggerActiveSection(item.id);
              }}
            >
              {item.name}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
