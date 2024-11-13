import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { AppBar, Box, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#1E201E", 0.15),
  "&:hover": { backgroundColor: alpha("#1E201E", 0.25) },
  marginRight: theme.spacing(2),
  width: "100%",
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(3), width: "auto" },
}));

const StyledInputBase = styled("input")(({ theme }) => ({
  color: "#ECDFCC",
  padding: theme.spacing(1),
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  fontSize: "inherit",
  "&::placeholder": {
    color: "#ECDFCC",
  },
}));

// Pages for navigation
const pages = ["homepage", "products", "about", "contact"];

export default function PrimarySearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#3C3D37" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, color: "#ECDFCC" }}
          >
            Visionary Lenses
          </Typography>

          {/* Page Links */}
          <Box sx={{ flexGrow: 1 }}>
            {pages.map((page) => (
              <Link
                to={page === "homepage" ? "/" : `/${page}`} // Link to homepage uses "/"
                key={page}
                style={{ textDecoration: "none", color: "#ECDFCC" }}
              >
                <Button color="inherit">
                  {page.charAt(0).toUpperCase() + page.slice(1)}
                </Button> {/* Capitalize page name */}
              </Link>
            ))}
          </Box>

          {/* Shopping Cart Icon */}
          <IconButton 
            color="inherit" 
            component={Link} 
            to="/cart" 
            sx={{
              ml: 2,
              transition: "all 0.3s ease", 
              '&:hover': {
                transform: 'scale(1.1)', 
                color: "#FFD700", 
              }
            }}
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
