import React from "react";

import { useProductContext } from "../../hooks/useProductContext ";
import { FormControl, InputLabel, Select, MenuItem, Box } from "@mui/material";

const Sorting = () => {
  const { sortBy, setSortBy, setSortOrder, sortOrder } = useProductContext();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: 2,
        marginBottom: 2,
      }}
    >
      <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
        <InputLabel id="sort-by-label" sx={{ color: "#FEFAE0" }}>
          Sort By
        </InputLabel>
        <Select
          labelId="sort-by-label"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          label="Sort By"
          sx={{
            backgroundColor: "#5F6F52", // Darker background for the select
            color: "#FEFAE0", // Light text color
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FEFAE0", // Border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FEFAE0", // Border color on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FEFAE0", // Border color when focused
            },
          }}
        >
          <MenuItem value="name" sx={{ color: "#5F6F52" }}>
            Name
          </MenuItem>
          <MenuItem value="price" sx={{ color: "#5F6F52" }}>
            Price
          </MenuItem>
        </Select>
      </FormControl>

      <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
        <InputLabel id="sort-order-label" sx={{ color: "#FEFAE0" }}>
          Order
        </InputLabel>
        <Select
          labelId="sort-order-label"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          label="Order"
          sx={{
            backgroundColor: "#5F6F52", // Darker background for the select
            color: "#FEFAE0", // Light text color
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FEFAE0", // Border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FEFAE0", // Border color on hover
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#FEFAE0", // Border color when focused
            },
          }}
        >
          <MenuItem value="asc" sx={{ color: "#A6AEBF" }}>
            Ascending
          </MenuItem>
          <MenuItem value="desc" sx={{ color: "#C5D3E8" }}>
            Descending
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Sorting;