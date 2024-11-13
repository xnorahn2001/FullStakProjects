import React from 'react';
import { Container, Typography, Box, Card, CardContent, Grid, Button, Avatar } from '@mui/material';
import { styled } from '@mui/system';

// استخدام الأنماط المخصصة باستخدام styled
const Root = styled('div')({
  backgroundColor: '#f0f4f7', // خلفية اللون تتناسب مع الخلفية التي قدمتها
  padding: '40px 20px',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const CardStyled = styled(Card)({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
});

const AvatarStyled = styled(Avatar)({
  width: 80,
  height: 80,
  marginBottom: 16,
});

const ButtonStyled = styled(Button)({
  marginTop: '20px',
  backgroundColor: '#4CAF50', // لون الزر
  '&:hover': {
    backgroundColor: '#45a049',
  },
});

const AboutPage = () => {
  return (
    <Root>
      <Container maxWidth="md">
        <Typography variant="h3" align="center" gutterBottom>
          About Visionary Lenses
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph>
            To empower individuals by enhancing their visual experience through high-quality, stylish eyewear that meets both functional and aesthetic needs. We strive to provide eyewear options that cater to diverse preferences, including innovative solutions for color blindness, making the world of colors accessible to all.
          </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Our Values
          </Typography>
          <ul>
            <li><Typography variant="body1">Quality & Excellence: We are committed to offering premium eyewear crafted with precision, ensuring durability, comfort, and outstanding visual clarity.</Typography></li>
            <li><Typography variant="body1">Inclusivity & Accessibility: Our goal is to serve a wide range of visual needs, offering inclusive options for those with unique vision challenges, including color blindness, to see the world in its true colors.</Typography></li>
            <li><Typography variant="body1">Innovation: We continuously seek the latest advancements in eyewear technology and design to offer our customers solutions that align with modern standards of fashion and function.</Typography></li>
            <li><Typography variant="body1">Customer-Centric Approach: Our customers' satisfaction is at the heart of our business. We prioritize their preferences, providing exceptional service and support to ensure a smooth shopping experience.</Typography></li>
            <li><Typography variant="body1">Sustainability: We believe in responsible sourcing and sustainable practices, from the materials used to the production processes, to minimize our impact on the environment.</Typography></li>
          </ul>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Meet Our Team
          </Typography>
          <Grid container spacing={3}>
            {/* Front-End Developer Card */}
            <Grid item xs={12} sm={6} md={4}>
              <CardStyled>
                <CardContent>
                  <AvatarStyled
                    src="https://i.pinimg.com/736x/74/6d/5a/746d5a2c2b2a4d80ee1b54da38082031.jpg" // أيقونة الشخصية
                    alt="Norah Naif Aljbreen"
                  />
                  <Typography variant="h6" align="center">Front-End Developer</Typography>
                  <Typography variant="body1" align="center">Name: Norah Naif Aljbreen</Typography>
                  <Typography variant="body2" align="center">Role: Designed and developed the user interface for a seamless shopping experience.</Typography>
                </CardContent>
              </CardStyled>
            </Grid>

            {/* Back-End Developer 1 Card */}
            <Grid item xs={12} sm={6} md={4}>
              <CardStyled>
                <CardContent>
                  <AvatarStyled
                    src="https://i.pinimg.com/736x/74/6d/5a/746d5a2c2b2a4d80ee1b54da38082031.jpg" // أيقونة الشخصية
                    alt="Ghadah Aljohani"
                  />
                  <Typography variant="h6" align="center">Back-End Developer</Typography>
                  <Typography variant="body1" align="center">Name: Ghadah Aljohani</Typography>
                  <Typography variant="body2" align="center">Role: Developed the backend architecture, ensuring smooth transactions and secure user data.</Typography>
                </CardContent>
              </CardStyled>
            </Grid>

            {/* Back-End Developer 2 Card */}
            <Grid item xs={12} sm={6} md={4}>
              <CardStyled>
                <CardContent>
                  <AvatarStyled
                    src="https://i.pinimg.com/736x/74/6d/5a/746d5a2c2b2a4d80ee1b54da38082031.jpg" // أيقونة الشخصية
                    alt="Safaa AlOtaibi"
                  />
                  <Typography variant="h6" align="center">Back-End Developer</Typography>
                  <Typography variant="body1" align="center">Name: Safaa AlOtaibi</Typography>
                  <Typography variant="body2" align="center">Role: Developed the backend system for secure and efficient user interactions.</Typography>
                </CardContent>
              </CardStyled>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Project Leads
          </Typography>
          <ul>
            <li><Typography variant="body1">Anisul: Project Lead and Technical Advisor</Typography></li>
            <li><Typography variant="body1">Thoa: Project Manager and Coordinator</Typography></li>
          </ul>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Thank You for Visiting!
          </Typography>
          <Typography variant="body1" paragraph>
            Thank you for exploring Visionary Lenses! We hope you found the perfect eyewear that enhances your visual experience. Your satisfaction is our top priority, and we are dedicated to providing you with the best products and customer service. Should you have any questions or need assistance, feel free to reach out. We look forward to serving you again!
          </Typography>
          <ButtonStyled variant="contained" fullWidth>
            Go to Home Page
          </ButtonStyled>
        </Box>
      </Container>
    </Root>
  );
};

export default AboutPage;
