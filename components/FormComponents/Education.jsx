import * as React from "react";
import { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { DataContext } from "../../pages/CVBuilder";

export default function Education() {
  const getData = useContext(DataContext);

  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [educationDetails, setEducationDetails] = getData.education;
  const [completedSections, setCompletedSections] = getData.completed

  const deleteAccordionSection = (id) => {
    const result = educationDetails.filter((item, key) => {
      if (key !== id) {
        return item;
      }
    });
    setEducationDetails(result);
  };

  const addAccordionSection = () => {
    setEducationDetails([
      ...educationDetails,
      {
        institution: "",
        degree: "",
        startdate: "",
        enddate: "",
        institutioncity: "",
      },
    ]);
  };
  const handleInputChange = (e, inputKey) => {
    const { name, value } = e.target;
    let clone = [...educationDetails];
    let obj = clone[inputKey];
    obj[name] = value;
    clone[inputKey] = obj;
    setEducationDetails([...clone]);
    calculateProfileCompleteness();

  };

  const calculateProfileCompleteness = () => {
    const firstEntry = educationDetails[0];

    if (firstEntry) {
      const allfieldsCompleted = Object.values(firstEntry).every(field => field !== "")
      if (allfieldsCompleted) {
        if (!completedSections.sections.includes("Education")) {
          setCompletedSections(prevState => ({
            ...prevState,
            sections: [...prevState.sections, "Education"]
          }));
        }
      } else {
        if (completedSections.sections.includes("Education")) {
          setCompletedSections(prevState => ({
            ...prevState,
            sections: prevState.sections.filter(section => section !== "Education")
          }));
        }
      }
    }

  }

  return (
    <Box >
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

      <Box sx={{ display: 'flex', flexDirection: "column", gap: '10px', flexGrow: 1 }}>
        {educationDetails.map((education, key) => (
          <Grid key={key} container columns={16} sx={{ display: 'flex', alignItems: 'center' }}>
            <Grid item xs={14} sm={15} md={15}>
              <Accordion
                expanded={expanded === key}
                onChange={handleChange(key)}
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
                  <Typography sx={{ width: "90%", flexShrink: 0 }}>
                    {education.institution ? education.institution : "(Not Specified)"}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={16} md={6}>
                      <TextField
                        id="educationinstitution"
                        label="Institution"
                        name="institution"
                        value={education.institution}
                        type="text"
                        sx={{
                          width: "100%",
                          borderRadius: "5px",
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </Grid>
                    <Grid item xs={16} md={6}>
                      <TextField
                        id="educationdegree"
                        label="Degree"
                        name="degree"
                        value={education.degree}
                        type="text"
                        sx={{
                          width: "100%",
                          borderRadius: "5px",
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex", gap: '20px' }}>
                      <TextField
                        id="educationstartyear"
                        label="Start Year"
                        name="startdate"
                        value={education.startdate}
                        type="year"
                        sx={{
                          borderRadius: "5px",
                          width: '50%'
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        onChange={(e) => handleInputChange(e, key)}
                      />

                      <TextField
                        id="educationendyear"
                        label="End Year"
                        name="enddate"
                        value={education.enddate}
                        type="year"
                        sx={{
                          width: '50%',
                          borderRadius: "5px",
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </Grid>
                    <Grid item xs={16} md={6}>
                      <TextField
                        id="educationcity"
                        label="City"
                        name="institutioncity"
                        type="text"
                        value={education.institutioncity}
                        sx={{
                          width: "100%",
                          borderRadius: "5px",
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </Grid>

                  </Grid>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item md="auto">
              {key > 0 && <DeleteOutlineOutlinedIcon
                sx={{
                  marginLeft: "5px",
                  fontSize: {
                    xs: '20px',
                    md: '25px'
                  },
                  color: "red",
                  cursor: "pointer"
                }}
                onClick={() => deleteAccordionSection(key)}
              />}
            </Grid>
          </Grid>
        ))}
      </Box>
      <Grid container columns={16} sx={{ display: 'flex', alignItems: 'center' }}>
        <Grid item xs={14} sm={15} md={15}>
          <Typography
            sx={{
              width: "100%",
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
        </Grid>
      </Grid>
    </Box>
  );
}
