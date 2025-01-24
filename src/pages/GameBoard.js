import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Tile from "../components/Tile";
import { Fragment, useState } from "react";
const GameBoard = () => {
    var _a;
    const [selectedTile, setSelectedTile] = useState(null);
    const textData = window.localStorage.getItem("data");
    const round = (_a = window.localStorage.getItem("round")) !== null && _a !== void 0 ? _a : 1;
    const data = textData && JSON.parse(textData);
    const dataRound = data === null || data === void 0 ? void 0 : data[round];
    return (_jsxs("div", { className: "p-8", children: [_jsx("div", { className: "grid items-center grid-cols-8 gap-8 text-center", children: dataRound.map((category, catIdx) => (_jsxs(Fragment, { children: [_jsx("h3", { className: "text-2xl font-bold mb-4 col-start-1", children: category.name }), category.values.map((value, valIdx) => (_jsx(Tile, { value: value, onClick: () => {
                                window.localStorage.setItem("currentQuestion", JSON.stringify({ value, category: category.name }));
                            } }, valIdx)))] }, catIdx))) }), selectedTile && (_jsx("div", { className: "mt-8 p-4 bg-gray-700 text-xl rounded-md text-center", children: selectedTile }))] }));
};
export default GameBoard;
