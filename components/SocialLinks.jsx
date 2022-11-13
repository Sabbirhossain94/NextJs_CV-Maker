import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            width: "33%",
            marginTop: "50px",
            paddingBottom: "20px",
            fontWeight: "700",
          }}
        >
          Websites & Social Links
        </Typography>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          sx={{ backgroundColor: "white" }}
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
            {/* <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography> */}
            <Grid
              container
              rowSpacing={3}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item sm={6} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Label"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6} md={6}>
                <TextField
                  id="outlined-basic"
                  label="Link"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </Grid>
              
            
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Box>
    </div>
  );
}
