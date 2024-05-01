
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
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [stateValue, setStateValue] = getData.employment;

  const deleteAccordionSection = (id) => {
    const result = stateValue.filter((item, key) => {
      if (key !== id) {
        return item;
      }
    });
    setStateValue(result);
  };

  const modules = {
    toolbar: [
      [{ 'list': 'bullet' }],
      ['clean']
    ],
  };

  const addAccordionSection = () => {
    setStateValue([
      ...stateValue,
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
    let clone = [...stateValue];
    let obj = clone[inputKey];
    obj[name] = value;
    clone[inputKey] = obj;
    setStateValue([...clone]);

  };

  const handleDescriptionChange = (index, value) => {
    const updatedEmploymentDetails = [...stateValue];
    updatedEmploymentDetails[index].description = value;
    setStateValue(updatedEmploymentDetails);
  };

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
        {stateValue.map((item, key) => (
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
                    {item.jobtitle ? item.jobtitle : "(Not Specified)"}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={16} sm={6} md={6}>
                      <TextField
                        id={item.id}
                        label="Job title"
                        type="text"
                        value={stateValue.jobtitle}
                        name="jobtitle"
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
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </Grid>
                    <Grid item xs={16} md={6}>
                      <TextField
                        id={item.id}
                        label="Employer"
                        type="text"
                        value={stateValue.employer}
                        name="employer"
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
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                      <TextField
                        id={item.id}
                        variant="filled"
                        label="Start Date"
                        name="startdate"
                        value={stateValue.startdate}
                        type="month"
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
                        onChange={(e) => handleInputChange(e, key)}
                      />

                      <TextField
                        id={item.id}
                        variant="filled"
                        label="End Date"
                        name="enddate"
                        value={stateValue.enddate}
                        type="month"
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
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </Grid>
                    <Grid item xs={16} md={6}>
                      <TextField
                        id={item.id}
                        label="City"
                        type="text"
                        value={stateValue.city}
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
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </Grid>
                    <Grid item xs={16} md={12}>
                      <Typography>Description</Typography>
                      <ReactQuill
                        style={{ marginTop: '10px', background: "#e7eaf4" }}
                        value={item.description}
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
