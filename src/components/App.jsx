import { lazy, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { checkLogin } from "../redux/auth/auth-operations";
import { PrivateRoute } from "./PrivateRoute";
import { SharedLayout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Shop = lazy(() => import("../pages/Shop/Shop"));
const Cart = lazy(() => import("../pages/Cart/Cart"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const ComingSoon = lazy(() => import("../pages/ComingSoon/ComingSoon"));

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="brand" element={<ComingSoon />} />
        <Route path="contacts" element={<ComingSoon />} />
        <Route
          path="cart"
          element={<PrivateRoute redirectTo="/" component={<Cart />} />}
        />
        <Route
          path="profile"
          element={<PrivateRoute redirectTo="/" component={<Profile />} />}
        />
      </Route>
      <Route path="*" element={<h1>NotFound</h1>} />
    </Routes>
  );
};

export default App;
