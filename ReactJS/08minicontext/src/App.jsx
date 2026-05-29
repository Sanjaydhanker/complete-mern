import Card from "./components/Card";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <div className="w-full h-screen bg-gray-500 flex flex-wrap items-center justify-center gap-4">
          <Card />
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </>
  );
}

export default App;
