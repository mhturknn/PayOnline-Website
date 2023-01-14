import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import axios from "axios";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function HomepageScreen() {
  const [data, setData] = useState();
  const [defArr, setDefArr] = useState([]);
  const [selectedValue, setSelectedValue] = useState(null);
  const [categories, setCategories] = useState();
  const [count, setCount] = useState(Number(localStorage.getItem("cartCount")));
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();
  let filterData = [];
  const areEqual = Object.is(defArr, data);

  const handleAddProduct = (event) => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Add to cart successful",
      showConfirmButton: false,
      timer: 1400,
    });
    localStorage.setItem("cartCount", Number(count ? count + 1 : count));
    setCount(count + 1);
    setArr([...arr, { product: event }]);
  };

  const handleCheck = () => {
    navigate("/cart");
    localStorage.setItem("cartArr", JSON.stringify(arr));
  };

  const handleRemove = () => {
    setCount(0);
    localStorage.removeItem("cartCount");
    setArr([]);
  };

  const handleChange = (event) => {
    setSelectedValue(event);
  };

  function resetFilter() {
    setData(defArr);
    setSelectedValue(null);
  }

  const handleFilter = (event) => {
    filterData.products = data?.products?.filter(
      (item) => item?.category === event
    );
    areEqual ? setData(filterData) : setData(defArr);
    console.log(filterData);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res?.data);
        setDefArr(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box className="Homepage-style">
      <Grid container spacing={3}>
        <Grid
          item
          xs
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-end",
          }}
        >
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Category</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="all"
              name="radio-buttons-group"
              color="success"
            >
              {categories &&
                categories.slice(0, 6)?.map((item, i) => {
                  return (
                    <FormControlLabel
                      key={i}
                      value={item}
                      control={
                        <Radio
                          checked={selectedValue === i}
                          onChange={() => handleChange(i)}
                          value={i}
                        />
                      }
                      label={item}
                      style={{ textTransform: "capitalize" }}
                      onClick={() => handleFilter(item)}
                    />
                  );
                })}
            </RadioGroup>
          </FormControl>
          <Box
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "1.4rem",
            }}
          >
            <Button
              onClick={resetFilter}
              variant="outlined"
              style={{ width: "70%" }}
            >
              Reset Filter
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6} className={"homepage-products"}>
          {data &&
            data?.products?.map((product) => {
              return (
                <Box key={product?.id} className="homepage-products-card">
                  <img
                    src={product?.thumbnail}
                    className={"products-card-image"}
                    alt=""
                  />
                  <Typography className={"products-card-title"}>
                    {product?.title}
                  </Typography>
                  <Typography fontSize={"12px"} textTransform={"capitalize"}>
                    Category: {product?.category}
                  </Typography>
                  <Typography fontSize={"12px"}>
                    Rating: {product?.rating}
                  </Typography>
                  <Typography
                    style={{
                      color: "red",
                      fontSize: "24px",
                      fontWeight: "500",
                    }}
                  >
                    {product?.price}$
                  </Typography>
                  <Button
                    variant="outlined"
                    style={{
                      width: "100%",
                    }}
                    onClick={() => handleAddProduct(product)}
                  >
                    Add to Cart
                  </Button>
                </Box>
              );
            })}
        </Grid>
        <Grid
          item
          xs
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <Box className="homepage-cart-box">
            <Typography>Order Summary</Typography>
            <Button>
              <ShoppingCartIcon fontSize={"large"} color="secondary" />
              <Box className="shoping-cart">{count}</Box>
            </Button>
            <Button
              onClick={handleCheck}
              variant="outlined"
              className="homepage-cart-checkout"
            >
              Checkout
            </Button>
            <Button
              onClick={handleRemove}
              variant="outlined"
              className="homepage-cart-emptyCart"
            >
              Empty Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomepageScreen;
