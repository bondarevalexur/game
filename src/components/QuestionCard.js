import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
const QuestionCard = () => {
    const [showAnswer, setShowAnswer] = useState(false);
    const textAnswerData = window.localStorage.getItem("currentQuestion");
    const answerData = textAnswerData && JSON.parse(textAnswerData);
    const value = answerData === null || answerData === void 0 ? void 0 : answerData.value;
    useEffect(() => {
        var _a;
        const textData = window.localStorage.getItem("data");
        const data = textData && JSON.parse(textData);
        const row = data === null || data === void 0 ? void 0 : data.find(({ name }) => name === answerData.category);
        const cellIndex = (_a = row === null || row === void 0 ? void 0 : row.values) === null || _a === void 0 ? void 0 : _a.findIndex(({ question }) => question === value.question);
        cellIndex !== undefined &&
            row &&
            row.values.splice(cellIndex, 1, Object.assign(Object.assign({}, value), { inGame: true }));
        window.localStorage.setItem("data", JSON.stringify(data, undefined, 4));
    }, [value]);
    return (_jsxs("div", { className: "h-[calc(100vh-300px)] w-[80%] m-auto mt-10 border border-gray-300 p-5 flex items-center flex-col gap-8 justify-center rounded-lg bg-blue-500 text-white text-center font-bold", children: [value.image ? (_jsx("img", { className: "h-full", src: `/${value.image}`, alt: value.question })) : (value.question && _jsx("p", { className: "text-5xl", children: value.question })), showAnswer ? (_jsx("p", { className: "text-5xl text-yellow-300 cursor-pointer", onClick: () => setShowAnswer(!showAnswer), children: value.answer })) : (_jsx("p", { className: "text-5xl bg-yellow-300 rounded cursor-pointer h-[48px] w-1/4", onClick: () => setShowAnswer(!showAnswer) }))] }));
};
export default QuestionCard;
