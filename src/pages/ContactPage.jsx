import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // يمكن استبداله بإرسال البيانات إلى الخادم
  };

  return (
    <Box
      sx={{
        height: '100vh', // لضبط ارتفاع الشاشة بالكامل
        backgroundImage: `url('https://i.pinimg.com/736x/a5/5f/4b/a55f4b1ce3f1857b5f199039086ab1c3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2
      }}
    >
      <Container maxWidth="sm" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ color: 'black' }}>
          Contact Us - Visionary Lenses
        </Typography>

        <form onSubmit={handleSubmit}>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              fullWidth
              label="Full Name"
              variant="outlined"
              required
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              sx={{ backgroundColor: 'white' }}
            />
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              sx={{ backgroundColor: 'white' }}
            />
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <TextField
              fullWidth
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
              sx={{ backgroundColor: 'white' }}
            />
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </Box>
        </form>

        <Box sx={{ marginTop: 4, textAlign: 'center' }}>
          <Typography variant="body1" sx={{ color: 'black' }}>Email: support@visionarylenses.com</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>Phone: +966 555 123 456</Typography>
          <Typography variant="body1" sx={{ color: 'black' }}>Riyadh, Saudi Arabia</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
