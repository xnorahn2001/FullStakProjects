import React from 'react';
import { Box, Container, Link, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 4, mt: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Typography variant="h6" gutterBottom>
              About Visionary Lenses
            </Typography>
            <Typography variant="body2">
              We are a e-commerce platform called "Visionary Lenses"specializing in selling sunglasses and prescription glasses,
               including options designed for individuals with color blindness.


            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Typography variant="h6" gutterBottom>
              Contact with us ..
            </Typography>
            <Typography variant="body2">
              Email: support@VisionaryLenses.com
            </Typography>
            <Typography variant="body2">Phone: +966 (055) 1234-6789</Typography>
            <Typography variant="body2">
              Location: Visionary Lenses SA,Riyadh 
            </Typography>
          </Grid>

          {/* Social Media Links Section */}
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <Link
                href="https://twitter.com"
                color="inherit"
                underline="hover"
                target="_blank"
                rel="noopener"
                sx={{ pr: 2 }}
              >
                Twitter
              </Link>
              <Link
                href="https://instagram.com"
                color="inherit"
                underline="hover"
                target="_blank"
                rel="noopener"
              >
                Instagram
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ textAlign: 'center', mt: 3 }}>
          <Typography variant="body2" color="textSecondary">
            {'© '}
            Visionary Lenses{new Date().getFullYear()} | All rights reserved for Norah Aljbreen
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;