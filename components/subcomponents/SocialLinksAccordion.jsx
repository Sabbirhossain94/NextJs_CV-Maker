import React from 'react'
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";

export default function SocialLinksAccordion() {

     const [expanded, setExpanded] = React.useState(false);
     const [websites, setWebsites]= useState("")
     const handleChange = (panel) => (event, isExpanded) => {
       setExpanded(isExpanded ? panel : false);
     };
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{
        backgroundColor: "white",
        boxShadow: "none",
        border: "1px solid",
        borderColor: "#e7eaf4",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="#e7eaf4" />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          {websites ? websites : "(Not Specified)"}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item sm={6} md={6}>
            <TextField
              id="outlined-basic"
              label="Label"
              type="text"
              name="label"
              variant="filled"
              sx={{ width: "100%", background: "#e7eaf4", borderRadius: "5px" }}
              InputLabelProps={{
                sx: {
                  color: "#828ba2",
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
              onChange={(e) => setWebsites(e.target.value)}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              id="outlined-basic"
              label="Link"
              type="url"
              name="linkurl"
              variant="filled"
              sx={{ width: "100%", background: "#e7eaf4", borderRadius: "5px" }}
              InputLabelProps={{
                sx: {
                  color: "#828ba2",
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
