import { Card } from "../comman/card";

export function Courses() {
  const courses = [
    {
      id: 1,
      title: "React Basics",
      description: "Learn React from scratch with hands-on examples",
      price: 499
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Deep dive into closures, async, and performance",
      price: 699
    },
    {
      id: 3,
      title: "MERN Stack",
      description: "Build full-stack apps using MongoDB, Express, React, Node",
      price: 999
    },
    {
        id: 5,
        title: "react native",
        description: " Learn React native",
        price: 999
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
      <h1 style={{ textAlign: "center", marginBottom: "32px" }}>
        All Courses
      </h1>

      <div
        style={{
          display: "flex",
          gap: "28px",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        {courses.map(course => (
          <Card
            key={course.id}
            title={course.title}
            description={course.description}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
}
