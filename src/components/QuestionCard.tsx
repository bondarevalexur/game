import { useEffect, useState } from "react";
import { Category } from "../types";

const QuestionCard = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const textAnswerData = window.localStorage.getItem("currentQuestion");
  const answerData = textAnswerData && JSON.parse(textAnswerData);
  const value = answerData?.value;

  useEffect(() => {
    const textData = window.localStorage.getItem("data");
    const round = window.localStorage.getItem("round") ?? 1;
    const data: any = textData && JSON.parse(textData);
    const dataRound: Category[] = data?.[round];

    const row = data?.find(({ name }) => name === answerData.category);
    const cellIndex = row?.values?.findIndex(
      ({ question }) => question === value.question,
    );

    cellIndex !== undefined &&
      row &&
      row.values.splice(cellIndex, 1, { ...value, inGame: true });

    window.localStorage.setItem("data", JSON.stringify(data, undefined, 4));
  }, [value]);

  return (
    <div className="h-[calc(100vh-300px)] w-[80%] m-auto mt-10 border border-gray-300 p-5 flex items-center flex-col gap-8 justify-center rounded-lg bg-blue-500 text-white text-center font-bold">
      {value.image ? (
        <img className="h-full" src={`/${value.image}`} alt={value.question} />
      ) : (
        value.question && <p className="text-5xl">{value.question}</p>
      )}

      {showAnswer ? (
        <p
          className="text-5xl text-yellow-300 cursor-pointer"
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {value.answer}
        </p>
      ) : (
        <p
          className="text-5xl bg-yellow-300 rounded cursor-pointer h-[48px] w-1/4"
          onClick={() => setShowAnswer(!showAnswer)}
        ></p>
      )}
    </div>
  );
};

export default QuestionCard;
