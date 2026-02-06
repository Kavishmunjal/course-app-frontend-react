import { Link } from "react-router-dom";

export function Home() {
  return (
    <div
      style={{
        height: "calc(100vh - 64px)",
        width: "100vw",
        background: "linear-gradient(135deg, #1f2933, #0f172a)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",   
        alignItems: "center",       
        textAlign: "center",
        padding: "40px",
        overflow: "hidden" 
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: "3rem",
          fontWeight: "700",
          maxWidth: "700px"
        }}
      >
        Learn Skills for Your Future
      </h1>

      <p
        style={{
          marginTop: "16px",
          color: "#cbd5e1",
          fontSize: "1.2rem",
          maxWidth: "600px",
          lineHeight: "1.6"
        }}
      >
        Choose from high-quality courses and start learning today with
        industry-ready skills.
      </p>

      <Link to="/courses">
        <button
          style={{
            marginTop: "32px",
            padding: "14px 32px",
            background: "linear-gradient(90deg, #2563eb, #3b82f6)",
            color: "white",
            border: "none",
            borderRadius: "999px",
            fontSize: "1rem",
            fontWeight: "600",
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4)"
          }}
        >
          Browse Courses →
        </button>
      </Link>
    </div>
  );
}
