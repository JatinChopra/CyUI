import React from "react";

import MarkdownViewer from "./MarkdownViewer";

import { Box, Typography, Stack, Button } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { styled } from "@mui/material/styles";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const Report = () => {
  const dragOverHandler = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
  };

  const dropHandler = (ev) => {
    console.log("File(s) dropped");

    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  };

  return (
    <>
      <Box className="w-full flex justify-center gap-5  h-[100%]">
        {/**Left Box */}
        <Box
          sx={{ width: "68%" }}
          className=" mb-10 bg-custom-two  rounded-md justify-between"
        >
          {/* Header */}
          <Box
            direction="row"
            className="flex py-5 pl-5 gap-5 border-b-[2px] border-[#404246] mx-8"
          >
            <Typography className="text-lg bg-[#50B29C] p-2 rounded-lg font-bold">
              #A1234
            </Typography>
            <Typography className="font-bold text-lg p-2">
              Asset Name
            </Typography>
            <Typography className="font-bold text-lg p-2">URL</Typography>
          </Box>
          {/* Accordion */}
          <Box className=" h-2 relative">
            <Accordion
              sx={{ boxShadow: "none" }}
              className="bg-[#282D31] text-white   border-b-[0px] border-[#404246] "
            >
              <AccordionSummary
                className="  border-b-[20px] border-[#404246] mr-5"
                expandIcon={<ExpandMoreIcon className="text-white " />}
              >
                {/* Image , Reporter's Name , submitted to  Compnay Name */}
                <Box direction="row" className="flex ml-6 gap-5 ">
                  <img
                    src="https://picsum.photos/200"
                    className="h-[60px] w-[60px] rounded-full"
                  />
                  <Typography className="font-bold text-xl pt-4">
                    Tina Verma
                  </Typography>
                  <Box className="mt-2 bg-[#404246] rounded-full px-4 h-10">
                    <Typography className="mt-[7px] text-lg ">
                      Company name
                    </Typography>
                  </Box>
                  <Typography className=" text-lg pt-4">
                    {" "}
                    submitted report to{" "}
                  </Typography>

                  <Box className="mt-2 bg-[#404246] rounded-full px-4 h-10">
                    <Typography className="mt-[7px] text-lg ">
                      Company name
                    </Typography>
                  </Box>
                </Box>
                <Box className="italic text-sm mr-[-18px] ml-auto mt-[42px] text-gray-200">
                  June 23, 2022(10 months ago)
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                {/* markdown */}
                <Box className="px-10 pt-5 ml-16 mb-10">
                  <MarkdownViewer />
                </Box>
              </AccordionDetails>
            </Accordion>

            {/** After report */}
            <Box className="bg-custom-two rounded-b-md mb-[100px] mt-[-16px] pt-5 pb-10 px-8">
              {/* Image , Reporter's Name , submitted to  Compnay Name */}
              <Box className=" border-t-[2px] border-[#404246]  py-5">
                <Box direction="row" className="flex ml-2 gap-5 ">
                  <img
                    src="https://picsum.photos/200"
                    className="h-[60px] w-[60px] rounded-full"
                  />
                  <Typography className="font-bold text-xl pt-4">
                    Neha Bansal
                  </Typography>
                  <Box className="mt-2 bg-[#404246] rounded-full px-4 h-10">
                    <Typography className="mt-[7px] text-lg ">
                      Company name
                    </Typography>
                  </Box>
                  <Typography className=" text-lg pt-4">
                    {" "}
                    changed the status to{" "}
                  </Typography>

                  <Box className="mt-2 bg-[#E32273] rounded-lg px-4 h-10">
                    <Typography className="mt-[7px] text-lg ">
                      Triaged
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* Status changed .... stufff */}

              {/* Comment section  */}

              <Box className=" border-t-[2px]  border-[#404246]  py-5">
                <Box direction="row" className="flex ml-2 gap-5 ">
                  <img
                    src="https://picsum.photos/200"
                    className="h-[60px] w-[60px] rounded-full"
                  />
                  <Box className="w-full">
                    <BaseTextareaAutosize
                      className="w-full mr-4 bg-[#484C50] p-4 rounded-t-lg"
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="Add a comment"
                    />
                    <Box className="bg-[#37393D] mt-[-3px]  rounded-b-lg">
                      <Button
                        size="large"
                        className="capitalize w-[100px] text-white font-bold text-md border-r-[1px] border-[#484C50] border-solid rounded-r-none"
                      >
                        Write
                      </Button>
                      <Button
                        size="large"
                        className="capitalize text-white  text-md w-[100px] rounded-r-none"
                      >
                        Preview
                      </Button>
                      <Button
                        size="large"
                        className="float-right capitalize font-bold text-md rounded-r-none"
                      >
                        Change Status
                      </Button>
                    </Box>

                    {/* Drag and Drop file */}
                    <Typography className="text-lg mt-4">
                      Upload File
                    </Typography>
                    <Box
                      className="bg-[#484C50] h-[100px] border-dashed border-gray-400 border-[2px] rounded-md flex justify-center items-center"
                      onDrop={(ev) => {
                        dropHandler(ev);
                      }}
                      onDragOver={(ev) => {
                        dragOverHandler(ev);
                      }}
                    >
                      <Typography>
                        Drag & drop your file or{" "}
                        <Button component="label">
                          Browse files from your computer (250MB per file)
                          <VisuallyHiddenInput type="file" />
                        </Button>
                      </Typography>
                    </Box>
                    <Button
                      size="large"
                      className="text-xl font-bold mt-5 w-[200px] capitalize bg-blue-600"
                      variant="contained"
                    >
                      Post
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Attached files  */}
        </Box>

        {/* ======================================================================================== */}
        {/* Right Side Bar */}

        {/* <div className="w-[27%]  bg-cyan-500 h-[90%]">ad</div> */}
        <Box
          sx={{ width: "27%" }}
          className=" bg-custom-two  rounded-md flex justify-between h-[95%]"
        >
          <Box className="w-full">
            <Box className=" w-full flex justify-between  p-5">
              <Box>Reported june 23,2022</Box>
              <Typography>8:15am</Typography>
            </Box>

            <Box className="flex px-5 gap-8">
              <img
                src="https://picsum.photos/200"
                className="h-[60px] w-[60px] rounded-full"
              />
              <Typography className="font-bold text-xl pt-4">
                Tina Verma
              </Typography>
            </Box>
            <Box className="px-5 py-4 mt-5 bg-[#37393D] font-extrabold text-xl">
              Participants
            </Box>
            <Box className="flex gap-5 px-5 py-5">
              {[1, 2, 3, 4].map((item) => {
                return (
                  <img
                    src="https://picsum.photos/200"
                    className="h-[60px] w-[60px] rounded-full"
                  />
                );
              })}
            </Box>

            <Box className="flex pl-5 justify-stretch ">
              <Typography className="w-[40%] text-xl font-bold py-2 ">
                State
              </Typography>
              <Box className="w-[60%]  rounded-lg px-4 h-10 ">
                <Box className="">
                  <Typography className="mt-[7px] text-lg bg-[#E32273] rounded-md w-[100px] text-center">
                    Triaged
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex pl-5 justify-stretch border-b-[1px] border-b-[#9CA3AF] pb-5">
              <Typography className="w-[40%] text-xl font-semibold py-2 ">
                Report To
              </Typography>
              <Box className="w-[60%]  rounded-lg px-4 h-10 ">
                <Box className="">
                  <Typography className="mt-[7px] text-lg  rounded-md ">
                    Company Name
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex pl-5 justify-stretch pt-5">
              <Typography className="w-[40%] text-xl font-semibold py-2 ">
                Weakness
              </Typography>
              <Box className="w-[60%]  rounded-lg px-4 h-10 ">
                <Box className="">
                  <Typography className="mt-[7px] text-lg  rounded-md ">
                    None
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="flex pl-5 justify-stretch ">
              <Typography className="w-[40%] text-xl font-semibold py-2 ">
                Severity
              </Typography>
              <Box className="w-[60%]  rounded-lg px-4 h-10 ">
                <Box className="">
                  <Typography className="mt-[7px] text-lg bg-[#EC8830] rounded-md w-[100px] text-center">
                    High
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box className="flex pl-5 justify-stretch ">
              <Typography className="w-[40%] text-xl font-semibold py-2 ">
                CVSSE Score
              </Typography>
              <Box className="w-[60%]  rounded-lg px-4 h-10 ">
                <Box className="">
                  <Typography className="mt-[7px] text-lg  rounded-md ">
                    None
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="flex pl-5 justify-stretch">
              <Typography className="w-[40%] text-xl font-semibold py-2 ">
                CVE ID
              </Typography>
              <Box className="w-[60%]  rounded-lg px-4 h-10 ">
                <Box className="">
                  <Typography className="mt-[7px] text-lg  rounded-md ">
                    None
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
