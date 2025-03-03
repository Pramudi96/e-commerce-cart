import { Box, Drawer, IconButton, Typography, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

function SideDrawer({ title, children, open, setOpen, setEdit, anotherFunc }) {
  const closeDrawer = () => {
    setOpen(false);
    setEdit && setEdit(false);
    anotherFunc && anotherFunc();
  };
  const theme = useTheme();

  return (
    <Drawer anchor="right" open={open} onClose={closeDrawer}>
      <Box
        bgcolor={theme.palette.primary.main}
        color="#fff"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding={1}
        sx={{ minWidth: "auto" }}
      >
        <Typography sx={{ fontSize: "20px" }}>{title}</Typography>
        <IconButton onClick={closeDrawer} id="drawerCloseBtn">
          <CloseIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
      {children}
    </Drawer>
  );
}

SideDrawer.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setEdit: PropTypes.func,
  anotherFunc: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default SideDrawer;
