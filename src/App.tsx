import { BrowserRouter as Router, Routes, Route } from "react-router";
import PageTitle from "./components/PageTitle";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Authentications/Login";
import "./index.css";
import "./app.css"
import AccountDetail from "./pages/AccountDetail/AccountDetail";
import EditAccount from "./pages/AccountDetail/[id]/EditAccount";
import Package from "./pages/Package/Package";
import PackageCover from "./pages/Package/AddPackage/PackageCover";
import PackageFasility from "./pages/Package/AddPackage/PackageFasility";
import DetailHotel from "./pages/Package/AddPackage/DetailHotel";
import TravelDuration from "./pages/Package/AddPackage/TravelDuration";
import PreviewPackage from "./pages/Package/AddPackage/PreviewPackage";
import Promo from "./pages/Package/Promo";

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
            path="/AccountDetail/:id"
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
          <Route
            path="/Package/AddPackage/DetailHotel"
            element={
              <>
                <PageTitle title="PT CBL" />

                <DetailHotel />
              </>
            }
          />
          <Route
            path="/Package/AddPackage/TravelDuration"
            element={
              <>
                <PageTitle title="PT CBL" />

                <TravelDuration />
              </>
            }
          />
          <Route
            path="/Package/AddPackage/PreviewPackage"
            element={
              <>
                <PageTitle title="PT CBL" />

                <PreviewPackage />
              </>
            }
          />
          <Route
            path="/Package/Promo"
            element={
              <>
                <PageTitle title="PT CBL" />

                <Promo />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}
