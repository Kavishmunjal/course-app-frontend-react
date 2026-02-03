import { useState } from 'react'
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import { Topbar } from './components/topbar'


function App() {

  return (
    <>
    
    <BrowserRouter >
    <Topbar/>
    </BrowserRouter>
    </>
  )
}

// function opbar() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "10px 10px",
//         background: "pink",
//         width: "99%",
//       }}
//     >

//       <div>
//         <img
//           style={{ height: "50px" }}
//           src=""
//           alt="logo"
//         />
//       </div>

  
//       <div
//         style={{
//           display: "flex",
//           gap: "100px",
//          cursor: "pointer",
//          marginRight:"80px"
//         }}
//       >
//         <h3>Home</h3>
//         <h3>Courses</h3>
//         <h3>Purchases</h3>
//         <h3>Profile</h3>
//       </div>
//     </div>
//   );
// }


export default App
