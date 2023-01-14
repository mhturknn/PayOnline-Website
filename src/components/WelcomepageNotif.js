import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function WelcomepageNotif({ data }) {
  const { logout } = useAuth0();
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 4000);
  }, []);

  return (
    <>
      {loading && (
        <Box className="welcome-notif">
          <img
            src={data?.picture}
            style={{
              borderRadius: "0.5rem",
              boxShadow: "0 0 1px #333",
            }}
            alt=""
          />
          You are logged in as <br />
          {data?.name}
          <Button
            color="error"
            variant={"outlined"}
            onClick={() => setLoad(false)}
          >
            <CloseIcon fontSize={"small"} />
          </Button>
        </Box>
      )}
    </>
  );
}

export default WelcomepageNotif;
