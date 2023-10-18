import { useState } from "react";

import Dashboard from "./Container/Dashboard";
import { Navbar, Sidebar } from "./UI/Exports";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Dashboard />
    </>
  );
}

export default App;
