import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Image from "next/image";
import { DataContext } from "../../pages/CVBuilder";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import { Box } from "@mui/material";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Link from "next/link";

export default function Practice() {
  const getData = useContext(DataContext);
  const [imageData, setImageData] = getData.image;
  const [imageUrlData, setImageUrlData] = getData.imageUrls;
  const [completedSections, setCompletedSections] = getData.completed

  useEffect(() => {
    if (imageData.length < 1) {
      calculateProfileCompleteness()
      return
    };
    const newImageUrls = [];
    imageData.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrlData(newImageUrls);
    calculateProfileCompleteness()
  }, [imageData, setImageUrlData]);

  const imageHandler = (e) => {
    setImageData([...e.target.files]);


  };

  const deleteImage = () => {
    setImageUrlData([]);
    setImageData([]);
  };

  const imageLoader = () => {
    return imageUrlData;
  };


  const calculateProfileCompleteness = () => {

    if (imageData.length > 0) {
      if (!completedSections.sections.includes("Image")) {
        setCompletedSections(prevState => ({
          ...prevState,
          sections: [...prevState.sections, "Image"]
        }));
      }
    } else {
      if (completedSections.sections.includes("Image")) {
        setCompletedSections(prevState => ({
          ...prevState,
          sections: prevState.sections.filter(section => section !== "Image")
        }));
      }
    }
  }


  return (
    <Box style={{ marginTop: "60px" }}>
      <Link href="/" style={{ textDecoration: "none" }}>
        <Button color="primary" variant="contained" startIcon={<KeyboardBackspaceIcon />}>
          Back
        </Button>
      </Link>
      <Box sx={{ paddingTop: "20px" }}>
        <Typography
          sx={{
            width: "33%",
            paddingBottom: "20px",
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          Photo
        </Typography>
        {imageUrlData.length > 0 ? (
          <Box style={{ display: "flex" }}>
            <Image
              loader={imageLoader}
              src="/Images/resume_icon.png"
              width={90}
              height={90}
              alt="error"
              style={{ objectFit: "contain" }}
            />
            <label htmlFor="upload-photo">
              <input
                style={{ display: "none" }}
                id="upload-photo"
                name="upload-photo"
                type="file"
                accept="image/png, image/jpg "
                onChange={imageHandler}
              />
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <Button color="primary" component="span">
                  <EditIcon />
                </Button>
                <Button onClick={deleteImage}>
                  <DeleteOutlineOutlinedIcon />
                </Button>
              </Box>
            </label>
          </Box>
        ) : (
          <label htmlFor="upload-photo">
            <input
              style={{ display: "none" }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              onChange={imageHandler}
            />

            <Button color="primary" variant="contained" component="span">
              Upload
            </Button>
          </label>
        )}
      </Box>
    </Box>
  );
}
