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
import { loginUser } from "../../services/UserService";
import { useNavigate } from "react-router-dom";
import { DecodeToken } from "../../utility/DecodeToken";
import { useUserContext } from "../../hooks/useUserContext";

const SigninForm = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const navigate = useNavigate();
  const { setUserLogin } = useUserContext();

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
      const loginData = await loginUser(userData);
      console.log("login data ", loginData);

      const userInfo = DecodeToken(loginData.data.token);
      console.log("user info ", userInfo);
      localStorage.setItem("user", JSON.stringify({ ...userInfo }));
      localStorage.setItem("token", JSON.stringify(loginData.data.token));
      setSnackbarMessage("Login successful!");
      setSnackbarSeverity("success");
      setUserLogin(userInfo);
      setUserData({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.error("Signin Error:", error);
      setSnackbarMessage("Login failed. Please check your credentials.");
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
          Sign In
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={2}>
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
                Sign In
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

export default SigninForm;