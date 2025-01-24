import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const Home = () => {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center h-screen", children: [_jsxs("h2", { className: "text-5xl font-bold mb-6", children: ["\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \"\u0421\u0432\u043E\u044E \u0438\u0433\u0440\u0443\" ", _jsx(Link, { to: "/form", children: "!!!" })] }), _jsxs("div", { className: "flex gap-5", children: [_jsx(Link, { to: "/game?1", className: "px-8 py-4 bg-green-500 text-2xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition", onClick: () => {
                            window.localStorage.setItem("round", "1");
                        }, children: "1 \u0420\u0430\u0443\u043D\u0434" }), _jsx(Link, { to: "/game?2", className: "px-8 py-4 bg-green-500 text-2xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition", onClick: () => {
                            window.localStorage.setItem("round", "2");
                        }, children: "2 \u0420\u0430\u0443\u043D\u0434" }), _jsx(Link, { to: "/game?3", className: "px-8 py-4 bg-green-500 text-2xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition", onClick: () => {
                            window.localStorage.setItem("round", "3");
                        }, children: "3 \u0420\u0430\u0443\u043D\u0434" })] })] }));
};
export default Home;
