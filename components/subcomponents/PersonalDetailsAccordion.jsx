import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function PersonalDetailsAccordion() {
    const [expanded, setExpanded] = React.useState(false);
      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column-reverse",
          boxShadow: "none"
        }}
      >
        <AccordionSummary
          sx={{ flexDirection: "row-reverse", width: "30%" }}
          expandIcon={
            <ExpandMoreIcon
              color="primary"
              sx={{ display: "flex"}}
            />
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
            {" "}
            Edit additional details
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 5 }}
          >
            <Grid item xs={4} md={6}>
              <TextField
                id="outlined-basic"
                label="Address"
                variant="filled"
                sx={{ width: "100%", background: "#eff2f9" }}
              />
            </Grid>
            <Grid item xs={4} md={6}>
              <TextField
                id="outlined-basic"
                label="Postal Code"
                variant="filled"
                sx={{ width: "100%", background: "#eff2f9" }}
              />
            </Grid>
            <Grid item xs={4} md={6}>
              <TextField
                id="outlined-basic"
                label="Driving License"
                variant="filled"
                sx={{ width: "100%", background: "#eff2f9" }}
              />
            </Grid>
            <Grid item xs={4} md={6}>
              <TextField
                id="outlined-basic"
                label="Nationality"
                variant="filled"
                sx={{ width: "100%", background: "#eff2f9" }}
              />
            </Grid>
            <Grid item xs={4} md={6}>
              <TextField
                id="outlined-basic"
                label="Place Of Birth"
                variant="filled"
                sx={{ width: "100%", background: "#eff2f9" }}
              />
            </Grid>
            <Grid item xs={4} md={6}>
              <TextField
                id="outlined-basic"
                label="Date Of Birth"
                variant="filled"
                sx={{ width: "100%", background: "#eff2f9" }}
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
