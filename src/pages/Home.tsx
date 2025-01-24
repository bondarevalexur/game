import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-5xl font-bold mb-6">
        Добро пожаловать в "Свою игру" <Link to="/form">!!!</Link>
      </h2>

      <div className="flex gap-5">
        <Link
          to="/game?1"
          className="px-8 py-4 bg-green-500 text-2xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition"
          onClick={() => {
            window.localStorage.setItem("round", "1");
          }}
        >
          1 Раунд
        </Link>
        <Link
          to="/game?2"
          className="px-8 py-4 bg-green-500 text-2xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition"
          onClick={() => {
            window.localStorage.setItem("round", "2");
          }}
        >
          2 Раунд
        </Link>
        <Link
          to="/game?3"
          className="px-8 py-4 bg-green-500 text-2xl font-bold rounded-lg shadow-lg hover:bg-green-600 transition"
          onClick={() => {
            window.localStorage.setItem("round", "3");
          }}
        >
          3 Раунд
        </Link>
      </div>
    </div>
  );
};

export default Home;
