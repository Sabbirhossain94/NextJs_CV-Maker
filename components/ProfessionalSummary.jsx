import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import MUIRichTextEditor from "mui-rte";
export default function ProfessionalSummary() {
  return (
    <Box>
      <Typography
        sx={{
          width: "33%",
          marginTop: "50px",
          paddingBottom: "20px",
          fontWeight: "700",
        }}
      >
        Professional History
      </Typography>

      <Grid item xs={6} md={12} variant="contained">
        <Box
          sx={{
            height: "250px",
            padding: "10px",
            overflow: "auto",
            border: "1px solid",
            borderColor: "#acacac",
            borderRadius: "5px",
          }}
        >
          <MUIRichTextEditor label="Start typing..." />
        </Box>
      </Grid>
    </Box>
  );
}
