import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Cart() {
  let cartArray = JSON.parse(localStorage.getItem("cartArr"));
  let priceArray = cartArray.map((item) => item.product.price);
  let totalPrice = 0;
  priceArray.map((price) => (totalPrice += Number(price)));
  const navigate = useNavigate();
  const Route = () => {
    navigate("/");
  };
  function Completed() {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your cart has been completed",
      showConfirmButton: false,
      timer: 2000,
    });
    localStorage.removeItem("cartArray");
    localStorage.removeItem("cartCount");
  }
  const handleFinished = () => {
    Completed();
    setTimeout(Route, 2100);
  };

  return (
    <Box className="cart-page-style">
      {cartArray &&
        cartArray.map((item, key) => {
          return (
            <Box key={key} className="cart-page-inside">
              <img
                src={item?.product?.thumbnail}
                style={{
                  width: "20%",
                  borderRadius: "0.6rem",
                  height: "104px",
                  objectFit: "fill",
                }}
                alt=""
              />
              <Typography style={{ width: "15%" }}>
                {item?.product?.title}
              </Typography>
              <Typography style={{ width: "35%", padding: "0 0.75rem" }}>
                {item?.product?.description}
              </Typography>
              <Typography
                style={{
                  width: "15%",
                  color: "#D63302",
                  fontWeight: 700,
                }}
              >
                {item?.product?.price}$
              </Typography>
            </Box>
          );
        })}
      <Box className="cart-page-check-inside">
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <Typography
            style={{
              color: "#D63302",
              fontWeight: 700,
            }}
          >
            {totalPrice}$
          </Typography>
          <Button variant="outlined" onClick={handleFinished}>
            Complete Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Cart;
