import React from "react";

import { useProductContext } from "../../hooks/useProductContext ";
import { TextField, Box, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";

const Search = () => {
  const { searchTerm, setSearchTerm } = useProductContext();

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        marginBottom: 2,
        paddingRight: 2,
      }}
    >
      <TextField
        variant="outlined"
        size="small"
        placeholder="Search ..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          backgroundColor: "#1E201E", 
          color: "#ECDFCC", 
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#3C3D37", 
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#697565", 
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#697565", 
          },
          "& input": {
            color: "#ECDFCC", 
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#697565" }} />{" "}
              {/* Icon color */}
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClear} sx={{ color: "#3C3D37" }}>
                <ClearIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Search;
