import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { search } = useLocation();
  return (
    <header className="bg-blue-700 p-4 shadow-md text-center">
      <Link to="/" className="px-4 hover:text-yellow-400">
        <h1 className="text-8xl font-bold">Своя игра</h1>
      </Link>
      <nav className="mt-2 mb-2">
        <Link to="/game" className="px-4 text-5xl hover:text-yellow-400">
          ВОПРОСЫ
        </Link>
      </nav>

      <h3 className="text-3xl">РАУНД {search.replace("?", "")}</h3>
    </header>
  );
};

export default Header;
