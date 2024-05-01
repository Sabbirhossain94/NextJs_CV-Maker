import { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataContext } from "../../pages/CVBuilder";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function Projects({
  deleteCustomSection,
  sectionId,
}) {
  const getData = useContext(DataContext);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [stateValue, setStateValue] = getData.project;

  const modules = {
    toolbar: [
      [{ 'list': 'bullet' }],
      [{ 'link': 'link' }],
      ['clean']
    ],
  };

  const customStyles = {
    'link': {
      color: 'blue',
      textDecoration: 'underline'
    }
  };

  const deleteAccordionSection = (id) => {
    const result = stateValue.filter((item, key) => {
      if (key !== id) {
        return item;
      }
    });
    setStateValue(result);
  };

  const addAccordionSection = () => {
    setStateValue([
      ...stateValue,
      {
        projecttitle: "",
        startdate: "",
        enddate: "",
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
    const updatedProjectDetails = [...stateValue];
    updatedProjectDetails[index].description = value;
    setStateValue(updatedProjectDetails);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
      <Grid container item md={6}>
        <Grid container item md={4}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "20px",
              paddingBottom: "10px",
            }}
          >
            Projects
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
              setStateValue([
                {
                  projecttitle: "",
                  startdate: "",
                  enddate: "",
                  description: "",
                },
              ]);
            }}
          />
        </Grid>
      </Grid>

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
                    {item.projecttitle ? item.projecttitle : "(Not Specified)"}
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
                        id="outlined-basic"
                        label="Project Title"
                        type="text"
                        value={stateValue.course}
                        name="projecttitle"
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
                    <Grid item xs={16} sm={16} md={6} sx={{ display: "flex", flexDirection: { xs: 'column', sm: 'row' }, gap: '20px' }}>
                      <TextField
                        variant="filled"
                        label="Start Date"
                        name="startdate"
                        value={stateValue.startdate}
                        type="month"
                        sx={{
                          background: "#e7eaf4",
                          borderRadius: "5px",
                          width: {
                            xs: '100%',
                            sm: '50%'
                          }
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
                        variant="filled"
                        label="End Date"
                        name="enddate"
                        value={stateValue.enddate}
                        type="month"
                        sx={{
                          background: "#e7eaf4",
                          borderRadius: "5px",
                          width: {
                            xs: '100%',
                            sm: '50%'
                          }
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
                    <Grid item xs={16} md={12}>
                      <Typography>Description</Typography>
                      <ReactQuill
                        style={{ marginTop: '10px', background: "#e7eaf4" }}
                        value={item.description}
                        modules={modules}
                        formats={['list', 'link']}
                        styles={customStyles}
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
            <AddIcon sx={{ fontSize: "20px" }} /> Add one more course
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
