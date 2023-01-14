import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Auth0Provider
      domain="dev-0lbn187ecpui0n18.us.auth0.com"
      clientId="xzFOr1LgM8eoZs8DqM2laN7AXVqft3il"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Router>
);

reportWebVitals();
