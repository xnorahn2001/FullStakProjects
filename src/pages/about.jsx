import React from 'react';
import { Container, Typography, Box, Avatar, Paper } from '@mui/material';
import { List, ListItem, ListItemIcon } from '@mui/material';
import { styled } from '@mui/system';
import { CheckCircle } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom align="center" color="primary">
        About Our Idea 
      </Typography>
      <Typography variant="h5" paragraph align="center" color="textSecondary">
      Visionary Lenses An e-commerce platform specializing in selling sunglasses and prescription glasses,
       including options designed for individuals with color blindness.


      </Typography>

      {/* Team Section */}
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Meet Our Team
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Avatar
              alt="Team Member"
              src="https://randomuser.me/api/portraits/men/1.jpg"
              sx={{ width: 100, height: 100, margin: '0 auto' }}
            />
            <Typography variant="h6" mt={2}>
             Norah Naif 
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Developer 
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Avatar
              alt="Team Member"
              src="https://randomuser.me/api/portraits/women/2.jpg"
              sx={{ width: 100, height: 100, margin: '0 auto' }}
            />
            <Typography variant="h6" mt={2}>
             Anisul
            </Typography>
            <Typography variant="body2" color="textSecondary">
             CEO
            </Typography>
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, md: 6, lg: 3 }}>
          <Paper elevation={3} sx={{ padding: 3, textAlign: 'center' }}>
            <Avatar
              alt="Team Member"
              src="https://randomuser.me/api/portraits/men/2.jpg"
              sx={{ width: 100, height: 100, margin: '0 auto' }}
            />
            <Typography variant="h6" mt={2}>
             Thoa
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Chief Technology Officer
            </Typography>
          </Paper>
        </Grid>

        {/* Mission & Values Section */}
        <Box sx={{ mt: 5, textAlign: 'center' }}>
          <Typography variant="h4" gutterBottom color="primary">
            Our Mission & Values
          </Typography>

          <Typography variant="h6" paragraph color="textSecondary">
          Our Mission / To empower individuals by enhancing their visual experience through
          high-quality, stylish eyewear that meets both functional and aesthetic needs. We strive to provide eyewear options that cater to diverse preferences, including innovative solutions for color blindness, making the world of colors accessible to all.
          Our Values / Quality & Excellence ,Inclusivity & Accessibility,Innovation,Customer-Centric Approach,Sustainability
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
};

export default About;