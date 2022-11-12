import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { supabase } from "../api";

export default function LinkedInSign() {

const handleSubmitLinkedIn = async (event) => {
    event.preventDefault()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "linkedin",
  });
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
};
  return (
    <div>
      <Button
        type="submit"
        fullWidth
        variant="outlined"
        onClick={handleSubmitLinkedIn}
        sx={{ background: "white", mb: 2, hover: "white" }}
      >
        <Avatar
          src="https://i.imgur.com/OVYPDm8.png"
          sx={{ height: "25px", width: "75px" }}
        />
      </Button>
    </div>
  );
}
