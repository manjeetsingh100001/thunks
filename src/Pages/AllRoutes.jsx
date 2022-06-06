import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
import PrivateRoute from "./PrivateRoute";
function AllRoutes() {
    return (
      <>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={
           <PrivateRoute to="/">
          <Posts />
          </PrivateRoute>
          } />
          <Route
          path="/users"
          element={
            <PrivateRoute to="/login">
              <Users />
            </PrivateRoute>
          }
        >
        </Routes>
          </>
          )
          }
    export default AllRoutes;      