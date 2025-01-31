import { ModeToggle } from "../ui/mode-toggle";

export const Navbar = () => {
  return (
    <nav className="px-32 flex justify-between">
      <h1>HOME</h1>
      <ModeToggle />
    </nav>
  );
};
