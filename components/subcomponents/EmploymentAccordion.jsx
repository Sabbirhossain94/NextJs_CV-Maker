import * as React from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import DatePicker from "../../components/DatePicker";
import DeleteIcon from "@mui/icons-material/Delete";
import MUIRichTextEditor from "mui-rte";

export default function EmploymentAccordion() {
 
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChange("panel1")}
      sx={{ backgroundColor: "white", marginTop: "10px", cursor: "none" }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon color="primary" />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "90%", flexShrink: 0 }}>
          Not Specified
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item sm={6} md={6}>
            <TextField
              id="outlined-basic"
              label="Job title"
              variant="filled"
              sx={{ width: "100%", background: "#eff2f9" }}
              InputLabelProps={{
                sx: {
                  color: "#828ba2",
                },
              }}
            />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              id="outlined-basic"
              label="Employer"
              variant="filled"
              sx={{ width: "100%", background: "#eff2f9" }}
              InputLabelProps={{
                sx: {
                  color: "#828ba2",
                },
              }}
            />
          </Grid>
          <Grid item xs={6} md={6} sx={{ display: "flex" }}>
            <DatePicker />
          </Grid>
          <Grid item xs={6} md={6}>
            <TextField
              id="outlined-basic"
              label="City"
              variant="filled"
              sx={{ width: "100%", background: "#eff2f9" }}
              InputLabelProps={{
                sx: {
                  color: "#828ba2",
                },
              }}
            />
          </Grid>
          <Grid item xs={6} md={12}>
            <Typography
              sx={{
                paddingBottom: "5px",
                fontWeight: "400",
              }}
              color="#757575"
            >
              Description
            </Typography>
            <Box
              sx={{
                height: "250px",
                padding: "10px",
                overflow: "auto",
                border: "1px solid",
                borderColor: "#acacac",
                borderRadius: "5px",
                marginTop: "10px",
                background: "#eff2f9",
              }}
            >
              <MUIRichTextEditor label="Start typing..." />
            </Box>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
}
