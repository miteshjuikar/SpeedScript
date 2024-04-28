import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  Link
} from 'react-router-dom'
import Home from './Components/Home'
import Layout from './Layout'
import './index.css'
import Tips from './Components/Tips'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home/>}/>
    <Route path='/dashboard' element={<h1>Dashbored Page</h1>}/>
    <Route path='/setting'  element={<h1>Setting Page</h1>}/>
    <Route path='/feedback' element={<h1>Feedback Page</h1>}/>
    <Route path='/tips' element={<Tips />}/>
    <Route path='/signUp'element={<h1>Sign up Page</h1>}/>
    <Route path='/logIn' element={<h1>Log in Page</h1>}/>
  </Route>
))

function App() {
  return(
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
