import { BrowserRouter as Router, Routes, Route } from "react-router";
import PageTitle from "./components/PageTitle";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Authentications/Login";
import "./index.css";
import "./app.css"
import AccountDetail from "./pages/AccountDetail/AccountDetail";
import EditAccount from "./pages/AccountDetail/EditAccount/EditAccount";
import Package from "./pages/Package/Package";
import PackageCover from "./pages/Package/AddPackage/PackageCover";
import PackageFasility from "./pages/Package/AddPackage/PackageFasility";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <PageTitle title="PT CBL" />

                <HomePage />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <PageTitle title="PT CBL" />

                <Login />
              </>
            }
          />
            <Route
            path="/AccountDetail"
            element={
              <>
                <PageTitle title="PT CBL" />

                <AccountDetail />
              </>
            }
          />
           <Route
            path="/AccountDetail/EditAccountDetail"
            element={
              <>
                <PageTitle title="PT CBL" />

                <EditAccount />
              </>
            }
          />
          <Route
            path="/Package"
            element={
              <>
                <PageTitle title="PT CBL" />

                <Package />
              </>
            }
          />
           <Route
            path="/Package/AddPackage"
            element={
              <>
                <PageTitle title="PT CBL" />

                <PackageCover />
              </>
            }
          />
           <Route
            path="/Package/AddPackage/Fasility"
            element={
              <>
                <PageTitle title="PT CBL" />

                <PackageFasility />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
