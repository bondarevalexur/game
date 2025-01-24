import { Link } from "react-router-dom";
import clsx from "clsx";

interface TileProps {
  value: any;
  onClick: () => void;
}

const Tile: React.FC<TileProps> = ({ value: { value, inGame }, onClick }) => {
  return (
    <Link
      to={"/question"}
      className={clsx(
        "bg-yellow-400  text-black text-2xl font-bold p-6 rounded-lg shadow-md cursor-pointer hover:bg-yellow-500 transition",
        { "!bg-gray-500 cursor-none pointer-events-none": inGame },
      )}
      onClick={onClick}
    >
      {value}
    </Link>
  );
};

export default Tile;
