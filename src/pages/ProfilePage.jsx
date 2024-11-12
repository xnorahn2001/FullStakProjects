import React, { useEffect, useState } from "react"; 
import { Container, Typography, Paper, Grid, Button } from "@mui/material";
import { getSingleUser } from "../services/UserService";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user"));
    console.log("user info in profile page ", userInfo);

    if (userInfo) {
      const userId = userInfo.nameid;

      const fetchData = async () => {
        try {
          console.log("Test the user info: ", userInfo);
          console.log("Test the user id: ", userId);
          const data = await getSingleUser(userId);
          setUser(data.data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Container maxWidth="sm" sx={{ padding: "2rem", bgcolor: "#C5D3E8" }}>
      <Paper elevation={3} sx={{ padding: "2rem", borderRadius: "8px", bgcolor: "#FFFFFF" }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ color: "#3B1C32" }}>
          User Profile
        </Typography>
        {user ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: "#3B1C32" }}>Name: {user.userName}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: "#3B1C32" }}>Email: {user.email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: "#3B1C32" }}>Address: {user.address}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ color: "#3B1C32" }}>Image: {user.image}</Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{ mt: 2, bgcolor: "#A6AEBF", color: "#FFFFFF" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="h6" align="center" sx={{ color: "#3B1C32" }}>
            No user information available. Please log in.
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default ProfilePage;
