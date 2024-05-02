import * as React from "react";
import { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { DataContext } from "../../pages/CVBuilder";

export default function PersonalDetails() {
  const getData = useContext(DataContext);
  const [stateValue, setStateValue] = getData.personalInformation;

  const [completedSections, setCompletedSections] = getData.completed

  const handleInputChange = (e, inputKey) => {
    const { name, value } = e.target;
    let clone = [...stateValue];
    let obj = clone[inputKey];
    obj[name] = value;
    clone[inputKey] = obj;
    setStateValue([...clone]);
    calculateProfileCompleteness();
  };

  const calculateProfileCompleteness = () => {
    const allfieldsCompleted = stateValue.every(entry => Object.values(entry).every(field => field !== ""))

    if (allfieldsCompleted) {
      if (!completedSections.sections.includes("personal Details")) {
        setCompletedSections(prevState => ({
          ...prevState,
          sections: [...prevState.sections, "personal Details"]
        }));
      }
    } else {
      if (completedSections.sections.includes("personal Details")) {
        setCompletedSections(prevState => ({
          ...prevState,
          sections: prevState.sections.filter(section => section !== "personal Details")
        }));
      }
    }
  }

  return (
    <Box >
      {stateValue.map((item, key) => (
        <Box key={key} style={{ marginTop: "40px" }}>
          <Typography
            sx={{
              width: "33%",
              paddingBottom: "20px",
              fontWeight: "700",
              fontSize: "20px",
              whiteSpace: "nowrap"
            }}
          >
            Personal Details
          </Typography>

          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 3, sm: 2, md: 4 }}
            columns={15}
          >
            <Grid item xs={15} sm={7} md={7}>
              <TextField
                id="outlined-basic"
                label="First Name"
                name="firstname"
                variant="filled"
                value={item.firstname}
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
                onChange={(e) => handleInputChange(e, key)}
              />
            </Grid>
            <Grid item xs={15} sm={7} md={7}>
              <TextField
                id="outlined-basic"
                label="Last Name"
                name="lastname"
                variant="filled"
                value={item.lastname}
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
                onChange={(e) => handleInputChange(e, key)}
              />
            </Grid>
            <Grid item xs={15} sm={7} md={7}>
              <TextField
                id="outlined-basic"
                label="Email"
                name="email"
                variant="filled"
                value={item.email}
                type="email"
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
            <Grid item xs={15} sm={7} md={7}>
              <TextField
                id="outlined-basic"
                label="Phone"
                name="phone"
                variant="filled"
                value={item.phone}
                type="tel"
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
            <Grid item xs={15} sm={7} md={7}>
              <TextField
                id="outlined-basic"
                label="Country"
                name="country"
                variant="filled"
                value={item.country}
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
                onChange={(e) => handleInputChange(e, key)}
              />
            </Grid>
            <Grid item xs={15} sm={7} md={7}>
              <TextField
                id="outlined-basic"
                label="City"
                name="city"
                variant="filled"
                value={item.city}
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
                onChange={(e) => handleInputChange(e, key)}
              />
            </Grid>
            <Grid item xs={15} sm={7} md={7}>
              <TextField
                id="outlined-basic"
                label="Occupation"
                name="occupation"
                variant="filled"
                type="text"
                value={item.occupation}
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
            <Grid item xs={15} sm={7} md={7}>
              <TextField
                id="outlined-basic"
                label="Postal Code"
                name="postalcode"
                variant="filled"
                type="text"
                value={item.postalcode}
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
        </Box>
      ))}
    </Box>
  );
}
