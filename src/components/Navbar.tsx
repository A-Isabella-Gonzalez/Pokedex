import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="flex text-2xl font-abeezee gap-16 pt-5 fixed top-0 w-full justify-center text-[#303030] bg-white pb-5">
      <Link to="/" className="hover:underline">
        Home
      </Link>
      <Link to="/pokedex" className="hover:underline">
        Pokedex
      </Link>
      <Link to="/strategy" className="hover:underline">
        Strategy
      </Link>
      <Link to="/trivia" className="hover:underline">
        Trivia
      </Link>
    </div>
  );
}
