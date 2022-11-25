import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Language({
  deleteCustomSection,
  sectionId,
  setActiveSectionId,
}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [accordionId, setAccordionId] = useState(1);
  const [accordionValues, setAccordionValues] = useState({
    language: "",
    level: "",
  });
  const getValuesFromLanguage = (getValues) => {
    const { language, level } = getValues;
    setAccordionValues({
      language: language,
      level: level,
    });
  };
  const deleteAccordionSection = (id) => {
    setAccordionId(accordionId - 1);
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
            Language
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
              <Accordion
                expanded={expanded === item.id}
                onChange={handleChange(item.id)}
                sx={{
                  backgroundColor: "white",
                  marginTop: "10px",
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
                    Not Specified
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
                        id="outlined-basic"
                        label="Language"
                        type="text"
                        name="language"
                        value={accordionValues.language}
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
                      <FormControl sx={{ width: "80%", marginLeft: "50px" }}>
                        <InputLabel id="demo-simple-select-helper-label">
                          Level
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="level"
                          defaultValue=""
                          variant="filled"
                          name="level"
                          sx={{ background: "#e7eaf4", borderRadius: "5px" }}
                          InputProps={{
                            disableUnderline: true,
                          }}
                          onChange={handleInputChange}
                        >
                          {[
                            {
                              value: 0,
                              name: "None",
                            },
                            {
                              value: 1,
                              name: "Native speaker",
                            },
                            {
                              value: 2,
                              name: "Highly proficient",
                            },
                            {
                              value: 3,
                              name: "Very good command",
                            },
                          ].map((item, key) => (
                            <MenuItem
                              defaultValue={accordionValues.level}
                              value={item.name}
                              key={key}
                            >
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
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
        <AddIcon sx={{ fontSize: "20px" }} /> Add one more language
      </Typography>
    </Box>
  );
}
