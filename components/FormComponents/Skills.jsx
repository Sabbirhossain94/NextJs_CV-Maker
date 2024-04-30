import { useState, useEffect, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { AntSwitch } from "../helpers/helpers";
import { DataContext } from "../../pages/CVBuilder";

export default function Skills() {
  const getData = useContext(DataContext);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [stateValue, setStateValue] = getData.skills;
  const [_, setShowExpLevel] = getData.skillExpLevel;

  const deleteAccordionSection = (id) => {
    const result = stateValue.filter((item, key) => {
      if (key !== id) {
        return item;
      }
    });
    setStateValue(result);
  };

  const [toggleSwitch, setToggleSwitch] = useState(false);

  const addAccordionSection = () => {
    setStateValue([
      ...stateValue,
      {
        skill: "",
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

  useEffect(() => {
    if (toggleSwitch) {
      setShowExpLevel(true)
    } else {
      setShowExpLevel(false)
    }
  }, [toggleSwitch])


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

      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        style={{ marginTop: "-10px" }}
      >
        <AntSwitch
          defaultChecked={!toggleSwitch}
          inputProps={{ "aria-label": "ant design" }}
          onChange={() => {
            setToggleSwitch(!toggleSwitch);
          }}
        />
        <Typography sx={{ fontSize: "15px" }}>
          Don&apos;t show experience level
        </Typography>
      </Stack>

      <Box sx={{ display: 'flex', flexDirection: "column", gap: '10px', flexGrow: 1 }}>
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
                    {item.skill ? item.skill : "(Not Specified)"}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid
                    container
                    rowSpacing={3}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={15} sm={6} md={6}>
                      <TextField
                        id="outlined-basic"
                        label="Skill"
                        variant="filled"
                        value={stateValue.skill}
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
                        onChange={(e) => handleInputChange(e, key)}
                      />
                    </Grid>
                    <Grid item xs={15} sm={6} md={6}>
                      <FormControl sx={{ width: "100%" }}>
                        <InputLabel
                          id="demo-simple-select-helper-label"
                          sx={{}}
                        >
                          Level
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          id="demo-simple-select-helper"
                          label="level"
                          disabled={toggleSwitch ? false : true}
                          defaultValue=""
                          value={stateValue.level}
                          variant="filled"
                          name="level"
                          sx={{ background: "#e7eaf4", borderRadius: "5px" }}
                          InputProps={{
                            disableUnderline: true,
                          }}
                          onChange={(e) => handleInputChange(e, key)}
                        >
                          {[
                            {
                              value: 1,
                              name: "⭐",
                            },
                            {
                              value: 2,
                              name: "⭐⭐",
                            },
                            {
                              value: 3,
                              name: "⭐⭐⭐",
                            },
                            {
                              value: 4,
                              name: "⭐⭐⭐⭐",
                            },
                            {
                              value: 5,
                              name: "⭐⭐⭐⭐⭐",
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
              {key > 0 && <DeleteOutlineOutlinedIcon
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
              />}
            </Grid>
          </Grid>
        ))}
      </Box>
      {/* add one more skill area */}
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
