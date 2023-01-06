import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Practice() {
  const [progress, setProgress] = useState(30);
  const details = [
    {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      occupation: "",
      address: "",
      postalcode: "",
      nationality: "",
      placeofbirth: "",
      dateofbirth: "",
    },
  ];
  return (
    <div>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          margin: "auto",
          marginTop: "50px",
          width: "50%",
        }}
      />
      <Box style={{ display: "flex", margin: "auto" }}>
        {details.map((item) => (
          <TextField variant="filled" value={item.firstname} type="text" />
        ))}
      </Box>
    </div>
  );
}
