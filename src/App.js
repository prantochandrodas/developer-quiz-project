import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Blogs from './Blogs/Blogs';
import Quiz from './component/Quiz/Quiz';

function App() {
  const router=createBrowserRouter([
        {
          path:'/',
          element:<Main></Main>,
          children:[
            {
              path:'/',
              loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz'),
              element:<Home></Home>
            },
            {
              path:'blog',
              element:<Blogs></Blogs>
            },
            {
              path:'/quiz/:id',
              loader:async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
              element:<Quiz></Quiz>
            }
          ]
        }
  ]);
  return (
    <div className='bgcolor'>
     <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
