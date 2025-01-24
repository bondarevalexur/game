import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
    const { search } = useLocation();
    return (_jsxs("header", { className: "bg-blue-700 p-4 shadow-md text-center", children: [_jsx(Link, { to: "/", className: "px-4 hover:text-yellow-400", children: _jsx("h1", { className: "text-8xl font-bold", children: "\u0421\u0432\u043E\u044F \u0438\u0433\u0440\u0430" }) }), _jsx("nav", { className: "mt-2 mb-2", children: _jsx(Link, { to: "/game", className: "px-4 text-5xl hover:text-yellow-400", children: "\u0412\u041E\u041F\u0420\u041E\u0421\u042B" }) }), _jsxs("h3", { className: "text-3xl", children: ["\u0420\u0410\u0423\u041D\u0414 ", search.replace("?", "")] })] }));
};
export default Header;
