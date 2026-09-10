
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
// import App from './App.jsx';
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Children from './components/Children/Children.jsx';
import Teachers from './components/Teachers/Teachers.jsx';
import HookForm from './components/HookForm.jsx/HookForm.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HookForm },
      {
        path: 'children',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()),
        Component: Children
      },
      { path: 'teacher',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()),
        Component: Teachers },
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
