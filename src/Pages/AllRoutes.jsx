import { Routes, Route} from "react-router-dom";
import Home from "./Home";
import Posts from "./Posts";
// import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
    return (
      <>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          {/* <Route path="/posts" element={
           <PrivateRoute to="/">
          <Posts />
          </PrivateRoute>
          } /> */}
        
        </Routes>
          </>
          )
          }
    export default AllRoutes;      