import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './component/Home/Home';
import Blogs from './Blogs/Blogs';

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
