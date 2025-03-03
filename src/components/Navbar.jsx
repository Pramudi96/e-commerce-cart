import { AppBar, Toolbar, Typography, IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Import the useCart hook
import SideDrawer from "./SideDrawer";
import { useState } from "react";
import Cart from "../pages/Cart";

const Navbar = () => {
  const { getCartCount } = useCart();
  const [formOpen, setFormOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "white", flexGrow: 1 }}
          >
            EZCart
          </Typography>
          <IconButton
            color="inherit"
            component={Link}
            onClick={() => setFormOpen(true)}
          >
            <Badge badgeContent={getCartCount()} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideDrawer title="Your Cart" open={formOpen} setOpen={setFormOpen}>
        <Cart setFormOpen={setFormOpen} />
      </SideDrawer>
    </>
  );
};

export default Navbar;
