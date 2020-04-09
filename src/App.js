import React from 'react';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"
import Content from "./containers/Content"

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
