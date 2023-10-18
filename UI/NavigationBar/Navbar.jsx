import React from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Navbar = () => {
  return (
    <Box
      sx={{ zIndex: "2" }}
      className="text-white fixed bg-custom-two flex w-full items-center gap-4 px-24 h-20 "
    >
      <Typography className="text-white-600 items-center align font-extrabold text-2xl ">
        CyberSecurity
      </Typography>
    </Box>
  );
};
