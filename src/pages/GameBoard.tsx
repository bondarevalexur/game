import Tile from "../components/Tile";
import { Fragment, useEffect, useState } from "react";
import { Category } from "../types";

const GameBoard: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<string | null>(null);

  const textData = window.localStorage.getItem("data");
  const round = window.localStorage.getItem("round") ?? 1;
  const data: any = textData && JSON.parse(textData);
  const dataRound: Category[] = data?.[round];

  return (
    <div className="p-8">
      <div className="grid items-center grid-cols-8 gap-8 text-center">
        {dataRound.map((category, catIdx) => (
          <Fragment key={catIdx}>
            <h3 className="text-2xl font-bold mb-4 col-start-1">
              {category.name}
            </h3>
            {category.values.map((value, valIdx) => (
              <Tile
                key={valIdx}
                value={value}
                onClick={() => {
                  window.localStorage.setItem(
                    "currentQuestion",
                    JSON.stringify({ value, category: category.name }),
                  );
                }}
              />
            ))}
          </Fragment>
        ))}
      </div>

      {selectedTile && (
        <div className="mt-8 p-4 bg-gray-700 text-xl rounded-md text-center">
          {selectedTile}
        </div>
      )}
    </div>
  );
};

export default GameBoard;
