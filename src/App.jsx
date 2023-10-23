import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
