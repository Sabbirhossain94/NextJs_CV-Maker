import * as React from "react";
import { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { DataContext } from "../../pages/CVBuilder";

export default function Language({
  deleteCustomSection,
  sectionId,
  setActiveSectionId,
}) {
  const getData = useContext(DataContext);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [stateValue, setStateValue] = getData.value9;

  const deleteAccordionSection = (id) => {
    const result = stateValue.filter((item, key) => {
      if (key !== id) {
        return item;
      }
    });
    setStateValue(result);
  };
  // const [toggleSwitch, setToggleSwitch] = useState(false);

  const addAccordionSection = () => {
    setStateValue([
      ...stateValue,
      {
        language: "",
        level: "",
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
          <DeleteOutlineOutlinedIcon
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
              setStateValue([
                {
                  language: "",
                  level: "",
                },
              ]);
            }}
          />
        </Grid>
      </Grid>

      <Box sx={{ flexGrow: 1 }}>
        {stateValue.map((item, key) => (
          <Grid key={key} container columns={16}>
            <Grid item xs={14} sm={15} md={15}>
              <Accordion
                expanded={expanded === key}
                onChange={handleChange(key)}
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
                    {item.language ? item.language : "(Not Specified)"}
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
                        label="Language"
                        type="text"
                        name="language"
                        value={stateValue.language}
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
                      <FormControl sx={{ width: "100%"}}>
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
                          value={stateValue.level}
                          sx={{ background: "#e7eaf4", borderRadius: "5px" }}
                          InputProps={{
                            disableUnderline: true,
                          }}
                          onChange={(e) => handleInputChange(e, key)}
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
                              defaultValue={stateValue.level}
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
              <DeleteOutlineOutlinedIcon
                sx={{
                  marginTop: "20px",
                  marginLeft: "5px",
                  fontSize: "25px",
                  color: "white",
                  "&:hover": {
                    color: "#2196f3",
                    cursor: "pointer",
                  },
                }}
                onClick={() => deleteAccordionSection(key)}
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
