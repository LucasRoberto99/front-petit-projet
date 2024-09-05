import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <p>Home</p>
      <Link to={"/signup"}>signup</Link>
    </div>
  );
}
