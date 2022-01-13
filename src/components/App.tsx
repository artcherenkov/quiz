import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import QuizPage from "../pages/QuizPage/QuizPage";

const App = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/quiz" element={<QuizPage />} />
  </Routes>
);

export default App;
