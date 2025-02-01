import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Loading } from "./components/ui/loading";
import { Providers } from "./providers";
import { routes } from "./routes";

import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <Suspense fallback={<Loading fullScreen />}>
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
        </Suspense>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
