import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navbar = () => {
  return (
    <nav>
      <Button
        variant="contained"
        style={{
          margin: 10,
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Home
        </Link>
      </Button>

      <Button
        variant="contained"
        style={{
          margin: 10,
        }}
      >
        <Link
          to="/register"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Student register
        </Link>
      </Button>
      <Button
        variant="contained"
        style={{
          margin: 10,
        }}
      >
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Login
        </Link>
      </Button>
      <Button
        variant="contained"
        style={{
          margin: 10,
        }}
      >
        <Link
          to="/tutor-register"
          style={{
            textDecoration: "none",
            color: "white",
          }}
        >
          Join as Tutor
        </Link>
      </Button>
    </nav>
  );
};
export default Navbar;
