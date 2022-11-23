import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";


export default function EmploymentAccordion({ getValuesFromEmployment }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [values, setValues] = useState({
    jobtitle: "",
    employer: "",
    startdate: "",
    enddate: "",
    city: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    
  };
  getValuesFromEmployment(values);
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{
        backgroundColor: "white",
        cursor: "none",
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
        <Typography sx={{ width: "90%", flexShrink: 0 }}>
          {values.jobtitle ? values.jobtitle : "(Not Specified)"}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item sm={6} md={6}>
            <TextField
              id="outlined-basic"
              label="Job title"
              type="text"
              value={values.jobtitle}
              name="jobtitle"
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
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              id="outlined-basic"
              label="Employer"
              type="text"
              value={values.employer}
              name="employer"
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
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6} md={6} sx={{ display: "flex" }}>
            <TextField
              variant="filled"
              label="Start Date"
              name="startdate"
              value={values.startdate}
              type="date"
              sx={{
                background: "#e7eaf4",
                borderRadius: "5px",
              }}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                sx: {
                  fontSize: "12px",
                  color: "#828ba2",
                },
              }}
              onChange={handleInputChange}
            />

            <TextField
              variant="filled"
              label="End Date"
              name="enddate"
              value={values.enddate}
              type="date"
              sx={{
                marginLeft: "20px",

                background: "#e7eaf4",
                borderRadius: "5px",
              }}
              InputProps={{
                disableUnderline: true,
              }}
              InputLabelProps={{
                sx: {
                  fontSize: "12px",
                  color: "#828ba2",
                },
              }}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              id="outlined-basic"
              label="City"
              type="text"
              value={values.city}
              name="city"
              variant="filled"
              sx={{
                width: "100%",
                background: "#e7eaf4",
                borderRadius: "5px",
              }}
              InputLabelProps={{
                sx: {
                  color: "#828ba2",
                },
              }}
              InputProps={{
                disableUnderline: true,
              }}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={6} md={12}>
            <TextField
              label="Description"
              type="text"
              value={values.description}
              name="description"
              InputLabelProps={{
                sx: {
                  color: "#828ba2",
                },
              }}
              multiline
              rows={8}
              sx={{ width: "100%", background: "#e7eaf4" }}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
