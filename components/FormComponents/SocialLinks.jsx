import * as React from "react";
import { useState, useContext } from "react";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from '@mui/material/InputLabel';
import FormControl from "@mui/material/FormControl";
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

  const [socialSites, setSocialSites] = getData.socials;

  const deleteAccordionSection = (id) => {
    const result = socialSites.filter((item, key) => {
      if (key !== id) {
        return item;
      }
    });
    setSocialSites(result);
  };

  const addAccordionSection = () => {
    setSocialSites([
      ...socialSites,
      {
        icon: "",
        label: "",
        linkurl: "",
      },
    ]);
  };

  const handleInputChange = (e, inputKey) => {
    const { name, value } = e.target;
    let clone = [...socialSites];
    let obj = clone[inputKey];
    console.log(obj)

    const getIconForLabel = (label) => {
      switch (label) {
        case "Facebook":
          return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="w-4 h-4">
            <path fill="currentColor" d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
          </svg>;
        case "LinkedIn":
          return <svg
            viewBox="0 0 448 512" className="w-4 h-4">
            <path fill="currentColor"
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
            </path>
          </svg>;
        case "Website":
          return <svg fill="#000000" className="w-4 h-4" version="1.1" id="Icons"
            viewBox="0 0 32 32">
            <g>
              <path d="M26,9h-2.6c-1.2-3-4.1-5-7.4-5c-3.3,0-6.2,2-7.4,5H6c-1.7,0-3,1.3-3,3v0.6C3,16.1,5.9,19,9.4,19h13.3
		c3.5,0,6.4-2.9,6.4-6.4V12C29,10.3,27.7,9,26,9z M16,6c2.2,0,4.1,1.2,5.2,3H10.8C11.9,7.2,13.8,6,16,6z"/>
              <path d="M23,21C23,21,23,21,23,21l0,2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2H11v2c0,0.6-0.4,1-1,1s-1-0.4-1-1v-2c0,0,0,0,0,0
		c-2.4-0.1-4.5-1.2-6-2.9V25c0,1.7,1.3,3,3,3h20c1.7,0,3-1.3,3-3v-6.9C27.5,19.8,25.4,20.9,23,21z"/>
            </g>
          </svg>;
        case "Github":
          return <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>github</title>
            <rect width="24" height="24" fill="none" />
            <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z" />
          </svg>
        default:
          return "";
      }
    };
    obj["icon"] = getIconForLabel(obj["label"]);
    obj[name] = value;
    clone[inputKey] = obj;
    setSocialSites([...clone]);
  };

  return (
    <div>
      <Box sx={{}}>
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

        <Box sx={{ display: 'flex', flexDirection: "column", gap: '10px', flexGrow: 1 }}>
          {socialSites.map((social, key) => (
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
                      {social.label ? social.label : "(Not Specified)"}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid
                      container
                      rowSpacing={3}
                      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                      <Grid item xs={15} sm={6} md={6}>
                        <FormControl sx={{ width: "100%" }}>
                          <InputLabel
                            id="demo-simple-select-helper-label"
                          >
                            Socials
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={social.label}
                            name="label"
                            sx={{
                              width: "100%",
                              background: "#e7eaf4",
                              borderRadius: "5px",
                            }}
                            label="label"
                            InputProps={{
                              disableUnderline: true,
                            }}
                            onChange={(e) => handleInputChange(e, key)}
                          >
                            {[
                              {
                                name: "Website",
                              },
                              {
                                name: "Facebook",
                              },
                              {
                                name: "LinkedIn",
                              },
                              {
                                name: "Github",
                              },
                            ].map((item, key) => (
                              <MenuItem
                                defaultValue={social.label}
                                value={item.name}
                                key={key}
                              >
                                {item.icon}
                                {item.name}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={15} sm={6} md={6}>
                        <TextField
                          id="outlined-basic"
                          label="Link"
                          placeholder="https://example.com"
                          type="text"
                          name="linkurl"
                          value={social.linkurl}
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
                          onChange={(e) => handleInputChange(e, key)}
                        />
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
