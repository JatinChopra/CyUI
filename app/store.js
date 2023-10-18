import { configureStore } from "@reduxjs/toolkit";

import vulnerabilitiesSlice from "../UI/PanelNavigator/Vulnerability/slices/vulnerabilitiesSlice";
import tabsSlice from "../UI/PanelNavigator/Vulnerability/slices/tabsSlice";
import filterSlice from "../UI/PanelNavigator/Vulnerability/slices/filterSlice";
import searchSlice from "../UI/PanelNavigator/Vulnerability/slices/searchSlice";

export default configureStore({
  reducer: {
    vulnerabilities: vulnerabilitiesSlice,
    tabs: tabsSlice,
    filters: filterSlice,
    search: searchSlice,
  },
});
