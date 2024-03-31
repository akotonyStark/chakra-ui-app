

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import RootLayout from './layouts/RootLayout'
import Dashboard, { tasksLoader } from './pages/Dashboard'
import Create from './pages/Create'
import Profile from './pages/Profile'
import Practise from './pages/Practise'
import GridLayout from './pages/GridLayout'
import Typography from './pages/Typography'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
       <Route index element={<Dashboard/>} loader={tasksLoader}/>
       <Route path="create" element={<Create />} />
       <Route path="profile" element={<Profile />} />
       <Route path="practise" element={<Practise />} />

       <Route path="grid-layout" element={<GridLayout />} />
       <Route path="typography" element={<Typography />} />
    </Route>
  )
)

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
