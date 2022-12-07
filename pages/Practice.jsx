import React, { useState, useContext } from "react";
import DataContext from "../components/Context";
import TextField from "@mui/material/TextField";

export default function Practice() {
  const [data] = useContext(DataContext);
  const [changeData, setChangeData] = useState(data.personalDetails);
  console.log(changeData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setChangeData({
      [name]: value,
    });
  };
  return (
    <div>
      <button>click me</button>
      <TextField
        label="first name"
        name="firstname"
        type="text"
        value={changeData.wantedjobtitle}
        onChange={handleInputChange}
      />
    </div>
  );
}
