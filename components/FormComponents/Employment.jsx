
import * as React from "react";
import { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import { DataContext } from "../../pages/CVBuilder";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Employment() {

  const getData = useContext(DataContext);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [employmentDetails, setEmploymentDetails] = getData.employment;
  const [completedSections, setCompletedSections] = getData.completed

  const deleteAccordionSection = (id) => {
    const result = employmentDetails.filter((item, key) => {
      if (key !== id) {
        return item;
      }
    });
    setEmploymentDetails(result);
  };

  const modules = {
    toolbar: [
      [{ 'list': 'bullet' }],
      ['clean']
    ],
  };

  const addAccordionSection = () => {
    setEmploymentDetails([
      ...employmentDetails,
      {
        jobtitle: "",
        employer: "",
        startdate: "",
        enddate: "",
        city: "",
        description: "",
      },
    ]);
  };

  const handleInputChange = (e, inputKey) => {
    const { name, value } = e.target;
    let clone = [...employmentDetails];
    let obj = clone[inputKey];
    obj[name] = value;
    clone[inputKey] = obj;
    setEmploymentDetails([...clone]);
    calculateProfileCompleteness();
  };

  const handleDescriptionChange = (index, value) => {
    const updatedEmploymentDetails = [...employmentDetails];
    updatedEmploymentDetails[index].description = value;
    setEmploymentDetails(updatedEmploymentDetails);
    calculateProfileCompleteness();

  };

  const calculateProfileCompleteness = () => {
    const firstEntry = employmentDetails[0];
    if (firstEntry) {

      const allfieldsCompleted = Object.values(firstEntry).every(field => field !== "")

      if (allfieldsCompleted) {
        if (!completedSections.sections.includes("Experience")) {
          setCompletedSections(prevState => ({
            ...prevState,
            sections: [...prevState.sections, "Experience"]
          }));
        }
      } else {
        if (completedSections.sections.includes("Experience")) {
          setCompletedSections(prevState => ({
            ...prevState,
            sections: prevState.sections.filter(section => section !== "Experience")
          }));
        }
      }
    }

  }


  return (
    <Box >
      <Typography
        sx={{
          width: "100%",
          marginTop: "50px",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",

        }}
      >
        Experience
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: "column", gap: '10px', flexGrow: 1 }}>
        {employmentDetails.map((employment, key) => (
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
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                    {employment.jobtitle ? employment.jobtitle : "(Not Specified)"}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={16} sm={16} md={6}>
                      <TextField
                        id="jobtitle"
                        label="Job title"
                        type="text"
                        value={employment.jobtitle}
                        name="jobtitle"
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
                    <Grid item xs={16} sm={16} md={6}>
                      <TextField
                        id="employer"
                        label="Employer"
                        type="text"
                        value={employment.employer}
                        name="employer"
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
                        id="jobstartdate"
                        label="Start Date"
                        name="startdate"
                        value={employment.startdate}
                        type="month"
                        sx={{
                          borderRadius: "5px",
                          width: '50%'
                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => handleInputChange(e, key)}
                      />

                      <TextField
                        id="jobenddate"
                        label="End Date"
                        name="enddate"
                        value={employment.enddate}
                        type="month"
                        sx={{
                          borderRadius: "5px",
                          width: '50%'

                        }}
                        InputProps={{
                          disableUnderline: true,
                        }}
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </Grid>
                    <Grid item xs={16} md={6}>
                      <TextField
                        id="jobcity"
                        label="City"
                        type="text"
                        value={employment.city}
                        name="city"
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
                    <Grid item xs={16} md={12}>
                      <Typography>Description</Typography>
                      <ReactQuill
                        style={{ marginTop: '10px', background: "#fff" }}
                        value={employment.description}
                        modules={modules}
                        formats={['list']}
                        onChange={(value) => handleDescriptionChange(key, value)}
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
            <AddIcon sx={{ fontSize: "20px" }} /> Add one more employment
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
