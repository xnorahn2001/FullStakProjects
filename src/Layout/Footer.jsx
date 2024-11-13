import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#3C3D37", top: "auto", bottom: 0 }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center", color: "#ECDFCC" }}
          >
            © 2024 Norah Naif Aljbreen - Visionary Lenses -. All rights reserved.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
