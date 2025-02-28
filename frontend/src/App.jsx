import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<UserLayout />}></Route>

        {/* User Layout */}
        {/* Home */}
        {/* Products */}

        <Route>{/* Admin Layout */}</Route>
      </Routes>

    </BrowserRouter>

  );
};
export default App;