import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import EducationAccordion from "./subcomponents/EducationAccordion";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Education() {
 const [accordionId, setAccordionId] = useState(0);

  const deleteAccordionSection = (id) => {
    const result = accordionField.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setAccordionField(result);
  };
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
          marginTop: "50px",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        Education
      </Typography>
      <Box sx={{ flexGrow: 1 }}>
        <Grid>
          {accordionField.map((item, key) => (
            <Grid key={key} item md={16} sx={{ display: "flex" }}>
              {item.name}
              <DeleteIcon
                sx={{
                  marginTop: "25px",
                  marginLeft: "5px",
                  fontSize: "20px",
                  color: "white",
                  "&:hover": {
                    color: "#2196f3",
                    cursor: "pointer",
                  },
                }}
                onClick={() => deleteAccordionSection(item.id)}
              />
            </Grid>
          ))}
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
