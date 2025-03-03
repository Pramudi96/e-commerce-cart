import { Box, Typography, Button, IconButton } from "@mui/material";
import { useCart } from "../context/CartContext";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PropTypes from "prop-types";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const Cart = ({ setFormOpen }) => {
  const { cart, removeFromCart, getTotalPrice } = useCart();

  return (
    <Box padding={3}>
      {cart.length === 0 ? (
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ width: 500, display: "flex", justifyContent: "center" }}>
            <WorkOutlineOutlinedIcon fontSize="large" sx={{ fontSize: 150 }} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              style={{
                marginTop: 10,
                color: "black",
                fontSize: "22px",
                fontWeight: "normal",
              }}
            >
              Your cart is empty.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              sx={{ width: "300px", mt: 2, height: "50px", fontSize: "20px" }}
              onClick={() => setFormOpen(false)}
            >
              Continue Shopping
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {cart.map((product, i) => (
            <Box
              key={`cart ${product} ${i}`}
              border={1}
              padding={2}
              borderRadius={2}
              display="flex"
              flexDirection="row"
              sx={{
                width: 500,
                mb: 2,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  maxWidth: "60%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {product.title}
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  gap: 1,
                }}
              >
                <Typography variant="body2" color="text.secondary">
                  ${product.price}
                </Typography>
                <IconButton onClick={() => removeFromCart(product.id)}>
                  <CancelOutlinedIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
      )}
      {cart.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
            <Typography variant="h5" style={{ marginTop: 20 }}>
              Total: ${getTotalPrice()}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button variant="contained" sx={{ width: "200px", mt: 2 }}>
              Pay with Stripe
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

Cart.propTypes = {
  setFormOpen: PropTypes.func.isRequired,
};

export default Cart;
