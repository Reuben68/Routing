import React, { useEffect, useState } from 'react'
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.min.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import About from './Comonent/About';
import Services from './Compp.js/Services';
// import Home from './Comonent/Home';
import Contacts from './Compp.js/Contacts';
import Login from './Compp.js/Login';
import Signup from './Compp.js/Signup';
import Nav from './Compp.js/Nav';

function App() {

  const [content, setContent] = useState()
  const [users, setUsers] = useState([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    getContent()
  }, [])

  useEffect(() => {

    getUsers()
  }, [])

  const getContent = async () => {
    const response = await axios.get('http://localhost:3000/');
    setContent(response.data);
  }

  const getUsers  = async () => {
    const response = await axios.get('http://localhost:3000/users')
    setUsers(response.data)
  }

  const listUsers = users.map(item => {
    return(
      <tbody key={item.id}>
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      </tbody>
    )
  })

  return (
    <div className='container'>
      <BrowserRouter>
      <Nav setOpenModal={setOpenModal}/>
   
      <Login />
        <Routes>
          {/* <Route path='/' element={<Home />}/> */}
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/services' element={<Services />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <h1>Data</h1>
      <p>{content}</p>

      <table>
          {listUsers}
      </table>
    </div>
  )
}

export default App



// import React, { useEffect, useState } from 'react'
// import axios from "axios";

// import 'bootstrap/dist/css/bootstrap.min.css'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Navigation from './Comonent/Navigations';
// import Homes from './Comonent/Homes';
// import Abouts from './Comonent/Abouts';
// import Services from './Comonent/Services';
// import Blog from './Comonent/Blog';

// function App() {

//   const [content, setContent] = useState()
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     getContent()
//   }, [])

//   useEffect(() => {
//     getUsers()
//   }, [])

//   const getContent = async () => {
//     const response = await axios.get('http://localhost:3000/');
//     setContent(response.data);
//   }

//   const getUsers  = async () => {
//     const response = await axios.get('http://localhost:3000/users')
//     setUsers(response.data)
//   }

//   const listUsers = users.map(item => {
//     return(
//       <tbody key={item.id}>
//         <tr>
//           <td>{item.id}</td>
//           <td>{item.name}</td>
//           <td>{item.age}</td>
//         </tr>
//       </tbody>
//     )
//   })

//   return (
//     <div className='container'>
//       <BrowserRouter>
//      <Navigation/>
//         <Routes>
//         <Route path='/' element={<Homes/>} />
//         <Route path='/Abouts' element={<Abouts/>} />
//         <Route path='/Services' element={<Services/>} />
//         <Route path='/Blog' element={<Blog/>} />
//         </Routes>
//       </BrowserRouter>
//       {/* <p>{content}</p> */}

//       <table>
//           {listUsers}
//       </table>
//     </div>
//   )
// }

// export default App

// function App() {
//   return (
    
// <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }
// export default App;
