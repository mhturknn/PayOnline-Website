import { useAuth0 } from "@auth0/auth0-react";
import { Box, Typography, Button } from "@mui/material";
import React from "react";

function ProfilePage({ data }) {
  const { logout } = useAuth0();
  return (
    <Box className="App">
      <Typography textAlign={"center"}>
        Your Profile
        <Box className="profilepage-box">
          <img src={data?.picture} style={{ borderRadius: "1rem" }} alt="" />
          <Typography>{data?.name}</Typography>
          <Typography>{data?.email}</Typography>
          <Typography textTransform={"uppercase"}>{data?.locale}</Typography>
          <Button variant="outlined" onClick={logout}>
            LOGOUT
          </Button>
        </Box>
      </Typography>
    </Box>
  );
}

export default ProfilePage;
