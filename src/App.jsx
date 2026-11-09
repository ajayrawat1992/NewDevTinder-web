
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Login from './components/Login'
import Profile from './components/Profile'
import Footer from './components/Footer'
import ErrorPage from './components/ErrorPage'
import { Provider } from 'react-redux'
import appStore from './utils/AppStore'
import Feed from './components/Feed'
import Connections from './components/Connections'

function App() {
  
const appRouter=createBrowserRouter([
{
path:'/',
element: <Body/>,
children:[
  {
    path:'/',
    element:<Feed/>
  },
 {
  path:'/login',
  element:<Login/>
 },
 {
  path:'/profile',
  element:<Profile/>
 },
 {
  path:'/connections',
  element:<Connections/>
 },
 
],
errorElement: <ErrorPage/>,
}])


  return (
    <Provider store={appStore}>
    
      
      <RouterProvider router={appRouter}/>
      
    
    </Provider>
  )
}

export default App
