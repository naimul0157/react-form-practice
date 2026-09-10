
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
// import App from './App.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Children from './components/Children/Children.jsx';
import Teachers from './components/Teachers/Teachers.jsx';
import ProductManagement from './components/ProductManagement/ProductManagement.jsx';
import FamilyTree from './components/FamilyTree/FamilyTree.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      {
        path: 'children',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
        Component: Children
      },
      { path: 'teacher',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
        Component: FamilyTree },
      {
        path: 'product_management',
        Component: ProductManagement
      },
      {
        path: '*',
        element: <h3>404 error</h3>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>

)
