import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import LanguageAccordion from "../components/subcomponents/LanguageAccordion"

export default function Language({ deleteCustomSection, sectionId, setActiveSectionId }) {
  const [accordionId, setAccordionId] = useState(0);
  const deleteAccordionSection = (id) => {
    const result = accordionField.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setAccordionField(result);
  };
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [accordionField, setAccordionField] = useState([
    {
      id: accordionId,
      name: <LanguageAccordion toggleSwitch={toggleSwitch} />,
    },
  ]);

  const addAccordionSection = () => {
    setAccordionId(accordionId + 1);
    setAccordionField([
      ...accordionField,
      {
        id: accordionId,
        name: <LanguageAccordion toggleSwitch={toggleSwitch} />,
      },
    ]);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          width: "33%",
          marginTop: "20px",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        Languages{" "}
        <DeleteIcon
          sx={{
            marginTop: "-20px",
            fontSize: "17px",
            color: "white",
            "&:hover": {
              color: "#2196f3",
              cursor: "pointer",
            },
          }}
          onClick={() => {deleteCustomSection(sectionId);setActiveSectionId(null)}}
        />
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
        {accordionField.map((item) => (
          <Grid key={item.id} container columns={16}>
            <Grid item md={15}>
              {item.name}
            </Grid>
            <Grid item md="auto">
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
          </Grid>
        ))}
      </Box>
      <Typography
        sx={{
          width: "94%",
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
        <AddIcon sx={{ fontSize: "20px" }} /> Add one more language
      </Typography>
    </Box>
  );
}
