import { useAuth0 } from "@auth0/auth0-react";
import { Button, Box, Link, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import axios from "axios";
import SearchComponent from "./SearchComponent";
function Header(props) {
  const { logout } = useAuth0();
  const [inputValue, setValue] = useState();
  const [searchData, setSearchData] = useState([]);

  const handleChange = (event) => {
    setValue(event?.target?.value);
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/search?q=${inputValue}`)
      .then((res) => {
        setSearchData(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [inputValue]);

  console.log(searchData?.products);

  return (
    <Box className={"header-container"}>
      <Box className={"container"}>
        <Box className={"header-inside"}>
          <Input
            className={"header-search"}
            disableUnderline={true}
            placeholder={"Search"}
            value={inputValue}
            onChange={handleChange}
          />
          <SearchIcon className="header-search-icon" />
          {inputValue && inputValue.length > 1 && searchData && (
            <SearchComponent data={searchData} />
          )}
          <Link href={"/"} className={"header-logo"}>
            PayOnline
          </Link>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <Button href="/profile" className={"header-profile-bttn"}>
              <PersonRoundedIcon fontSize="large" style={{ color: "white" }} />
            </Button>
            <Button
              onClick={logout}
              className={"header-logout-bttn"}
              variant={"outlined"}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
