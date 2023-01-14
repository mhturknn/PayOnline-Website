import { Box, Link, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box className="footer-container" style={{ marginTop: "3rem" }}>
      <Box className="container">
        <Box className={"header-inside"}>
          <Link href={"/"} className={"header-logo"}>
            PayOnline
          </Link>
          <Typography fontSize={12} textAlign={"end"} color={"white"}>
            © 2023 Designed and Developed <br />
            by Mehmet Türkan
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
