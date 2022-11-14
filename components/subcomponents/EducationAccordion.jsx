import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import DatePicker from "../../components/DatePicker";

export default function EducationAccordion() {
     const [expanded, setExpanded] = React.useState(false);
     const [startDateValue, setStartDateValue] = React.useState(null);
     const [endDateValue, setEndDateValue] = React.useState(null);

     const handleChange = (panel) => (event, isExpanded) => {
       setExpanded(isExpanded ? panel : false);
     };
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{ backgroundColor: "white", marginTop: "20px"  }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>
          Not Specified
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
      
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item sm={6} md={6}>
            <TextField
              id="outlined-basic"
              label="School"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              id="outlined-basic"
              label="Degree"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6} md={6} sx={{ display: "flex" }}>
            <DatePicker />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              id="outlined-basic"
              label="City"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={6} md={12}>
            <TextField
              id="outlined-basic"
              label="Description"
              variant="outlined"
              sx={{ width: "100%", height: "250px" }}
              multiline={true}
              rows={8}
            />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
