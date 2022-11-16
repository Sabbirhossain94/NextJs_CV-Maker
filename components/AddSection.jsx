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
    const Item = styled(Paper)(({ theme }) => ({
      backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      ...theme.typography.body2,
      fontWeight: "400",
      padding: theme.spacing(1),
      textAlign: "start",
      padding: "10px",
      color: "black",
      fontSize: "17px",
      boxShadow: "none",
      marginLeft: "-10px"
    }));
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
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={6}>
          <Item>
            <SchoolOutlinedIcon color="primary" sx={{marginTop: "2px"}} />
            Courses
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <NordicWalkingOutlinedIcon color="primary" /> Extra-curricular
            Activities
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <SportsEsportsOutlinedIcon color="primary" />
            Hobbies
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <GTranslateOutlinedIcon color="primary" />
            Languages
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <WorkOutlineOutlinedIcon color="primary" />
            Internships
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
