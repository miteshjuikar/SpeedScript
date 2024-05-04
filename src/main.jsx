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
import LogIn from './Components/LogIn'
import SignUp from './Components/SignUp'
import Dashboard from './Components/Dashboard'
import Feedback from './Components/Feedback'
import WordRace from './Components/Games/WordRace'
import SentenceRace from './Components/Games/SentenceRace'
import { Provider } from 'react-redux'
import store from './store/store' 
import Authentication from './Components/Authentication'




const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} >
    <Route index element={<Home />}/>
    <Route element={<Authentication />} >
      <Route path='/dashboard' element={<Dashboard />}/>
    </Route>
    
    <Route path='/wordRace' element={<WordRace />}/>
    <Route path='/sentenceRace' element={<SentenceRace />}/>
    <Route path='/setting'  element={<h1>Setting Page</h1>}/>
    <Route path='/feedback' element={<Feedback />}/>
    <Route path='/tips' element={<Tips />}/>
    <Route path='/signUp'element={<SignUp /> }/>
    <Route path='/logIn' element={<LogIn />}/>
  </Route>
))

function App() {
  return(
    <RouterProvider router={router} />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
