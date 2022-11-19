import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CourseAccordion from "../components/subcomponents/CourseAccordion"

export default function Courses({ deleteCustomSection, sectionId, setActiveSectionId }) {
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
      name: <CourseAccordion />,
    },
  ]);

  const addAccordionSection = () => {
    setAccordionId(accordionId + 1);
    setAccordionField([
      ...accordionField,
      {
        id: accordionId,
        name: <CourseAccordion />,
      },
    ]);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" ,marginTop: "20px"}}>
      <Grid container item md={6} >
        <Grid container item md={4} >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "20px",
              paddingBottom: "10px"
            }}
          >
            Courses
          </Typography>
          <DeleteIcon
            sx={{
              marginTop: "7px",
              marginLeft: "5px",
              fontSize: "18px",
              color: "white",
              
              "&:hover": {
                color: "#2196f3",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              deleteCustomSection(sectionId);
              setActiveSectionId(null);
            }}
          />
        </Grid>
      </Grid>

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
          marginTop: "10px",
          display: "flex",
          padding: "5px",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#e3f2fd",
            cursor: "pointer",
          },
        }}
        color="primary"
        onClick={addAccordionSection}
      >
        <AddIcon sx={{ fontSize: "20px" }} /> Add one more course
      </Typography>
    </Box>
  );
}
