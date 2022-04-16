import { StrictMode, useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ThemeContext from "./ThemeContext";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div
        className="p-0 m-0"
        style={{
          background:
            "url(http://pets-images.dev-apis.com/pets/wallpaperA.jpg)",
        }}
      >
        <Suspense fallback={<h2>loading route...</h2>}>
          <BrowserRouter>
            <header
              className="w-full mb-10 text-center p-7 bg-gradient-to-b
            from-purple-400 via-pink-500 to-red-500"
            >
              <Link to="/" className="text-6xl text-white hover:text-gray-200">
                <h1 id="my-brand">Adopt me!</h1>
              </Link>
            </header>
            <Switch>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/">
                <SearchParams />
              </Route>
            </Switch>
          </BrowserRouter>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
