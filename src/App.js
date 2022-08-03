import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./containers/HomePage";
import ProductListPage from "./containers/ProductListPage";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Homepage></Homepage>}></Route>
        <Route
          path="/:slug"
          element={<ProductListPage></ProductListPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
