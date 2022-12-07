import React from "react";
import { createContext } from "react";

const DataContext = createContext([
  {
    personalDetails: {
      wantedjobtitle: "",
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      postalcode: "",
      nationality: "",
      placeofbirth: "",
      dateofbirth: "",
    },

    professionalSummary: {
      summary: "",
    },

    employmentDetails: [
      {
        jobtitle: "",
        company: "",
        startdate: "",
        enddate: "",
        city: "",
        description: "",
      },
    ],
    educationDetails: [
      {
        institution: "",
        degree: "",
        startdate: "",
        enddate: "",
        institutioncity: "",
        description: "",
      },
    ],
    socialLinksDetails: [
      {
        label: "",
        linkurl: "",
      },
    ],
    skillDetails: [
      {
        skill: "",
        level: "",
      },
    ],
  },
]);

export default DataContext;
