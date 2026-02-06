export function Purchases() {

    const purchasedCourses = [
      {
        id: 1,
        title: "React Basics",
        price: 499
      },
      {
        id: 2,
        title: "Advanced JavaScript",
        price: 699
      }
    ];
  
    return (
      <div
        style={{
          minHeight: "calc(100vh - 64px)", 
          backgroundColor: "#0f172a",
          padding: "40px",
        color: "white"
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        My Purchases
      </h1>

      {purchasedCourses.length === 0 ? (
        <p style={{ textAlign: "center", color: "#cbd5e1" }}>
          You have not purchased any courses yet.
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap"
          }}
        >
          {purchasedCourses.map(course => (
            <div
              key={course.id}
              style={{
                backgroundColor: "#1e293b",
                borderRadius: "10px",
                padding: "20px",
                width: "260px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
              }}
            >
              <h3>{course.title}</h3>
              <p style={{ margin: "10px 0", color: "#cbd5e1" }}>
                Price: ₹{course.price}
              </p>

              <button
                style={{
                  marginTop: "10px",
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#2563eb",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}
              >
                Continue Learning
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

  