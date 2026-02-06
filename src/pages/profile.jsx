export  function Profile() {
    const user = {
      name: "Kavish Munjal",
      email: "kavish@example.com",
      joined: "Jan 2026",
      purchasedCourses: 3
    };
  
    return (
      <div
        style={{
          minHeight: "calc(100vh - 64px)", 
          backgroundColor: "#0f172a",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          padding: "40px"
        }}
      >
        <div
          style={{
            backgroundColor: "#1e293b",
            borderRadius: "14px",
            padding: "32px",
            width: "100%",
            maxWidth: "420px",
            textAlign: "center",
            boxShadow: "0 12px 30px rgba(0,0,0,0.4)"
          }}
        >
          
          <div
            style={{
              width: "90px",
              height: "90px",
              borderRadius: "50%",
              backgroundColor: "#334155",
              margin: "0 auto 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: "700"
            }}
          >
            {user.name.charAt(0)}
          </div>
  
          <h2>{user.name}</h2>
          <p style={{ color: "#cbd5e1", marginBottom: "20px" }}>
            {user.email}
          </p>
  
          
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "24px"
            }}
          >
        
            <div>
            <h3>{user.purchasedCourses}</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              Courses
            </p>
          </div>

          <div>
            <h3>{user.joined}</h3>
            <p style={{ color: "#94a3b8", fontSize: "14px" }}>
              Joined
            </p>
          </div>
        </div>

        
        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#ef4444",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}