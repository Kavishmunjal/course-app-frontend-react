import { Link } from "react-router-dom";

export function Topbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px 40px",
        borderBottom: "1px solid #e5e7eb",
        backgroundColor: "#232b2b",
        
      }}
    >
      
      <h2 style={{ color: "#84cdee" }}>CourseApp</h2>

      
      <div
        style={{
          display: "flex",
          gap: "50px",
          fontSize: "25px",
          color:"blue",
          
        }}
      >
        <Link style={linkStyle} to="/">Home</Link>
        <Link style={linkStyle} to="/courses">Courses</Link>
        <Link style={linkStyle} to="/purchases">Purchases</Link>
        <Link style={linkStyle} to="/profile">Profile</Link>
      </div>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "500"
};
