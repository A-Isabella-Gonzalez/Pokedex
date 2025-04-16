import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="flex text-2xl font-abeezee justify-self-center gap-16 pt-5 ">
      <Link to="/">Home</Link>
      <Link to="/pokedex">Pokedex</Link>
      <Link to="/strategy">Startegy</Link>
      <Link to="/trivia">Trivia</Link>
    </div>
  );
}
