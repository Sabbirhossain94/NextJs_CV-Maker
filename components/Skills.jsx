import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SkillsAccordion from "./subcomponents/SkillsAccordion";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";


export default function Skills() {
    const [accordionId, setAccordionId] = useState(1);
    const [accordionField, setAccordionField] = useState([
      {
        id: accordionId,
        name: <SkillsAccordion />,
      },
    ]);

    const addAccordionSection = () => {
      setAccordionId(accordionId + 1);
      setAccordionField([
        ...accordionField,
        {
          id: accordionId,
          name: <SkillsAccordion />,
        },
      ]);
    };
   const AntSwitch = styled(Switch)(({ theme }) => ({
     width: 28,
     height: 16,
     padding: 0,
     display: "flex",
     "&:active": {
       "& .MuiSwitch-thumb": {
         width: 15,
       },
       "& .MuiSwitch-switchBase.Mui-checked": {
         transform: "translateX(9px)",
       },
     },
     "& .MuiSwitch-switchBase": {
       padding: 2,
       "&.Mui-checked": {
         transform: "translateX(12px)",
         color: "#fff",
         "& + .MuiSwitch-track": {
           opacity: 1,
           backgroundColor:
             theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
         },
       },
     },
     "& .MuiSwitch-thumb": {
       boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
       width: 12,
       height: 12,
       borderRadius: 6,
       transition: theme.transitions.create(["width"], {
         duration: 200,
       }),
     },
     "& .MuiSwitch-track": {
       borderRadius: 16 / 2,
       opacity: 1,
       backgroundColor:
         theme.palette.mode === "dark"
           ? "rgba(255,255,255,.35)"
           : "rgba(0,0,0,.25)",
       boxSizing: "border-box",
     },
   }));
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          width: "33%",
          marginTop: "30px",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        Skills
      </Typography>
      <FormGroup>
        <Stack direction="row" spacing={1} alignItems="center">
         
          <AntSwitch
            defaultChecked
            inputProps={{ "aria-label": "ant design" }}
          />
          <Typography sx={{fontSize: "15px"}}>Don't show experience level</Typography>
        </Stack>
      </FormGroup>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid item md={16}>
            {accordionField.map((item, key) => item.name)}
          </Grid>
        </Grid>
      </Box>
      <Typography
        sx={{
          fontWeight: "700",
          marginTop: "20px",
          padding: "5px",
          display: "flex",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#e3f2fd",
            cursor: "pointer",
          },
        }}
        color="primary"
        onClick={addAccordionSection}
      >
        <AddIcon sx={{ fontSize: "20px" }} /> Add one more Skill
      </Typography>
    </Box>
  );
}
