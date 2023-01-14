import { useState } from "react";
import LoginPage from "./pages/Loginpage/index";
import Homepage from "./pages/home/index";

function App() {
  const [route, setRoute] = useState(false);
  const [user, setUser] = useState();
  const handleChange = (newValue) => {
    setRoute(newValue);
  };
  const handleUserInfo = (newValue) => {
    setUser(newValue);
  };

  return (
    <div>
      {route ? (
        <Homepage userInfo={user} />
      ) : (
        <LoginPage isAuth={handleChange} userInfo={handleUserInfo} />
      )}
    </div>
  );
}

export default App;
