import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Hobbies({
  deleteCustomSection,
  sectionId,
  setActiveSectionId,
  getHobbiesDetails,
}) {
  const [hobbies, setHobbies] = useState("");
  getHobbiesDetails(hobbies);
  
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
      <Grid container item md={6}>
        <Grid container item md={4}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "20px",
              paddingBottom: "10px",
            }}
          >
            Hobbies
          </Typography>
          <DeleteIcon
            sx={{
              marginTop: "7px",
              marginLeft: "5px",
              fontSize: "18px",
              color: "white",

              "&:hover": {
                color: "#2196f3",
                cursor: "pointer",
              },
            }}
            onClick={() => {
              deleteCustomSection(sectionId);
              setActiveSectionId(null);
            }}
          />
        </Grid>
      </Grid>

      <Grid container columns={14}>
        <Grid item xs={4} md={13}>
          <TextField
            id="outlined-basic"
            label="What do you like?"
            type="text"
            name="hobbies"
            value={hobbies}
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
            onChange={(e) => setHobbies(e.target.value)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
