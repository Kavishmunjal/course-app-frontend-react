export function Card({ title, description, price }) {
    return (
      <div
        style={{
          width: "260px",
          backgroundColor: "#1e293b",
          border: "1px solid #334155",    
          borderRadius: "12px",
          padding: "20px",
          color: "white",
          boxShadow: "0 8px 20px rgba(0,0,0,0.4)"
        }}
      >
        <h3>{title}</h3>
  
        <p style={{ color: "#cbd5e1", margin: "10px 0" }}>
          {description}
        </p>
  
        <p style={{ fontWeight: "600" }}>₹{price}</p>
      </div>
    );
  }
  