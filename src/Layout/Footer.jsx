import React from "react";
import { Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container
      sx={{
        position: "absolute", // جعل الفوتر ثابتًا أسفل الصفحة
        bottom: 0, // وضعه في أسفل الصفحة
        left: 0,
        right: 0,
        backgroundColor: "#3C3D37",
        padding: 2,
        zIndex: 1200, // للتأكد من أنه في المقدمة فوق المحتوى
      }}
    >
      <Typography variant="body2" color="#ECDFCC" align="center">
        © 2024 Norah Naif Aljbreen - Visionary Lenses -. All rights reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
