import { LoginForm } from "./components/login";
import { Navbar } from "./components/navbar";
import { Providers } from "./providers";

function App() {
  return (
    <Providers>
      <Navbar />
      <LoginForm />
    </Providers>
  );
}

export default App;
