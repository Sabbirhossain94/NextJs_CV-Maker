import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import TextField from "@mui/material/TextField";


export default function getDate() {
 
  const handleInputChange = (newdate) => {
     var newDate = new Date(
       newdate.getTime() - newdate.getTimezoneOffset() * 60 * 1000
     );
    console.log(newDate);

  };
 
  return (
    <Box>
      
    </Box>
  );
}
