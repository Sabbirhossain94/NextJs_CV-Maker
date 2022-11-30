import * as React from "react";
import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import { DataContext } from "../pages/CVBuilder";

export default function PersonalDetails() {
  const getData = useContext(DataContext);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [stateValue, setStateValue] = getData.value1;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStateValue({
      ...stateValue,
      [name]: value,
    });
  };

  return (
    <Box>
      <Typography
        sx={{
          width: "33%",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        Personal Details
      </Typography>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        columns={15}
      >
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="Wanted Job Title"
            name="wantedjobtitle"
            variant="filled"
            value={stateValue.firstname}
            type="text"
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
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="First Name"
            name="firstname"
            variant="filled"
            value={stateValue.firstname}
            type="text"
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
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="Last Name"
            name="lastname"
            variant="filled"
            value={stateValue.lastname}
            type="text"
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
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            variant="filled"
            value={stateValue.email}
            type="text"
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
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="Phone"
            name="phone"
            variant="filled"
            value={stateValue.phone}
            type="text"
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
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="Country"
            name="country"
            variant="filled"
            value={stateValue.country}
            type="text"
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
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="City"
            name="city"
            variant="filled"
            value={stateValue.city}
            type="text"
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
      </Grid>
      {/* <AdditionalDetails /> */}
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          marginLeft: "-15px",
          marginTop: "15px",
        }}
      >
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column-reverse",
            boxShadow: "none",
          }}
        >
          <AccordionSummary
            sx={{ flexDirection: "row-reverse", width: "30%" }}
            expandIcon={
              <ExpandMoreIcon color="primary" sx={{ display: "flex" }} />
            }
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{
                flexShrink: 0,
                fontWeight: "700",
                borderRadius: "5px",
                width: "100%",
              }}
              color="primary"
            >
              Edit additional details
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid
              container
              rowSpacing={5}
              columnSpacing={{ xs: 1, sm: 2, md: 6 }}
              columns={15}
            >
              <Grid item xs={4} md={7}>
                <TextField
                  id="outlined-basic"
                  label="Address"
                  name="address"
                  variant="filled"
                  type="text"
                  value={stateValue.address}
                  sx={{
                    width: "105%",
                    background: "#e7eaf4",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                  inputLabelProps={{
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
              <Grid item xs={4} md={7}>
                <TextField
                  id="outlined-basic"
                  label="Postal Code"
                  name="postalcode"
                  variant="filled"
                  type="text"
                  value={stateValue.postalcode}
                  sx={{
                    width: "105%",
                    background: "#e7eaf4",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                  inputLabelProps={{
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
              <Grid item xs={4} md={7}>
                <TextField
                  id="outlined-basic"
                  label="Nationality"
                  name="nationality"
                  variant="filled"
                  type="text"
                  value={stateValue.nationality}
                  sx={{
                    width: "105%",
                    background: "#e7eaf4",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                  inputLabelProps={{
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
              <Grid item xs={4} md={7}>
                <TextField
                  id="outlined-basic"
                  label="Place Of Birth"
                  name="placeofbirth"
                  variant="filled"
                  type="text"
                  value={stateValue.placeofbirth}
                  sx={{
                    width: "105%",
                    background: "#e7eaf4",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                  inputLabelProps={{
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
              <Grid item xs={4} md={7}>
                <TextField
                  id="outlined-basic"
                  label="Date Of Birth"
                  name="dateofbirth"
                  variant="filled"
                  type="text"
                  value={stateValue.dateofbirth}
                  sx={{
                    width: "105%",
                    background: "#e7eaf4",
                    borderRadius: "5px",
                    textDecoration: "none",
                  }}
                  inputLabelProps={{
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
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
