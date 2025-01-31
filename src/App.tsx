import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Providers } from "./providers";
import { routes } from "./routes";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
              index={route.index}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
