import { StyleSheet } from "@react-pdf/renderer";

export default StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "row",
  },
  section_right: {
    margin: 10,
    padding: 10,
    paddingTop: 20,
    width: "75%",
    textAlign: "left",

  },
  section_left: {
    width: "30%",
    height: "100%",
    backgroundColor: "#003d74",
  },
  profile_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20",
    marginBottom: "20px",
    height: "150",
    fontFamily: "Helvetica-Bold",
  },
  name_text: {
    paddingTop: "10px",
    paddingBottom: "5px",
    fontSize: "18px",
    fontWeight: "900",
    color: "white",
  },
  profession_text: {
    paddingTop: "5px",
    color: "#d1d5db",
    fontSize: "15px",
    fontWeight: "900",
  },
  profile_img: {
    width: "60px",
    height: "60px",
    borderRadius: "90",
  },
  profile_line: {
    marginTop: "15px",
    width: "95%",
    height: "1px",
    backgroundColor: "black",
    textAlign: "center",
    margin: "auto"
    
  },
});
