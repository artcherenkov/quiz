import { Switch, Route } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import QuizPage from "../pages/QuizPage/QuizPage";
import QuestionsPage from "../pages/QuestionsPage/QuestionsPage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";

const App = () => (
  <Switch>
    <Route exact path="/">
      <MainPage />
    </Route>
    <Route exact path="/quiz/:id">
      <QuizPage />
    </Route>
    <Route exact path="/questions">
      <QuestionsPage />
    </Route>
    <Route exact path="/results">
      <ResultsPage />
    </Route>
  </Switch>
);

export default App;
