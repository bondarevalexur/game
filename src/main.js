import { jsx as _jsx } from "react/jsx-runtime";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css"; // Важно! Убедись, что Tailwind импортирован
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsx(Router, { children: _jsx(App, {}) }));
