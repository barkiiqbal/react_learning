import * as React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  unstable_useBlocker as useBlocker,
} from "react-router-dom";
import LifeCycle from "./lifecycle";
import Form, { UncontrolledForm } from "./form";
import List from "./list";
import { FormIqbal } from "./form/form.iqbal";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<LifeCycle />} />
      <Route path="form" element={<Form />} />
      <Route path="form/uncontrolled" element={<UncontrolledForm />} />
      <Route path="list" element={<List />} />
	  <Route path="form/iqbal/controlled" element={<FormIqbal />} />
    </Route>
  )
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
  return <RouterProvider router={router} />;
}

function Layout() {
  return (
    <>
      <nav style={{ display: "flex", backgroundColor: "blue", padding: "16px", justifyContent: "space-between", alignItems: "center" }}>
        <h3 style={{ color: 'greenyellow' }}>   Routing , Life Cycle, Form and List exmaple </h3>
        <div>
          <Link to="/">Life Cycle</Link>&nbsp;&nbsp;
          <Link to="/form">Form controlled</Link>&nbsp;&nbsp;
          <Link to="/form/uncontrolled">Form uncontrolled</Link>&nbsp;&nbsp;
          <Link to="/list">List</Link>&nbsp;&nbsp;
		  <Link to="/form/iqbal/controlled">Iqbal Controlled</Link>&nbsp;&nbsp;
        </div>
      </nav>
      <div style={{ backgroundColor:"lightblue", textAlign: "center", padding: "16px" }}>
        <Outlet />
      </div>


    </>
  );
}


