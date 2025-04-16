import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="flex text-2xl font-abeezee gap-16 pt-5 fixed top-0 w-full justify-center">
      <Link to="/">Home</Link>
      <Link to="/pokedex">Pokedex</Link>
      <Link to="/strategy">Startegy</Link>
      <Link to="/trivia">Trivia</Link>
    </div>
  );
}
