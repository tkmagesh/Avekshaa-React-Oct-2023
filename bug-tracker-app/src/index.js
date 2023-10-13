import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store'
import Bugs from './bugs';
import Projects from './projects';
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function HomeComponent(){
  return (
    <>
    <h3>Home</h3>
    <div>Eu cupidatat veniam fugiat cillum tempor duis minim cillum laborum qui cupidatat magna aliquip pariatur. Tempor officia labore exercitation nostrud quis sint esse pariatur. Cillum labore anim fugiat enim ad incididunt. Nostrud sunt nisi laboris ipsum aliqua. Nisi sunt occaecat duis esse qui.</div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeComponent/>,
  },
  {
    path: "/bugs",
    element : <Bugs/>
  },
  {
    path : "/projects",
    element : <Projects/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>Bug Tracker</h1>
      <hr/>
      <div>
        <span> [ <a href={`/bugs`}>Bugs</a> ] </span>
        <span> [ <a href={`/projects`}>Projects</a> ] </span>
      </div>
      <RouterProvider router={router} >
    </RouterProvider>
    </Provider>

  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
