import "./App.css";
import Home from "./Components/Home";
import LoginView from "./Components/LoginView";
import { Switch, Route } from "react-router-dom";
import TvView from "./Components/TvView";
import MovieView from "./Components/MovieView";
import KidsView from "./Components/KidsView";
import Page404 from "./Components/Page404";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/tv">
          <TvView />
        </Route>
        <Route path="/movie">
          <MovieView />
        </Route>
        <Route path="/kids">
          <KidsView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route to="*">
          <Page404 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
