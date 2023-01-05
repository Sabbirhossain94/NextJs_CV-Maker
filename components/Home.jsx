import React from "react";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
export default function Home() {
  return (
    <div>
      <div
        style={{
          height: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "200px",
          padding: "10px",
          lineHeight: "5px",
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontSize: "50px",
            fontFamily: "Segoe UI",
            marginTop: "50px",
          }}
        >
          <b>Build a professional resume for free</b>
        </p>
        <p
          style={{
            fontSize: "20px",
            fontFamily: "Segoe UI",
          }}
        >
          Create your resume easily with our free builder and professional
          templates.
        </p>
        <Button
          href="/CVBuilder"
          variant="contained"
          size="large"
          style={{ fontSize: "20px", marginTop: "30px" }}
        >
          Create Resume
        </Button>
      </div>
      <div
        style={{
          background: "#f5f7fd",
          display: "flex",
          flexDirection: "row",
          marginTop: "200px",
          flexWrap: "wrap"
        }}
      >
        <img
          src="/images/sample.jpg"
          style={{ marginLeft: "100px", marginTop: "100px", padding: "20px" }}
        />
        <div
          style={{
            marginTop: "100px",
            padding: "20px",
            marginLeft: "50px",
            fontSize: "25px",
            fontFamily: "Segoe UI",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "30px" }}
          >
            <img src="/images/feature.png" width="35px" height="35px" />
            <b style={{ marginLeft: "15px" }}>
              Build your resume easily with step by step
            </b>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "30px" }}
          >
            <PictureAsPdfIcon
              style={{ width: "32px", height: "32px", opacity: "0.6" }}
            />
            <b style={{ marginLeft: "20px" }}>Live PDF Viewer</b>
          </div>
          <div
            style={{ display: "flex", flexDirection: "row", marginTop: "30px" }}
          >
            <img
              src="/images/download_icon.png"
              width="35px"
              height="35px"
              style={{ opacity: "0.6" }}
            />
            <b style={{ marginLeft: "15px" }}>Free Download</b>
          </div>
        </div>
      </div>
      <footer
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100px",
          background: "#1976d2",
          fontFamily: "Segoe UI",
        }}
      >
        <p style={{ textAlign: "center", color: "white" }}>
          &copy; 2023 CV Builder. All rights reserved
        </p>
      </footer>
    </div>
  );
}
