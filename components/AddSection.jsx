import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import GTranslateOutlinedIcon from "@mui/icons-material/GTranslateOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import NordicWalkingOutlinedIcon from "@mui/icons-material/NordicWalkingOutlined";

export default function AddSection() {

  const addSectionElements = [
    {
      id: 1,
      icon: <SchoolOutlinedIcon color="primary" sx={{ fontSize: "35px" }} />,
      name: "Courses",
    },
    {
      id: 2,
      icon: (
        <NordicWalkingOutlinedIcon color="primary" sx={{ fontSize: "35px" }} />
      ),
      name: "Extra-curricular Activities",
    },
    {
      id: 3,
      icon: (
        <SportsEsportsOutlinedIcon color="primary" sx={{ fontSize: "35px" }} />
      ),
      name: "Hobbies",
    },
    {
      id: 4,
      icon: (
        <GTranslateOutlinedIcon color="primary" sx={{ fontSize: "35px" }} />
      ),
      name: "Languages",
    },
    {
      id: 5,
      icon: (
        <WorkOutlineOutlinedIcon color="primary" sx={{ fontSize: "35px" }} />
      ),
      name: "Internships",
    },
  ];
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
        rowSpacing={2}
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
                marginTop: "5px",
                fontSize: "18px",
                fontWeight: "400",
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
