import { useState } from "react";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import SideBar from "./components/SideBar";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="flex-1">
          <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </div>
        <div className="flex-7  mt-20">
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
