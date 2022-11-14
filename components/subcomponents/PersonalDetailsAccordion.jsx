import * as React from "react";
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
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <AccordionSummary
        sx={{flexDirection: "row-reverse"}}
        expandIcon={<ExpandMoreIcon color="primary" sx={{marginTop: "5px"}}/>}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography
          sx={{
            flexShrink: 0,
            fontWeight: "700",
            marginTop: "10px",        
            borderRadius: "5px",
            display: "flex",
            width: "100%"
          }}
          color="primary"
        >
          {" "}
          Edit additional details
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={4} md={6}>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4} md={6}>
            <TextField
              id="outlined-basic"
              label="Postal Code"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4} md={6}>
            <TextField
              id="outlined-basic"
              label="Driving License"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4} md={6}>
            <TextField
              id="outlined-basic"
              label="Nationality"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4} md={6}>
            <TextField
              id="outlined-basic"
              label="Place Of Birth"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={4} md={6}>
            <TextField
              id="outlined-basic"
              label="Date Of Birth"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
