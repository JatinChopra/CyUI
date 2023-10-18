import React from "react";

import { Box, Typography } from "@mui/material";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";

const IconWithText = ({ icon, text }) => {
  return (
    <div className="mb-4 text-center hover:text-white">
      {icon}
      <Typography className="text-gray-400 mt-2 text-md hover:text-white">
        {text}
      </Typography>
    </div>
  );
};

const iconData = [
  {
    icon: <DashboardOutlinedIcon className="text-2xl text-gray-400" />,
    text: "Dashboard",
  },
  {
    icon: <GroupsOutlinedIcon className="text-3xl text-gray-400" />,
    text: "Groups",
  },
  {
    icon: <DescriptionOutlinedIcon className="text-3xl text-gray-400" />,
    text: "Description",
  },
  {
    icon: <BusinessOutlinedIcon className="text-3xl text-gray-400" />,
    text: "Business",
  },
];

export const Sidebar = () => {
  return (
    <Box className="float-left bg-custom-two w-28 min-h-screen flex flex-col gap-12 items-center pt-28">
      {iconData.map((item, index) => {
        return <IconWithText key={index} icon={item.icon} text={item.text} />;
      })}
    </Box>
  );
};
