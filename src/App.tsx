import { Route, Routes } from "react-router-dom";
import React from "react";

import "./scss/app.scss";
import Home from "./pages/Home";
import Main from "./components/Layouts/Main";

const Cart = React.lazy(
  () => import(/*webpackChunkName: "Cart"*/ "./pages/Cart")
);
const NotFound = React.lazy(
  () => import(/*webpackChunkName: "NotFound"*/ "./pages/NotFound")
);

function App() {
  return (
    <React.Suspense fallback={<div>Идет загрузка</div>}>
      <Routes>
        <Route element={<Main />} path="/">
          <Route element={<Home />} path="/" />
          <Route element={<Cart />} path="/cart" />
          <Route element={<NotFound />} path="*" />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
