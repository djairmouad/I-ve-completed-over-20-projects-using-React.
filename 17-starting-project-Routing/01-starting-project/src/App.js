import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetail from './pages/ProductDetail';
 
// const routeDefinitions=createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>}></Route>
//     <Route path='/products' element={<ProductsPage/>}></Route>
//   </Route>
// )
// const router=createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {path:"/",element:<RootLayout/>,errorElement:<ErrorPage/>,children:[
    {index:true, path: "/", element: <HomePage /> },
  {path:"/products",element: <ProductsPage />},
  {path:"/products/:id",element: <ProductDetail />}
  ]}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
