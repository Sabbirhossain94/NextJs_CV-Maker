import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function Skills({ getSkillDetails }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [accordionId, setAccordionId] = useState(1);
  const [accordionValues, setAccordionValues] = useState({
    skill: "",
    level: "",
  });

  const getValuesFromSkill = (getValues) => {
    const { skill, level } = getValues;
    setAccordionValues({
      skill: skill,
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
  getSkillDetails(accordionValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccordionValues({
      ...accordionValues,
      [name]: value,
    });
  };
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 15,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(12px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === "dark"
          ? "rgba(255,255,255,.35)"
          : "rgba(0,0,0,.25)",
      boxSizing: "border-box",
    },
  }));

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
        Skills
      </Typography>

      <Stack direction="row" spacing={1} alignItems="center">
        <AntSwitch
          defaultChecked={!toggleSwitch}
          inputProps={{ "aria-label": "ant design" }}
          onChange={() => {
            setToggleSwitch(!toggleSwitch);
          }}
        />
        <Typography sx={{ fontSize: "15px" }}>
          Don't show experience level
        </Typography>
      </Stack>

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
                    {accordionValues.skill
                      ? accordionValues.skill
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
                        id="outlined-basic"
                        label="Skill"
                        variant="filled"
                        value={accordionValues.skill}
                        name="skill"
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
                          {[
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
        <AddIcon sx={{ fontSize: "20px" }} /> Add one more skill
      </Typography>
    </Box>
  );
}
