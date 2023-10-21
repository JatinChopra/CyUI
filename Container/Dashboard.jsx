import React from "react";

import { Box } from "@mui/material";
import { ProfileInfoBox } from "../UI/Exports";
import { PanelNavigator } from "../UI/Exports";
import { Report } from "../UI/Exports";

const Dashboard = () => {
  return (
    <Box className="h-screen w-100 bg-custom-one text-white pt-28  overflow-auto">
      <ProfileInfoBox />
      <PanelNavigator />
      {/* <Report /> */}
    </Box>
  );
};

export default Dashboard;
