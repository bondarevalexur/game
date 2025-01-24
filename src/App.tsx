import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameBoard from "./pages/GameBoard";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import Form from "./pages/Form";

const App: React.FC = () => {
  const round = window.localStorage.getItem("round") as string;
  console.log(round);

  return (
    <div className="min-h-screen bg-blue-900 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<GameBoard />} />
        <Route path="/question" element={<QuestionCard />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
};

export default App;
