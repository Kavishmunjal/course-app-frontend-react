import { Link, NavLink } from "react-router-dom";

export function Topbar() {
  return (
    <header
      style={{
        height: "64px",                 
        width: "100%",
        backgroundColor: " #1f2933",
        borderBottom: "1px solid #2f3b3b",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 32px"
        }}
      >
        {}
        <h2
          style={{
            color: "#84cdee",
            fontWeight: "700",
            letterSpacing: "0.5px",
            cursor: "pointer"
          }}
        >
          CourseApp
        </h2>

        {}
        <nav
          style={{
            display: "flex",
            gap: "36px",
            fontSize: "18px"
          }}
        >
          <NavLink to="/" style={navStyle}>Home</NavLink>
          <NavLink to="/courses" style={navStyle}>Courses</NavLink>
          <NavLink to="/purchases" style={navStyle}>Purchases</NavLink>
          <NavLink to="/profile" style={navStyle}>Profile</NavLink>
        </nav>
      </div>
    </header>
  );
}

const navStyle = ({ isActive }) => ({
  textDecoration: "none",
  color: isActive ? "#84cdee" : "#e5e7eb",
  fontWeight: "500",
  paddingBottom: "4px",
  borderBottom: isActive ? "2px solid #84cdee" : "2px solid transparent",
  transition: "all 0.2s ease"
});
