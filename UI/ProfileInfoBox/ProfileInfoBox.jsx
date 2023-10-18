import React from "react";

import { Box, Typography, Button, Link } from "@mui/material";

export const ProfileInfoBox = () => {
  return (
    <Box className="w-full flex justify-center">
      <Box
        sx={{ width: "83%", height: "180px" }}
        className=" bg-custom-two  rounded-md flex justify-between"
      >
        <div className="flex">
          <Box className="w-[180px] flex justify-center">
            <img
              src="https://picsum.photos/200"
              className="rounded-full h-24 w-24 mt-5"
            />
          </Box>
          <Box className="flex-col">
            <div>
              <Typography className="mt-5 text-2xl font-bold">
                Target Name
              </Typography>
              <div>
                <Link
                  underline="none"
                  href="http://google.com"
                  className="font-bold"
                >
                  www.domain.com
                </Link>
              </div>
            </div>

            <Button
              variant="contained"
              className="mt-10 bg-teal-700 capitalize text-lg font-bold"
              size="large"
            >
              Website
            </Button>
          </Box>
        </div>
        <div className="flex">
          <Box className=" flex flex-col justify-between">
            <div> </div>
            <div className="mb-3">18-10-23, 15:08:00</div>
          </Box>
          <Box className="flex justify-center items-center rounded-md">
            <img
              src="http://picsum.photos/250"
              className="h-[90%] w-[90%] rounded-md"
            />
          </Box>
        </div>
      </Box>
    </Box>
  );
};
