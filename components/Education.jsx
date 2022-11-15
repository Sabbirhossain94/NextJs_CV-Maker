import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import EducationAccordion from "./subcomponents/EducationAccordion";

export default function Education() {
 const [accordionId, setAccordionId] = useState(1);
 const [accordionField, setAccordionField] = useState([
   {
     id: accordionId,
     name: <EducationAccordion />,
   },
 ]);

 const addAccordionSection = () => {
   setAccordionId(accordionId + 1);
   setAccordionField([
     ...accordionField,
     {
       id: accordionId,
       name: <EducationAccordion />,
     },
   ]);
 
 };
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          width: "33%",
          marginTop: "30px",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        Education
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item md={16}>
            {accordionField.map((item, key) => item.name)}
          </Grid>
        </Grid>
      </Box>
      <Typography
        sx={{
          fontWeight: "700",
          marginTop: "20px",
          padding: "5px",
          display: "flex",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#e3f2fd",
            cursor: "pointer",
          },
        }}
        color="primary"
        onClick={addAccordionSection}
      >
        <AddIcon sx={{ fontSize: "20px" }} /> Add one more education
      </Typography>
    </Box>
  );
}
