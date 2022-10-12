import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Mian from './layouts/Main/Mian';

function App() {
const router=createBrowserRouter([
  {
    path:'/',
    element:<Mian></Mian>,
    children:[
      {
        path:'/',
          loader:async ()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz');
         },
        element:<Home></Home>
      },
      {
        path:'/quiz/:id',
        loader: async({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`) 
        },
        element:<Quiz></Quiz>
      },
      {
        path:'/statistics',
        loader:async ()=>{
          return fetch('https://openapi.programming-hero.com/api/quiz');
         },
        element:<Statistics></Statistics>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }, 
    ]
  },
  {
    path:'/*',
    element:<Error></Error>
  }
])
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
