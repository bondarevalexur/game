import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameBoard from "./pages/GameBoard";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import Form from "./pages/Form";
const App = () => {
    const round = window.localStorage.getItem("round");
    console.log(round);
    return (_jsxs("div", { className: "min-h-screen bg-blue-900 text-white", children: [_jsx(Header, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/game", element: _jsx(GameBoard, {}) }), _jsx(Route, { path: "/question", element: _jsx(QuestionCard, {}) }), _jsx(Route, { path: "/form", element: _jsx(Form, {}) })] })] }));
};
export default App;
