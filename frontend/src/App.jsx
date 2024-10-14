import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Bio from "./pages/Bio";
import Login from "./pages/user/Login";
import MainLayout from "./pages/MainLayout";
import SimpleLayout from "./pages/SimpleLayout";
import Register from "./pages/user/Register";
import CreateWork from "./pages/user/CreateWork";
import AdminLayout from "./pages/AdminLayout";
import AdminRightSide from "./components/AdminRightSide";
import Free from "./pages/Free";
import Secrets from "./pages/Secrets";
import Cards from "./pages/Cards";
import CardInfo from "./pages/CardInfo";
import Illustrations from "./pages/Illustrations";
import IllustrationInfo from "./pages/IllustrationInfo";
import Eskizs from "./pages/Eskizs";
import EskizInfo from "./pages/EskizInfo";
import AdminCards from "./pages/user/AdminCards";
import AdminEskizs from "./pages/user/AdminEskizs";
import AdminIllustrations from "./pages/user/AdminIllustrations";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <MainLayout theme={theme}>
              <Home />
            </MainLayout>
          }
        />

        <Route
          path="/bio"
          element={
            <MainLayout theme={theme}>
              <Bio />
            </MainLayout>
          }
        />

        <Route
          path="/illustrations"
          element={
            <MainLayout theme={theme}>
              <Illustrations />
            </MainLayout>
          }
        />
        <Route
          path="/illustrations/:id"
          element={
            <MainLayout theme={theme}>
              <IllustrationInfo />
            </MainLayout>
          }
        />
        <Route
          path="/cards"
          element={
            <MainLayout theme={theme}>
              <Cards />
            </MainLayout>
          }
        />
        <Route
          path="/cards/:id"
          element={
            <MainLayout theme={theme}>
              <CardInfo />
            </MainLayout>
          }
        />

        <Route
          path="/eskizs"
          element={
            <MainLayout theme={theme}>
              <Eskizs />
            </MainLayout>
          }
        />

        <Route
          path="/eskizs/:id"
          element={
            <MainLayout theme={theme}>
              <EskizInfo />
            </MainLayout>
          }
        />

        <Route
          path="/free"
          element={
            <MainLayout theme={theme}>
              <Free />
            </MainLayout>
          }
        />
        <Route
          path="/secrets"
          element={
            <MainLayout theme={theme}>
              <Secrets />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout theme={theme}>
              <Contact />
            </MainLayout>
          }
        />

        <Route
          path="/login"
          element={
            <SimpleLayout theme={theme}>
              <Login />
            </SimpleLayout>
          }
        />
        <Route
          path="/register"
          element={
            <SimpleLayout theme={theme}>
              <Register />
            </SimpleLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <AdminLayout theme={theme}>
                <AdminRightSide />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/create"
          element={
            <PrivateRoute>
              <AdminLayout theme={theme}>
                <CreateWork />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/admincards"
          element={
            <PrivateRoute>
              <AdminLayout theme={theme}>
                <AdminCards />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/adminillustrations"
          element={
            <PrivateRoute>
              <AdminLayout theme={theme}>
                <AdminIllustrations />
              </AdminLayout>
            </PrivateRoute>
          }
        />

        <Route
          path="/admineskizs"
          element={
            <PrivateRoute>
              <AdminLayout theme={theme}>
                <AdminEskizs />
              </AdminLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/*"
          element={
            <MainLayout theme={theme}>
              <NotFound />
            </MainLayout>
          }
        />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
