import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import SocialLinksAccordion from "./subcomponents/SocialLinksAccordion";
import DeleteIcon from "@mui/icons-material/Delete";

export default function SocialLinks() {
  const [accordionId, setAccordionId] = useState(1);
  const [accordionValues, setAccordionValues] = useState({
    label: "",
    urllink: "",
  });
  const getValuesFromSocialLinks = (getValues) => {
    const { label, urllink } = getValues;
    setAccordionValues({
      label: label,
      urllink: urllink,
    });
  };
  
  const deleteAccordionSection = (id) => {
    setAccordionId(accordionId - 1);
    const result = accordionField.filter((item) => {
      if (item.id !== id) {
        return item;
      }
    });
    setAccordionField(result);
  };

  const [accordionField, setAccordionField] = useState([
    {
      id: accordionId,
      label: accordionValues.label,
      link: accordionValues.urllink,
      component: (
        <SocialLinksAccordion
          getValuesFromSocialLinks={getValuesFromSocialLinks}
        />
      ),
    },
  ]);

  const addAccordionSection = () => {
    setAccordionId(accordionId + 1);
    setAccordionField([
      ...accordionField,
      {
        id: accordionId + 1,
        label: accordionValues.label,
        link: accordionValues.urllink,
        component: (
          <SocialLinksAccordion
            getValuesFromSocialLinks={getValuesFromSocialLinks}
          />
        ),
      },
    ]);
  };

  return (
    <div>
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
          Websites & Social Links
        </Typography>

        <Box sx={{ flexGrow: 1 }}>
          {accordionField.map((item) => (
            <Grid key={item.id} container columns={16}>
              <Grid item md={15}>
                {item.component}
              </Grid>
              <Grid item md="auto">
                <DeleteIcon
                  sx={{
                    marginTop: "25px",
                    marginLeft: "5px",
                    fontSize: "20px",
                    color: "white",
                    "&:hover": {
                      color: "#2196f3",
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => deleteAccordionSection(item.id)}
                />
              </Grid>
            </Grid>
          ))}
        </Box>
        <Typography
          sx={{
            width: "94%",
            fontWeight: "700",
            marginTop: "10px",
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
          <AddIcon sx={{ fontSize: "20px" }} /> Add one more link
        </Typography>
      </Box>
    </div>
  );
}
