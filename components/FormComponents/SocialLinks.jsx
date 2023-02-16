import * as React from "react";
import { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { DataContext } from "../../pages/CVBuilder";

export default function SocialLinks() {
  const getData = useContext(DataContext);
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [stateValue, setStateValue] = getData.value5;

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
        label: "",
        linkurl: "",
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
    <div>
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
          Websites & Social Links
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          {stateValue.map((item, key) => (
            <Grid key={key} container columns={16}>
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
                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                      {item.label ? item.label : "(Not Specified)"}
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
                          label="Label"
                          type="text"
                          name="label"
                          value={stateValue.label}
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
                      <Grid item xs={15} sm={6} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="Link"
                          placeholder="https://example.com"
                          type="text"
                          name="linkurl"
                          value={stateValue.linkurl}
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
          <AddIcon sx={{ fontSize: "20px" }} /> Add one more link
        </Typography>
      </Box>
    </div>
  );
}
