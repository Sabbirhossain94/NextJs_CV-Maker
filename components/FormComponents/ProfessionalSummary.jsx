import { useContext } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { DataContext } from "../../pages/CVBuilder";

export default function ProfessionalSummary() {
  const getData = useContext(DataContext);
  const [stateValue, setStateValue] = getData.summary;
  const [completedSections, setCompletedSections] = getData.completed

  const handleInputChange = (e, inputKey) => {
    const { name, value } = e.target;
    let clone = [...stateValue];
    let obj = clone[inputKey];
    obj[name] = value;
    clone[inputKey] = obj;
    setStateValue([...clone]);
    calculateProfileCompleteness();

  };

  const calculateProfileCompleteness = () => {
    const allfieldsCompleted = stateValue.every(entry => Object.values(entry).every(field => field !== ""))

    if (allfieldsCompleted) {
      if (!completedSections.sections.includes("summary")) {
        setCompletedSections(prevState => ({
          ...prevState,
          sections: [...prevState.sections, "summary"]
        }));
      }
    } else {
      if (completedSections.sections.includes("summary")) {
        setCompletedSections(prevState => ({
          ...prevState,
          sections: prevState.sections.filter(section => section !== "summary")
        }));
      }
    }
  }

  return (
    <Box>
      <Typography
        sx={{
          width: "100%",
          marginTop: "50px",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        About
      </Typography>
      {stateValue.map((_, key) => (
        <Grid key={key} container columns={16} >
          <Grid item xs={15} md={15} variant="contained">
            <Box
              sx={{
                height: "219px",
                overflow: "auto",
                border: "1px solid black",
                borderColor: "#e7eaf4",
                borderRadius: "5px",
                backgroundColor: "#e7eaf4",
              }}
            >
              <TextField
                name="summary"
                value={stateValue.summary}
                multiline
                rows={8}
                sx={{ width: "100%" }}
                onChange={(e) => handleInputChange(e, key)}
              />
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
