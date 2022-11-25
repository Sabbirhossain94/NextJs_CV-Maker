import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Education({ getEducationDetails }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [accordionId, setAccordionId] = useState(1);
  const [accordionValues, setAccordionValues] = useState({
    institution: "",
    degree: "",
    startdate: "",
    enddate: "",
    institutioncity: "",
    description: "",
  });

  const deleteAccordionSection = (id) => {
    setAccordionId(accordionId - 1);
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
      
    },
  ]);

  const addAccordionSection = () => {
    setAccordionId(accordionId + 1);
    setAccordionField([
      ...accordionField,
      {
        id: accordionId + 1,
        
      },
    ]);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccordionValues({
      ...accordionValues,
      [name]: value,
    });
  };

  getEducationDetails(accordionValues);
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
        {accordionField.map((item) => (
          <Grid key={item.id} container columns={16}>
            <Grid item md={15}>
              <Accordion
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
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
                    {accordionValues.institution
                      ? accordionValues.institution
                      : "(Not Specified)"}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6} md={6}>
                      <TextField
                        label="Institution"
                        name="institution"
                        value={accordionValues.institution}
                        type="text"
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
                    <Grid item xs={6} md={6}>
                      <TextField
                        label="Degree"
                        name="degree"
                        value={accordionValues.degree}
                        type="text"
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
                    <Grid item xs={6} md={6} sx={{ display: "flex" }}>
                      <TextField
                        variant="filled"
                        label="Start Date"
                        name="startdate"
                        value={accordionValues.startdate}
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
                        value={accordionValues.enddate}
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
                        label="City"
                        name="institutioncity"
                        type="text"
                        value={accordionValues.city}
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
                        value={accordionValues.description}
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
