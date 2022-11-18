import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Hobbies({ deleteCustomSection, sectionId, setActiveSectionId }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          width: "33%",
          marginTop: "20px",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        Hobbies
        <DeleteIcon
          sx={{
            marginTop: "-20px",
            fontSize: "17px",
            color: "white",
            "&:hover": {
              color: "#2196f3",
              cursor: "pointer",
            },
          }}
          onClick={() => {deleteCustomSection(sectionId);setActiveSectionId(null)}}
        />
      </Typography>
      <Grid container columns={14}>
        <Grid item xs={4} md={13}>
          <TextField
            id="outlined-basic"
            label="What do you like?"
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
          />
        </Grid>
      </Grid>
    </Box>
  );
}
