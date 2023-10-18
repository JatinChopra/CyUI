import React, { useState } from "react";

import { Box, Typography, Button } from "@mui/material";

import { Vulnerability } from "./Vulnerability/Vulnerability";
import zIndex from "@mui/material/styles/zIndex";

const tabButtons = ["Home", "Vulnerabilities", "Report"];

const ActiveTab = ({ text, index, setActiveButton }) => {
  return (
    <Button
      // style={{ textTransform: "capitalize" }}
      variant="text"
      sx={{
        backgroundColor: "#404246",
        "&:hover": {
          backgroundColor: "#404246 !important",
        },
      }}
      className="px-14 text-white border-solid border-2 rounded-lg  border-gray-200  font-bold text-lg capitalize "
      size="large"
      onClick={() => {
        setActiveButton(index);
      }}
    >
      {text}
    </Button>
  );
};

const NormalTab = ({ text, index, setActiveButton }) => {
  return (
    <Button
      sx={{
        "&:hover": {
          backgroundColor: "#404246 !important",
        },
      }}
      size="large"
      className="px-14 text-[#97999B] border-solid rounded-lg hover:text-white  text-lg capitalize"
      onClick={() => {
        setActiveButton(index);
      }}
    >
      {text}
    </Button>
  );
};

export const PanelNavigator = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    // center box
    <Box className="w-full flex justify-center">
      {/* main box */}
      <Box
        sx={{ height: "" }}
        className=" w-5/6 bg-custom-two rounded-md mt-10 mb-10"
      >
        {/* Header tabs */}
        <Box className="flex  gap-0 h-16 items-center drop-shadow-2xl  border-b-2 border-solid border-[#23272B]">
          {tabButtons.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {activeButton == index ? (
                  <ActiveTab
                    text={item}
                    index={index}
                    setActiveButton={setActiveButton}
                  />
                ) : (
                  <NormalTab
                    text={item}
                    index={index}
                    setActiveButton={setActiveButton}
                  />
                )}
              </React.Fragment>
            );
          })}
        </Box>
        {/* Content Section */}
        {activeButton == 0 ? <>One</> : <></>}
        {activeButton == 1 ? <Vulnerability /> : <></>}
        {activeButton == 2 ? <>Three</> : <></>}
      </Box>
    </Box>
  );
};
