import { useState, useContext } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataContext } from "../../pages/CVBuilder";
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';


const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function References({
    deleteCustomSection,
    sectionId,
}) {
    const getData = useContext(DataContext);
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (_, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [stateValue, setStateValue] = getData.reference;

    const deleteAccordionSection = (id) => {
        const result = stateValue.filter((item, key) => {
            if (key !== id) {
                return item;
            }
        });
        setStateValue(result);
    };

    const addAccordionSection = () => {
        setStateValue([
            ...stateValue,
            {
                referrername: "",
                position: "",
                organization: "",
                address: "",
                phone: "",
                email: ""
            },
        ]);
    };

    const handleInputChange = (e, inputKey) => {
        const { name, value } = e.target;
        let clone = [...stateValue];
        let obj = clone[inputKey];
        obj[name] = value;
        clone[inputKey] = obj;
        setStateValue([...clone]);
    };


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
                        References
                    </Typography>
                    <DeleteOutlineOutlinedIcon
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
                            setStateValue([
                                {
                                    referrername: "",
                                    position: "",
                                    organization: "",
                                    address: "",
                                    phone: "",
                                    email: ""
                                },
                            ]);
                        }}
                    />
                </Grid>
            </Grid>

            <Box sx={{ display: 'flex', flexDirection: "column", gap: '10px', flexGrow: 1 }}>
                {stateValue.map((item, key) => (
                    <Grid key={key} container columns={16}>
                        <Grid item xs={14} sm={15} md={15}>
                            <Accordion
                                expanded={expanded === key}
                                onChange={handleChange(key)}
                                sx={{
                                    backgroundColor: "white",
                                    boxShadow: "none",
                                    border: "1px solid",
                                    borderColor: "#e7eaf4",
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon color="#e7eaf4" />}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography sx={{ width: "33%", flexShrink: 0 }}>
                                        {item.referrername ? item.referrername : "(Not Specified)"}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid
                                        container
                                        rowSpacing={3}
                                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                    >
                                        <Grid item xs={16} md={6}>
                                            <TextField
                                                label="Referrer name"
                                                name="referrername"
                                                value={stateValue.referrername}
                                                type="text"
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
                                                onChange={(e) => handleInputChange(e, key)}
                                            />
                                        </Grid>
                                        <Grid item xs={16} md={6}>
                                            <TextField
                                                label="Position"
                                                name="position"
                                                value={stateValue.position}
                                                type="text"
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
                                                onChange={(e) => handleInputChange(e, key)}
                                            />
                                        </Grid>
                                        <Grid item xs={16} md={6}>
                                            <TextField
                                                label="Organization"
                                                name="organization"
                                                value={stateValue.organization}
                                                type="text"
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
                                                onChange={(e) => handleInputChange(e, key)}
                                            />
                                        </Grid>
                                        <Grid item xs={16} md={6}>
                                            <TextField
                                                label="Email"
                                                name="email"
                                                type="text"
                                                value={stateValue.email}
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
                                                onChange={(e) => handleInputChange(e, key)}
                                            />
                                        </Grid>

                                        <Grid item xs={16} md={6}>
                                            <TextField
                                                label="Phone"
                                                name="phone"
                                                type="text"
                                                value={stateValue.phone}
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
                                                onChange={(e) => handleInputChange(e, key)}
                                            />
                                        </Grid>

                                        <Grid item xs={16} md={6}>
                                            <TextField
                                                label="Address"
                                                name="address"
                                                type="text"
                                                value={stateValue.address}
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
                                                onChange={(e) => handleInputChange(e, key)}
                                            />
                                        </Grid>
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item md="auto">
                            {key > 0 && <DeleteOutlineOutlinedIcon
                                sx={{
                                    marginTop: "20px",
                                    marginLeft: "5px",
                                    fontSize: "25px",
                                    color: "white",
                                    "&:hover": {
                                        color: "#2196f3",
                                        cursor: "pointer",
                                    },
                                }}
                                onClick={() => deleteAccordionSection(key)}
                            />}
                        </Grid>
                    </Grid>
                ))}
            </Box>
            <Typography
                sx={{
                    width: "94%",
                    fontWeight: "700",
                    marginTop: "10px",
                    display: "flex",
                    padding: "5px",
                    borderRadius: "5px",
                    "&:hover": {
                        backgroundColor: "#e3f2fd",
                        cursor: "pointer",
                    },
                }}
                color="primary"
                onClick={addAccordionSection}
            >
                <AddIcon sx={{ fontSize: "20px" }} /> Add one more course
            </Typography>
        </Box >
    );
}
