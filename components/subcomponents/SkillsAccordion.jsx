import React from "react";
import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


export default function SkillsAccordion({ getValuesFromSkill }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const optionValue = [
    {
      value: 0,
      name: "None",
    },
    {
      value: 1,
      name: "Novice",
    },
    {
      value: 2,
      name: "Beginner",
    },
    {
      value: 3,
      name: "Skillfull",
    },
    {
      value: 4,
      name: "Experienced",
    },
    {
      value: 5,
      name: "Expert",
    },
  ];
  const [values, setValues] = useState({
    skill: "",
    level: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    console.log(JSON.stringify(values));
  };
  getValuesFromSkill(values);
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
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
          {values.skill ? values.skill : "(Not Specified)"}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6} md={6}>
            <TextField
              id="outlined-basic"
              label="Skill"
              variant="filled"
              value={values.skill}
              name="skill"
              sx={{ width: "100%", background: "#e7eaf4", borderRadius: "5px" }}
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
              <InputLabel
                id="demo-simple-select-helper-label"
                sx={{ marginTop: "5px" }}
              >
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
                {optionValue.map((item, key) => (
                  <MenuItem
                    defaultValue={values.level}
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
  );
}
