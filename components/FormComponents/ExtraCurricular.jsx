import * as React from "react";
import { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataContext } from "../../pages/CVBuilder";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function ExtraCurricular({
  deleteCustomSection,
  sectionId,
}) {
  const getData = useContext(DataContext);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [extraCurricularDetails, setExtraCurricularDetails] = getData.extraCurricular;

  const modules = {
    toolbar: [
      [{ 'list': 'bullet' }],
      ['clean']
    ],
  };

  const deleteAccordionSection = (id) => {
    const result = extraCurricularDetails.filter((item, key) => {
      if (key !== id) {
        return item;
      }
    });
    setExtraCurricularDetails(result);
  };

  const addAccordionSection = () => {
    setExtraCurricularDetails([
      ...extraCurricularDetails,
      {
        title: "",
        institution: "",
        startdate: "",
        enddate: "",
        role: "",
        description: "",
      },
    ]);
  };

  const handleInputChange = (e, inputKey) => {
    const { name, value } = e.target;
    let clone = [...extraCurricularDetails];
    let obj = clone[inputKey];
    obj[name] = value;
    clone[inputKey] = obj;
    setExtraCurricularDetails([...clone]);
  };

  const handleDescriptionChange = (index, value) => {
    const updatedActivites = [...extraCurricularDetails];
    updatedActivites[index].description = value;
    setExtraCurricularDetails(updatedActivites);
  };


  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
      <Grid container item md={8} >
        <Grid container item md={8}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "20px",
              paddingBottom: "10px",
            }}
          >
            Extra-curricular Activities
          </Typography>
          <DeleteOutlineOutlinedIcon
            sx={{
              marginTop: "7px",
              marginLeft: "5px",
              fontSize: "18px",
              color: "red",
              cursor: 'pointer'
            }}
            onClick={() => {
              deleteCustomSection(sectionId);
              setExtraCurricularDetails([
                {
                  title: "",
                  institution: "",
                  startdate: "",
                  enddate: "",
                  role: "",
                  description: "",
                },
              ]);
            }}
          />
        </Grid>
      </Grid>

      <Box sx={{ display: 'flex', flexDirection: "column", gap: '10px', flexGrow: 1 }}>
        {extraCurricularDetails.map((activity, key) => (
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
                    {activity.title ? activity.title : "(Not Specified)"}
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
                        id="activitytitle"
                        label="Title"
                        type="text"
                        name="title"
                        value={activity.title}
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
                    <Grid item xs={6} md={6}>
                      <TextField
                        id="activityinstitution"
                        label="Institution or Organization"
                        type="text"
                        name="institution"
                        value={activity.institution}
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
                      {" "}
                      <TextField
                        id="activitystartdate"
                        label="Start Date"
                        name="startdate"
                        value={activity.startdate}
                        type="month"
                        sx={{
                          borderRadius: "5px",
                          width: '50%'
                        }}
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => handleInputChange(e, key)}
                      />
                      <TextField
                        id="activityenddate"
                        label="End Date"
                        name="enddate"
                        value={activity.enddate}
                        type="month"
                        sx={{
                          width: '50%',
                          borderRadius: "5px",
                        }}
                        InputLabelProps={{ shrink: true }}
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </Grid>
                    <Grid item xs={16} md={6}>
                      <TextField
                        id="activityrole"
                        label="Role or Position"
                        type="text"
                        name="role"
                        value={activity.role}
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
                      <Typography>Responsibilities or Achivements</Typography>
                      <ReactQuill
                        style={{ marginTop: '10px', background: "#fff", borderRadius: '5px' }}
                        value={activity.description}
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
            <AddIcon sx={{ fontSize: "20px" }} /> Add one more activity
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
