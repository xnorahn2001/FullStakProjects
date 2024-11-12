import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid2,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { createUser } from "../../services/UserService";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createUser(userData);
      setSnackbarMessage("User created successfully!");
      setSnackbarSeverity("success");
      setUserData({
        username: "",
        email: "",
        password: "",
      });
      navigate("/");
    } catch (error) {
      console.error("Signup Error:", error);
      setSnackbarMessage("Signup failed. Please try again.");
      setSnackbarSeverity("error");
    } finally {
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm" style={{ padding: "2rem" }}>
      <Paper elevation={3} style={{ padding: "2rem", borderRadius: "8px" }}>
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Signup
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={2}>
            <Grid2 item xs={12}>
              <TextField
                label="Username"
                name="username"
                value={userData.username}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                variant="outlined"
              />
            </Grid2>
            <Grid2 item xs={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={userData.email}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                variant="outlined"
              />
            </Grid2>
            <Grid2 item xs={12}>
              <TextField
                label="Password"
                name="password"
                type="password"
                value={userData.password}
                onChange={handleChange}
                fullWidth
                required
                margin="normal"
                variant="outlined"
              />
            </Grid2>
            <Grid2 item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "1rem" }}
              >
                Sign Up
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default SignupForm;