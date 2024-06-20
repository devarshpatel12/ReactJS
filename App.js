import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from  './components/Header';
import Body from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Restaurantmenu from './components/Restaurantmenu';
import {Provider} from "react-redux";
import Store from './utils/Store';
import Cart from './components/Cart';
const AppLayout = () => {
  return (
    <Provider store={Store}>
    <div className="app">
      <Header />
      <Outlet/>
    </div>
</Provider>
  );
};
const appRouter=createBrowserRouter([
{  path:"/",
element:<AppLayout/>,
children:[
  {
    path:"/",
    element:<Body/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {path:"/contact",
  element:<Contact/>
  },
  {path:"/restaurants/:resId",
  element:<Restaurantmenu/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
],
errorElement:<Error/>
},
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

