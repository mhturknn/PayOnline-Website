import { Box, Typography } from "@mui/material";
import React from "react";

function SearchComponent({ data }) {
  console.log("veriler: ", data);

  return (
    <Box className="search-component">
      {data?.products.map((item, i) => {
        return (
          <Box
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              objectFit: "contain",
            }}
          >
            <li className="search-card-li">
              <Box style={{ width: "30%" }}>
                <img
                  src={item?.thumbnail}
                  alt=""
                  style={{
                    width: "56px",
                    borderRadius: "6px",
                    minHeight: "48px",
                  }}
                />
              </Box>
              <Typography
                style={{
                  textAlign: "left",
                  textTransform: "capitalize",
                  width: "40%",
                }}
              >
                {item?.title}
              </Typography>
              <Typography
                style={{
                  fontWeight: 700,
                  color: "#D63302",
                  width: "30%",
                  textAlign: "end",
                  paddingRight: "5%",
                }}
              >
                {item?.price}$
              </Typography>
            </li>
          </Box>
        );
      })}
      {data?.limit === 0 && (
        <li className="search-card-li" style={{ border: "none" }}>
          <Typography>
            We could not found the product you're looking for.
          </Typography>
        </li>
      )}
    </Box>
  );
}

export default SearchComponent;
