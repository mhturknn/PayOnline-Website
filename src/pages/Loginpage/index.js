import { useAuth0 } from "@auth0/auth0-react";
import { Box, Typography, Button } from "@mui/material";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function Loginpage(props) {
  const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();
  const newValue = isAuthenticated ? true : false;
  props.isAuth(newValue);
  const userInfos = user ? user : "";
  props.userInfo(user);

  return (
    <>
      {isLoading ? (
        <Box className="App">
          <CircularProgress style={{ color: "#2ed87b" }} />
        </Box>
      ) : (
        <Box className="App">
          <Box className="loginpage-box">
            <Typography textAlign={"center"} padding={"0 1rem"}>
              Please, log in to access the system.
            </Typography>
            <Button
              variant={"outlined"}
              onClick={loginWithRedirect}
              size={"medium"}
            >
              LOGIN
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}

export default Loginpage;
