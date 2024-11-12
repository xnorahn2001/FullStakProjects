import React from "react";
import { Button, Box } from "@mui/material";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginY: 2,
      }}
    >
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outlined"
        sx={{
          marginRight: 1,
          backgroundColor: currentPage === 1 ? "#B19470" : "#FEFAE0",
          color: "#76453B",
          "&:hover": {
            backgroundColor: "#76453B",
            color: "#FEFAE0",
          },
          padding: "2px 4px", 
          fontSize: "0.75rem", 
        }}
      >
        Previous
      </Button>

      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          onClick={() => onPageChange(index + 1)}
          variant={currentPage === index + 1 ? "contained" : "outlined"}
          sx={{
            margin: 0.5,
            backgroundColor: currentPage === index + 1 ? "#5F6F52" : "#FEFAE0",
            color: currentPage === index + 1 ? "#FEFAE0" : "#76453B",
            "&:hover": {
              backgroundColor:
                currentPage === index + 1 ? "#5F6F52" : "#B19470",
              color: currentPage === index + 1 ? "#FEFAE0" : "#76453B",
            },
            padding: "2px 4px", 
            fontSize: "0.75rem",
          }}
        >
          {index + 1}
        </Button>
      ))}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || totalPages === 0}
        variant="outlined"
        sx={{
          marginLeft: 1,
          backgroundColor: currentPage === totalPages ? "#B19470" : "#FEFAE0",
          color: "#76453B",
          "&:hover": {
            backgroundColor: "#76453B",
            color: "#FEFAE0",
          },
          padding: "2px 4px", 
          fontSize: "0.75rem", 
        }}
      >
        Next
      </Button>
    </Box>
  );
};

export default Pagination;