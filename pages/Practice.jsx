import React, { useState } from "react";

export default function Practice() {
    const active = {backgroundColor: 'green'}
     const inactive = {}

function SelectableDiv(props) {
  const [selected, setSelected] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
  };
  return (
    <div style={selected ? active : inactive} onClick={handleClick}>
      click here {props.number}
    </div>
  );
}
  return (
    <div>
      {[1, 2, 3, 4].map((item) => (
       
        <SelectableDiv number={item} /> 
         
      ))}

   
    </div>
  );
}

